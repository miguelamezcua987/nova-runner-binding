import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Carpet Binding Services in Northern Virginia | Nova Runner & Binding",
  description:
    "Professional carpet binding services in Northern Virginia including Fairfax, Arlington, Alexandria, McLean, Vienna, and Reston. Custom rug edging and finishing available.",
};

export default function CarpetBindingPage() {
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
            Carpet Binding in Northern Virginia
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            We provide custom carpet binding services for homeowners across
            Northern Virginia, helping transform carpet remnants and material
            into finished rugs, stair runners, and hallway runners with clean,
            tailored edges.
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
              What Carpet Binding Helps You Do
            </h2>
            <p className="mt-4 text-gray-600">
              Carpet binding is a great way to create a polished, custom look
              from carpet material that would otherwise remain unfinished. It is
              ideal for turning remnants into rugs, creating hallway pieces, or
              finishing a runner with a cleaner edge.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <ul className="space-y-4 text-gray-700">
              <li>• Turn carpet into a finished rug or runner</li>
              <li>• Create cleaner, more professional edges</li>
              <li>• Customize pieces for stairways and hallways</li>
              <li>• Improve presentation and usability</li>
              <li>• Get more value out of existing material</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Our Carpet Binding Process
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">1. Project Review</h3>
              <p className="mt-3 text-gray-600">
                We learn what type of piece you want to create and how it will
                be used in your home.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">2. Sizing & Finish</h3>
              <p className="mt-3 text-gray-600">
                We determine the right dimensions and edge treatment for a clean
                finished result.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">3. Final Delivery</h3>
              <p className="mt-3 text-gray-600">
                Your carpet piece is finished with a more polished, custom look
                ready for use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Great Uses for Carpet Binding
            </h2>
            <p className="mt-4 text-gray-600">
              Carpet binding works well for homeowners who want a more custom
              solution without settling for generic off-the-shelf sizes.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <ul className="space-y-4 text-gray-700">
              <li>• Stair runner finishing</li>
              <li>• Hallway runner creation</li>
              <li>• Custom area rugs</li>
              <li>• Entryway pieces</li>
              <li>• Finishing carpet remnants</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-4xl">Service Area</h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            We provide carpet binding services across Northern Virginia,
            including Fairfax, Arlington, Alexandria, McLean, Vienna, Falls
            Church, and Reston.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-black px-8 py-12 text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            Request a Carpet Binding Estimate
          </h2>
          <p className="mt-4 max-w-2xl text-gray-300">
            Tell us about your project and we’ll follow up with next steps.
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