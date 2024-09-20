export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
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
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
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
