import React from 'react'

export const DhIcon = ({ className = '', name = "" }) => {
    return (
        <svg className={`icon ${className}`}>
            <use href={`#dh_${name}`}></use>
        </svg>
    )
}
