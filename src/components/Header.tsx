import { Button } from "./ui/button";

export function Header() {
  return (
      <header className="absolute top-0 left-0 right-0 z-20 py-6 px-4">
          <nav className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">IH</span>
                  </div>
                  <span className="text-white font-bold text-xl">
                      Innovation Hub
                  </span>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                  <a
                      href="#"
                      className="text-white hover:text-gray-300 transition-colors"
                  >
                      Programs
                  </a>
                  <a
                      href="#"
                      className="text-white hover:text-gray-300 transition-colors"
                  >
                      About
                  </a>
                  <a
                      href="#"
                      className="text-white hover:text-gray-300 transition-colors"
                  >
                      Admissions
                  </a>
                  <a
                      href="#"
                      className="text-white hover:text-gray-300 transition-colors"
                  >
                      Contact
                  </a>
              </div>

              {/* CTA Button */}
              <Button
                  variant="outline"
                  className="border-white text-gray-900 hover:bg-white hover:text-primary"
              >
                  Apply Now
              </Button>
          </nav>
      </header>
  );
}