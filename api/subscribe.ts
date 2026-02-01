import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== "POST") {
    return response.status(405).send("Method Not Allowed");
  }

  try {
    const { name, email, phone } = request.body;
    const AC_URL = process.env.ACTIVE_CAMPAIGN_URL;
    const AC_KEY = process.env.ACTIVE_CAMPAIGN_KEY;
    const LIST_ID = process.env.ACTIVE_CAMPAIGN_LIST_ID;

    if (!AC_URL || !AC_KEY || !LIST_ID) {
      throw new Error("Uma ou mais variáveis de ambiente do ActiveCampaign não foram configuradas no ambiente de produção.");
    }

    // 1. Sincronizar Contato
    const contactRes = await fetch(`${AC_URL}/api/3/contact/sync`, {
      method: "POST",
      headers: {
        "Api-Token": AC_KEY,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        contact: { email, firstName: name, phone },
      }),
    });

    if (!contactRes.ok) {
      const errorBody = await contactRes.text();
      console.error("Erro ao sincronizar contato:", errorBody);
      throw new Error(`Erro ao sincronizar contato no Active Campaign: ${contactRes.status}`);
    }

    const contactData = await contactRes.json();
    const contactId = contactData?.contact?.id;

    if(!contactId) {
        throw new Error(`API do ActiveCampaign não retornou um ID de contato. Resposta: ${JSON.stringify(contactData)}`);
    }

    // 2. Adicionar à Lista
    const listRes = await fetch(`${AC_URL}/api/3/contactLists`, {
      method: "POST",
      headers: {
        "Api-Token": AC_KEY,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        contactList: {
          list: LIST_ID,
          contact: contactId,
          status: 1,
        },
      }),
    });

    if (!listRes.ok) {
      const errorBody = await listRes.text();
      console.error("Erro ao adicionar contato à lista:", errorBody);
      throw new Error(`Erro ao adicionar contato à lista: ${listRes.status}`);
    }

    return response.status(200).json({ success: true });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";
    console.error("Erro final na integração com o AC:", errorMessage);

    return response.status(500).json({
      error: "Erro interno na integração",
      detail: errorMessage,
    });
  }
}
