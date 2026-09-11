export type Language = 'hi' | 'en';

export const translations = {
  hi: {
    // Header & Brand
    hospitalName: "जेके आर्थो हॉस्पिटल",
    tagline: "हड्डी, जोड़ एवं ट्रौमा केयर सेंटर",
    locationShort: "बेड़ी पुलिया, कर्वी, चित्रकूट",
    emergencyBadge: "24/7 आपातकालीन ट्रौमा",
    emergencyPhone: "+91 94152 38450",
    ambulancePhone: "+91 94152 38451",
    
    // Marquee Problems Ticker
    tickerText: "🔥 प्रमुख आर्थोपेडिक समस्याएं: घुटने का गठिया (Osteoarthritis) • साइटिका व कमर दर्द (Sciatica) • एसीएल लिगामेंट टियर (ACL Tear) • कूल्हा सूखना (AVN Hip) • कंधा जाम (Frozen Shoulder) • फ्रैक्चर एवं दुर्घटना • डिस्क समस्या •",

    // Navigation (Concise single-word in English to prevent thick navbar)
    nav: {
      home: "मुख्य पृष्ठ",
      about: "हमारे बारे में",
      doctors: "डॉक्टर्स",
      treatments: "सर्जरी व इलाज",
      conditions: "बीमारियां",
      emergency: "इमरजेंसी",
      technology: "तकनीक व ओटी",
      stories: "अनुभव",
      library: "स्वास्थ्य",
      contact: "संपर्क",
      bookAppointment: "अपॉइंटमेंट लें",
      emergencyCall: "इमरजेंसी कॉल",
    },

    // Intent Bar
    intent: {
      title: "आप आज किस सेवा की तलाश में हैं?",
      pain: "मुझे दर्द या चोट है",
      doctor: "डॉक्टर से परामर्श",
      treatment: "ऑपरेशन / सर्जरी जानकारी",
      urgent: "आपातकालीन ट्रौमा",
    },

    // Body Map
    bodyMap: {
      title: "शरीर के अंग अनुसार समस्या व हड्डी चित्र देखें",
      subtitle: "नीचे दिए गए अंग पर क्लिक करें और संबंधित हड्डी बीमारी व विशेषज्ञ देखें",
      knee: "घुटना (Knee)",
      hip: "कूल्हा (Hip)",
      spine: "रीढ़ की हड्डी (Spine)",
      shoulder: "कंधा (Shoulder)",
      hand: "हाथ व कलाई (Hand & Wrist)",
      foot: "पैर व टखना (Foot & Ankle)",
      viewDoctors: "विशेषज्ञ डॉक्टर देखें",
      viewTreatments: "इलाज के तरीके",
    },

    // Age Switcher
    ageSwitcher: {
      title: "हर उम्र के लिए समर्पित आर्थोपेडिक देखभाल",
      children: "बच्चे (0–15 वर्ष)",
      active: "युवा व खिलाड़ी (15–40 वर्ष)",
      adults: "वयस्क (40–60 वर्ष)",
      seniors: "बुजुर्ग (60+ वर्ष)",
    },

    // Hero Section
    hero: {
      badge: "चित्रकूट का प्रमुख नी व जॉइंट रिप्लेसमेंट हॉस्पिटल",
      title: "दर्द रहित जीवन और बेहतर गतिशीलता",
      description: "बेड़ी पुलिया, कर्वी में एडवांस नी रिप्लेसमेंट, स्पाइन व दूरबीन सर्जरी। 24/7 इमरजेंसी ट्रौमा केयर उपलब्ध।",
      ctaPrimary: "अपॉइंटमेंट बुक करें",
      ctaSecondary: "तकलीफ जांचें (Triage)",
      trustYears: "वर्षों का विश्वास",
      trustSurgeries: "सफल ऑपरेशन्स",
      trustSatisfaction: "संतुष्ट मरीज",
    },

    // Proof Stack
    proof: {
      stat1Label: "सफल मरीज",
      stat2Label: "इन्फेक्शन फ्री ओटी",
      stat3Label: "ट्रौमा व एम्बुलेंस सेवा",
      stat4Label: "सटीक डायग्नोसिस",
    },

    // Doctor Discovery
    doctors: {
      searchPlaceholder: "डॉक्टर का नाम, बीमारी या सर्जरी खोजें...",
      allSpecialties: "सभी विशेषज्ञता",
      jointReplacement: "जोड़ प्रत्यारोपण",
      traumaArthroscopy: "ट्रौमा व दूरबीन",
      spineCare: "स्पाइन केयर",
      pediatric: "बाल आर्थोपेडिक्स",
      compareSelected: "डॉक्टर तुलना करें",
      viewProfile: "प्रोफाइल देखें",
      bookSlot: "समय बुक करें",
      experience: "अनुभव",
      timing: "ओपीडी समय",
      fees: "परामर्श शुल्क",
    },

    // Doctor Compare Drawer
    compare: {
      title: "डॉक्टर्स की तुलना करें",
      subtitle: "सही विशेषज्ञ का चयन करने में सहायता",
      clearAll: "सभी हटाएं",
      emptyState: "तुलना के लिए कम से कम 2 डॉक्टर्स चुनें",
      qualifications: "योग्यता एवं डिग्रियां",
      specialty: "विशेषज्ञता",
      exp: "कुल अनुभव",
      timing: "ओपीडी समय",
    },

    // Progressive Appointment Flow
    appointmentModal: {
      step1Title: "1. अपनी आवश्यकता चुनें",
      step2Title: "2. विशेषज्ञ / डॉक्टर चुनें",
      step3Title: "3. तिथि व समय का चयन",
      step4Title: "4. मरीज विवरण व पुष्टि",
      consultType: {
        new: "नया परामर्श (New OPD)",
        followup: "फॉलो-अप (Follow-up)",
        secondOpinion: "सेकंड ओपिनियन (Second Opinion)",
        emergency: "इमरजेंसी केस",
      },
      patientName: "मरीज का पूरा नाम",
      patientPhone: "मोबाइल नंबर (WhatsApp)",
      patientAge: "उम्र",
      patientGender: "लिंग",
      male: "पुरुष",
      female: "महिला",
      other: "अन्य",
      notes: "तकलीफ / समस्या का विवरण",
      submit: "अपॉइंटमेंट की पुष्टि करें",
      successTitle: "अपॉइंटमेंट सफलतापूर्वक दर्ज हो गया है!",
      successDesc: "हमारी टीम आपसे 15 मिनट के भीतर संपर्क करेगी। पुष्टि संदेश आपके व्हाट्सएप पर भेज दिया गया है।",
      hospitalAddress: "स्थान: जेके आर्थो हॉस्पिटल, बेड़ी पुलिया चौराहे के पास, कर्वी, चित्रकूट",
    },

    // Technology
    tech: {
      title: "आधुनिक तकनीक से सुरक्षित एवं सटीक इलाज",
      subtitle: "मशीनों का सीधा लाभ मरीज की रिकवरी और कम दर्द के रूप में",
      step1: "1. क्या है तकनीक?",
      step2: "2. कहां उपयोग होती है?",
      step3: "3. डॉक्टर को क्या लाभ?",
      step4: "4. मरीज का अनुभव",
    },

    // Patient Stories
    stories: {
      title: "मरीजों के जीवन बदलने की कहानियां",
      subtitle: "चित्रकूट और आसपास के जिलों के मरीजों के वास्तविक अनुभव",
      all: "सभी कहानियां",
      knee: "घुटना प्रत्यारोपण",
      hip: "कूल्हा प्रत्यारोपण",
      sports: "स्पोर्ट्स इंजरी",
      trauma: "दुर्घटना / ट्रौमा",
    },

    // Contact & Emergency
    contact: {
      title: "संपर्क करें व अस्पताल आएं",
      addressTitle: "अस्पताल का पता",
      addressText: "जेके आर्थो हॉस्पिटल, बेड़ी पुलिया चौराहा, कर्वी, जिला - चित्रकूट, उत्तर प्रदेश - 210205",
      landmarks: "प्रमुख लैंडमार्क: बेड़ी पुलिया बस स्टैंड के पास, रेलवे स्टेशन कर्वी से 2 किमी",
      opdHoursTitle: "ओपीडी का समय",
      opdHoursText: "सोमवार से शनिवार: सुबह 9:00 - शाम 7:00 | रविवार: आपातकालीन सेवाएं 24 घंटे",
      emergencyNotice: "आपातकालीन स्थिति में सीधा इमरजेंसी वार्ड में आएं, किसी अपॉइंटमेंट की आवश्यकता नहीं है।",
    },

    // General UI
    common: {
      readMore: "विस्तार से पढ़ें",
      back: "पीछे जाएं",
      close: "बंद करें",
      callNow: "अभी कॉल करें",
      getDirections: "रास्ता देखें (Google Maps)",
      whatsapp: "व्हाट्सएप पर बात करें",
      select: "चुनें",
      clear: "साफ करें",
    }
  },

  en: {
    // Header & Brand
    hospitalName: "JK Ortho Hospital",
    tagline: "Center for Bone, Joint & Trauma Care",
    locationShort: "Bedi Puliya, Karwi, Chitrakoot",
    emergencyBadge: "24/7 Trauma Helpline",
    emergencyPhone: "+91 94152 38450",
    ambulancePhone: "+91 94152 38451",
    
    // Marquee Problems Ticker
    tickerText: "🔥 Popular Conditions Treated: Knee Osteoarthritis • Sciatica & Slip Disc • ACL Ligament Tear • AVN Hip • Frozen Shoulder • Bone Fractures • Endoscopic Spine •",

    // Navigation (CONCISE ONE-WORD LABELS IN ENGLISH TO PREVENT THICK NAVBAR)
    nav: {
      home: "Home",
      about: "About",
      doctors: "Doctors",
      treatments: "Surgeries",
      conditions: "Conditions",
      emergency: "Emergency",
      technology: "Tech",
      stories: "Stories",
      library: "Health",
      contact: "Contact",
      bookAppointment: "Book OPD",
      emergencyCall: "Emergency",
    },

    // Intent Bar
    intent: {
      title: "What care are you looking for today?",
      pain: "I have Pain or Injury",
      doctor: "Doctor Consultation",
      treatment: "Surgery / Treatment Info",
      urgent: "Emergency Trauma",
    },

    // Body Map
    bodyMap: {
      title: "Explore Conditions & Bone Visuals",
      subtitle: "Click on any joint below to view associated bone conditions & specialists",
      knee: "Knee Joint",
      hip: "Hip Joint",
      spine: "Spine & Back",
      shoulder: "Shoulder Joint",
      hand: "Hand & Wrist",
      foot: "Foot & Ankle",
      viewDoctors: "View Specialists",
      viewTreatments: "View Treatments",
    },

    // Age Switcher
    ageSwitcher: {
      title: "Dedicated Orthopedic Care for Every Stage of Life",
      children: "Children (0–15 Yrs)",
      active: "Active (15–40 Yrs)",
      adults: "Adults (40–60 Yrs)",
      seniors: "Seniors (60+ Yrs)",
    },

    // Hero Section
    hero: {
      badge: "Premier Ortho & Joint Care Center in Chitrakoot",
      title: "Pain-Free Life & Better Mobility",
      description: "Advanced Joint Replacement, Spine & Keyhole Surgery at Bedi Puliya, Karwi. 24/7 Emergency Care.",
      ctaPrimary: "Book Appointment",
      ctaSecondary: "Check Pain Triage",
      trustYears: "Years Trust",
      trustSurgeries: "Surgeries Done",
      trustSatisfaction: "Satisfaction Rate",
    },

    // Proof Stack
    proof: {
      stat1Label: "Patients Treated",
      stat2Label: "Infection-Free OTs",
      stat3Label: "Trauma & Ambulance",
      stat4Label: "Accurate Diagnosis",
    },

    // Doctor Discovery
    doctors: {
      searchPlaceholder: "Search doctor name, problem or procedure...",
      allSpecialties: "All Specialties",
      jointReplacement: "Joint Replacement",
      traumaArthroscopy: "Trauma & Arthroscopy",
      spineCare: "Spine Care",
      pediatric: "Pediatric Care",
      compareSelected: "Compare Doctors",
      viewProfile: "View Profile",
      bookSlot: "Book Slot",
      experience: "Experience",
      timing: "OPD Timings",
      fees: "Consult Fee",
    },

    // Doctor Compare Drawer
    compare: {
      title: "Compare Doctors",
      subtitle: "Select up to 3 specialists to compare expertise & OPD timing",
      clearAll: "Clear All",
      emptyState: "Select at least 2 doctors to compare side-by-side",
      qualifications: "Qualifications",
      specialty: "Specialty",
      exp: "Total Experience",
      timing: "OPD Timings",
    },

    // Progressive Appointment Flow
    appointmentModal: {
      step1Title: "1. Select Care Need",
      step2Title: "2. Choose Specialist",
      step3Title: "3. Choose Date & Time",
      step4Title: "4. Patient Details & Confirmation",
      consultType: {
        new: "New OPD Consultation",
        followup: "Follow-up Visit",
        secondOpinion: "Second Opinion",
        emergency: "Emergency Case",
      },
      patientName: "Full Name",
      patientPhone: "Mobile Number (WhatsApp)",
      patientAge: "Age",
      patientGender: "Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      notes: "Symptoms / Problem Details",
      submit: "Confirm Appointment",
      successTitle: "Appointment Booked Successfully!",
      successDesc: "Our team will contact you within 15 minutes. Confirmation details sent to WhatsApp.",
      hospitalAddress: "Location: JK Ortho Hospital, Near Bedi Puliya Square, Karwi, Chitrakoot",
    },

    // Technology
    tech: {
      title: "Advanced Medical Technology for Precise Care",
      subtitle: "Translating medical technology into patient benefits and faster recovery",
      step1: "1. What it is?",
      step2: "2. Where it is used?",
      step3: "3. Clinician Benefit",
      step4: "4. Patient Experience",
    },

    // Patient Stories
    stories: {
      title: "Real Patient Recovery Stories",
      subtitle: "Inspiring recovery journeys from Chitrakoot and neighboring districts",
      all: "All Stories",
      knee: "Knee Replacement",
      hip: "Hip Replacement",
      sports: "Sports Injury",
      trauma: "Trauma Recovery",
    },

    // Contact & Emergency
    contact: {
      title: "Contact Us & Visit Hospital",
      addressTitle: "Hospital Location",
      addressText: "JK Ortho Hospital, Bedi Puliya Square, Karwi, District - Chitrakoot, Uttar Pradesh - 210205",
      landmarks: "Landmark: Near Bedi Puliya Bus Stand, 2 km from Karwi Railway Station",
      opdHoursTitle: "OPD Hours",
      opdHoursText: "Monday to Saturday: 9:00 AM - 7:00 PM | Sunday: Emergency open 24 Hours",
      emergencyNotice: "For emergencies, directly visit the 24/7 Trauma Unit. No appointment required.",
    },

    // General UI
    common: {
      readMore: "Read Details",
      back: "Back",
      close: "Close",
      callNow: "Call Now",
      getDirections: "Get Directions (Google Maps)",
      whatsapp: "Chat on WhatsApp",
      select: "Select",
      clear: "Clear",
    }
  }
};
