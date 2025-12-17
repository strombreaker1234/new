import Header from "../components/Header";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-semibold">Security Services</h1>
        <p className="mt-4">
          PentestX delivers comprehensive VAPT services aligned with OWASP,
          NIST, and CERT-In guidelines.
        </p>
      </main>
    </>
  );
}
