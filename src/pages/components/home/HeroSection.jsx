import React from 'react'
import { Button } from '../helpers/ButtonHelper'

const HeroSection = () => {
    return (

        <div className="hero-container d-flex flex-wrap">
            <div className="hero-left">
                <div className="hero-left-content">
                    <h1>Sign Up today and claim your FREE box</h1>
                    <p>Unlock YOUR Free Box Today! Each box is a treasure trove of excitement waiting to be discovered. Don't miss out – dive into the unknown with us!</p>
                    <div className="hero-cta">
                        <Button title="Claim now" />
                    </div>
                </div>
                <div className="hero-left-img">
                    <img src="/images/hero-1.png" alt="" />
                    <span className="hero-left-shape">
                        <img src="/images/hero-shape-1.png" alt="" />
                    </span>
                    <span className='hero-badge one roted'>Free</span>
                    <span className='hero-badge two roted'>Free</span>
                </div>
            </div>
            <div className="hero-right">
                <div className="hero-right-content">
                    <h2>Earn up to 10% on deposits from your friends <span>5%</span></h2>
                    <p>Give your friends a 5% bonus added to all their cash deposits</p>
                    <div className="hero-cta">
                        <Button title="Claim now" variant="primary" />
                    </div>
                </div>
                <div className="hero-right-img">
                    <img src="/images/hero-2.png" alt="" />
                    <span className="hero-right-shape">
                        <img src="/images/hero-shape2.png" alt="" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HeroSection