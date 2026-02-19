import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

function SocialsSideBar() {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 text-white hidden md:flex md:flex-col">
      <div className="bg-black hover:bg-red-800 p-4">
        <Link
          href="https://www.facebook.com/stonybrooku"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24}/>
        </Link>
      </div>
      <div className="bg-black hover:bg-red-800 p-4">
        <Link
          href="https://twitter.com/stonybrooku"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24}/>
        </Link>
      </div>
      <div className="bg-black hover:bg-red-800 p-4">
        <Link
          href="https://www.linkedin.com/school/stony-brook-university/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24}/>
        </Link>
      </div>
      <div className="bg-black hover:bg-red-800 p-4">
        <Link
          href="https://www.instagram.com/stonybrooku/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24}/>
        </Link>
      </div>
    </div>
  );
}

export default SocialsSideBar;
