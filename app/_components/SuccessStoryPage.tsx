"use client";
import React from "react";
import {
  Award,
  Book,
  Heart,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Calendar,
  Quote,
} from "lucide-react";

const SuccessStoryPage = () => {
  return (
    <div className="min-h-screen bg-pink-50">
      <div className="bg-pink-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="text-pink-100 mb-4 flex items-center gap-2">
                <Calendar size={20} />
                <span>Woman of the Week - November 3-9, 2024</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Michelle Obama
              </h1>
              <p className="text-xl mb-6">
                Former First Lady of the United States, Attorney, Author, and
                Advocate for Education
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-pink-600 hover:bg-pink-100 px-6 py-3 rounded-full flex items-center gap-2">
                  <Heart size={20} />
                  Inspire Me
                </button>
                <button className="border border-white hover:bg-white hover:text-pink-600 px-6 py-3 rounded-full flex items-center gap-2">
                  <Share2 size={20} />
                  Share Story
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg bg-pink-500">
                <img
                  src="/images/michelle.jpg"
                  alt="Michelle Obama"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden -mt-16 px-6 mb-8">
        <div className="rounded-full overflow-hidden border-4 border-white w-32 h-32 mx-auto shadow-lg">
          <img
            src="/images/michelle.jpg"
            alt="Michelle Obama Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-pink-600">
                Quick Facts
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-pink-50 rounded-lg">
                  <p className="text-sm text-pink-600">Born</p>
                  <p className="font-semibold">January 17, 1964</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg">
                  <p className="text-sm text-pink-600">Education</p>
                  <p className="font-semibold">Princeton University</p>
                  <p className="font-semibold">Harvard Law School</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg">
                  <p className="text-sm text-pink-600">Known For</p>
                  <p className="font-semibold">
                    First African American First Lady
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-pink-600">
                Her Journey
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700">
                  Michelle Obama&apos;s journey from Chicago&apos;s South Side
                  to the White House embodies the American Dream. Born into a
                  working-class family, she excelled academically, attending
                  Princeton University and Harvard Law School.
                </p>

                <div className="flex items-start gap-4 p-6 bg-pink-50 rounded-lg">
                  <Quote className="text-pink-600 flex-shrink-0" size={24} />
                  <blockquote className="text-lg italic">
                    "Success isn&apos;t about how much money you make. It&apos;s
                    about the difference you make in people&apos;s lives."
                  </blockquote>
                </div>
                <h3 className="text-xl font-semibold text-pink-600">
                  Professional Career
                </h3>
                <p className="text-gray-700">
                  After graduating from Harvard Law School, she joined the
                  Chicago law firm Sidley & Austin, where she mentored Barack
                  Obama. She later pursued a career in public service, working
                  in various roles focused on community development and youth
                  mentorship.
                </p>

                <h3 className="text-xl font-semibold text-pink-600">
                  First Lady Years
                </h3>
                <p className="text-gray-700">
                  As First Lady (2009-2017), she launched several groundbreaking
                  initiatives:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Let&apos;s Move! - Combating childhood obesity</li>
                  <li>Joining Forces - Supporting military families</li>
                  <li>
                    Let Girls Learn - Promoting girls&apos; education worldwide
                  </li>
                  <li>
                    Reach Higher - Inspiring young people to pursue higher
                    education
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-pink-600">
                Key Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Bestselling Author",
                    description:
                      "Her memoir 'Becoming' sold over 10 million copies",
                  },
                  {
                    title: "Grammy Award Winner",
                    description:
                      "Best Spoken Word Album for 'Becoming' audiobook",
                  },
                  {
                    title: "Higher Education Advocate",
                    description:
                      "Launched initiatives helping millions of students",
                  },
                  {
                    title: "Public Health Champion",
                    description: "Led nationwide health and wellness campaigns",
                  },
                ].map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-pink-50 rounded-lg"
                  >
                    <Award className="text-pink-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-pink-600">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-pink-600">
                Share This Story
              </h3>
              <div className="flex flex-col gap-3">
                <button className="flex items-center gap-2 w-full p-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
                  <Twitter size={20} />
                  Share on Twitter
                </button>
                <button className="flex items-center gap-2 w-full p-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
                  <Linkedin size={20} />
                  Share on LinkedIn
                </button>
                <button className="flex items-center gap-2 w-full p-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
                  <Facebook size={20} />
                  Share on Facebook
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-pink-600">
                Related Resources
              </h3>
              <div className="space-y-4">
                {[
                  "Becoming by Michelle Obama",
                  "The Light We Carry",
                  "American Grown",
                  "Michelle Obama: A Life",
                ].map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg"
                  >
                    <Book className="text-pink-600 flex-shrink-0" size={20} />
                    <span>{resource}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryPage;
