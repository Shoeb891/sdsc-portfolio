// pages/teams.js
import React from "react";

import { FaUserAlt } from 'react-icons/fa';

const Teams = () => {
  return (
    <>
        <title>Teams</title>
        <section className="py-8 px-4 md:px-8">
          <div className="max-w-6xl mx-auto font-sans">
              <h2 className="text-3xl font-bold text-center mb-12">The Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4 ">
                    <h4 className="text-xl font-semibold justify-center">Mohd Shoeb Mohiuddin</h4>
                  </div>
                  
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <h4 className="text-xl font-semibold">P Sadatullah khan</h4>
                  </div>
                  
                </div>
              </div>
          </div>
        </section>
    </>
  );
};

export default Teams;
