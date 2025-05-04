import React from "react"
import '../src/App.css'
import SlidingPane from "react-sliding-pane"
import "react-sliding-pane/dist/react-sliding-pane.css"
import { useState } from "react"

export function SlideP({ isPaneOpen, setIsPaneOpen, handleClick }) {
    const [divColor, setDivColor] = useState('#FF1801')

    const toggleColor = () => {
        setDivColor(prev => prev === '#FF1801' ? '#111111' : '#FF1801')
        
    }

    const divStyle = {
        backgroundColor: divColor,
        color: "black",
    }

  return (
    <>
      <div onClick={() => setIsPaneOpen(true)} className="sidebar_Brgy_Button">
        <p>Barangays</p>
      </div>
      <SlidingPane
        hideHeader={true}
        className="sidebar_Brgy"
        isOpen={isPaneOpen}
        from="left"
        onRequestClose={() => setIsPaneOpen(false)}
      >
        <div className="sidebar_Brgy_Header">
          <h3>Dasmarinas Barangays</h3>
          <p>Click on the Barangay to view details</p>
        </div>
        <div className="sidebar_Brgy_Selector">
          <div onClick={() => (handleClick('Burol_I'), toggleColor())} style={divStyle} className="sidebar_Brgy_Selector_Button"><p>Burol I</p></div>
          <div onClick={() => handleClick('Burol_II')} className="sidebar_Brgy_Selector_Button"><p>Burol II</p></div>
          <div onClick={() => handleClick('Burol_III')} className="sidebar_Brgy_Selector_Button"><p>Burol III</p></div>
          <div onClick={() => handleClick('Burol_Main')} className="sidebar_Brgy_Selector_Button"><p>Burol Main</p></div>
          <div onClick={() => handleClick('Datu_Esmael')} className="sidebar_Brgy_Selector_Button"><p>Datu Esmael</p></div>
          <div onClick={() => handleClick('Emannuel_Bergado_I')} className="sidebar_Brgy_Selector_Button"><p className='lrg'>Emannuel Bergado I</p></div>
          <div onClick={() => handleClick('Emannuel_Bergado_II')} className="sidebar_Brgy_Selector_Button"><p className='lrg'>Emannuel Bergado II</p></div>
          <div onClick={() => handleClick('Fatima_I')} className="sidebar_Brgy_Selector_Button"><p>Fatima I</p></div>
          <div onClick={() => handleClick('Fatima_I(2)')} className="sidebar_Brgy_Selector_Button"><p>Fatima I(2)</p></div>
          <div onClick={() => handleClick('Fatima_II')} className="sidebar_Brgy_Selector_Button"><p>Fatima II</p></div>
          <div onClick={() => handleClick('Fatima_III')} className="sidebar_Brgy_Selector_Button"><p>Fatima III</p></div>
          <div onClick={() => handleClick('H2')} className="sidebar_Brgy_Selector_Button"><p>H2</p></div>
          <div onClick={() => handleClick('Langkaan_I')} className="sidebar_Brgy_Selector_Button"><p>Langkaan I</p></div>
          <div onClick={() => handleClick('Langkaan_II')} className="sidebar_Brgy_Selector_Button"><p>Langkaan II</p></div>
          <div onClick={() => handleClick('Luzviminda_I')} className="sidebar_Brgy_Selector_Button"><p>Luzviminda I</p></div>
          <div onClick={() => handleClick('Luzviminda_II')} className="sidebar_Brgy_Selector_Button"><p>Luzviminda II</p></div>
          <div onClick={() => handleClick('Paliparan_I')} className="sidebar_Brgy_Selector_Button"><p>Paliparan I</p></div>
          <div onClick={() => handleClick('Paliparan_II')} className="sidebar_Brgy_Selector_Button"><p>Paliparan II</p></div>
          <div onClick={() => handleClick('Paliparan_III')} className="sidebar_Brgy_Selector_Button"><p>Paliparan III</p></div>
          <div onClick={() => handleClick('Sabang')} className="sidebar_Brgy_Selector_Button"><p>Sabang</p></div>
          <div onClick={() => handleClick('Salawag')} className="sidebar_Brgy_Selector_Button"><p>Salawag</p></div>
          <div onClick={() => handleClick('Salitran_I')} className="sidebar_Brgy_Selector_Button"><p>Salitran I</p></div>
          <div onClick={() => handleClick('Salitran_II')} className="sidebar_Brgy_Selector_Button"><p>Salitran II</p></div>
          <div onClick={() => handleClick('Salitran_III')} className="sidebar_Brgy_Selector_Button"><p>Salitran III</p></div>
          <div onClick={() => handleClick('Salitran_IV')} className="sidebar_Brgy_Selector_Button"><p>Salitran IV</p></div>
          <div onClick={() => handleClick('Sampaloc_I')} className="sidebar_Brgy_Selector_Button"><p>Sampaloc I</p></div>
          <div onClick={() => handleClick('Sampaloc_II')} className="sidebar_Brgy_Selector_Button"><p>Sampaloc II</p></div>
          <div onClick={() => handleClick('Sampaloc_II(2)')} className="sidebar_Brgy_Selector_Button"><p>Samaploc II(2)</p></div>
          <div onClick={() => handleClick('Sampaloc_III')} className="sidebar_Brgy_Selector_Button"><p>Sampaloc III</p></div>
          <div onClick={() => handleClick('Sampaloc_IV')} className="sidebar_Brgy_Selector_Button"><p>Sampaloc IV</p></div>
          <div onClick={() => handleClick('Sampaloc_V')} className="sidebar_Brgy_Selector_Button"><p>Sampaloc V</p></div>
          <div onClick={() => handleClick('San_Agustin_I')} className="sidebar_Brgy_Selector_Button"><p>San Agustin I</p></div>
          <div onClick={() => handleClick('San_Agustin_II')} className="sidebar_Brgy_Selector_Button"><p>San Agustin II</p></div>
          <div onClick={() => handleClick('San_Agustin_III')} className="sidebar_Brgy_Selector_Button"><p>San Agustin III</p></div>
          <div onClick={() => handleClick('San_Andres_I')} className="sidebar_Brgy_Selector_Button"><p>San Andres I</p></div>
          <div onClick={() => handleClick('San_Andres_II')} className="sidebar_Brgy_Selector_Button"><p>San Andres II</p></div>
          <div onClick={() => handleClick('San_Antonio_De_Padua_I')} className="sidebar_Brgy_Selector_Button"><p className="lrg">San Antonio De Padua I</p></div>
          <div onClick={() => handleClick('San_Antonio_De_Padua_II')} className="sidebar_Brgy_Selector_Button"><p className="lrg">San Antonio De Padua II</p></div>
          <div onClick={() => handleClick('San_Dionisio')} className="sidebar_Brgy_Selector_Button"><p>San Dionisio</p></div>
          <div onClick={() => handleClick('San_Francisco_I')} className="sidebar_Brgy_Selector_Button"><p>San Francisco I</p></div>
          <div onClick={() => handleClick('San_Francisco_I001')} className="sidebar_Brgy_Selector_Button"><p>San Francisco I(1)</p></div>
          <div onClick={() => handleClick('San_Francisco_I(2)')} className="sidebar_Brgy_Selector_Button"><p>San Francisco I(2)</p></div>
          <div onClick={() => handleClick('San_IL_I')} className="sidebar_Brgy_Selector_Button"><p>San Ildefonso I</p></div>
          <div onClick={() => handleClick('San_IL_II')} className="sidebar_Brgy_Selector_Button"><p>San Ildefonso II</p></div>
          <div onClick={() => handleClick('San_Jose')} className="sidebar_Brgy_Selector_Button"><p>San Jose</p></div>
          <div onClick={() => handleClick('San_Juan')} className="sidebar_Brgy_Selector_Button"><p>San Juan</p></div>
          <div onClick={() => handleClick('San_Lorenzo_Ruis_I')} className="sidebar_Brgy_Selector_Button"><p className="lrg">San Lorenzo Ruis I</p></div>
          <div onClick={() => handleClick('San_Lorenzo_Ruis_II')} className="sidebar_Brgy_Selector_Button"><p className="lrg">San Lorenzo Ruis II</p></div>
          <div onClick={() => handleClick('San_Luis_I')} className="sidebar_Brgy_Selector_Button"><p>San Luis I</p></div>
          <div onClick={() => handleClick('San_Luis_II')} className="sidebar_Brgy_Selector_Button"><p>San Luis II</p></div>
          <div onClick={() => handleClick('San_Manuel_I')} className="sidebar_Brgy_Selector_Button"><p>San Manuel I</p></div>
          <div onClick={() => handleClick('San_Manuel_II')} className="sidebar_Brgy_Selector_Button"><p>San Manuel II</p></div>
          <div onClick={() => handleClick('San_Mateo')} className="sidebar_Brgy_Selector_Button"><p>San Mateo</p></div>
          <div onClick={() => handleClick('San_Miguel_I')} className="sidebar_Brgy_Selector_Button"><p>San Miguel I</p></div>
          <div onClick={() => handleClick('San_Miguel_II')} className="sidebar_Brgy_Selector_Button"><p>San Miguel II</p></div>
          <div onClick={() => handleClick('San_Nicholas_I')} className="sidebar_Brgy_Selector_Button"><p>San Nicholas I</p></div>
          <div onClick={() => handleClick('San_Nicholas_II')} className="sidebar_Brgy_Selector_Button"><p>San Nicholas II</p></div>
          <div onClick={() => handleClick('San_Roque')} className="sidebar_Brgy_Selector_Button"><p>San Roque</p></div>
          <div onClick={() => handleClick('San_Simon')} className="sidebar_Brgy_Selector_Button"><p>San Simon</p></div>
          <div onClick={() => handleClick('Santa_Cristina_I')} className="sidebar_Brgy_Selector_Button"><p>Santa Cristina I</p></div>
          <div onClick={() => handleClick('Santa_Cristina_II')} className="sidebar_Brgy_Selector_Button"><p>Santa Cristina II</p></div>
          <div onClick={() => handleClick('Santa_Cruz_I')} className="sidebar_Brgy_Selector_Button"><p>Santa Cruz I</p></div>
          <div onClick={() => handleClick('Santa_Cruz_II')} className="sidebar_Brgy_Selector_Button"><p>Santa Cruz II</p></div>
          <div onClick={() => handleClick('Santa_Lucia')} className="sidebar_Brgy_Selector_Button"><p>Santa Lucia</p></div>
          <div onClick={() => handleClick('Santa_Maria')} className="sidebar_Brgy_Selector_Button"><p>Santa Maria</p></div>
          <div onClick={() => handleClick('Santo_Cristo')} className="sidebar_Brgy_Selector_Button"><p>Santo Cristo</p></div>
          <div onClick={() => handleClick('Sant0_Estoban')} className="sidebar_Brgy_Selector_Button"><p>Santo Estoban</p></div>
          <div onClick={() => handleClick('Santo_Nino_I')} className="sidebar_Brgy_Selector_Button"><p>Santo Niño I</p></div>
          <div onClick={() => handleClick('Santo_Nino_II')} className="sidebar_Brgy_Selector_Button"><p>Santo Niño II</p></div>
          <div onClick={() => handleClick('Santo_Peter_I')} className="sidebar_Brgy_Selector_Button"><p>Santo Peter I</p></div>
          <div onClick={() => handleClick('Santo_Peter_II')} className="sidebar_Brgy_Selector_Button"><p>Santo Peter II</p></div>
          <div onClick={() => handleClick('Victoria_Reyes')} className="sidebar_Brgy_Selector_Button"><p>Victoria Reyes</p></div>
          <div onClick={() => handleClick('Zone_I')} className="sidebar_Brgy_Selector_Button"><p>Zone I</p></div>
          <div onClick={() => handleClick('Zone_IA')} className="sidebar_Brgy_Selector_Button"><p>Zone IA</p></div>
          <div onClick={() => handleClick('Zone_II')} className="sidebar_Brgy_Selector_Button"><p>Zone II</p></div>
          <div onClick={() => handleClick('Zone_III')} className="sidebar_Brgy_Selector_Button"><p>Zone III</p></div>
          <div onClick={() => handleClick('Zone_IV')} className="sidebar_Brgy_Selector_Button"><p>Zone IV</p></div>
        </div>
      </SlidingPane>
    </>
  )
}
