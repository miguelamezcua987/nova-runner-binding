"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Services />
      <FeaturedProjects />
      <WhyChooseUs />
      <ServiceAreas />
      <EstimateForm />
    </main>
  );
}

function Hero() {
  return (
    <section
      className="relative px-6 py-28 md:py-40 bg-cover bg-center"
      style={{
        backgroundImage: "url('/projects/hero-binding.jpg')",
      }}
    >
      {/* dark overlay improves text readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto max-w-5xl text-center text-white">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-200">
          Nova Runner & Binding Co.
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
          Custom Stair Runners & Carpet Binding in Northern Virginia
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-200">
          Locally crafted stair runners, hallway runners, and custom rug binding
          for homes across Arlington, Fairfax, Alexandria, and surrounding areas.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#estimate-form"
            className="rounded-xl bg-white px-6 py-3 text-black font-medium transition hover:opacity-90"
          >
            Request Estimate
          </a>

          <a
            href="#services"
            className="rounded-xl border border-white px-6 py-3 transition hover:bg-white hover:text-black"
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
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-start">
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
    "Reston",
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

function EstimateForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service_type: "",
    zipcode: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatusMessage("");
  
    if (!form.phone.trim() && !form.email.trim()) {
      setStatusMessage("Please provide either a phone number or an email address.");
      return;
    }
  
    setIsSubmitting(true);
  
    const { error } = await supabase.from("leads").insert([
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        service_type: form.service_type,
        zipcode: form.zipcode,
        message: form.message,
        language: "en",
      },
    ]);
  
    if (error) {
      setStatusMessage("Something went wrong. Please try again.");
      setIsSubmitting(false);
      return;
    }
  
    await fetch("/api/send-confirmation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        serviceType: form.service_type,
        zipcode: form.zipcode,
        message: form.message,
      }),
    });
  
    setStatusMessage("Thanks! We received your request and will reach out within 24 hours. If you have photos of your stairs or space, replying to our confirmation email helps us prepare your estimate faster.");
    setForm({
      name: "",
      phone: "",
      email: "",
      service_type: "",
      zipcode: "",
      message: "",
    });
    setIsSubmitting(false);
  }

  return (
    <section id="estimate-form" className="px-6 py-24">
      <div className="mx-auto max-w-4xl rounded-3xl bg-black px-8 py-12 text-white">
        <h2 className="text-3xl font-bold md:text-4xl">Request an Estimate</h2>
        <p className="mt-4 max-w-2xl text-gray-300">
          Tell us about your staircase, runner, or binding needs and we’ll get
          back to you with next steps.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid gap-4 md:grid-cols-2"
        >
          <select
            value={form.service_type}
            onChange={(e) => setForm({ ...form, service_type: e.target.value })}
            className="rounded-xl border border-gray-700 bg-black px-4 py-3 text-white md:col-span-2"
            required
          >
            <option value="">Select a service</option>
            <option value="Custom stair runner">Custom stair runner</option>
            <option value="Hallway runner">Hallway runner</option>
            <option value="Carpet binding">Carpet binding</option>
            <option value="Area rug resizing">Area rug resizing</option>
            <option value="Runner repair or replacement">Runner repair or replacement</option>
            <option value="Need help choosing">Need help choosing</option>
          </select>

          <input
            type="tel"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="rounded-xl border border-gray-700 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400"
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="rounded-xl border border-gray-700 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400"
          />

          <input
            type="text"
            placeholder="ZIP Code"
            value={form.zipcode}
            onChange={(e) => setForm({ ...form, zipcode: e.target.value })}
            className="rounded-xl border border-gray-700 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400"
          />

          <input
            type="text"
            placeholder="Service Needed"
            value={form.service_type}
            onChange={(e) => setForm({ ...form, service_type: e.target.value })}
            className="rounded-xl border border-gray-700 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 md:col-span-2"
          />

          <textarea
            placeholder="Tell us about your project"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="min-h-32 rounded-xl border border-gray-700 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 md:col-span-2"
          />

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-100 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </div>

            <p className="md:col-span-2 text-sm text-gray-300">
              Please provide at least one way for us to reach you: phone or email.
            </p>

          {statusMessage ? (
            <p className="md:col-span-2 text-sm text-gray-300">
              {statusMessage}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold md:text-4xl">Recent Projects</h2>
          <p className="mt-4 text-gray-600">
            A look at recent stair runner, hallway runner, and carpet binding
            work across Northern Virginia.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ProjectCard
            img="/projects/stair-runner-installation.png"
            title="Custom Stair Runner"
            location="Northern Virginia"
          />
          <ProjectCard
            img="/projects/hallway-runner-installation.png"
            title="Hallway Runner Installation"
            location="Northern Virginia"
          />
          <ProjectCard
            img="/projects/carpet-binding-installation.png"
            title="Custom Carpet Binding"
            location="Northern Virginia"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  img,
  title,
  location,
}: {
  img: string;
  title: string;
  location: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <img
        src={img}
        alt={title}
        className="h-72 w-full object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600">{location}</p>
      </div>
    </div>
  );
}