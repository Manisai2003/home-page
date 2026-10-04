export const HELPLINE = "+91-9837983791";
export const HELPLINE_HREF = "tel:+919837983791";
export const EMAIL = "info@tis.edu.in";
export const ADDRESS =
  "Vill. Dhoolkot, near Tula's Institute Selaqui, near Mandir, Dehradun, Uttarakhand, 248197";

export const URLS = {
  home: "https://tis.edu.in/",
  admission: "https://tis.edu.in/admission-procedure/",
  virtualTour: "https://tis.edu.in/virtual-tour/",
  privacy: "https://tis.edu.in/privacy-policy/",
  terms: "https://tis.edu.in/terms-conditions/",
  directions:
    "https://www.google.com/maps/place/Tula's+International+School+-+Best+Boarding+School+in+Dehradun+(Uttarakhand)/@30.3430336,77.8865903,17z",
} as const;

export const NAV_ITEMS = [
  { label: "About TIS", href: URLS.home },
  { label: "Academics", href: URLS.home },
  { label: "Boarding Life", href: URLS.home },
  { label: "Beyond Academics", href: URLS.home },
  { label: "Admission", href: URLS.admission },
  { label: "Mandatory Disclosure", href: URLS.home },
  { label: "Quick Links", href: "#quick-links" },
] as const;

export const HEADLINE = ["Transform", "your", "future", "with", "top-quality", "education"];

export const DIAL_CODES = [
  { code: "+91", label: "India +91" },
  { code: "+971", label: "UAE +971" },
  { code: "+1", label: "USA +1" },
  { code: "+44", label: "UK +44" },
  { code: "+977", label: "Nepal +977" },
  { code: "+975", label: "Bhutan +975" },
  { code: "+61", label: "Australia +61" },
  { code: "+65", label: "Singapore +65" },
  { code: "+966", label: "Saudi +966" },
  { code: "+974", label: "Qatar +974" },
  { code: "+968", label: "Oman +968" },
  { code: "+965", label: "Kuwait +965" },
] as const;

export const STAGES = [
  {
    title: "Register",
    text: "Fill in your personal details in the form above and register as a user. Once registered, you can use your mobile number to log in.",
  },
  { title: "Add academic details", text: "Fill in your academic details and upload your documents." },
  { title: "Complete your application", text: "Complete your application form and pay the application fee." },
  {
    title: "Interview",
    text: "We will send you a confirmation email for the interview date, subject to availability.",
  },
];

export const LIFE_ROWS = [
  {
    title: "Academics",
    text: "World-class education that helps every student unlock their potential.",
    cta: "Explore academics",
  },
  {
    title: "Boarding life",
    text: "A nurturing home away from home at the foot of the Himalayas in Dehradun.",
    cta: "Explore boarding life",
  },
  {
    title: "Beyond academics",
    text: "State-of-the-art facilities that let students excel outside the classroom too.",
    cta: "Explore beyond academics",
  },
];

export const FOOTER_LINKS = [
  { label: "FAQ", href: "https://tis.edu.in/faq/" },
  {
    label: "Calendar",
    href: "https://tis.edu.in/_next/static/files/src/app/assets/MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf",
  },
  {
    label: "Brochure",
    href: "https://tis.edu.in/_next/static/files/src/app/assets/MandatoryPDF/TIS_BROCHURE.pdf",
  },
  { label: "Registration form", href: "https://tis.edu.in/admission-procedure/registration-form/" },
  { label: "Blogs", href: "https://tis.edu.in/blog" },
  { label: "Privacy policy", href: URLS.privacy },
  { label: "Terms & conditions", href: URLS.terms },
  { label: "Fedena login", href: "https://tis.fedena.com/" },
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/tulasinternationalschool/" },
  { label: "X (Twitter)", href: "https://twitter.com/tulas_intschool?lang=en" },
  { label: "LinkedIn", href: "https://www.linkedin.com/school/tulas-international-school/" },
  { label: "Instagram", href: "https://www.instagram.com/tulasinternationalschool/?hl=en" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw" },
];
