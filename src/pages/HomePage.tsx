import React, { useState } from 'react';
import { 
  ShieldCheck, Calendar, PhoneCall, AlertTriangle, ArrowRight, Award, Users, 
  Activity, CheckCircle2, ChevronDown, ChevronUp, Clock, MapPin, Sparkles, HeartPulse, Building2, Stethoscope, Zap
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BodyMap } from '../components/BodyMap';
import { Counter } from '../components/Counter';
import { DOCTORS_DATA, PATIENT_STORIES } from '../data/hospitalData';

interface HomePageProps {
  navigate: (route: string) => void;
  onOpenAppointment: () => void;
  onOpenTriage: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  navigate,
  onOpenAppointment,
  onOpenTriage,
}) => {
  const { lang, t } = useLanguage();

  // Intent Launcher State
  const [activeIntent, setActiveIntent] = useState<'pain' | 'doctor' | 'treatment' | 'urgent'>('pain');
  
  // Age Switcher State
  const [activeAgeGroup, setActiveAgeGroup] = useState<'children' | 'active' | 'adults' | 'seniors'>('adults');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      qHi: "क्या जेके आर्थो हॉस्पिटल बेड़ी पुलिया कर्वी में 24 घंटे इमरजेंसी व फ्रैक्चर की सुविधा है?",
      qEn: "Is 24/7 emergency & fracture care available at JK Ortho Hospital Bedi Puliya?",
      aHi: "जी हां, हमारा अस्पताल बेड़ी पुलिया चौराहा, कर्वी में स्थित है जहां 24/7 आपातकालीन ट्रौमा टीम, डिजिटल एक्स-रे एवं एम्बुलेंस सेवा उपलब्ध रहती है।",
      aEn: "Yes, our hospital at Bedi Puliya Square, Karwi provides 24/7 emergency trauma care, digital X-ray, and ambulance services."
    },
    {
      qHi: "नी रिप्लेसमेंट (Total Knee Replacement) के कितने दिन बाद मरीज चलना शुरू कर देता है?",
      qEn: "How soon can a patient walk after Total Knee Replacement surgery?",
      aHi: "सर्जरी के अगले ही दिन मरीज को वॉकर के सहारे खड़ा करके चलाया जाता है। 3 से 4 हफ्तों में मरीज बिना किसी सहारे के सामान्य दिनचर्या में लौट आता है।",
      aEn: "Patients start walking with support on day 1 post-surgery and resume routine independent walking within 3 to 4 weeks."
    },
    {
      qHi: "क्या बिना बड़ा चीरा लगाए दूरबीन (Arthroscopy) विधि से ऑपरेशन होता है?",
      qEn: "Are minimally invasive arthroscopic keyhole surgeries available?",
      aHi: "जी बिल्कुल! एसीएल लिगामेंट, मेनिस्कस एवं कंधे की चोटों का इलाज 2 मिमी के सूक्ष्म छिद्र द्वारा दूरबीन विधि (Arthroscopy) से किया जाता है।",
      aEn: "Yes! Keyhole arthroscopic surgeries for ACL tears, meniscus injuries, and shoulder dislocations are routinely performed."
    }
  ];

  return (
    <div className="space-y-12 pb-12 bg-white text-slate-800">
      {/* 1. HERO SECTION - Minimal Clean Direct Overlay on Clinic Background */}
      <section className="w-full relative py-12 md:py-16 px-4 md:px-8 border-b border-blue-100 overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center">
        {/* Clean Modern Ortho Clinic OPD Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 brightness-[1.05] contrast-[1.02]"
          style={{ backgroundImage: `url('/images/hero_ortho_clinic_bg.jpg')` }}
        />
        
        {/* Soft Contrast Overlay for Direct Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-slate-950/50 pointer-events-none" />

        <div className="relative max-w-2xl mx-auto z-10 w-full text-center space-y-4 flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-blue-600/30 backdrop-blur-sm text-blue-200 text-xs font-semibold px-3 py-1 rounded-full border border-blue-400/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Headline - Direct on Background Image with Drop Shadow */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight max-w-xl drop-shadow-lg">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-blue-100/95 font-medium leading-relaxed max-w-lg drop-shadow-md">
            {t.hero.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <button
              onClick={onOpenAppointment}
              className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-5 py-2.5 rounded-xl shadow-lg hover:shadow-blue-500/30 transition transform hover:-translate-y-0.5 text-xs sm:text-sm flex items-center gap-2 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.hero.ctaPrimary}</span>
            </button>

            <button
              onClick={onOpenTriage}
              className="bg-slate-950/50 hover:bg-slate-950/70 text-white font-bold px-4 py-2.5 rounded-xl border border-white/30 backdrop-blur-sm transition text-xs sm:text-sm flex items-center gap-1.5 shadow-xs"
            >
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              <span>{t.hero.ctaSecondary}</span>
            </button>
          </div>

          {/* Animated Minimal Stats Bar */}
          <div className="pt-4 border-t border-white/20 grid grid-cols-3 gap-2.5 w-full max-w-sm">
            <div className="bg-slate-950/40 backdrop-blur-sm py-2 px-3 rounded-xl border border-white/15 text-center">
              <span className="block text-base md:text-lg font-black text-blue-300">
                <Counter end={15} suffix="+" />
              </span>
              <span className="text-[10px] sm:text-[11px] text-blue-100 font-semibold block">{t.hero.trustYears}</span>
            </div>
            <div className="bg-slate-950/40 backdrop-blur-sm py-2 px-3 rounded-xl border border-white/15 text-center">
              <span className="block text-base md:text-lg font-black text-white">
                <Counter end={12000} suffix="+" />
              </span>
              <span className="text-[10px] sm:text-[11px] text-blue-100 font-semibold block">{t.hero.trustSurgeries}</span>
            </div>
            <div className="bg-slate-950/40 backdrop-blur-sm py-2 px-3 rounded-xl border border-white/15 text-center">
              <span className="block text-base md:text-lg font-black text-blue-300">
                <Counter end={98} suffix="%" />
              </span>
              <span className="text-[10px] sm:text-[11px] text-blue-100 font-semibold block">{t.hero.trustSatisfaction}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTENT LAUNCHER STRIP - Expert Modern UI/UX Interactive Cards */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Background Lighting Glows */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8 relative z-10">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block mb-2">
              {lang === 'hi' ? 'त्वरित स्वास्थ्य सेवाएं' : 'Quick Intent Launcher'}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
              {t.intent.title}
            </h2>
          </div>

          {/* 4 Expert Interactive Cards Grid (2x2 on Mobile, 4x1 on Desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 relative z-10">
            {[
              { 
                key: 'pain', 
                label: t.intent.pain, 
                desc: lang === 'hi' ? 'दर्द का स्थान व लक्षण जांचें' : 'Check pain location & triage',
                actionLabel: lang === 'hi' ? 'जांचें (Triage) →' : 'Check Triage →',
                icon: AlertTriangle,
                badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
                btnBg: 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-black',
                cardBorder: 'hover:border-amber-500/50',
                onClick: onOpenTriage
              },
              { 
                key: 'doctor', 
                label: t.intent.doctor, 
                desc: lang === 'hi' ? 'विशेषज्ञ सर्जनों से परामर्श' : 'Consult senior orthopedic surgeons',
                actionLabel: lang === 'hi' ? 'डॉक्टर देखें →' : 'View Doctors →',
                icon: Users, 
                badgeBg: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
                btnBg: 'bg-teal-500 hover:bg-teal-400 text-slate-950 font-black',
                cardBorder: 'hover:border-teal-500/50',
                onClick: () => navigate('doctors')
              },
              { 
                key: 'treatment', 
                label: t.intent.treatment, 
                desc: lang === 'hi' ? 'जोड़ रिप्लेसमेंट व दूरबीन सर्जरी' : 'Knee, hip, spine & keyhole surgery',
                actionLabel: lang === 'hi' ? 'इलाज देखें →' : 'Treatments →',
                icon: Activity, 
                badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
                btnBg: 'bg-blue-600 hover:bg-blue-500 text-white font-extrabold',
                cardBorder: 'hover:border-blue-500/50',
                onClick: () => navigate('treatments')
              },
              { 
                key: 'urgent', 
                label: t.intent.urgent, 
                desc: lang === 'hi' ? '24/7 एम्बुलेंस व ट्रौमा केयर' : '24/7 Emergency trauma helpline',
                actionLabel: lang === 'hi' ? 'इमरजेंसी →' : 'Emergency →',
                icon: PhoneCall, 
                badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
                btnBg: 'bg-rose-600 hover:bg-rose-500 text-white font-black',
                cardBorder: 'hover:border-rose-500/50',
                urgent: true,
                onClick: () => navigate('emergency')
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.key}
                  onClick={item.onClick}
                  className={`group cursor-pointer bg-slate-950/60 hover:bg-slate-950/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-800 ${item.cardBorder} transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl flex flex-col justify-between space-y-4`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 sm:p-3 rounded-xl border ${item.badgeBg} transition group-hover:scale-110`}>
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.urgent ? 'animate-bounce text-rose-400' : ''}`} />
                    </div>
                    {item.urgent && (
                      <span className="text-[10px] font-black text-rose-300 bg-rose-950/80 border border-rose-500/40 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        24/7
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-extrabold text-sm sm:text-base text-white leading-snug group-hover:text-blue-200 transition">
                      {item.label}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 font-medium line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300 group-hover:text-white flex items-center gap-1 transition">
                      {item.actionLabel}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-blue-600 text-white flex items-center justify-center text-xs transition transform group-hover:translate-x-1">
                      →
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE BODY MAP WITH BONE VISUALS */}
      <section className="max-w-7xl mx-auto px-4">
        <BodyMap navigate={navigate} onOpenAppointment={onOpenAppointment} />
      </section>

      {/* 4. AGE-AWARE CARE PATHWAYS MODULE WITH HIGH RES EXPLANATORY IMAGES */}
      <section className="w-full max-w-7xl mx-auto px-4">
        <div className="bg-blue-50/60 rounded-3xl p-4 sm:p-6 md:p-10 border border-blue-100 shadow-sm">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6">
            <span className="text-[11px] sm:text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full border border-blue-200/50 inline-block mb-1">
              {lang === 'hi' ? 'आयु-अनुसार देखभाल' : 'Age-Aware Care'}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-blue-950 tracking-tight">
              {t.ageSwitcher.title}
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Content Box */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-200 shadow-sm">
              <div className="grid grid-cols-12 gap-4 md:gap-8 items-center">
                {/* Text Content: col-span-12 sm:col-span-7 md:col-span-6 */}
                <div className="col-span-12 sm:col-span-7 md:col-span-6 space-y-2.5 sm:space-y-4">
                  <span className="bg-blue-50 text-blue-700 text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded-full border border-blue-100 inline-block">
                    {activeAgeGroup === 'children' && (lang === 'hi' ? 'बाल आर्थोपेडिक्स' : 'Pediatric Care')}
                    {activeAgeGroup === 'active' && (lang === 'hi' ? 'स्पोर्ट्स इंजरी व आर्थ्रोस्कोपी' : 'Sports & Arthroscopy')}
                    {activeAgeGroup === 'adults' && (lang === 'hi' ? 'स्पाइन व वर्क-रिलेटेड पेन' : 'Spine & Work Pain')}
                    {activeAgeGroup === 'seniors' && (lang === 'hi' ? 'जोड़ प्रत्यारोपण व गठिया इलाज' : 'Joint Replacement & Arthritis')}
                  </span>

                  <h3 className="text-base sm:text-xl md:text-2xl font-black text-blue-950 leading-snug">
                    {activeAgeGroup === 'children' && (lang === 'hi' ? 'बच्चों में जन्मजात पैर का टेढ़ापन व चोट की सौम्य देखभाल' : 'Pediatric Fracture & Clubfoot Care')}
                    {activeAgeGroup === 'active' && (lang === 'hi' ? 'खेलने के दौरान टूटे लिगामेंट का दूरबीन से त्वरित इलाज' : 'Fast Arthroscopic Recovery for Athletes')}
                    {activeAgeGroup === 'adults' && (lang === 'hi' ? 'कमर दर्द, साइटिका व डिस्क का बिना बड़े ऑपरेशन इलाज' : 'Non-Surgical Spine & Endoscopic Relief')}
                    {activeAgeGroup === 'seniors' && (lang === 'hi' ? 'घुटने व कूल्हे के दर्द से मुक्ति, दोबारा स्वतंत्र रूप से चलें' : 'Restore Independent Pain-Free Walking')}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {activeAgeGroup === 'children' && (lang === 'hi' ? 'बच्चों की कोमल हड्डियों के लिए विशेष प्लास्टर, क्लबफुट सुधार एवं चाइल्ड-फ्रेंडली ओपीडी वातावरण।' : 'Child-friendly pediatric orthopedic care for bone alignment and fracture correction.')}
                    {activeAgeGroup === 'active' && (lang === 'hi' ? 'एसीएल/मेनिस्कस सर्जरी के बाद 4-6 महीनों में खेल के मैदान में वापसी का संपूर्ण गाइड।' : 'Arthroscopic keyhole ACL reconstruction ensuring fast return to active sports.')}
                    {activeAgeGroup === 'adults' && (lang === 'hi' ? 'कंप्यूटर स्क्रीन पर लगातार बैठने या भारी वजन उठाने से दबी नसों का सटीक फिजियो व एंडोस्कोपिक इलाज।' : 'Targeted decompression therapy and micro-discectomy for chronic work-related sciatica.')}
                    {activeAgeGroup === 'seniors' && (lang === 'hi' ? 'उच्च गुणवत्ता वाले जर्मन इम्प्लांट्स से नी रिप्लेसमेंट, जिससे बुजुर्गों का जीवन दोबारा खुशहाल बने।' : 'Advanced knee & hip replacements using biocompatible implants for lifelong stability.')}
                  </p>

                  <div className="pt-1">
                    <button
                      onClick={() => {
                        if (activeAgeGroup === 'children') navigate('pediatric');
                        if (activeAgeGroup === 'active') navigate('sports-medicine');
                        if (activeAgeGroup === 'adults') navigate('spine-center');
                        if (activeAgeGroup === 'seniors') navigate('joint-replacement');
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl transition inline-flex items-center gap-1.5 shadow"
                    >
                      <span>{lang === 'hi' ? 'संबंधित केंद्र देखें' : 'Explore Dedicated Center'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Image Content: col-span-12 sm:col-span-5 md:col-span-6 */}
                <div className="col-span-12 sm:col-span-5 md:col-span-6 rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-slate-100">
                  <img
                    src={
                      activeAgeGroup === 'children'
                        ? "/images/pediatric_ortho_care.jpg"
                        : activeAgeGroup === 'active'
                        ? "/images/arthroscopy_sports_knee.jpg"
                        : activeAgeGroup === 'adults'
                        ? "/images/spine_sciatica_care.jpg"
                        : "/images/knee_joint_replacement.jpg"
                    }
                    alt="Orthopedic Condition Visual Explanation"
                    className="w-full h-36 sm:h-48 md:h-72 object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Age Group Selector Tabs (Compact 2x2 Grid on Mobile | Centered Row on Desktop) */}
            <div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2 md:hidden text-center">
                {lang === 'hi' ? '👇 उम्र वर्ग चुनें (टैप करें):' : '👇 Select Age Group:'}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:flex md:justify-center gap-1.5 sm:gap-2.5">
                {[
                  { key: 'children', label: t.ageSwitcher.children, route: 'pediatric' },
                  { key: 'active', label: t.ageSwitcher.active, route: 'sports-medicine' },
                  { key: 'adults', label: t.ageSwitcher.adults, route: 'spine-center' },
                  { key: 'seniors', label: t.ageSwitcher.seniors, route: 'joint-replacement' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveAgeGroup(tab.key as any)}
                    className={`px-3 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl font-extrabold text-[11px] sm:text-xs md:text-sm transition text-center ${
                      activeAgeGroup === tab.key
                        ? 'bg-blue-600 text-white shadow-md scale-[1.02]'
                        : 'bg-white text-blue-950 hover:bg-blue-50 border border-gray-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROOF STACK MODULE (ANIMATED COUNTING METRICS) */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-950 via-indigo-950 to-blue-950 rounded-3xl p-8 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-blue-800">
            <div className="pt-4 md:pt-0">
              <span className="text-3xl md:text-4xl font-black text-blue-200">
                <Counter end={15000} suffix="+" />
              </span>
              <span className="block text-xs text-blue-100 font-bold mt-1">{t.proof.stat1Label}</span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="text-3xl md:text-4xl font-black text-white">
                <Counter end={99} suffix="%" />
              </span>
              <span className="block text-xs text-blue-100 font-bold mt-1">{t.proof.stat2Label}</span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="text-3xl md:text-4xl font-black text-blue-200">
                24/7
              </span>
              <span className="block text-xs text-blue-100 font-bold mt-1">{t.proof.stat3Label}</span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="text-3xl md:text-4xl font-black text-white">
                <Counter end={100} suffix="%" />
              </span>
              <span className="block text-xs text-blue-100 font-bold mt-1">{t.proof.stat4Label}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5B. VISUAL PROCEDURE & FACILITY TOUR SECTION */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            {lang === 'hi' ? 'विजुअल गाइड व तकनीक' : 'Visual Medical Tour'}
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mt-2 tracking-tight">
            {lang === 'hi' ? 'आधुनिक उपचार एवं उन्नत सुविधाओं की झलक' : 'Visual Tour of Advanced Orthopedic Care'}
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-medium mt-2">
            {lang === 'hi' ? 'चित्रों के माध्यम से समझें कि हमारी उन्नत तकनीक और आधुनिक ओपीडी/ओटी किस प्रकार आपका इलाज आसान बनाती है।' : 'Explore high-resolution visual guides of our modern surgical procedures, OPD facilities, and OT technology.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition group flex flex-col justify-between">
            <div>
              <div className="relative overflow-hidden h-48 bg-slate-100">
                <img
                  src="/images/modular_laminar_ot.jpg"
                  alt="Modular Laminar Flow Operation Theater"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                  100% Sterile OT
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base group-hover:text-blue-600 transition">
                  {lang === 'hi' ? 'मॉड्युलर लेमिनार ओटी व 3D C-Arm' : 'Modular OT & 3D C-Arm'}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {lang === 'hi' ? 'बैक्टीरिया-रहित HEPA एयरस्पेस में सुरक्षित जोड़ प्रत्यारोपण एवं स्पाइन सर्जरी।' : 'Zero-infection ultra-clean surgical environment equipped with real-time 3D fluoroscopy.'}
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <button
                onClick={() => navigate('technology')}
                className="w-full text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 p-2.5 rounded-xl transition flex items-center justify-center gap-1"
              >
                <span>{lang === 'hi' ? 'सुविधाएं देखें' : 'View Tech Details'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition group flex flex-col justify-between">
            <div>
              <div className="relative overflow-hidden h-48 bg-slate-100">
                <img
                  src="/images/knee_joint_replacement.jpg"
                  alt="Total Knee & Hip Replacement Visual"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                  German Implants
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base group-hover:text-blue-600 transition">
                  {lang === 'hi' ? 'घुटने व कूल्हे का रिप्लेसमेंट' : 'Total Knee & Hip Replacement'}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {lang === 'hi' ? 'कंप्यूटर नेविगेशन विधि से सटीक फिटिंग, दर्द-रहित जीवन में वापसी।' : 'Robotic & 3D computer navigated precision joint replacement for lifelong mobility.'}
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <button
                onClick={() => navigate('joint-replacement')}
                className="w-full text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 p-2.5 rounded-xl transition flex items-center justify-center gap-1"
              >
                <span>{lang === 'hi' ? 'प्रक्रिया समझें' : 'Learn Procedure'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition group flex flex-col justify-between">
            <div>
              <div className="relative overflow-hidden h-48 bg-slate-100">
                <img
                  src="/images/arthroscopy_sports_knee.jpg"
                  alt="Keyhole Arthroscopy Reconstruction Visual"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                  Keyhole Surgery
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base group-hover:text-blue-600 transition">
                  {lang === 'hi' ? 'दूरबीन द्वारा लिगामेंट मरम्मत' : 'Keyhole Arthroscopic Repair'}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {lang === 'hi' ? '2 मिमी के सूक्ष्म छिद्र से ACL/मेनिस्कस सर्जरी, बिना टांके की जल्दी रिकवरी।' : 'Minimally invasive keyhole surgery restoring torn ligaments for sports mobility.'}
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <button
                onClick={() => navigate('sports-medicine')}
                className="w-full text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 p-2.5 rounded-xl transition flex items-center justify-center gap-1"
              >
                <span>{lang === 'hi' ? 'स्पोर्ट्स केयर देखें' : 'View Sports Care'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition group flex flex-col justify-between">
            <div>
              <div className="relative overflow-hidden h-48 bg-slate-100">
                <img
                  src="/images/physio_rehab_care.jpg"
                  alt="Physical Therapy and Rehab Unit"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                  Physio & Rehab
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base group-hover:text-blue-600 transition">
                  {lang === 'hi' ? 'फिजियोथेरेपी व पुनर्वास' : 'Physiotherapy & Rehab'}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {lang === 'hi' ? 'सर्जरी के बाद विशेषज्ञ फिजियोथेरेपिस्ट की निगरानी में सुरक्षित रिकवरी।' : 'Dedicated post-operative mobilization and muscle strengthening center.'}
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <button
                onClick={() => navigate('treatments')}
                className="w-full text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 p-2.5 rounded-xl transition flex items-center justify-center gap-1"
              >
                <span>{lang === 'hi' ? 'रिहैब गाइड' : 'Rehab Guide'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DOCTORS DIRECTORY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              {lang === 'hi' ? 'हमारे विशेषज्ञ' : 'Expert Surgeons'}
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-blue-950 mt-1">
              {lang === 'hi' ? 'वरिष्ठ आर्थोपेडिक सर्जनों से मिलें' : 'Meet Senior Orthopedic Specialists'}
            </h2>
          </div>
          <button
            onClick={() => navigate('doctors')}
            className="text-blue-600 font-extrabold text-sm hover:underline flex items-center gap-1"
          >
            <span>{lang === 'hi' ? 'सभी डॉक्टर्स देखें' : 'View All Doctors'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DOCTORS_DATA.map((doc) => (
            <div key={doc.id} className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col justify-between">
              <div>
                <img
                  src={doc.image}
                  alt={doc.nameEn}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 space-y-2">
                  <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full border border-blue-100">
                    {lang === 'hi' ? doc.roleHi : doc.roleEn}
                  </span>
                  <h3 className="text-xl font-extrabold text-blue-950">
                    {lang === 'hi' ? doc.nameHi : doc.nameEn}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {doc.degrees}
                  </p>
                  <p className="text-xs text-blue-700 font-bold pt-1">
                    <Counter end={doc.experience} suffix="+" /> {lang === 'hi' ? 'वर्षों का अनुभव' : 'Years Experience'}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-3">
                <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100 text-xs text-blue-950">
                  <span className="text-slate-500 block font-medium">ओपीडी समय:</span>
                  <span className="font-bold">{lang === 'hi' ? doc.opdTimingHi : doc.opdTimingEn}</span>
                </div>

                <button
                  onClick={onOpenAppointment}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs shadow transition"
                >
                  {t.doctors.bookSlot}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PATIENT RECOVERY STORIES */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-blue-50/50 rounded-3xl p-6 md:p-10 border border-blue-100">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              {lang === 'hi' ? 'मरीजों का विश्वास' : 'Patient Stories'}
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-blue-950 mt-1">
              {t.stories.title}
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              {t.stories.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PATIENT_STORIES.map((story) => (
              <div key={story.id} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-blue-950 text-base">
                    {lang === 'hi' ? story.nameHi : story.nameEn}
                  </h4>
                  <div className="text-amber-400 font-bold text-sm">
                    {"★".repeat(story.rating)}
                  </div>
                </div>
                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-0.5 rounded-full inline-block border border-blue-100">
                  {lang === 'hi' ? story.treatmentHi : story.treatmentEn}
                </span>
                <p className="text-xs md:text-sm text-slate-600 italic leading-relaxed">
                  "{lang === 'hi' ? story.storyHi : story.storyEn}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS (FAQS) */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-blue-950">
            {lang === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न (FAQs)' : 'Frequently Asked Questions'}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 text-left font-bold text-sm md:text-base text-blue-950 flex justify-between items-center gap-4 hover:bg-blue-50/50 transition"
                >
                  <span>{lang === 'hi' ? faq.qHi : faq.qEn}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="p-4 pt-0 text-xs md:text-sm text-slate-600 border-t border-gray-100 bg-blue-50/30 leading-relaxed">
                    {lang === 'hi' ? faq.aHi : faq.aEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
