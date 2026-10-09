import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import SquishSwitch from "../components/SquishSwitch";

function LayoutPage() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [language, setLanguage] = useState<"fr" | "en">("fr");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY < 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative   w-full  ">
      <div className="fixed top-10 right-10  z-[60]">
        <SquishSwitch
          id="language-switch"
          checked={language === "en"}
          onChange={(checked: boolean) => setLanguage(checked ? "en" : "fr")}
          ariaLabel="Changer de langue"
          label={language === "fr" ? "Switch to English" : "Passer en français"}
          trackColor="#3f3f46"
          trackOnColor="#8b5cf6"
          thumbColor="#d4d4d8"
          thumbOnColor="#ffffff"
          width={40}
          height={24}
          radius={19}
          speed={50}
          stretch={36}
          hoverScale={1.035}
          colorDuration={320}
        />
      </div>

      <NavBar
        className={`transition-all duration-300 ${isAtTop ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      <main className="relative flex  w-full z-10 justify-center items-center">
        <Outlet context={{ isAtTop, language }} />
      </main>
    </div>
  );
}

export default LayoutPage;
