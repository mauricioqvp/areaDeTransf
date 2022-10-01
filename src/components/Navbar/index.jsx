import { ReactComponent as TransferImg } from '../../assets/img/transfer.svg';
import { ReactComponent as PencilImg } from '../../assets/img/pencil.svg';
import { ReactComponent as GetOutImg } from '../../assets/img/getout.svg';
import './styles.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <nav className="navbar-container">
                <div className="transferArea-nav-content">
                    <h1><TransferImg /> <Link to="/" className='transferArea-title' >Área de Transferência</Link></h1>
                    <div className="transferArea-contact-container">
                        <Link to="/inputdata" rel="noreferrer">
                            <div className="transferArea-contact-link">
                                <div className="transferArea-icon">
                                    <PencilImg />
                                </div>
                                Novas frases
                            </div>
                        </Link>
                        <a href="#Sair" target="_blank" rel="noreferrer">
                            <div className="transferArea-contact-link">
                            <div className="transferArea-icon">
                                <GetOutImg />
                            </div>
                                Sair
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;