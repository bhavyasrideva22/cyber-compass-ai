import { Question } from "@/components/QuestionCard";

export const psychometricQuestions: Question[] = [
  {
    id: "interest-1",
    type: "likert",
    question: "I enjoy solving logic-based security puzzles and challenges",
    description: "Rate your level of agreement with this statement",
    options: [
      "I find these puzzles frustrating and avoid them",
      "I occasionally attempt them but give up quickly", 
      "I find them moderately interesting",
      "I enjoy working through them systematically",
      "I actively seek out complex security challenges"
    ]
  },
  {
    id: "personality-1", 
    type: "likert",
    question: "I stay calm and focused when working under pressure or tight deadlines",
    description: "How well does this describe you?",
    options: [
      "I become overwhelmed and make mistakes under pressure",
      "I struggle but can manage with significant effort",
      "I can handle moderate pressure situations", 
      "I work well under pressure and maintain quality",
      "I thrive under pressure and perform my best work"
    ]
  },
  {
    id: "cognitive-1",
    type: "multiple-choice", 
    question: "When analyzing a complex problem, I prefer to:",
    options: [
      "Focus on creative and innovative approaches",
      "Work with concrete facts and systematic methods",
      "Collaborate extensively with others",
      "Trust my intuition and experience"
    ]
  },
  {
    id: "motivation-1",
    type: "likert",
    question: "I am driven by curiosity to understand how systems can be breached or compromised",
    description: "How accurately does this describe your motivation?",
    options: [
      "I have no interest in system vulnerabilities",
      "I find it mildly interesting but not motivating",
      "I'm somewhat curious about security weaknesses",
      "I'm genuinely interested in understanding vulnerabilities", 
      "I'm passionate about discovering and understanding security flaws"
    ]
  },
  {
    id: "personality-2",
    type: "likert", 
    question: "I pay close attention to details and rarely make careless mistakes",
    description: "Rate how well this describes your typical behavior",
    options: [
      "I often overlook important details",
      "I catch some details but miss others regularly",
      "I notice most details with conscious effort",
      "I naturally catch details and maintain accuracy",
      "I have exceptional attention to detail and rarely miss anything"
    ]
  }
];

export const technicalQuestions: Question[] = [
  {
    id: "logic-1",
    type: "multiple-choice",
    question: "If all firewalls block unauthorized traffic, and System A has no firewall, what can we conclude?",
    options: [
      "System A blocks all unauthorized traffic",
      "System A may allow unauthorized traffic", 
      "System A definitely allows unauthorized traffic",
      "We cannot determine anything about System A's traffic handling"
    ],
    correctAnswer: 1
  },
  {
    id: "networking-1", 
    type: "multiple-choice",
    question: "Which port is typically used for HTTPS traffic?",
    options: [
      "Port 80",
      "Port 443",
      "Port 22", 
      "Port 25"
    ],
    correctAnswer: 1
  },
  {
    id: "security-1",
    type: "multiple-choice",
    question: "What does the 'C' in CIA Triad stand for?",
    options: [
      "Cryptography",
      "Confidentiality", 
      "Compliance",
      "Control"
    ],
    correctAnswer: 1
  },
  {
    id: "scenario-1",
    type: "scenario", 
    question: "You notice unusual network traffic at 3 AM when most employees are offline. What should be your FIRST action?",
    description: "Choose the most appropriate initial response",
    options: [
      "Immediately shut down all network connections",
      "Document the activity and begin detailed investigation",
      "Wait to see if the activity continues tomorrow",
      "Restart all servers to clear any potential issues"
    ],
    correctAnswer: 1
  },
  {
    id: "systems-1",
    type: "multiple-choice",
    question: "In Linux, which command would you use to view running processes?",
    options: [
      "ls -la",
      "ps aux",
      "cat /proc", 
      "netstat -an"
    ],
    correctAnswer: 1
  }
];

export const wiscarQuestions: Question[] = [
  {
    id: "will-1",
    type: "likert",
    question: "I have consistently maintained interest in technology and security topics over time",
    description: "Evaluate your sustained interest in the field",
    options: [
      "My interest fluctuates significantly and often wanes",
      "I have periods of interest followed by disengagement", 
      "My interest is generally stable with minor fluctuations",
      "I have maintained steady interest with growing enthusiasm",
      "My passion for security has only grown stronger over time"
    ]
  },
  {
    id: "interest-2",
    type: "likert", 
    question: "I actively seek out information about cybersecurity threats and trends",
    description: "How well does this describe your current behavior?",
    options: [
      "I rarely read about cybersecurity topics",
      "I occasionally come across security news",
      "I sometimes actively look for security information",
      "I regularly follow cybersecurity news and trends", 
      "I actively research and stay current with threat intelligence"
    ]
  },
  {
    id: "skill-1",
    type: "multiple-choice",
    question: "What is your current level of programming/scripting experience?", 
    options: [
      "No programming experience",
      "Basic understanding of programming concepts",
      "Can write simple scripts in Python or similar languages",
      "Comfortable with multiple programming languages and automation"
    ]
  },
  {
    id: "learning-1",
    type: "likert",
    question: "When I receive constructive feedback, I use it to improve my performance",
    description: "How do you typically respond to feedback?",
    options: [
      "I often feel defensive and reject feedback",
      "I accept feedback but struggle to implement changes",
      "I usually try to incorporate feedback when possible", 
      "I actively seek and apply feedback for improvement",
      "I eagerly seek feedback and consistently use it for growth"
    ]
  },
  {
    id: "real-world-1",
    type: "multiple-choice",
    question: "Which work environment appeals most to you?",
    options: [
      "Highly structured with clear procedures and routine tasks",
      "Balanced structure with some variety and problem-solving",
      "Dynamic environment with frequent new challenges",
      "Unpredictable environment requiring constant adaptation"
    ]
  }
];