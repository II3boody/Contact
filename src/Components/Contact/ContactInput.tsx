import React from 'react';
import styles from './ContactForm.module.css';

interface ContactInputProps {
    id: string;
    name: string;
    label: string;
    type?: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    placeholder?: string;
    error?: string;
    isDark: boolean;
    isTextArea?: boolean;
    rows?: number;
}

export default function ContactInput({
    id,
    name,
    label,
    type = "text",
    value,
    onChange,
    placeholder,
    error,
    isDark,
    isTextArea,
    rows
}: ContactInputProps) {
    const inputClasses = isDark
        ? "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 transition focus:border-teal-500/60 focus:bg-white/[0.06] focus:outline-none focus:ring-4 focus:ring-teal-500/10"
        : "w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 transition focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-teal-500/10";

    const labelClasses = `mb-1.5 block text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`;
    const errorClass = error ? styles.errorInput : "";
    const combinedClasses = `${inputClasses} ${errorClass} ${isTextArea ? "resize-none" : ""}`.trim();

    return (
        <div>
            <label htmlFor={id} className={labelClasses}>
                {label}
            </label>
            {isTextArea ? (
                <textarea
                    id={id}
                    name={name}
                    rows={rows || 5}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={combinedClasses}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${id}-error` : undefined}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={combinedClasses}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${id}-error` : undefined}
                />
            )}
            {error && (
                <p className="mt-1.5 text-xs text-red-500" id={`${id}-error`}>
                    {error}
                </p>
            )}
        </div>
    );
}
