import React, { useState } from 'react';
import { Mail, Download, Code, ExternalLink, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import profilePic from './assets/profile__pic.png'
import Education from './components/Education';
function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };


  const file_id="1QyRkSfdzQTlplkek22o85sVHoe1lMX5x"
  const skills = {
    'Programming Languages': ['JavaScript', 'C++', 'TypeScript', 'Java', 'C'],
    'Framework/Libraries': ['ReactJs', 'React Native', 'NodeJs', 'NextJS', 'ExpressJs', 'Redux', 'TailwindCSS'],
    'Tools': ['Docker', 'REST API', 'Jest', 'SQL', 'HTTP', 'Github', 'VS Code', 'Postman', 'Vercel', 'Firebase'],
  };


  const freeLancing=[
    {
      title: 'Plantholics',
      description: 'A comprehensive full-stack mobile application for buying, selling, and trading plants, seeds, and flowers. Features include authentication, marketplace functionality, expert consultations, and plant identification.',
      points: [
        'Developed a full-stack application using React Native CLI for the frontend and Node.js with PostgreSQL for the backend',
        'Implemented CI/CD workflow using GitHub Actions and pre-commit git hooks with Husky',
        'Created seamless navigation using React Navigation (Stack and Tab) for multiple user flows',
        'Built authentication module and complex workflows for buy, swap, and donate features',
        'Integrated expert consultation with session booking and plant identification system with admin panel'
      ],
      skills: ['React Native', 'Node.js', 'PostgreSQL', 'GitHub Actions', 'Husky', 'React Navigation'],
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=400'
    },
  ]
  const projects = [
    {
      title: 'VoiceGPT',
      description: 'A cross-platform voice chat app built with React Native using OpenAI API for text generation and real-time voice response.',
      points: [
        'Implemented speech-to-text and text-to-speech features for seamless voice interaction',
        'Added a voice assistant for users to speak prompts and receive AI-generated responses'
      ],
      skills: ['React Native', 'React Native Voice', 'React Native TTS', 'OpenAI'],
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Express.it',
      description: 'A platform for users to express opinions and views effectively.',
      points: [
        'Implemented a multi-level nested comment section to facilitate engaging discussions',
        'Leveraged Firestore as authentication database solution to store user data'
      ],
      skills: ['ReactJs', 'Docker', 'Redux', 'Firebase', 'CSS'],
      image: 'https://images.unsplash.com/photo-1552751753-0fc84ae5b6c8?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 dark:text-dark-50 transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 md:pt-32 px-4 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-dark-50">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Shivam Sourav</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-dark-300">
              Full Stack Developer specializing in building exceptional digital experiences
            </p>
            <div className="flex space-x-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition"
              >
                <Download size={20} />
                <a
                  href={`https://drive.google.com/uc?export=download&id=${file_id}`} // Replace [File ID] with your actual Google Drive file ID
                  download
                  className="text-white transition"
                >
                  <span>Download CV</span>
                </a>

              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-50 dark:hover:bg-dark-800 transition"
              >
                <Mail size={20} />
                <a href="#contact" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"><span>Contact Me</span></a>
              </motion.button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mt-8 md:mt-0"
          >
            <img
              src={profilePic}
              alt="Shivam Sourav - Professional Portrait"
              className="w-64 h-64 profilePic rounded-full shadow-xl"
            />

          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100 dark:bg-dark-800 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-dark-50 mb-12 text-center"
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-700 rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-dark-50 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <Education/>


      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-dark-50 mb-12 text-center"
          >
            Experience
          </motion.h2>
          <Timeline />
        </div>
      </section>

      {/* Freelancing */}

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-dark-800 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-dark-50 mb-12 text-center"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-700 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-dark-50 mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-dark-300 mb-4">{project.description}</p>
                  <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-dark-300">
                    {project.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center space-x-1">
                      <Code size={18} />
                      <span>Code</span>
                    </a>
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center space-x-1">
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-dark-50 mb-12 text-center"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-dark-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-dark-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-dark-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-dark-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p>© 2024 Shivam Sourav. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/souravscript" 
                className="hover:text-blue-400 transition"
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/shivam-sourav-305132168/" 
                className="hover:text-blue-400 transition"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="souravshivam1857@gmail.com" 
                className="hover:text-blue-400 transition"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;