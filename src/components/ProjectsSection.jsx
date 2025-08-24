import React from "react";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-[#f9f9f9] border border-gray-200 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-[#008A5E] mb-2">
              Project One
            </h3>
            <p className="text-gray-600 mb-4">
              Website design for a startup helping early founders grow.
            </p>
            <a
              href="#"
              className="flex items-center gap-2 text-[#008A5E] hover:underline font-medium"
            >
              See Project <ExternalLink size={16} />
            </a>
          </div>
          <div className="mt-6">
            <div className="bg-gray-100 rounded-xl overflow-hidden border border-gray-300 shadow-md">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Project One"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#f9f9f9] border border-gray-200 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-[#008A5E] mb-2">
              Project Two
            </h3>
            <p className="text-gray-600 mb-4">
              Real estate website for a modern development firm.
            </p>
            <a
              href="#"
              className="flex items-center gap-2 text-[#008A5E] hover:underline font-medium"
            >
              See Project <ExternalLink size={16} />
            </a>
          </div>
          <div className="mt-6">
            <div className="bg-gray-100 rounded-xl overflow-hidden border border-gray-300 shadow-md">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Project Two"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#f9f9f9] border border-gray-200 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-[#008A5E] mb-2">
              Project Three
            </h3>
            <p className="text-gray-600 mb-4">
              Responsive website design for an agro-firm brand.
            </p>
            <a
              href="#"
              className="flex items-center gap-2 text-[#008A5E] hover:underline font-medium"
            >
              See Project <ExternalLink size={16} />
            </a>
          </div>
          <div className="mt-6">
            <div className="bg-gray-100 rounded-xl overflow-hidden border border-gray-300 shadow-md">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Project Three"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
