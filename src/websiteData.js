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
  {
    title: "All",
    content: [
      {
        status: "In Progress",
        applicationID: 2123,
        cardTitle: "New Water Connection",
        assignedTo: "Assigned To TOI",
      },
      {
        status: "Completed",
        applicationID: 2123,
        cardTitle: "New Water Connection",
        assignedTo: "Assigned To TOI",
      },
      {
        status: "Rejected",
        applicationID: 2123,
        cardTitle: "New Water Connection",
        assignedTo: "Assigned To TOI",
      },
    ],
  },
  {
    title: "In Progress",
    content: [
      {
        status: "In Progress",
        applicationID: 2123,
        cardTitle: "New Water Connection",
        assignedTo: "Assigned To TOI",
      },
      {
        status: "In Progress",
        applicationID: 2123,
        cardTitle: "New Water Connection",
        assignedTo: "Assigned To TOI",
      },
    ],
  },
  {
    title: "Completed",
    content: [
      {
        status: "Completed",
        applicationID: 2123,
        cardTitle: "New Water Connection",
        assignedTo: "Assigned To TOI",
      },
      {
        status: "Completed",
        applicationID: 2123,
        cardTitle: "New Water Connection",
        assignedTo: "Assigned To TOI",
      },
    ],
  },
  {
    title: "Rejected",
    content: [
      {
        status: "Rejected",
        applicationID: 2123,
        cardTitle: "New Water Connection",
        assignedTo: "Assigned To TOI",
      },
      {
        status: "Rejected",
        applicationID: 2123,
        cardTitle: "New Water Connection",
        assignedTo: "Assigned To TOI",
      },
    ],
  },
];

const faqs = [
  {
    title: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
  },
  {
    title: "Where does it come from?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  },
  {
    title: "Where can I get some?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
  },
];
export default sidebarLinks;
export { homepagecards, tabsnames, faqs };
