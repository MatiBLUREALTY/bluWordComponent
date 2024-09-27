import React, { useState } from "react";
import './BlueCares.css';
import bluCaresLogo from "../../../src/assets/bluCaresLogo.svg"
import BLU_Img_Mar_36 from "../../assets/BLU_Img_Mar_34.jpg";
import BLU_Img_Mar_35 from "../../assets/BLU_Img_Mar_35.jpg";
import BLU_Img_Mar_34 from "../../assets/BLU_Img_Mar_36.jpg";
import FreeRecyclingIcon from "../../assets/FreeRecyclingIcon.svg"
import MailLithiumIcon from "../../assets/MailLithiumIcon.svg"
import NationalDropOffsIcon from "../../assets/NationalDropOffsIcon.svg"
import The_Best_Buy_Logo from "../../assets/The_Best_Buy_Logo.png"
import The_Home_Depot_Logo from "../../assets/The_Home_Depot_Logo.jpg"
import The_Lowes_Logo from "../../assets/The_Lowes_Logo.jpg"
import Amazon_Recycling_Logo from "../../assets/Amazon_Recycling_Logo.png"
import Battery_Solutions_Logo from "../../assets/Battery_Solutions_Logo.png"
import Call_2_Recycle_Logo from "../../assets/Call_2_Recycle_Logo.jpg"
import Step1 from "../../assets/Step1.svg"
import Step2 from "../../assets/Step2.svg"
import Step3 from "../../assets/Step3.svg"
import lets from "../../assets/lets.jpg"
import letsCigarrillos from "../../assets/letsCigarrillos.jpg"


