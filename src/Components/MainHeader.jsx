import {Link} from 'react-router-dom';
import Image from '../assets/images/main_header.png';


const MainHeader = () => {
  return (
      <header>
        <div className="main__header">
          <div className="container main__header-container">
              <div class="main__header-left">
              <h4>#100Daysofworkout</h4>
                <h1>Join the Legends of the Fitness World</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, ab eos. Iure qui neque mollitia.</p>
                <Link to='/plans' className='btn lg'>Get Started</Link>
              </div>
              <div class="main__header-right">
                <div className="main__header-circle"></div>
                <div className="main__header-image">
                  <img src={Image} alt='Main Header Image'/>
                </div>
              </div>
          </div>
        </div>
      </header>
    )
}

export default MainHeader