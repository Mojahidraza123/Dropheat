import React from 'react'
import { DhIcon } from '../helpers/IconHelper'

const Footer = () => {
    return (
        <footer id="footer">
            <div class="footer-box d-flex align-items-center">
                <ul class="footer-review-list d-flex">
                    <li><DhIcon name='trustpoilot' /></li>
                    <li><DhIcon name='trustpoilot' /></li>
                    <li><DhIcon name='trustpoilot' /></li>
                    <li><DhIcon name='trustpoilot' /></li>
                    <li><DhIcon name='trustpoilot' /></li>
                </ul>
                <ul class="footer-links d-flex flex-wrap">
                    <li><a class="footer-link" href="#!">AML Policy</a></li>
                    <li><a class="footer-link" href="#!">Cookie Policy</a></li>
                    <li><a class="footer-link" href="#!">Contact</a></li>
                    <li><a class="footer-link" href="#!">Terms Of Service</a></li>
                    <li><a class="footer-link" href="#!">Blog</a></li>
                    <li><a class="footer-link" href="#!">FAQ</a></li>
                    <li><a class="footer-link" href="#!">Provably Fair</a></li>
                    <li><a class="footer-link" href="#!">Privacy Statement</a></li>
                </ul>
                <ul class="footer-social-links d-flex">
                    <li><a className='footer-social-link' href="#!"><DhIcon name='twitter' /></a></li>
                    <li><a className='footer-social-link' href="#!"><DhIcon name='instagram' /></a></li>
                    <li><a className='footer-social-link' href="#!"><DhIcon name='fm' /></a></li>
                    <li><a className='footer-social-link' href="#!"><DhIcon name='youtube' /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer