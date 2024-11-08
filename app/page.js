"use client";

import React, { useState } from 'react';
import { Download, ChevronDown, ChevronUp, BookOpen, Users, Calendar, BookMarked,Mail, Globe } from 'lucide-react';

export default function Home() {
  const [expandedSection, setExpandedSection] = useState('abstract');
  const [expandedAuthor, setExpandedAuthor] = useState(null);

  const sections = {
    abstract: {
      title: "Abstract",
      content: "The research paper provides a comprehensive exploration of advancements in Generative Large Language Models (G-LLMs), particularly focusing on their application in enhancing reasoning abilities and user interaction within educational frameworks. It emphasizes the importance of context awareness, as demonstrated by the BERT model, which processes input in a case-agnostic manner to improve accuracy in understanding user queries. The findings suggest that traditional methods often lack the contextual depth necessary for precise output generation, thereby underscoring the necessity for innovative approaches like Retrieval Augmented Generation (RAG). This method not only enhances the quality of generated responses but also mitigates the risk of hallucinations, a common challenge faced by fine-tuned models."
    },
    methodology: {
      title: "Methodology & Findings",
      content: "Moreover, the paper delves into the integration of advanced methodologies such as Learning by Teaching (LbT) and regularization techniques, which collectively contribute to the enhancement of model performance. The literature review articulates the theoretical foundations and empirical results, while also acknowledging the limitations and ethical considerations inherent in deploying these technologies. The exploration of LoRA (Low-Rank Adaptation) as a fine-tuning method highlights its potential to democratize access to LLM development, enabling smaller organizations and individual developers to create specialized models tailored to specific needs."
    },
    conclusion: {
      title: "Conclusion & Impact",
      content: "In addition, the paper outlines a structured approach to user engagement through the development of a virtual professor, which aims to facilitate a more interactive and personalized learning experience. This 3D model, capable of natural speech and doubt resolution, represents a significant step towards integrating technology in education, allowing learners to navigate complex knowledge landscapes effectively. The proposed system not only tracks user progress but also ensures the authenticity and quality of resources, thereby fostering a self-regulated learning environment. Overall, the findings contribute valuable insights to the field, paving the way for future advancements in model performance and societal impact, ultimately transforming the educational landscape into a more efficient and learner-centric domain."
    }
  };

  const authors = [
    {
      id: 1,
      name: "Tejas Satish Gotavade",
      role: "Computer Engineer",
      affiliation: "Terna Engineering College",
      bio: "I am a Computer Engineer specializing in Large Language Models and Educational Technology. My research interests include Machine Learning, Self Learning, Natural Language Processing, and Logic Programming. I am passionate about leveraging AI to enhance educational frameworks and promote self-directed learning." ,
      expertise: ["Machine Learning", "Self Learning", "Natural Language Processing", "Logic Programming"],
      email: "gotavadetejas2122@ternaengg.ac.in",
      website: "artificial-intelligence-ecosystem-for-au-doomerdoomers-projects.vercel.app"
    },
    
  ];

  const AuthorCard = ({ author }) => {
    const isExpanded = expandedAuthor === author.id;
    
    return (
      <div className="border rounded-lg bg-white">
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-lg text-gray-900">{author.name}</h3>
              <p className="text-gray-600">{author.role}</p>
              <p className="text-gray-500 text-sm">{author.affiliation}</p>
            </div>
            <button
              onClick={() => setExpandedAuthor(isExpanded ? null : author.id)}
              className="text-gray-400 hover:text-gray-600"
            >
              {isExpanded ? 
                <ChevronUp className="w-5 h-5" /> : 
                <ChevronDown className="w-5 h-5" />
              }
            </button>
          </div>
          
          {isExpanded && (
            <div className="mt-4 space-y-3">
              <p className="text-gray-600">{author.bio}</p>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {author.expertise.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${author.email}`} className="hover:text-blue-600">
                    {author.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Globe className="w-4 h-4" />
                  <a href={`https://${author.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                    {author.website}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const Section = ({ id, title, content }) => (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setExpandedSection(expandedSection === id ? null : id)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-800">{title}</span>
        {expandedSection === id ? 
          <ChevronUp className="w-5 h-5 text-gray-500" /> : 
          <ChevronDown className="w-5 h-5 text-gray-500" />
        }
      </button>
      {expandedSection === id && (
        <div className="px-4 py-3 bg-gray-50">
          <p className="text-gray-600 leading-relaxed">{content}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className=" bg-white shadow-lg rounded-lg max-w-3xl mx-auto">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Artificial Intelligence Ecosystem for Automating Self-Directed Teaching
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Authors: Tejas Satish Gotavade</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Published: 11th November, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>Pages: 13</span>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="divide-y divide-gray-200">
        {Object.entries(sections).map(([id, section]) => (
          <Section key={id} id={id} title={section.title} content={section.content} />
        ))}
      </div>

      <div className="p-6 border-t border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <BookMarked className="w-5 h-5" />
          About the Authors
        </h2>
        <div className="space-y-4">
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      </div>

      {/* Footer with Download Button */}
      <div className="p-6 bg-gray-50 rounded-b-lg flex justify-end">
        <a
          href="/paper.pdf"
          download
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Full Paper
        </a>
      </div>
    </div>
  );
};