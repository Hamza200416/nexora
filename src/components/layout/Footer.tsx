"use client";

import { motion } from "framer-motion";
import { getIcon } from "@/lib/icons";
import { fadeUp } from "@/lib/utils";
import siteContent from "../../../data/siteContent.json";

const { footer, site, contact, nav } = siteContent;

export default function Footer() {
  const year = new Date().getFullYear();
  const SocialIcon = (platform: string) => {
    const s = contact.social.find((s) => s.platform === platform);
    return s ? getIcon(s.icon) : null;
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 flex flex-col gap-5">
            <a href="#" className="flex items-center gap-3 w-fit group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-dark flex items-center justify-center text-white font-bold text-lg font-display shadow-lg shadow-brand-500/20">
                {site.logo}
              </div>
              <span className="font-display font-bold text-xl tracking-tight">{site.name}</span>
            </a>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xs">
              {footer.tagline} — {site.description.slice(0, 80)}...
            </p>
            <div className="flex gap-3">
              {contact.social.map((s) => {
                const Icon = getIcon(s.icon);
                return (
                  <motion.a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-9 h-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-brand-400 hover:border-brand-500/40 transition-all"
                    aria-label={s.platform}
                  >
                    <Icon size={15} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold font-mono uppercase tracking-widest text-[var(--text-primary)]">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--text-muted)] hover:text-brand-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--text-muted)] font-mono">
            © {year} {site.name}, Inc. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)] font-mono">
            Built with ♥ using Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
