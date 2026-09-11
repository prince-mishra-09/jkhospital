import React from 'react';
import { Calendar, Heart, ShieldCheck, Smile } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PediatricPage: React.FC<{ onOpenAppointment: () => void }> = ({ onOpenAppointment }) => {
  const { lang, t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
      <div className="relative bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl space-y-4 overflow-hidden border border-blue-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <span className="bg-blue-600/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-blue-400/30 inline-block">
          Pediatric Orthopedics
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          {lang === 'hi' ? 'बाल आर्थोपेडिक्स केंद्र (Pediatric Orthopedics)' : 'Pediatric Orthopedics Care'}
        </h1>
        <p className="text-sm md:text-base text-blue-100/90 max-w-3xl leading-relaxed font-medium">
          नवजात शिशु से लेकर किशोरों में जन्मजात पैर का टेढ़ापन (Clubfoot), कुल्हे का उतरना (DDH) एवं फ्रैक्चर का सौम्य व सुरक्षित इलाज।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
          <img
            src="/images/pediatric_ortho_care.jpg"
            alt="Pediatric Orthopedic Doctor Consultation Visual"
            className="w-full h-80 object-cover hover:scale-105 transition duration-500"
          />
        </div>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-2">
            <h3 className="font-extrabold text-slate-900 text-lg">क्लबफुट (पैर मुड़ा होना / Ponseti Technique)</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">बिना किसी जटिल ऑपरेशन के विशेष प्लास्टर (Ponseti plaster) द्वारा शिशुओं के पैरों को बिल्कुल सीधा करना।</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-2">
            <h3 className="font-extrabold text-slate-900 text-lg">बच्चों में फ्रैक्चर (Childhood Fracture Care)</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">बच्चों की बढ़ती हड्डियों की सही ग्रोथ के लिए विशेष फ्लेक्सिबल नेलिंग (TENS Nailing)।</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-3xl text-center space-y-3 border border-blue-100">
        <h3 className="text-xl font-bold text-slate-900">बच्चों के स्वास्थ्य और हड्डियों की सही वृद्धि के लिए परामर्श लें</h3>
        <button onClick={onOpenAppointment} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-2xl shadow-md text-sm transition">
          {t.hero.ctaPrimary}
        </button>
      </div>
    </div>
  );
};

export const RehabilitationPage: React.FC<{ onOpenAppointment: () => void }> = ({ onOpenAppointment }) => {
  const { lang, t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
      <div className="relative bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl space-y-4 overflow-hidden border border-blue-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <span className="bg-blue-600/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-blue-400/30 inline-block">
          Physiotherapy & Rehab
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          {lang === 'hi' ? 'फिजियोथेरेपी व रिहैबिलिटेशन सेंटर' : 'Physiotherapy & Physical Rehabilitation'}
        </h1>
        <p className="text-sm md:text-base text-blue-100/90 max-w-3xl leading-relaxed font-medium">
          ऑपरेशन के बाद पूर्ण रिकवरी के लिए आधुनिक फिजियोथेरेपी उपकरण, लेजर थेरेपी एवं एक्सपर्ट फिजियोथेरेपिस्ट की देखरेख।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-2">
            <h3 className="font-extrabold text-slate-900 text-lg">पोस्ट-ऑपरेटिव नी व हिप फिजियोथेरेपी</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">सर्जरी के बाद जोड़ों में दर्द-रहित मोबिलिटी और मांसपेशियों की शक्ति वापस लाने के लिए गाइड किया गया व्यायाम।</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-2">
            <h3 className="font-extrabold text-slate-900 text-lg">स्पोर्ट्स रिहैब व इलेक्ट्रोथेरेपी</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">IFT, अल्ट्रासाउंड एवं लेजर द्वारा सूजन व मांसपेशियों की ऐंठन को जल्दी ठीक करना।</p>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
          <img
            src="/images/physio_rehab_care.jpg"
            alt="Physiotherapy and Rehabilitation Visual"
            className="w-full h-80 object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-3xl text-center space-y-3 border border-blue-100">
        <h3 className="text-xl font-bold text-slate-900">अपनी रिकवरी तेज करें - फिजियो सेशन बुक करें</h3>
        <button onClick={onOpenAppointment} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-2xl shadow-md text-sm transition">
          {t.hero.ctaPrimary}
        </button>
      </div>
    </div>
  );
};
