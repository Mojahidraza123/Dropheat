import Link from 'next/link'
import React from 'react'

export const Button = ({ title, route, variant, action, size = '' }) => {
    return (
        <Link
            href={route ? route : ""}
            onClick={action ?? null}
            className={`btn ${size ? `btn-${size}` : ''} btn-${variant ? variant : 'default'}`}
        >
            {title}
        </Link>
    )
}
