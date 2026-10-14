import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-light border-t border-slate-200">
      {" "}
      <p className="text-sm text-slate-500">
        {" "}
        &copy; {new Date().getFullYear()} Mohamed Safeen M Portfolio. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-slate-100 hover:bg-slate-100/80 text-slate-600 transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};