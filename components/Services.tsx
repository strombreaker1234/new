export default function Services() {
  const services = [
    "Web Application VAPT",
    "API Security Testing",
    "Mobile Application VAPT",
    "Network & Infrastructure Testing",
    "Cloud Security Assessment",
    "Red Team & Adversary Simulation"
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {services.map((s) => (
          <div key={s} className="bg-white p-6 shadow rounded">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
