import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/Header.css';

const Header = () => {
    return (

        <div class="example-div">
            <nav>
                <div className="flex flex-fixed black">

                    <Link to="/perfil" className="no-underline black">
                        <div className="fw7 mr1">Perfil</div>
                    </Link>


                    <Link to="/" className="ml1 no-underline black">
                        Lista
                    </Link>


                    <Link
                        to="/create"
                        className="ml1 no-underline black">
                        Agregar
                    </Link>
                    <div class="animation start-home"></div>
                </div>
                
            </nav>
        </div>

    );
};

export default Header;