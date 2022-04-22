import { useState,useEffect } from 'react';
import ChatBot from './chatbot';
import "./forum.css"



export default function Forum() {
    const [open, setOpen] = useState(false);
    const [threads,setThreads] =useState([]);
    function setOpenUtil()
    {
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
                    threads.map((item, i) => {
                        return (
                            <div className="forum-box">
                            <h5><b>Tags:</b></h5>
                            <div className="forum-box-tags" >
                            	{item.tags.map(tag => <p style={{"margin-right":"10px"}}>{tag}</p>)}
                            </div>
                                <div className="forum-box-title">
                                    {item.question}
                                </div> 
                                <div className="forum-box-text">
                                    {item.answers}
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


    


