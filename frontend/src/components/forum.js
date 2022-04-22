import { useState, useEffect } from 'react';
import ChatBot from './chatbot';
import "./forum.css"



export default function Forum() {
    const data = [{
        title: "Title -1",
        text: "Text-1"
    },
    {
        title: "Title -2",
        text: "Text-2"
    },
    {
        title: "Title -3",
        text: "Text-3"
    },
    {
        title: "Title -4",
        text: "Text-4"
    },
    {
        title: "Title -5",
        text: "Text-5"
    }
    ]
    const [open, setOpen] = useState(false);
    const [threads, setThreads] = useState({});
    function setOpenUtil() {
        return setOpen(!open);
    }

    useEffect(() => {
        fetch("http://localhost:8080/getThreads")
            .then((res) => res.json())
            .then(
                (result) => {
                    setThreads(result);

                    console.log(threads);


                },
                (error) => {

                    console.log(error);
                }
            )
    }, []);


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
            {open && <ChatBot />}
            <div className='forum-bot-wrapper' onClick={setOpenUtil}>
                <img src='/images/BotImage.png' />
            </div>
        </div>
    )

}





