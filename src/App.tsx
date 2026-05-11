/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Trust } from './components/Trust';
import { BeforeAfter } from './components/BeforeAfter';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { PremiumExperience } from './components/PremiumExperience';
import { Process } from './components/Process';
import { ServiceArea } from './components/ServiceArea';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-silver overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <BeforeAfter />
        <Services />
        <WhyChooseUs />
        <Reviews />
        <PremiumExperience />
        <Process />
        <ServiceArea />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
