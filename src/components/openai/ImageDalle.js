import { useState } from "react";
import DalleImageService from "../../services/service.dalle"
import "../../styles/ServicesOpenai.css";
import { useTranslation } from "react-i18next";
const ImageDalle = ({ onCancel, save }) => {
  const { t } = useTranslation();
  const [descInput, setDesInput] = useState("");
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
      const response = await DalleImageService.getImgIA({ desc: descInput });

      const data = await response;
      console.log(response);

      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("response", response);
      setResult(data.result);
      savePrompt(data.model, data.prompt, data.result);
      setDesInput("");
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
          <h2>{t('Openai Davinci')}</h2>
          <h4>{t('¿Que imagen deseas crear?')}</h4>
          <input
            type="text"
            placeholder={t("Dame una descripcion")}
            value={descInput}
            onChange={(e) => setDesInput(e.target.value)}
            required
          />
          <button type="submit" value="Generate image">{t('Generar')}  </button>
          <button className="salir" onClick={handleSalir}>{t('Salir')}</button>
          <img className="image" src={result} alt="imagen" style={{ maxWidth: '500px' }} />
        </form>
      </div>
    </div>
  );
}

export default ImageDalle;