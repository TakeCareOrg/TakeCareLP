import React, { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { getI18n } from "@/core/i18n";

import { PropsWithLang } from "@/core/types/app.types";
import iaIcon from "@/core/assets/png/ia-icon.png";
import userIcon from "@/core/assets/png/user-icon.png";
import Image from "next/image";

type Message = {
  type: "user" | "ai";
  text: string;
};

export const Chat: React.FC<PropsWithLang> = ({ lang }) => {
  const {
    pages: {
      home: { stats: statsT, chat: chatT },
    },
  } = getI18n(lang);

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [, setIsTypingInInput] = useState(false);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animatingMessageIndex, setAnimatingMessageIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const conversation: Message[] = [
    { type: "user", text: chatT.example.user },
    {
      type: "ai",
      text: `${chatT.example.bot.response_1}\n\n${chatT.example.bot.response_2}\n${chatT.example.bot.advice}\n\n• ${chatT.example.bot.list.item1}\n• ${chatT.example.bot.list.item2}\n\n${chatT.example.bot.response_3}`,
    },
    { type: "user", text: chatT.example.bot.conclusion },
  ];

  // Intersection Observer pour détecter la visibilité
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Déclenche quand 30% du composant est visible
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && currentStep < conversation.length) {
      const currentMsg = conversation[currentStep];
      const timer = setTimeout(() => {
        if (currentMsg.type === "user") {
          typeInInput(currentMsg.text);
        } else {
          showAiResponse(currentMsg.text);
        }
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentStep, isVisible]);

  const typeInInput = (text: string) => {
    setIsTypingInInput(true);
    setInputText("");
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setInputText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTypingInInput(false);
        setTimeout(() => {
          sendMessage(text);
        }, 400);
      }
    }, 40);
  };

  const sendMessage = (text: string) => {
    const newMessageIndex = messages.length;
    setAnimatingMessageIndex(newMessageIndex);
    setMessages((prev) => [...prev, { type: "user", text }]);
    setInputText("");
    setCurrentStep((prev) => prev + 1);
  };

  const showAiResponse = (text: string) => {
    setIsAiThinking(true);
    setTimeout(() => {
      setIsAiThinking(false);
      const newMessageIndex = messages.length;
      setAnimatingMessageIndex(newMessageIndex);
      setMessages((prev) => [...prev, { type: "ai", text }]);
      setCurrentStep((prev) => prev + 1);
    }, 1500);
  };

  const formatAiMessage = (text: string) => {
    return text.split("\n").map((line, i) => {
      if (line.startsWith("•")) {
        return (
          <p key={i} className="ml-4 text-left">
            {line.replace("• ", "")}
          </p>
        );
      } else if (line === "") {
        return <br key={i} />;
      } else {
        return (
          <p key={i} className="text-left">
            {line}
          </p>
        );
      }
    });
  };

  return (
    <div
      ref={sectionRef}
      className="w-[95%] mx-auto pt-10 px-4 md:px-0 grid text-center items-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 p-4 md:p-8 lg:p-12">
        {/* -------- LEFT SIDE : STATS -------- */}
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-[500px]">
            {[
              { number: statsT.users_numbers, label: statsT.users },
              { number: statsT.precision_numbers, label: statsT.precision },
              { number: statsT.perso_numbers, label: statsT.perso },
              { number: statsT.testimonies_numbers, label: statsT.testimonies },
            ].map((s, i) => (
              <div
                key={i}
                className="relative group w-full aspect-square max-w-[200px] mx-auto"
              >
                <div className="absolute inset-0 bg-linear-to-br from-pink-200 to-purple-200 rounded-[20px] md:rounded-[25px]" />
                <div className="relative bg-white/90 backdrop-blur-sm rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 shadow-lg h-full flex flex-col justify-center items-center">
                  <p className="text-3xl sm:text-4xl md:text-[48px] font-bold mb-1 md:mb-2 text-black">
                    {s.number}
                  </p>
                  <p className="text-sm sm:text-base md:text-[18px] font-medium text-black/80 text-center">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* -------- RIGHT SIDE : CHAT -------- */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-[600px]">
            <div className="relative bg-black/20 backdrop-blur-md border border-white/10 rounded-[20px] md:rounded-[30px] p-4 md:p-6 lg:p-8 shadow-xl">
              {/* Messages */}
              <div className="space-y-4 overflow-y-auto h-[400px] sm:h-[450px] md:h-[500px]">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.type === "ai" && (
                      <div className="w-10 h-10 shrink-0 flex items-center justify-center mr-2">
                        <Image
                          src={iaIcon.src}
                          alt="AI"
                          width={40}
                          height={40}
                          className="w-full h-full rounded-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div
                      className={`rounded-2xl p-3 shadow-sm ${
                        msg.type === "user"
                          ? "bg-linear-to-r from-[#0066FF] to-[#D000FF] text-white rounded-br-md max-w-[280px] sm:max-w-[320px] md:max-w-[380px]"
                          : "bg-white/20 backdrop-blur-sm text-white rounded-bl-md max-w-60 sm:max-w-[280px] md:max-w-[320px]"
                      }`}
                      style={{
                        animation:
                          index === animatingMessageIndex
                            ? "popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                            : "none",
                      }}
                    >
                      {msg.type === "ai" ? (
                        <div className="text-sm whitespace-pre-line">
                          {formatAiMessage(msg.text)}
                        </div>
                      ) : (
                        <p className="text-sm whitespace-pre-line text-left">
                          {msg.text}
                        </p>
                      )}
                    </div>
                    {msg.type === "user" && (
                      <div className="w-10 h-10 shrink-0 ml-2">
                        <Image
                          src={userIcon.src}
                          alt="User"
                          width={40}
                          height={40}
                          className="w-full h-full rounded-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                ))}

                {/* AI typing indicator */}
                {isAiThinking && (
                  <div className="flex justify-start">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center mr-2">
                      <Image
                        src={iaIcon.src}
                        alt="AI"
                        width={40}
                        height={40}
                        className="w-full h-full rounded-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="bg-white/20 rounded-2xl p-4 shadow-sm max-w-[320px]"
                      style={{
                        animation:
                          "popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      }}
                    >
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                        <div
                          className="w-2 h-2 bg-white rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <div
                          className="w-2 h-2 bg-white rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="mt-6 relative w-full">
                <div
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 pr-12 text-white placeholder-gray-300"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    minHeight: "48px",
                    maxHeight: "120px",
                    overflow: "hidden",
                  }}
                >
                  <textarea
                    ref={textareaRef}
                    value={inputText}
                    placeholder="Message..."
                    readOnly
                    rows={1}
                    className="w-full bg-transparent resize-none text-white placeholder-gray-300 overflow-hidden"
                    style={{
                      height: "auto",
                      minHeight: "48px",
                      maxHeight: "120px",
                    }}
                    onInput={(e) => {
                      const target = e.currentTarget;
                      target.style.height = "auto";
                      target.style.height = `${Math.min(
                        target.scrollHeight,
                        120
                      )}px`;
                    }}
                  />
                </div>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center">
                  <Send size={18} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Animation keyframes --- */}
      <style jsx>{`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};
