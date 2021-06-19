import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";

import MainLandingPage from "mainpage.js";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {

  return (
    <Router>
      <Switch>
        
        
        <Route path="/">
          <MainLandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
