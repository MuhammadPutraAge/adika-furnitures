import { SiInstagram, SiFacebook, SiX } from "react-icons/si";

export const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/furnitures",
    label: "Furnitures",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export const socialLinks = [
  {
    href: "https://www.instagram.com/",
    Icon: SiInstagram,
  },
  {
    href: "https://www.facebook.com/",
    Icon: SiFacebook,
  },
  {
    href: "https://www.x.com/",
    Icon: SiX,
  },
];

export const categories = [
  {
    href: `/furnitures?category=sofa`,
    iconSrc: "/icons/sofa.svg",
    label: "Sofa",
  },
  {
    href: `/furnitures?category=bed`,
    iconSrc: "/icons/bed.svg",
    label: "Bed",
  },
  {
    href: `/furnitures?category=desk`,
    iconSrc: "/icons/desk.svg",
    label: "Desk",
  },
  {
    href: `/furnitures?category=chair`,
    iconSrc: "/icons/chair.svg",
    label: "Chair",
  },
  {
    href: `/furnitures?category=closet`,
    iconSrc: "/icons/closet.svg",
    label: "Closet",
  },
  {
    href: `/furnitures?category=shelf`,
    iconSrc: "/icons/shelf.svg",
    label: "Shelf",
  },
];
