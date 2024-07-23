import React from 'react'
import './sidebar.css'
import SidebarButton from './sidebarButton';
import { MdFavorite, MdSpaceDashboard } from 'react-icons/md';
import { FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaGripfire } from "react-icons/fa";
import { IoLibrary } from 'react-icons/io5';



export default function Sidebar() {
    return (
        <><div className='sidebar-container'><img
            src='https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1721754863~exp=1721758463~hmac=853499d434bd1fb29bc10ed43ab6ef35df515758225f296ef5454e7475ea9316&w=740'
            className='profile-img'
            alt='profile' />
            <div>
                <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard size={20} />} />
                <SidebarButton title="Trending" to="/trending" icon={<FaGripfire size={20} />} />
                <SidebarButton title="Player" to="/player" icon={<FaPlay size={20} />} />
                <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite size={20} />} />
                <SidebarButton title="Library" to="/" icon={<IoLibrary size={20} />} />

            </div >
            <div className="sign-out"><SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt size={20} />} /></div>


        </div>
        </>

    );

}
