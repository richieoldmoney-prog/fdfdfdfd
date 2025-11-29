import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface QuizCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  emoji: string;
}

export const QuizCard = ({ id, title, description, icon, emoji }: QuizCardProps) => {
  const Icon = (Icons[icon as keyof typeof Icons] as LucideIcon) || Icons.HelpCircle;

  return (
    <Link to={`/quiz/${id}`} className="block group">
      <Card className="h-full transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-2 border border-white/20 bg-white/95 backdrop-blur-sm hover:bg-white">
        <CardHeader>
          <div className="mb-4 w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg text-3xl">
            {emoji}
          </div>
          <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors duration-300 group-hover:translate-x-1">
            {title}
          </CardTitle>
          <CardDescription className="text-base text-primary/70">{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};
