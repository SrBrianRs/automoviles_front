import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../styles/Header.css';
import { AUTH_TOKEN } from '../constants';
import LanguageSelect from "./LanguajeSelect";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (

        <div class="example-div">
            <nav>
                <div className="flex flex-fixed black">

                    <Link to="/perfil" className="no-underline black">
                        <div className="fw7 mr1"> {t('Perfil')}</div>
                    </Link>


                    <Link to="/" className="ml1 no-underline black">
                        {t('Lista')}
                    </Link>


                    <Link
                        to="/create"
                        className="ml1 no-underline black">
                        {t('Agregar')}
                    </Link>

                    <Link
                        to="/menuia"
                        className="ml1 no-underline black">
                        {t('MenuIA')}
                    </Link>
                    
                    <Link 
                        to={"/search"} 
                        className="ml1 no-underline black">
                        {t("BD")}</Link>
                    

                    <Link>
                        {authToken ? (
                            <div
                                className="ml1 pointer black"
                                onClick={() => {
                                    localStorage.removeItem(AUTH_TOKEN);
                                    navigate(`/`);
                                }}
                            >
                                {t('Logout')}
                            </div>
                        ) : (
                            <Link to="/login" className="ml1 no-underline black">
                                {t('Login')}
                            </Link>
                        )}
                    </Link>
                    <Link>


                        <div className="flex flex-fixed">
                            <div className="ml1 pointer black">
                                {t('Idioma')}
                            </div>
                            <div className="ml1 pointer black"> : </div>

                            <LanguageSelect className="ml1 pointer black" />

                        </div>

                    </Link>
                    
                    





                    <div class="animation start-home"></div>
                </div>

            </nav>
        </div>

    );
};

export default Header;