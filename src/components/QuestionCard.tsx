import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface Question {
  id: string;
  type: 'multiple-choice' | 'likert' | 'scenario';
  question: string;
  description?: string;
  options: string[];
  correctAnswer?: number; // For scoring
}

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string, score?: number) => void;
  currentAnswer?: string;
}

export const QuestionCard = ({ question, onAnswer, currentAnswer }: QuestionCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>(currentAnswer || "");

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
    
    // Calculate score based on question type
    let score = 0;
    const answerIndex = question.options.indexOf(value);
    
    if (question.type === 'likert') {
      // Likert scale scoring (1-5 scale)
      score = answerIndex + 1;
    } else if (question.type === 'multiple-choice' && question.correctAnswer !== undefined) {
      // Correct/incorrect scoring
      score = answerIndex === question.correctAnswer ? 5 : 0;
    } else {
      // General scoring based on position (for scenario questions)
      score = answerIndex + 1;
    }
    
    onAnswer(value, score);
  };

  const getLikertLabel = (index: number) => {
    const labels = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];
    return labels[index] || '';
  };

  return (
    <Card className="border-primary/20 bg-card/80 backdrop-blur animate-slide-in">
      <CardHeader>
        <CardTitle className="text-xl">{question.question}</CardTitle>
        {question.description && (
          <CardDescription className="text-muted-foreground">
            {question.description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-accent/10 transition-colors">
              <RadioGroupItem 
                value={option} 
                id={`option-${index}`}
                className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <Label 
                htmlFor={`option-${index}`} 
                className={cn(
                  "flex-1 cursor-pointer",
                  selectedAnswer === option && "text-primary font-medium"
                )}
              >
                {question.type === 'likert' && (
                  <span className="text-sm text-muted-foreground mr-2">
                    {getLikertLabel(index)}:
                  </span>
                )}
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};