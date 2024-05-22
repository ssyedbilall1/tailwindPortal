import { FaHome } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

const sidebarLinks = [
  { title: "Home", icon: <FaHome />, link: "home" },
  { title: "Services Status", icon: <FaClipboardList />, link: "service" },
  { title: "Help", icon: <IoMdHelpCircle />, link: "help" },
  { title: "Logout", icon: <IoLogOut />, link: "logout" },
];

export default sidebarLinks;
