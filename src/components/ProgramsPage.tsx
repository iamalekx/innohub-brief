import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Code, Brain, Smartphone, Database, Shield, Globe, Palette, Cpu, Users, Briefcase, Award } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Software Development",
    description: "Master full-stack development with modern frameworks like React, Node.js, and Python. Build real-world applications and deploy them to the cloud.",
    duration: "12 months",
    level: "Beginner to Advanced",
    icon: Code,
    color: "bg-blue-500",
    highlights: ["Full-stack JavaScript", "Cloud deployment", "Agile methodology", "Portfolio projects"]
  },
  {
    id: 2,
    title: "Artificial Intelligence & Machine Learning",
    description: "Dive deep into AI algorithms, neural networks, and machine learning models. Work with TensorFlow, PyTorch, and real datasets.",
    duration: "15 months",
    level: "Intermediate to Advanced",
    icon: Brain,
    color: "bg-purple-500",
    highlights: ["Deep learning", "Computer vision", "NLP", "MLOps"]
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Create native iOS and Android apps using Swift, Kotlin, and React Native. Publish to app stores and monetize your creations.",
    duration: "10 months",
    level: "Beginner to Intermediate",
    icon: Smartphone,
    color: "bg-green-500",
    highlights: ["iOS & Android", "React Native", "App Store optimization", "Monetization strategies"]
  },
  {
    id: 4,
    title: "Data Science & Analytics",
    description: "Transform raw data into actionable insights using Python, R, and advanced visualization tools. Master statistical analysis and predictive modeling.",
    duration: "14 months",
    level: "Intermediate",
    icon: Database,
    color: "bg-orange-500",
    highlights: ["Python & R", "Statistical modeling", "Data visualization", "Big data tools"]
  },
  {
    id: 5,
    title: "Cybersecurity",
    description: "Protect digital assets and networks from cyber threats. Learn ethical hacking, security protocols, and incident response.",
    duration: "13 months",
    level: "Intermediate to Advanced",
    icon: Shield,
    color: "bg-red-500",
    highlights: ["Ethical hacking", "Network security", "Compliance", "Incident response"]
  },
  {
    id: 6,
    title: "Web Design & UX/UI",
    description: "Design beautiful, user-friendly interfaces and experiences. Master Figma, Adobe Creative Suite, and front-end development.",
    duration: "11 months",
    level: "Beginner to Intermediate",
    icon: Palette,
    color: "bg-pink-500",
    highlights: ["User research", "Prototyping", "Design systems", "Front-end coding"]
  },
  {
    id: 7,
    title: "Cloud Computing & DevOps",
    description: "Master cloud platforms like AWS, Azure, and GCP. Learn containerization, CI/CD, and infrastructure as code.",
    duration: "12 months",
    level: "Intermediate to Advanced",
    icon: Globe,
    color: "bg-cyan-500",
    highlights: ["AWS/Azure/GCP", "Docker & Kubernetes", "CI/CD pipelines", "Infrastructure automation"]
  },
  {
    id: 8,
    title: "IoT & Embedded Systems",
    description: "Build connected devices and smart systems. Work with Arduino, Raspberry Pi, and industrial IoT platforms.",
    duration: "16 months",
    level: "Advanced",
    icon: Cpu,
    color: "bg-indigo-500",
    highlights: ["Hardware programming", "Sensor integration", "Wireless protocols", "Edge computing"]
  }
];

const careerSupport = [
  {
    title: "Career Coaching",
    description: "One-on-one sessions with industry professionals",
    icon: Users
  },
  {
    title: "Internship Program",
    description: "Guaranteed internships with our partner companies",
    icon: Briefcase
  },
  {
    title: "Job Placement",
    description: "95% job placement rate within 6 months",
    icon: Award
  }
];

export function ProgramsPage() {
  return (
    <div className="pt-24">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            From Coding to AI – Build the Future with Us
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose from our comprehensive range of cutting-edge programs designed to transform you into a tech industry leader.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each program is carefully crafted with industry input to ensure you learn the most in-demand skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {programs.map((program) => {
              const IconComponent = program.icon;
              return (
                <Card key={program.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className={`w-16 h-16 ${program.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {program.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                      {program.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-500 mb-2">
                        <span>Duration: {program.duration}</span>
                        <span>{program.level}</span>
                      </div>
                      
                      <div className="space-y-1">
                        {program.highlights.map((highlight, index) => (
                          <div key={index} className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full inline-block mr-1 mb-1">
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Support Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Career Support & Mentorship
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just teach you skills – we help you launch your career with comprehensive support and guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {careerSupport.map((support, index) => {
              const IconComponent = support.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {support.title}
                  </h3>
                  <p className="text-gray-600">
                    {support.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Career Stats */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-gray-600">Job Placement Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">$75k</div>
                <div className="text-gray-600">Average Starting Salary</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">6 mo</div>
                <div className="text-gray-600">Average Time to Employment</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Hiring Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have successfully transitioned into rewarding tech careers. Your journey starts with a single click.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-gray-900 px-12 py-4 text-xl font-semibold">
            Apply Now
          </Button>
          
          <div className="mt-8 text-blue-100">
            <p className="text-sm">
              Application deadline: March 15, 2025 • Financial aid available • No coding experience required for most programs
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}