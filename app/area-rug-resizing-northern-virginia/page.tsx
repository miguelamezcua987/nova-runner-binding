import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Area Rug Resizing in Northern Virginia | Nova Runner & Binding",
  description:
    "Area rug resizing services across Northern Virginia. Convert existing carpet into custom-sized rugs and runners tailored to your home.",
};

export default function AreaRugResizingPage() {
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
            Area Rug Resizing in Northern Virginia
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            We help homeowners across Northern Virginia resize existing carpet
            and rug material into custom pieces that fit their rooms, hallways,
            and home layouts more naturally.
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
              Why Area Rug Resizing Matters
            </h2>
            <p className="mt-4 text-gray-600">
              Not every room works well with standard rug dimensions. Resizing
              gives you a more tailored solution so your piece fits the space,
              furniture layout, and traffic flow better.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <ul className="space-y-4 text-gray-700">
              <li>• Better fit for your room or hallway</li>
              <li>• More custom, intentional appearance</li>
              <li>• Make use of existing carpet material</li>
              <li>• Improve balance and proportion in the space</li>
              <li>• Create a piece that feels made for your home</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Our Rug Resizing Process
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">1. Measure the Goal</h3>
              <p className="mt-3 text-gray-600">
                We review the dimensions and intended placement for the finished
                rug.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">2. Resize the Material</h3>
              <p className="mt-3 text-gray-600">
                The piece is adjusted to better fit the target size and layout.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">3. Finish the Piece</h3>
              <p className="mt-3 text-gray-600">
                We prepare the final rug so it feels more polished and ready for
                the space.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Common Resizing Needs
            </h2>
            <p className="mt-4 text-gray-600">
              Resizing is useful when a rug is too large, too small, or simply
              not shaped correctly for the space you want to improve.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <ul className="space-y-4 text-gray-700">
              <li>• Living room fit adjustments</li>
              <li>• Bedroom rug sizing</li>
              <li>• Entryway pieces</li>
              <li>• Hallway conversions</li>
              <li>• Repurposing leftover carpet material</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-4xl">Service Area</h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            We provide area rug resizing services across Northern Virginia,
            including Fairfax, Arlington, Alexandria, McLean, Vienna, Falls
            Church, and Reston.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-black px-8 py-12 text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            Request an Area Rug Resizing Estimate
          </h2>
          <p className="mt-4 max-w-2xl text-gray-300">
            Share your dimensions or project idea and we’ll follow up with next
            steps.
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