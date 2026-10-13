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
    title: "Je conçois des applications",
    highlight: "qui évoluent avec vos ambitions.",
    description:
      "Je développe des interfaces soignées et des backends robustes avec Spring Boot, NestJS, React et Next.js.",
    projects: "Voir mes projets",
    blog: "Lire le blog",
  },
  en: {
    discover: "Explore my expertise",
    intro: "Hi, I'm",
    role: "Software Engineer • Full-Stack Developer",
    title: "I build applications",
    highlight: "that grow with your ambitions.",
    description:
      "I craft elegant interfaces and robust, scalable backends using Spring Boot, NestJS, React, and Next.js.",
    projects: "Explore my projects",
    blog: "Read my blog",
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
    <div className=" flex w-full min-h-screen  min-w-0 flex-col">
      <section
        lang={language}
        className="relative flex min-h-screen w-full flex-col select-none  justify-center items-center px-6 pb-16 pt-32 text-white sm:px-10"
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

        

        <div className="w-full flex flex-col items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

              <p className="mb-8 text-xs uppercase tracking-[0.12em] text-white/50 sm:text-sm sm:tracking-[0.2em]">
                {text.role}
              </p>

              <p className="mb-5 text-base text-violet-300 sm:text-lg">
                {text.intro}{" "}
                <span className="font-medium text-white">
                  Hamza Laouni.
                </span>
              </p>

          {/* Titre et Avatar */}
          <div className="flow-root">

              <div className="float-right mr-[200px]" >
                <div className="rounded-full bg-black p-1.5">
                  {isPending ? (
                    <Skeleton
                      className="w-[17vw] h-[17vw] max-w-52 max-h-52 rounded-full bg-violet-400/10"
                    />
                  ) : (
                    <Avatar className="w-[17vw] h-[17vw] max-w-52 max-h-52">
                      <AvatarImage
                        src={avatarUrl}
                        alt="Hamza Laouni"
                        className="object-cover"
                      />
                      <AvatarFallback>HL</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </div>

              <h1 className="text-start text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                {text.title}{" "}
                <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-sky-300 bg-clip-text text-transparent">
                  {text.highlight}
                </span>
              </h1>

          </div>

            <p className="mt-6 text-base leading-relaxed text-white/60 ">
              {text.description}
            </p>

        </div>
        <div className=" mt-8 flex flex-wrap justify-center gap-4 ">
                <Link
                  to="/projects"
                  className="flex justify-center w-fit h-fit items-center gap-2 rounded-full
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
                  className="flex justify-center w-fit h-fit items-center rounded-full border border-white/20 px-6 py-3
                  text-sm transition duration-300 hover:border-violet-400/50
                  hover:bg-violet-400/10"
                >
                  {text.blog}
                </Link>
        </div>


      
      </section>

      <StackMarquee /> 
      <Expertise language={language} />
    </div>
  );
}
