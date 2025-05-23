import { SiInstagram, SiFacebook, SiX } from "react-icons/si";
import { FiBox, FiUser, FiStar } from "react-icons/fi";

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
  {
    href: `/furnitures?category=others`,
    iconSrc: "/icons/others.svg",
    label: "Others",
  },
];

export const furnitures = [
  {
    slug: "cozy-bed",
    name: "Cozy Bed",
    image: "/images/bed-1.png",
    category: "bed",
    price: 450,
  },
  {
    slug: "urban-bed",
    name: "Urban Bed",
    image: "/images/bed-2.png",
    category: "bed",
    price: 520,
  },
  {
    slug: "classic-armchair",
    name: "Classic Armchair",
    image: "/images/chair-1.png",
    category: "chair",
    price: 280,
  },
  {
    slug: "linen-armchair",
    name: "Linen Armchair",
    image: "/images/chair-2.png",
    category: "chair",
    price: 310,
  },
  {
    slug: "oak-closet",
    name: "Oak Closet",
    image: "/images/closet-1.png",
    category: "closet",
    price: 600,
  },
  {
    slug: "writer-desk",
    name: "Writer Desk",
    image: "/images/desk-1.png",
    category: "desk",
    price: 220,
  },
  {
    slug: "studio-desk",
    name: "Studio Desk",
    image: "/images/desk-2.png",
    category: "desk",
    price: 250,
  },
  {
    slug: "wooden-shelf",
    name: "Wooden Shelf",
    image: "/images/shelf-1.png",
    category: "shelf",
    price: 180,
  },
  {
    slug: "metal-shelf",
    name: "Metal Shelf",
    image: "/images/shelf-2.png",
    category: "shelf",
    price: 190,
  },
  {
    slug: "cloud-sofa",
    name: "Cloud Sofa",
    image: "/images/sofa-1.png",
    category: "sofa",
    price: 750,
  },
];

export const reasons = [
  {
    Icon: FiBox,
    title: "Easy Returns",
    description:
      "Our return policy is simple and that is why customers love our shop.",
  },
  {
    Icon: FiUser,
    title: "Customer Service",
    description: "We offer amazing customer service no matter what happens.",
  },
  {
    Icon: FiStar,
    title: "High Quality",
    description:
      "All of our furnitures go through very strict inspection before we dispatch them.",
  },
];

export const reviews = [
  {
    name: "Sophia Martinez",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "Absolutely love my new sofa! It's super comfy, stylish, and fits my space perfectly.",
  },
  {
    name: "Liam Johnson",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    content:
      "Fast delivery, great quality, and very easy to assemble. Exceeded my expectations!",
  },
  {
    name: "Emily Chen",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    content:
      "The armchair looks amazing in my reading nook. Comfortable and beautifully made!",
  },
];

export const footerLinks = {
  categories: [
    {
      href: "/furnitures?category=sofa",
      label: "Sofa",
    },
    {
      href: "/furnitures?category=bed",
      label: "Bed",
    },
    {
      href: "/furnitures?category=desk",
      label: "Desk",
    },
    {
      href: "/furnitures?category=chair",
      label: "Chair",
    },
    {
      href: "/furnitures?category=closet",
      label: "Closet",
    },
    {
      href: "/furnitures?category=shelf",
      label: "Shelf",
    },
    {
      href: "/furnitures?category=others",
      label: "Others",
    },
  ],
  legal: [
    {
      href: "/",
      label: "Terms of Service",
    },
    {
      href: "/",
      label: "Privacy Policy",
    },
    {
      href: "/",
      label: "Returns Policy",
    },
    {
      href: "/",
      label: "Shipping",
    },
    {
      href: "/",
      label: "Data Protection",
    },
  ],
  company: [
    {
      href: "/",
      label: "About",
    },
    {
      href: "/",
      label: "Faq",
    },
    {
      href: "/",
      label: "Contact",
    },
    {
      href: "/",
      label: "Careers",
    },
    {
      href: "/",
      label: "Vision",
    },
    {
      href: "/",
      label: "Culture",
    },
  ],
};
