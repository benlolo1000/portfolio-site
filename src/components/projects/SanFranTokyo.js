import React from 'react'
import mockUp from '../../images/SanFranTokyo.png'
import Buttons from '../buttons/Buttons'

const SanFranTokyo = () => {
    return (
        <>
            <h1 className="projectHeader">SanFranTokyo</h1>
            <div className="projectDetails">
                <img className="mockUp" src={mockUp} alt="SanFranTokyo"></img>
                <div className="right">
                <p className="projDescription">
                SanFranTokyo is an online storefront created for a brick and mortar restaurant.
                Users can view, select, and purchase items from the storefront, as well as find 
                basic info about the restaurant such as hours, and location.  
                </p>
                <Buttons />
                </div>
            </div>
        </>
    )
}

export default SanFranTokyo
