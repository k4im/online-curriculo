import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavBar()
{
    return <>
        <div className="flex w-full">
          <div className="nav-icons flex justify-center w-1/2 h-20 mt-10">
          </div>

          <div id='nav-menu' className="nav-bar w-full h-20 flex justify-around items-center mt-10">
            <ul className='nav text-white flex flex-row gap-5 text-center mb-3 overflow-hidden'>
              <li className='nav-item-link overflow-hidden'>
                <a className='nav-link overflow-hidden' href="#hero-section">HOME</a></li>
              <li className='nav-item-link overflow-hidden'>
                <a className='nav-link overflow-hidden' href="#">CONTATO</a></li>
              <li className='nav-item-link overflow-hidden'>
                <a className='nav-link overflow-hidden' href="#sobre">SOBRE</a></li>
            </ul>
          </div>

          <div id='nav-icons' className="nav-icons flex justify-centers items-center w-1/2 h-20 mt-10">
            <ul id='list-icons' className='nav text-white flex flex-row gap-10 text-center mb-3'>
              <li className='nav-item overflow-hidden'>
                <a className='text-center overflow-hidden' target="_blank" href="https://github.com/k4im">
                  <FontAwesomeIcon icon={faGithub} className='h-7 text-white mt-6 icon-menu' />
                </a>
              </li>
              <li className='nav-item overflow-hidden'>
                <a className='overflow-hidden' target="_blank" href="https://www.linkedin.com/in/joao-victor-santos-leite/">
                  <FontAwesomeIcon icon={faLinkedin} className='h-7 text-white mt-6 icon-menu' />
                </a>
              </li>
            </ul>
          </div>
        </div>    
    </>
}