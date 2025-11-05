import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Settings, Moon, Sun } from 'lucide-react';

// Custom hook to detect when elements enter the viewport
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
}

export default function Portfolio() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  // Create scroll animations for each section
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [educationRef, educationVisible] = useScrollAnimation();
  const [skillsRef, skillsVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`transition-colors duration-300 ${
      darkMode ? 'bg-slate-900' : 'bg-white'
    }`}>
      {/* Fixed Header */}
      <header className={`fixed top-0 w-full backdrop-blur-md shadow-sm z-50 transition-colors duration-300 ${
        darkMode ? 'bg-slate-800/80' : 'bg-white/80'
      }`}>
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
            Cindy Tang
          </h1>
          
          {/* Navigation Dots */}
          <div className="flex gap-6 items-center">
            <a href="#about" className={`transition ${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'}`}>About</a>
            <a href="#education" className={`transition ${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'}`}>Education</a>
            <a href="#skills" className={`transition ${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'}`}>Skills</a>
            <a href="#contact" className={`transition ${darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'}`}>Contact</a>
          </div>

          {/* Social & Settings */}
          <div className="flex gap-4 items-center">
            <a href="https://www.linkedin.com/in/cindy-tang-446a35181/" target="_blank" rel="noopener noreferrer" 
               className={`transition ${darkMode ? 'text-gray-400 hover:text-pink-400' : 'text-gray-600 hover:text-pink-600'}`}>
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/cindyt0526" target="_blank" rel="noopener noreferrer"
               className={`transition ${darkMode ? 'text-gray-400 hover:text-pink-400' : 'text-gray-600 hover:text-pink-600'}`}>
              <Github size={20} />
            </a>
            <button 
              onClick={() => setSettingsOpen(!settingsOpen)}
              className={`transition p-2 rounded-lg ${darkMode ? 'text-gray-400 hover:text-pink-400 hover:bg-slate-700' : 'text-gray-600 hover:text-pink-600 hover:bg-gray-100'}`}>
              <Settings size={20} />
            </button>
          </div>
        </nav>

        {/* Settings Popup */}
        {settingsOpen && (
          <div className="absolute right-6 top-20 z-50">
            <div className={`rounded-lg shadow-2xl p-6 w-64 ${
              darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Settings</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {darkMode ? <Moon size={20} className="text-pink-400" /> : <Sun size={20} className="text-yellow-500" />}
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {darkMode ? 'Dark Mode' : 'Light Mode'}
                  </span>
                </div>
                <button
                  onClick={toggleDarkMode}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    darkMode ? 'bg-pink-500' : 'bg-gray-300'
                  }`}
                >
                  <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-0'
                  }`}></div>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* About Me Section - Full Screen */}
      <section 
        id="about" 
        ref={aboutRef}
        className={`min-h-screen flex items-center justify-center px-6 transition-all duration-1000 ${
          darkMode ? 'bg-gradient-to-br from-slate-900 to-slate-800' : 'bg-gradient-to-br from-pink-50 to-white'
        } ${aboutVisible ? 'opacity-100' : 'opacity-100'}`}
      >
        <div className="max-w-6xl mx-auto w-full pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`order-1 transition-all duration-1000 delay-200 ${
              aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className={`text-xl leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Hello! I am Cindy Tang, a Associate Software Engineer at Lockheed Martin with a background in Computer Science and 
                Management Information Systems from Temple University.
              </p>
              <p className={`text-xl leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Currently I work within backend development, improving and maintaining its functionality. As I continue to grow early in my career, 
                I am exploring opportunities that allow me to blend technical problem-solving with creativity. I have developed a strong interest in front-end development 
                and UX/UI design, and I am actively building my portfolio and expanding my skills in these areas.
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-lg hover:shadow-lg transition text-lg font-semibold">
                  Get in Touch
                </a>
                <a href="Resume.pdf" target="_blank" rel="noopener noreferrer" 
                   className={`px-8 py-4 border-2 rounded-lg transition text-lg font-semibold ${
                     darkMode 
                       ? 'border-pink-400 text-pink-400 hover:bg-slate-800' 
                       : 'border-pink-500 text-pink-600 hover:bg-pink-50'
                   }`}>
                  View Resume
                </a>
              </div>
            </div>
            <div className={`order-2 flex justify-center transition-all duration-1000 delay-400 ${
              aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-200 rounded-2xl blur-2xl opacity-30"></div>
                <img 
                  src="/images/Photo3.JPEG" 
                  alt="Cindy Tang" 
                  className="relative w-96 h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - Compact */}
      <section 
        id="education" 
        ref={educationRef}
        className={`py-20 px-6 ${
          darkMode ? 'bg-slate-800' : 'bg-white'
        }`}
      >
        <div className="max-w-3xl mx-auto w-full">
          <h2 className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent transition-all duration-1000 ${
            educationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Education
          </h2>
          <div className={`rounded-3xl shadow-2xl p-8 transition-all duration-1000 delay-200 ${
            darkMode ? 'bg-slate-700' : 'bg-gradient-to-br from-pink-50 to-white'
          } ${
            educationVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img 
                src="/images/templeuniversity.jpg_fit=scale&background=000000" 
                alt="Temple University" 
                className="w-24 h-24 object-cover rounded-xl shadow-lg"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Temple University
                </h3>
                <p className={`text-lg mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  August 2019 - May 2023
                </p>
                <p className="text-xl font-semibold text-pink-600 mb-2">
                  B.S. in Computer Science
                </p>
                <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Certificate in Management and Information Systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Compact */}
      <section 
        id="skills" 
        ref={skillsRef}
        className={`py-20 px-6 ${
          darkMode ? 'bg-gradient-to-br from-slate-900 to-slate-800' : 'bg-gradient-to-br from-pink-50 to-white'
        }`}
      >
        <div className="max-w-4xl mx-auto w-full">
          <h2 className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent transition-all duration-1000 ${
            skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['Java', 'Kubernetes', 'Docker', 'HTML', 'CSS', 'Python', 'Git', 'JavaScript', 'Figma', 'CI/CD'].map((skill, index) => (
              <div 
                key={skill} 
                className={`p-6 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  darkMode 
                    ? 'bg-slate-700 hover:bg-slate-600' 
                    : 'bg-white hover:bg-pink-50'
                } shadow-lg ${
                  skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: skillsVisible ? `${index * 100}ms` : '0ms' 
                }}
              >
                <p className={`text-xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Compact */}
      <section 
        id="contact" 
        ref={contactRef}
        className="py-20 px-6 bg-gradient-to-br from-pink-500 to-pink-300"
      >
        <div className="max-w-3xl mx-auto w-full text-center">
          <h2 className={`text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
            contactVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            Let's Connect
          </h2>
          <p className={`text-xl text-white/90 mb-10 transition-all duration-1000 delay-100 ${
            contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Feel free to reach out for opportunities or collaborations!
          </p>
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-200 ${
            contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a href="mailto:cindyt0526@gmail.com" 
               className="flex items-center gap-3 px-8 py-4 bg-white text-pink-600 rounded-xl hover:shadow-2xl transition transform hover:-translate-y-2 text-lg font-semibold">
              <Mail size={24} />
              <span>cindyt0526@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/cindy-tang-446a35181/" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 px-8 py-4 bg-white text-pink-600 rounded-xl hover:shadow-2xl transition transform hover:-translate-y-2 text-lg font-semibold">
              <Linkedin size={24} />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* Click outside to close settings */}
      {settingsOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setSettingsOpen(false)}
        ></div>
      )}
    </div>
  );
}