// frontend/src/app/services/ai-development/page.js

'use client';
import React from 'react';
import SeamlessSection from '@/components/SeamlessSection'; // Adjust path if needed
import { useRouter } from 'next/navigation';

export default function AIDevelopmentPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#050d1b] text-white px-4 py-8">
      <button
        className="mb-6 text-blue-400 hover:underline"
        onClick={() => router.back()}
      >
        ← Back
      </button>
      <SeamlessSection />
    </div>
  );
}
