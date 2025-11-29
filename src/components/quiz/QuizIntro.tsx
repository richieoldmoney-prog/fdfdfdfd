import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface QuizIntroProps {
  title: string;
  description: string;
  icon: string;
  emoji: string;
  onStart: () => void;
}

export const QuizIntro = ({ title, description, icon, emoji, onStart }: QuizIntroProps) => {
  const Icon = (Icons[icon as keyof typeof Icons] as LucideIcon) || Icons.HelpCircle;

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 animate-fade-in">
      <div className="mb-8 w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center text-white shadow-lg text-6xl">
        {emoji}
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl">
        {description}
      </p>
      <Button
        size="lg"
        onClick={onStart}
        className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-secondary hover:bg-secondary/90 text-white"
      >
        Teste Başla
      </Button>
    </div>
  );
};
