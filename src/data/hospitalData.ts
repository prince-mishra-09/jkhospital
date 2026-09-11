export interface Doctor {
  id: string;
  nameHi: string;
  nameEn: string;
  roleHi: string;
  roleEn: string;
  specialtyId: string;
  degrees: string;
  experience: number;
  opdTimingHi: string;
  opdTimingEn: string;
  fee: number;
  image: string;
  bioHi: string;
  bioEn: string;
  treatedConditions: string[];
  procedures: string[];
}

export interface Treatment {
  id: string;
  category: string;
  titleHi: string;
  titleEn: string;
  descHi: string;
  descEn: string;
  whoNeedsHi: string;
  whoNeedsEn: string;
  alternativesHi: string;
  alternativesEn: string;
  recoveryHi: string;
  recoveryEn: string;
  techUsedHi: string;
  techUsedEn: string;
  image?: string;
}

export interface Condition {
  id: string;
  bodyPart: 'knee' | 'hip' | 'spine' | 'shoulder' | 'hand' | 'foot';
  titleHi: string;
  titleEn: string;
  symptomsHi: string[];
  symptomsEn: string[];
  causesHi: string;
  causesEn: string;
  nonSurgicalHi: string;
  nonSurgicalEn: string;
  surgicalOptionHi: string;
  surgicalOptionEn: string;
  image?: string;
}

export const DOCTORS_DATA: Doctor[] = [
  {
    id: "doc-1",
    nameHi: "डॉ. जे.के. सिंह (Dr. J.K. Singh)",
    nameEn: "Dr. J.K. Singh",
    roleHi: "वरिष्ठ जोड़ प्रत्यारोपण एवं नी सर्जन",
    roleEn: "Senior Joint Replacement & Knee Specialist",
    specialtyId: "jointReplacement",
    degrees: "MBBS, MS (Ortho), Fellowship in Joint Replacement (Germany)",
    experience: 18,
    opdTimingHi: "सोम - शनि: 10:00 AM - 04:00 PM",
    opdTimingEn: "Mon - Sat: 10:00 AM - 04:00 PM",
    fee: 500,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80",
    bioHi: "18+ वर्षों का समृद्ध अनुभव। 8,000 से अधिक सफल Total Knee एवं Hip replacement ऑपरेशन्स किए हैं।",
    bioEn: "18+ years of rich experience. Successfully performed over 8,000 Knee and Hip replacement surgeries.",
    treatedConditions: ["Knee Osteoarthritis", "Hip Avascular Necrosis", "Rheumatoid Arthritis"],
    procedures: ["Total Knee Replacement (TKR)", "Total Hip Replacement (THR)", "Robotic Surgery"]
  },
  {
    id: "doc-2",
    nameHi: "डॉ. ए.के. वर्मा (Dr. A.K. Verma)",
    nameEn: "Dr. A.K. Verma",
    roleHi: "ट्रौमा, आर्थ्रोस्कोपी एवं स्पोर्ट्स इंजरी विशेषज्ञ",
    roleEn: "Trauma & Arthroscopy Specialist",
    specialtyId: "traumaArthroscopy",
    degrees: "MBBS, DNB (Ortho), Fellowship in Arthroscopy (AIIMS)",
    experience: 12,
    opdTimingHi: "सोम - शनि: 11:00 AM - 06:00 PM",
    opdTimingEn: "Mon - Sat: 11:00 AM - 06:00 PM",
    fee: 400,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&auto=format&fit=crop&q=80",
    bioHi: "दूरबीन विधि (Arthroscopy) द्वारा ACL/PCL लिगामेंट एवं कंधे की जटिल सर्जरी में निपुण। 24/7 ट्रौमा केयर हेड।",
    bioEn: "Expert in minimally invasive keyhole arthroscopic surgeries for ACL, PCL & Shoulder tears. Head of 24/7 Trauma Care.",
    treatedConditions: ["ACL Ligament Tear", "Meniscus Injury", "Complex Bone Fractures"],
    procedures: ["ACL Reconstruction", "Arthroscopic Surgery", "Complex Fracture Fixation"]
  },
  {
    id: "doc-3",
    nameHi: "डॉ. संगीता त्रिपाठी (Dr. Sangeeta Tripathi)",
    nameEn: "Dr. Sangeeta Tripathi",
    roleHi: "स्पाइन व रीढ़ की हड्डी विशेषज्ञ",
    roleEn: "Spine & Endoscopic Surgery Specialist",
    specialtyId: "spineCare",
    degrees: "MBBS, MS (Ortho), FISM (Spine)",
    experience: 14,
    opdTimingHi: "सोम - शनि: 10:30 AM - 03:30 PM",
    opdTimingEn: "Mon - Sat: 10:30 AM - 03:30 PM",
    fee: 500,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80",
    bioHi: "बिना बड़े चीरे के माइक्रो-एंडोस्कोपिक स्पाइन सर्जरी। स्लिप डिस्क, साइटिका व कमर दर्द का आधुनिक इलाज।",
    bioEn: "Specializes in Micro-endoscopic Spine Surgery for Sciatica, Slip Disc, and chronic back pain without major incisions.",
    treatedConditions: ["Slip Disc / Sciatica", "Spinal Stenosis", "Scoliosis"],
    procedures: ["Endoscopic Spine Surgery", "Microdiscectomy", "Spinal Fusion"]
  }
];

