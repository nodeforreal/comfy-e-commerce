import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

export const links = [
  {
    id: 1,
    label: "home",
    path: "/",
  },
  {
    id: 2,
    label: "about",
    path: "/about",
  },
  {
    id: 3,
    label: "products",
    path: "/products",
  },
  {
    id: 4,
    label: "checkout",
    path: "/checkout",
  },
];

// nav links
export const navLinks = () => {
  const isAuthenticated = true;

  const userNav = links;
  const noneUserNav = links.filter((link) => {
    return !["checkout"].includes(link.label);
  });

  return isAuthenticated ? userNav : noneUserNav;
};

// testimonial

export const testimonialItems = [
  {
    id: 1,
    icon: <GiCompass className="icon" />,
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    title: "Mission",
  },
  {
    id: 2,
    icon: <GiDiamondHard className="icon" />,
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    title: "Vision",
  },
  {
    id: 3,
    icon: <GiStabbedNote className="icon" />,
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    title: "History",
  },
];

export const products_api = "https://course-api.com/react-store-products";

export const single_product_api = `https://course-api.com/react-store-single-product?id=`;
