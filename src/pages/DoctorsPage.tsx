import React, { useState } from 'react';
import { Search, Filter, Calendar, UserCheck, Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DOCTORS_DATA, Doctor } from '../data/hospitalData';

interface DoctorsPageProps {
  onOpenAppointment: () => void;
  onSelectDoctor: (docId: string) => void;
  selectedCompareIds: string[];
  onToggleCompare: (docId: string) => void;
  onOpenCompareDrawer: () => void;
}

export const DoctorsPage: React.FC<DoctorsPageProps> = ({
  onOpenAppointment,
  onSelectDoctor,
  selectedCompareIds,
  onToggleCompare,
  onOpenCompareDrawer,
}) => {
  const { lang, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const filteredDoctors = DOCTORS_DATA.filter((doc) => {
    const matchesSearch =
      doc.nameHi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.treatedConditions.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSpecialty = selectedSpecialty === 'all' || doc.specialtyId === selectedSpecialty;

    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div>
        <span className="text-xs font-bold text-teal uppercase tracking-wider">
          {lang === 'hi' ? 'विशेषज्ञ सर्जन्स' : 'Expert Surgeons'}
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-navy mt-1">
          {lang === 'hi' ? 'डॉक्टर्स निर्देशिका (Doctors Directory)' : 'Doctors Directory'}
        </h1>
        <p className="text-sm text-slateCustom mt-1">
          {lang === 'hi' ? 'अपनी बीमारी व असुविधा के अनुसार अनुभवी आर्थोपेडिक सर्जन चुनें' : 'Find highly experienced orthopedic specialists'}
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-200 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="w-5 h-5 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder={t.doctors.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-teal outline-none"
          />
        </div>

        {/* Specialty Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {[
            { id: 'all', label: t.doctors.allSpecialties },
            { id: 'jointReplacement', label: t.doctors.jointReplacement },
            { id: 'traumaArthroscopy', label: t.doctors.traumaArthroscopy },
            { id: 'spineCare', label: t.doctors.spineCare },
          ].map((spec) => (
            <button
              key={spec.id}
              onClick={() => setSelectedSpecialty(spec.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                selectedSpecialty === spec.id
                  ? 'bg-teal text-white shadow-sm'
                  : 'bg-ice text-navy hover:bg-mint border border-gray-200'
              }`}
            >
              {spec.label}
            </button>
          ))}
        </div>

        {/* Floating Compare Button Counter */}
        {selectedCompareIds.length > 0 && (
          <button
            onClick={onOpenCompareDrawer}
            className="bg-navy text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow flex items-center gap-2 hover:bg-navy-800 transition shrink-0"
          >
            <UserCheck className="w-4 h-4 text-mint" />
            <span>{t.doctors.compareSelected} ({selectedCompareIds.length})</span>
          </button>
        )}
      </div>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredDoctors.map((doc) => {
          const isComparing = selectedCompareIds.includes(doc.id);
          return (
            <div key={doc.id} className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col justify-between">
              <div>
                <div className="relative">
                  <img
                    src={doc.image}
                    alt={doc.nameEn}
                    className="w-full h-60 object-cover"
                  />
                  <button
                    onClick={() => onToggleCompare(doc.id)}
                    className={`absolute top-3 right-3 text-xs font-bold px-3 py-1.5 rounded-full shadow transition flex items-center gap-1 ${
                      isComparing
                        ? 'bg-teal text-white'
                        : 'bg-white/90 text-navy hover:bg-white'
                    }`}
                  >
                    {isComparing ? <Check className="w-3.5 h-3.5" /> : null}
                    <span>{isComparing ? 'तुलना में शामिल' : '+ Compare'}</span>
                  </button>
                </div>

                <div className="p-6 space-y-3">
                  <span className="bg-mint text-teal text-xs font-bold px-3 py-1 rounded-full inline-block">
                    {lang === 'hi' ? doc.roleHi : doc.roleEn}
                  </span>
                  <h3 className="text-xl font-black text-navy">
                    {lang === 'hi' ? doc.nameHi : doc.nameEn}
                  </h3>
                  <p className="text-xs text-slateCustom font-medium">
                    {doc.degrees}
                  </p>
                  <p className="text-xs text-teal font-extrabold">
                    {doc.experience}+ {lang === 'hi' ? 'वर्षों का समृद्ध अनुभव' : 'Years Rich Experience'}
                  </p>

                  <div className="bg-ice p-3 rounded-xl border border-gray-100 text-xs text-navy space-y-1">
                    <span className="text-slateCustom block font-medium">ओपीडी समय:</span>
                    <span className="font-bold">{lang === 'hi' ? doc.opdTimingHi : doc.opdTimingEn}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-2">
                <button
                  onClick={() => onSelectDoctor(doc.id)}
                  className="flex-1 bg-white hover:bg-mint text-navy font-bold py-2.5 rounded-xl border border-gray-300 text-xs transition"
                >
                  {t.doctors.viewProfile}
                </button>
                <button
                  onClick={onOpenAppointment}
                  className="flex-1 bg-teal hover:bg-teal-dark text-white font-bold py-2.5 rounded-xl text-xs shadow transition"
                >
                  {t.doctors.bookSlot}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
