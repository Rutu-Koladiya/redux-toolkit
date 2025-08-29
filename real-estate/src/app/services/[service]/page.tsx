"use client";
import { notFound } from "next/navigation";
import services from "@/data/servicesData.json";
import { motion } from "framer-motion";
import Image from "next/image";
import { use } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface ServiceData {
  title: string;
  description: string;
  features: string[];
  image: string;
}

export default function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = use(params);

  const data = (services as Record<string, ServiceData>)[service];

  if (!data) return notFound();

  return (
    <div className="relative bg-black/[0.96] md:pt-40 pt-28 md:px-6 mx-auto">
      <section className="relative flex items-center justify-center px-2 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-center max-w-3xl px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{data.title}</h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-6">
            {data.description}
          </p>
          <div className="flex justify-center">
            <button className="relative rounded-full bg-transparent px-8 py-4 cursor-pointer">
              <GlowingEffect
                spread={100}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.1}
                borderWidth={2}
              />
              <span className="relative z-10 py-2 md:py-3 px-1 md:px-2 rounded-xl">
                Start Your Journey
              </span>
            </button>
          </div>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 px-2 md:px-20 py-20 items-center">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl text-center md:text-left font-semibold mb-6">
            Why Choose Our {data.title}?
          </h2>
          <ul className="space-y-4 text-lg text-zinc-300">
            {data.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[400px] md:block hidden"
        >
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="rounded-2xl shadow-2xl object-cover"
          />
        </motion.div>
      </section>

      <section className="relative py-32 text-center overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover opacity-30"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-zinc-300 mb-8">
            Let us help you with your {data.title.toLowerCase()} needs.
          </p>
          <button className="rounded-full px-7 py-2 md:py-3.5 bg-white text-black hover:bg-gray-200 cursor-pointer">
            Schedule a Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
}
