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
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="text-center">
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Kontak
            </p>
            <h2 className="font-display text-4xl font-bold text-text-primary md:text-5xl">
              Mari Terhubung
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              Siap bekerja, kolaborasi proyek, atau diskusi peluang karir
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <FadeIn delay={100}>
            <div className="glass glow-border h-full rounded-3xl p-8">
              <h3 className="mb-6 font-display text-2xl font-bold text-text-primary">
                Info Kontak
              </h3>
              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center justify-between rounded-2xl border border-primary/20 bg-dark-card/50 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary">
                      {link.label}
                    </span>
                    <span className="text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-2">
                      {link.value}
                    </span>
                  </a>
                ))}
              </div>
              <p className="mt-8 text-sm text-text-secondary">
                📍 {profile.location}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={160}>
            <form
              onSubmit={handleSubmit}
              className="glass glow-border h-full space-y-6 rounded-3xl p-8"
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-text-secondary">
                  Nama
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama kamu"
                  className="w-full rounded-xl border border-primary/30 bg-dark-card/50 px-4 py-3 text-sm text-text-primary backdrop-blur-sm transition-all duration-300 placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-text-secondary">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@kamu.com"
                  className="w-full rounded-xl border border-primary/30 bg-dark-card/50 px-4 py-3 text-sm text-text-primary backdrop-blur-sm transition-all duration-300 placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-text-secondary">
                  Pesan
                </label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tulis pesan kamu..."
                  className="w-full resize-none rounded-xl border border-primary/30 bg-dark-card/50 px-4 py-3 text-sm text-text-primary backdrop-blur-sm transition-all duration-300 placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary to-accent py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/50"
              >
                <span className="relative z-10">Kirim via WhatsApp</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-accent to-accent-pink opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
