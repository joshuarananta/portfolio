import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import leafCluster from "./assets/leaves.png"

function App() {
  // Card style for project and experience cards
  const cardStyle =
    "bg-gradient-to-br from-[#103129] to-[#0B211C] border border-emerald-900/50 rounded-2xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.22)] ring-1 ring-inset ring-emerald-200/5 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.28)] hover:border-emerald-700/60 transition-all duration-300"

  // Tag style for project labels
  const tagStyle =
    "border border-emerald-300/20 bg-gradient-to-b from-emerald-300/10 to-emerald-300/5 rounded-full px-3 py-1 text-sm text-emerald-100 shadow-[0_4px_12px_rgba(0,0,0,0.18)]"

  // Skill style for skill labels
  const skillStyle =
    "border border-emerald-300/20 bg-gradient-to-b from-emerald-300/10 to-emerald-300/5 rounded-full px-4 py-2 text-emerald-100 shadow-[0_4px_12px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 transition-all duration-300"

  return (
    <main className="min-h-screen bg-[#061411] text-emerald-50">
      {/* Navigation bar */}
      <nav className="fixed top-0 left-0 w-full border-b border-emerald-300/10 bg-[#061411]/80 backdrop-blur z-50">
        <div className="w-full px-10 lg:px-20 py-5 flex justify-between items-center">
          <a href="#" className="font-bold text-emerald-200 text-lg">
            JT
          </a>

          <div className="hidden md:flex gap-10 text-base text-emerald-100/70">
            <a href="#about" className="hover:text-emerald-200">
              About
            </a>
            <a href="#projects" className="hover:text-emerald-200">
              Projects
            </a>
            <a href="#experience" className="hover:text-emerald-200">
              Experience
            </a>
            <a href="#skills" className="hover:text-emerald-200">
              Skills
            </a>
            <a href="#contact" className="hover:text-emerald-200">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <section className="hero-section min-h-screen flex flex-col justify-center px-10 lg:px-20 pt-24 relative overflow-hidden">
        <div className="absolute top-24 right-10 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-60 w-[420px] h-[420px] bg-orange-400/10 rounded-full blur-3xl"></div>

        {/* Leaf image */}
        <img
          src={leafCluster}
          alt="Tropical leaves"
          className="leaf-cluster hidden lg:block absolute right-[-260px] xl:right-[-500px] top-[80%] w-[1000px] xl:w-[1300px] opacity-95 select-none z-0"
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl">
          <p className="text-emerald-300 mb-5 text-lg">Sydney, Australia</p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight">
            Joshua Tarigan
          </h1>

          <p className="text-xl md:text-3xl text-emerald-50/80 max-w-5xl mb-10 leading-snug">
            Computer Science graduate passionate about software development,
            backend systems, and building practical solutions that solve real
            problems.
          </p>

          <div className="flex gap-5 flex-wrap">
            <a
              href="#projects"
              className="bg-emerald-300 text-[#061411] px-8 py-4 rounded-full font-medium hover:bg-emerald-200"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-emerald-300/30 px-8 py-4 rounded-full font-medium hover:bg-emerald-300/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About section */}
      <section
        id="about"
        className="px-10 lg:px-20 py-24 border-t border-emerald-300/10"
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-emerald-50/60 text-lg leading-8 max-w-5xl">
          I am a Computer Science graduate based in Sydney with a strong interest
          in software development, backend systems, and AI-assisted applications.
          I enjoy building practical solutions, learning new technologies, and
          working on projects that have real-world impact.
        </p>
      </section>

      {/* Projects section */}
      <section
        id="projects"
        className="px-10 lg:px-20 py-24 border-t border-emerald-300/10"
      >
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <article className={cardStyle}>
            <h3 className="text-2xl font-bold mb-3 text-emerald-100">
              Carelogix NDIS Incident Classification System
            </h3>

            <p className="text-emerald-50/60 leading-7 mb-4">
              Developed an AI-powered backend system that helps classify NDIS
              incidents as reportable or non-reportable using rule-based
              workflows and validation logic.
            </p>

            <div className="flex gap-2 flex-wrap">
              <span className={tagStyle}>AI</span>
              <span className={tagStyle}>Backend</span>
              <span className={tagStyle}>Python</span>
              <span className={tagStyle}>Agile</span>
            </div>
          </article>

          <article className={cardStyle}>
            <h3 className="text-2xl font-bold mb-3 text-emerald-100">
              Portfolio Website
            </h3>

            <p className="text-emerald-50/60 leading-7 mb-4">
              Built a personal portfolio website using React and Vite to
              showcase my projects, skills, experience, and contact details.
            </p>

            <div className="flex gap-2 flex-wrap">
              <span className={tagStyle}>React</span>
              <span className={tagStyle}>Vite</span>
              <span className={tagStyle}>Tailwind CSS</span>
            </div>
          </article>
        </div>
      </section>

      {/* Experience section */}
      <section
        id="experience"
        className="px-10 lg:px-20 py-24 border-t border-emerald-300/10"
      >
        <h2 className="text-4xl font-bold mb-10">Experience</h2>

        <div className="grid gap-6">
          <article className={cardStyle}>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-emerald-100">
                  Coding Coach
                </h3>
                <p className="text-emerald-300">
                  Skill Samurai — Castle Hill, Carlingford, Eastwood
                </p>
              </div>

              <p className="text-emerald-50/50">2023 – Present</p>
            </div>

            <ul className="space-y-3 text-emerald-50/60 leading-7">
              <li>
                • Taught Python, Java, Lua, game development, and programming
                fundamentals.
              </li>
              <li>
                • Guided students through debugging, project development, and
                computational thinking.
              </li>
              <li>
                • Delivered structured lessons to help students build coding
                confidence and technical skills.
              </li>
              <li>
                • Recognised as Coach of the Month in September 2024 and
                supported centre operations.
              </li>
            </ul>
          </article>

          <article className={cardStyle}>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-emerald-100">
                  Backend Developer
                </h3>
                <p className="text-emerald-300">
                  Carelogix Professional Experience Program / WSU Capstone
                </p>
              </div>

              <p className="text-emerald-50/50">2025</p>
            </div>

            <ul className="space-y-3 text-emerald-50/60 leading-7">
              <li>
                • Delivered an AI-powered system for classifying NDIS incidents
                under compliance rules.
              </li>
              <li>
                • Built backend services using Python and REST-style
                architecture.
              </li>
              <li>
                • Worked with industry stakeholders through Agile sprint cycles
                to refine requirements.
              </li>
              <li>
                • Collaborated across AWS, AI modelling, and frontend teams in a
                cross-functional environment.
              </li>
            </ul>
          </article>

          <article className={cardStyle}>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-emerald-100">
                  Youth Leader
                </h3>
                <p className="text-emerald-300">Hillsong Fuel Youth Ministry</p>
              </div>

              <p className="text-emerald-50/50">2025 – Present</p>
            </div>

            <ul className="space-y-3 text-emerald-50/60 leading-7">
              <li>• Led weekly programs, small groups, and youth activities.</li>
              <li>
                • Supported student wellbeing through mentoring and pastoral
                care.
              </li>
              <li>• Assisted with event coordination and team communication.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Skills section */}
      <section
        id="skills"
        className="px-10 lg:px-20 py-24 border-t border-emerald-300/10"
      >
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Python",
            "Java",
            "SQL",
            "C#",
            "React",
            "Git",
            "GitHub",
            "Linux",
            "AWS Fundamentals",
            "Backend Development",
            "REST APIs",
            "Agile",
          ].map((skill) => (
            <span key={skill} className={skillStyle}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact section */}
      <section
        id="contact"
        className="px-10 lg:px-20 py-24 border-t border-emerald-300/10"
      >
        <h2 className="text-4xl font-bold mb-6">Let’s connect.</h2>

        <p className="text-emerald-50/60 text-lg mb-8 max-w-5xl">
          I’m currently open to graduate and junior software or IT opportunities
          in Sydney and across Australia.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="mailto:joshuarananta@gmail.com"
            className="border border-emerald-300/30 px-8 py-4 rounded-full font-medium hover:bg-emerald-300/10 flex items-center gap-3 text-emerald-50"
          >
            <MdEmail className="text-xl text-emerald-50" />
            <span>Email Me</span>
          </a>

          <a
            href="https://www.linkedin.com/in/joshua-tarigan/"
            target="_blank"
            rel="noreferrer"
            className="border border-emerald-300/30 px-8 py-4 rounded-full font-medium hover:bg-emerald-300/10 flex items-center gap-3"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/joshuarananta"
            target="_blank"
            rel="noreferrer"
            className="border border-emerald-300/30 px-8 py-4 rounded-full font-medium hover:bg-emerald-300/10 flex items-center gap-3"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
        </div>
      </section>
    </main>
  )
}

export default App