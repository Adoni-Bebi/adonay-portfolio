import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ArrowUpRight, Github, Mail, MapPin, BookOpen } from 'lucide-react';

export default function HomePage() {
  const { profile, skills, projects, experience, education, leadership } = PORTFOLIO_DATA;

  return (
    <div className="flex-1 flex flex-col">
      {/* Top Banner for Unconfirmed Elements */}
      <div className="bg-amber-950/40 border-b border-amber-800/40 px-4 py-2 text-xs text-amber-300 text-center font-mono">
        Draft Review Build · Verified CGPA (3.47/4.0) & MinT GitHub repository linked · Graduation year pending confirmation
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0D12]/80 border-b border-neutral-800/80">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-mono text-sm font-semibold tracking-wider text-neutral-200 hover:text-amber-400 transition-colors">
            AAB.<span className="text-amber-500">dev</span>
          </a>
          <nav className="hidden md:flex items-center space-x-7 text-xs font-mono uppercase tracking-wider text-neutral-400">
            <a href="#projects" className="hover:text-neutral-100 transition-colors">Projects</a>
            <a href="#about" className="hover:text-neutral-100 transition-colors">About</a>
            <a href="#experience" className="hover:text-neutral-100 transition-colors">Experience</a>
            <a href="#leadership" className="hover:text-neutral-100 transition-colors">Leadership</a>
            <a href="#contact" className="hover:text-neutral-100 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center space-x-3">
            {profile.resumeAvailable ? (
              <a
                href={profile.resumeUrl}
                download
                className="px-3.5 py-1.5 text-xs font-mono rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 transition-all"
              >
                Résumé (PDF)
              </a>
            ) : (
              <span className="px-3 py-1 text-xs font-mono rounded bg-neutral-900/60 text-neutral-500 border border-neutral-800 cursor-not-allowed" title="Attach résumé PDF to activate">
                Résumé on Request
              </span>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-28">
        {/* HERO SECTION */}
        <section className="space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-neutral-900 border border-neutral-800 text-amber-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Seeking Engineering Roles & AI Collaborations
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            {profile.fullName}
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-300 font-medium max-w-2xl leading-relaxed">
            {profile.headline}
          </p>

          <p className="text-neutral-400 max-w-2xl leading-relaxed">
            {profile.bio[0]} {profile.bio[1]}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 pt-2">
            <span className="flex items-center gap-1.5 bg-neutral-900/90 px-3 py-1.5 rounded border border-neutral-800">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {profile.location}
            </span>
            <span className="flex items-center gap-1.5 bg-neutral-900/90 px-3 py-1.5 rounded border border-neutral-800">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              ASTU · CGPA: 3.47 / 4.0
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded bg-amber-500 hover:bg-amber-400 text-neutral-950 font-medium text-sm transition-all shadow-lg shadow-amber-500/10"
            >
              View Selected Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 text-sm transition-all"
            >
              Get in Touch
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 hover:text-white transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* SELECTED PROJECTS SECTION */}
        <section id="projects" className="space-y-10 scroll-mt-24">
          <div className="border-b border-neutral-800 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-amber-400">Evidence & Code</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Selected Projects</h2>
            </div>
            <p className="text-xs text-neutral-400 font-mono">
              Verified repositories & active prototypes
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="bg-[#12141C] border border-neutral-800/80 rounded-xl p-6 sm:p-8 space-y-6 hover:border-neutral-700 transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-neutral-800 text-amber-400 border border-neutral-700">
                        {project.category}
                      </span>
                      {project.isCollaborative && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-800/50">
                          Team Project (MinT)
                        </span>
                      )}
                      {project.isVerificationPending && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-neutral-700">
                          Local R&D Lab
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors pt-1">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 pt-1 sm:pt-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono bg-neutral-900 hover:bg-neutral-800 text-neutral-300 px-3 py-1.5 rounded border border-neutral-700 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 px-3 py-1.5 rounded border border-amber-500/30 transition-colors"
                      >
                        Live Demo
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed font-medium">
                  {project.tagline}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs bg-neutral-900/60 p-4 rounded-lg border border-neutral-800/60">
                  <div className="space-y-1">
                    <span className="font-mono text-neutral-400 uppercase tracking-wider text-[11px]">The Problem & Scope:</span>
                    <p className="text-neutral-300 leading-normal">{project.problem}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-neutral-400 uppercase tracking-wider text-[11px]">What I Implemented:</span>
                    <p className="text-neutral-300 leading-normal">{project.myRole}</p>
                  </div>
                </div>

                {project.keyChallenge && (
                  <div className="text-xs text-neutral-400 border-l-2 border-amber-500/60 pl-3 py-0.5">
                    <span className="font-mono text-neutral-300 font-semibold">Technical Decision: </span>
                    {project.keyChallenge}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-900 text-neutral-300 border border-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT & TECHNICAL SKILLS */}
        <section id="about" className="space-y-10 scroll-mt-24">
          <div className="border-b border-neutral-800 pb-4">
            <p className="text-xs font-mono uppercase tracking-widest text-amber-400">Background</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">About & Technical Toolkit</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-4 text-neutral-300 leading-relaxed text-sm">
              <p>
                I am a final-year Computer Science and Engineering student at Adama Science and Technology University (ASTU) with an achieved cumulative GPA of 3.47/4.0. My background bridges hands-on full-stack development with a growing focus on applied Artificial Intelligence.
              </p>
              <p>
                During my internships at the Ministry of Innovation and Technology (MinT) and the Commercial Bank of Ethiopia (CBE), I experienced how software impacts citizens and institutions. I believe modern software in emerging economies should be dependable, performant, and built to solve practical workflow bottlenecks.
              </p>
              <p>
                I am actively deepening my grasp of Large Language Model APIs (Gemini API, AI SDK) and exploring vector-based retrieval fundamentals (RAG) to build intuitive, context-grounded assistants.
              </p>
            </div>

            <div className="bg-[#12141C] border border-neutral-800 p-6 rounded-xl space-y-5 text-xs font-mono">
              <h4 className="text-neutral-200 font-semibold uppercase tracking-wider text-xs border-b border-neutral-800 pb-2">
                Spoken Languages
              </h4>
              <div className="space-y-2">
                {skills.spokenLanguages.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center text-neutral-300">
                    <span>{lang.name}</span>
                    <span className="text-amber-400/90">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-neutral-500 pt-2 border-t border-neutral-800/80">
                Verified from curriculum & institutional records.
              </p>
            </div>
          </div>

          {/* Grouped Skills Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            <div className="bg-[#12141C] p-5 rounded-lg border border-neutral-800 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">Languages</h4>
              <ul className="space-y-1.5 text-xs text-neutral-300">
                {skills.languages.map((s) => (
                  <li key={s} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#12141C] p-5 rounded-lg border border-neutral-800 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">Frontend</h4>
              <ul className="space-y-1.5 text-xs text-neutral-300">
                {skills.frontend.map((s) => (
                  <li key={s} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#12141C] p-5 rounded-lg border border-neutral-800 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">Backend & Data</h4>
              <ul className="space-y-1.5 text-xs text-neutral-300">
                {skills.backend.concat(skills.databases).map((s) => (
                  <li key={s} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#12141C] p-5 rounded-lg border border-neutral-800 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">AI & Deployment</h4>
              <ul className="space-y-1.5 text-xs text-neutral-300">
                {skills.aiAndTools.map((s) => (
                  <li key={s} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section id="experience" className="space-y-10 scroll-mt-24">
          <div className="border-b border-neutral-800 pb-4">
            <p className="text-xs font-mono uppercase tracking-widest text-amber-400">Track Record</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Experience & Education</h2>
          </div>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-[#12141C] border border-neutral-800/80 p-6 rounded-xl space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <span className="text-xs font-mono text-neutral-400">{exp.period}</span>
                </div>
                <div className="text-xs font-mono text-amber-400/90">{exp.company} · {exp.location}</div>
                <p className="text-xs text-neutral-300 leading-relaxed pt-1">{exp.summary}</p>
                <ul className="space-y-1.5 text-xs text-neutral-400 pt-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Education Card */}
            <div className="bg-[#12141C] border border-neutral-800/80 p-6 rounded-xl space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-lg font-bold text-white">{education.degree}</h3>
                <span className="text-xs font-mono text-amber-400">{education.status}</span>
              </div>
              <div className="text-xs font-mono text-neutral-300">{education.institution} · {education.location}</div>
              <div className="text-xs font-mono text-neutral-400 bg-neutral-900/80 inline-block px-2.5 py-1 rounded border border-neutral-800">
                Verified Cumulative GPA: <strong className="text-white">{education.cgpa}</strong>
              </div>
              <p className="text-xs text-neutral-400 pt-1">
                Coursework: {education.relevantCoursework.join(", ")}.
              </p>
            </div>
          </div>
        </section>

        {/* LEADERSHIP & COMMUNITY */}
        <section id="leadership" className="space-y-8 scroll-mt-24">
          <div className="border-b border-neutral-800 pb-4">
            <p className="text-xs font-mono uppercase tracking-widest text-amber-400">Initiative</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Leadership & Conflict Resolution</h2>
          </div>

          {leadership.map((item, idx) => (
            <div key={idx} className="bg-[#12141C] border border-neutral-800/80 p-6 rounded-xl space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                {item.credential && (
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    Wollo University Certified
                  </span>
                )}
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">{item.description}</p>
              <div className="text-xs text-neutral-400 bg-neutral-900/60 p-3 rounded border border-neutral-800/80">
                <strong className="text-neutral-300 font-mono">Engineering Parallel: </strong>
                {item.impact}
              </div>
            </div>
          ))}
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="space-y-8 scroll-mt-24 border-t border-neutral-800 pt-12">
          <div className="max-w-xl space-y-2">
            <p className="text-xs font-mono uppercase tracking-widest text-amber-400">Direct Inquiries</p>
            <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
            <p className="text-sm text-neutral-400">
              I am open to software engineering internships, junior developer positions, research collaborations, and scholarship discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 p-5 rounded-xl bg-[#12141C] border border-neutral-800 hover:border-amber-500/50 transition-all group"
            >
              <div className="p-3 rounded-lg bg-neutral-900 text-amber-400 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-neutral-400">Email Address</p>
                <p className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {profile.email}
                </p>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-[#12141C] border border-neutral-800 hover:border-amber-500/50 transition-all group"
            >
              <div className="p-3 rounded-lg bg-neutral-900 text-amber-400 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-neutral-400">GitHub Profile</p>
                <p className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                  github.com/Adoni-Bebi
                </p>
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800/80 py-8 bg-[#090A0E] text-xs font-mono text-neutral-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 {profile.fullName}. Built with Next.js, TypeScript & Tailwind CSS.</p>
          <p className="text-neutral-600">Addis Ababa, Ethiopia</p>
        </div>
      </footer>
    </div>
  );
}
