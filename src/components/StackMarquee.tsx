import { useEffect, useRef, useState } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNestjs,
  SiSpringboot,
  SiPostgresql,
  SiDocker,
  SiTailwindcss,
  SiKubernetes,
  SiJenkins,
  SiJfrog,
  SiGithubactions,
  SiApachekafka,
  SiReactquery,
} from "react-icons/si";

const stack = [
  { name: "NestJS", Icon: SiNestjs },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Docker", Icon: SiDocker },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "Kafka", Icon: SiApachekafka },
  { name: "Jenkins", Icon: SiJenkins },
  { name: "TanStack Query", Icon: SiReactquery },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Java", Icon: FaJava },
  { name: "Spring Boot", Icon: SiSpringboot },
  { name: "JFrog", Icon: SiJfrog },
  { name: "GitHub Actions", Icon: SiGithubactions },
];
export default function StackMarquee() {
  const copyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);

  const [copies, setCopies] = useState<number>(2);

  useEffect(() => {
    const updateCopies = () => {
      const copyWidth = copyRef.current?.offsetWidth;
      if (!copyWidth) return;

      setCopies(Math.max(1, Math.ceil(window.innerWidth / copyWidth) + 1));
    };

    updateCopies();

    window.addEventListener("resize", updateCopies);

    return () => window.removeEventListener("resize", updateCopies);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const copy = copyRef.current;
    if (!track || !copy) return;

    const copyWidth = copy.offsetWidth;
    const animation = track.animate(
      [
        { transform: "translateX(0)" },
        { transform: `translateX(-${copyWidth}px)` },
      ],
      {
        duration: 30000,
        iterations: Infinity,
        easing: "linear",
      },
    );

    animationRef.current = animation;

    return () => {
      animation.cancel();
      animationRef.current = null;
    };
  }, []);

  return (
    <div
      className="overflow-hidden border-y z-10 border-white/10 bg-white/[0.02] py-7 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      onMouseEnter={() => animationRef.current?.pause()}
      onMouseLeave={() => animationRef.current?.play()}
    >
      <div ref={trackRef} className="flex w-max">
        {Array.from({ length: copies }).map((_, index) => (
          <div
            key={index}
            ref={index === 0 ? copyRef : undefined}
            aria-hidden={index > 0 ? true : undefined}
            className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
          >
            {stack.map(({ name, Icon }) => (
              <div
                key={name}
                className="flex items-center gap-3 text-white/50 transition-colors hover:text-violet-300"
              >
                <Icon size={28} aria-hidden="true" />
                <span className="whitespace-nowrap text-sm font-medium">
                  {name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
