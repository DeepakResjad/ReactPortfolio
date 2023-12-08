import React, { useState, useEffect } from 'react';
import "./progressbar.css";
import { Transition } from 'react-transition-group';

export default function SkillProgress() {
  const skills = [
    { name: 'JavaScript', proficiency: 80 },
    { name: 'React.js', proficiency: 75 },
    { name: 'Node.js', proficiency: 70 },
    { name: 'HTML/CSS', proficiency: 85 },
  ];

  return (
    <div className="container mx-auto my-10 p-8 flex items-center bg-gray-100 rounded-lg shadow-md grid grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <SkillContainer key={index} skill={skill} />
      ))}
    </div>
  );
}

function SkillContainer({ skill }) {
  return (
    <div className="skillContainer">
      <h3>{skill.name}</h3>
      <Progressbar skill={skill} />
    </div>
  );
}

function Progressbar({ skill }) {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (filled < skill.proficiency && isRunning) {
      setTimeout(() => setFilled((prev) => prev + 2), 50);
    }
  }, [filled, isRunning, skill]);

  return (
  <Transition in={true} timeout={500}>
    {(state) => (
    <div className="page fade-in">
    <div >
      <div className="progressbar">
        <div
          style={{
            height: '100%',
            width: `${filled}%`,
            backgroundColor: '#008080',
            transition: 'width 0.5s',
          }}
        ></div>
        <span className="progressPercent">{filled}%</span>
      </div>
      <button
        className="btn"
        onClick={() => {
          setIsRunning(true);
        }}
      >
        Click here for {skill.name} Progress
      </button>
    </div>
  </div>
  )}
</Transition>
  );
}
