"use client";

import { useState } from "react";
import { contactLinks, profile } from "@/data/content";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const phoneNumber = profile.phone.replace(/\D/g, "");
    
    const waMessage = `Halo, Haekal!

Nama: ${name}
Email: ${email}

Pesan:
${message}`;
    
    const encodedMessage = encodeURIComponent(waMessage);
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact" className="relative bg-card px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
              Kontak
            </p>
            <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
              Mari Terhubung
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-text-secondary md:text-base">
              Siap bekerja, kolaborasi proyek, atau diskusi peluang karir
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <FadeIn delay={100}>
            <div className="h-full rounded-2xl border border-border bg-background p-6 md:p-8">
              <h3 className="mb-5 font-display text-xl font-bold text-text-primary md:text-2xl">
                Info Kontak
              </h3>
              <div className="space-y-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm"
                  >
                    <span className="text-sm font-medium text-text-secondary">
                      {link.label}
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      {link.value}
                    </span>
                  </a>
                ))}
              </div>
              <p className="mt-6 text-xs text-text-secondary md:text-sm">
                📍 {profile.location}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={160}>
            <form
              onSubmit={handleSubmit}
              className="h-full space-y-4 rounded-2xl border border-border bg-background p-6 md:p-8"
            >
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-primary">
                  Nama
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama Anda"
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-text-primary transition-all placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-primary">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-text-primary transition-all placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-primary">
                  Pesan
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tulis pesan Anda..."
                  className="w-full resize-none rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-text-primary transition-all placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary py-3 font-semibold text-white transition-all hover:bg-primary-dark"
              >
                Kirim via WhatsApp
              </button>
              <p className="text-center text-xs text-text-secondary">
                Pesan akan dikirim melalui WhatsApp
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
