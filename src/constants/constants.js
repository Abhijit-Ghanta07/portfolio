import { BiHomeAlt2, BiCodeBlock } from "react-icons/bi";
import {
  AiOutlineControl,
  AiOutlineUserSwitch,
  AiOutlineProject,
} from "react-icons/ai";
export const navbarLinks = [
  {
    id: 1,
    linkName: "home",
    icon: BiHomeAlt2,
    reLink: "home",
  },
  {
    id: 2,
    linkName: "projects",
    icon: AiOutlineProject,
    reLink: "projects",
  },
  {
    id: 3,
    linkName: "about me",
    icon: AiOutlineUserSwitch,
    reLink: "aboutme",
  },
  {
    id: 1,
    linkName: "blog",
    icon: BiCodeBlock,
    reLink: "blog",
  },
  {
    id: 4,
    linkName: "contract me",
    icon: AiOutlineControl,
    reLink: "contract",
  },
];
