import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full">
                  <div className="grid grid-cols-8 gap-4 h-full">
                      {Array.from({ length: 32 }).map((_, i) => (
                          <div
                              key={i}
                              className="bg-white/20 rounded-lg animate-pulse"
                              style={{ animationDelay: `${i * 0.1}s` }}
                          ></div>
                      ))}
                  </div>
              </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Start Your Tech Journey?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Join hundreds of students who have transformed their careers
                  through our innovative programs. Your future in tech starts
                  here.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                      size="lg"
                      className="bg-secondary hover:bg-secondary/90 text-gray-900 px-8 py-4 text-lg font-semibold group"
                  >
                      Apply Today
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-gray-900 hover:bg-white hover:text-primary px-8 py-4 text-lg"
                  >
                      Schedule a Tour
                  </Button>
              </div>

              <div className="mt-8 text-blue-100">
                  <p className="text-sm">
                      Applications for Spring 2025 are now open • Limited spots
                      available
                  </p>
              </div>
          </div>
      </section>
  );
}