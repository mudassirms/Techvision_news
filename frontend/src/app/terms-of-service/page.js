"use client";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0f0c29] text-white py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">Terms of Service</h1>
        <p className="mb-4 text-gray-300">
          By accessing or using our website and services, you agree to be bound by the following terms and conditions.
        </p>

        <h2 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">1. Use of Services</h2>
        <p className="text-gray-300 mb-4">
          You agree to use our services only for lawful purposes and in accordance with these terms.
        </p>

        <h2 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">2. Intellectual Property</h2>
        <p className="text-gray-300 mb-4">
          All content, trademarks, and intellectual property on our website belong to Maverick Ignite LLP or our licensors.
        </p>

        <h2 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">3. User Responsibilities</h2>
        <p className="text-gray-300 mb-4">
          You are responsible for ensuring that your use of our services complies with applicable laws and regulations.
        </p>

        <h2 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">4. Limitation of Liability</h2>
        <p className="text-gray-300 mb-4">
          Maverick Ignite LLP is not liable for any damages arising from the use or inability to use our services.
        </p>

        <h2 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">5. Termination</h2>
        <p className="text-gray-300 mb-4">
          We reserve the right to suspend or terminate access to our services for violations of these terms.
        </p>

        <h2 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">6. Changes to Terms</h2>
        <p className="text-gray-300 mb-4">
          We may update these terms from time to time. Continued use of our services after changes means you accept the updated terms.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-block px-6 py-2 rounded-xl border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-[#0f0c29] transition duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
