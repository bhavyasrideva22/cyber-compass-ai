import { cn } from "@/lib/utils";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  sectionName: string;
  className?: string;
}

export const ProgressBar = ({ currentStep, totalSteps, sectionName, className }: ProgressBarProps) => {
  const progressPercentage = (currentStep / totalSteps) * 100;
  
  return (
    <div className={cn("w-full mb-8", className)}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{sectionName}</span>
        <span className="text-sm text-muted-foreground">
          {currentStep} of {totalSteps}
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-primary transition-all duration-500 ease-out shadow-cyber"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="mt-2 text-xs text-muted-foreground text-center">
        {Math.round(progressPercentage)}% Complete
      </div>
    </div>
  );
};