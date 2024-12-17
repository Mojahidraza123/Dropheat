import React from 'react'

const LiveDropsCard = ({ item }) => {
    return (
        <div className="live-drops-card" id={item.id} style={{ '--bgColor': item.color }}>
            <div className="live-drops-icon">
                <img src={item.icon} alt="" />
            </div>
            <div className="live-drops-content">
                <h5>${item.price}.00</h5>
                <div className='live-drops-inn'>
                    <img src="/images/avatar-2.png" alt="" />
                    {item.title}
                </div>
            </div>
        </div>
    )
}

export default LiveDropsCard