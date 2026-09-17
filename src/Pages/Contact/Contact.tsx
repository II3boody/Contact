import { useState, useEffect } from "react";
import ContactForm from "../../Components/Contact/ContactForm";
import ContactInfo from "../../Components/Contact/ContactInfo";
import type { Theme } from "../../Types/Theme/Theme";

export default function Contact() {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        if (savedTheme) {
            return savedTheme;
        }
        // Default to dark, or check system preference
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const isDark = theme === "dark";

    return (
        <div
            className={`relative flex min-h-screen items-center justify-center overflow-hidden p-6 transition-colors duration-500 ${isDark ? "bg-[#05070D]" : "bg-slate-50"
                }`}
        >
            <style>{`
                @keyframes drift-a {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(60px, 40px) scale(1.15); }
                }
                @keyframes drift-b {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-50px, -60px) scale(1.1); }
                }
                .drift-a { animation: drift-a 16s ease-in-out infinite; }
                .drift-b { animation: drift-b 20s ease-in-out infinite; }
                @media (prefers-reduced-motion: reduce) {
                    .drift-a, .drift-b { animation: none; }
                }
            `}</style>

            <div
                className={`pointer-events-none absolute inset-0 bg-size-[22px_22px] mask-[radial-gradient(ellipse_70%_60%_at_50%_40%,black_40%,transparent_100%)] ${isDark
                    ? "bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)]"
                    : "bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)]"
                    }`}
                aria-hidden="true"
            />

            <div
                className={`drift-a pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full blur-[120px] transition-colors duration-500 ${isDark ? "bg-teal-500/10" : "bg-teal-300/30"
                    }`}
                aria-hidden="true"
            />
            <div
                className={`drift-b pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full blur-[120px] transition-colors duration-500 ${isDark ? "bg-indigo-500/10" : "bg-indigo-300/30"
                    }`}
                aria-hidden="true"
            />

            <button
                type="button"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className={`absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${isDark
                    ? "border-white/10 bg-white/5 text-slate-200 hover:border-teal-400/40 hover:text-teal-400"
                    : "border-slate-200 bg-white text-slate-600 shadow-sm hover:border-teal-500/40 hover:text-teal-600"
                    }`}
            >
                {isDark ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.752 15.002A9.72 9.72 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                        />
                    </svg>
                )}
            </button>

            <div
                className={`relative grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-3xl border shadow-2xl transition-colors duration-500 md:grid-cols-5 ${isDark
                    ? "border-white/5 shadow-black/60"
                    : "border-slate-200 shadow-slate-900/10"
                    }`}
            >
                <div className="md:col-span-2">
                    <ContactInfo theme={theme} />
                </div>
                <div className="md:col-span-3">
                    <ContactForm theme={theme} />
                </div>
            </div>
        </div>
    );
}