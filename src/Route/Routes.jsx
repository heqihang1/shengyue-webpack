import React from "react";
import AboutUs from "../pages/AboutUs";
import Business from "../pages/Business/Business";
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
]
export default routesList;