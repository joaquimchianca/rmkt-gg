const WhatsappIcon = () => (
  <svg
    className="w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

const ThankYou = () => {
  return (
    <div className="bg-[url('/thanks-bg-mobile.webp')] md:bg-[url('/thanks-bg.webp')] bg-cover bg-center min-h-screen flex items-center justify-center p-4">
      <div className="backdrop-blur-lg rounded-lg p-6 md:p-10 max-w-md w-full text-white/90 text-center border border-white/20">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Sua vaga está quase confirmada!
        </h1>

        {/* Progress Bar with Label */}
        <div className="my-8 relative">
            {(() => {
              const percentage = 80;

              return (
                <div className="relative w-full">
                  <div
                    className="absolute bottom-full mb-3 px-3 py-1 bg-brand-primary/70 text-white text-xs font-bold rounded-md transform -translate-x-1/2 flex flex-col items-center"
                    style={{ left: `${percentage}%` }}
                  >
                    {percentage}%
                    <div className="absolute top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-brand-primary/70"></div>
                  </div>

                  <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-primary transition-all duration-1000 ease-out"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })()}
        </div>

        <p className="mb-4 text-white/80">
          Agora o mais importante,{" "}
          <span className="text-white font-semibold">
            entre no grupo oficial dos inscritos
          </span>{" "}
          — é lá dentro que o GG vai:
        </p>
        <ul className="text-left mb-6 space-y-2 ml-4">
          <li className="flex items-center">
            <span className="text-brand-primary mr-3 font-bold text-xl">→</span>
            <span>Liberar os bastidores secretos da IA</span>
          </li>
          <li className="flex items-center">
            <span className="text-brand-primary mr-3 font-bold text-xl">→</span>
            <span>Enviar o link da transmissão ao vivo</span>
          </li>
        </ul>

        {/* CTA Button */}
        <a 
          href="https://chat.whatsapp.com/G4LjmNJ8vUo1GeyXIrweTn" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button
            className="w-full mt-2 font-bold py-4 rounded-full transition-all transform text-lg text-black bg-brand-accent hover:scale-[1.02] shadow-[0_0_25px_rgba(230,175,46,0.4)] cursor-pointer flex items-center justify-center"
          >
            <WhatsappIcon />
            <span className="ml-2">ENTRAR PARA O GRUPO OFICIAL</span>
          </button>
        </a>

        <div className="text-sm mt-4 text-white/80">
          <p className="font-semibold">⚠️ Atenção:</p>
          <p>
            Somente quem estiver no grupo vai receber o link para participar do
            encontro ao vivo
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
