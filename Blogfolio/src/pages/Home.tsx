import { Link, useOutletContext } from "react-router-dom";
import Expertise from "../components/Expertise";
import Aurora from "../components/Aurora";
import StackMarquee from "../components/StackMarquee";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Skeleton } from "../components/ui/skeleton";

type OutletContext = {
  isAtTop: boolean;
  language: "fr" | "en";
};

type GitHubProfile = {
  avatar_url: string;
};

const content = {
  fr: {
    discover: "Découvrir mon expertise",
    intro: "Salut, moi c’est",
    role: "Ingénieur informatique • Développeur Full-Stack",
    title: "J’aime construire des applications",
    highlight: "pensées pour évoluer.",
    description:
      "Je développe des interfaces soignées et des backends robustes avec Spring Boot, NestJS, React et Next.js.",
    projects: "Voir mes projets",
    blog: "Lire le blog",
  },
  en: {
    discover: "Discover my expertise",
    intro: "Hi, I’m",
    role: "Software Engineer • Full-Stack Developer",
    title: "I love building applications",
    highlight: "that scale.",
    description:
      "I craft polished interfaces and robust backends with Spring Boot, NestJS, React, and Next.js.",
    projects: "Explore my projects",
    blog: "Read the blog",
  },
};

async function fetchProfilePicture(signal: AbortSignal): Promise<string> {
  const { data } = await axios.get<GitHubProfile>(
    "https://api.github.com/users/euphorie7",
    { signal },
  );

  return data.avatar_url;
}

export default function Home() {
  const { isAtTop, language } = useOutletContext<OutletContext>();
  const text = content[language];

  const { data: avatarUrl, isPending } = useQuery({
    queryKey: ["github-avatar", "euphorie7"],
    queryFn: ({ signal }) => fetchProfilePicture(signal),
    staleTime: 60 * 60 * 1000, // Fraîches pendant 1 heure
    gcTime: 24 * 60 * 60 * 1000, // Cache inactif conservé 24 heures
  });
  console.log(avatarUrl);

  return (
    <div className=" flex flex-col w-full">
      <section
        lang={language}
        className="relative flex min-h-[94svh] w-full flex-col  justify-center items-center px-6 pb-16 pt-32 text-white sm:px-10"
      >
        {/* Back ground light pillar */}
        <div className="absolute inset-0  -z-10 overflow-hidden pointer-events-none">
          <Aurora
            colorStops={["#8367ff", "#463159", "#5227FF"]}
            blend={0.46}
            amplitude={1.0}
            speed={0.5}
          />
        </div>

        <a
          href="#expertise"
          tabIndex={isAtTop ? 0 : -1}
          aria-hidden={!isAtTop}
          className={`fixed left-1/2 top-24 z-40 flex -translate-x-1/2
          items-center gap-2 whitespace-nowrap text-sm tracking-wide
          text-white/75 transition-opacity duration-300 hover:text-white
          md:left-6 md:top-10 md:translate-x-0 lg:left-12
          ${isAtTop ? "opacity-100" : "pointer-events-none opacity-0"}`}
        >
          {text.discover}
          <span aria-hidden="true" className="motion-safe:animate-bounce">
            ↓
          </span>
        </a>

        <div className="hidden lg:block lg:absolute lg:top-[15%] lg:right-[15%] xl:top-[20%] xl:right-[20%]  rounded-full w-fit h-fit bg-black p-1.5">
          {isPending ? (
            <Skeleton
              aria-label={
                language === "fr" ? "Chargement de la photo" : "Loading photo"
              }
              className="h-28 w-28 rounded-full bg-violet-400/10 sm:h-32 sm:w-32 xl:h-52 xl:w-52"
            />
          ) : (
            <Avatar className="h-28 w-28 sm:h-32 sm:w-32 xl:h-52 xl:w-52">
              <AvatarImage
                src={avatarUrl}
                alt="Hamza Laouni"
                className="object-cover transition-transform duration-500 hover:scale-110 motion-reduce:transform-none"
              />
              <AvatarFallback className="bg-[#120F17] text-3xl font-semibold text-violet-300">
                HL
              </AvatarFallback>
            </Avatar>
          )}
        </div>

        <div className="flex  max-w-5xl flex-col  justify-center  text-start ">
          <p className="mb-10 text-xs uppercase tracking-[0.12em] text-white/50 sm:text-sm sm:tracking-[0.2em]">
            {text.role}
          </p>

          <p className="mb-5 text-base text-violet-300 sm:text-lg">
            {text.intro}{" "}
            <span className="font-medium text-white">Hamza Laouni.</span>
          </p>

          <h1 className="text-3xl font-semibold leading-tight text-whitetracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            {text.title}{" "}
            <span className="block bg-gradient-to-r from-violet-300 via-purple-300 to-sky-300 bg-clip-text pb-2 text-transparent">
              {text.highlight}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            {text.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full
              bg-white px-6 py-3 text-sm font-medium text-black
              transition duration-300 hover:bg-white/90
              hover:shadow-lg hover:shadow-violet-500/20"
            >
              {text.projects}
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
              >
                →
              </span>
            </Link>

            <Link
              to="/blog"
              className="rounded-full border border-white/20 px-6 py-3
              text-sm transition duration-300 hover:border-violet-400/50
              hover:bg-violet-400/10"
            >
              {text.blog}
            </Link>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-b from-transparent to-[#08060d]"
        />
      </section>

      <StackMarquee />
      <Expertise language={language} />
    </div>
  );
}
