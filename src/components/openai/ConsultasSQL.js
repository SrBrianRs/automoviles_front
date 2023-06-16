import { useState } from "react";
import "../../styles/ServicesOpenai.css";
import SQLService from "../../services/service.consultasql";

import { useTranslation } from "react-i18next";

const ConsultasSQL = ({onCancel, save}) => {
  const { t } = useTranslation();
  const [texto, setTexto] = useState("");
  const [result, setResult] = useState();

  const handleSalir = () => {
    onCancel();
  }

  const savePrompt = (modelo, prompt, result) =>{
    save(modelo, prompt, result);
  }

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await SQLService.getSQL({texto: texto });

      const data = await response;
      console.log(response);
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("response", response);
      setResult(data.result);
      savePrompt("text-davinci-003", data.prompt, data.result);
      setTexto("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className="centeredDivServices">
      <div className="contentWrapperServices">

        <form className="formContainerServices" onSubmit={onSubmit}>
          <h2>{t('Consultas SQL Simples')}</h2>
          <h4>{t('¿Que consulta deseas hacer?')}</h4>
          <input
            type="text"
            placeholder={t('Ingresa tu consulta')}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            required
          />
          <button type="submit" value="Generate">{t('Generar')}  </button>
          <button className="salir" onClick={handleSalir}>{t('Salir')}</button>
          <div className="result">{result}</div>
        </form>
      </div>
    </div>
  );
}

export default ConsultasSQL;