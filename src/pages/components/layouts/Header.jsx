import React from 'react'
import { DhIcon } from '../helpers/IconHelper'
import { Button } from '../helpers/ButtonHelper'
import Link from 'next/link'

const Header = ({ setShowChat }) => {
    return (
        <>
            <header id='header'>
                <nav className="navbar d-flex flex-wrap align-items-center navbar-expand-xxl">
                    <a className="navbar-brand" href="#">
                        <img className='d-none d-lg-block' src="images/logo.svg" alt="" />
                        <img className='d-lg-none' src="images/logo-mob.png" alt="" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="header-menu-wrapper">
                            <ul className="header-menu-list d-flex flex-wrap">
                                <li className="header-menu-item">
                                    <a href="#" className="header-menu-link">
                                        <span>
                                            <DhIcon name='homeIcon' />
                                        </span>
                                        Home
                                    </a>
                                </li>
                                <li className="header-menu-item">
                                    <a href="#" className="header-menu-link">
                                        <span>
                                            <DhIcon name='boxIcon' />
                                        </span>
                                        Boxes
                                    </a>
                                </li>
                                <li className="header-menu-item">
                                    <a href="#" className="header-menu-link">
                                        <span>
                                            <DhIcon name='battleIcon' />
                                        </span>
                                        Battles
                                    </a>
                                </li>
                                <li className="header-menu-item">
                                    <a href="#" className="header-menu-link">
                                        <span>
                                            <DhIcon name='vipIcon' />
                                        </span>
                                        VIP Members
                                    </a>
                                </li>
                                <li className="header-menu-item">
                                    <a href="#" className="header-menu-link">
                                        <span>
                                            <DhIcon name='userIcon' />
                                        </span>
                                        Affiliates
                                    </a>
                                </li>
                            </ul>
                            <div className="d-lg-none mt-auto pt-4">
                                <ul className="side-nav-list">
                                    <li className="side-nav-item position-relative">
                                        <Link href='#' className='side-nav-link'>
                                            <DhIcon name='boxIcon' />
                                            <span></span>
                                        </Link>
                                    </li>
                                    <li className="side-nav-item position-relative">
                                        <Link href='#' className='side-nav-link'>
                                            <DhIcon name='battleIcon' />
                                            <span></span>
                                        </Link>
                                    </li>
                                    <li className="side-nav-item position-relative">
                                        <Link href='#' className='side-nav-link'>
                                            <DhIcon name='vipIcon' />
                                            <span></span>
                                        </Link>
                                    </li>
                                    <li className="side-nav-item position-relative">
                                        <Link href='#' className='side-nav-link'>
                                            <DhIcon name='userIcon' />
                                            <span></span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="side-social-links">
                                    <a href='' target='_blank' className="side-social-link">
                                        <DhIcon name="twitter" />
                                    </a>
                                    <a href='' target='_blank' className="side-social-link">
                                        <DhIcon name="instagram" />
                                    </a>
                                    <a href='' target='_blank' className="side-social-link">
                                        <DhIcon name="fm" />
                                    </a>
                                    <a href='' target='_blank' className="side-social-link">
                                        <DhIcon name="youtube" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-right-actions d-flex align-items-center">
                        <div className="hr-action">
                            <div className="dropdown">
                                <button className="hra-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span><img src="/images/country.svg" alt="" /></span>
                                    EN
                                    <DhIcon name='arrowDown' />
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="hra-item" href="#">Action</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="hr-action d-none d-md-block">
                            <div className="dropdown">
                                <button className="hra-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <DhIcon name='coinIcon' />
                                    USD
                                    <DhIcon name='arrowDown' />
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="hra-item" href="#">Action</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="hr-action">
                            <Button title='Authorization' />
                        </div>
                        <div className="hr-action">
                            <button type='button' onClick={() => setShowChat(prev => !prev)} className="toggle-chat-btn">
                                <DhIcon name='chatIcon' />
                            </button>
                        </div>
                        <button onClick={() => setShowChat(true)} className="toggle-chat-btn d-xxl-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <DhIcon name='toggleIcon' />
                        </button>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header