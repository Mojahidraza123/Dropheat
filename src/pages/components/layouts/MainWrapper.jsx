import { main } from '@popperjs/core'
import React from 'react'

const MainWrapper = (props) => {
    return (
        <main id='main'>
            <div className="main-body">
                {props.children}
            </div>
        </main>
    )
}

export default MainWrapper