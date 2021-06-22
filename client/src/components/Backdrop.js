import React from 'react'

import './Backdrop.css'

const Backdrop = ({ show, setSideToggle }) => {
    return (
        <React.Fragment>
         {
            show && (
            <div className="backdrop" onClick={() => setSideToggle(!show)}>
                
            </div>
            )
        }
    </React.Fragment>
    )
}

export default Backdrop
