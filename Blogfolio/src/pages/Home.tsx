import { Link } from "react-router-dom";

function Home() {

return (
    <section className=" px-6 pt-32 text-left text-white">
      <div className="mx-auto max-w-5xl">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/75">
          Software Engineer • Data Scientist • GenAI
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
          Je conçois des applications et des systèmes basés sur l'IA.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/60">
          Développement full-stack, architectures backend, LLMs, RAG et
          automatisation de processus métier.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/projects"
            className="rounded-full bg-white px-6 py-3 text-black transition hover:bg-white/80"
          >
            Voir mes projets
          </Link>

          <Link
            to="/blog"
            className="rounded-full border border-white/20 px-6 py-3 transition hover:bg-white/10"
          >
            Lire le blog
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Home;