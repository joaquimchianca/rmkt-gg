import { Form } from "./Form";
import { Section } from "./Section";
import { Container } from "./Container";

export default function Footer() {
  return (
    <Section className="relative w-full overflow-hidden bg-black/50">
      {/* Conteúdo Principal */}
      <Container className="relative">
        <div className="text-white flex flex-col md:flex-row md:items-center justify-between">
          <div className="space-y-6 md:max-w-2xl text-center md:text-left">
            {/* Título */}
            <h1 className="text-4xl font-extrabold drop-shadow-lg tracking-tighter uppercase leading-tight space-y-2">
              Pronunciamento do GG Trader <br />
              <span className="text-brand-primary">ao vivo</span>
            </h1>

            {/* Subtítulo como Lista */}
            <div className="w-full mx-auto">
              <ul className="ml-8 space-y-2 text-lg md:text-xl text-gray-200 font-light drop-shadow-md list-none">
                <li className="flex items-center justify-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                  Algoritmo aberto
                </li>
                <li className="flex items-center justify-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                  Números reais
                </li>
                <li className="flex items-center justify-start gap-2 text-left leading-tight">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                  Responsabilidade, seriedade e profissionalismo
                </li>
              </ul>
            </div>

            {/* Calendário */}
            <div className="mt-8 flex items-center md:justify-start justify-center gap-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-brand-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v7.5"
                />
              </svg>
              <span className="text-2xl font-semibold">02/FEV, às 20h</span>
            </div>
          </div>

          {/* Formulário */}
          <div className="md:max-w-md mx-auto md:mx-0">
            <div className="block mt-12">
              <Form />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
