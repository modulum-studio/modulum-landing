"use client";

import { useState, useEffect, useCallback } from "react";
import { useLang } from "@/i18n/LanguageProvider";

interface HeroProps {
  onIntroFinish: () => void;
  isIntroFinished: boolean;
}

const WebIcon = () => (
  <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const MobileIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 6h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

const ProductIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L21 7.5v9L12 21L3 16.5v-9L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M12 12L3 7.5M12 12v9M12 12l9-4.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

interface CardData {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  extendedInfo: string[];
}

interface ServiceCardProps extends CardData {
  delay: number;
  onClick: () => void;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  card: CardData | null;
}

const Modal = ({ isOpen, onClose, card }: ModalProps) => {
  const { t } = useLang();
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !card) return null;

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-label={card.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        style={{ animation: 'fadeIn 200ms ease-out' }}
      />
      
      {/* Modal content */}
      <div 
        className="relative bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl"
        style={{ animation: 'card-entrance 400ms cubic-bezier(0.16, 1, 0.3, 1)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label={t.hero.close}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors text-neutral-400 hover:text-neutral-600"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Icon */}
        <div 
          className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white"
          style={{ background: card.gradient }}
        >
          {card.icon}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">{card.title}</h2>
        
        {/* Description */}
        <p className="text-neutral-600 mb-6">{card.description}</p>

        {/* Extended info */}
        <ul className="space-y-3 mb-8">
          {card.extendedInfo.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-neutral-600">
              <span 
                className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                style={{ background: card.gradient }}
              />
              {item}
            </li>
          ))}
        </ul>

        {/* Contact button */}
        <button
          onClick={scrollToContact}
          className="w-full py-3 px-6 rounded-xl text-white font-medium transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
          style={{ background: card.gradient }}
        >
          {t.hero.sayHello}
        </button>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description, icon, gradient, delay, onClick }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      className="relative group cursor-pointer rounded-2xl text-left"
      style={{
        animation: `card-entrance 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms forwards`,
        opacity: 0,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Gradient glow effect */}
      <div
        className={`absolute -inset-1 rounded-2xl blur-xl transition-opacity duration-500 ${
          isHovered ? 'opacity-40' : 'opacity-0'
        }`}
        style={{
          background: gradient,
          backgroundSize: '200% 200%',
          animation: 'gradient-rotate 3s ease infinite',
        }}
      />
      
      {/* Animated gradient border */}
      <div
        className={`absolute inset-0 rounded-2xl p-px transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: gradient,
          backgroundSize: '200% 200%',
          animation: 'gradient-rotate 3s ease infinite',
        }}
      >
        <div className="w-full h-full bg-white rounded-2xl" />
      </div>
      
      {/* Card content */}
      <div className="relative bg-white rounded-2xl p-6 md:p-8 md:h-[260px] flex flex-col border border-neutral-100 transition-all duration-500 group-hover:border-transparent">
        {/* Icon container with floating animation */}
        <div 
          className={`w-14 h-14 shrink-0 aspect-square rounded-xl flex items-center justify-center mb-4 md:mb-6 transition-all duration-500 ${
            isHovered ? 'text-white' : 'text-neutral-700 bg-neutral-50'
          }`}
          style={{
            background: isHovered ? gradient : undefined,
            backgroundSize: '200% 200%',
            animation: isHovered ? 'gradient-rotate 3s ease infinite, float 3s ease-in-out infinite' : 'none',
          }}
        >
          {icon}
        </div>

        {/* Title with shimmer effect on hover */}
        <h3 className="text-xl font-semibold mb-3 text-neutral-900 relative">
          {title}
          <span
            className={`absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundSize: '200% 100%',
              animation: isHovered ? 'shimmer 2s infinite' : 'none',
            }}
          />
        </h3>

        {/* Description */}
        <p className="text-neutral-500 leading-relaxed flex-1 text-[15px]">
          {description}
        </p>

        {/* Bottom accent line */}
        <div className="mt-6 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out rounded-full"
          style={{ background: gradient, backgroundSize: '200% 200%', animation: 'gradient-rotate 3s ease infinite' }}
        />
      </div>
    </div>
  );
};

export default function Hero({ onIntroFinish, isIntroFinished }: HeroProps) {
  const { t } = useLang();
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const fullText = "Modulum Studio";

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 80);
      return () => clearTimeout(timer);
    } else if (displayedText.length === fullText.length && !isIntroFinished) {
      const finishTimer = setTimeout(() => {
        setShowCursor(false);
        onIntroFinish();
        setShowCards(true);
      }, 500);
      return () => clearTimeout(finishTimer);
    }
  }, [displayedText, fullText, isIntroFinished, onIntroFinish]);

  useEffect(() => {
    if (!isIntroFinished) {
      const cursorTimer = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(cursorTimer);
    }
  }, [isIntroFinished]);

  const visuals = [
    { icon: <MobileIcon />, gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 50%, #a8edea 100%)" },
    { icon: <WebIcon />, gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)" },
    { icon: <ProductIcon />, gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #ffd89b 100%)" },
  ];
  const cards: CardData[] = t.hero.cards.map((c, i) => ({ ...c, ...visuals[i] }));

  const closeModal = useCallback(() => setSelectedIndex(null), []);

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-24 pb-20 md:pt-16 md:pb-0">
      <div className="relative text-center">
        <div className={`transition-all duration-900 ease-out ${
          isIntroFinished ? 'md:-translate-y-10' : 'translate-y-0'
        }`}>
          <h1
            aria-label={fullText}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 min-h-[1.1em]"
          >
            <span aria-hidden>{displayedText}</span>
            {!isIntroFinished && showCursor && <span aria-hidden className="animate-pulse">|</span>}
          </h1>
          {isIntroFinished && (
            <p
              className="mt-6 max-w-xl mx-auto text-lg md:text-xl text-neutral-500 leading-relaxed opacity-0"
              style={{ animation: 'fadeInUp 800ms cubic-bezier(0.16, 1, 0.3, 1) 150ms forwards' }}
            >
              {t.hero.tagline}
            </p>
          )}
        </div>
      </div>

      {isIntroFinished && showCards && (
        <div className="relative max-w-5xl mx-auto w-full mt-10 md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {cards.map((card, index) => (
              <ServiceCard
                key={card.title}
                {...card}
                delay={300 + index * 100}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        </div>
      )}

      {isIntroFinished && (
        <a
          href="#studio"
          aria-label={t.hero.scrollHint}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400 hover:text-neutral-900 transition-colors opacity-0"
          style={{ animation: 'fadeIn 800ms ease-out 1.2s forwards' }}
        >
          <svg className="w-5 h-5 animate-bounce" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      )}

      <Modal isOpen={selectedIndex !== null} onClose={closeModal} card={selectedIndex === null ? null : cards[selectedIndex]} />
    </section>
  );
}
