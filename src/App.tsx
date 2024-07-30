import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  Navigate, // Added this import
} from "react-router-dom";
import Contact from "./pages/Contact";
import Website from "./pages/Website";
import ContactConfirm from "./pages/ContactConfirm";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Website - Lodgr"; // Updated title and metaDescription
        metaDescription = "Learn more about Lodgr's website features.";
        break;
      case "/website":
        title = "Website - Lodgr"; // Updated title and metaDescription
        metaDescription = "Learn more about Lodgr's website features.";
        break;
      case "/contact-confirm":
        title = "Contact Confirm - Lodgr"; // Updated title and metaDescription
        metaDescription = "Thank you for getting in touch with Lodgr.";
        break;
      case "/contact":
        title = "Contact - Lodgr"; // Updated title and metaDescription
        metaDescription = "Get in touch with Lodgr.";
        break;
      default: // Added default case
        title = "Lodgr";
        metaDescription = "Welcome to Lodgr, your ultimate lodging solution.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      let metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (!metaDescriptionTag) { // Ensure meta tag creation
        metaDescriptionTag = document.createElement("meta");
        metaDescriptionTag.name = "description";
        document.head.appendChild(metaDescriptionTag);
      }
      metaDescriptionTag.content = metaDescription;
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/website" replace />} /> // Updated route
      <Route path="/website" element={<Website />} />
      <Route path="/contact-confirm" element={<ContactConfirm />} />
      <Route path="/contact" element={<Contact />} /> // Added route for contact
      <Route path="*" element={<Navigate to="/website" replace />} /> // Added wildcard route
    </Routes>
  );
}

export default App;
