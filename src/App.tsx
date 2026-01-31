import { HeroSection } from "./components/HeroSection";
import { ReasonsSection } from "./components/ReasonsSection";
import ThankYou from "./components/ThankYou";
import { useAppStore } from "./store/appStore";

function App() {
  const isSubmitted = useAppStore((state) => state.isSubmitted);

  return (
    <div className="min-h-screen bg-base-100 text-base-content font-oxanium">
      {isSubmitted ? (
        <ThankYou />
      ) : (
        <>
          <HeroSection />
          <ReasonsSection />
        </>
      )}
    </div>
  );
}

export default App;