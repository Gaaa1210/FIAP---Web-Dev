import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Meu site</h1>
      <nav>
            <ul>
            <li><Link to='/'>Home</Link></li> 
            <li><Link to='Sobre'>Sobre</Link></li>
            <li><Link to='Servicos'>Serviços</Link></li>
            <li><Link to='Contato'>Contato</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
