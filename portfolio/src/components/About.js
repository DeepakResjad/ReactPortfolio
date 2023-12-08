import img from "../assets/about1.JPEG";
import "./About.css";
import { Transition } from 'react-transition-group';
const About = () => {
    return (
        <Transition in={true} timeout={500}>
          {(state) => (
            <div className="page fade-in">
                <div className="container mx-auto my-10 p-8 flex items-center bg-gray-100 rounded-lg shadow-md">                
                    <div className="w-1/2 h-1/2 overflow-hidden mr-8">
                        <img
                            src={img}
                            alt="Deepak"
                            className="w-full h-full object-cover"
                        />
                    </div>    
                        
                    <div>
                        <h2 className="text-2xl font-bold mb-4">About Me</h2>
                        <ul className="list-disc pl-4">
                            <li className="mb-2"><span>Name:</span> <span>Deepak Venkateshwar Ramesh</span></li>
                            <li className="mb-2"><span>Date of birth:</span> <span>May 17, 2000</span></li>
                            <li className="mb-2"><span>Address:</span> <span>Saint Louis MO 63108 USA</span></li>
                            <li className="mb-2"><span>Zip code:</span> <span>63108</span></li>
                            <li className="mb-2"><span>Email:</span> <span>deepak.resjad@gmail.com</span></li>
                            <li className="mb-2"><span>Phone: </span> <span>+1-314-445-8615</span></li>
                        </ul>                
                    </div>
                </div>
            </div>
          )}
        </Transition>
      );
};   
 
export default About;