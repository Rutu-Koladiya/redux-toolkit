import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Boss Lady | Home</title>
        <meta name="description" content="Portfolio of Boss Lady" />
      </Head>
      <section className="flex flex-col md:flex-row items-center gap-10 min-h-[70vh]">
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold">Hi, I'm Rutu 👋</h2>
          <p className="text-lg text-gray-600">
            A Front-End Developer & Creative Mind Behind Boss Lady ✨
          </p>
          <div className="flex gap-4">
            <a href="/resume.pdf" target="_blank" className="bg-primary text-white px-4 py-2 rounded">Download Resume</a>
            <a href="/projects" className="border border-primary text-primary px-4 py-2 rounded">View Projects</a>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-64 h-64 object-cover rounded-full shadow-lg mx-auto border-4 border-primary"
          />
        </div>
      </section>
    </>
  );
}
