import overview from "/svgs/overview.svg";
import myProfile from "/svgs/myProfile.svg";
import dues from "/svgs/dues.svg";
import certificates from "/svgs/certificates.svg";
import scholarships from "/svgs/scholarships.svg";
import travelConcessions from "/svgs/travelConcessions.svg";
import clubs from "/svgs/clubs.svg";
import raf from "/svgs/raf.svg";
import passportAndMess from "/svgs/passportAndMess.svg";
import uploadingPhotoForIdCard from "/svgs/uploadingPhotoForIdCard.svg";
import duplicateIdCard from "/svgs/duplicateIdCard.svg";
import orientationProgram from "/svgs/orientationProgram.svg";

const Pages = [
  {
    icon: overview,
    name: "Overview",
    url: "overview",
    subPages: [],
  },
  {
    icon: myProfile,
    name: "My Profile",
    url: "my-profile",
    subPages: [
      { name: "General", url: "general" },
      { name: "Address", url: "address" },
      { name: "Academics", url: "academics" },
      { name: "Personal", url: "personal" },
    ],
  },
  {
    icon: dues,
    name: "Dues",
    url: "dues",
    subPages: [
      { name: "Deposits", url: "deposits" },
      { name: "Arrears", url: "arrears" },
      { name: "Current Status", url: "current-status" },
      { name: "Fee Demand", url: "fee-demand" },
    ],
  },
  {
    icon: certificates,
    name: "Certificates",
    url: "certificates",
    subPages: [],
  },
  {
    icon: scholarships,
    name: "Scholarships",
    url: "scholarships",
    subPages: [
      { name: "MCN (PS-I)", url: "mcn-ps-i" },
      { name: "SAF", url: "saf" },
      { name: "GATE", url: "gate" },
    ],
  },
  {
    icon: travelConcessions,
    name: "Travel Concessions",
    url: "travel-concessions",
    subPages: [
      { name: "Home", url: "home" },
      { name: "PS-I", url: "ps-i" },
      { name: "PS-II", url: "ps-ii" },
    ],
  },
  {
    icon: clubs,
    name: "Clubs",
    url: "clubs",
    subPages: [],
  },
  {
    icon: raf,
    name: "RAF",
    url: "raf",
    subPages: [],
  },
  {
    icon: passportAndMess,
    name: "Passport & Mess",
    url: "passport-and-mess",
    subPages: [],
  },
  {
    icon: uploadingPhotoForIdCard,
    name: "Uploading Photo for ID Card",
    url: "uploading-photo-for-id-card",
    subPages: [],
  },
  {
    icon: duplicateIdCard,
    name: "Duplicate ID Card",
    url: "duplicate-id-card",
    subPages: [],
  },
  {
    icon: orientationProgram,
    name: "Orientation Program",
    url: "orientation-program",
    subPages: [],
  },
];

export default Pages;
