import React from "react";
import HomeIcon from "../../component/Icons/Home";
import SongIcon from "../../component/Icons/Songs";
import NotificationIcon from "../../component/Icons/Notifications";
import SupportIcon from "../../component/Icons/Support";
import UserIcon from "../../component/Icons/User";
import AlbumIcon from "../../component/Icons/Album";
import MenuDownIcon from "../../component/Icons/Menu-down";
import MenuSideIcon from "../../component/Icons/Menu-up";
import './SingleNavItem'

export const navbarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <HomeIcon className="bg-transparent" />,
  },
  {
    title: "Songs",
    path: "/dasboard/songs",
    icon: <SongIcon className="bg-transparent" />,
  },
  {
    title: "Albums",
    path: "/dashboard/albums",
    icon: <AlbumIcon className="bg-transparent" />,
  },
  {
    title: "Users",
    path: "/dashboard/users/artists",
    icon: <UserIcon className="bg-transparent" />,
    iconOpened: <MenuDownIcon />,
    iconClosed: <MenuSideIcon />,
    subNav: [
      {
        title: "Artists",
        path: "/dashboard/users/artists",
      },
      {
        title: "Listeners",
        path: "/dashboard/users/listeners",
      },
    ],
  },

  {
    title: "Notifications",
    path: "/dashboard/notifications",
    icon: <NotificationIcon className="bg-transparent" />,
  },
  {
    title: "Support",
    path: "/dashboard/support",
    icon: <SupportIcon className="bg-transparent" />,
  },
];
