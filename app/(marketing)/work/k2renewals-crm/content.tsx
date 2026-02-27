"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronRight, Share2, ScanLine, Network, LineChart } from "lucide-react";
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

export default function K2RenewalsClientContent() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-amber-500/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/k2renewals/hero.png" 
            alt="K2Renewals Logistics abstract" 
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
              <span className="text-slate-900">K2Renewals</span>
            </motion.div>

            <motion.div variants={fadeIn} className="mb-6 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700 backdrop-blur-sm">
              <Share2 className="mr-2 h-4 w-4" />
              Case Study — Renewables CRM
            </motion.div>
            <motion.h1 variants={fadeIn} className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Restoring Operational Clarity in <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Raw Materials Tracking</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              K2Renewals needed reliable tracking and absolute reporting visibility. We established system ownership and designed a workflow-first CRM to overhaul fragmented logistics.
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
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200 text-amber-600 shadow-sm">
                  <ScanLine className="h-6 w-6" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-slate-900">The Context</h2>
                <p className="text-lg leading-relaxed text-slate-600">
                  K2Renewals was struggling with the high-stakes tracking of raw materials. Critical
                  information and operations lived in fragmented, manual logs and scattered Excel 
                  sheets, leading directly to inconsistent data and weak operational visibility.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200 text-orange-600 shadow-sm">
                  <Network className="h-6 w-6" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-slate-900">The Real Problem</h2>
                <p className="text-lg leading-relaxed text-slate-600">
                  The issue was not the lack of a generic off-the-shelf CRM tool. The true bottleneck
                  was a massive lack of clear system ownership, which left tracking, logistics staging,
                  and compliance reporting fragmented and wholly unreliable.
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
                src="/images/k2renewals/dashboard.png" 
                alt="Logistics CRM Overview" 
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
                src="/images/k2renewals/logistics.png" 
                alt="Supply Chain Reliability Architecture" 
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
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200 text-rose-600 shadow-sm">
                  <LineChart className="h-6 w-6" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-slate-900">The Insight</h2>
                <p className="text-lg leading-relaxed text-slate-600">
                  Daily logistics movement and corporate reporting cannot be treated as separate silos. 
                  They must be strictly unified within a single operational system. A "workflow-first" 
                  design intrinsically creates team ownership and eliminates data inconsistency.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200 text-amber-600 shadow-sm">
                  <Share2 className="h-6 w-6" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-slate-900">System / Approach Designed</h2>
                <p className="text-lg leading-relaxed text-slate-600">
                  We bypassed generic CRM feature-stuffing and architected a hyper-focused, workflow-first
                  platform. It was built around the explicit physical movement of raw materials through the plant, ensuring that UI mapped directly to real-world logistics.
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
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="relative z-10 mb-4 text-2xl font-bold text-slate-900">Outcome</h3>
              <p className="relative z-10 text-slate-600 leading-relaxed text-lg">
                The massive transition delivered immense qualitative value: radically clearer day-to-day operations, unified data integrity, and profoundly better enterprise-scale decision-making regarding raw materials inventory.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-lg hover:shadow-slate-200/50">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-rose-50 opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="relative z-10 mb-4 text-2xl font-bold text-slate-900">Reflection</h3>
              <p className="relative z-10 text-slate-600 leading-relaxed text-lg">
                This project cemented an absolute truth: software is secondary to operations. You cannot code over a broken workflow. To build good enterprise software, you must deeply interconnect physical logistics, engineering truths, and corporate reporting.
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
              Logistics fragmented?
            </h2>
            <p className="mb-10 text-lg text-slate-600 sm:text-xl">
              If your operations are trapped in spreadsheets and lack clear system ownership, we can architect the solution.
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
