"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroDesign from "@/assets/images/hero.png";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="py-24 px-4 flex items-center justify-center overflow-x-clip">
      <div className="container relative">
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            1,000+ किसानों को सशक्त बना रहे हैं
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-medium text-center mt-6 max-w-5xl mx-auto leading-relaxed">
          लॉजिस्टिक्स सुविधा के साथ ग्रामीण परिवहन में क्रांति लाएं{" "}
        </h1>

        <p className="text-center text-xl text-white/50 mt-8 max-w-6xl mx-auto leading-relaxed">
          हमारा प्लेटफ़ॉर्म किसानों, एफपीओ और ट्रांसपोर्टरों को कृषि लॉजिस्टिक्स
          समन्वयित करने के लिए सशक्त बनाता है — इसमें वॉयस-आधारित ट्रक बुकिंग,
          रीयल-टाइम रूट ऑप्टिमाइज़ेशन और किफायती अंतिम-मील डिलीवरी एकीकृत हैं।
        </p>
        <Image
          src={heroDesign}
          width={600}
          height={600}
          className="w-[300px] h-[300px] mx-auto mt-8"
          alt={"Here Design-1"}
        />

        <div className="flex items-center justify-center mt-8">
          <Button
            variant="signup"
            size="sm"
            className="whitespace-nowrap rounded-full"
          >
            <Link href={"/farmer/vehicle-request"}>शुरू करें</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
