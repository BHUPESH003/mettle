/**
 * Footer Component
 * Clean, professional footer with brand info, links, and contact details
 * Updated color scheme to match homepage aesthetic
 */

import Link from "next/link";
import { brand } from "@/lib/brand";
import { Icons } from "@/lib/icons";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    name: "Twitter",
    href: "#",
    icon: Icons.twitter,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: Icons.linkedin,
  },
  {
    name: "GitHub",
    href: "#",
    icon: Icons.github,
  },
] as const;

const footerLinkGroups = [
  {
    title: "Services",
    links: [
      { label: "How We Work", href: "/how-we-work" },
      { label: "Capabilities", href: "/capabilities" },
      { label: "Work", href: "/work" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Thinking", href: "/thinking" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;

const contactInfo = [
  {
    label: "Email",
    value: "hello@mettleconsulting.com",
    href: "mailto:hello@mettleconsulting.com",
    icon: Icons.mail,
  },
  {
    label: "Phone",
    value: "(555) 123-4567",
    href: "tel:+15551234567",
    icon: Icons.phone,
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Section - 5 columns */}
          <div className="lg:col-span-5">
            <h3 className="mb-3 text-2xl font-bold">
              {brand.name}
            </h3>
            <p className="mb-6 max-w-md leading-relaxed text-primary-foreground/80">
              {brand.longDescription}
            </p>

            {/* Newsletter Section */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium">
                Subscribe to our newsletter
              </label>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-primary-foreground/20 bg-primary-light px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-accent-foreground transition-all hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                  aria-label="Subscribe"
                >
                  <Icons.arrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="rounded-lg p-2 text-primary-foreground/70 transition-all hover:bg-primary-light hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                      aria-label={social.name}
                    >
                      <IconComponent className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Links - 4 columns */}
          <div className="lg:col-span-4">
            <div className="grid gap-8 sm:grid-cols-2">
              {footerLinkGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                    {group.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information - 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <li key={contact.label}>
                    <Link
                      href={contact.href}
                      className="flex items-center gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                    >
                      <IconComponent className="h-4 w-4 shrink-0" />
                      <span>{contact.value}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 bg-primary-hover">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} {brand.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/70">
              <Link
                href="/privacy"
                className="transition-colors hover:text-accent"
              >
                Privacy
              </Link>
              <span className="text-primary-foreground/30">•</span>
              <Link
                href="/terms"
                className="transition-colors hover:text-accent"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
