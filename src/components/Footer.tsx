import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  navigate: (route: string) => void;
  onOpenAppointment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate, onOpenAppointment }) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-950 text-white pt-12 pb-24 md:pb-12 border-t-4 border-primaryBlue">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-blue-900">
          {/* Col 1: Hospital Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primaryBlue rounded-xl flex items-center justify-center font-black text-xl text-white">
                JK
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {t.hospitalName}
                </h3>
                <p className="text-xs text-blue-200">
                  {t.tagline}
                </p>
              </div>
            </div>
            <p className="text-xs text-blue-100/80 leading-relaxed">
              चित्रकूट, बांदा, महोबा एवं बुंदेलखंड अंचल का अग्रणी आर्थोपेडिक केंद्र। घुटना रिप्लेसमेंट, स्पाइन व ट्रौमा सर्जरी में 15 वर्षों से समर्पित।
            </p>
            <div className="flex items-center gap-2 text-xs text-blue-300">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>100% इन्फेक्शन-फ्री मॉड्युलर ओटी</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-blue-200 uppercase tracking-wider">
              मुख्य सेवाएं (Services)
            </h4>
            <ul className="space-y-2 text-xs text-blue-100/90">
              <li>
                <button onClick={() => navigate('joint-replacement')} className="hover:text-blue-300 transition">
                  • टोटल नी रिप्लेसमेंट (TKR)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('joint-replacement')} className="hover:text-blue-300 transition">
                  • कूल्हा प्रत्यारोपण (Total Hip Replacement)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('sports-medicine')} className="hover:text-blue-300 transition">
                  • दूरबीन विधि (Arthroscopy / ACL Surgery)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('spine-center')} className="hover:text-blue-300 transition">
                  • एंडोस्कोपिक डिस्क व स्पाइन केयर
                </button>
              </li>
              <li>
                <button onClick={() => navigate('emergency')} className="hover:text-blue-300 transition">
                  • 24/7 आपातकालीन ट्रौमा व फ्रैक्चर केयर
                </button>
              </li>
              <li>
                <button onClick={() => navigate('rehabilitation')} className="hover:text-blue-300 transition">
                  • फिजियोथेरेपी व रिहैबिलिटेशन
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Operational Timings & Landmarks */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-blue-200 uppercase tracking-wider">
              अस्पताल का पता व समय
            </h4>
            <div className="space-y-2 text-xs text-blue-100/90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{t.contact.addressText}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{t.contact.opdHoursText}</span>
              </div>
              <div className="pt-2 border-t border-blue-900 text-blue-300 text-[11px]">
                📌 {t.contact.landmarks}
              </div>
            </div>
          </div>

          {/* Col 4: Emergency Contacts & Appointment CTA */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-blue-200 uppercase tracking-wider">
              आपातकालीन हेल्पलाइन
            </h4>
            <div className="bg-blue-900/60 p-4 rounded-2xl border border-blue-800 space-y-3">
              <div className="flex items-center gap-2 text-xs text-blue-200">
                <Phone className="w-4 h-4 text-emergencyRed" />
                <span>24/7 ट्रौमा नंबर:</span>
              </div>
              <a
                href={`tel:${t.emergencyPhone}`}
                className="block text-xl font-black text-white hover:underline"
              >
                {t.emergencyPhone}
              </a>
              <button
                onClick={onOpenAppointment}
                className="w-full bg-primaryBlue hover:bg-royalBlue text-white text-xs font-bold py-2.5 rounded-xl transition shadow-md"
              >
                {t.nav.bookAppointment}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
          <p>
            © {new Date().getFullYear()} {t.hospitalName}, Bedi Puliya, Karwi, Chitrakoot. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('about')} className="hover:text-white">
              गोपनीयता नीति (Privacy)
            </button>
            <button onClick={() => navigate('contact')} className="hover:text-white">
              संपर्क
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 bg-blue-900 hover:bg-primaryBlue text-white px-3 py-1.5 rounded-lg border border-blue-800 transition"
            >
              <span>ऊपर जाएं</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