export const TREATMENTS_DATA: Treatment[] = [
  {
    id: "tkr",
    category: "Joint Replacement",
    titleHi: "टोटल नी रिप्लेसमेंट (Total Knee Replacement)",
    titleEn: "Total Knee Replacement (TKR)",
    descHi: "घुटने के अत्यधिक घिसे हुए कार्टिलेज को हटाकर आधुनिक जर्मन इम्प्लांट लगाना ताकि मरीज बिना दर्द चल सके।",
    descEn: "Removing damaged knee cartilage and inserting modern bio-compatible implants for smooth, pain-free mobility.",
    whoNeedsHi: "जिन मरीजों को घुटने में गंभीर आर्थराइटिस हो, रात में दर्द रहे या चलने-फिरने में अत्यधिक असमर्थता हो।",
    whoNeedsEn: "Patients suffering from severe knee osteoarthritis, persistent pain at rest, and severe walking limitation.",
    alternativesHi: "शुरुआती चरण में फिजियोथेरेपी, वजन नियंत्रण, जेल इंजेक्शन या पीआरपी (PRP) थेरेपी।",
    alternativesEn: "Early stage physical therapy, weight reduction, hyaluronic acid injections, or PRP therapy.",
    recoveryHi: "अगले ही दिन छड़ी के सहारे चलना शुरू, 3 से 4 हफ्तों में सामान्य दैनिक कार्य संभव।",
    recoveryEn: "Walking supported on day 1 after surgery; full daily activities restored in 3 to 4 weeks.",
    techUsedHi: "कंप्यूटर नेविगेशन व 3D एलाइनमेंट टेक्नोलॉजी",
    techUsedEn: "Computer Navigation & 3D Precision Alignment",
    image: "/images/knee_joint_replacement.jpg"
  },
  {
    id: "thr",
    category: "Joint Replacement",
    titleHi: "टोटल हिप रिप्लेसमेंट (Total Hip Replacement)",
    titleEn: "Total Hip Replacement (THR)",
    descHi: "कूल्हे के घिसे हुए बॉल एवं सॉकेट का जर्मन सेरामिक् प्रोस्थेसिस द्वारा सफल प्रत्यारोपण।",
    descEn: "Advanced hip joint replacement using ceramic prostheses for AVN and severe arthritis.",
    whoNeedsHi: "AVN (Avascular Necrosis), कूल्हे के फ्रैक्चर या गंभीर आर्थराइटिस के मरीज।",
    whoNeedsEn: "Patients with Avascular Necrosis (AVN), hip fractures, or advanced osteoarthritis.",
    alternativesHi: "शुरुआती अवस्था में कोर डीकम्प्रेशन व दर्द निवारक चिकित्सा।",
    alternativesEn: "Core decompression, non-weight bearing therapy in early stages.",
    recoveryHi: "2 से 3 दिन में डिस्चार्ज, 3 हफ्तों में सामान्य गतिशीलता।",
    recoveryEn: "Discharge in 2-3 days; independent walking in 3 weeks.",
    techUsedHi: "मिनिमल इनवेसिव डायरेक्ट एंटीरियर अप्रोच",
    techUsedEn: "Minimally Invasive Direct Anterior Approach",
    image: "/images/hip_joint_replacement.jpg"
  },
  {
    id: "acl",
    category: "Arthroscopy",
    titleHi: "एसीएल लिगामेंट आर्थ्रोस्कोपी (ACL Reconstruction)",
    titleEn: "ACL Ligament Reconstruction",
    descHi: "खेलने या फिसलने से घुटने की गद्दी या लिगामेंट टूटने पर 2 मिमी के सूक्ष्म छिद्र द्वारा बिना चीरा सर्जरी।",
    descEn: "Minimally invasive keyhole arthroscopic surgery to reconstruct torn ACL ligaments using tendon grafts.",
    whoNeedsHi: "खिलाड़ी, युवा मरीज जिनके घुटने में लचक या असंतुलन आ जाता है।",
    whoNeedsEn: "Athletes, active individuals experiencing knee instability or giving-way after injury.",
    alternativesHi: "यदि लचक न हो तो नी ब्रेस व गहन फिजियोथेरेपी एक्सरसाइज।",
    alternativesEn: "Knee bracing and intensive physiotherapy if instability is minimal.",
    recoveryHi: "2 से 3 हफ्तों में ड्राइविंग, 4 से 6 महीने में दोबारा खेल के मैदान में वापसी।",
    recoveryEn: "Driving restored in 2-3 weeks; return to competitive sports in 4-6 months.",
    techUsedHi: "HD आर्थ्रोस्कोपिक कैमरा व टाइटेनियम एंकर सिस्टम",
    techUsedEn: "HD Arthroscopic Video Camera & Titanium Anchor Systems",
    image: "/images/arthroscopy_sports_knee.jpg"
  },
  {
    id: "endoscopic-spine",
    category: "Spine",
    titleHi: "एंडोस्कोपिक डिस्क सर्जरी (Micro-Endoscopic Spine Surgery)",
    titleEn: "Endoscopic Spine Discectomy",
    descHi: "साइटिका या स्लिप डिस्क में दबी हुई नस को एंडोस्कोप द्वारा बिना मांसपेशियों को नुकसान पहुंचाए मुक्त करना।",
    descEn: "Ultra-precise endoscopic removal of herniated disc fragment compressing the sciatic nerve.",
    whoNeedsHi: "जिनके पैर में तेज नस का खिंचाव, सुन्नपन या लगातार कमर दर्द की शिकायत हो।",
    whoNeedsEn: "Patients experiencing radiating leg pain (Sciatica), numbness, or severe lumbar disc prolapse.",
    alternativesHi: "दवाएं, नर्व रूट ब्लॉक इंजेक्शन एवं कोर स्ट्रेनथिंग एक्सरसाइज।",
    alternativesEn: "Medication, epidural nerve block injections, and spinal core exercises.",
    recoveryHi: "सर्जरी के 24 घंटे के भीतर डिस्चार्ज, 7 से 10 दिनों में ऑफिस वर्क संभव।",
    recoveryEn: "Discharge within 24 hours of surgery; office work resumption in 7-10 days.",
    techUsedHi: "अल्ट्रा-फिल्टर्ड C-Arm एक्स-रे व एंडोस्कोपिक टावर",
    techUsedEn: "Ultra-filtered C-Arm Fluoroscopy & Endoscopic Tower",
    image: "/images/spine_sciatica_care.jpg"
  }
];

