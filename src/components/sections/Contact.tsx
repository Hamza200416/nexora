"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { fadeUp, slideLeft, slideRight, staggerContainer } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import siteContent from "../../../data/siteContent.json";

const { contact } = siteContent;

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:border-brand-500 transition-colors duration-200 font-body";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", company: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  const contactItems = [
    { icon: Mail,   label: "Email",   value: contact.email   },
    { icon: Phone,  label: "Phone",   value: contact.phone   },
    { icon: MapPin, label: "Address", value: contact.address },
  ];

  return (
    <SectionWrapper id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <motion.div variants={fadeUp} custom={0}>
                <Badge>{contact.badge}</Badge>
              </motion.div>
              <motion.h2 variants={slideLeft} className="font-display font-extrabold text-4xl sm:text-5xl leading-tight">
                {contact.headline}
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-[var(--text-muted)] text-lg leading-relaxed">
                {contact.subheadline}
              </motion.p>
            </div>

            {/* Contact details */}
            <motion.div variants={fadeUp} custom={3} className="flex flex-col gap-4">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold font-mono uppercase tracking-widest text-[var(--text-muted)] mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-[var(--text-primary)]">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} custom={4} className="flex gap-3">
              {contact.social.map((s) => {
                const Icon = getIcon(s.icon);
                return (
                  <motion.a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl gradient-border glass flex items-center justify-center text-[var(--text-muted)] hover:text-brand-400 transition-colors"
                    aria-label={s.platform}
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="gradient-border glass rounded-2xl p-8">
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-500/10 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-brand-400" />
                  </div>
                  <h3 className="font-display font-bold text-xl">Message sent!</h3>
                  <p className="text-[var(--text-muted)] text-sm">
                    Thanks for reaching out. We'll be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold font-mono uppercase tracking-widest text-[var(--text-muted)]">
                        Name
                      </label>
                      <input
                        className={inputClass}
                        placeholder={contact.form.namePlaceholder}
                        value={form.name}
                        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold font-mono uppercase tracking-widest text-[var(--text-muted)]">
                        Email
                      </label>
                      <input
                        type="email"
                        className={inputClass}
                        placeholder={contact.form.emailPlaceholder}
                        value={form.email}
                        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold font-mono uppercase tracking-widest text-[var(--text-muted)]">
                      Company
                    </label>
                    <input
                      className={inputClass}
                      placeholder={contact.form.companyPlaceholder}
                      value={form.company}
                      onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold font-mono uppercase tracking-widest text-[var(--text-muted)]">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className={`${inputClass} resize-none`}
                      placeholder={contact.form.messagePlaceholder}
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full justify-center mt-2"
                  >
                    {status === "loading" ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={17} />
                        {contact.form.submitLabel}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
