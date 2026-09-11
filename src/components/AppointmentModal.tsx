import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DOCTORS_DATA } from '../data/hospitalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const { lang, t } = useLanguage();

  const [step, setStep] = useState(1);
  const [consultType, setConsultType] = useState('new');
  const [selectedDoctorId, setSelectedDoctorId] = useState(DOCTORS_DATA[0].id);
  const [appointmentDate, setAppointmentDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedSlot, setSelectedSlot] = useState('11:00 AM - 12:00 PM');
  
  // Patient Form State
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientGender, setPatientGender] = useState('male');
  const [symptoms, setSymptoms] = useState('');

  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const timeSlots = [
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '05:00 PM - 06:00 PM',
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone) {
      alert(lang === 'hi' ? 'कृपया अपना नाम और मोबाइल नंबर दर्ज करें' : 'Please enter your name and phone number');
      return;
    }
    setIsSuccess(true);
  };

  const selectedDoctor = DOCTORS_DATA.find(d => d.id === selectedDoctorId) || DOCTORS_DATA[0];

  const resetAndClose = () => {
    setIsSuccess(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh] my-auto">
        {/* Header */}
        <div className="bg-slate-900 text-white px-5 sm:px-6 py-4 flex justify-between items-center border-b border-slate-800 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-400" />
              <h3 className="text-base sm:text-lg font-extrabold text-white">
                {t.nav.bookAppointment}
              </h3>
            </div>
            <p className="text-xs text-blue-200 font-medium">
              {t.hospitalName} - {t.locationShort}
            </p>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 transition text-slate-200 hover:text-white flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Bar */}
        {!isSuccess && (
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 shrink-0">
            <div className="flex justify-between items-center max-w-md mx-auto">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition ${
                      step === s
                        ? 'bg-blue-600 text-white ring-4 ring-blue-100'
                        : step > s
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {step > s ? '✓' : s}
                  </div>
                  {s < 4 && <div className={`w-8 h-1 rounded ${step > s ? 'bg-slate-900' : 'bg-slate-200'}`} />}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSuccess ? (
            /* Success Screen */
            <div className="text-center py-8 space-y-4 animate-scaleUp">
              <div className="w-16 h-16 bg-mint text-teal rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-navy">
                {t.appointmentModal.successTitle}
              </h4>
              <p className="text-sm text-slateCustom max-w-md mx-auto leading-relaxed">
                {t.appointmentModal.successDesc}
              </p>

              <div className="bg-ice p-4 rounded-2xl border border-gray-200 text-left max-w-md mx-auto space-y-2 text-xs text-navy">
                <div className="flex justify-between">
                  <span className="text-slateCustom">डॉक्टर:</span>
                  <span className="font-bold">{lang === 'hi' ? selectedDoctor.nameHi : selectedDoctor.nameEn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slateCustom">दिनांक व समय:</span>
                  <span className="font-bold">{appointmentDate} | {selectedSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slateCustom">मरीज का नाम:</span>
                  <span className="font-bold">{patientName} ({patientPhone})</span>
                </div>
                <div className="pt-2 border-t border-gray-200 text-[11px] text-teal font-semibold">
                  📍 {t.appointmentModal.hospitalAddress}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={`https://wa.me/919415238450?text=${encodeURIComponent(
                    `Hello JK Ortho Hospital, I booked appointment for ${patientName} with ${selectedDoctor.nameEn} on ${appointmentDate} at ${selectedSlot}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow transition"
                >
                  💬 {lang === 'hi' ? 'व्हाट्सएप पर बुकिंग की प्रति पाएं' : 'Get WhatsApp Confirmation'}
                </a>
                <button
                  onClick={resetAndClose}
                  className="bg-navy text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-navy-800 transition"
                >
                  {lang === 'hi' ? 'खिड़की बंद करें' : 'Close Window'}
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* STEP 1: Care Need */}
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-navy">
                    {t.appointmentModal.step1Title}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { key: 'new', label: t.appointmentModal.consultType.new, desc: 'पहली बार डॉक्टर से मिलने के लिए' },
                      { key: 'followup', label: t.appointmentModal.consultType.followup, desc: 'पुराने इलाज का चेक-अप' },
                      { key: 'secondOpinion', label: t.appointmentModal.consultType.secondOpinion, desc: 'सर्जरी के लिए सेकंड ओपिनियन' },
                      { key: 'emergency', label: t.appointmentModal.consultType.emergency, desc: 'अचानक लगी चोट / फ्रैक्चर' },
                    ].map((type) => (
                      <div
                        key={type.key}
                        onClick={() => setConsultType(type.key)}
                        className={`p-4 rounded-2xl border cursor-pointer transition flex flex-col justify-between ${
                          consultType === type.key
                            ? 'bg-mint/60 border-teal text-navy shadow-md ring-2 ring-teal/30'
                            : 'bg-white border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="font-bold text-sm text-navy">{type.label}</span>
                        <span className="text-xs text-slateCustom mt-1">{type.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Choose Doctor */}
              {step === 2 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-navy">
                    {t.appointmentModal.step2Title}
                  </h4>
                  <div className="space-y-3">
                    {DOCTORS_DATA.map((doc) => (
                      <div
                        key={doc.id}
                        onClick={() => setSelectedDoctorId(doc.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between gap-4 ${
                          selectedDoctorId === doc.id
                            ? 'bg-mint/60 border-teal shadow-md ring-2 ring-teal/30'
                            : 'bg-white border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={doc.image}
                            alt={doc.nameEn}
                            className="w-12 h-12 rounded-xl object-cover border border-gray-200"
                          />
                          <div>
                            <h5 className="font-bold text-sm text-navy">
                              {lang === 'hi' ? doc.nameHi : doc.nameEn}
                            </h5>
                            <p className="text-xs text-slateCustom">
                              {lang === 'hi' ? doc.roleHi : doc.roleEn}
                            </p>
                            <span className="text-[11px] text-teal font-semibold">
                              {doc.experience}+ {lang === 'hi' ? 'वर्षों का अनुभव' : 'Years Exp'}
                            </span>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xs font-bold text-navy">
                            ₹{doc.fee}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: Choose Date & Time */}
              {step === 3 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-navy">
                    {t.appointmentModal.step3Title}
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slateCustom uppercase mb-1">
                        {lang === 'hi' ? 'परामर्श की तारीख चुनें:' : 'Select Date:'}
                      </label>
                      <input
                        type="date"
                        value={appointmentDate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                        className="w-full p-3 rounded-xl border border-gray-300 text-sm font-semibold text-navy focus:ring-2 focus:ring-teal outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slateCustom uppercase mb-2">
                        {lang === 'hi' ? 'उपलब्ध समय स्लॉट:' : 'Available Time Slots:'}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setSelectedSlot(slot)}
                            className={`p-2.5 rounded-xl border text-xs font-bold transition ${
                              selectedSlot === slot
                                ? 'bg-teal text-white border-teal shadow-md'
                                : 'bg-ice text-navy border-gray-200 hover:border-teal'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Patient Info */}
              {step === 4 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-navy">
                    {t.appointmentModal.step4Title}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slateCustom mb-1">
                        {t.appointmentModal.patientName} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="जैसे: रामेश सिंह"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full p-3 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-teal outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slateCustom mb-1">
                        {t.appointmentModal.patientPhone} *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10 अंकों का मोबाइल नंबर"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full p-3 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-teal outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slateCustom mb-1">
                        {t.appointmentModal.patientAge}
                      </label>
                      <input
                        type="number"
                        placeholder="उदा: 45"
                        value={patientAge}
                        onChange={(e) => setPatientAge(e.target.value)}
                        className="w-full p-3 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-teal outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slateCustom mb-1">
                        {t.appointmentModal.patientGender}
                      </label>
                      <select
                        value={patientGender}
                        onChange={(e) => setPatientGender(e.target.value)}
                        className="w-full p-3 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-teal outline-none"
                      >
                        <option value="male">{t.appointmentModal.male}</option>
                        <option value="female">{t.appointmentModal.female}</option>
                        <option value="other">{t.appointmentModal.other}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slateCustom mb-1">
                      {t.appointmentModal.notes}
                    </label>
                    <textarea
                      rows={2}
                      placeholder="तकलीफ का विवरण लिखें (जैसे: घुटने में तेज दर्द, चलने में परेशानी)..."
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      className="w-full p-3 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-teal outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slateCustom bg-ice p-3 rounded-xl border border-gray-200">
                    <ShieldCheck className="w-4 h-4 text-teal shrink-0" />
                    <span>आपकी जानकारी पूर्णतः सुरक्षित एवं गोपनीय रखी जाती है।</span>
                  </div>
                </div>
              )}

              {/* Navigation Footer Controls */}
              <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-1 text-slateCustom hover:text-navy text-xs font-bold px-4 py-2 rounded-xl transition"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{t.common.back}</span>
                  </button>
                ) : <div />}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-teal hover:bg-teal-dark text-white text-xs font-bold px-6 py-2.5 rounded-xl flex items-center gap-2 shadow transition"
                  >
                    <span>आगे बढ़ें</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-teal hover:bg-teal-dark text-white text-xs font-extrabold px-6 py-2.5 rounded-xl shadow-lg transition transform active:scale-95"
                  >
                    {t.appointmentModal.submit}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
