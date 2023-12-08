import React, { useState } from 'react';
import './ProjectShowcase.css';
import img1 from "../assets/weather_logo.jpg"
import img2 from "../assets/verzeo_logo.jpg"
import img3 from "../assets/git_logo.jpg"
import { Transition } from 'react-transition-group';

const projects = [
  {
    id: 1,
    image: img1,
    description: 'Focused on utilizing data collection, preprocessing, and feature engineering skills to compile extensive weather data, this project developed accurate weather prediction models using machine learning algorithms like image segmentation and ensemble methods. Efficient communication of findings was achieved through adept data visualization, hyperparameter tuning, and post-processing, showcasing proficiency in presenting data.',
  },
  {
    id: 2,
    image: img2,
    description: 'The Aging Signs detection project employed advanced computer vision and deep learning skills to build a robust aging recognition system. We meticulously curated and preprocessed a comprehensive image dataset. State-of-the-art Convolutional Neural Networks (CNNs) were utilized to create precise detection models, seamlessly integrated with OpenCV for real-time identification of aging marks and wrinkles in both images and videos. Rigorous testing ensured the systems reliability across various conditions.',
  },
  {
    id: 3,
    image: img3,
    description: 'The GitHub portfolio project demonstrated advanced web development skills by creating an engaging online portfolio using HTML, CSS, and JavaScript. The result was an interactive and adaptable website highlighting skills, projects, and accomplishments. The portfolio design showcased a profound understanding of front-end development, incorporating UI/UX design and responsive web design principles. Hosting the project on GitHub emphasized competence in version control and effective collaboration within a development team.',
  }
  // Add more projects as needed
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + projects.length) % projects.length
    );
  };

  return (
    <Transition in={true} timeout={500}>
        {(state) => (
            <div className="page fade-in">
                <div className="container mx-auto my-10 p-8 flex items-center font bg-gray-100 rounded-lg shadow-md">
                  <div className="p-10 w-100 h-100 overflow-hidden mr-8">
                    <img
                      className="slide w-full h-full object-cover"
                      src={projects[currentSlide].image}
                      alt={`Project ${currentSlide + 1}`}
                    />
                  </div>
                    
                  <div><button className="prev border border-black-500 px-4 py-2 rounded-md  transition duration-300" onClick={prevSlide}>
                    &lt;
                  </button></div>
                    
                  <button className="next  px-4 py-2 rounded-md border border-black-500 transition duration-300" onClick={nextSlide}>
                    &gt;
                  </button>

                  <div className="description-container mx-auto my-10 pr-10 items-center ">
                    <p className="description text-justify">{projects[currentSlide].description}</p>
                  </div>
                </div>
            </div>
        )}
    </Transition>
  );
};

export default Slideshow;
