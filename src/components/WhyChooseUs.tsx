import { GraduationCap, Users, Laptop, Award } from "lucide-react";

const highlights = [
  {
    id: 1,
    title: "Industry-Aligned Curriculum",
    description: "Our programs are designed with input from leading tech companies to ensure you learn the most relevant skills.",
    icon: GraduationCap,
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Expert Mentors",
    description: "Learn from seasoned professionals with years of industry experience who are passionate about teaching.",
    icon: Users,
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "Hands-On Labs",
    description: "Access state-of-the-art facilities and equipment to get practical experience with the latest technology.",
    icon: Laptop,
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "Career Success",
    description: "95% of our graduates secure employment within 6 months of completing their programs.",
    icon: Award,
    color: "bg-orange-500"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Innovation Hub?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide everything you need to succeed in the fast-evolving tech industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight) => {
            const IconComponent = highlight.icon;
            return (
              <div key={highlight.id} className="text-center group">
                <div className={`w-20 h-20 ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-primary rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Graduates</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Job Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Industry Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-blue-100">Student Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}