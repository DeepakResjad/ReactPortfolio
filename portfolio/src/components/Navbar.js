import { Link } from 'react-router-dom';
const Navabar = () => {
    return ( 
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-white text-2xl font-bold ">Deepak<span>.</span></div>

        
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white cursor-pointer ">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white cursor-pointer">About</Link>
          <Link to="/project" className="text-gray-300 hover:text-white cursor-pointer">Education &amp; Work experience</Link>
          <Link to="/skills" className="text-gray-300 hover:text-white cursor-pointer">Technical skills</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white cursor-pointer">Contact</Link>
        </div>
      </div>
    </nav> 
    );
}
 
export default Navabar;