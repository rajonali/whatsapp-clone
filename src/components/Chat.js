import React, {useEffect, useState} from 'react'
import "../styles/chat.css";
import {AttachFile, SearchOutlined, MoreVert} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';


import Avatar from '@material-ui/core/Avatar'


function Chat() {
    const [seed,
        setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/female/${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>

<div class="chat__headerRight">
    <IconButton>
        <SearchOutlined />
    </IconButton>
    <IconButton>
        <AttachFile />
    </IconButton>

    <IconButton>
        <MoreVert />
    </IconButton>


</div>
            </div>
            <div className="chat__body">
                <p className="chat__message">Hey guys</p>
                <span className="chat__name">Tas</span>

            </div>
            <div className="chat__footer"></div>

        </div>
    )
}

export default Chat
