import React from 'react';
import { Star, Video, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PATIENT_STORIES } from '../data/hospitalData';

export const PatientStoriesPage: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div>
        <span className="text-xs font-bold text-teal uppercase tracking-wider">
          {lang === 'hi' ? 'रिकवरी अनुभव' : 'Patient Stories'}
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-navy mt-1">
          {t.stories.title}
        </h1>
        <p className="text-sm text-slateCustom mt-1">
          {t.stories.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PATIENT_STORIES.map((story) => (
          <div key={story.id} className="bg-white rounded-3xl p-6 border border-gray-200 shadow-lg space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-extrabold text-navy text-lg">
                {lang === 'hi' ? story.nameHi : story.nameEn}
              </h3>
              <div className="text-amber-400 font-bold text-sm">
                {"★".repeat(story.rating)}
              </div>
            </div>

            <div className="flex gap-2">
              <span className="bg-mint text-teal text-xs font-bold px-3 py-1 rounded-full">
                {lang === 'hi' ? story.treatmentHi : story.treatmentEn}
              </span>
              <span className="bg-ice text-navy text-xs font-semibold px-3 py-1 rounded-full">
                {lang === 'hi' ? story.conditionHi : story.conditionEn}
              </span>
            </div>

            <p className="text-xs md:text-sm text-slateCustom italic leading-relaxed">
              "{lang === 'hi' ? story.storyHi : story.storyEn}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const HealthLibraryPage: React.FC = () => {
  const { lang, t } = useLanguage();

  const articles = [
    {
      titleHi: "घुटने के दर्द से बचाव के 5 आसान घरेलू व्यायाम",
      titleEn: "5 Easy Home Exercises for Knee Pain Relief",
      cat: "Knee Care",
      timeHi: "5 मिनट पाठ",
      timeEn: "5 min read",
      descHi: "क्वाड्रीसेप्स मजबूती, स्ट्रैचिंग एवं वजन नियंत्रण द्वारा आर्थराइटिस को रोकने के उपाय।"
    },
    {
      titleHi: "साइटिका व कमर दर्द में कौन सी सावधानियां बरतें?",
      titleEn: "Precautions for Sciatica & Low Back Pain",
      cat: "Spine Care",
      timeHi: "4 मिनट पाठ",
      timeEn: "4 min read",
      descHi: "झुककर वजन न उठाना, एर्गोनॉमिक चेयर का उपयोग एवं कोर मसल्स व्यायाम।"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div>
        <span className="text-xs font-bold text-teal uppercase tracking-wider">
          {lang === 'hi' ? 'स्वास्थ्य शिक्षा' : 'Health Education'}
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-navy mt-1">
          {lang === 'hi' ? 'स्वास्थ्य जानकारी केंद्र (Health Library)' : 'Health Education Hub'}
        </h1>
        <p className="text-sm text-slateCustom mt-1">
          {lang === 'hi' ? 'हड्डी व जोड़ों के स्वास्थ्य से जुड़े प्रामाणिक लेख व सुझाव' : 'Evidence-based patient guidance and joint health tips'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((art, i) => (
          <div key={i} className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="bg-mint text-teal font-bold px-2.5 py-0.5 rounded-full">{art.cat}</span>
              <span className="text-slateCustom font-medium">{lang === 'hi' ? art.timeHi : art.timeEn}</span>
            </div>
            <h3 className="text-lg font-bold text-navy">{lang === 'hi' ? art.titleHi : art.titleEn}</h3>
            <p className="text-xs text-slateCustom leading-relaxed">{art.descHi}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
