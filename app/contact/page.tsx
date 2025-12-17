import Header from "@/components/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="max-w-xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-semibold">Request a Quote</h1>
        <form className="mt-8 space-y-4">
          <input className="w-full p-3 border" placeholder="Name" />
          <input className="w-full p-3 border" placeholder="Email" />
          <textarea className="w-full p-3 border" placeholder="Requirement"></textarea>
          <button className="bg-sky-400 px-6 py-3 rounded">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}
