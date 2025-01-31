import React, {useState, useEffect} from 'react'
import Avatar from "@material-ui/core/Avatar";
import '../styles/sidebarchat.css'






function SidebarChat({ addNewChat }) {
    
    const [seed, setSeed] = useState('');


    useEffect(() => {
            setSeed(Math.floor(Math.random() * 5000))
    }, [])


    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if (roomName) {
            // do some stuff
        }
    };


    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>roomname</h2>
                <p>lastmessage</p>
            </div>
        </div>
    ):(
        <div onClick={createChat}
        className="sidebarChat">
        <h2>Add New Chat</h2>
        </div>
    )
}

export default SidebarChat
