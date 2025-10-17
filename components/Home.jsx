import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

/* ------------ Motion Variants ------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ------------ Nav Items ------------ */
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/* ------------ Component ------------ */
export default function WebeltekSite() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-blue-900">
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900" />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-blue-100">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Webeltek home">
            <img src="/webeltek-logo.jpg" alt="Webeltek logo" className="h-10 w-auto" />
            </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm hover:text-blue-700 transition">
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-xl bg-[#0a1d56] px-4 py-2 text-sm font-medium text-[#f8cb19] shadow-glow hover:bg-[#142b70] transition"
            >
              Get Started
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200"
          >
            <span className="sr-only">Menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-900">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </nav>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-blue-100 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex flex-col gap-4">
              {navItems.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm hover:text-blue-700"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-2 text-sm font-medium text-white w-fit"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </header>

{/* HERO Section */}
<section
  id="home"
  className="relative overflow-hidden h-screen flex items-center justify-center bg-black"
>
  {/* Background video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/bg-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-950/40 -z-10" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white"
        >
          <motion.h1 variants={fadeUp} className="text-5xl font-semibold leading-tight text-[#f8cb19]">
            Empowering Digital Growth With <span className="text-blue-300">Webeltek</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-blue-100">
            IT talent acquisition, payroll management, and enterprise consulting—built for the future.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#services"
              className="rounded-xl bg-[#0a1d56] px-5 py-3 text-sm font-medium text-[#f8cb19] shadow-glow hover:bg-[#142b70] transition"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/60 bg-white/10 hover:bg-white/20 px-6 py-3 text-white font-medium backdrop-blur"
            >
              Talk to Us
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About Webeltek</h2>
          <p className="mt-4 text-blue-900/80">
            Since 2021, Webeltek has helped fast-growing organizations scale their engineering and IT operations.
            We blend rigorous recruiting with domain-specific screening to place the right talent—then back it with
            compliant, on-time payroll and white-glove support. Our consultants deliver across telecom, healthcare,
            data center, data science/ML, cybersecurity, cloud, and SAP.
          </p>
          <p className="mt-3 text-blue-900/80">
            Whether you’re building a new product team, migrating to cloud, or tightening security, we align to your
            roadmap and deliver results without the noise.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <h3 className="text-2xl font-semibold">Why Choose Us</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Proven Expertise",
                d: "Specialists across network, data, cloud, and security with project-tested experience.",
              },
              { t: "Quality First", d: "Multi-stage technical screening and culture-fit checks reduce churn." },
              { t: "Speed & Scale", d: "Elastic recruiting and delivery to match your hiring velocity." },
              { t: "Compliance Built-in", d: "On-time payroll, tax handling, and audit-ready documentation." },
            ].map((c) => (
              <motion.div
                key={c.t}
                variants={fadeUp}
                className="rounded-2xl border border-blue-100 bg-white p-6"
              >
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-blue-700" />
                  <h4 className="font-semibold">{c.t}</h4>
                </div>
                <p className="mt-2 text-sm text-blue-900/80">{c.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Services</h2>
          <p className="mt-3 text-blue-900/80">
            From sourcing exceptional IT talent to effortless payroll and enterprise delivery.
          </p>
        </motion.div>

        {/* Talent & Consulting */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "Data Center", desc: "Build and operate resilient infra: DC ops, cabling, monitoring, L2/L3." },
            { title: "Telecom", desc: "RAN, 4G/5G, core, OSS/BSS, field rollout, NOC/SOC staffing." },
            { title: "Data Science", desc: "ML engineering, MLOps, analytics, dashboarding, model governance." },
            { title: "Cybersecurity", desc: "Pen-testing, IR, SIEM/SOAR, IAM, GRC, risk assessments." },
            { title: "Network Management", desc: "Enterprise LAN/WAN, SD-WAN, load balancing, troubleshooting." },
            { title: "Cloud & DevOps", desc: "AWS/Azure/GCP, CI/CD, SRE, finops, container orchestration." },
            { title: "Finance IT", desc: "Core banking, payments, risk, compliance, data warehousing." },
            { title: "Healthcare IT", desc: "EHR/EMR, PACS, HL7/FHIR, imaging, telemedicine platforms." },
            { title: "SAP Solutions", desc: "ECC/S4HANA, BW/4HANA, integrations, migrations, support." },
          ].map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -4, boxShadow: "0 0 24px rgba(0,123,255,.22)" }}
              className="rounded-2xl border border-blue-100 bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <span className="text-blue-700">→</span>
              </div>
              <p className="mt-3 text-sm text-blue-900/80">{card.desc}</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900">
                Contact Us <FiArrowRight />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Payroll */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mx-auto max-w-2xl text-center mt-16">
          <h3 className="text-2xl font-semibold">Payroll Management</h3>
          <p className="mt-2 text-blue-900/80">Tailored, efficient, and compliant payroll that scales with you.</p>
        </motion.div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Payroll Processing",
              points: ["Precise, prompt salary runs", "Multi-cycle & multi-country support", "Benefits & reimbursements"],
            },
            {
              title: "Tax & Compliance",
              points: ["Accurate payroll taxes", "On-time filings", "Audit-ready records"],
            },
            {
              title: "Dynamic Reporting",
              points: ["Custom dashboards", "Exports (CSV/XLS/PDF)", "Cost & variance views"],
            },
            {
              title: "Security & Access",
              points: ["Role-based access", "Data protection & backups", "Self-service updates"],
            },
            {
              title: "Employee Portal",
              points: ["Payslips, leaves, overtime", "Attendance tracking", "Mobile-friendly access"],
            },
            {
              title: "Timekeeping Integration",
              points: ["API-first approach", "Plug-ins for HRIS/ATS", "Dedicated support team"],
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -4, boxShadow: "0 0 24px rgba(0,123,255,.22)" }}
              className="rounded-2xl border border-blue-100 bg-white p-6"
            >
              <h4 className="text-lg font-semibold">{card.title}</h4>
              <ul className="mt-3 space-y-2 text-sm text-blue-900/80">
                {card.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-blue-700">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="relative border-y border-blue-100 bg-blue-50/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Industries We Serve</h2>
            <p className="mt-3 text-blue-900/80">Telecom • Healthcare • Data Center • Finance • Data Science • Cloud • SAP</p>
          </motion.div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              { name: "Telecom", blurb: "Network rollout, optimization, testing, and operations." },
              { name: "Healthcare", blurb: "EHR/EMR, imaging, interoperability, patient data security." },
              { name: "Data Center", blurb: "Facility ops, hardware, networking, observability." },
              { name: "Finance", blurb: "Core systems, payments, risk & fraud, data governance." },
              { name: "Data Science", blurb: "Predictive models, MLOps, analytics engineering." },
              { name: "Cloud", blurb: "Migration, modernization, DevOps/SRE, cost controls." },
            ].map((i) => (
              <motion.div
                key={i.name}
                whileHover={{ y: -4, boxShadow: "0 0 24px rgba(0,123,255,.22)" }}
                className="rounded-2xl border border-blue-100 bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{i.name}</h3>
                  <span className="text-blue-700">→</span>
                </div>
                <p className="mt-2 text-sm text-blue-900/80">{i.blurb}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-center">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
            {[
              {
                q: "How do you ensure the right technical fit?",
                a: "We combine role scoping with multi-stage technical screenings, practical assessments, and stakeholder interviews to validate both skill and culture fit.",
              },
              {
                q: "Can you support temporary, contract-to-hire, and full-time roles?",
                a: "Yes. We deliver flexible engagement models—contract, C2H, and permanent hiring—backed by on-time payroll and compliant documentation.",
              },
              {
                q: "How fast can you staff a role?",
                a: "For common roles, shortlists are typically shared within days. Niche roles may take longer, but we keep you updated with clear milestones.",
              },
              {
                q: "Do you operate internationally?",
                a: "We support clients across India and internationally via digital delivery, remote teams, and on-site deployments where needed.",
              },
              {
                q: "How does your payroll service integrate with our systems?",
                a: "We’re API-first. We integrate with leading HRIS/ATS/timekeeping tools and can export custom reports in CSV/XLS/PDF.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="rounded-xl border border-blue-100 bg-white p-4 open:shadow transition"
              >
                <summary className="cursor-pointer list-none font-medium">{item.q}</summary>
                <p className="mt-2 text-blue-900/80 text-sm">{item.a}</p>
              </details>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative border-y border-blue-100 bg-blue-50/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let’s Talk</h2>
            <p className="mt-3 text-blue-900/80">Share your requirements—our team replies within one business day.</p>
          </motion.div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-blue-100">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 text-sm text-blue-900">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <img src="/webeltek-logo.jpg" alt="Webeltek logo" className="h-8 w-auto" />
               
              </div>
              <p className="mt-3 max-w-md">
                Premier IT talent acquisition, payroll management, and enterprise consulting since 2017.
              </p>
            </div>
            <div>
              <div className="font-semibold">Company</div>
              <ul className="mt-3 space-y-2">
                <li><a href="#services" className="hover:text-blue-700">Services</a></li>
                <li><a href="#industries" className="hover:text-blue-700">Industries</a></li>
                <li><a href="#faq" className="hover:text-blue-700">FAQ</a></li>
                <li><a href="#contact" className="hover:text-blue-700">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Contact</div>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center gap-2"><FiMail /><span>info@webeltek.com</span></li>
                <li className="flex items-center gap-2"><FiMapPin /><span>Electronic City, Bengaluru</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-blue-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Webeltek. All rights reserved.</p>
            <div className="text-xs text-blue-700">Newsletter coming soon.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ------------ Contact Form ------------ */
function ContactForm() {
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = React.useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="mx-auto mt-10 max-w-2xl grid gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm">Your name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            required
            placeholder="John Doe"
            className="rounded-xl border border-blue-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            required
            placeholder="john@gmail.com"
            className="rounded-xl border border-blue-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="phone" className="text-sm">Phone number</label>
        <input
          id="phone"
          name="phone"
          value={form.phone}
          onChange={onChange}
          placeholder="20 111 2345 6789"
          className="rounded-xl border border-blue-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={onChange}
          placeholder="How can we help?"
          className="rounded-xl border border-blue-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs text-blue-700">We’ll never share your information.</p>
        <button
          type="submit"
          className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 px-5 py-2.5 text-sm font-medium text-white shadow"
        >
          Send message
        </button>
      </div>

      {sent && (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-700">
          Thanks! We’ll be in touch shortly.
        </div>
      )}
    </form>
  );
}
