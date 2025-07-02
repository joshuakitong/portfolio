import { Download } from 'lucide-react';
import WebDevLinks from '../components/shared/links/WebDevLinks';
import Box84Links from '../components/shared/links/Box84Links';
import Kits2gLinks from '../components/shared/links/Kits2gLinks';

export const sections = [
  {
    id: "contact-details",
    title: "Contact Details",
    content: (
      <>
        <h2 className="header">How to Reach Me</h2>
        <p className="mb-6">
          Email: joshuakitong@gmail.com<br/>
          Phone: 0905-737-9500
        </p>
        <h2 className="header">Resume</h2>
        <a
          href={`${process.env.PUBLIC_URL}/resume/Joshua_Kitong_Resume_2025.pdf`}
          download
          className="flex items-center justify-center gap-2 w-full text-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition shadow-lg"
        >
          <Download size={18} />
          <strong>Download Resume</strong>
        </a>
      </>
    )
  },
  {
    id: "links",
    title: "Pages and Socials",
    content: (
      <>
        <h2 className="header">Web Dev</h2>
        <div className="mb-6">
          <WebDevLinks />
        </div>
        <h2 className="header">BOX84</h2>
        <div className="mb-6">
          <Box84Links />
        </div>
        <h2 className="header">Kits2g</h2>
        <div className="mb-6">
          <Kits2gLinks />
        </div>
      </>
    )
  },
];