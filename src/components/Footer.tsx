import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IH</span>
              </div>
              <span className="text-white font-bold text-xl">Innovation Hub</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering the next generation of tech innovators through cutting-edge education and hands-on learning experiences.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Admissions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Student Life</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Career Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-300">123 Innovation Drive, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">info@innovationhub.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Innovation Hub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}