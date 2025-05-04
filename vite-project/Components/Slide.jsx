import React, { Component, useState } from "react"
import '../src/App.css'
import SlidingPane from "react-sliding-pane"
import { PassName } from "../Components/Map.jsx"
import "react-sliding-pane/dist/react-sliding-pane.css"

export function SlideP({ isPaneOpen, setIsPaneOpen }) {

    return (
        <>
            <div onClick={ () => setIsPaneOpen(true) } 
            className="sidebar_Brgy_Button"><p>Barangays</p></div>
            <SlidingPane 
                hideHeader={true}  
                className="sidebar_Brgy"
                isOpen={isPaneOpen}
                from="left"
                title="Dasmarinas Barangays"
                subtitle="Click outside to close panel"
                onRequestClose={() => setIsPaneOpen(false) }
            >
            <div className="sidebar_Brgy_Header">
                <h3>Dasmarinas Barangays</h3>
                <p>Click on the Barangay to view details</p>
            </div>
            <div className="sidebar_Brgy_Selector">
                <div onClick={() => PassName('Burol_I', 'Burol_I')}
                className="sidebar_Brgy_Selector_Button">
                    <p>Burol_I</p>
                </div>
                <div className="sidebar_Brgy_Selector_Button">
                    <p>Burol_II</p>
                </div>
                <div className="sidebar_Brgy_Selector_Button">
                    <p>Burol_III</p>
            </div>
                </div>
            </SlidingPane>
        </>
    )
}