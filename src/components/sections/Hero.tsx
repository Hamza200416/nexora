"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { fadeUp, staggerContainer } from "@/lib/utils";
import siteContent from "../../../data/siteContent.json";

const { hero } = siteContent;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16">
      {/* Background: grid + orbs */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100 dark:opacity-100 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      
      <div className="orb w-[600px] h-[600px] bg-brand-600/20 dark:bg-brand-500/10 -top-32 -left-32" />
      <div className="orb w-[400px] h-[400px] bg-accent/15 dark:bg-accent/8 top-1/2 -right-20" style={{ animationDelay: "3s" }} />
      <div className="orb w-[300px] h-[300px] bg-brand-700/15 dark:bg-brand-700/8 bottom-0 left-1/3" style={{ animationDelay: "1.5s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} custom={0}>
            <Badge>{hero.badge}</Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight max-w-4xl"
          >
            {hero.headline[0]}{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">{hero.headline[1]}</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-[var(--text-muted)] text-lg sm:text-xl max-w-2xl leading-relaxed font-body"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Button href={hero.cta_primary.href} size="lg">
              {hero.cta_primary.label}
              <ArrowRight size={18} />
            </Button>
            <Button href={hero.cta_secondary.href} variant="secondary" size="lg">
              <div className="w-7 h-7 rounded-full bg-brand-500/20 flex items-center justify-center">
                <Play size={11} className="text-brand-400 ml-0.5" fill="currentColor" />
              </div>
              {hero.cta_secondary.label}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 pt-4"
          >
            {hero.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="font-display font-extrabold text-3xl md:text-4xl gradient-text">
                  {stat.value}
                </span>
                <span className="text-[var(--text-muted)] text-sm font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative mt-16 overflow-hidden py-4 border-y border-[var(--border)]"
      >
        <div className="ticker-inner">
          {[...hero.ticker, ...hero.ticker].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-sm font-semibold text-[var(--text-muted)] whitespace-nowrap font-mono uppercase tracking-widest"
            >
              <span className="w-1 h-1 rounded-full bg-brand-500 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
