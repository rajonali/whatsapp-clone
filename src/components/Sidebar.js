import React from 'react';
import {Avatar} from "@material-ui/core";
import '../styles/sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import SearchOutlined from "@material-ui/icons/SearchOutlined"
import SidebarChat from './SidebarChat';

function Sidebar() {

    return (
        <div className="sidebar">

            <div className="sidebar__header">

                <Avatar/>

                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>

            </div>

            <div className="sidebar_search">
            <div className="sidebar__searchContainer">

                <SearchOutlined/>
                <input placeholder="Search ..." type="text"/>

            </div>
            </div>




            <div className="sidebar__chats">
            
            
            
            <SidebarChat addNewChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />

            
            
            </div>
        </div>
    )
};

export default Sidebar;