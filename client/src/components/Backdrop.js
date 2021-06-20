import React from 'react'

import './Backdrop.css'

const Backdrop = ({ show }) => {
    return (
        <React.Fragment>
         {
            show && (<div className="backdrop">
        
            </div>)
        }
    </React.Fragment>
    )
}

export default Backdrop
