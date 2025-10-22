import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Cindy Tang
          </h1>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center">
            <li><a href="#about" className="text-gray-700 hover:text-purple-600 transition">Home</a></li>
            <li><a href="#skills" className="text-gray-700 hover:text-purple-600 transition">Skills</a></li>
            <li><a href="#education" className="text-gray-700 hover:text-purple-600 transition">Education</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-purple-600 transition">Contact</a></li>
          </ul>

          {/* Social Links */}
          <div className="hidden md:flex gap-4">
            <a href="https://www.linkedin.com/in/cindy-tang-446a35181/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-purple-600 transition">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/cindyt0526" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-purple-600 transition">
              <Github size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <ul className="flex flex-col gap-4 px-6 py-4">
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-700">Home</a></li>
              <li><a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-gray-700">Skills</a></li>
              <li><a href="#education" onClick={() => setMobileMenuOpen(false)} className="text-gray-700">Education</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-700">Contact</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero/About Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hello! My name is Cindy Tang and I am currently studying for my Bachelors of Science in Computer Science
                and a certificate in Management and Information Systems at Temple University. I am very excited to learn
                more about computer science and to collaborate with others in order to further my knowledge in this profession.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Currently I enjoy coding and learning Java and C. I wish to find more experiences in this field and I am very
                open to any opportunities that are laid out for me.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition">
                  Get in Touch
                </a>
                <a href="Resume.pdf" target="_blank" rel="noopener noreferrer" 
                   className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition">
                  View Resume
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur-2xl opacity-30"></div>
                <img 
                  src="/images/Photo3.JPEG" 
                  alt="Cindy Tang" 
                  className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Java', 'C', 'HTML', 'CSS', 'Python', 'Git', 'JavaScript'].map((skill) => (
              <div key={skill} className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl text-center hover:shadow-lg transition transform hover:-translate-y-1">
                <p className="text-xl font-semibold text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <div className="flex items-start gap-6">
              <img 
                src="/images/templeuniversity.jpg_fit=scale&background=000000" 
                alt="Temple University" 
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Temple University</h3>
                <p className="text-gray-600 mb-1">August 2019 - May 2023</p>
                <p className="text-lg font-semibold text-purple-600">B.S. in Computer Science</p>
                <p className="text-gray-600 mt-2">Certificate in Management and Information Systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Let's Connect
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Feel free to reach out for opportunities or collaborations!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="mailto:cindyt0526@gmail.com" 
               className="flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <Mail size={24} />
              <span className="font-semibold">cindyt0526@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/cindy-tang-446a35181/" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <Linkedin size={24} />
              <span className="font-semibold">LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Cindy Tang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}