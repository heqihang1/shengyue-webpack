import React from "react";
import AboutUs from "../pages/AboutUs";
import Business from "../pages/Business/Business";
import ContactUs from "../pages/ContactUs/ContactUs";
const routesList = [
  {
    url: '/AboutUs',
    key: 'AboutUs',
    element: <AboutUs/>
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
]
export default routesList;