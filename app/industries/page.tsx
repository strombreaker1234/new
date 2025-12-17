import Header from "../components/Header";

export default function Industries() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-semibold">Industries We Serve</h1>
        <ul className="mt-6 list-disc pl-6">
          <li>Finance & Banking</li>
          <li>SaaS & Technology</li>
          <li>Healthcare</li>
        </ul>
      </main>
    </>
  );
}
