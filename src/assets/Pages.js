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

const pages = [
  {
    icon: overview,
    name: "Overview",
    subPages: [],
  },
  {
    icon: myProfile,
    name: "My Profile",
    subPages: ["General", "Address", "Academics", "Personal"],
  },
  {
    icon: dues,
    name: "Dues",
    subPages: ["Deposits", "Arrears", "Current Status", "Fee Demand"],
  },
  {
    icon: certificates,
    name: "Certificates",
    subPages: [],
  },
  {
    icon: scholarships,
    name: "Scholarships",
    subPages: ["MCN (PS-I)", "SAF", "GATE"],
  },
  {
    icon: travelConcessions,
    name: "Travel Concessions",
    subPages: ["Home", "PS-I", "PS-II"],
  },
  {
    icon: clubs,
    name: "Clubs",
    subPages: [],
  },
  {
    icon: raf,
    name: "RAF",
    subPages: [],
  },
  {
    icon: passportAndMess,
    name: "Passport & Mess",
    subPages: [],
  },
  {
    icon: uploadingPhotoForIdCard,
    name: "Uploading Photo for ID Card",
    subPages: [],
  },
  {
    icon: duplicateIdCard,
    name: "Duplicate ID Card",
    subPages: [],
  },
  {
    icon: orientationProgram,
    name: "Orientation Program",
    subPages: [],
  },
];

export default pages;