const BlueCares = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [showInnerPopup, setShowInnerPopup] = useState(null);
  const [activeStep, setActiveStep] = useState(null); // Definición del estado


  const togglePopup = (popupName) => {
    setActivePopup(activePopup === popupName ? null : popupName);
    setShowInnerPopup(null); // Cierra cualquier popup interno si se cambia de popup
  };

  const toggleInnerPopup = (popupName) => {
    setShowInnerPopup(showInnerPopup === popupName ? null : popupName);
  };
  const handleStepClick = (step) => {
    setActiveStep(step); // Actualizar el estado cuando se hace clic en un paso
  };

  return (
    <div className="blueCares-container">
      <img src={bluCaresLogo} alt="Blu Cares Logo" className="blueCares-logo" />
      <h1 className="blueCares-text">ENVIRONMENTAL AND SUSTAINABILITY SOLUTIONS</h1>

      <div className="blueCares-images-container">
        {/* Imagen 1: Popup de baterías de litio */}
        <div className="blueCares-image-block" onClick={() => togglePopup("lithiumPopup")}>
          <img src={BLU_Img_Mar_36} alt="Lithium Batteries" className="blueCares-image" />
          <p className="blueCares-image-text">Lithium Batteries</p>
        </div>

        {/* Imagen 2: Popup de Free Recycling Centers */}
        <div className="blueCares-image-block" onClick={() => togglePopup("freeRecyclingPopup")}>
          <img src={BLU_Img_Mar_35} alt="Free Recycling Centers" className="blueCares-image" />
          <p className="blueCares-image-text">Cigarrete Cones</p>
        </div>

        {/* Imagen 3: Popup de Let's Be Proud */}
        <div className="blueCares-image-block" onClick={() => togglePopup("letsBeProudPopup")}>
          <img src={BLU_Img_Mar_34} alt="Let's Be Proud" className="blueCares-image" />
          <p className="blueCares-image-text">Let's Be Proud</p>
        </div>
      </div>

      <button className="blueCares-button">LEARN MORE</button>

      {/* Popup de baterías de litio */}
      {activePopup === "lithiumPopup" && (
        <div>
          <div className="popup-overlay" onClick={() => togglePopup("lithiumPopup")}></div>
          <div className="popup-batteries">
            <div className="popup-content">
              <h2>Lithium Batteries</h2>
              <p>
                Maximizing the value of used lithium batteries depends on proper management, allowing for the recovery of key materials and reducing environmental impact.
              </p>
              <div className="popup-options">
                <div className="popup-option" onClick={() => toggleInnerPopup("freeRecycling")}>
                  <img src={FreeRecyclingIcon} alt="Free recycling centers" className="popup-option-image" />
                  <p>Free recycling centers</p>
                </div>
                <div className="popup-option" onClick={() => toggleInnerPopup("nationalDropOffs")}>
                  <img src={NationalDropOffsIcon} alt="National Drop-Offs" className="popup-option-image" />
                  <p>National Drop-Offs</p>
                </div>
                <div className="popup-option" onClick={() => toggleInnerPopup("mailLithium")}>
                  <img src={MailLithiumIcon} alt="Mail Lithium Batteries?" className="popup-option-image" />
                  <p>Mail Lithium Batteries?</p>
                </div>
              </div>
              <button className="popup-close" onClick={() => togglePopup("lithiumPopup")}>X</button>
            </div>

            {/* Popup interno de "Free Recycling Centers" */}
            {showInnerPopup === "freeRecycling" && (
              <div>
                <div className="popup-overlay" onClick={() => toggleInnerPopup("freeRecycling")}></div>
                <div className="popup-recycling">
                  <div className="popup-recycling-content">
                    <h2>Lithium Battery Drop-Offs</h2>
                    <div className="recycling-centers-logos">
                      <div className="recycling-center">
                        <img src={The_Home_Depot_Logo} alt="The Home Depot" className="recycling-logo" />
                        <p><strong className="underline-strong">The Home Depot</strong><br />Located near the entrance or customer service area.</p>
                      </div>
                      <div className="recycling-center">
                        <img src={The_Lowes_Logo} alt="Lowe's" className="recycling-logo" />
                        <p><strong className="underline-strong">Lowe's</strong><br />These bins are typically found near the entrance or customer service area.</p>
                      </div>
                      <div className="recycling-center">
                        <img src={The_Best_Buy_Logo} alt="Best Buy" className="recycling-logo" />
                        <p><strong className="underline-strong" >Best Buy</strong><br />Stores feature recycling kiosks at the entrance. Batteries, electronic devices, and lithium batteries are accepted.</p>
                      </div>
                    </div>
                    <p className="recycling-note">
                      These centers work in partnership with <a href="#">Call2Recycle</a>, one of the largest battery recycling programs in the U.S. It’s a good idea to call ahead to verify accepted types of batteries and confirm details.
                    </p>
                    <button className="popup-close" onClick={() => toggleInnerPopup("freeRecycling")}>X</button>
                  </div>
                </div>
              </div>
            )}

            {/* Popup interno de "National Drop-Offs" */}
            {showInnerPopup === "nationalDropOffs" && (
              <div>
                <div className="popup-overlay" onClick={() => toggleInnerPopup("nationalDropOffs")}></div>
                <div className="popup-national">
                  <div className="popup-national-content">
                    <h2 className="styled-h2">National Drop-Offs</h2>
                    <p className="styled-paragraph" >
                      These drop-offs ensure safe and responsible handling, making the process easy.
                    </p>
                    <div className="drop-off-logos">
                      <div className="drop-off-center">
                        <img src={Call_2_Recycle_Logo} alt="Call2Recycle" className="drop-off-logo" />
                        <p><strong className="underline-strong">Call2Recycle</strong><br />Free recycling at collection points nationwide. </p>
                      </div>
                      <div className="drop-off-center">
                        <img src={Battery_Solutions_Logo} alt="Battery Solutions" className="battery-solutions-logo" />
                        <p><strong className="underline-strong" >Battery Solutions</strong><br />Provides recycling kits for national delivery and easy drop-off.</p>
                      </div>
                      <div className="drop-off-center">
                        <img src={Amazon_Recycling_Logo} alt="Amazon Recycling Program" className="drop-off-logo" />
                        <p><strong className="underline-strong">Amazon Recycling Program</strong><br />Offers national drop-off points, with options for mailing or in-store delivery.</p>
                      </div>
                    </div>
                    <p className="national-note">
                      These centers work in partnership with <a href="#">Call2Recycle</a>, one of the largest battery recycling programs in the U.S.
                      It is recommended to call ahead to verify accepted battery types and confirm details.
                    </p>
                    <button className="popup-close" onClick={() => toggleInnerPopup("nationalDropOffs")}>X</button>
                  </div>
                </div>
              </div>
            )}
            {/* aca empieza el pop up a terminar */}






            {/* Popup interno de "Mail Lithium Batteries?" */}
            {showInnerPopup === "mailLithium" && (
              <div>
                <div className="divFix1" onClick={() => toggleInnerPopup("mailLithium")}></div>
                <div className="popup-national ">
                  <div className="divContenedor1">
                    <h2 className="styled-h2">Lithium Battery Shipping Guide</h2>


                    <div className="contenedorDeTodosLosPasos">
  <div className="timeline-circle left"></div> {/* Círculo izquierdo */}
  <div className="timeline-line"></div> {/* Línea que conecta los pasos */}
  <div className="timeline-circle right"></div> {/* Círculo derecho */}

  {/* Paso 1 */}
  <div className={`contenedorDePasosIndividuales ${activeStep === 1 ? 'sombra-seleccionada' : ''}`} onClick={() => handleStepClick(1)}>
    <div className="contenedorDelLogo">
      <img src={Step1} alt="Step 1" className="step-logo" />
      {activeStep === 1 && (
        <div className="textoDelPaso">
          <p><strong>Request a Recycling Kit</strong></p>
          <p>Contact a recycling provider like Call2Recycle or Battery Solutions and request a packaging kit that includes prepaid shipping labels.</p>
        </div>
      )}
    </div>
  </div>

  {/* Paso 2 */}
  <div className={`contenedorDePasosIndividuales ${activeStep === 2 ? 'sombra-seleccionada' : ''}`} onClick={() => handleStepClick(2)}>
    <div className="contenedorDelLogo">
      <img src={Step2} alt="Step 2" className="step-logo" />
      {activeStep === 2 && (
        <div className="textoDelPaso">
          <p><strong>Pack the Batteries</strong></p>
          <p>Once you receive the kit, place the batteries inside the provided packaging according to the instructions. Ensure they are securely packed to prevent any damage during transport.</p>
        </div>
      )}
    </div>
  </div>

  {/* Paso 3 */}
  <div className={`contenedorDePasosIndividuales ${activeStep === 3 ? 'sombra-seleccionada' : ''}`} onClick={() => handleStepClick(3)}>
    <div className="contenedorDelLogo">
      <img src={Step3} alt="Step 3" className="step-logo-3" />
      {activeStep === 3 && (
        <div className="textoDelPaso">
          <p><strong>Schedule the Pickup</strong></p>
          <p>Affix the prepaid shipping label in a visible location. If shipping by air, include a label indicating that it contains lithium batteries.</p>
        </div>
      )}
    </div>
  </div>
</div>
                    <button
                      className="popup-close"
                      onClick={() => {
                        toggleInnerPopup("mailLithium");
                        setActiveStep(1); // Vuelve al paso 1 cuando se cierra el popup
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* aca TERMINA el pop up a terminar */}




      {activePopup === "freeRecyclingPopup" && (
        <div>
          {/* Reemplazamos la clase por popup-overlay para el fondo difuminado */}
          <div className="popup-overlay" onClick={() => togglePopup("freeRecyclingPopup")}></div>
          <div className="freeRecycling-popup">
            <div className="freeRecycling-container">
              <img src={letsCigarrillos} alt="Free Recycling" className="freeRecycling-image" />

              {/* Timeline Positioned Outside */}
              <div className="timeline-container">
                <div className="step-circle">
                  <p>1</p>
                </div>
                <div className="step-line"></div>
                <div className="step-circle">
                  <p>2</p>
                </div>
                <div className="step-line"></div>
                <div className="step-circle">
                  <p>3</p>
                </div>
              </div>

              <div className="freeRecycling-text-overlay">
                <h3>Efficient Collection and Recycling Process:</h3>
                <div className="steps-text">
                  <p><strong>Collection:</strong> Installation of bins on the beaches for disposing of cigarette butts.</p>
                  <p><strong>Recycling Process:</strong> Collected butts are transported to specialized recycling centers.</p>
                  <p><strong>Transformation:</strong> Recycled butts are transformed into useful products.</p>
                </div>
              </div>
            </div>
            <button className="popup-close" onClick={() => togglePopup("freeRecyclingPopup")}>X</button>
          </div>
        </div>
      )}



      {/* Popup de Let's Be Proud */}
      {activePopup === "letsBeProudPopup" && (
        <div>
          <div className="popup-overlay" onClick={() => togglePopup("letsBeProudPopup")}></div>
          <div className="popup-lets">
            <div className="lets-container">
              <img src={lets} alt="lets" className="lets-image" />
              <div className="lets-text-overlay">
                <p>
                  We take pride in caring for our beaches and protecting the environment. Trash collection is essential to preserving the beauty of our oceans. Every small effort counts; together, we can make a significant impact.
                </p>
                <h1>
                  <span className="outline-text">#Let's</span>
                  <span className="filled-text">BeProud</span>
                </h1>
              </div>
              <button className="popup-close" onClick={() => togglePopup("letsBeProudPopup")}>X</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default BlueCares;