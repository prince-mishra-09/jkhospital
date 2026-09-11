import React from 'react';
import { Activity, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TREATMENTS_DATA, Treatment } from '../data/hospitalData';

interface TreatmentsHubPageProps {
  onSelectTreatment: (id: string) => void;
  onOpenAppointment: () => void;
}

export const TreatmentsHubPage: React.FC<TreatmentsHubPageProps> = ({
  onSelectTreatment,
  onOpenAppointment,
}) => {
  const { lang, t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div>
        <span className="text-xs font-bold text-teal uppercase tracking-wider">
          {lang === 'hi' ? 'चिकित्सा व सर्जरी गाइड' : 'Surgical Procedures'}
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-navy mt-1">
          {lang === 'hi' ? 'इलाज एवं सर्जरी खोजें (Treatments Hub)' : 'Treatments Explorer'}
        </h1>
        <p className="text-sm text-slateCustom mt-1">
          {lang === 'hi' ? 'घुटने, कूल्हे, स्पाइन व दूरबीन सर्जरी की विस्तृत जानकारी' : 'Explore advanced surgical and non-surgical treatment procedures'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TREATMENTS_DATA.map((trt) => (
          <div key={trt.id} className="bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition overflow-hidden flex flex-col justify-between">
            <div>
              <div className="h-48 overflow-hidden bg-slate-100 relative">
                <img
                  src={trt.image || "/images/knee_joint_replacement.jpg"}
                  alt={trt.titleEn}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {trt.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-extrabold text-slate-900">
                  {lang === 'hi' ? trt.titleHi : trt.titleEn}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {lang === 'hi' ? trt.descHi : trt.descEn}
                </p>

                <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-100 text-xs text-slate-900 space-y-1">
                  <span className="text-blue-700 font-extrabold block">रिकवरी समय:</span>
                  <span className="font-semibold text-slate-700">{lang === 'hi' ? trt.recoveryHi : trt.recoveryEn}</span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onSelectTreatment(trt.id)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs shadow transition flex items-center justify-center gap-1"
              >
                <span>{t.common.readMore}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TreatmentDetailPage: React.FC<{
  treatmentId: string;
  onOpenAppointment: () => void;
  navigate: (route: string) => void;
}> = ({ treatmentId, onOpenAppointment, navigate }) => {
  const { lang, t } = useLanguage();
  const treatment = TREATMENTS_DATA.find(t => t.id === treatmentId) || TREATMENTS_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="bg-navy text-white rounded-3xl p-8 md:p-12 shadow-xl space-y-3">
        <span className="bg-teal text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          {treatment.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-black">
          {lang === 'hi' ? treatment.titleHi : treatment.titleEn}
        </h1>
        <p className="text-sm md:text-base text-mint max-w-3xl leading-relaxed">
          {lang === 'hi' ? treatment.descHi : treatment.descEn}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 border border-gray-200 space-y-2">
          <h3 className="font-bold text-navy text-base">किस मरीज को आवश्यकता है? (Who Needs This?)</h3>
          <p className="text-xs md:text-sm text-slateCustom leading-relaxed">{lang === 'hi' ? treatment.whoNeedsHi : treatment.whoNeedsEn}</p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-200 space-y-2">
          <h3 className="font-bold text-navy text-base">गैर-सर्जिकल विकल्प (Non-Surgical Alternatives)</h3>
          <p className="text-xs md:text-sm text-slateCustom leading-relaxed">{lang === 'hi' ? treatment.alternativesHi : treatment.alternativesEn}</p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-200 space-y-2">
          <h3 className="font-bold text-navy text-base">ऑपरेशन के बाद रिकवरी समय (Expected Recovery)</h3>
          <p className="text-xs md:text-sm text-slateCustom leading-relaxed">{lang === 'hi' ? treatment.recoveryHi : treatment.recoveryEn}</p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-200 space-y-2">
          <h3 className="font-bold text-navy text-base">उपयोग की जाने वाली तकनीक (Technology Used)</h3>
          <p className="text-xs md:text-sm text-teal font-bold">{lang === 'hi' ? treatment.techUsedHi : treatment.techUsedEn}</p>
        </div>
      </div>

      <div className="bg-mint rounded-3xl p-6 text-center space-y-3">
        <h3 className="text-xl font-bold text-navy">क्या आप इस इलाज के संबंध में सर्जन से सलाह लेना चाहते हैं?</h3>
        <button
          onClick={onOpenAppointment}
          className="bg-teal hover:bg-teal-dark text-white font-bold px-6 py-3 rounded-xl shadow text-sm"
        >
          {t.hero.ctaPrimary}
        </button>
      </div>
    </div>
  );
};
