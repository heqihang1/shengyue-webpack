import React from "react";
import AboutUs from "../pages/AboutUs";
import Business from "../pages/Business/Business";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs"
import Business from "../pages/Business/Business"
import BusinessDetails from "../pages/Components/BusinessDetails/BusinessDetails"

const routesList = [
  {
    url: '/AboutUs',
    key: 'AboutUs',
    element: <AboutUs />
  },
  {
    url: '/Business',
    key: 'Business',
    element: <Business />
  },
  {
    url: '/ContactUs',
    key: 'ContactUs',
    element: <ContactUs />
  },
  {
    url: '/Business/details',
    key: 'details',
    element: <BusinessDetails />
  }
]
export default routesList;