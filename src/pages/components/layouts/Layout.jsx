import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import MainWrapper from './MainWrapper'
import LeftMenu from './LeftMenu'
import ChatBox from './ChatBox'

const Layout = ({ children }) => {
    const [showChat, setShowChat] = useState(true);
    console.log(showChat)
    useEffect(() => {
        showChat ? document.body.classList.toggle('show-chatboat') : document.body.classList.remove('show-chatboat')
    }, [showChat, setShowChat])
    return (
        <>
            <Header setShowChat={setShowChat} />
            <LeftMenu />
            <MainWrapper children={children} />
            <ChatBox setShowChat={setShowChat} />
            <Footer />
        </>
    )
}

export default Layout



