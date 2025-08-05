import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Target, Brain, Zap, Users, TrendingUp } from "lucide-react";

interface AssessmentIntroProps {
  onStartAssessment: () => void;
}

export const AssessmentIntro = ({ onStartAssessment }: AssessmentIntroProps) => {
  return (
    <div className="min-h-screen bg-gradient-background p-6">
      <div className="max-w-4xl mx-auto animate-slide-in">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-cyber shadow-glow">
              <Shield className="w-12 h-12 text-foreground" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
            🛡️ Cybersecurity Analyst Assessment
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover if a career in Cybersecurity Analysis is the right fit for you through our comprehensive adaptive assessment
          </p>
        </div>

        {/* What is Cybersecurity Analysis */}
        <Card className="mb-8 border-primary/20 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Target className="w-6 h-6 text-primary" />
              What is Cybersecurity Analysis?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Cybersecurity Analysts protect an organization's systems and data from digital threats. 
              This includes identifying vulnerabilities, monitoring networks, investigating incidents, and ensuring compliance.
            </p>
          </CardContent>
        </Card>

        {/* Career Roles */}
        <Card className="mb-8 border-accent/20 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="w-6 h-6 text-accent" />
              Typical Career Roles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Cybersecurity Analyst",
                "SOC (Security Operations Center) Analyst", 
                "Threat Intelligence Analyst",
                "Incident Response Specialist",
                "Security Compliance Officer",
                "Ethical Hacker / Pen Tester (advanced)"
              ].map((role, index) => (
                <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Traits for Success */}
        <Card className="mb-8 border-primary-glow/20 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Brain className="w-6 h-6 text-primary-glow" />
              Traits for Success
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Detail-oriented and analytical",
                "Enjoys problem-solving and detective work",
                "Calm under pressure", 
                "Trustworthy and ethically responsible",
                "Likes learning about tech, threats, and evolving systems"
              ].map((trait, index) => (
                <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-accent/10">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span>{trait}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Assessment Info */}
        <Card className="mb-8 border-primary/30 bg-gradient-cyber/10 backdrop-blur">
          <CardHeader>
            <CardTitle>🎯 Assessment Overview</CardTitle>
            <CardDescription>
              This comprehensive assessment evaluates your fit across multiple dimensions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-primary/10">
                <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Psychological Alignment</h4>
                <p className="text-sm text-muted-foreground">Motivation, cognitive fit, interests, personality</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-accent/10">
                <Zap className="w-8 h-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Technical Readiness</h4>
                <p className="text-sm text-muted-foreground">Aptitude, logical reasoning, foundational knowledge</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary-glow/10">
                <TrendingUp className="w-8 h-8 text-primary-glow mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Career Fit Analysis</h4>
                <p className="text-sm text-muted-foreground">WISCAR framework and personalized recommendations</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Duration & Start */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            📊 Duration: 20-30 minutes | 🎯 Comprehensive evaluation | 🔒 Secure & confidential
          </p>
          <Button 
            onClick={onStartAssessment}
            variant="glow"
            size="xl"
            className="hover:scale-105 transition-all duration-300"
          >
            Begin Assessment
            <Shield className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};