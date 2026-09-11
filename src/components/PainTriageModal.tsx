import React, { useState } from 'react';
import { X, AlertTriangle, ArrowRight, CheckCircle, Stethoscope, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PainTriageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAppointment: () => void;
  navigate: (route: string) => void;
}

export const PainTriageModal: React.FC<PainTriageModalProps> = ({
  isOpen,
  onClose,
  onOpenAppointment,
  navigate,
}) => {
  const { lang, t } = useLanguage();
  const [triageStep, setTriageStep] = useState(1);
  const [joint, setJoint] = useState('knee');
  const [duration, setDuration] = useState('chronic');
  const [severity, setSeverity] = useState('severe');
  const [showResult, setShowResult] = useState(false);

  if (!isOpen) return null;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  const resetModal = () => {
    setShowResult(false);
    setTriageStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh] my-auto">
        {/* Header */}
        <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
            <h3 className="text-sm sm:text-base font-extrabold text-white">
              {lang === 'hi' ? 'तकलीफ व दर्द जांच विजार्ड (Triage)' : 'Pain-to-Care Triage Wizard'}
            </h3>
          </div>
          <button 
            onClick={resetModal} 
            className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition shadow-xs flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
          {showResult ? (
            <div className="space-y-4 animate-scaleUp">
              <div className="bg-blue-50/80 p-4 sm:p-5 rounded-2xl border border-blue-200 space-y-2">
                <span className="text-[11px] font-extrabold text-blue-700 uppercase tracking-wider block">
                  {lang === 'hi' ? 'जांच परिणाम व अनुशंसित मार्ग:' : 'Triage Pathway Recommendation:'}
                </span>
                <h4 className="text-lg sm:text-xl font-black text-blue-950">
                  {joint === 'knee' && (lang === 'hi' ? 'घुटने की जांच व आर्थराइटिस मूल्यांकन' : 'Knee Evaluation & Joint Care')}
                  {joint === 'hip' && (lang === 'hi' ? 'कूल्हे के जोड़ का विशेषज्ञ परीक्षण' : 'Hip Specialist Evaluation')}
                  {joint === 'spine' && (lang === 'hi' ? 'स्पाइन व नर्व डीकंप्रेशन परामर्श' : 'Spine & Nerve Decompression')}
                  {joint === 'fracture' && (lang === 'hi' ? '24/7 आपातकालीन ट्रौमा व फ्रैक्चर केयर' : '24/7 Emergency Fracture Care')}
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {severity === 'severe'
                    ? (lang === 'hi' ? 'आपकी तकलीफ गंभीर श्रेणी में आती है। जल्द से जल्द एक्स-रे व एमआरआई डायग्नोसिस हेतु आर्थोपेडिक सर्जन से परामर्श लें।' : 'Your symptoms indicate severe pain impact. Immediate OPD consultation and X-ray/MRI diagnostic evaluation recommended.')
                    : (lang === 'hi' ? 'प्रारंभिक चरण के लिए दवाएं, फिजियोथेरेपी व नी सपोर्ट बेल्ट प्रभावी हो सकते हैं।' : 'Early stage management via physical therapy, anti-inflammatory care, and protective bracing is advised.')}
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-2 text-slate-900">
                <div className="flex items-center gap-2 text-blue-700 font-extrabold">
                  <Stethoscope className="w-4 h-4 shrink-0" />
                  <span>{lang === 'hi' ? 'अनुशंसित विशेषज्ञ:' : 'Recommended Specialist:'}</span>
                </div>
                <p className="font-extrabold text-sm text-blue-950">
                  {joint === 'spine' ? 'डॉ. संगीता त्रिपाठी (स्पाइन विशेषज्ञ)' : 'डॉ. जे.के. सिंह (वरिष्ठ जोड़ प्रत्यारोपण विशेषज्ञ)'}
                </p>
                <p className="text-slate-600 font-medium">
                  स्थान: जेके आर्थो हॉस्पिटल, बेड़ी पुलिया कर्वी चित्रकूट।
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => {
                    resetModal();
                    onOpenAppointment();
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-extrabold py-3.5 rounded-xl text-xs sm:text-sm transition text-center shadow-lg active:scale-95"
                >
                  {t.nav.bookAppointment}
                </button>

                <a
                  href={`tel:${t.emergencyPhone}`}
                  className="flex-1 bg-rose-600 hover:bg-rose-500 text-white font-extrabold py-3.5 rounded-xl text-xs sm:text-sm transition text-center flex items-center justify-center gap-2 shadow-lg active:scale-95"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{t.common.callNow}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleCalculate} className="space-y-5">
              {/* Question 1: Joint */}
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                  1. शरीर के किस भाग में दर्द है? (SELECT BODY JOINT)
                </label>
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {[
                    { key: 'knee', label: 'घुटना (Knee)' },
                    { key: 'hip', label: 'कूल्हा (Hip)' },
                    { key: 'spine', label: 'कमर / रीढ़ (Back & Spine)' },
                    { key: 'fracture', label: 'चोट / फ्रैक्चर (Fracture)' },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.key}
                      onClick={() => setJoint(item.key)}
                      className={`p-3 rounded-xl border text-xs font-bold transition text-left ${
                        joint === item.key
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-500/20'
                          : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-blue-50 hover:border-blue-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Duration */}
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                  2. दर्द कितने समय से है? (DURATION OF PAIN)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { key: 'acute', label: '1 हफ्ते से कम' },
                    { key: 'subacute', label: '1 से 6 महीने' },
                    { key: 'chronic', label: '6 महीने से अधिक' },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.key}
                      onClick={() => setDuration(item.key)}
                      className={`p-2.5 rounded-xl border text-[11px] sm:text-xs font-extrabold transition text-center ${
                        duration === item.key
                          ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                          : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-blue-50 hover:border-blue-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Severity */}
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                  3. दर्द की गंभीरता कितनी है? (PAIN SEVERITY)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { key: 'mild', label: 'हल्का दर्द' },
                    { key: 'moderate', label: 'चला-फिरा जाता है' },
                    { key: 'severe', label: 'अत्यधिक (चलना बंद)' },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.key}
                      onClick={() => setSeverity(item.key)}
                      className={`p-2.5 rounded-xl border text-[11px] sm:text-xs font-extrabold transition text-center ${
                        severity === item.key
                          ? 'bg-rose-600 text-white border-rose-600 shadow-md'
                          : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-rose-50 hover:border-rose-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-3.5 rounded-2xl text-xs sm:text-sm transition shadow-xl hover:shadow-blue-500/30 flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>उपयुक्त इलाज व डॉक्टर देखें</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
