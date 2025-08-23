import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function ProjectManager() {
  const [projects, setProjects] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("projects") || "[]");
    setProjects(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const title = prompt("Enter project title:");
    const description = prompt("Enter project description:");

    const reader = new FileReader();
    reader.onload = () => {
      setProjects([
        ...projects,
        { id: Date.now(), src: reader.result, title, description },
      ]);
    };
    reader.readAsDataURL(file);
  };

  const removeProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <section className="py-12 bg-gradient-to-b from-purple-900 to-purple-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Recent Projects</h2>

        {/* Upload Button */}
        <div className="flex justify-center mb-8">
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="text-sm text-gray-300"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-purple-800/40 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">
                  {project.title || "Untitled Project"}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description || "No description"}
                </p>
                <button
                  onClick={() => removeProject(project.id)}
                  className="text-red-400 text-sm hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectManager;
