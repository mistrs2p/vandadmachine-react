/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MachineryCatalog } from './components/MachineryCatalog';
import { EquipmentSizingCalculator } from './components/EquipmentSizingCalculator';
import { ProcessDiagram } from './components/ProcessDiagram';
import { AtomizerDeepDive } from './components/AtomizerDeepDive';
import { PowderProductsLab } from './components/PowderProductsLab';
import { ServicesSection } from './components/ServicesSection';
import { ExhibitionsAndGallery } from './components/ExhibitionsAndGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RFQModal } from './components/RFQModal';

export default function App() {
  const [lang, setLang] = useState<Language>('fa');
  const [isRFQOpen, setIsRFQOpen] = useState(false);
  const [rfqEquipment, setRfqEquipment] = useState<string>('');
  const [rfqFeed, setRfqFeed] = useState<number | undefined>(undefined);
  const [rfqEvap, setRfqEvap] = useState<number | undefined>(undefined);
  const [rfqPowder, setRfqPowder] = useState<number | undefined>(undefined);

  // Synchronize HTML dir and lang attributes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => (prev === 'fa' ? 'en' : 'fa'));
  };

  const handleOpenGeneralRFQ = () => {
    setRfqEquipment('');
    setRfqFeed(undefined);
    setRfqEvap(undefined);
    setRfqPowder(undefined);
    setIsRFQOpen(true);
  };

  const handleSelectProductForRFQ = (productName: string) => {
    setRfqEquipment(productName);
    setIsRFQOpen(true);
  };

  const handleSelectModelFromCalculator = (
    model: string,
    feed: number,
    evap: number,
    powder: number
  ) => {
    setRfqEquipment(`اسپری درایر ونداد مدل ${model}`);
    setRfqFeed(feed);
    setRfqEvap(evap);
    setRfqPowder(powder);
    setIsRFQOpen(true);
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans ${lang === 'fa' ? 'rtl' : 'ltr'}`}>
      {/* Top Bar */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLang}
        onOpenRFQ={handleOpenGeneralRFQ}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenRFQ={handleOpenGeneralRFQ}
          onScrollToCalculator={scrollToCalculator}
        />

        {/* Machinery Catalog */}
        <MachineryCatalog
          lang={lang}
          onSelectProductForRFQ={handleSelectProductForRFQ}
        />

        {/* Chemical Engineering Mass Balance & Sizing Tool */}
        <EquipmentSizingCalculator
          lang={lang}
          onSelectModelForRFQ={handleSelectModelFromCalculator}
        />

        {/* Interactive P&ID Flow of Spray Drying Plant */}
        <ProcessDiagram
          lang={lang}
        />

        {/* Knowledge-Based Flagship Rotary Atomizer Deep Dive */}
        <AtomizerDeepDive
          lang={lang}
          onOpenRFQ={handleOpenGeneralRFQ}
        />

        {/* Powders Produced & Pilot Plant Testing Lab */}
        <PowderProductsLab
          lang={lang}
          onOpenPilotRFQ={handleSelectProductForRFQ}
        />

        {/* Turnkey Engineering Services & Overhaul */}
        <ServicesSection
          lang={lang}
          onOpenRFQ={handleOpenGeneralRFQ}
        />

        {/* Exhibitions (Agrofood, Oil & Gas, Industry) & Factory Snapshot */}
        <ExhibitionsAndGallery
          lang={lang}
        />

        {/* Direct Contact & Factory Location */}
        <ContactSection
          lang={lang}
        />
      </main>

      {/* Quiet Corporate Footer */}
      <Footer
        lang={lang}
        onOpenRFQ={handleOpenGeneralRFQ}
      />

      {/* Interactive RFQ Modal */}
      <RFQModal
        isOpen={isRFQOpen}
        onClose={() => setIsRFQOpen(false)}
        lang={lang}
        initialEquipment={rfqEquipment}
        initialFeed={rfqFeed}
        initialEvap={rfqEvap}
        initialPowder={rfqPowder}
      />
    </div>
  );
}
