"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { fadeUp, slideLeft, slideRight, staggerContainer } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import { useInView } from "@/hooks/useInView";
import siteContent from "../../../data/siteContent.json";

const { about } = siteContent;

export default function About() {
  const { ref: pillarsRef, inView } = useInView({ threshold: 0.1, once: true });

  return (
    <SectionWrapper id="about" className="bg-[var(--bg-secondary)]">
      {/* Decorative orb */}
      <div className="orb w-80 h-80 bg-brand-500/10 top-0 right-0 -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp} custom={0}>
              <Badge>{about.badge}</Badge>
            </motion.div>
            <motion.h2
              variants={slideLeft}
              className="font-display font-extrabold text-4xl sm:text-5xl leading-tight"
            >
              {about.headline}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-[var(--text-muted)] text-lg leading-relaxed"
            >
              {about.body}
            </motion.p>

            {/* Decorative line */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="h-px bg-gradient-to-r from-brand-500/60 to-transparent w-48"
            />
          </motion.div>

          {/* Right: Pillars grid */}
          <motion.div
            ref={pillarsRef as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-2 gap-4"
          >
            {about.pillars.map((pillar, i) => {
              const Icon = getIcon(pillar.icon);
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.55, ease: "easeOut" }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="gradient-border glass rounded-2xl p-6 flex flex-col gap-3 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-500/15 flex items-center justify-center text-brand-400">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
