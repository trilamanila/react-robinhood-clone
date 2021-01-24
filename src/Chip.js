import React from 'react'
import './Chip.css'

function Chip(props) {
    return (
        <div className="chip">
            <div className="chip_avatar">
                <img src={props.image} width={10} height={10} />
            </div>
            <div className="chip_label">
                <span>{props.label}</span>
            </div>
            
        </div>
    )
}

export default Chip
