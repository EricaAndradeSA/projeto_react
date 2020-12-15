import logoimg from '../../imagem/eletro.jpg';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-danger text-white'>
        <Link className='navbar-brand' to='/'>
          <img src={logoimg} width='100px' alt='Logo da Full Stack Eletro' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Alterna navegação'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/produtos'>
                Nossos produtos
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/lojas'>
                Nossas lojas
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link className='nav-link' to='/contato'>
                Fale Conosco
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Header;