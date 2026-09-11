import React from 'react';
import { Phone, Navigation, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface MobileStickyBarProps {
  onOpenAppointment: () => void;
  navigate: (route: string) => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenAppointment,
  navigate,
}) => {
  const { lang, t } = useLanguage();

  const handleDirections = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Bedi+Puliya+Karwi+Chitrakoot+Orthopedic+Hospital',
      '_blank'
    );
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-blue-100 shadow-2xl p-2 px-3">
      <div className="grid grid-cols-3 gap-2 text-center">
        {/* Call Emergency */}
        <a
          href={`tel:${t.emergencyPhone}`}
          className="flex flex-col items-center justify-center bg-emergencyRed text-white py-2 px-1 rounded-xl text-[11px] font-bold shadow-sm active:scale-95 transition"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span>{lang === 'hi' ? 'इमरजेंसी' : 'Emergency'}</span>
        </a>

        {/* Directions */}
        <button
          onClick={handleDirections}
          className="flex flex-col items-center justify-center bg-blue-950 text-white py-2 px-1 rounded-xl text-[11px] font-bold shadow-sm active:scale-95 transition"
        >
          <Navigation className="w-4 h-4 mb-0.5 text-blue-300" />
          <span>{lang === 'hi' ? 'रास्ता (Map)' : 'Directions'}</span>
        </button>

        {/* Book Appointment */}
        <button
          onClick={onOpenAppointment}
          className="flex flex-col items-center justify-center bg-primaryBlue text-white py-2 px-1 rounded-xl text-[11px] font-bold shadow-sm active:scale-95 transition"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span>{lang === 'hi' ? 'अपॉइंटमेंट' : 'Book OPD'}</span>
        </button>
      </div>
    </div>
  );
};
