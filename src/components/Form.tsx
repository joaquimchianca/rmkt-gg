import { useState, type ChangeEvent, type FormEvent } from "react";
import { subscribeUser } from "../service/activeCampaign";
import { useAppStore } from "../store/appStore";

interface FormProps {
  className?: string;
}

export const Form: React.FC<FormProps> = () => {
  const submitSuccess = useAppStore((state) => state.submitSuccess);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  // Validações
  const isPhoneValid = phone.replace(/\D/g, "").length === 11;
  const isNameValid = name.trim().length >= 3;
  const isEmailValid = email.includes("@") && email.includes(".");
  const isFormValid = isNameValid && isEmailValid && isPhoneValid;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) {
      setShowErrors(true);
      return;
    }

    setIsLoading(true);
    const rawPhone = phone.replace(/\D/g, "");

    try {
      await subscribeUser(name, email, rawPhone);
      submitSuccess();
    } catch (error) {
      console.error("Erro no formulário:", error);
      alert("Ocorreu um erro ao salvar seus dados. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
      value = value.replace(/(\d{5})(\d)/, "$1-$2");
    }
    setPhone(value.substring(0, 15));
  };

  const getInputClasses = (isValid: boolean) => {
    const baseClasses =
      "w-full bg-white/15 border rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none transition-all";
    const stateClasses =
      showErrors && !isValid
        ? "border-red-500/50 bg-red-500/10"
        : "border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50";
    return `${baseClasses} ${stateClasses}`;
  };

  return (
    <div className="relative group">
      {/* Primary Glow Effect */}
      <div className="absolute -inset-6 bg-primary/50 blur-[40px] md:blur-[80px] lg:blur-[100px] opacity-80 md:opacity-70 pointer-events-none gpu-glow transform-gpu will-change-transform"></div>

      {/* Glassmorphism Container */}
      <div className="relative border border-primary/40 hover:border-primary/60 transition-colors rounded-2xl p-6 shadow-2xl backdrop-blur-2xl bg-white/5">
        <p className="text-sm md:text-base mb-4 text-gray-100">
          Preencha os campos abaixo para garantir seu acesso:
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-2">
            <div className="space-y-1">
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={getInputClasses(isNameValid)}
              />
              {showErrors && !isNameValid && (
                <p className="text-red-500 text-[10px] uppercase font-bold tracking-wider pl-1">
                  Nome muito curto
                </p>
              )}
            </div>

            <div className="space-y-1">
              <input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={getInputClasses(isEmailValid)}
              />
              {showErrors && !isEmailValid && (
                <p className="text-red-500 text-[10px] uppercase font-bold tracking-wider pl-1">
                  E-mail inválido
                </p>
              )}
            </div>

            <div className="space-y-1">
              <input
                type="tel"
                placeholder="Whatsapp (DDD)"
                value={phone}
                onChange={handlePhoneInput}
                className={getInputClasses(isPhoneValid)}
                maxLength={15}
              />
              {showErrors && !isPhoneValid && (
                <p className="text-red-500 text-[10px] uppercase font-bold tracking-wider pl-1">
                  Número inválido (11 dígitos)
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full mt-2 font-bold py-4 rounded-full transition-all transform text-lg text-black gpu-glow transform-gpu
              ${
                !isLoading
                  ? "bg-accent hover:scale-[1.02] shadow-[0_0_25px_rgba(230,175,46,0.4)] cursor-pointer"
                  : "bg-gray-600 cursor-not-allowed opacity-50 grayscale"
              }`}
          >
            {isLoading ? "ENVIANDO..." : "QUERO PARTICIPAR"}
          </button>
        </form>
      </div>
    </div>
  );
};
