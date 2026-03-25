import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hallway Runners in Northern Virginia | Nova Runner & Binding",
  description:
    "Custom hallway runner installation in Northern Virginia including Arlington, Fairfax, Alexandria, McLean, Vienna, and surrounding areas.",
};

export default function HallwayRunnersPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-block rounded-xl border border-white px-4 py-2 text-sm transition hover:bg-white hover:text-black"
          >
            ← Back to Home
          </Link>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Hallway Runners in Northern Virginia
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            We create custom hallway runner solutions for homeowners across
            Northern Virginia who want more comfort, durability, and style in
            high-traffic areas of the home.
          </p>

          <div className="mt-8">
            <a
              href="/#estimate-form"
              className="inline-block rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-100"
            >
              Request Estimate
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Why Hallway Runners Are Popular
            </h2>
            <p className="mt-4 text-gray-600">
              Hallway runners help soften hard surfaces, improve comfort, and
              bring a more finished visual flow to long or frequently used
              spaces.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <ul className="space-y-4 text-gray-700">
              <li>• Better durability in high-traffic areas</li>
              <li>• Added comfort underfoot</li>
              <li>• A more custom and polished look</li>
              <li>• Better visual flow through the home</li>
              <li>• Tailored sizing for long or narrow spaces</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Our Hallway Runner Process
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">1. Layout Review</h3>
              <p className="mt-3 text-gray-600">
                We learn about the space, measurements, and look you want to
                achieve.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">2. Runner Planning</h3>
              <p className="mt-3 text-gray-600">
                We determine the right approach for sizing, flow, and finish.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">3. Finished Result</h3>
              <p className="mt-3 text-gray-600">
                Your hallway runner is prepared for a cleaner and more tailored
                presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Where Hallway Runners Work Best
            </h2>
            <p className="mt-4 text-gray-600">
              These runners are especially helpful in spaces that get regular
              foot traffic and benefit from a more intentional design touch.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <ul className="space-y-4 text-gray-700">
              <li>• Long hallways</li>
              <li>• Entry corridors</li>
              <li>• Upstairs connecting spaces</li>
              <li>• Transitional walkways</li>
              <li>• Narrow areas needing custom sizing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-4xl">Service Area</h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            We provide hallway runner services across Northern Virginia,
            including Arlington, Fairfax, Alexandria, McLean, Vienna, Falls
            Church, and Reston.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-black px-8 py-12 text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            Request a Hallway Runner Estimate
          </h2>
          <p className="mt-4 max-w-2xl text-gray-300">
            Tell us about your hallway or traffic area and we’ll follow up with
            next steps.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/#estimate-form"
              className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-100"
            >
              Go to Estimate Form
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
    </main>
  );
}