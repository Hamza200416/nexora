"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/utils";
import { cn } from "@/lib/utils";
import siteContent from "../../../data/siteContent.json";

const { pricing } = siteContent;

export default function Pricing() {
  return (
    <SectionWrapper id="pricing" className="bg-[var(--bg-secondary)]">
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
            <Badge>{pricing.badge}</Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display font-extrabold text-4xl sm:text-5xl leading-tight"
          >
            {pricing.headline}
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-[var(--text-muted)] text-lg">
            {pricing.subheadline}
          </motion.p>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {pricing.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className={cn(
                "relative rounded-2xl p-8 flex flex-col gap-6",
                plan.highlighted
                  ? "bg-gradient-to-b from-brand-600 to-brand-800 text-white shadow-2xl shadow-brand-500/30 scale-105"
                  : "gradient-border glass"
              )}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-brand-700 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name + description */}
              <div className="flex flex-col gap-2">
                <h3 className={cn("font-display font-bold text-xl", plan.highlighted ? "text-white" : "")}>
                  {plan.name}
                </h3>
                <p className={cn("text-sm", plan.highlighted ? "text-blue-100" : "text-[var(--text-muted)]")}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-end gap-1">
                <span className={cn("font-display font-extrabold text-5xl", plan.highlighted ? "text-white" : "gradient-text")}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={cn("text-sm mb-2", plan.highlighted ? "text-blue-200" : "text-[var(--text-muted)]")}>
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Divider */}
              <div className={cn("h-px", plan.highlighted ? "bg-white/20" : "bg-[var(--border)]")} />

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className={cn("flex items-center gap-3 text-sm", plan.highlighted ? "text-blue-50" : "text-[var(--text-muted)]")}>
                    <CheckCircle2 size={15} className={plan.highlighted ? "text-blue-200 flex-shrink-0" : "text-brand-400 flex-shrink-0"} />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                href="#contact"
                variant={plan.highlighted ? "ghost" : "outline"}
                className={cn(
                  "w-full justify-center mt-auto",
                  plan.highlighted && "!bg-white !text-brand-700 hover:!bg-blue-50 !border-0"
                )}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
