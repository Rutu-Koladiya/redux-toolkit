"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import React, { FormEvent, useState } from "react";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Submitted", { email, message });
  };

  return (
    <div className="bg-black/[0.96] py-28 md:py-36 px-6 mx-auto min-h-screen">
      <BackgroundBeams />
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent lg:text-4xl xl:text-5xl">
          Contact Us
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base font-normal text-neutral-300">
          Have questions about properties, investments, or our services?
          We&apos;re here to guide you at every step. Reach out today and
          let&apos;s find the perfect place for you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-300"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-300"
            rows={5}
            required
          ></textarea>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      contact us camera.webgi.vercel.com
    </div>
  );
};

export default ContactUs;
