"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
export default function Hero() {
  const heroStrong = [
    "Logistics Access",
    "Voice-First Booking",
    "Farmer Empowerment",
  ];

  const [currentText, setCurrentText] = useState(heroStrong[0]);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        const currentIndex = heroStrong.indexOf(currentText);
        const nextIndex = (currentIndex + 1) % heroStrong.length;
        setCurrentText(heroStrong[nextIndex]);
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentText, heroStrong]);

  return (
    <section className="py-24 px-4 flex items-center justify-center overflow-x-clip">
      <div className="container relative">
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            Empowering 1,000+ Farmers Across Rural India
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-medium text-center mt-6 max-w-6xl mx-auto leading-[1.15]">
          Revolutionize Rural Transport With{" "}
          <strong
            className={`transition font-medium fade-up ${
              fade ? "fade-in" : "fade-out"
            }`}
          >
            {currentText}{" "}
          </strong>
        </h1>

        <p className="text-center text-xl text-white/50 mt-8 max-w-6xl mx-auto">
          Our platform empowers farmers, FPOs, and transporters to coordinate
          agricultural logistics—combining voice-first truck booking, real-time
          route optimization, and affordable last-mile delivery in one unified
          ecosystem.
        </p>

        <form className="flex border border-white/15 rounded-full p-2 mt-8 md:max-w-lg mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="border-none px-4 !bg-transparent md:flex-1 w-full"
          />
          <Button
            type="submit"
            variant="signup"
            size="sm"
            className="whitespace-nowrap"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
