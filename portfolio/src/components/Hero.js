import "./About.css";
import { Transition } from 'react-transition-group';
const Hero = () => {
    return (
        <Transition in={true} timeout={500}>
          {(state) => (
            <div className="page fade-in">
              <section className="relative h-screen overflow-hidden">
                <div className="home-slider owl-carousel">
                    <div className="slider-item relative h-screen bg-cover bg-center">
                        
                        <div className="container mx-auto my-10 p-8 flex items-center font bg-gray-100 rounded-lg shadow-md">
                            <div className="font-poppins font-serif">
                                <span className="subheading text-2xl " id="toggle-element">Hello! This is Deepak</span>
                                <h1 className="mb-4 mt-3 text-2xl " id="toggle-element">Innovative <span>AI/ML </span>Software Developer</h1>
                                <p><a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Hire me</a> <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-4 rounded btn-outline-primary">Download CV</a></p>
                            </div>
                        </div>
                    </div>
        
                    <div className="slider-item relative h-screen bg-cover bg-center">
                        
                        <div className="container relative z-10 mx-auto">
                        {/* Content for the second slider item */}
                        </div>
                    </div>
                </div>
            </section>
            </div>
          )}
        </Transition>
      );
}
 
export default Hero;