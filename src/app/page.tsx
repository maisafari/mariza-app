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
          className="min-h-screen grid grid-cols-1 md:grid-cols-[3fr_2fr] items-center gap-12 py-12"
        >
          {/* Text section */}
          <div>
            <h1 className="text-4xl font-bold mb-6">Hi, I am Mariza</h1>
            <p className="max-w-xl text-lg leading-relaxed">
              Software Developer with 4 years in QA automation, backend, and
              cloud systems. Skilled in API testing, CI/CD, and full-stack
              development with Java, Python, and JavaScript. Experienced across
              finance, telecom, and utilities, with a strong focus on Agile
              delivery, mentoring, and continuous improvement.
            </p>
          </div>

          {/* Image section */}
          <div className="flex justify-center md:justify-end">
            <Image
                src="/images/cv_Image.jpg"
                alt="Profile"
                width={400}           // base width, used for intrinsic ratio
                height={400}          // base height
                className="rounded-2xl shadow-lg object-cover w-3/5 max-w-sm md:max-w-md"
              />
          </div>
        </section>

        {/* Resume */}
        <section
          id="resume"
          className="min-h-screen flex flex-col justify-center bg-white p-10 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold mb-8">Resume</h2>

          <div className="mb-8 space-y-6">
            <h3 className="text-xl font-semibold">Education</h3>
            <ul className="list-disc list-inside">
              <li>
                January 2021 — Bachelor in Informatics and Business Management
                (Ongoing), ISCTE - University Institute of Lisbon, Lisbon
              </li>
              <li>
                Master’s Studies in Electrical Engineering, IST - University
                Institute of Lisbon, Lisbon (Jan 2010 — Jan 2013)
              </li>
            </ul>
          </div>

          <div className="mb-8 space-y-6">
            <h3 className="text-xl font-semibold">Employment History</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Software Developer at Accenture (January 2022 — Present)</li>
              <li>QA Automation at Sky UK – British Telecom Company (July 2021 — April 2022)</li>
              <li>QA Automation at Santander – Spanish Multinational Bank (May 2022 — May 2024)</li>
              <li>QA Automation at DS Smith Plc – Paper & Packaging Solutions (January 2021 — Present)</li>
              <li>Java Software Developer, Up Academy (HRB Solutions), Lisbon (November 2024 — Present)</li>
              <li>Backend Developer at E.ON – European Multinational Electric Utility (June 2024 — October 2024)</li>
            </ul>
          </div>

          <div className="mb-8 space-y-6">
            <h3 className="text-xl font-semibold">Key Skills & Technologies</h3>
            <ul className="list-disc list-inside columns-2 gap-4">
              <li>API Testing</li>
              <li>Automated Testing (Pytest, Selenium, WebDriverIO)</li>
              <li>Atlassian Application Stack (Jira, Xray, Zephyr Scale)</li>
              <li>Git, GitLab, Jenkins, Azure DevOps</li>
              <li>Java, Python, JavaScript, Node.js, React.js</li>
              <li>Docker, AWS, SAP HANA, SAP CAP</li>
              <li>SQL</li>
              <li>Test Automation Integration in CI/CD Pipelines</li>
            </ul>
          </div>

          <div className="mb-8 space-y-6">
            <h3 className="text-xl font-semibold">Languages</h3>
            <ul className="list-disc list-inside columns-2 gap-4">
              <li>English - Native speaker</li>
              <li>Portuguese - Native speaker</li>
              <li>French - Very good command</li>
              <li>Spanish - Good working knowledge</li>
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-2">Summary of Responsibilities</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Developed cloud API with SAP CAP.</li>
              <li>Integrated API with SAP HANA Cloud.</li>
              <li>Consulted on multiple projects across banking, telecom, and energy sectors.</li>
              <li>Tested the digital banking platform.</li>
              <li>Designed and executed automated test scripts.</li>
              <li>Ensured software quality through API & UI testing.</li>
              <li>Managed and tracked defects using the Atlassian Application Stack - Jira & Xray.</li>
              <li>Tested REST APIs and microservices with Pytest & Selenium.</li>
              <li>Created and maintained automated test scripts (Azure DevOps, Excel).</li>
              <li>Automated and executed UAT (User Acceptance Tests), Integration, and Regression tests.</li>
              <li>Integrated automated tests into CI/CD pipelines (AWS).</li>
              <li>Tested full-stack apps (Java, Selenium, Node.js).</li>
              <li>Created and updated regression test scripts.</li>
              <li>Maintained regression tests using the Atlassian Application Stack (Jira & Zephyr Scale).</li>
              <li>Integrated automation into CI/CD (Jenkins, GitLab, Azure DevOps).</li>
            </ul>
          </div>
        <div className="mb-8 max-w-xs">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-blue-600 py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            Download Resume (PDF) - Add Functionality
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
        <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
        <p>
          Email:{" "}
          <a
            href="mailto:marizabuntubwimana@gmail.com"
            className="hover:underline"
          >
            marizabuntubwimana@gmail.com
          </a>
        </p>
        <div className="mt-4 space-x-6">
          <a
            href="https://github.com/maisafari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mariza-buntubwimana"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
