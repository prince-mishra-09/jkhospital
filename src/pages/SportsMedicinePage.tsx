import React from 'react';
import { Calendar, Activity, Zap, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SportsMedicinePage: React.FC<{ onOpenAppointment: () => void }> = ({ onOpenAppointment }) => {
  const { lang, t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
      <div className="relative bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl space-y-4 overflow-hidden border border-blue-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <span className="bg-blue-600/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-blue-400/30 inline-block">
          Sports Medicine & Arthroscopy
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          {lang === 'hi' ? 'स्पोर्ट्स इंजरी व दूरबीन (Arthroscopy) केंद्र' : 'Sports Injury & Arthroscopy Center'}
        </h1>
        <p className="text-sm md:text-base text-blue-100/90 max-w-3xl leading-relaxed font-medium">
          युवाओं एवं खिलाड़ियों के लिए एसीएल लिगामेंट, मेनिस्कस एवं कंधे के रोटेटर कफ टियर का 2 मिमी सूक्ष्म छिद्र द्वारा बिना चीरा सफल ऑपरेशन।
        </p>
      </div>

      {/* Visual Image & Procedure Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
          <img
            src="/images/arthroscopy_sports_knee.jpg"
            alt="Keyhole Arthroscopy Reconstruction Visual"
            className="w-full h-80 object-cover hover:scale-105 transition duration-500"
          />
        </div>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-2">
            <h3 className="font-extrabold text-slate-900 text-lg">एसीएल लिगामेंट रीकंस्ट्रक्शन (ACL Reconstruction)</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">खेलते समय घुटने में लचक आना या गद्दी फटने पर HD कैमरा एवं बायोडिग्रेडेबल स्क्रू से 100% सटीक सर्जरी।</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-2">
            <h3 className="font-extrabold text-slate-900 text-lg">कंधा उतरना व रोटेटर कफ मरम्मत (Shoulder Arthroscopy)</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">बार-बार कंधा उतरने या हाथ उठाने में दर्द पर बिना चीरा एंकर सूचर सर्जरी।</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-3xl text-center space-y-3 border border-blue-100">
        <h3 className="text-xl font-bold text-slate-900">चोट के बाद खेल के मैदान में तेजी से वापसी करें</h3>
        <button onClick={onOpenAppointment} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-2xl shadow-md text-sm transition">
          {t.hero.ctaPrimary}
        </button>
      </div>
    </div>
  );
};

export const SpineCenterPage: React.FC<{ onOpenAppointment: () => void }> = ({ onOpenAppointment }) => {
  const { lang, t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
      <div className="relative bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl space-y-4 overflow-hidden border border-blue-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <span className="bg-blue-600/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-blue-400/30 inline-block">
          Spine Care Center
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          {lang === 'hi' ? 'स्पाइन व रीढ़ की हड्डी का उन्नत केंद्र' : 'Advanced Spine & Disc Center'}
        </h1>
        <p className="text-sm md:text-base text-blue-100/90 max-w-3xl leading-relaxed font-medium">
          साइटिका, स्लिप डिस्क एवं कमर दर्द का माइक्रो-एंडोस्कोपिक विधि एवं नर्व ब्लॉक इंजेक्शन द्वारा सुरक्षित इलाज।
        </p>
      </div>

      {/* Spine Visual Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-2">
            <h3 className="font-extrabold text-slate-900 text-lg">एंडोस्कोपिक डिस्क सर्जरी (Endoscopic Discectomy)</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">साइटिका या स्लिप डिस्क में दबी हुई नस को बिना मांसपेशियों को काटे 10 मिनट में मुक्त करना।</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-2">
            <h3 className="font-extrabold text-slate-900 text-lg">गैर-सर्जिकल स्पाइन थेरेपी व नर्व ब्लॉक</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">बिना ऑपरेशन के कमर दर्द व साइटिका दर्द से राहत पाने के लिए लक्षित नर्व ब्लॉक इंजेक्शन।</p>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
          <img
            src="/images/spine_sciatica_care.jpg"
            alt="Spine Sciatica Decompression Visual"
            className="w-full h-80 object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-3xl text-center space-y-3 border border-blue-100">
        <h3 className="text-xl font-bold text-slate-900">कमर दर्द या साइटिका से तुरंत राहत पाएं</h3>
        <button onClick={onOpenAppointment} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-2xl shadow-md text-sm transition">
          {t.hero.ctaPrimary}
        </button>
      </div>
    </div>
  );
};
