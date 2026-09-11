import React from 'react';
import { Calendar, CheckCircle2, ShieldCheck, ArrowRight, Activity, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const JointReplacementPage: React.FC<{ onOpenAppointment: () => void }> = ({ onOpenAppointment }) => {
  const { lang, t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl space-y-4 overflow-hidden border border-blue-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <span className="bg-blue-600/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-blue-400/30 inline-block">
          {lang === 'hi' ? 'विशेषता केंद्र' : 'Center of Excellence'}
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          {lang === 'hi' ? 'जोड़ प्रत्यारोपण केंद्र (Joint Replacement Center)' : 'Joint Replacement Center of Excellence'}
        </h1>
        <p className="text-sm md:text-base text-blue-100/90 max-w-3xl leading-relaxed font-medium">
          घुटने एवं कूल्हे के अत्यधिक घिसे हुए कार्टिलेज का रोबोटिक एवं 3D कम्प्यूटर नेविगेशन विधि से सटीक इलाज। 8,000+ सफल ऑपरेशन्स का रिकॉर्ड।
        </p>
      </div>

      {/* Visual Explanatory Procedures Grid */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            {lang === 'hi' ? 'मुख्य जोड़ प्रत्यारोपण प्रक्रियाएं' : 'Primary Joint Replacement Procedures'}
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            {lang === 'hi' ? 'चित्रों एवं विवरण के माध्यम से समझें कि किस प्रकार आधुनिक इम्प्लांट्स दर्द दूर करते हैं।' : 'Explore visual diagrams explaining knee and hip implant technologies.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Knee Replacement Visual Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col justify-between">
            <div>
              <div className="h-52 overflow-hidden bg-slate-100">
                <img
                  src="/images/knee_joint_replacement.jpg"
                  alt="Total Knee Replacement Implant Visual"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full border border-blue-100">
                  Total Knee Replacement
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">
                  घुटने का प्रत्यारोपण (TKR)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  जर्मन बायोकम्पैटिबल इम्प्लांट्स द्वारा घुटने की घिसी गद्दी बदलना, जिससे मरीज बिना किसी दर्द के सीढ़ियां चढ़ सके एवं सामान्य जीवन में लौट सके।
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={onOpenAppointment}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs shadow transition flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'hi' ? 'अपॉइंटमेंट बुक करें' : 'Book Consultation'}</span>
              </button>
            </div>
          </div>

          {/* Hip Replacement Visual Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col justify-between">
            <div>
              <div className="h-52 overflow-hidden bg-slate-100">
                <img
                  src="/images/hip_joint_replacement.jpg"
                  alt="Total Hip Replacement Ceramic Visual"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full border border-blue-100">
                  Total Hip Replacement
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">
                  कूल्हे का प्रत्यारोपण (THR)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  AVN (Avascular Necrosis) या फ्रैक्चर में कूल्हे के सॉकेट का आधुनिक सेरामिक् प्रोस्थेसिस द्वारा सफल रिप्लेसमेंट।
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={onOpenAppointment}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs shadow transition flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'hi' ? 'अपॉइंटमेंट बुक करें' : 'Book Consultation'}</span>
              </button>
            </div>
          </div>

          {/* Rehab & Mobilization Visual Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col justify-between">
            <div>
              <div className="h-52 overflow-hidden bg-slate-100">
                <img
                  src="/images/physio_rehab_care.jpg"
                  alt="Post Surgery Rehabilitation Visual"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                  Post-Op Care & Rehab
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">
                  शीघ्र पुनर्वास एवं फिजियो
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  सर्जरी के अगले ही दिन विशेषज्ञ फिजियोथेरेपिस्ट की सहायता से मरीज को चलाकर आत्मविश्वास वापस लाना।
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={onOpenAppointment}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs shadow transition flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'hi' ? 'अपॉइंटमेंट बुक करें' : 'Book Consultation'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-blue-50/80 p-8 rounded-3xl text-center space-y-4 border border-blue-100 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900">क्या आपके घुटने या कूल्हे में लगातार दर्द रहता है?</h3>
        <p className="text-xs md:text-sm text-slate-600 max-w-xl mx-auto font-medium">
          हमारे वरिष्ठ जोड़ प्रत्यारोपण विशेषज्ञ डॉ. जे.के. सिंह (18+ वर्ष अनुभव, 8,000+ सर्जरी) से परामर्श लें।
        </p>
        <button
          onClick={onOpenAppointment}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-2xl shadow-md text-sm transition inline-flex items-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          <span>{t.hero.ctaPrimary}</span>
        </button>
      </div>
    </div>
  );
};
