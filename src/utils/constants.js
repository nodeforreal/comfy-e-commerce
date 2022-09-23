import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

export const navLinks = [
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
];

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
// api
export const products_api = "https://course-api.com/react-store-products";

export const single_product_api = `https://course-api.com/react-store-single-product?id=`;

// sort constants
const SORT_HIGHEST = "SORT_HIGHEST";
const SORT_LOWEST = "SORT_LOWEST";
const SORT_NAME_ASC = "SORT_NAME_ASC";
const SORT_NAME_DESC = "SORT_NAME_DESC";

export { SORT_HIGHEST, SORT_LOWEST, SORT_NAME_ASC, SORT_NAME_DESC };
