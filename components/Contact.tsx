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
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-blue">
          Kontak
        </p>
      </FadeIn>
      <FadeIn delay={60}>
        <h2 className="font-display text-3xl font-bold text-ink-text sm:text-4xl">
          Ayo terhubung
        </h2>
        <p className="mt-3 max-w-xl text-ink-muted">
          Terbuka untuk kesempatan PKL, kolaborasi proyek, atau sekadar
          diskusi seputar web development.
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <FadeIn delay={100}>
          <div className="h-full rounded-2xl border border-ink-line bg-ink-surface p-6 transition-all duration-300 hover:border-brand-blue/50 hover:shadow-lg hover:shadow-brand-blue/10 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-ink-text">
              Info Kontak
            </h3>
            <div className="mt-5 space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between rounded-lg px-3 py-2.5 transition-all duration-300 hover:scale-105 hover:bg-ink-surface2"
                >
                  <span className="text-sm text-ink-muted group-hover:text-ink-text">{link.label}</span>
                  <span className="text-sm text-brand-blue transition-transform duration-300 group-hover:translate-x-1">{link.value}</span>
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-muted">{profile.location}</p>
          </div>
        </FadeIn>

        <FadeIn delay={160}>
          <form
            onSubmit={handleSubmit}
            className="h-full space-y-4 rounded-2xl border border-ink-line bg-ink-surface p-6 sm:p-8"
          >
            <div>
              <label className="mb-1.5 block text-xs text-ink-muted">
                Nama
              </label>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama kamu"
                className="w-full rounded-lg border border-ink-line bg-ink px-4 py-2.5 text-sm text-ink-text outline-none focus:border-brand-blue"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-ink-muted">
                Email
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@kamu.com"
                className="w-full rounded-lg border border-ink-line bg-ink px-4 py-2.5 text-sm text-ink-text outline-none focus:border-brand-blue"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-ink-muted">
                Pesan
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tulis pesan kamu..."
                className="w-full resize-none rounded-lg border border-ink-line bg-ink px-4 py-2.5 text-sm text-ink-text outline-none focus:border-brand-blue"
              />
            </div>
            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-brand-blue to-brand-violet py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-brand-blue/50"
            >
              <span className="relative z-10">Kirim via WhatsApp</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-brand-violet to-brand-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
            <p className="text-center text-xs text-ink-muted">
              Pesan akan dikirim melalui WhatsApp
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
