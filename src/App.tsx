import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { AppointmentModal } from './components/AppointmentModal';
import { DoctorCompareDrawer } from './components/DoctorCompareDrawer';
import { PainTriageModal } from './components/PainTriageModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { DoctorDetailPage } from './pages/DoctorDetailPage';
import { TreatmentsHubPage, TreatmentDetailPage } from './pages/TreatmentsHubPage';
import { EmergencyPage } from './pages/EmergencyPage';
import { JointReplacementPage } from './pages/JointReplacementPage';
import { SportsMedicinePage, SpineCenterPage } from './pages/SportsMedicinePage';
import { PediatricPage, RehabilitationPage } from './pages/PediatricPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { PatientStoriesPage, HealthLibraryPage } from './pages/PatientStoriesPage';
import { ContactPage } from './pages/ContactPage';

import { DOCTORS_DATA } from './data/hospitalData';

const MainApp: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(DOCTORS_DATA[0].id);
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>('tkr');

  // Modal State
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isTriageOpen, setIsTriageOpen] = useState(false);
  const [isCompareDrawerOpen, setIsCompareDrawerOpen] = useState(false);

  // Compare Drawer Selected Doctors State
  const [selectedCompareIds, setSelectedCompareIds] = useState<string[]>([DOCTORS_DATA[0].id, DOCTORS_DATA[1].id]);

  const handleToggleCompare = (id: string) => {
    setSelectedCompareIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter(i => i !== id);
      } else {
        if (prev.length >= 3) {
          alert('आप एक साथ अधिकतम 3 डॉक्टर्स की तुलना कर सकते हैं (Max 3 doctors allowed)');
          return prev;
        }
        return [...prev, id];
      }
    });
  };

  const handleRemoveCompare = (id: string) => {
    setSelectedCompareIds((prev) => prev.filter(i => i !== id));
  };

  const handleClearAllCompare = () => {
    setSelectedCompareIds([]);
  };

  const navigate = (route: string) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderRoute = () => {
    switch (currentRoute) {
      case 'home':
        return (
          <HomePage
            navigate={navigate}
            onOpenAppointment={() => setIsAppointmentOpen(true)}
            onOpenTriage={() => setIsTriageOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            navigate={navigate}
            onOpenAppointment={() => setIsAppointmentOpen(true)}
          />
        );
      case 'doctors':
        return (
          <DoctorsPage
            onOpenAppointment={() => setIsAppointmentOpen(true)}
            onSelectDoctor={(docId) => {
              setSelectedDoctorId(docId);
              navigate('doctor-detail');
            }}
            selectedCompareIds={selectedCompareIds}
            onToggleCompare={handleToggleCompare}
            onOpenCompareDrawer={() => setIsCompareDrawerOpen(true)}
          />
        );
      case 'doctor-detail':
        return (
          <DoctorDetailPage
            doctorId={selectedDoctorId}
            onOpenAppointment={() => setIsAppointmentOpen(true)}
            navigate={navigate}
          />
        );
      case 'treatments':
        return (
          <TreatmentsHubPage
            onSelectTreatment={(tId) => {
              setSelectedTreatmentId(tId);
              navigate('treatment-detail');
            }}
            onOpenAppointment={() => setIsAppointmentOpen(true)}
          />
        );
      case 'treatment-detail':
        return (
          <TreatmentDetailPage
            treatmentId={selectedTreatmentId}
            onOpenAppointment={() => setIsAppointmentOpen(true)}
            navigate={navigate}
          />
        );
      case 'conditions':
        return (
          <HomePage
            navigate={navigate}
            onOpenAppointment={() => setIsAppointmentOpen(true)}
            onOpenTriage={() => setIsTriageOpen(true)}
          />
        );
      case 'emergency':
        return <EmergencyPage />;
      case 'joint-replacement':
        return <JointReplacementPage onOpenAppointment={() => setIsAppointmentOpen(true)} />;
      case 'sports-medicine':
        return <SportsMedicinePage onOpenAppointment={() => setIsAppointmentOpen(true)} />;
      case 'spine-center':
        return <SpineCenterPage onOpenAppointment={() => setIsAppointmentOpen(true)} />;
      case 'pediatric':
        return <PediatricPage onOpenAppointment={() => setIsAppointmentOpen(true)} />;
      case 'rehabilitation':
        return <RehabilitationPage onOpenAppointment={() => setIsAppointmentOpen(true)} />;
      case 'technology':
        return <TechnologyPage />;
      case 'stories':
        return <PatientStoriesPage />;
      case 'library':
        return <HealthLibraryPage />;
      case 'contact':
        return <ContactPage onOpenAppointment={() => setIsAppointmentOpen(true)} />;
      default:
        return (
          <HomePage
            navigate={navigate}
            onOpenAppointment={() => setIsAppointmentOpen(true)}
            onOpenTriage={() => setIsTriageOpen(true)}
          />
        );
    }
  };

  const selectedDoctorsForCompare = DOCTORS_DATA.filter(d => selectedCompareIds.includes(d.id));

  return (
    <div className="min-h-screen flex flex-col bg-ice font-sans">
      <Header
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        onOpenTriage={() => setIsTriageOpen(true)}
        currentRoute={currentRoute}
        navigate={navigate}
      />

      <main className="flex-1">
        {renderRoute()}
      </main>

      <Footer
        navigate={navigate}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
      />

      <MobileStickyBar
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        navigate={navigate}
      />

      {/* Progressive 4-Step Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />

      {/* Pain-to-Care Triage Modal */}
      <PainTriageModal
        isOpen={isTriageOpen}
        onClose={() => setIsTriageOpen(false)}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        navigate={navigate}
      />

      {/* Doctor Side-by-Side Comparison Drawer */}
      <DoctorCompareDrawer
        isOpen={isCompareDrawerOpen}
        onClose={() => setIsCompareDrawerOpen(false)}
        selectedDoctors={selectedDoctorsForCompare}
        onRemoveDoctor={handleRemoveCompare}
        onClearAll={handleClearAllCompare}
        onBookDoctor={(docId) => {
          setSelectedDoctorId(docId);
          setIsAppointmentOpen(true);
        }}
      />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
