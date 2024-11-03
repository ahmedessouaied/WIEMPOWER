import React from 'react';
import { 
  CircleUserRound, 
  MapPin, 
  Briefcase, 
  GraduationCap,
  Star,
  Heart,
  Github,
  ExternalLink
} from 'lucide-react';

const ProfilePage = () => {
  const projects = [
    {
      title: "WomenTechMentor",
      description: "A platform connecting women in tech with experienced mentors. Built with React and Node.js, serving 10,000+ users.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#",
      image: "/api/placeholder/400/200"
    },
    {
      title: "TechDiversity Dashboard",
      description: "Analytics dashboard tracking diversity metrics in tech companies. Used by 50+ organizations for DEI initiatives.",
      tags: ["Python", "D3.js", "SQL"],
      link: "#",
      github: "#",
      image: "/api/placeholder/400/200"
    },
    {
      title: "CodeHer Conference Platform",
      description: "Virtual conference platform specifically designed for women in tech events. Hosted 5 major conferences.",
      tags: ["Vue.js", "AWS", "WebRTC"],
      link: "#",
      github: "#",
      image: "/api/placeholder/400/200"
    }
  ];

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Header Banner */}
      <div className="h-48 bg-gradient-to-r from-pink-400 to-pink-500"/>
      
      {/* Profile Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Card */}
        <div className="relative -mt-24">
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Profile Picture */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
              <div className="rounded-full bg-white p-2 shadow-lg">
                <CircleUserRound size={96} className="text-pink-500" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="mt-20 text-center">
              <h1 className="text-3xl font-bold text-gray-900">Asma Mhatli</h1>
              <p className="text-pink-500 font-medium mt-2">Tech Leader & Mentor</p>
              
              <div className="flex justify-center gap-2 mt-4">
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Tech</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Leadership</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Innovation</span>
              </div>

              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Passionate about empowering women in technology and creating inclusive workplaces. 
                Leading by example and mentoring the next generation of tech leaders.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 border-t border-b border-pink-100 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-500">1.2K</div>
                <div className="text-sm text-gray-600">Connections</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-500">50+</div>
                <div className="text-sm text-gray-600">Mentees</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-500">15</div>
                <div className="text-sm text-gray-600">Years Exp.</div>
              </div>
            </div>

            {/* Details */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Briefcase className="text-pink-500" />
                <span className="text-gray-700">Senior Engineering Manager at TechCorp</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="text-pink-500" />
                <span className="text-gray-700">MSc Computer Science, Stanford University</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-pink-500" />
                <span className="text-gray-700">San Francisco, CA</span>
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-6 bg-pink-50 rounded-lg p-6">
              <h2 className="text-pink-700 font-bold text-xl flex items-center gap-2 mb-4">
                <Star className="text-pink-500" /> Achievements
              </h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Heart className="text-pink-400" size={16} />
                  <span className="text-gray-700">Women in Tech Leadership Award 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="text-pink-400" size={16} />
                  <span className="text-gray-700">Founded Women Code Together Initiative</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="text-pink-400" size={16} />
                  <span className="text-gray-700">Published "Breaking the Glass Ceiling in Tech"</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a href={project.link} className="flex items-center gap-1 text-pink-500 hover:text-pink-600">
                      <ExternalLink size={16} /> Demo
                    </a>
                    <a href={project.github} className="flex items-center gap-1 text-pink-500 hover:text-pink-600">
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;