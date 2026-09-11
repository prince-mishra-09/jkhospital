import React from 'react';
import { Cpu, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TECH_ITEMS } from '../data/hospitalData';

export const TechnologyPage: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div>
        <span className="text-xs font-bold text-teal uppercase tracking-wider">
          {lang === 'hi' ? 'आधुनिक उपकरण व ओटी' : 'Medical Technology'}
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-navy mt-1">
          {t.tech.title}
        </h1>
        <p className="text-sm text-slateCustom mt-1">
          {t.tech.subtitle}
        </p>
      </div>

      <div className="space-y-8">
        {TECH_ITEMS.map((item, idx) => (
          <div key={item.id} className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column Image Visual */}
              <div className="lg:col-span-4 h-64 lg:h-auto overflow-hidden bg-slate-100 relative">
                <img
                  src={idx === 0 ? "/images/modular_laminar_ot.jpg" : "/images/knee_joint_replacement.jpg"}
                  alt={item.titleEn}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:hidden" />
              </div>

              {/* Right Column Content */}
              <div className="lg:col-span-8 p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold border border-blue-100">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    {lang === 'hi' ? item.titleHi : item.titleEn}
                  </h2>
                </div>

                {/* 4-step visual breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                    <span className="text-[11px] font-bold text-blue-600 block">{t.tech.step1}</span>
                    <p className="text-xs font-semibold text-slate-800">{lang === 'hi' ? item.whatHi : item.whatEn}</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                    <span className="text-[11px] font-bold text-blue-600 block">{t.tech.step2}</span>
                    <p className="text-xs font-semibold text-slate-800">{lang === 'hi' ? item.whereHi : item.whereEn}</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                    <span className="text-[11px] font-bold text-blue-600 block">{t.tech.step3}</span>
                    <p className="text-xs font-semibold text-slate-800">{lang === 'hi' ? item.docBenefitHi : item.docBenefitEn}</p>
                  </div>

                  <div className="bg-blue-50/80 p-4 rounded-2xl border border-blue-200 space-y-1">
                    <span className="text-[11px] font-bold text-blue-700 block">{t.tech.step4}</span>
                    <p className="text-xs font-extrabold text-blue-950">{lang === 'hi' ? item.patientBenefitHi : item.patientBenefitEn}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
