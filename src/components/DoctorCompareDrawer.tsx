import React from 'react';
import { X, Check, ShieldCheck, UserCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Doctor } from '../data/hospitalData';

interface DoctorCompareDrawerProps {
  selectedDoctors: Doctor[];
  onRemoveDoctor: (id: string) => void;
  onClearAll: () => void;
  onBookDoctor: (docId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const DoctorCompareDrawer: React.FC<DoctorCompareDrawerProps> = ({
  selectedDoctors,
  onRemoveDoctor,
  onClearAll,
  onBookDoctor,
  isOpen,
  onClose,
}) => {
  const { lang, t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-navy/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white w-full max-w-4xl h-full shadow-2xl overflow-y-auto flex flex-col border-l border-gray-200">
        {/* Header */}
        <div className="bg-navy text-white p-5 flex justify-between items-center sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-teal-light" />
              <h3 className="text-lg font-bold">
                {t.compare.title} ({selectedDoctors.length}/3)
              </h3>
            </div>
            <p className="text-xs text-mint">
              {t.compare.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {selectedDoctors.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-slate-300 hover:text-white underline"
              >
                {t.compare.clearAll}
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-navy-800 text-slate-300 hover:text-white transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1">
          {selectedDoctors.length === 0 ? (
            <div className="text-center py-20 text-slateCustom">
              <UserCheck className="w-16 h-16 mx-auto mb-3 text-slate-300" />
              <p className="font-bold text-base">
                {t.compare.emptyState}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                डॉक्टर्स सूची पर जाएं और तुलना के लिए 'Compare' बटन दबाएं।
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedDoctors.map((doc) => (
                <div key={doc.id} className="bg-ice rounded-2xl border border-gray-200 p-4 space-y-4 relative flex flex-col justify-between">
                  <button
                    onClick={() => onRemoveDoctor(doc.id)}
                    className="absolute top-3 right-3 p-1 rounded-full bg-white text-slate-400 hover:text-emergencyRed shadow"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="text-center space-y-2 pt-2">
                    <img
                      src={doc.image}
                      alt={doc.nameEn}
                      className="w-20 h-20 rounded-2xl object-cover mx-auto border-2 border-teal shadow-md"
                    />
                    <h4 className="font-bold text-navy text-base leading-tight">
                      {lang === 'hi' ? doc.nameHi : doc.nameEn}
                    </h4>
                    <span className="inline-block bg-mint text-teal text-xs font-bold px-2.5 py-0.5 rounded-full">
                      {lang === 'hi' ? doc.roleHi : doc.roleEn}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs text-navy divide-y divide-gray-200 pt-2">
                    <div className="pt-2">
                      <span className="text-slateCustom block font-semibold">
                        {t.compare.qualifications}:
                      </span>
                      <span className="font-bold">{doc.degrees}</span>
                    </div>

                    <div className="pt-2">
                      <span className="text-slateCustom block font-semibold">
                        {t.compare.exp}:
                      </span>
                      <span className="font-bold text-teal">
                        {doc.experience} {lang === 'hi' ? 'वर्षों का अनुभव' : 'Years Experience'}
                      </span>
                    </div>

                    <div className="pt-2">
                      <span className="text-slateCustom block font-semibold">
                        {t.compare.timing}:
                      </span>
                      <span className="font-semibold">{lang === 'hi' ? doc.opdTimingHi : doc.opdTimingEn}</span>
                    </div>

                    <div className="pt-2">
                      <span className="text-slateCustom block font-semibold">
                        प्रमुख ऑपरेशन्स:
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {doc.procedures.map((proc, i) => (
                          <span key={i} className="bg-white px-2 py-0.5 rounded border border-gray-200 text-[11px]">
                            {proc}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <span className="text-slateCustom font-semibold">शुल्क:</span>
                      <span className="font-black text-navy text-sm">₹{doc.fee}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onBookDoctor(doc.id);
                      onClose();
                    }}
                    className="w-full bg-teal hover:bg-teal-dark text-white text-xs font-bold py-2.5 rounded-xl transition shadow mt-4"
                  >
                    {t.doctors.bookSlot}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
