import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <div className="font-semibold text-xl">PentestX</div>
        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/contact" className="text-sky-400">Request a Quote</Link>
        </nav>
      </div>
    </header>
  );
}
