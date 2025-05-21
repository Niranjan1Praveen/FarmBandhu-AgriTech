"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Mic, Leaf, Home, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const promptsData = [
  {
    id: "crop",
    text: "फ़सल का नाम",
    icon: Leaf,
    color: "bg-[var(--chart-1)]",
  },
  {
    id: "market",
    text: "मंडी का नाम",
    icon: Home,
    color: "bg-[var(--chart-4)]",
  },
  {
    id: "quantity",
    text: "मात्रा किलो या बोरी में",
    icon: Package,
    color: "bg-[var(--chart-2)]",
  },
];

export default function VoiceForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({
    crop: "",
    market: "",
    quantity: "",
  });
  const [listening, setListening] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [submitEnabled, setSubmitEnabled] = useState(false);

  const recognitionRef = useRef(null);
  const synthRef = useRef(window.speechSynthesis);
  const voicesRef = useRef([]);
  const stepIndexRef = useRef(0);

  const SpeechRecognition =
    typeof window !== "undefined"
      ? window.SpeechRecognition || window.webkitSpeechRecognition
      : null;
  const SpeechSynthesisUtterance =
    typeof window !== "undefined"
      ? window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance
      : null;

  useEffect(() => {
    if (!SpeechRecognition) {
      alert(
        "आपका ब्राउज़र स्पीच रिकग्निशन को सपोर्ट नहीं करता है। कृपया Chrome, Edge या Safari का उपयोग करें।"
      );
      return;
    }

    voicesRef.current = synthRef.current.getVoices();
    if (voicesRef.current.length === 0) {
      synthRef.current.onvoiceschanged = () => {
        voicesRef.current = synthRef.current.getVoices();
      };
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = "hi-IN";
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = false;

    recognitionRef.current.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      const stepKey = recognitionRef.current.stepKey;

      setResponses((prev) => ({
        ...prev,
        [stepKey]: speechResult,
      }));

      stopListening();
      moveToNextStep();
    };

    recognitionRef.current.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setStatusText(`त्रुटि: ${event.error}`);
      setListening(false);
      setTimeout(() => {
        startListening(promptsData[stepIndexRef.current].id);
      }, 1000);
    };

    recognitionRef.current.onend = () => {
      setListening(false);
    };

    setTimeout(() => {
      initApp();
    }, 1000);
  }, []);

  async function speak(text) {
    if (!SpeechSynthesisUtterance) return;

    return new Promise((resolve) => {
      let hindiVoice = voicesRef.current.find(
        (voice) =>
          voice.lang.toLowerCase().includes("hi") ||
          voice.name.toLowerCase().includes("hindi")
      );

      if (!hindiVoice && voicesRef.current.length > 0) {
        hindiVoice = voicesRef.current[0];
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = hindiVoice;
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      utterance.onend = resolve;
      synthRef.current.speak(utterance);
    });
  }

  function startListening(stepKey) {
    if (!recognitionRef.current) return;
    try {
      recognitionRef.current.stepKey = stepKey;
      recognitionRef.current.start();
      setListening(true);
      setStatusText("सुन रहा है...");
    } catch (error) {
      console.error("Recognition already started:", error);
    }
  }

  function stopListening() {
    if (!recognitionRef.current) return;
    try {
      recognitionRef.current.stop();
      setListening(false);
      setStatusText("");
    } catch (error) {
      console.error("Recognition already stopped:", error);
    }
  }

  async function moveToNextStep() {
    if (stepIndexRef.current < promptsData.length - 1) {
      stepIndexRef.current += 1;
      const nextPrompt = promptsData[stepIndexRef.current];
      setCurrentStep(stepIndexRef.current);
      await speak(nextPrompt.text);
      startListening(nextPrompt.id);
    } else {
      setSubmitEnabled(true);
      setStatusText("सभी चरण पूर्ण हो गए हैं। आप भेज सकते हैं।");
    }
  }

  async function initApp() {
    stepIndexRef.current = 0;
    setCurrentStep(0);
    setResponses({ crop: "", market: "", quantity: "" });
    setSubmitEnabled(false);
    setStatusText("");
    await speak("कृपया अपनी फसल, मंडी और मात्रा बताएं");
    await speak(promptsData[0].text);
    startListening(promptsData[0].id);
  }

  async function onMicClick() {
    if (synthRef.current.speaking) synthRef.current.cancel();
    await speak(promptsData[stepIndexRef.current].text);
    startListening(promptsData[stepIndexRef.current].id);
  }

  async function onSubmit() {
    alert(
      `आपका अनुरोध भेजा गया है:\nफसल: ${responses.crop}\nमंडी: ${responses.market}\nमात्रा: ${responses.quantity}`
    );
    await speak("आपका ट्रक आने वाला है कुछ समय के लिए इंतज़ार करे");
  }
  return (
    <div className="max-w-2xl mx-auto mt-20 p-4">
      <div className="flex justify-center mb-6">
        <div
          className={`p-4 bg-gray-200 rounded-full cursor-pointer border-3 ${
            listening ? "border-indigo-600 animate-pulse" : "border-transparent"
          }`}
          onClick={onMicClick}
        >
          <Mic className="text-indigo-600" />
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center mb-6">बोलिए</h1>

      <div className="space-y-6">
        {promptsData.map((prompt, index) => (
          <div
            key={prompt.id}
            className={`p-4 rounded-xl min-h-[100px] shadow ${prompt.color} ${
              index === currentStep ? "ring-2 ring-indigo-600" : ""
            }`}
          >
            <div className="flex items-center space-x-4">
              <prompt.icon className="w-6 h-6" />{" "}
              <span className="font-semibold">{prompt.text}</span>
            </div>
            <div className="mt-2 text-lg font-medium">
              आपका उत्तर: {responses[prompt.id]}
            </div>
          </div>
        ))}
      </div>

      <Button
        onClick={onSubmit}
        disabled={!submitEnabled}
        className={`mt-6 mx-auto max-w-sm py-2 px-4 rounded-xl text-white font-semibold transition cursor-pointer ${
          submitEnabled ? "bg-green-600 hover:bg-green-700" : "bg-gray-400" 
        }`}
      >
        भेजिए ट्रक
      </Button>

      {statusText && (
        <div className="mt-4 text-center text-xl text-gray-700">
          {statusText}
        </div>
      )}
    </div>
  );
}
