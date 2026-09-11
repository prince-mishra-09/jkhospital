import React, { useState } from 'react';
import { Activity, ChevronRight, AlertCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface BodyMapProps {
  navigate: (route: string) => void;
  onOpenAppointment: () => void;
}

export type BodyPartKey = 'knee' | 'hip' | 'spine' | 'shoulder' | 'hand' | 'foot';

export const BodyMap: React.FC<BodyMapProps> = ({ navigate, onOpenAppointment }) => {
  const { lang, t } = useLanguage();
  const [selectedPart, setSelectedPart] = useState<BodyPartKey>('knee');

  const bodyPartsData = {
    knee: {
      shortHi: "घुटना (Knee)",
      shortEn: "Knee Joint",
      labelHi: "घुटना (Knee Joint)",
      labelEn: "Knee Joint & Bone",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop&q=80",
      conditionsHi: ["घुटने का गठिया (Osteoarthritis)", "एसीएल लिगामेंट चोट (ACL Tear)", "मेनिस्कस गद्दी फटना", "घुटने में सूजन व कट-कट की आवाज"],
      conditionsEn: ["Knee Osteoarthritis", "ACL Ligament Tear", "Meniscus Cartilage Tear", "Joint Swelling & Stiffness"],
      treatmentHi: "टोटल नी रिप्लेसमेंट या दूरबीन (Arthroscopy) विधि",
      treatmentEn: "Total Knee Replacement or Keyhole Arthroscopy",
      doctorHi: "डॉ. जे.के. सिंह (वरिष्ठ नी सर्जन)",
      doctorEn: "Dr. J.K. Singh (Sr. Knee Specialist)",
      route: "joint-replacement"
    },
    hip: {
      shortHi: "कूल्हा (Hip)",
      shortEn: "Hip Joint",
      labelHi: "कूल्हा (Hip Joint)",
      labelEn: "Hip Joint & Femur",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&auto=format&fit=crop&q=80",
      conditionsHi: ["एवीएन (AVN / हड्डी का सूखना)", "कूल्हे का गठिया", "फीमर बोन फ्रैक्चर", "कूल्हे में लंगड़ाहट"],
      conditionsEn: ["Avascular Necrosis (AVN)", "Hip Osteoarthritis", "Femur Neck Fracture", "Hip Stiffness"],
      treatmentHi: "टोटल हिप रिप्लेसमेंट (THR) एवं बाइपोलर प्रोस्थेसिस",
      treatmentEn: "Total Hip Replacement (THR) & Bipolar Surgery",
      doctorHi: "डॉ. जे.के. सिंह (जोड़ प्रत्यारोपण विशेषज्ञ)",
      doctorEn: "Dr. J.K. Singh (Joint Specialist)",
      route: "joint-replacement"
    },
    spine: {
      shortHi: "रीढ़ (Spine)",
      shortEn: "Spine",
      labelHi: "रीढ़ की हड्डी (Spine & Back)",
      labelEn: "Spine & Vertebrae",
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&auto=format&fit=crop&q=80",
      conditionsHi: ["साइटिका (पैर में नस खिंचना)", "स्लिप डिस्क (Herniated Disc)", "पुराना कमर दर्द", "रीढ़ का टेढ़ापन (Scoliosis)"],
      conditionsEn: ["Sciatica radiating pain", "Herniated Disc / Slip Disc", "Chronic Lumbar Pain", "Spinal Stenosis"],
      treatmentHi: "माइक्रो-एंडोस्कोपिक डिस्क सर्जरी व नर्व ब्लॉक इंजेक्शन",
      treatmentEn: "Micro-Endoscopic Discectomy & Nerve Block Therapy",
      doctorHi: "डॉ. संगीता त्रिपाठी (स्पाइन विशेषज्ञ)",
      doctorEn: "Dr. Sangeeta Tripathi (Spine Specialist)",
      route: "spine-center"
    },
    shoulder: {
      shortHi: "कंधा (Shoulder)",
      shortEn: "Shoulder",
      labelHi: "कंधा (Shoulder Joint)",
      labelEn: "Shoulder Joint & Cuff",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80",
      conditionsHi: ["कंधा जाम होना (Frozen Shoulder)", "रोटेटरी कफ टियर", "कंधा बार-बार उतरना (Dislocation)"],
      conditionsEn: ["Frozen Shoulder / Adhesive Capsulitis", "Rotator Cuff Tear", "Recurrent Shoulder Dislocation"],
      treatmentHi: "दूरबीन विधि (Keyhole Arthroscopy) व शॉल्डर एक्सरसाइज",
      treatmentEn: "Arthroscopic Shoulder Repair & Physical Rehab",
      doctorHi: "डॉ. ए.के. वर्मा (आर्थ्रोस्कोपी विशेषज्ञ)",
      doctorEn: "Dr. A.K. Verma (Arthroscopy Specialist)",
      route: "sports-medicine"
    },
    hand: {
      shortHi: "हाथ (Hand)",
      shortEn: "Hand & Wrist",
      labelHi: "हाथ व कलाई (Hand & Wrist)",
      labelEn: "Hand & Wrist Bones",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80",
      conditionsHi: ["कलाई की हड्डी टूटना (Wrist Fracture)", "कार्पल टनल सिंड्रोम", "ट्रिगर फिंगर"],
      conditionsEn: ["Distal Radius Wrist Fracture", "Carpal Tunnel Syndrome", "Trigger Finger"],
      treatmentHi: "माइक्रो-प्लेटिंग व नर्व रिलीज सर्जरी",
      treatmentEn: "Micro-plating Fixation & Nerve Release Surgery",
      doctorHi: "डॉ. ए.के. वर्मा (ट्रौमा सर्जन)",
      doctorEn: "Dr. A.K. Verma (Trauma Surgeon)",
      route: "treatments"
    },
    foot: {
      shortHi: "पैर (Foot)",
      shortEn: "Foot & Ankle",
      labelHi: "पैर व टखना (Foot & Ankle)",
      labelEn: "Foot & Ankle Bones",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&auto=format&fit=crop&q=80",
      conditionsHi: ["टखने का फ्रैक्चर या मोच", "एड़ी में दर्द (Plantar Fasciitis)", "फ्लैट फुट (Flat Foot)"],
      conditionsEn: ["Ankle Sprain & Ligament Tear", "Plantar Fasciitis / Heel Pain", "Flat Foot Deformity"],
      treatmentHi: "लिगामेंट रीपेयर व कस्टम आर्थोटिक सोल",
      treatmentEn: "Ankle Ligament Repair & Custom Orthotic Soles",
      doctorHi: "डॉ. ए.के. वर्मा (आर्थोपेडिक सर्जन)",
      doctorEn: "Dr. A.K. Verma (Orthopedic Surgeon)",
      route: "treatments"
    }
  };

  const currentInfo = bodyPartsData[selectedPart];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-primaryBlue text-xs font-bold px-3 py-1 rounded-full mb-1.5">
          <Activity className="w-3.5 h-3.5 text-primaryBlue" />
          <span>{lang === 'hi' ? 'इंटेरेक्टिव बॉडी मैप व हड्डी चित्र' : 'Interactive Body Map & Bone Visuals'}</span>
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-blue-950">
          {t.bodyMap.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600">
          {t.bodyMap.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
        {/* Detail Panel: TOP on Mobile (order-1), RIGHT on Desktop (order-2 lg:col-span-7) */}
        <div className="order-1 lg:order-2 lg:col-span-7 bg-blue-50/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-blue-200 border-l-4 sm:border-l-8 border-l-primaryBlue shadow-sm space-y-3.5 sm:space-y-5">
          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-primaryBlue uppercase tracking-wider">
                {lang === 'hi' ? 'चयनित हड्डी व अंग' : 'Selected Bone Joint'}
              </span>
              <h4 className="text-lg sm:text-2xl font-black text-blue-950 leading-tight">
                {lang === 'hi' ? currentInfo.labelHi : currentInfo.labelEn}
              </h4>
            </div>
            <span className="bg-primaryBlue text-white text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded-full shadow-xs whitespace-nowrap">
              {lang === 'hi' ? 'विशेषज्ञ सलाह उपलब्ध' : 'Expert Care'}
            </span>
          </div>

          {/* Bone Visual Image & Conditions Grid */}
          <div className="grid grid-cols-12 gap-3 sm:gap-5 items-center">
            <div className="col-span-4 sm:col-span-5 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              <img
                src={currentInfo.image}
                alt={currentInfo.labelEn}
                className="w-full h-24 sm:h-40 object-cover"
              />
            </div>

            <div className="col-span-8 sm:col-span-7 space-y-1.5 sm:space-y-2">
              <h5 className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-primaryBlue shrink-0" />
                <span>{lang === 'hi' ? 'प्रमुख बीमारियां व लक्षण:' : 'Common Conditions:'}</span>
              </h5>
              <div className="space-y-1 sm:space-y-1.5">
                {(lang === 'hi' ? currentInfo.conditionsHi : currentInfo.conditionsEn).map((cond, idx) => (
                  <div key={idx} className="bg-white p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-gray-200 shadow-xs text-[10px] sm:text-xs font-bold text-blue-950 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primaryBlue shrink-0" />
                    <span className="line-clamp-1">{cond}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Treatment Approach */}
          <div className="bg-white p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-200 shadow-xs">
            <span className="text-[10px] sm:text-[11px] font-bold text-primaryBlue uppercase block mb-0.5">
              {lang === 'hi' ? 'उपलब्ध आधुनिक इलाज:' : 'Advanced Treatment Method:'}
            </span>
            <p className="text-xs sm:text-sm font-extrabold text-blue-950">
              {lang === 'hi' ? currentInfo.treatmentHi : currentInfo.treatmentEn}
            </p>
          </div>

          {/* Recommended Specialist Doctor */}
          <div className="flex items-center justify-between bg-blue-950 text-white p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-md">
            <div>
              <span className="text-[10px] sm:text-[11px] text-blue-200 block">
                {lang === 'hi' ? 'अनुशंसित विशेषज्ञ डॉक्टर:' : 'Recommended Specialist:'}
              </span>
              <span className="text-xs sm:text-sm font-bold">
                {lang === 'hi' ? currentInfo.doctorHi : currentInfo.doctorEn}
              </span>
            </div>
            <button
              onClick={onOpenAppointment}
              className="bg-primaryBlue hover:bg-royalBlue text-white text-[11px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl transition shrink-0"
            >
              {lang === 'hi' ? 'समय लें' : 'Book OPD'}
            </button>
          </div>

          {/* Action CTAs */}
          <div className="pt-0.5">
            <button
              onClick={() => navigate(currentInfo.route)}
              className="flex items-center gap-1.5 text-primaryBlue font-extrabold text-xs sm:text-sm hover:underline"
            >
              <span>{lang === 'hi' ? 'इस अंग के इलाज के बारे में विस्तार से पढ़ें' : 'Explore Detailed Treatments'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Options Selector: BOTTOM on Mobile (order-2), LEFT on Desktop (order-1 lg:col-span-5) */}
        <div className="order-2 lg:order-1 lg:col-span-5">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2 lg:hidden text-center">
            {lang === 'hi' ? '👇 अंग चुनें (अंग पर टैप करें):' : '👇 Tap any joint to view details:'}
          </span>
          {/* Mobile: Compact 3-Column Pill Grid | Desktop: Full Vertical Stack */}
          <div className="grid grid-cols-3 lg:flex lg:flex-col gap-1.5 sm:gap-2.5">
            {(Object.keys(bodyPartsData) as BodyPartKey[]).map((key) => {
              const isSelected = selectedPart === key;
              const part = bodyPartsData[key];
              return (
                <button
                  key={key}
                  onClick={() => setSelectedPart(key)}
                  className={`w-full text-left p-2 sm:p-3.5 rounded-xl sm:rounded-2xl border transition flex items-center justify-between group ${
                    isSelected
                      ? 'bg-primaryBlue text-white border-primaryBlue shadow-md scale-[1.02]'
                      : 'bg-skyIce text-blue-950 border-gray-200 hover:border-primaryBlue hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center gap-1.5 sm:gap-3 mx-auto lg:mx-0">
                    <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full shrink-0 ${isSelected ? 'bg-white animate-ping' : 'bg-blue-300'}`} />
                    <span className="font-bold text-[11px] sm:text-sm md:text-base text-center lg:text-left">
                      {/* Short label on mobile grid, full label on desktop */}
                      <span className="inline lg:hidden">{lang === 'hi' ? part.shortHi : part.shortEn}</span>
                      <span className="hidden lg:inline">{lang === 'hi' ? part.labelHi : part.labelEn}</span>
                    </span>
                  </div>
                  <ChevronRight className={`hidden lg:block w-5 h-5 transition transform ${isSelected ? 'text-white translate-x-1' : 'text-slate-400 group-hover:translate-x-1'}`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
