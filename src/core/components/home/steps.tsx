"use client";

import { getI18n } from "@/core/i18n";
import { PropsWithLang } from "@/core/types/app.types";
import Image from "next/image";
import { Datas } from "./datas";
import { useState, useEffect, useRef, Fragment } from "react";

export const Steps: React.FC<PropsWithLang> = ({ lang }) => {
  const {
    pages: {
      home: { steps: t },
    },
  } = getI18n(lang);

  const [currentStep, setCurrentStep] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const imageScrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const stepsData = [
    {
      title: t.step1.title,
      subtitle: t.step1.subtitle,
      description: t.step1.description,
    },
    {
      title: t.step2.title,
      subtitle: t.step2.subtitle,
      description: t.step2.description,
    },
    {
      title: t.step3.title,
      subtitle: t.step3.subtitle,
      description: t.step3.description,
    },
  ];

  // Fonction pour scroller vers une étape spécifique
  const scrollToStep = (stepIndex: number) => {
    if (scrollContainerRef.current && imageScrollContainerRef.current) {
      const textContainer = scrollContainerRef.current;
      const imageContainer = imageScrollContainerRef.current;
      const textStepHeight = textContainer.scrollHeight / stepsData.length;
      const imageStepHeight = imageContainer.scrollHeight / stepsData.length;

      isScrollingRef.current = true;

      textContainer.scrollTo({
        top: stepIndex * textStepHeight,
        behavior: "smooth",
      });

      imageContainer.scrollTo({
        top: stepIndex * imageStepHeight,
        behavior: "smooth",
      });

      // Réinitialiser le flag après l'animation
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 600);
    }
  };

  // Gérer le scroll automatique toutes les 5 secondes
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollTimeoutRef.current = setTimeout(() => {
        const nextStep = (currentStep + 1) % stepsData.length;
        setCurrentStep(nextStep);
        scrollToStep(nextStep);
        startAutoScroll();
      }, 5000);
    };

    startAutoScroll();

    return () => {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, [currentStep, stepsData.length]);

  // Gérer le clic sur les indicateurs
  const handleStepClick = (stepIndex: number) => {
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }
    setCurrentStep(stepIndex);
    scrollToStep(stepIndex);
  };

  return (
    <div className="w-[95%] mx-auto py-10 md:py-16 lg:py-20 px-4 md:px-0 grid text-center items-center rounded-[30px] border border-[rgba(239,239,243,0.5)] bg-white/30 shadow-[0_4px_24px_0_rgba(0,0,0,0.2)] backdrop-blur-[20px]">
      <Datas lang={lang} />

      <div className="grid gap-6 md:gap-10 pt-6 md:pt-10 px-4 md:px-[30px]">
        {/* Mobile: Stack layout */}
        <div className="lg:hidden grid gap-8">
          {stepsData.map((step, index) => (
            <div key={index} className="grid gap-4 text-left">
              <p className="font-bold text-lg md:text-xl text-black/70">
                {step.title}
              </p>
              <h3 className="font-bold leading-tight text-2xl md:text-3xl">
                {step.subtitle}
              </h3>
              <p className="font-normal text-base md:text-lg">{step.description}</p>
              <Image
                src={`/images/steps/${index + 1}.svg`}
                alt={`step ${index + 1}`}
                width={640}
                height={530}
                className="max-h-[300px] w-auto mx-auto"
              />
            </div>
          ))}
        </div>

        {/* Desktop: Original scroll layout */}
        <div className="hidden lg:grid grid-cols-[1fr_160px_1fr] gap-3 mx-auto">
          <div
            ref={scrollContainerRef}
            className="overflow-hidden snap-y snap-mandatory"
            style={{ height: "400px" }}
          >
            {stepsData.map((step, index) => (
              <div
                key={index}
                className="snap-start h-[400px] grid gap-4 content-center text-left px-14"
              >
                <p className="font-bold text-[26px] text-black/70">
                  {step.title}
                </p>
                <h3 className="font-bold leading-[40px] text-[32px]">
                  {step.subtitle}
                </h3>
                <p className="font-normal text-[18px]">{step.description}</p>
              </div>
            ))}
          </div>

          <StepIndicator
            currentStep={currentStep}
            totalSteps={stepsData.length}
            onStepClick={handleStepClick}
          />

          <div
            ref={imageScrollContainerRef}
            className="overflow-hidden snap-y snap-mandatory"
            style={{ height: "400px" }}
          >
            {stepsData.map((_, index) => (
              <div
                key={index}
                className="snap-start h-[400px] flex items-center justify-center"
              >
                <Image
                  src={`/images/steps/${index + 1}.svg`}
                  alt={`step ${index + 1}`}
                  width={640}
                  height={530}
                  className="max-h-[400px] w-auto mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

const StepIndicator: React.FC<{
  currentStep: number;
  totalSteps: number;
  onStepClick: (step: number) => void;
}> = ({ currentStep, totalSteps, onStepClick }) => {
  return (
    <div className="flex flex-col justify-between items-center my-auto max-h-[300px] h-full ">
      {[...Array(totalSteps)].map((_, index) => (
        <Fragment key={index}>
          {index > 0 && <div className="w-[2px] h-[34%] bg-black/20"></div>}

          <div
            className={`size-[34px] rounded-full flex items-center justify-center text-[20px] font-semibold cursor-pointer transition-all duration-300 ${
              index === currentStep
                ? "bg-black text-white scale-110"
                : "text-black bg-[#D9D9D9] hover:bg-[#c0c0c0]"
            }`}
            onClick={() => onStepClick(index)}
          >
            {index + 1}
          </div>
        </Fragment>
      ))}
    </div>
  );
};
