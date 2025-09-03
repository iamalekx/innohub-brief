import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Lightbulb, Users, Cpu } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Innovation Hub
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're a cutting-edge educational institution dedicated to bridging the gap between traditional learning and industry demands. Our mission is to cultivate the next generation of tech innovators through immersive, hands-on experiences that prepare students for real-world challenges. 
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With state-of-the-art facilities, expert mentorship, and strong industry partnerships, we create an environment where creativity meets technology to build tomorrow's solutions.
            </p>
            
            {/* Supporting Icons */}
            <div className="flex space-x-8 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <span className="text-gray-700 font-medium">Innovation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <span className="text-gray-700 font-medium">Collaboration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <span className="text-gray-700 font-medium">Technology</span>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Learn More
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1745847768382-816bfc32e1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU2ODU0MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Innovation and technology collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}