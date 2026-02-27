"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronRight, Activity, Beaker, ShieldPlus, Component } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function MirexaClientContent() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-teal-500/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/mirexa/hero.png" 
            alt="Mirexa Pharmaceutical Abstract" 
            fill 
            className="object-cover opacity-[0.05]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-slate-50/50" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-4xl text-center"
          >
            {/* Breadcrumb */}
            <motion.div variants={fadeIn} className="mb-8 flex items-center justify-center space-x-2 text-sm font-medium text-slate-500">
              <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/work" className="hover:text-slate-900 transition-colors">Work</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-slate-900">Mirexa</span>
            </motion.div>

            <motion.div variants={fadeIn} className="mb-6 inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-700 backdrop-blur-sm">
              <Activity className="mr-2 h-4 w-4" />
              Case Study — Brand Transition
            </motion.div>
            <motion.h1 variants={fadeIn} className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Aligning Digital Representation with a <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Brand Transition</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Mirexa Pharmaceutical (formerly Keshav Pharmaceuticals) was
              undergoing a brand identity shift. The work focused on aligning business intent with a conservative, compliant digital presence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Context & Problem */}
          <div className="mb-24 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-12"
            >
              <motion.div variants={fadeIn}>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200 text-teal-600 shadow-sm">
                  <Beaker className="h-6 w-6" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-slate-900">The Context</h2>
                <p className="text-lg leading-relaxed text-slate-600">
                  Mirexa Pharmaceutical is a company undergoing a vital brand and identity
                  transition. Their existing online presence didn't reflect their established reputation or their modern business direction.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200 text-cyan-600 shadow-sm">
                  <ShieldPlus className="h-6 w-6" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-slate-900">The Real Problem</h2>
                <p className="text-lg leading-relaxed text-slate-600">
                  Stakeholders were unclear on how to present their deep expertise and current
                  positioning to the market. The digital presence lacked alignment with their ambitious business intent, which made the transition harder to communicate in a highly conservative, regulated environment.
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square overflow-hidden rounded-3xl border border-slate-200 bg-white lg:aspect-auto lg:h-[600px] shadow-2xl shadow-slate-200/50"
            >
              <Image 
                src="/images/mirexa/brand.png" 
                alt="Brand Identity Transition Concept" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-900/5" />
            </motion.div>
          </div>

          {/* Insight & Approach */}
          <div className="mb-24 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative aspect-video w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50"
            >
              <Image 
                src="/images/mirexa/digital.png" 
                alt="Structured Digital Healthcare Presence" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-900/5" />
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="order-1 lg:order-2 space-y-12"
            >
              <motion.div variants={fadeIn}>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200 text-blue-600 shadow-sm">
                  <Activity className="h-6 w-6" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-slate-900">The Insight</h2>
                <p className="text-lg leading-relaxed text-slate-600">
                  In a regulated industry, brand transitions require disciplined
                  clarity. Digital representation must translate intent into a
                  stable, conservative signal that can remain consistent and reassuring long term.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200 text-teal-600 shadow-sm">
                  <Component className="h-6 w-6" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-slate-900">System / Approach Designed</h2>
                <p className="text-lg leading-relaxed text-slate-600">
                  The approach focused on strictly aligning business intent with a clean digital
                  structure, ensuring that market positioning, regulatory messaging, and visual presentation could remain cohesive and authoritative over time.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Outcome & Reflection Cards */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:gap-8"
          >
            <motion.div variants={fadeIn} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-lg hover:shadow-slate-200/50">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="relative z-10 mb-4 text-2xl font-bold text-slate-900">Outcome</h3>
              <p className="relative z-10 text-slate-600 leading-relaxed text-lg">
                The brand transition successfully unified the company's legacy expertise with its ambitious future goals. The newly launched digital platform established a highly clear, compliant, and trustworthy presence in the market.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-lg hover:shadow-slate-200/50">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="relative z-10 mb-4 text-2xl font-bold text-slate-900">Reflection</h3>
              <p className="relative z-10 text-slate-600 leading-relaxed text-lg">
                When dealing with conservative industries like pharma, the role of design isn’t "disruption" or extreme aesthetic risk—it is creating deep structural trust, discipline, and uncompromising clarity to communicate reliability.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-t border-slate-200 bg-white py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl"
          >
            <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl">
              Brand transition required?
            </h2>
            <p className="mb-10 text-lg text-slate-600 sm:text-xl">
              If you operate in a regulated environment and need to align your digital presence with your strategic direction safely, we can help.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-medium text-white transition-all hover:scale-105 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
