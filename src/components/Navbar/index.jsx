import { ReactComponent as TransferImg } from '../../assets/img/transfer.svg';
import { ReactComponent as PencilImg } from '../../assets/img/pencil.svg';
import { ReactComponent as GetOutImg } from '../../assets/img/getout.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="transferArea-nav-content">
                    <h1><TransferImg /> Área de Transferência</h1>
                    <div className="transferArea-contact-container">
                        <a href="#Editar" target="_blank" rel="noreferrer">
                            <div className="transferArea-contact-link">
                                <div className="transferArea-icon">
                                    <PencilImg />
                                </div>
                                Editar frases
                            </div>
                        </a>
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