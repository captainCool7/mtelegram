import React from 'react'
import {Avatar } from '@material-ui/core'
function SidebarThread() {
    return (
        <div className="sidebarThread">
            <Avatar />
            <h3>Thread Name</h3>
            <p>This is the message</p>
            <small>timestamp</small>
        </div>
    )
}

export default SidebarThread
