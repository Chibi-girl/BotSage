import { useState } from 'react';
import ChatBot from './chatbot';
import "./forum.css"


export default function Forum() {
    const [open, setOpen] = useState(false);
    function setOpenUtil()
    {
        return setOpen(!open);
    }
    const data = [{
        title: "Title-1",
        text: "loywdgiwpigdpwgdi",
    },
    {
        title: "Title-2",
        text: "blah",
    },
    {
        title: "Title-3",
        text: "blah-2",
    },
    {
        title: "Title-1",
        text: "loywdgiwpigdpwgdi",
    },
    {
        title: "Title-2",
        text: "blah",
    },
    {
        title: "Title-3",
        text: "blah-2",
    }

    ]
    return (
        <div className="forum-wrapper">
            <nav className="navigation">
                <a href="/">Home</a>
                <a href="/login">Login</a>
            </nav>
            <div className='information-title'>
                BotSage Forum
            </div>
            <div className="forum-container">
                {
                    data.map((item, i) => {
                        return (
                            <div className="forum-box">
                                <div className="forum-box-title">
                                    {item.title}
                                </div> 
                                <div className="forum-box-text">
                                    {item.text}
                                </div>

                            </div>
                        )
                    })
                }
            </div>
            {open && <ChatBot/>}
            <div className='forum-bot-wrapper' onClick={setOpenUtil}>
            <img src='/images/BotImage.png'/>
            </div>

            
        </div>
    )

}


// export default function Forum(){
//     return(
//         <div className="home-footer">
        
//     </div>
//     )
    


