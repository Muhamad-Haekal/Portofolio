"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ProfileCardProps {
  name: string;
  school: string;
  avatar: string;
}

export default function ProfileCard({ name, school, avatar }: ProfileCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative mx-auto w-full max-w-sm" style={{ perspective: "2000px" }}>
      {/* Floating card animation - SMOOTHER */}
      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [0, -1.5, 0, 1.5, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
        }}
        className="relative"
      >
        {/* Glow effect */}
        <motion.div 
          className="absolute -inset-16 rounded-[3rem] bg-gradient-to-r from-primary/30 via-accent/35 to-accent-pink/30 blur-[60px]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.5, 0.75, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: [0.45, 0.05, 0.55, 0.95],
          }}
        />

        {/* Card with 3D tilt - ENHANCED INTERACTIVITY */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            scale: { 
              duration: 0.7, 
              ease: [0.34, 1.56, 0.64, 1],
            },
          }}
          className="relative cursor-pointer"
        >
          <div
            className="glass relative overflow-hidden rounded-[2rem] border-[3px] border-primary/50 shadow-2xl shadow-primary/40"
            style={{ transform: "translateZ(80px)" }}
          >
            {/* Animated gradient background */}
            <motion.div
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-br from-dark via-dark-card to-dark bg-[length:200%_200%]"
            />

            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-30 mix-blend-overlay">
              <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_50%)]" />
            </div>

            {/* Card content */}
            <div className="relative p-7" style={{ transform: "translateZ(60px)" }}>
              {/* Photo frame */}
              <div className="relative mx-auto aspect-[3/4] w-full overflow-hidden rounded-2xl border-2 border-primary/40 shadow-xl shadow-primary/30">
                <motion.div
                  animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
                  transition={{ 
                    duration: 0.9, 
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  className="h-full w-full"
                >
                  <Image
                    src={avatar}
                    alt={name}
                    fill
                    sizes="400px"
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
                
                {/* Shine effect on hover - ENHANCED */}
                <motion.div
                  animate={isHovered ? { 
                    x: ["-120%", "220%"],
                    opacity: [0, 0.8, 0]
                  } : { 
                    x: "-120%",
                    opacity: 0
                  }}
                  transition={{ 
                    duration: 1.4, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  style={{ 
                    transform: "skewX(-15deg)",
                    filter: "blur(2px)",
                  }}
                />
              </div>

              {/* Name and school */}
              <motion.div
                animate={isHovered ? { y: -8, scale: 1.02 } : { y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="mt-7 space-y-3 text-center"
                style={{ transform: "translateZ(40px)" }}
              >
                <h3 className="font-display text-2xl font-bold tracking-tight text-text-primary drop-shadow-2xl">
                  {name}
                </h3>
                <p className="text-sm text-text-secondary/90">{school}</p>
                
                {/* Decorative line */}
                <motion.div
                  animate={isHovered ? { width: "120px", height: "2px" } : { width: "90px", height: "1.5px" }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  className="mx-auto rounded-full bg-gradient-to-r from-primary via-accent to-accent-pink shadow-lg shadow-primary/60"
                />
              </motion.div>

              {/* Status badge */}
              <motion.div
                animate={isHovered ? { scale: 1.06, y: -4 } : { scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="mt-7 flex items-center justify-center gap-2.5 rounded-xl border border-primary/40 bg-primary/15 px-5 py-3 backdrop-blur-xl shadow-lg"
                style={{ transform: "translateZ(50px)" }}
              >
                <motion.span 
                  className="relative flex h-2.5 w-2.5"
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400 shadow-lg shadow-green-400/50"></span>
                </motion.span>
                <span className="text-xs font-bold text-text-primary tracking-wide">Siap Bekerja</span>
              </motion.div>
            </div>

            {/* Rotating shine effect - MORE VISIBLE */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute -inset-40 opacity-35"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, rgba(139, 92, 246, 0.6) 50deg, transparent 110deg)",
              }}
            />

            {/* Particle effect on hover - SMOOTHER */}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="pointer-events-none absolute inset-0"
              >
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ 
                      x: "50%", 
                      y: "50%",
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{ 
                      x: `${50 + Math.cos(i * 36 * Math.PI / 180) * 45}%`,
                      y: `${50 + Math.sin(i * 36 * Math.PI / 180) * 45}%`,
                      scale: [0, 1.2, 0],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className="absolute h-2 w-2 rounded-full bg-primary/70 blur-sm"
                  />
                ))}
              </motion.div>
            )}
          </div>

          {/* Shadow glow - ENHANCED */}
          <motion.div
            animate={{
              opacity: isHovered ? 0.9 : 0.65,
              scale: isHovered ? 1.2 : 1.08,
            }}
            transition={{ 
              duration: 0.7, 
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/50 to-accent/50 blur-[50px]"
          />
        </motion.div>

        {/* Floor shadow - MORE DRAMATIC */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.55, 0.85, 0.55],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
          className="absolute -bottom-12 left-1/2 h-20 w-4/5 -translate-x-1/2 rounded-full bg-dark/80 blur-[60px]"
        />
      </motion.div>
    </div>
  );
}
