import type { Theme } from "../../Types/Theme/Theme";
import ContactDetails from "./ContactDetails";
import SocialLinks from "./SocialLinks";

export default function ContactInfo({ theme = "dark" }: { theme?: Theme }) {
    const isDark = theme === "dark";
    return (
        <div
            className={`relative flex h-full flex-col justify-between overflow-hidden p-10 transition-colors duration-300 md:rounded-l-3xl ${isDark ? "bg-[#0B1220] text-slate-200" : "bg-white text-slate-700"
                }`}
        >
            <div
                className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl transition-colors duration-300 ${isDark ? "bg-teal-500/20" : "bg-teal-400/25"
                    }`}
                aria-hidden="true"
            />

            <div className="relative">
                <h2
                    className={`text-3xl font-semibold tracking-tight ${isDark ? "text-white" : "text-slate-900"
                        }`}
                >
                    Let's talk
                </h2>
                <p
                    className={`mt-3 max-w-xs text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"
                        }`}
                >
                    Have a project in mind or just a question? Reach out through
                    whichever way suits you best, we usually reply within a day.
                </p>

                <ContactDetails isDark={isDark} />
            </div>

            <SocialLinks isDark={isDark} />
        </div>
    );
}