"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { fadeUp, staggerContainer } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import siteContent from "../../../data/siteContent.json";

const { services } = siteContent;

export default function Services() {
  return (
    <SectionWrapper id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center flex flex-col items-center gap-4 mb-16"
        >
          <motion.div variants={fadeUp} custom={0}>
            <Badge>{services.badge}</Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display font-extrabold text-4xl sm:text-5xl leading-tight max-w-xl"
          >
            {services.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-[var(--text-muted)] text-lg max-w-2xl"
          >
            {services.subheadline}
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group relative gradient-border glass rounded-2xl p-7 flex flex-col gap-5 overflow-hidden cursor-default"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${service.accent}15 0%, transparent 70%)`,
                  }}
                />

                {/* Icon + tag row */}
                <div className="flex items-start justify-between relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${service.accent}18` }}
                  >
                    <Icon size={22} style={{ color: service.accent }} />
                  </div>
                  <span
                    className="text-xs font-semibold font-mono uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{
                      color: service.accent,
                      background: `${service.accent}15`,
                      border: `1px solid ${service.accent}25`,
                    }}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* Text */}
                <div className="relative flex flex-col gap-2">
                  <h3 className="font-display font-bold text-xl">{service.title}</h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="relative flex flex-col gap-2 mt-auto">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                      <CheckCircle2 size={14} style={{ color: service.accent }} className="flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
