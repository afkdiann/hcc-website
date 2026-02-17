import Link from "next/link";

function SocialsSideBar() {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 space-y-4 p-4 hidden md:flex md:flex-col">
      <Link
        href="https://www.facebook.com/stonybrooku"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-700"
      >
        Facebook
      </Link>
      <Link
        href="https://twitter.com/stonybrooku"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-700"
      >
        Twitter
      </Link>
      <Link
        href="https://www.linkedin.com/school/stony-brook-university/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-700"
      >
        LinkedIn
      </Link>
      <Link
        href="https://www.instagram.com/stonybrooku/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-700"
      >
        Instagram
      </Link>
    </div>
  );
}

export default SocialsSideBar;
