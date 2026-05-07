'use client';

import { useState } from 'react';
import { content, Lang } from '@/lib/content';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import LiteratureSection from '@/components/LiteratureSection';
import MethodologySection from '@/components/MethodologySection';
import PlatformSection from '@/components/PlatformSection';
import ReferencesSection from '@/components/ReferencesSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useState<Lang>('zh');
  const t = content[lang];

  return (
    <main className="min-h-screen bg-white">
      <Navbar t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <IntroSection t={t} />
      <LiteratureSection t={t} />
      <MethodologySection t={t} />
      <PlatformSection t={t} />
      <ReferencesSection t={t} />
      <Footer t={t} />
    </main>
  );
}