export const CONDITIONS_DATA: Condition[] = [
  {
    id: "knee-oa",
    bodyPart: "knee",
    titleHi: "घुटने का गठिया (Knee Osteoarthritis)",
    titleEn: "Knee Osteoarthritis",
    symptomsHi: ["सीढ़ी चढ़ने-उतरने में तेज दर्द", "घुटने में कट-कट की आवाज", "सुबह उठने पर जकड़न", "पैर का टेढ़ापन (Bow legs)"],
    symptomsEn: ["Severe pain climbing stairs", "Crepitus / clicking sound in knee", "Morning stiffness", "Bowing of the knee"],
    causesHi: "उम्र के साथ घुटने की गद्दी (कार्टिलेज) का घिस जाना, अत्यधिक वजन, पुरानी चोट।",
    causesEn: "Age-related wear and tear of cartilage, obesity, or prior joint trauma.",
    nonSurgicalHi: "वजन कम करना, क्वाड्रिसेप्स व्यायाम, नी सपोर्ट कैप, दर्द निवारक जेल।",
    nonSurgicalEn: "Weight management, quadriceps strengthening, knee braces, anti-inflammatory gel.",
    surgicalOptionHi: "यदि घिसना 4th स्टेज पर पहुंच जाए तो नी रिप्लेसमेंट सबसे सुरक्षित उपाय है।",
    surgicalOptionEn: "Total Knee Replacement is the definitive cure for Grade 4 severe osteoarthritis.",
    image: "/images/knee_joint_replacement.jpg"
  },
  {
    id: "sciatica",
    bodyPart: "spine",
    titleHi: "साइटिका व कमर की नस दबना (Sciatica & Slip Disc)",
    titleEn: "Sciatica & Slip Disc",
    symptomsHi: ["कमर से उठकर पैर की उंगलियों तक तेज दर्द", "पैर सुन्न होना या चींटियां चलना", "ज्यादा देर बैठने में दिक्कत"],
    symptomsEn: ["Radiating pain from lower back to foot", "Numbness / tingling in leg", "Difficulty sitting or walking"],
    causesHi: "रीढ़ की हड्डी की डिस्क का खिसककर नस को दबाना, गलत मुद्रा में भारी वजन उठाना।",
    causesEn: "Herniation of intervertebral disc pressing against spinal nerve roots.",
    nonSurgicalHi: "बैड रेस्ट, पेल्विक ट्रैक्शन, नर्व टॉनिक दवाएं एवं फिजियोथेरेपी।",
    nonSurgicalEn: "Short bed rest, spinal decompression therapy, nerve medications, and physical therapy.",
    surgicalOptionHi: "एंडोस्कोपिक विधि द्वारा 10 मिनट में दबी नस को खोलना।",
    surgicalOptionEn: "Keyhole endoscopic discectomy for fast nerve decompression.",
    image: "/images/spine_sciatica_care.jpg"
  }
];

