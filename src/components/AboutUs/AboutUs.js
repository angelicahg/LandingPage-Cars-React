import React from 'react'

import classes from './AboutUs.module.css'
import logo from '../../assets/logos/auto cars (1).png'
import vehicles from '../../assets/about/interior.jpeg'
import agreement from '../../assets/about/agreement.jpeg'
import carkeys from '../../assets/about/carkeys.jpg'

const AboutUs = () => {
  return (
      <div id='quienessomos'>
          <h1 className={classes.aboutTitle}>QUIÉNES SOMOS</h1>
          <div className={classes.panel}>
              <div 
                className={classes.panelImage}
              >
                <div 
                  className={classes.imageWrapper}
                  style={
                    {
                      width: '230px',
                      height: '230px'
                    }
                  }
                >
                  <img src={logo} alt='logo' className={classes.imageElement}/>
                </div>
              </div>
              <div className={classes.panelInfo}>
                <h2 className={classes.panelTitle}>SOBRE NOSOTROS</h2>
                <p className={classes.panelParagraph}>
                <br></br>
                Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend vehicula auctor, nascetur platea neque aliquet sapien interdum mattis imperdiet varius. 
                </p>
              </div>
          </div>
          <div className={classes.panelReverse}>
            <div className={classes.panelImage}>
              <div className={classes.imageWrapper}>
                <img src={vehicles} alt='vehiculos' className={classes.imageElement}/>
              </div>
            </div>
            <div className={classes.panelInfo}>
              <h2 className={classes.panelTitle}>NUESTROS VEHÍCULOS</h2>
              <p className={classes.panelParagraph}>
                <br></br>
              Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend vehicula auctor, nascetur platea neque aliquet sapien interdum mattis imperdiet varius. 
              </p>
            </div>
          </div>
          <div className={classes.panel}>
            <div className={classes.panelImage}>
              <div className={classes.imageWrapper}>
                <img src={agreement} alt='financiamiento' className={classes.imageElement}/>
              </div>
            </div>
            <div className={classes.panelInfo}>
              <h2 className={classes.panelTitle}>FINANCIAMIENTO BANCARIO</h2>
              <ul className={classes.panelList}>
                
                <li> Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend vehicula auctor</li>
                <li>nascetur platea neque aliquet sapien interdum mattis imperdiet varius.</li>
                <li>mattis imperdiet varius.</li>
               
              </ul>
            </div>
          </div>
          <div className={classes.panelReverse}>
            <div className={classes.panelImage}>
              <div className={classes.imageWrapper}>
                <img src={carkeys} alt='pagos' className={classes.imageElement}/>
              </div>
            </div>
            <div className={classes.panelInfo}>
              <h2 className={classes.panelTitle}>OTRAS FORMAS DE PAGO</h2>
              <p className={classes.panelParagraph}>
               
              Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend vehicula auctor
              </p>
            </div>
          </div>
      </div>
  )
}

export default AboutUs