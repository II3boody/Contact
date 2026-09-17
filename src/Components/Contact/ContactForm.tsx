import { useState } from "react";
import type { ContactFormData } from "../../Types/Contact/ContactFormData";
import type { Theme } from "../../Types/Theme/Theme";
import ContactInput from "./ContactInput";
type Status = "idle" | "submitting" | "success" | "error";

type FormErrors = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
};

export default function ContactForm({ theme = "dark" }: { theme?: Theme }) {
    const isDark = theme === "dark";

    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<Status>("idle");
    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: undefined,
        }));
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim())
            newErrors.name = 'Name is required';

        if (!formData.email.trim())
            newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = "Please enter a valid email";
        if (!formData.subject.trim())
            newErrors.subject = 'Subject is required';
        if (!formData.message.trim())
            newErrors.message = 'Message is required';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setStatus("submitting");

        try {
            const response = await fetch("https://formspree.io/f/mgavebwv", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setStatus("success");

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            setTimeout(() => {
                setStatus("idle");
            }, 4000);
        } catch {
            setStatus("error");
        }
    };


    return (
        <form
            onSubmit={handleSubmit}
            className={`flex h-full flex-col justify-center p-10 transition-colors duration-300 md:rounded-r-3xl md:border-l md:border-t-0 ${isDark
                ? "border-t border-white/5 bg-[#0E1626] md:border-white/5"
                : "border-t border-slate-100 bg-white md:border-slate-100"
                }`}
        >
            <h2
                className={`text-2xl font-semibold tracking-tight ${isDark ? "text-white" : "text-slate-900"
                    }`}
            >
                Send a message
            </h2>
            <p className={`mt-2 text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                Fill in the form below and we'll get back to you shortly.
            </p>

            <div className="mt-8 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <ContactInput
                        id="name"
                        name="name"
                        label="Name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        error={errors.name}
                        isDark={isDark}
                    />

                    <ContactInput
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="...@example.com"
                        error={errors.email}
                        isDark={isDark}
                    />
                </div>

                <ContactInput
                    id="subject"
                    name="subject"
                    label="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    error={errors.subject}
                    isDark={isDark}
                />

                <ContactInput
                    id="message"
                    name="message"
                    label="Message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a bit about your project..."
                    error={errors.message}
                    isDark={isDark}
                    isTextArea
                    rows={5}
                />
            </div>

            <div className="mt-7 flex items-center gap-4">
                <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={`inline-flex items-center justify-center rounded-xl px-6 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-4 focus:ring-teal-500/20 disabled:cursor-not-allowed disabled:opacity-60 ${isDark
                        ? "bg-teal-500 text-[#0B1220] hover:bg-teal-400"
                        : "bg-slate-900 text-white hover:bg-teal-600"
                        }`}
                >
                    {status === "submitting" ? "Sending..." : "Send message"}
                </button>

                {status === "success" && (
                    <span
                        aria-live="polite"
                        className={`text-sm ${isDark ? "text-teal-400" : "text-teal-600"
                            }`}
                    >
                        Message sent — thank you.
                    </span>
                )}
                {status === "error" && (
                    <span
                        aria-live="polite"
                        className={`text-sm ${isDark ? "text-red-400" : "text-red-500"
                            }`}
                    >
                        Something went wrong, please try again.
                    </span>
                )}
            </div>
        </form>
    );
}