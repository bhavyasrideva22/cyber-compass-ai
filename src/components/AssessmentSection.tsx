import { useState } from "react";
import { QuestionCard, Question } from "./QuestionCard";
import { ProgressBar } from "./ProgressBar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AssessmentSectionProps {
  title: string;
  description: string;
  questions: Question[];
  onSectionComplete: (answers: Record<string, { answer: string; score: number }>) => void;
  onBack?: () => void;
}

export const AssessmentSection = ({ 
  title, 
  description, 
  questions, 
  onSectionComplete, 
  onBack 
}: AssessmentSectionProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { answer: string; score: number }>>({});

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const canProceed = answers[currentQuestion?.id];

  const handleAnswer = (answer: string, score: number = 0) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: { answer, score }
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onSectionComplete(answers);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else if (onBack) {
      onBack();
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-gradient-background p-6">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-cyber bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-muted-foreground">{description}</p>
        </div>

        {/* Progress Bar */}
        <ProgressBar
          currentStep={currentQuestionIndex + 1}
          totalSteps={questions.length}
          sectionName={title}
        />

        {/* Question */}
        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          currentAnswer={answers[currentQuestion.id]?.answer}
        />

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            {currentQuestionIndex > 0 ? "Previous" : "Back"}
          </Button>

          <Button
            variant="cyber"
            onClick={handleNext}
            disabled={!canProceed}
            className="flex items-center gap-2"
          >
            {isLastQuestion ? "Complete Section" : "Next"}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Question Counter */}
        <div className="text-center mt-4 text-sm text-muted-foreground">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
      </div>
    </div>
  );
};