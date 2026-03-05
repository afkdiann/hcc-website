import Link from "next/link";

function ContactBar() {
  return (
    <div className="hidden md:flex justify-end space-x-8 py-2.5 w-full bg-gray-100 bg-cover bg-center">
      <Link className="text-xs font-bold pr-16" href="/people">
        CONTACT
      </Link>
    </div>
  );
}

export default ContactBar;
