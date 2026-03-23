export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Services />
      <WhyChooseUs />
      <ServiceAreas />
      <ContactCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Nova Runner &amp; Binding Co.
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
          Custom Stair Runners &amp; Carpet Binding in Northern Virginia
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Locally crafted stair runners, hallway runners, and custom rug binding
          for homes across Arlington, Fairfax, Alexandria, and surrounding areas.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90"
          >
            Request Estimate
          </a>
          <a
            href="#services"
            className="rounded-xl border border-gray-300 px-6 py-3 transition hover:bg-gray-50"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Custom Stair Runners",
      description:
        "Runner solutions tailored to your staircase, style, and home layout.",
    },
    {
      title: "Carpet Binding",
      description:
        "Clean, finished edges for custom rugs, runners, and hallway pieces.",
    },
    {
      title: "Area Rug Resizing",
      description:
        "Resize and reshape existing carpet into a custom piece for your space.",
    },
    {
      title: "Hallway Runners",
      description:
        "Durable, attractive hallway runners designed for fit and longevity.",
    },
  ];

  return (
    <section id="services" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold md:text-4xl">Our Services</h2>
          <p className="mt-4 text-gray-600">
            We focus on specialty runner and binding work that brings custom
            craftsmanship to your home.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const points = [
    "Custom craftsmanship with a specialty focus",
    "Cleaner, more tailored solutions than off-the-shelf options",
    "Local service across Northern Virginia",
    "Direct communication and personalized estimates",
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Why Homeowners Choose Us
          </h2>
          <p className="mt-4 text-gray-600">
            Nova Runner &amp; Binding Co. is built around specialty work that
            helps homeowners upgrade their spaces with clean finishes, custom
            sizing, and a more thoughtful look.
          </p>
        </div>

        <div className="rounded-2xl bg-gray-50 p-6">
          <ul className="space-y-4">
            {points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-black" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  const areas = [
    "Arlington",
    "Fairfax",
    "Alexandria",
    "Falls Church",
    "McLean",
    "Vienna",
  ];

  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold md:text-4xl">Service Areas</h2>
        <p className="mt-4 max-w-2xl text-gray-600">
          We serve homeowners across Northern Virginia and surrounding areas.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl rounded-3xl bg-black px-8 py-12 text-white">
        <h2 className="text-3xl font-bold md:text-4xl">
          Ready to start your project?
        </h2>
        <p className="mt-4 max-w-2xl text-gray-300">
          Tell us about your staircase, runner, or binding needs and we’ll get
          back to you with next steps.
        </p>

        <div className="mt-8">
          <a
            href="mailto:novarunnerbinding@gmail.com"
            className="inline-block rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-100"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}