import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation, MessageCircle, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage: React.FC<{ onOpenAppointment: () => void }> = ({ onOpenAppointment }) => {
  const { lang, t } = useLanguage();

  const handleDirections = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Bedi+Puliya+Karwi+Chitrakoot+Orthopedic+Hospital', '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div>
        <span className="text-xs font-bold text-teal uppercase tracking-wider">
          {lang === 'hi' ? 'संपर्क व स्थान' : 'Contact & Location'}
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-navy mt-1">
          {t.contact.title}
        </h1>
        <p className="text-sm text-slateCustom mt-1">
          {lang === 'hi' ? 'बेड़ी पुलिया, कर्वी, चित्रकूट स्थित जेके आर्थो अस्पताल तक पहुंचने की पूर्ण जानकारी' : 'Location, OPD hours, landmark directions and emergency contact'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Left Panel */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-xl space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-mint text-teal rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-base">{t.contact.addressTitle}</h3>
                <p className="text-xs md:text-sm text-slateCustom mt-1 leading-relaxed">{t.contact.addressText}</p>
                <p className="text-xs font-bold text-teal mt-2">📌 {t.contact.landmarks}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
              <div className="w-10 h-10 bg-mint text-teal rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-base">{t.contact.opdHoursTitle}</h3>
                <p className="text-xs md:text-sm text-slateCustom mt-1">{t.contact.opdHoursText}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
              <div className="w-10 h-10 bg-emergencyRed/10 text-emergencyRed rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-base">24/7 आपातकालीन नंबर</h3>
                <a href={`tel:${t.emergencyPhone}`} className="text-lg font-black text-emergencyRed hover:underline block mt-0.5">
                  {t.emergencyPhone}
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={handleDirections}
                className="flex-1 bg-navy hover:bg-navy-800 text-white font-bold py-3 rounded-xl text-xs transition shadow flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-mint" />
                <span>{t.common.getDirections}</span>
              </button>

              <button
                onClick={onOpenAppointment}
                className="flex-1 bg-teal hover:bg-teal-dark text-white font-bold py-3 rounded-xl text-xs transition shadow flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.nav.bookAppointment}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Map Panel Right */}
        <div className="lg:col-span-6 bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[420px] relative">
          <iframe
            title="JK Ortho Hospital Bedi Puliya Karwi Chitrakoot Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14445.890351654874!2d80.916892!3d25.204043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3984be4f29633e9d%3A0xb35a0cf07df6876c!2sKarwi%2C%20Uttar%20Pradesh%20210205!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
