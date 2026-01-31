import { Container } from "./Container";
import { Section } from "./Section";

export const HeroSection = () => {
  return (
    <Section className="relative text-white text-center bg-[url('/rmkt-hero-bg.webp')] bg-cover bg-top">
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute bottom-0 left-0 right-0 h-2/3 md:h-1/2 bg-linear-to-t from-black to-transparent" />
      <Container className="relative">
        <div className="max-w-3xl md:max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl">
            Você recebeu o convite para a conversa séria com o GG sobre trading
            com IA...
          </p>
          <h1 className="mt-4 text-4xl md:text-4xl font-semibold">
            mas ignorou.
          </h1>

          <h2 className="mt-8 md:mt-12 text-2xl md:text-3xl text-balance text-error max-w-2xl mx-auto">
            E talvez isso custe mais caro do que qualquer stop que você já
            tomou.
          </h2>

          <p className="mt-8 md:mt-12 text-xl md:text-2xl text-balance">
            O maior inimigo do trader hoje não é o mercado, mas sim a{" "}
            <span className="underline decoration-neutral-content underline-offset-4">
              armadilha do uso da IA sem responsabilidade.
            </span>
          </p>

          <p className="mt-4 text-xl md:text-2xl text-balance">
            Eu vou abrir o jogo e mostrar por que muita gente vai quebrar
            achando que está sendo “moderna”.
          </p>

          <div className="my-12 rounded-xl border border-dashed border-neutral-content/30 bg-neutral-900/50 p-6 backdrop-blur-sm max-w-md mx-auto">
            <p className="text-xl font-medium">Pronunciamento ao vivo</p>
            <div className="mt-4 flex items-center justify-center gap-3 text-brand-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v7.5"
                />
              </svg>
              <span className="text-2xl md:text-3xl">02/FEV, 20h</span>
            </div>
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <p className="text-lg">
              Antes de deixar essa chance passar, deixa eu te mostrar...
            </p>
            <a href="#motivos" className="mt-4 inline-block animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-10 w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};
