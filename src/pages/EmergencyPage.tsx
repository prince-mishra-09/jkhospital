import React from 'react';
import { PhoneCall, Navigation, Clock, ShieldAlert, CheckCircle2, MapPin, Ambulance } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const EmergencyPage: React.FC = () => {
  const { lang, t } = useLanguage();

  const handleDirections = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Bedi+Puliya+Karwi+Chitrakoot+Orthopedic+Hospital', '_blank');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Emergency Alert Hero with Background & Visuals */}
      <div className="relative bg-gradient-to-r from-rose-950 via-red-900 to-rose-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl space-y-6 text-center overflow-hidden border border-red-800">
        {/* Visual Emergency Trauma Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 mix-blend-overlay brightness-110"
          style={{ backgroundImage: `url('/images/emergency_trauma_care.jpg')` }}
        />
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider border border-white/30">
            <ShieldAlert className="w-5 h-5 text-yellow-300 animate-pulse" />
            <span>24 Hours Emergency & Fracture Trauma Unit</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            {lang === 'hi' ? '24/7 आपातकालीन आर्थोपेडिक व ट्रौमा केयर' : '24/7 Emergency Orthopedic Trauma Care'}
          </h1>

          <p className="text-base md:text-lg max-w-2xl mx-auto text-rose-100 font-medium">
            दुर्घटना, हड्डी फ्रैक्चर या अचानक गंभीर दर्द की स्थिति में तुरंत बिना अपॉइंटमेंट के सीधे इमरजेंसी वार्ड में आएं।
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <a
              href={`tel:${t.emergencyPhone}`}
              className="bg-white text-red-700 hover:bg-rose-50 font-black px-8 py-4 rounded-2xl shadow-xl text-lg flex items-center justify-center gap-3 transition transform hover:scale-105"
            >
              <PhoneCall className="w-6 h-6 animate-bounce text-red-600" />
              <span>इमरजेंसी कॉल: {t.emergencyPhone}</span>
            </a>

            <button
              onClick={handleDirections}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-2xl shadow-xl text-base flex items-center justify-center gap-2 transition border border-slate-700"
            >
              <Navigation className="w-5 h-5 text-emerald-400" />
              <span>{t.common.getDirections}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Immediate Steps & Instructions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md space-y-4">
          <h3 className="text-lg font-bold text-navy flex items-center gap-2">
            <Ambulance className="w-5 h-5 text-emergencyRed" />
            <span>दुर्घटना / फ्रैक्चर होने पर क्या करें? (Immediate Steps)</span>
          </h3>
          <ul className="space-y-3 text-xs md:text-sm text-slateCustom">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>चोटिल अंग (हाथ/पैर) को हिलाने से बचें और गत्ते या कपड़े से सहारा दें।</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>यदि खून बह रहा हो तो साफ कपड़े से दबाकर रखें।</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>मरीज को खाने-पीने के लिए कुछ न दें (सर्जरी की स्थिति के लिए पेट खाली रहना जरूरी है)।</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md space-y-4">
          <h3 className="text-lg font-bold text-navy flex items-center gap-2">
            <MapPin className="w-5 h-5 text-teal" />
            <span>इमरजेंसी एंट्री व लैंडमार्क (Bedi Puliya Karwi)</span>
          </h3>
          <div className="text-xs md:text-sm text-slateCustom space-y-2">
            <p className="font-bold text-navy">{t.contact.addressText}</p>
            <p className="text-teal font-semibold">📌 लैंडमार्क: बेड़ी पुलिया बस स्टैंड के ठीक पास, रेलवे स्टेशन कर्वी से 2 किमी।</p>
            <p className="bg-mint p-3 rounded-xl border border-teal/20 text-navy font-medium">
              एम्बुलेंस सहायता हेतु कॉल करें: <a href={`tel:${t.ambulancePhone}`} className="font-bold text-emergencyRed underline">{t.ambulancePhone}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
