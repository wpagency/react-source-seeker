
import { 
  TrendingUp,
  Users,
  Clock,
  Target,
  Award
} from "lucide-react";

export const transformationCards = [
  {
    id: "before-after-1",
    title: "E-commerce Transformation",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold text-red-400 mb-2">Before</h4>
            <ul className="text-sm text-white/70 space-y-1">
              <li>• Slow loading times</li>
              <li>• High cart abandonment</li>
              <li>• Poor mobile experience</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-green-400 mb-2">After</h4>
            <ul className="text-sm text-white/70 space-y-1">
              <li>• 0.8s load time</li>
              <li>• 60% less abandonment</li>
              <li>• Mobile-first design</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">300% Sales Increase</div>
        </div>
      </div>
    )
  },
  {
    id: "client-journey-1",
    title: "Startup Growth Journey",
    content: (
      <div className="space-y-4">
        <div className="text-center mb-4">
          <div className="text-lg font-bold text-white">6-Month Transformation</div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-white/70">Month 1-2:</span>
            <span className="text-blue-400">Discovery & Design</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/70">Month 3-4:</span>
            <span className="text-purple-400">Development</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/70">Month 5-6:</span>
            <span className="text-green-400">Launch & Scale</span>
          </div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-white">$0 → $1M ARR</div>
        </div>
      </div>
    )
  },
  {
    id: "impact-metrics-1",
    title: "Real Impact Metrics",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">2000%</div>
          <div className="text-xs text-white/60">User Growth</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">850%</div>
          <div className="text-xs text-white/60">Revenue</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">99.9%</div>
          <div className="text-xs text-white/60">Uptime</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-pink-400">4.9/5</div>
          <div className="text-xs text-white/60">Rating</div>
        </div>
      </div>
    )
  }
];

export const timelineProjects = [
  {
    id: "ecommerce-revolution",
    title: "E-commerce Revolution",
    year: "2024",
    category: "E-commerce",
    description: "Complete transformation of a traditional retail business into a modern, AI-powered e-commerce platform that increased sales by 300%.",
    challenge: "Legacy systems, poor user experience, and declining sales in a competitive market.",
    solution: "Built a modern React/Node.js platform with AI recommendations, real-time inventory, and personalized shopping experiences.",
    results: "300% sales increase, 85% improvement in user engagement, and 60% reduction in cart abandonment.",
    image: "/placeholder.svg",
    video: "demo-video.mp4",
    metrics: [
      { label: "Sales Growth", value: "300%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "User Engagement", value: "+85%", icon: <Users className="w-4 h-4" /> },
      { label: "Page Speed", value: "0.8s", icon: <Clock className="w-4 h-4" /> }
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Stripe", "AI/ML"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Platform",
    year: "2023",
    category: "SaaS",
    description: "Revolutionary analytics dashboard that helps businesses make data-driven decisions with real-time insights.",
    challenge: "Complex data visualization needs and real-time processing of millions of data points.",
    solution: "Created a sophisticated dashboard using D3.js and WebSockets for real-time data visualization.",
    results: "Used by 50,000+ businesses worldwide, processing 100M+ data points daily.",
    image: "/placeholder.svg",
    metrics: [
      { label: "Active Users", value: "50K+", icon: <Users className="w-4 h-4" /> },
      { label: "Data Points", value: "100M+", icon: <Target className="w-4 h-4" /> },
      { label: "Uptime", value: "99.9%", icon: <Clock className="w-4 h-4" /> }
    ],
    technologies: ["Vue.js", "D3.js", "Python", "Django", "PostgreSQL", "WebSockets"],
    liveUrl: "https://example.com"
  },
  {
    id: "healthcare-platform",
    title: "Healthcare Management System",
    year: "2023",
    category: "Healthcare",
    description: "Comprehensive patient management system that streamlined operations for a network of medical clinics.",
    challenge: "Fragmented patient data, inefficient scheduling, and compliance requirements.",
    solution: "Developed a HIPAA-compliant platform with integrated EHR, scheduling, and billing systems.",
    results: "200% improvement in operational efficiency and 95% patient satisfaction rate.",
    image: "/placeholder.svg",
    metrics: [
      { label: "Efficiency", value: "+200%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Patient Satisfaction", value: "95%", icon: <Users className="w-4 h-4" /> },
      { label: "Compliance", value: "100%", icon: <Award className="w-4 h-4" /> }
    ],
    technologies: ["React", "Express", "PostgreSQL", "FHIR", "AWS", "Docker"],
    liveUrl: "https://example.com"
  }
];


