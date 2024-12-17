import React, { useEffect } from 'react'
import { DhIcon } from '../helpers/IconHelper'
import Link from 'next/link';

const LeftMenu = () => {
    useEffect(() => {
        const bootstrap = require('bootstrap');
        const tooltipTriggerList = Array.from(
            document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        tooltipTriggerList.forEach((tooltipTriggerEl) => {
            new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }, []);
    return (
        <div className="side-navbar d-none d-lg-flex">
            <div className="side-nav-top">
                <ul className="side-nav-list">
                    <MenuItem className="active" label="Free" router='/about' icon="giftIcon" title="Gifts" />
                    <MenuItem icon="homeIcon" title="Home" />
                    <MenuItem icon="boxIcon" title="Boxes" />
                    <MenuItem icon="battleIcon" title="Battles" />
                    <MenuItem icon="vipIcon" title="VIP Members" />
                    <MenuItem icon="userIcon" title="Affiliates" />
                </ul>
            </div>
            <div className="side-nav-bottom mt-5 pt-5">
                <ul className="side-nav-list">
                    <MenuItem icon="boxIcon" title="News" />
                    <MenuItem icon="battleIcon" title="Email" />
                    <MenuItem icon="vipIcon" title="Help" />
                    <MenuItem icon="userIcon" title="Notes" />
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
    )
}

export default LeftMenu



const MenuItem = ({ title = "tooltip", className, label, icon, router = "/" }) => {
    return (
        <li className="side-nav-item position-relative">
            <Link href={router} className={`side-nav-link ${className ?? ''}`} data-bs-toggle="tooltip" data-bs-custom-class="primary-tooltip" data-bs-placement="right" data-bs-title={title}>
                <DhIcon name={icon} />
                <span></span>
            </Link>
            {label && <label className='side-nav-label'>{label}</label>}
        </li>
    )
}
