export const subscribeUser = async (name: string, email: string, phone:string) => {
  return import.meta.env.DEV
  ? subscribeUserDevelopment(name, email, phone)
  : subscribeUserProduction(name, email, phone)
}

const subscribeUserProduction = async (name: string, email: string, phone: string) => {
  const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name, email, phone })
    })

    if (!response.ok) throw new Error('Falha na integração em produção')
    return response.json()
}

const subscribeUserDevelopment = async (name: string, email: string, phone: string) => {
  const apiKey = import.meta.env.VITE_ACTIVE_CAMPAIGN_KEY
  const listId = import.meta.env.VITE_ACTIVE_CAMPAIGN_LIST_ID

  try {
    // PASSO 1: Criar ou Atualizar o Contato
    const contactResponse = await fetch('/api-ac/api/3/contact/sync', {
      method: 'POST',
      headers: {
        'Api-Token': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contact: {
          email,
          firstName: name,
          phone
        }
      })
    });

    const contactData = await contactResponse.json();

    if (!contactResponse.ok || !contactData.contact) {
      throw new Error('Falha ao criar contato no Active Campaign');
    }

    const contactId = contactData.contact.id;

    // PASSO 2: Vincular o Contato à Lista (ID 7)
    const listResponse = await fetch('/api-ac/api/3/contactLists', {
      method: 'POST',
      headers: {
        'Api-Token': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contactList: {
          list: listId,
          contact: contactId,
          status: 1 // 1 = Subscribed (Inscrito)
        }
      })
    });

    if (!listResponse.ok) {
      throw new Error('Falha ao adicionar contato à lista');
    }

    return { success: true };
  } catch (error) {
    console.error("Erro na integração:", error);
    throw error;
  }
}