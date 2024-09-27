export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Aadhaar Card",
  "PAN Card",
  "Voter ID Card",
  "Driving License",
  "Passport",
  "Student ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Dr. Naresh Trehan : Cardiovascular and Cardiothoracic Surgeon",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Dr. Leila Kapoor : Pulmonologist",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Dr. Prathap C. Reddy : Founder of Apollo Hospitals, Cardiologist",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Dr. Devi Prasad Shetty : Cardiac Surgeon",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Dr. Anita Mehta : Neurologist",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Dr. Ashok Seth : Cardiologist",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Dr. Nisha Rao : Oncologist",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Dr. Priya Sharma : Pediatrician",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Dr. Shashi Wadhwa : Neurosurgeon",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};

export const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;
export const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID;
export const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;
export const PATIENT_COLLECTION_ID =
  process.env.NEXT_PUBLIC_PATIENT_COLLECTION_ID;
export const DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID;
export const APPOINTMENT_ID = process.env.NEXT_PUBLIC_APPOINTMENT_COLLECTION_ID