export const TECH_ITEMS = [
  {
    id: "c-arm",
    titleHi: "डिजिटल C-Arm एवं 3D फ्लूरोस्कोपी",
    titleEn: "Digital C-Arm & 3D Fluoroscopy",
    whatHi: "सर्जरी के दौरान real-time 3D एक्स-रे इमेजेस दिखाने वाली मशीन।",
    whatEn: "Real-time intraoperative 3D fluoroscopy imaging system.",
    whereHi: "जटिल हड्डी फ्रैक्चर, प्लेटिंग व स्पाइन सर्जरी में।",
    whereEn: "Used in complex fracture fixations, plating, and spinal procedures.",
    docBenefitHi: "सर्जन बिना त्वचा काटे अंदरूनी हड्डी की 100% सही स्थिति देख पाते हैं।",
    docBenefitEn: "Allows 100% accurate visual alignment without wide incisions.",
    patientBenefitHi: "छोटे चीरे, कम खून का बहाव, और ऑपरेटर का सटीक परिणाम।",
    patientBenefitEn: "Smaller incisions, minimal blood loss, and highly precise surgical outcome.",
    image: "/images/modular_laminar_ot.jpg"
  },
  {
    id: "modular-ot",
    titleHi: "अल्ट्रा-क्लीन लेमिनार फ्लो मॉड्युलर ओटी",
    titleEn: "Ultra-Clean Laminar Flow Modular OT",
    whatHi: "HEPA फिल्टर युक्त शून्य-बैक्टीरिया वातावरण वाला ऑपरेशन थिएटर।",
    whatEn: "Zero-bacteria laminar airflow operating room equipped with HEPA filters.",
    whereHi: "सभी जोड़ प्रत्यारोपण (TKR/THR) एवं स्पाइन सर्जरी में।",
    whereEn: "Mandatory for all Joint Replacements & Spine Surgeries.",
    docBenefitHi: "इंफेक्शन का 0% खतरा, जिससे जटिल ऑपरेशन भी सुरक्षित रहते हैं।",
    docBenefitEn: "Zero infection environment ensuring maximum surgical safety.",
    patientBenefitHi: "सर्जरी के बाद जल्दी रिकवरी एवं इंफेक्शन का कोई भय नहीं।",
    patientBenefitEn: "Infection-free recovery with peace of mind.",
    image: "/images/modular_laminar_ot.jpg"
  }
];

export const PATIENT_STORIES = [
  {
    id: "story-1",
    nameHi: "रामेश्वर प्रसाद गुप्ता (उम्र 64 वर्ष, कर्वी)",
    nameEn: "Rameshwar Prasad Gupta (Age 64, Karwi)",
    conditionHi: "दोनों घुटनों में गंभीर आर्थराइटिस",
    conditionEn: "Severe Bilateral Knee Osteoarthritis",
    treatmentHi: "बोथ नी रिप्लेसमेंट (TKR)",
    treatmentEn: "Bilateral Total Knee Replacement",
    storyHi: "मैं पिछले 5 सालों से चलने में पूरी तरह लाचार था। जेके आर्थो में डॉ. जे.के. सिंह ने मेरा ऑपरेशन किया। आज मैं बिना किसी लाठी के 2 किमी रोज टहलता हूं।",
    storyEn: "I was crippled with knee pain for 5 years. Dr. J.K. Singh operated on both my knees. Today I walk 2 km daily without any support.",
    rating: 5
  },
  {
    id: "story-2",
    nameHi: "अमित कुमार (उम्र 26 वर्ष, बांदा)",
    nameEn: "Amit Kumar (Age 26, Banda)",
    conditionHi: "क्रिकेट खेलते समय ACL लिगामेंट टूटना",
    conditionEn: "Sports ACL Ligament Tear",
    treatmentHi: "आर्थ्रोस्कोपिक एसीएल रीकंस्ट्रक्शन",
    treatmentEn: "Arthroscopic ACL Reconstruction",
    storyHi: "चोट के बाद मुझे लगा था कि मेरा क्रिकेट करियर खत्म हो गया। दूरबीन विधि से ऑपरेशन के 4 महीने बाद मैं दोबारा मैच खेल रहा हूं।",
    storyEn: "I thought my cricket playing days were over after the tear. Keyhole surgery at JK Ortho got me back on the ground in 4 months.",
    rating: 5
  }
];
