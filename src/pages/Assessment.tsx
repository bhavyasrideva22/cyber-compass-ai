import { useState } from "react";
import { AssessmentIntro } from "@/components/AssessmentIntro";
import { AssessmentSection } from "@/components/AssessmentSection";
import { ResultsDashboard } from "@/components/ResultsDashboard";
import { psychometricQuestions, technicalQuestions, wiscarQuestions } from "@/data/assessmentQuestions";

type AssessmentPhase = 'intro' | 'psychometric' | 'technical' | 'wiscar' | 'results';

interface SectionResults {
  psychometric?: Record<string, { answer: string; score: number }>;
  technical?: Record<string, { answer: string; score: number }>;
  wiscar?: Record<string, { answer: string; score: number }>;
}

const Assessment = () => {
  const [currentPhase, setCurrentPhase] = useState<AssessmentPhase>('intro');
  const [sectionResults, setSectionResults] = useState<SectionResults>({});

  const calculateResults = () => {
    // Calculate psychometric score (average of all responses)
    const psychometricScores = Object.values(sectionResults.psychometric || {}).map(r => r.score);
    const psychometricScore = psychometricScores.length > 0 
      ? Math.round((psychometricScores.reduce((a, b) => a + b, 0) / psychometricScores.length) * 20) 
      : 0;

    // Calculate technical score (weighted by correctness)
    const technicalScores = Object.values(sectionResults.technical || {}).map(r => r.score);
    const technicalScore = technicalScores.length > 0 
      ? Math.round((technicalScores.reduce((a, b) => a + b, 0) / technicalScores.length) * 20) 
      : 0;

    // Calculate WISCAR scores
    const wiscarScores = Object.values(sectionResults.wiscar || {}).map(r => r.score);
    const wiscarAverage = wiscarScores.length > 0 
      ? wiscarScores.reduce((a, b) => a + b, 0) / wiscarScores.length 
      : 0;

    const wiscarResults = {
      will: Math.round(wiscarAverage * 20),
      interest: Math.round(wiscarAverage * 20), 
      skill: Math.round(wiscarAverage * 16), // Slightly lower for skill
      cognitiveReadiness: Math.round(wiscarAverage * 18),
      abilityToLearn: Math.round(wiscarAverage * 22), // Higher for learning ability
      realWorldFit: Math.round(wiscarAverage * 18)
    };

    // Calculate overall score (weighted average)
    const overallScore = Math.round(
      (psychometricScore * 0.3) + 
      (technicalScore * 0.3) + 
      (Object.values(wiscarResults).reduce((a, b) => a + b, 0) / 6 * 0.4)
    );

    // Determine recommendation
    let recommendation: 'yes' | 'maybe' | 'no' = 'no';
    if (overallScore >= 75) recommendation = 'yes';
    else if (overallScore >= 55) recommendation = 'maybe';

    return {
      psychometricScore,
      technicalScore,
      wiscarScores: wiscarResults,
      overallScore,
      recommendation
    };
  };

  const handleSectionComplete = (phase: AssessmentPhase, results: Record<string, { answer: string; score: number }>) => {
    setSectionResults(prev => ({
      ...prev,
      [phase]: results
    }));

    // Move to next phase
    switch (phase) {
      case 'psychometric':
        setCurrentPhase('technical');
        break;
      case 'technical':
        setCurrentPhase('wiscar');
        break;
      case 'wiscar':
        setCurrentPhase('results');
        break;
    }
  };

  const handleRestart = () => {
    setCurrentPhase('intro');
    setSectionResults({});
  };

  const handleBack = () => {
    switch (currentPhase) {
      case 'technical':
        setCurrentPhase('psychometric');
        break;
      case 'wiscar':
        setCurrentPhase('technical');
        break;
      case 'results':
        setCurrentPhase('wiscar');
        break;
      default:
        setCurrentPhase('intro');
    }
  };

  switch (currentPhase) {
    case 'intro':
      return (
        <AssessmentIntro 
          onStartAssessment={() => setCurrentPhase('psychometric')}
        />
      );

    case 'psychometric':
      return (
        <AssessmentSection
          title="🧠 Psychological Assessment"
          description="Evaluate your personality traits, interests, and motivational alignment with cybersecurity work"
          questions={psychometricQuestions}
          onSectionComplete={(results) => handleSectionComplete('psychometric', results)}
          onBack={() => setCurrentPhase('intro')}
        />
      );

    case 'technical':
      return (
        <AssessmentSection
          title="⚡ Technical & Aptitude Assessment"
          description="Test your logical reasoning, technical knowledge, and cybersecurity fundamentals"
          questions={technicalQuestions}
          onSectionComplete={(results) => handleSectionComplete('technical', results)}
          onBack={handleBack}
        />
      );

    case 'wiscar':
      return (
        <AssessmentSection
          title="🎯 WISCAR Framework Analysis"
          description="Comprehensive evaluation of Will, Interest, Skill, Cognitive readiness, Ability to learn, and Real-world fit"
          questions={wiscarQuestions}
          onSectionComplete={(results) => handleSectionComplete('wiscar', results)}
          onBack={handleBack}
        />
      );

    case 'results':
      return (
        <ResultsDashboard
          results={calculateResults()}
          onRestart={handleRestart}
        />
      );

    default:
      return <AssessmentIntro onStartAssessment={() => setCurrentPhase('psychometric')} />;
  }
};

export default Assessment;