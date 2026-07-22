"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProfileCardProps {
  name: string;
  school: string;
  avatar: string;
}

export default function ProfileCard({ name, school, avatar }: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto w-full max-w-xs"
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-shadow hover:shadow-xl">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={avatar}
            alt={name}
            fill
            sizes="320px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
        </div>
        
        <div className="p-5 text-center">
          <h3 className="font-display text-lg font-bold text-text-primary">
            {name}
          </h3>
          <p className="mt-1 text-sm text-text-secondary">{school}</p>
          
          <div className="mt-3.5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <span className="text-xs font-semibold text-primary">Siap Bekerja</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
