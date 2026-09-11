import React from 'react';
import { ShieldCheck, MapPin, Clock, Award, Building, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutPageProps {
  onOpenAppointment: () => void;
  navigate: (route: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenAppointment, navigate }) => {
  const { lang, t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Banner */}
      <div className="bg-navy text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
        <span className="bg-teal text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          {lang === 'hi' ? 'हमारे बारे में' : 'About Us'}
        </span>
        <h1 className="text-3xl md:text-5xl font-black mt-3 leading-tight">
          {lang === 'hi' ? 'जेके आर्थो हॉस्पिटल: 15 वर्षों से बुंदेलखंड की सेवा में समर्पित' : 'JK Ortho Hospital: 15 Years of Healthcare Excellence'}
        </h1>
        <p className="text-sm md:text-base text-mint max-w-2xl mt-3 leading-relaxed">
          बेड़ी पुलिया, कर्वी चित्रकूट स्थित अग्रणी आर्थोपेडिक व ट्रॉमा केयर सेंटर। जहां आधुनिक तकनीक और संवेदनशील चिकित्सा का अनूठा संगम है।
        </p>
      </div>

      {/* Care Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-black text-navy">
            {lang === 'hi' ? 'हमारी चिकित्सा धारणा (Care Philosophy)' : 'Our Care Philosophy'}
          </h2>
          <p className="text-sm text-slateCustom leading-relaxed">
            हमारा उद्देश्य केवल ऑपरेशन करना नहीं, बल्कि मरीज को बिना दर्द के अपने पैरों पर खड़ा करना है। हम हर मरीज की व्यक्तिगत स्थिति के अनुसार गैर-सर्जिकल इलाज को पहली प्राथमिकता देते हैं।
          </p>
          <ul className="space-y-2 text-xs md:text-sm font-semibold text-navy">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-teal" />
              <span>100% इन्फेक्शन-फ्री लेमिनार फ्लो मॉड्युलर ओटी</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-teal" />
              <span>24/7 आपातकालीन ट्रौमा व आईसीयू बैकअप</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-teal" />
              <span>कम्प्यूटर नेविगेशन नी व हिप रिप्लेसमेंट</span>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80"
            alt="Hospital Facility"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>

      {/* Plan Your Visit */}
      <div className="bg-mint/40 rounded-3xl p-8 border border-teal/20 space-y-4">
        <h3 className="text-xl font-bold text-navy">
          {lang === 'hi' ? 'अस्पताल आने की योजना (Plan Your Visit)' : 'Plan Your Visit to Bedi Puliya'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-navy">
          <div className="bg-white p-4 rounded-2xl border border-gray-200">
            <MapPin className="w-5 h-5 text-teal mb-2" />
            <span className="font-bold block">पता व लैंडमार्क:</span>
            <p className="text-slateCustom mt-1">{t.contact.addressText}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-gray-200">
            <Clock className="w-5 h-5 text-teal mb-2" />
            <span className="font-bold block">ओपीडी समय:</span>
            <p className="text-slateCustom mt-1">{t.contact.opdHoursText}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-gray-200">
            <ShieldCheck className="w-5 h-5 text-teal mb-2" />
            <span className="font-bold block">सुविधाएं:</span>
            <p className="text-slateCustom mt-1">डिजिटल एक्स-रे, पैथोलॉजी लैब, 24/7 मेडिकल स्टोर एवं पार्किंग।</p>
          </div>
        </div>
      </div>
    </div>
  );
};
