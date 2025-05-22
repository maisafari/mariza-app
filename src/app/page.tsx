"use client";

import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow p-4 flex justify-center space-x-8 z-10">
        {["about", "resume", "blog", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="hover:text-indigo-700 cursor-pointer uppercase font-semibold"
          >
            {id}
          </a>
        ))}
      </nav>

      <main className="pt-20 max-w-5xl mx-auto px-8 space-y-24 scroll-smooth">
        {/* About Me */}
      <section
        id="about"
        className="min-h-screen grid grid-cols-1 md:grid-cols-[3fr_2fr] items-center gap-12 py-12 px-4"
      >
        <article className="max-w-xl mx-auto md:mx-0">
          <h1 className="text-3xl font-bold mb-4">Hi, I’m Mariza</h1>
          <p className="text-base leading-relaxed ">
            I'm a <strong>Software Developer</strong> with <strong>4 years of experience</strong> in 
            <strong> QA automation</strong>, <strong>backend development</strong>, and <strong>cloud systems</strong>. 
            I specialize in <strong>API testing</strong>, <strong>CI/CD pipelines</strong>, and 
            <strong>full-stack development</strong> using <strong>Java</strong>, <strong>Python</strong>, and <strong>JavaScript</strong>.
          </p>
          <p className="text-base leading-relaxed mt-4">
            I've worked across industries including <strong>finance</strong>, <strong>telecommunications</strong>, and 
            <strong>utilities</strong>, consistently delivering high-quality solutions in <strong>Agile environments</strong>. 
            I’m passionate about <strong>mentorship</strong>, clean code, and continuous learning.
          </p>
          <p className="text-base leading-relaxed text-gray-600 mt-4 italic">
            This portfolio is currently a work in progress, designed to showcase my skills and projects as I continue growing as a developer. 
            Feel free to explore and check back for updates!
          </p>
        </article>
          {/* Image section */}
          <div className="flex justify-center md:justify-end">
            <Image
                src="/images/cv_Image.jpg"
                alt="Profile"
                width={400}           // base width, used for intrinsic ratio
                height={400}          // base height
                className="rounded-2xl shadow-lg object-cover w-4/5 max-w-sm md:max-w-md"
              />
          </div>
        </section>

        {/* Resume */}
        <section
          id="resume"
          className="min-h-screen flex flex-col justify-center p-10 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold mb-8">Resume</h2>

          <div className="mb-8 space-y-6">
            <h3 className="text-xl font-semibold">Employment History</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Software Developer at Accenture (January 2022 — Present)</li>
            </ul>
            <h5 className="text-xl font-semibold">Project Areas</h5>
            <ul className="list-inside space-y-2">
              <li><strong>QA Automation at a Paper & Packaging Solutions Company</strong>(January 2021 — Present)</li>
                  <ul className="list-disc list-inside space-y-4">
                    <li>Tested REST APIs and microservices with Pytest & Selenium.</li>
                    <li>Created and maintained automated test scripts (Azure DevOps, Excel).</li>
                    <li>Automated and executed UAT (User Acceptance Tests), Integration, and Regression tests.</li>
                    <li>Integrated automated tests into CI/CD pipelines (AWS).</li>
                  </ul>
              <li><strong>QA Automation at a Spanish Multinational Bank</strong> (May 2022 — May 2024)</li>
                  <ul className="list-disc list-inside space-y-4">
                    <li>Tested the digital banking platform.</li>
                    <li>Designed and executed automated test scripts.</li>
                    <li>Ensured software quality through API & UI testing.</li>
                    <li>Managed and tracked defects using the Atlassian Application Stack - Jira & Xray.</li>
                  </ul>
              <li><strong>QA Automation at a British Telecom Company</strong> (July 2021 — April 2022)</li>
              <ul className="list-disc list-inside space-y-4">
              <li>Tested full-stack apps (Java, Selenium, Node.js)</li>
              <li>Created and updated regression test scripts</li>
              <li>Maintained regression tests using the Atlassian Application Stack (Jira & Zephyr Scale)</li>
              <li>Integrated automation into CI/CD (Jenkins, GitLab, Azure DevOps)</li>
              </ul>
              <li><strong>Backend Developer a European Multinational Electric Utility </strong>(June 2024 — October 2024)</li>
              <ul className="list-disc list-inside space-y-4">
                <li>Developed cloud API with SAP CAP</li>
                <li>Integrated API with SAP HANA Cloud</li>

              </ul>
            </ul>
          </div>

          <div className="mb-8 space-y-6">
            <h3 className="text-xl font-semibold">Key Skills & Technologies</h3>
            <ul className="list-disc list-inside columns-2 gap-4 text-base leading-relaxed">
              {/* Testing & QA */}
              <li><strong>API Testing:</strong> Swagger, Postman</li>
              <li><strong>Automated Testing:</strong> Pytest, Selenium, WebDriverIO</li>
              <li><strong>CI/CD Integration:</strong> Test automation in pipelines</li>
              <li><strong>Agile & Documentation:</strong> Jira, Xray, Zephyr Scale, Confluence, Azure DevOps</li>
              <li><strong> System Environments:</strong> Linux, macOS, Microsoft Windows</li>
              {/* Programming & Frameworks */}
              <li><strong>Languages:</strong> Java, Python, JavaScript, SQL</li>
              <li><strong>Frameworks:</strong> Node.js, React.js</li>

              {/* DevOps & Cloud */}
              <li><strong>Version Control & DevOps:</strong> Git, GitLab, Jenkins, Vercel</li>
              <li><strong>Cloud & Containers:</strong> Docker, AWS</li>

              {/* Enterprise Tech */}
              <li><strong>SAP Technologies:</strong> SAP HANA, SAP CAP</li>
            </ul>
          </div>


          <div className="mb-8 space-y-6">
            <h3 className="text-xl font-semibold">Languages</h3>
            <ul className="list-disc list-inside columns-2 gap-4">
              <li><strong>Portuguese </strong> - Native</li>
              <li><strong>English</strong> - C1</li>
              <li><strong>French</strong> - B2</li>
              <li><strong>Spanish</strong> - B1</li>
            </ul>
          </div>

          <div className="mb-8 space-y-6">
            <h3 className="text-xl font-semibold">Education</h3>
            <ul className="list-disc list-inside">
              <li>
                <strong>Bachelor in Informatics and Business Management</strong>
                (2022 - Ongoing), ISCTE - University Institute of Lisbon, Lisbon
              </li>
               <li><strong>Java Software Developer</strong>, p Academy - HRB Solutions, Lisbon</li>
              <li>
                <strong>Master’s Studies in Electrical Engineering</strong>, IST - University
                Institute of Lisbon, Lisbon (Jan 2010 — Jan 2013)
              </li>
            </ul>
          </div>

        <div className="mb-8 max-w-xs">
          <a
            href="/cvFolder/cv_Mariza.pdf"
            download
            className="inline-block bg-blue-600 py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Download Resume (PDF)
          </a>
        </div>
        </section>

        {/* Blog */}
        <section
          id="blog"
          className="min-h-screen flex flex-col justify-center py-12"
        >
          <h2 className="text-3xl font-bold mb-6">Blog</h2>
          <ul className="space-y-4 list-disc list-inside">
            <li>
              <a
                href="https://yourblog.com/post-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                How I built my first Next.js portfolio - TO DO 
              </a>
            </li>
            <li>
              <a
                href="https://yourblog.com/post-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                QA Tester Tips - TO DO
              </a>
            </li>
            {/* Add more blog posts here */}
          </ul>
        </section>
      </main>

      {/* Contact Footer */}
      <footer
        id="contact"
        className="bg-gray-100 text-sm py-6 px-8"
      > 
        <div className="mt-4 space-x-6 flex items-center">
          
          <a
            href="https://github.com/maisafari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black flex items-center space-x-1"
            aria-label="GitHub"
          >
            {/* GitHub SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.729.082-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.997.108-.774.418-1.305.762-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.403c1.02.005 2.047.138 3.003.404 2.29-1.553 3.295-1.23 3.295-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.92.43.372.823 1.103.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/mariza-buntubwimana"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black flex items-center space-x-1"
            aria-label="LinkedIn"
          >
            {/* LinkedIn SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.792-1.75-1.766 0-.974.784-1.766 1.75-1.766s1.75.792 1.75 1.766c0 .974-.784 1.766-1.75 1.766zm13.5 11.268h-3v-5.604c0-1.337-.026-3.06-1.865-3.06-1.866 0-2.153 1.459-2.153 2.965v5.699h-3v-10h2.881v1.367h.041c.401-.757 1.379-1.555 2.84-1.555 3.036 0 3.6 2 3.6 4.594v5.594z" />
            </svg>
          </a>
                  <p>
          {" "}
          <a
            href="mailto:marizabuntubwimana@gmail.com"
            className="hover:underline"
          >
            marizabuntubwimana@gmail.com
          </a>
        </p>

       
        </div>
 <p className="mt-6 text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Mariza Buntubwimana. All rights reserved. This page was created by me :D
        </p>
      </footer>


    </>
  );
}
