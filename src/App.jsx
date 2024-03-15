import { Suspense } from "react";
import Experience from "./canvas/Experience";
import Background from "./canvas/Background";
import { Header, LastSection, Section2, Section3, Section4, Section5, Section6 } from "./container";

function App() {
  return (
    <div className="main">
      <div className="h-screen w-full fixed top-0 z-10">
        <Suspense fallback={null}>
          <Background />
        </Suspense>
      </div>
      <div className="h-screen w-full fixed top-0 z-30">
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </div>
      <Header />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <LastSection />
    </div>
  );
}

export default App;
