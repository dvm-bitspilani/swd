import { createBrowserRouter, Navigate } from "react-router-dom";
import React from "react";

import Overview from "./components/Content/Overview/Overview";
import Certificates from "./components/Content/Certificates/Certificates";
import Clubs from "./components/Content/Clubs/Clubs";
import UploadPhotoForIdCard from "./components/Content/UploadPhotoForIdCard/UploadPhotoForIdCard";
import DuplicateIdCard from "./components/Content/DuplicateIdCard/DuplicateIdCard";
import RAF from "./components/Content/RAF/RAF";
import PassportAndMess from "./components/Content/Passport&Mess/Passport&Mess";

import MyProfile from "./components/Content/MyProfile/MyProfile";
import General from "./components/Content/MyProfile/myProfileSubPage/General/General";
import Address from "./components/Content/MyProfile/myProfileSubPage/Address/Address";
import Academics from "./components/Content/MyProfile/myProfileSubPage/Academics/Academics";
import Personal from "./components/Content/MyProfile/myProfileSubPage/Personal/Personal";

import Scholarships from "./components/Content/Scholarships/Scholarships";
import SAF from "./components/Content/Scholarships/scholarshipsSubPage/SAF/SAF";
import MCN from "./components/Content/Scholarships/scholarshipsSubPage/MCN/MCN";
import Gate from "./components/Content/Scholarships/scholarshipsSubPage/Gate/Gate";

import Dues from "./components/Content/Dues/Dues";
import Deposits from "./components/Content/Dues/duesSubPages/Deposits/Deposits";
import CurrentStatus from "./components/Content/Dues/duesSubPages/CurrentStatus/CurrentStatus";
import FeeDemand from "./components/Content/Dues/duesSubPages/FeeDemand/FeeDemand";

import TravelConcessions from "./components/Content/TravelConcessions/TravelConcessions";
import Home from "./components/Content/TravelConcessions/travelConcessionsSubPages/Home/Home";
import PSI from "./components/Content/TravelConcessions/travelConcessionsSubPages/PSI/PSI";
import PSII from "./components/Content/TravelConcessions/travelConcessionsSubPages/PSII/PSII";

import PageStructure from "./PageStructure/PageStructure";
import Pages from "/src/assets/Pages";

// Function to get the correct component by name
const getComponentByName = (name) => {
  const componentMap = {
    overview: Overview,
    certificates: Certificates,
    clubs: Clubs,
    "uploading-photo-for-id-card": UploadPhotoForIdCard,
    "duplicate-id-card": DuplicateIdCard,
    raf: RAF,
    "passport-and-mess": PassportAndMess,
    "my-profile": MyProfile,
    general: General,
    address: Address,
    academics: Academics,
    personal: Personal,
    scholarships: Scholarships,
    saf: SAF,
    "mcn-ps-i": MCN,
    gate: Gate,
    dues: Dues,
    deposits: Deposits,
    "current-status": CurrentStatus,
    "fee-demand": FeeDemand,
    "travel-concessions": TravelConcessions,
    home: Home,
    "ps-i": PSI,
    "ps-ii": PSII,
  };
  return componentMap[name] || (() => <div>Component not found</div>);
};

// Function to generate routes dynamically
const generateRoutes = (pages) => {
  return pages.map((page) => {
    const hasSubPages = page.subPages?.length > 0;

    return {
      path: page.url,
      element: React.createElement(getComponentByName(page.url)),
      children: hasSubPages
        ? [
            {
              index: true,
              element: <Navigate to={page.subPages[0].url} replace />,
            },
            ...page.subPages.map((subPage) => ({
              path: subPage.url,
              element: React.createElement(getComponentByName(subPage.url)),
            })),
          ]
        : undefined,
    };
  });
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageStructure />,
    children: [
      { index: true, element: <Navigate to={`/${Pages[0].url}`} replace /> },
      ...generateRoutes(Pages),
    ],
  },
]);

export default router;
