export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold animate-pulse">
          We Secure Your Digital Future
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          Enterprise-grade Vulnerability Assessment & Penetration Testing
          to protect applications, APIs, cloud, and infrastructure.
        </p>
        <a
          href="/contact"
          className="inline-block mt-8 bg-sky-400 text-black px-8 py-3 rounded font-medium"
        >
          Request a Quote
        </a>
      </div>
    </section>
  );
}
