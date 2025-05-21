"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="py-4 px-4 lg:py-8 flex items-center justify-center fixed w-full top-0 z-100">
        <div className="container max-w-5xl">
          <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
            <div className="grid grid-cols-2 lg:grid-cols-3 p-2 items-center px-4 md:pr-2">
              {/* Logo Section */}
              <div className="flex items-center">
                <Image src={logo} alt="Logo Icon" className="h-10 w-14" />
                <h2 className="font-bold text-2xl md:inline-flex hidden">
                  फ़ार्मबंधु 
                </h2>
              </div>

              {/* Empty Spacer for alignment (optional on large screens) */}
              <div className="hidden lg:block" />
              {/* Buttons and Menu Icon */}
              <div className="flex justify-end items-center gap-4 col-span-1 lg:col-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu md:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  />
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge("transition", isOpen && "opacity-0")}
                  />
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  />
                </svg>
                <LoginLink>
                  <Button
                    variant={"login"}
                    className="cursor-pointer hidden md:inline-flex items-center"
                  >
                    लॉग इन
                  </Button>
                </LoginLink>
                <Button
                  variant={"signup"}
                  className="cursor-pointer hidden md:inline-flex items-center"
                >
                  <a href="#signUpOptions">साइन अप</a>
                </Button>
              </div>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-4 ">
                    <LoginLink>
                      <Button
                        variant={"login"}
                        className="cursor-pointer md:inline-flex items-center"
                      >
                        लॉग इन
                      </Button>
                    </LoginLink>
                    <Button
                      variant={"signup"}
                      className="cursor-pointer md:inline-flex items-center"
                    >
                      <a href="#signUpOptions">साइन अप</a>
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
    </>
  );
}
