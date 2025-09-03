import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote, Target, Eye, Award, Users, Zap } from "lucide-react";

const facilities = [
  {
    title: "AI & Machine Learning Lab",
    description: "High-performance computing clusters for deep learning research",
    image: "https://images.unsplash.com/photo-1731834453355-df041245e7d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjB0ZWNobm9sb2d5JTIwbGFifGVufDF8fHx8MTc1Njg1NDE4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Collaborative Workspaces",
    description: "Modern co-working areas designed for team projects",
    image: "https://images.unsplash.com/photo-1702047135360-e549c2e1f7df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTY3OTE3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Innovation Studios",
    description: "Creative spaces equipped with the latest prototyping tools",
    image: "https://images.unsplash.com/photo-1695066964145-245927509533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGhhY2thdGhvbiUyMHdvcmtzaG9wfGVufDF8fHx8MTc1Njg1NDE4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const studentLife = [
  {
    title: "Global Hackathons",
    description: "Compete with teams worldwide and showcase your innovation",
    image: "https://images.unsplash.com/photo-1695066964145-245927509533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGhhY2thdGhvbiUyMHdvcmtzaG9wfGVufDF8fHx8MTc1Njg1NDE4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Tech Meetups",
    description: "Network with industry professionals and fellow students",
    image: "https://images.unsplash.com/photo-1702047135360-e549c2e1f7df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTY3OTE3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Workshops & Seminars",
    description: "Learn from industry experts and thought leaders",
    image: "https://images.unsplash.com/photo-1731834453355-df041245e7d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjB0ZWNobm9sb2d5JTIwbGFifGVufDF8fHx8MTc1Njg1NDE4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Startup Incubator",
    description: "Turn your ideas into viable businesses with our support",
    image: "https://images.unsplash.com/photo-1745847768382-816bfc32e1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU2ODU0MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    program: "AI & Machine Learning",
    quote: "Innovation Hub didn't just teach me how to code - it taught me how to think like an innovator. The hands-on projects and industry mentorship prepared me for my dream job at a tech unicorn.",
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez",
    program: "Cybersecurity",
    quote: "The practical approach here is unmatched. I went from zero cybersecurity knowledge to landing a role at a Fortune 500 company in just 18 months.",
    avatar: "MR"
  },
  {
    name: "Emily Zhang",
    program: "Data Science",
    quote: "The collaborative environment and real-world projects gave me the confidence to pursue entrepreneurship. I'm now running my own AI startup!",
    avatar: "EZ"
  }
];

export function AboutPage() {
  return (
    <div className="pt-24">
      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To bridge the gap between academic learning and industry demands by providing cutting-edge technology education that prepares students for the rapidly evolving digital landscape. We create innovators, not just graduates.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the world's leading innovation hub where technology meets creativity, fostering the next generation of tech leaders who will shape the future of our digital world.
                </p>
              </div>

              <div className="mt-8 flex space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Success Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-600">Industry Partners</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1745847768382-816bfc32e1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU2ODU0MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Innovation and collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              World-Class Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art facilities provide the perfect environment for learning, innovation, and collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Vibrant Student Life
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond the classroom, we foster a community of learners, innovators, and future leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {studentLife.map((activity, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.program}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Your Future Starts Here – Be Part of Innovation Hub
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join a community of innovators and transform your passion for technology into a successful career.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-gray-900 px-8 py-4 text-lg font-semibold">
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
}