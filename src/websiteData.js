import { FaHome } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import Complaint from "../src/assets/complaint.png";
import Garbage from "../src/assets/garbage.png";
import Sanitation from "../src/assets/sanitation.png";
import Water from "../src/assets/water.png";
const sidebarLinks = [
  { title: "Home", icon: <FaHome />, link: "/" },
  { title: "Services Status", icon: <FaClipboardList />, link: "service" },
  { title: "Help", icon: <IoMdHelpCircle />, link: "help" },
  { title: "Logout", icon: <IoLogOut />, link: "logout" },
];

const homepagecards = [
  { title: "Water", image: Water },
  { title: "Sanitation", image: Sanitation },
  { title: "Garbage Collection", image: Garbage },
  { title: "Other Complaints", image: Complaint },
];
const tabsnames = [
  { title: "All", content: "Tab 1" },
  { title: "In Progress", content: "Tab 2" },
  { title: "Completed", content: "Tab 3" },
  { title: "Rejected", content: "Tab 4" },
];
export default sidebarLinks;
export { homepagecards, tabsnames };
