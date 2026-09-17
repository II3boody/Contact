export default function ContactDetails({ isDark }: { isDark: boolean }) {
    const details = [
        {
            label: "Email",
            value: "abdelrahmankhalidakm@gmail.com",
            href: "mailto:abdelrahmankhalidakm@gmail.com",
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
            ),
        },
        {
            label: "Phone",
            value: "+20 102 617 2996",
            href: "tel:+201026172996",
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
            ),
        },
        {
            label: "Location",
            value: "Egypt",
            icon: (
                <>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                </>
            ),
        },
    ];

    return (
        <div className="mt-10 space-y-5">
            {details.map((item) => {
                const row = (
                    <>
                        <span
                            className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-teal-500 transition-colors ${isDark
                                ? "border-white/10 bg-white/5 group-hover:border-teal-400/40 group-hover:bg-teal-400/10"
                                : "border-slate-200 bg-slate-50 group-hover:border-teal-500/40 group-hover:bg-teal-50"
                                }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4.5 w-4.5"
                            >
                                {item.icon}
                            </svg>
                        </span>
                        <span className="flex flex-col">
                            <span
                                className={`text-xs ${isDark ? "text-slate-500" : "text-slate-400"
                                    }`}
                            >
                                {item.label}
                            </span>
                            <span
                                className={`text-sm transition-colors ${isDark
                                    ? "text-slate-200 group-hover:text-white"
                                    : "text-slate-700 group-hover:text-slate-900"
                                    }`}
                            >
                                {item.value}
                            </span>
                        </span>
                    </>
                );

                return item.href ? (
                    <a
                        key={item.label}
                        href={item.href}
                        className="group flex items-start gap-4"
                    >
                        {row}
                    </a>
                ) : (
                    <div key={item.label} className="group flex items-start gap-4">
                        {row}
                    </div>
                );
            })}
        </div>
    );
}
