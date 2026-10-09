import BorderGlow from "./BorderGlow";
import { PanelsTopLeft, Server, Layers } from "lucide-react";

type ExpertiseProps = {
  language: "fr" | "en";
};

const content = {
  fr: {
    cards: [
      {
        title: "Interfaces soignées",
        description:
          "Des interfaces claires, responsives et intuitives, conçues pour simplifier le quotidien des utilisateurs.",
        stack: "React • Next.js • TypeScript • Tailwind CSS",
      },
      {
        title: "Backends robustes",
        description:
          "Des API sécurisées et une logique métier structurée pour des applications fiables et faciles à maintenir.",
        stack: "Spring Boot • NestJS • PostgreSQL • Prisma",
      },
      {
        title: "Architectures évolutives",
        description:
          "Des systèmes modulaires qui facilitent l’ajout de fonctionnalités, le déploiement et la montée en charge.",
        stack: "Microservices • Docker • CI/CD • Kafka",
      },
    ],
  },
  en: {
    cards: [
      {
        title: "Polished interfaces",
        description:
          "Clear, responsive, and intuitive interfaces designed to make everyday tasks easier for users.",
        stack: "React • Next.js • TypeScript • Tailwind CSS",
      },
      {
        title: "Robust backends",
        description:
          "Secure APIs and well-structured business logic for reliable applications that are easy to maintain.",
        stack: "Spring Boot • NestJS • PostgreSQL • Prisma",
      },
      {
        title: "Scalable architectures",
        description:
          "Modular systems that make it easier to add features, deploy changes, and handle growing workloads.",
        stack: "Microservices • Docker • CI/CD • Kafka",
      },
    ],
  },
};

const icons = [PanelsTopLeft, Server, Layers];

export default function Expertise({ language }: ExpertiseProps) {
  const text = content[language];

  return (
    <section
      id="expertise"
      lang={language}
      aria-labelledby="expertise-title"
      className="relative w-full scroll-mt-24 px-6 py-20 text-white sm:px-10 lg:py-28"
    >
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
            {language === "fr" ? "Mon expertise" : "My expertise"}
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {language === "fr"
              ? "Des applications solides, de bout en bout."
              : "Solid applications, end to end."}
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {text.cards.map((card, index) => {
            const Icon = icons[index];

            return (
              <BorderGlow
                key={index}
                edgeSensitivity={50}
                glowColor="40 80 80"
                backgroundColor="#120F17"
                borderRadius={24}
                glowRadius={40}
                glowIntensity={0.7}
                coneSpread={25}
                animated={false}
                colors={["#c084fc", "#f472b6", "#38bdf8"]}
              >
                <article className="flex h-full min-h-[320px] flex-col p-7 text-left">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
                    <Icon size={24} aria-hidden="true" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {card.description}
                  </p>

                  <div className="mt-auto pt-7">
                    <p className="border-t border-white/10 pt-4 text-xs leading-relaxed text-violet-300/80">
                      {card.stack}
                    </p>
                  </div>
                </article>
              </BorderGlow>
            );
          })}
        </div>
      </div>
    </section>
  );
}
