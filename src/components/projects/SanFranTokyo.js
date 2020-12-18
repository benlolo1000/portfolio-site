import React from 'react'
import mockUp from '../../images/SanFranTokyo.png'

const SanFranTokyo = () => {
    return (
        <>
            <h1 className="projectHeader">SanFranTokyo</h1>
            <div className="projectDetails">
                <img className="mockUp" src={mockUp} alt="SanFranTokyo"></img>
                <p className="projDescription">
                San Fran tokoyo is a static restaurant webdesign 
                </p>
            </div>
        </>
    )
}

export default SanFranTokyo
