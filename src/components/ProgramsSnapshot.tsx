import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Code, Brain, Smartphone, Database, Shield } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Software Development",
    description: "Master modern programming languages and frameworks",
    icon: Code,
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    description: "Explore machine learning and neural networks",
    icon: Brain,
    color: "bg-purple-500"
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Build native and cross-platform mobile applications",
    icon: Smartphone,
    color: "bg-green-500"
  },
  {
    id: 4,
    title: "Data Science",
    description: "Analyze and visualize complex data sets",
    icon: Database,
    color: "bg-orange-500"
  },
  {
    id: 5,
    title: "Cybersecurity",
    description: "Protect systems and networks from digital threats",
    icon: Shield,
    color: "bg-red-500"
  }
];

export function ProgramsSnapshot() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of technology programs designed to prepare you for the future of work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <Card key={program.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${program.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
}