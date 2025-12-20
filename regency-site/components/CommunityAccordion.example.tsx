// Example Accordion Component for Community Description
// This shows how to use the communityDescription content

"use client";

import React, { useState } from 'react';
import { flatAccordionSections } from '@/data/communityDescription';

export default function CommunityAccordion() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const toggleSection = (id: string) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(id)) {
      newOpenSections.delete(id);
    } else {
      newOpenSections.add(id);
    }
    setOpenSections(newOpenSections);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-indigo-900 mb-8 text-center">
        Discover MacDonald Highlands
      </h2>
      
      <div className="space-y-4">
        {flatAccordionSections.map((section) => (
          <div
            key={section.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
            >
              <h3 className="text-xl font-semibold text-indigo-900">
                {section.title}
              </h3>
              <span className="text-2xl text-indigo-900">
                {openSections.has(section.id) ? '−' : '+'}
              </span>
            </button>
            
            {openSections.has(section.id) && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Alternative: Using nested accordion structure
export function NestedCommunityAccordion() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());
  const { accordionSections } = require('@/data/communityDescription');

  const toggleSection = (id: string) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(id)) {
      newOpenSections.delete(id);
    } else {
      newOpenSections.add(id);
    }
    setOpenSections(newOpenSections);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-indigo-900 mb-8 text-center">
        Discover MacDonald Highlands
      </h2>
      
      <div className="space-y-4">
        {accordionSections.map((section) => (
          <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
            >
              <h3 className="text-xl font-semibold text-indigo-900">
                {section.title}
              </h3>
              <span className="text-2xl text-indigo-900">
                {openSections.has(section.id) ? '−' : '+'}
              </span>
            </button>
            
            {openSections.has(section.id) && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                {section.isParent && section.children ? (
                  <div className="space-y-3 mt-4">
                    {section.children.map((child) => (
                      <div key={child.id} className="ml-4 border-l-2 border-indigo-200 pl-4">
                        <h4 className="font-semibold text-indigo-800 mb-2">
                          {child.title}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {child.content}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

