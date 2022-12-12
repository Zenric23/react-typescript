import React from "react";

interface Experience {
  company: string,
  position: string,
  desc: string
}

const experiences: Experience[] = [
    {
        company: 'Notre Dame of Kidapawan College',
        desc: `Develop and deploy an E-commerce platform for king Canis Pet Supplies, Kidapawan City as our Capstone Research proposal .`,
        position: 'Fullstack Developer'
    },
    {
        company: 'Freelance',
        desc: `Translating Figma desigin into reusable, efficient and readable code using React JS.`,
        position: 'Front-end Developer'
    },
]

const Experience = () => {
  return (
    <div>
      <h3 className="text-title mb-4">experience</h3>
      <div className="text-indigo-600 text-xl font-bold mb-20">
        _what i have done?
      </div>
      <div className="grid md:grid-cols-2 gap-20">
        {
          experiences.map(exp=> (
            <div key={exp.company}>
              <h2 className="text-xl text-gray-700 mb-1 font-bold">{exp.company}</h2>
              <div className="text-gray-500 mb-4">{exp.position}</div>
              <p className="text-gray-500 text-justify font-medium">{exp.desc}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

//company
//position

//description

export default Experience;
