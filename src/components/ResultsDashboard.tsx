import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Target, 
  Brain, 
  TrendingUp, 
  Award, 
  BookOpen, 
  ExternalLink,
  CheckCircle,
  AlertCircle,
  XCircle
} from "lucide-react";

interface AssessmentResults {
  psychometricScore: number;
  technicalScore: number;
  wiscarScores: {
    will: number;
    interest: number; 
    skill: number;
    cognitiveReadiness: number;
    abilityToLearn: number;
    realWorldFit: number;
  };
  overallScore: number;
  recommendation: 'yes' | 'maybe' | 'no';
}

interface ResultsDashboardProps {
  results: AssessmentResults;
  onRestart: () => void;
}

export const ResultsDashboard = ({ results, onRestart }: ResultsDashboardProps) => {
  const getRecommendationColor = (rec: string) => {
    switch (rec) {
      case 'yes': return 'text-green-400';
      case 'maybe': return 'text-yellow-400'; 
      case 'no': return 'text-red-400';
      default: return 'text-muted-foreground';
    }
  };

  const getRecommendationIcon = (rec: string) => {
    switch (rec) {
      case 'yes': return <CheckCircle className="w-6 h-6 text-green-400" />;
      case 'maybe': return <AlertCircle className="w-6 h-6 text-yellow-400" />;
      case 'no': return <XCircle className="w-6 h-6 text-red-400" />;
      default: return null;
    }
  };

  const getRecommendationText = (rec: string) => {
    switch (rec) {
      case 'yes': return 'Strong fit for cybersecurity career';
      case 'maybe': return 'Potential fit with development needed';
      case 'no': return 'Consider alternative technology paths';
      default: return 'Assessment incomplete';
    }
  };

  const getNextSteps = (rec: string) => {
    switch (rec) {
      case 'yes': 
        return [
          "Begin with CompTIA Security+ or Google Cybersecurity Certificate",
          "Practice networking and basic ethical hacking on TryHackMe",
          "Build a home lab for hands-on experience",
          "Join cybersecurity communities and forums"
        ];
      case 'maybe':
        return [
          "Take foundational IT and networking courses",
          "Shadow a cybersecurity professional", 
          "Complete a cybersecurity bootcamp or short course",
          "Assess your commitment level after 3-6 months of study"
        ];
      case 'no':
        return [
          "Explore IT Help Desk or Systems Administration roles",
          "Consider QA Testing with security focus",
          "Look into Cloud Support or DevOps pathways",
          "Reassess your interests and strengths"
        ];
      default: return [];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background p-6">
      <div className="max-w-6xl mx-auto animate-slide-in">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-cyber shadow-glow">
              <Award className="w-12 h-12 text-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
            🎯 Assessment Results
          </h1>
          <p className="text-xl text-muted-foreground">
            Your comprehensive cybersecurity career readiness evaluation
          </p>
        </div>

        {/* Overall Score & Recommendation */}
        <Card className="mb-8 border-primary/30 bg-gradient-cyber/10 backdrop-blur">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-3 text-2xl">
              {getRecommendationIcon(results.recommendation)}
              Overall Assessment Score
            </CardTitle>
            <div className="text-6xl font-bold text-primary my-4">
              {results.overallScore}/100
            </div>
            <CardDescription className={`text-lg ${getRecommendationColor(results.recommendation)}`}>
              {getRecommendationText(results.recommendation)}
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Score Breakdown */}
          <Card className="border-primary/20 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Score Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-primary" />
                    Psychological Fit
                  </span>
                  <span className="font-semibold">{results.psychometricScore}/100</span>
                </div>
                <Progress value={results.psychometricScore} className="h-3" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-accent" />
                    Technical Readiness
                  </span>
                  <span className="font-semibold">{results.technicalScore}/100</span>
                </div>
                <Progress value={results.technicalScore} className="h-3" />
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  WISCAR Analysis
                </h4>
                <div className="space-y-3 text-sm">
                  {Object.entries(results.wiscarScores).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <Badge variant="outline">{value}/100</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="border-accent/20 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-accent" />
                Recommended Next Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {getNextSteps(results.recommendation).map((step, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-accent/10">
                    <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-semibold mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Career Roles */}
        <Card className="mb-8 border-primary-glow/20 bg-card/80 backdrop-blur">
          <CardHeader>
            <CardTitle>🎯 Top Career Matches</CardTitle>
            <CardDescription>
              Based on your assessment results, these roles align best with your profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { role: "SOC Analyst", match: "92%", description: "Monitor security alerts and respond to incidents" },
                { role: "Cybersecurity Analyst", match: "88%", description: "Identify vulnerabilities and security threats" },
                { role: "Incident Response Specialist", match: "85%", description: "Investigate and respond to security breaches" },
                { role: "Threat Intelligence Analyst", match: "82%", description: "Research and analyze emerging threats" },
                { role: "Security Compliance Officer", match: "78%", description: "Ensure regulatory compliance and standards" }
              ].map((career, index) => (
                <div key={index} className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">{career.role}</h4>
                    <Badge className="bg-primary/20 text-primary">{career.match}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{career.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Path */}
        <Card className="mb-8 border-accent/20 bg-card/80 backdrop-blur">
          <CardHeader>
            <CardTitle>🛠 Personalized Learning Path</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-primary/10">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                <h4 className="font-semibold mb-2">Foundation</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Networking Basics</li>
                  <li>• Linux Commands</li>
                  <li>• Security+ Certification</li>
                </ul>
              </div>
              <div className="text-center p-4 rounded-lg bg-accent/10">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                <h4 className="font-semibold mb-2">Intermediate</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Python Scripting</li>
                  <li>• Wireshark Analysis</li>
                  <li>• TryHackMe Labs</li>
                </ul>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary-glow/10">
                <div className="w-12 h-12 rounded-full bg-primary-glow text-foreground flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                <h4 className="font-semibold mb-2">Job-Ready</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• SIEM Tools</li>
                  <li>• Incident Response</li>
                  <li>• Cyber Range Labs</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cyber" size="lg" className="flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              Explore Learning Resources
            </Button>
            <Button variant="outline" size="lg" onClick={onRestart}>
              Retake Assessment
            </Button>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            This assessment provides guidance based on your responses. Consider consulting with career counselors 
            or cybersecurity professionals for additional perspective on your career path.
          </p>
        </div>
      </div>
    </div>
  );
};