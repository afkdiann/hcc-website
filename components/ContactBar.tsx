import Link from "next/link";

function ContactBar() {

  return (
    <div className="hidden md:flex justify-end space-x-8 py-2.5 w-full bg-black bg-[url('/images/searchbar-background.png')] bg-cover bg-center">
      <Link className="text-xs font-bold pr-16" href="/about">CONTACT</Link>
    </div>
  );
}

export default ContactBar;
