import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import "../../styles/MenuIA.css";
import TextDavinci from './TextDavinci';
import ImageDalle from './ImageDalle';
import CorrecionTexto from './CorreccionEscritura';
import Emojis from './PeliculasEmojis';
import ConsultasSQL from './ConsultasSQL';
import Recetas from './Recetas';
import { useTranslation } from "react-i18next";

const CREATE_PROMPT_MUTATION = gql`
  mutation PostMutation(
    $fecha: String!,
    $modelo: String!,
    $prompt: String!,
    $result: String!,
    
    ){
        createConsulta(
        fecha: $fecha,
        modelo: $modelo,
        prompt: $prompt,
        result: $result
        
      ) {
        fecha
        prompt
        result
        
     }
    }
`;

const MenuIAS = () => {
    const { t } = useTranslation();
    const [showPopupNombres, setShowPopupNombres] = useState(false);
    const [showPopupImage, setShowPopupImage] = useState(false);
    const [showPopupCorreccionTexto, setShowPopupCorreccionTexto] = useState(false);
    const [showPopupEmoji, setShowPopupEmoji] = useState(false);
    const [showPopupSQL, setShowPopupSQL] = useState(false);
    const [showPopupReceta, setShowPopupReceta] = useState(false);
    const fecha = new Date().toISOString();

    const [mutate] = useMutation(CREATE_PROMPT_MUTATION, {
        onCompleted: () => alert("Datos guardados exitosamente"),
    });

    const savePrompt = (modelo, prompt, result) => {
        mutate({
            variables: {
                fecha: fecha,
                modelo: modelo,
                prompt: prompt,
                result: result,
                
            },
        });
    };

    const handleShowPopupNombres = async () => {
        setShowPopupNombres(true);
    };
    const handleClosePopupNombres = () => {
        setShowPopupNombres(false);
    };
    const handleShowPopupImage = async () => {
        setShowPopupImage(true);
    };
    const handleClosePopupImage = () => {
        setShowPopupImage(false);
    };
    const handleShowPopupCorreccionTexto = async () => {
        setShowPopupCorreccionTexto(true);
    };
    const handleClosePopupCorreccionTexto = () => {
        setShowPopupCorreccionTexto(false);
    };
    const handleShowPopupEmoji = async () => {
        setShowPopupEmoji(true);
    };
    const handleClosePopupEmoji = () => {
        setShowPopupEmoji(false);
    };
    const handleShowPopupSQL = async () => {
        setShowPopupSQL(true);
    };
    const handleClosePopupSQL = () => {
        setShowPopupSQL(false);
    };
    const handleShowPopupReceta = async () => {
        setShowPopupReceta(true);
    };
    const handleClosePopupReceta = () => {
        setShowPopupReceta(false);
    };



    return (
        <div className="centered-Div">
            <div className="content-Wrapper">
                <div className="service">
                    <button className='usar' onClick={handleShowPopupNombres}>{t('Recomendaciones de nombres')}</button>
                    {showPopupNombres && (
                        <TextDavinci
                            onCancel={handleClosePopupNombres}
                            save={savePrompt}
                        />
                    )}
                </div>
                <div className="service">
                    <button className='usar' onClick={handleShowPopupImage}>{t('Creacion de imagenes')}</button>
                    {showPopupImage && (
                        <ImageDalle
                            onCancel={handleClosePopupImage}
                            save={savePrompt} />
                    )}
                </div>
                <div className="service">
                    <button className='usar' onClick={handleShowPopupCorreccionTexto}>{t('Correccion de texto')}</button>
                    {showPopupCorreccionTexto && (
                        <CorrecionTexto
                            onCancel={handleClosePopupCorreccionTexto}
                            save={savePrompt} />
                    )}
                </div>
                <div className="service">
                    <button className='usar' onClick={handleShowPopupEmoji}>{t('Titulo de pelicula a emoji')}</button>
                    {showPopupEmoji && (
                        <Emojis
                            onCancel={handleClosePopupEmoji}
                            save={savePrompt} />
                    )}
                </div>
                <div className="service">
                    <button className='usar' onClick={handleShowPopupSQL}>{t('Consulta SQL simples')}</button>
                    {showPopupSQL && (
                        <ConsultasSQL
                            onCancel={handleClosePopupSQL}
                            save={savePrompt} />
                    )}
                </div>
                <div className="service">
                    <button className='usar' onClick={handleShowPopupReceta}>{t('Receta a partir de ingredientes')}</button>
                    {showPopupReceta && (
                        <Recetas
                            onCancel={handleClosePopupReceta}
                            save={savePrompt} />
                    )}
                </div>
            </div >
        </div >
    );
};

export default MenuIAS;