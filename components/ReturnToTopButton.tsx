import { ChevronUp } from "lucide-react";

function ReturnToTopButton() {
  return (
    <button
      aria-label="Return to top"
      title="Return to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex flex-col items-center justify-center w-16 h-16 text-gray-500 font-semibold bg-[#555555] rounded-full hover:bg-[#D9DDDC]"
    >
      <ChevronUp className="w-8 h-6" />
      <p className="text-md leading-none">top</p>
    </button>
  );
}

export default ReturnToTopButton;
