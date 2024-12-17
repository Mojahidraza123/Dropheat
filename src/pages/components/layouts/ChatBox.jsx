import React from 'react'
import { DhIcon } from '../helpers/IconHelper'

const ChatBox = ({ setShowChat }) => {
    return (
        <div className="chatbox-wrapper">
            <div className="chatbox-head d-flex align-items-center">
                <h6> <DhIcon name='chatIcon' /> Chat</h6>
                <div className="chatbox-head-right d-flex align-items-center">
                    <div className="chatbox-head-count">
                        <span></span>
                        12, 490
                    </div>
                    <button type='button' onClick={() => setShowChat(prev => !prev)} className='chatbox-close'>
                        <DhIcon name='arrowRight' />
                    </button>
                </div>
            </div>
            <div className="chatbox-body">
                <ul className="chatbox-msgs">
                    <li className='chatbox-comment-block d-flex align-items-start'>
                        <div className="chatbox-avatar flex-shrink-0">
                            <img src="/images/avatar.png" alt="" />
                        </div>
                        <div className="chatbox-comment-body">
                            <div className="chatbox-comment-author">
                                coolmate
                                <span>10:13</span>
                            </div>
                            <div className='chatbox-comment'>
                                <p>its been an hour window since it sarted they just always </p>
                            </div>
                        </div>
                    </li>
                    <li className='chatbox-comment-block d-flex align-items-start'>
                        <div className="chatbox-avatar flex-shrink-0">
                            <img src="/images/avatar.png" alt="" />
                        </div>
                        <div className="chatbox-comment-body">
                            <div className="chatbox-comment-author">
                                coolmate
                                <span>10:13</span>
                            </div>
                            <div className='chatbox-comment'>
                                <p>Hello all friends</p>
                            </div>
                        </div>
                    </li>
                    <li className='chatbox-comment-block d-flex align-items-start'>
                        <div className="chatbox-avatar flex-shrink-0">
                            <img src="/images/avatar.png" alt="" />
                        </div>
                        <div className="chatbox-comment-body">
                            <div className="chatbox-comment-author">
                                coolmate
                                <span>10:13</span>
                            </div>
                            <div className='chatbox-comment'>
                                <p>its all time waiting and show now low 😒</p>
                            </div>
                        </div>
                    </li>
                    <li className='chatbox-comment-block d-flex align-items-start'>
                        <div className="chatbox-avatar flex-shrink-0">
                            <img src="/images/avatar.png" alt="" />
                        </div>
                        <div className="chatbox-comment-body">
                            <div className="chatbox-comment-author">
                                coolmate
                                <span>10:13</span>
                            </div>
                            <div className='chatbox-comment'>
                                <p>iPlease provide camera access through your browser or device settings. Click "Allow" when prompted, or adjust settings accordingly.</p>
                            </div>
                        </div>
                    </li>
                    <li className='chatbox-comment-block d-flex align-items-start'>
                        <div className="chatbox-avatar flex-shrink-0">
                            <img src="/images/avatar.png" alt="" />
                        </div>
                        <div className="chatbox-comment-body">
                            <div className="chatbox-comment-author">
                                coolmate
                                <span>10:13</span>
                            </div>
                            <div className='chatbox-comment'>
                                <p>Good luck everybody 🍀</p>
                            </div>
                        </div>
                    </li>
                    <li className='chatbox-comment-block d-flex align-items-start'>
                        <div className="chatbox-avatar flex-shrink-0">
                            <img src="/images/avatar.png" alt="" />
                        </div>
                        <div className="chatbox-comment-body">
                            <div className="chatbox-comment-author">
                                coolmate
                                <span>10:13</span>
                            </div>
                            <div className='chatbox-comment'>
                                <p>Hello all friends</p>
                            </div>
                        </div>
                    </li>
                    <li className='chatbox-comment-block d-flex align-items-start'>
                        <div className="chatbox-avatar flex-shrink-0">
                            <img src="/images/avatar.png" alt="" />
                        </div>
                        <div className="chatbox-comment-body">
                            <div className="chatbox-comment-author">
                                coolmate
                                <span>10:13</span>
                            </div>
                            <div className='chatbox-comment'>
                                <p> how you been mate? It’s been a while</p>
                            </div>
                        </div>
                    </li>
                    <li className='chatbox-comment-block d-flex align-items-start'>
                        <div className="chatbox-avatar flex-shrink-0">
                            <img src="/images/avatar.png" alt="" />
                        </div>
                        <div className="chatbox-comment-body">
                            <div className="chatbox-comment-author">
                                coolmate
                                <span>10:13</span>
                            </div>
                            <div className='chatbox-comment'>
                                <p>Ooooooffff</p>
                            </div>
                        </div>
                    </li>
                    <li className='chatbox-comment-block d-flex align-items-start'>
                        <div className="chatbox-avatar flex-shrink-0">
                            <img src="/images/avatar.png" alt="" />
                        </div>
                        <div className="chatbox-comment-body">
                            <div className="chatbox-comment-author">
                                coolmate
                                <span>10:13</span>
                            </div>
                            <div className='chatbox-comment'>
                                <p>errr how did i move to sports</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="chatbox-footer">
                {/* <form> */}
                <div className="chatbox-form position-relative">
                    <input type="text" className='chatbox-form-input' placeholder='Enter your message' />
                    <div className="chatbox-form-actions position-absolute top-0 end-0 d-flex align-items-center">
                        <button className='chatbort-react-button'><DhIcon name='reactIcon' /></button>
                        <button type='submit' className='chatbort-submit-button'><DhIcon name='sendIcon' /></button>
                    </div>
                </div>
                {/* </form> */}
            </div>
        </div>
    )
}

export default ChatBox