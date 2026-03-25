import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Custom Stair Runners in Northern Virginia | Nova Runner & Binding",
  description:
    "Custom stair runner installation in Northern Virginia, including Fairfax, Arlington, Alexandria, McLean, Vienna, and Reston. Request a fast estimate from Nova Runner & Binding.",
};

export default function StairRunnersNorthernVirginiaPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-300">
            Nova Runner &amp; Binding
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Custom Stair Runners in Northern Virginia
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            We design and install custom stair runners for homeowners across
            Northern Virginia, helping bring warmth, traction, and a more
            finished look to your staircase.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/#estimate-form"
              className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-100"
            >
              Request Estimate
            </a>
            <Link
              href="/"
              className="rounded-xl border border-white px-6 py-3 transition hover:bg-white hover:text-black"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Why Homeowners Choose Stair Runners
            </h2>
            <p className="mt-4 text-gray-600">
              A custom stair runner adds style and function to one of the most
              used areas of the home. It can soften the look of a staircase,
              improve grip underfoot, and help protect stair surfaces from wear.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <ul className="space-y-4 text-gray-700">
              <li>• More traction and comfort on stairs</li>
              <li>• A custom look that fits your home’s style</li>
              <li>• Protection for wood stair surfaces</li>
              <li>• Cleaner, more finished visual presentation</li>
              <li>• Tailored sizing for your specific staircase</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Our Custom Stair Runner Process
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">1. Consultation</h3>
              <p className="mt-3 text-gray-600">
                We learn about your staircase, style preferences, and project
                goals.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">2. Runner Planning</h3>
              <p className="mt-3 text-gray-600">
                We determine the right fit, layout, and finish for your stair
                runner project.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">3. Installation</h3>
              <p className="mt-3 text-gray-600">
                Your runner is installed with attention to detail and a clean,
                tailored result.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Stair Runner Styles We Help With
            </h2>
            <p className="mt-4 text-gray-600">
              Every home is different, and stair runners can be customized to
              complement modern, classic, neutral, or bold interior styles.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <ul className="space-y-4 text-gray-700">
              <li>• Straight staircases</li>
              <li>• Hall-to-stair transitions</li>
              <li>• Patterned runner looks</li>
              <li>• Neutral and minimalist aesthetics</li>
              <li>• Custom-finished edges and sizing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Service Area for Stair Runners
          </h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            We provide custom stair runner service across Northern Virginia,
            including Arlington, Fairfax, Alexandria, McLean, Vienna, Falls
            Church, and Reston.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Arlington",
              "Fairfax",
              "Alexandria",
              "McLean",
              "Vienna",
              "Falls Church",
              "Reston",
            ].map((city) => (
              <span
                key={city}
                className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-black px-8 py-12 text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            Request a Stair Runner Estimate
          </h2>
          <p className="mt-4 max-w-2xl text-gray-300">
            Tell us about your staircase and what kind of runner look you have
            in mind. We’ll reach out with next steps.
          </p>

          <div className="mt-8">
            <a
              href="/#estimate-form"
              className="inline-block rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-100"
            >
              Go to Estimate Form
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}