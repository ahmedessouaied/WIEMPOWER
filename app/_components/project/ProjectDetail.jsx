"use client";
import React from "react";
import {
  Github,
  ExternalLink,
  Users,
  ArrowLeft,
  Clock,
  Target,
  TagIcon,
  Star,
} from "lucide-react";

const ProjectDetail = () => {
  // This would typically come from props or a router parameter
  const project = {
    title: "WomenTechMentor Platform",
    subtitle: "Connecting Women in Technology with Mentors",
    description:
      "A comprehensive mentorship platform designed to bridge the gender gap in technology by connecting aspiring women technologists with experienced mentors. The platform facilitates meaningful connections, knowledge sharing, and career growth opportunities.",
    image: "/api/placeholder/1200/600",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "Socket.io", "AWS"],
    category: "Web Application",
    teamSize: 4,
    duration: "6 months",
    status: "Live",
    startDate: "June 2023",
    completionDate: "December 2023",
    github: "#",
    live: "#",
    impact: [
      "10,000+ active users",
      "500+ successful mentorship matches",
      "85% mentee satisfaction rate",
      "Users from 25+ countries",
    ],
    keyFeatures: [
      "AI-powered mentor matching algorithm",
      "Real-time video conferencing",
      "Resource sharing and learning paths",
      "Progress tracking and goal setting",
      "Community forum and discussion boards",
      "Event organization and management",
    ],
    challenges: [
      "Implementing scalable video conferencing",
      "Building an effective matching algorithm",
      "Ensuring platform accessibility",
      "Managing user privacy and security",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => window.history.back()}
              className="flex items-center text-gray-600 hover:text-pink-500"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{project.subtitle}</p>

          <div className="rounded-lg overflow-hidden mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-pink-50 p-4 rounded-lg">
              <div className="flex items-center text-pink-500 mb-2">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-medium">Duration</span>
              </div>
              <p className="text-gray-800">{project.duration}</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <div className="flex items-center text-pink-500 mb-2">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-medium">Team Size</span>
              </div>
              <p className="text-gray-800">{project.teamSize} Members</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <div className="flex items-center text-pink-500 mb-2">
                <Target className="w-5 h-5 mr-2" />
                <span className="font-medium">Status</span>
              </div>
              <p className="text-gray-800">{project.status}</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <div className="flex items-center text-pink-500 mb-2">
                <TagIcon className="w-5 h-5 mr-2" />
                <span className="font-medium">Category</span>
              </div>
              <p className="text-gray-800">{project.category}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About the Project
              </h2>
              <p className="text-gray-600">{project.description}</p>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="w-5 h-5 text-pink-500 mr-2 mt-1" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Challenges & Solutions
              </h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-gray-600">
                    • {challenge}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Impact</h3>
              <ul className="space-y-3">
                {project.impact.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Project Links
              </h3>
              <div className="space-y-4">
                <a
                  href={project.live}
                  className="flex items-center justify-center w-full px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Live Project
                </a>
                <a
                  href={project.github}
                  className="flex items-center justify-center w-full px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
