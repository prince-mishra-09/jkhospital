import React, { useState } from 'react';
import { Phone, MapPin, Globe, Menu, X, Calendar, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onOpenAppointment: () => void;
  onOpenTriage: () => void;
  currentRoute: string;
  navigate: (route: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAppointment,
  onOpenTriage,
  currentRoute,
  navigate,
}) => {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', route: 'home', label: t.nav.home },
    { key: 'about', route: 'about', label: t.nav.about },
    { key: 'doctors', route: 'doctors', label: t.nav.doctors },
    { key: 'treatments', route: 'treatments', label: t.nav.treatments },
    { key: 'conditions', route: 'conditions', label: t.nav.conditions },
    { key: 'emergency', route: 'emergency', label: t.nav.emergency, badge: '24/7' },
    { key: 'technology', route: 'technology', label: t.nav.technology },
    { key: 'stories', route: 'stories', label: t.nav.stories },
    { key: 'contact', route: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (route: string) => {
    navigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-xs border-b border-blue-100">
      {/* Top Utility Bar with Address Left, Marquee Middle, Static 24/7 Emergency Right */}
      <div className="bg-blue-950 text-white text-xs py-1.5 px-3 border-b border-blue-900 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Left: Short Address */}
          <div className="flex items-center gap-1 shrink-0 font-medium text-blue-200 text-[11px] sm:text-xs">
            <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>📍 {t.locationShort}</span>
          </div>

          {/* Middle: Ticker Marquee for Common Orthopedic Problems */}
          <div className="hidden md:block flex-1 overflow-hidden mx-4 relative text-[11px] text-blue-100 font-medium">
            <div className="animate-marquee">
              {t.tickerText}
            </div>
          </div>

          {/* Right: Static Emergency Helpline (No Animation) & Language Switcher */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:${t.emergencyPhone}`}
              className="flex items-center gap-1 bg-emergencyRed hover:bg-emergencyDark text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold shadow-xs transition"
            >
              <Phone className="w-3 h-3" />
              <span>24/7: {t.emergencyPhone}</span>
            </a>

            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 bg-blue-900 hover:bg-blue-800 text-white px-2.5 py-0.5 rounded-full border border-blue-700 text-[11px] font-semibold transition"
              title="भाषा बदलें / Change Language"
            >
              <Globe className="w-3 h-3 text-blue-300" />
              <span>{lang === 'hi' ? 'EN' : 'हिन्दी'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex justify-between items-center gap-2">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0"
        >
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-xs group-hover:bg-blue-700 transition">
            JK
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-black text-blue-950 leading-none tracking-tight">
              {t.hospitalName}
            </h1>
            <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">
              {t.tagline}
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 text-xs sm:text-sm font-semibold">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.route)}
              className={`px-2.5 py-1 rounded-lg whitespace-nowrap transition ${
                currentRoute === item.route
                  ? 'text-blue-600 bg-blue-50 font-bold'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/60'
              } ${item.badge ? 'text-emergencyRed font-bold flex items-center gap-0.5' : ''}`}
            >
              {item.label}
              {item.badge && (
                <span className="bg-emergencyRed text-white text-[9px] px-1 py-0.2 rounded-full font-bold">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenTriage}
            className="hidden md:flex items-center gap-1 text-xs text-blue-950 font-semibold px-2.5 py-1.5 rounded-lg border border-blue-200 hover:bg-blue-50 transition shrink-0"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-blue-600" />
            <span className="whitespace-nowrap">{lang === 'hi' ? 'दर्द जांचें' : 'Check Pain'}</span>
          </button>

          <button
            onClick={onOpenAppointment}
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm shadow transition transform hover:-translate-y-0.5 active:translate-y-0 shrink-0 whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>{t.nav.bookAppointment}</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 rounded-lg text-blue-950 hover:bg-blue-50 transition shrink-0"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.route)}
                className={`text-left px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold flex justify-between items-center ${
                  currentRoute === item.route
                    ? 'bg-blue-50 text-blue-600 font-bold'
                    : 'text-slate-700 hover:bg-blue-50/50'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="bg-emergencyRed text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}

            <div className="pt-3 border-t border-gray-100 mt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenTriage();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center bg-blue-50 text-blue-600 font-bold py-2.5 rounded-xl border border-blue-200 text-xs"
              >
                {lang === 'hi' ? 'तकलीफ के अनुसार सही इलाज चुनें' : 'Pain Triage Wizard'}
              </button>
              
              <div className="flex items-center justify-between text-xs text-slate-600 px-2 pt-1">
                <span>भाषा देखें / Language:</span>
                <button
                  onClick={toggleLang}
                  className="bg-blue-950 text-white px-3 py-1 rounded-lg font-bold"
                >
                  {lang === 'hi' ? 'English' : 'हिन्दी'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
