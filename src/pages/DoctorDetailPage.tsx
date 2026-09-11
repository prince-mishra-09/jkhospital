import React from 'react';
import { Award, Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DOCTORS_DATA, Doctor } from '../data/hospitalData';

interface DoctorDetailPageProps {
  doctorId: string;
  onOpenAppointment: () => void;
  navigate: (route: string) => void;
}

export const DoctorDetailPage: React.FC<DoctorDetailPageProps> = ({
  doctorId,
  onOpenAppointment,
  navigate,
}) => {
  const { lang, t } = useLanguage();

  const doctor = DOCTORS_DATA.find(d => d.id === doctorId) || DOCTORS_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Back Button */}
      <button
        onClick={() => navigate('doctors')}
        className="flex items-center gap-1.5 text-slateCustom hover:text-navy text-xs font-bold transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{lang === 'hi' ? 'डॉक्टर्स सूची पर वापस जाएं' : 'Back to Doctors Directory'}</span>
      </button>

      {/* Hero Profile Card */}
      <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-200 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-4">
          <img
            src={doctor.image}
            alt={doctor.nameEn}
            className="w-full h-80 object-cover rounded-2xl border-4 border-ice shadow-md"
          />
        </div>

        <div className="md:col-span-8 space-y-4">
          <span className="bg-mint text-teal text-xs font-bold px-3 py-1 rounded-full">
            {lang === 'hi' ? doctor.roleHi : doctor.roleEn}
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-navy">
            {lang === 'hi' ? doctor.nameHi : doctor.nameEn}
          </h1>
          <p className="text-sm font-semibold text-slateCustom">
            {doctor.degrees}
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-bold text-navy pt-2">
            <div className="bg-ice px-3 py-2 rounded-xl border border-gray-200">
              <span className="text-slateCustom block text-[11px]">अनुभव:</span>
              <span className="text-teal">{doctor.experience}+ वर्ष</span>
            </div>
            <div className="bg-ice px-3 py-2 rounded-xl border border-gray-200">
              <span className="text-slateCustom block text-[11px]">शुल्क:</span>
              <span>₹{doctor.fee}</span>
            </div>
            <div className="bg-ice px-3 py-2 rounded-xl border border-gray-200">
              <span className="text-slateCustom block text-[11px]">स्थान:</span>
              <span>बेड़ी पुलिया, कर्वी</span>
            </div>
          </div>

          <p className="text-xs md:text-sm text-slateCustom leading-relaxed pt-2">
            {lang === 'hi' ? doctor.bioHi : doctor.bioEn}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              onClick={onOpenAppointment}
              className="bg-teal hover:bg-teal-dark text-white font-bold px-6 py-3 rounded-xl shadow transition text-sm flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.doctors.bookSlot}</span>
            </button>
            <a
              href={`tel:${t.emergencyPhone}`}
              className="bg-navy hover:bg-navy-800 text-white font-bold px-5 py-3 rounded-xl transition text-sm flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-mint" />
              <span>{t.common.callNow}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Treated Conditions */}
        <div className="bg-ice rounded-3xl p-6 border border-gray-200 space-y-3">
          <h3 className="text-lg font-bold text-navy">
            {lang === 'hi' ? 'किन बीमारियों का इलाज करते हैं (Conditions Treated)' : 'Conditions Treated'}
          </h3>
          <ul className="space-y-2 text-xs md:text-sm text-slateCustom">
            {doctor.treatedConditions.map((cond, idx) => (
              <li key={idx} className="bg-white p-3 rounded-xl border border-gray-100 font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                <span>{cond}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Procedures */}
        <div className="bg-ice rounded-3xl p-6 border border-gray-200 space-y-3">
          <h3 className="text-lg font-bold text-navy">
            {lang === 'hi' ? 'प्रमुख ऑपरेशन्स व सर्जरी (Procedures Performed)' : 'Procedures Performed'}
          </h3>
          <ul className="space-y-2 text-xs md:text-sm text-slateCustom">
            {doctor.procedures.map((proc, idx) => (
              <li key={idx} className="bg-white p-3 rounded-xl border border-gray-100 font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal shrink-0" />
                <span>{proc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
