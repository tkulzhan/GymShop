import { useAppDispatch } from "./redux";
import { setItems } from "../slices/itemsSlice";

const data = [
  {
    id: 1,
    title: "Title",
    imgs: [
      "https://www.hammer-fitness.ch/ch-en/media/catalog/product/6/7/6720_kurzhantel-hauptbild-1200.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
    ],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id massa semper, accumsan enim quis, eleifend nunc. Mauris maximus leo a laoreet lobortis. Sed a laoreet lacus, ut aliquet nisl.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [],
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    imgs: [
      "https://i.ebayimg.com/images/g/6K0AAOSwGldeKqq5/s-l500.jpg",
      "https://cdn.webshopapp.com/shops/281654/files/392744583/dumbbells-vinyl.jpg",
      "https://www.rehabmart.com/imagesfromrd/hausmann_dumbells.jpg",
      "https://inclinehealth.com.au/wp-content/uploads/2022/02/Vinyl-Dumbbells-%E2%80%93-1.5-KG-PINK.jpg",
      "https://i.ebayimg.com/images/g/6K0AAOSwGldeKqq5/s-l500.jpg",
    ],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id massa semper, accumsan enim quis, eleifend nunc. Mauris maximus leo a laoreet lobortis. Sed a laoreet lacus, ut aliquet nisl.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 3,
    title: "Title",
    imgs: [
      "https://cdn.shopify.com/s/files/1/1182/3402/products/434386a.jpg?v=1656898941",
    ],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id massa semper, accumsan enim quis, eleifend nunc. Mauris maximus leo a laoreet lobortis. Sed a laoreet lacus, ut aliquet nisl.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [],
  },
  {
    id: 4,
    title: "Title",
    imgs: [
      "https://img1.cgtrader.com/items/35156/e59a56ae6c/large/gym-equipment-bench-press-with-variable-seat-angle-3d-model.jpg",
    ],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id massa semper, accumsan enim quis, eleifend nunc. Mauris maximus leo a laoreet lobortis. Sed a laoreet lacus, ut aliquet nisl.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [],
  },
  {
    id: 5,
    title: "Title",
    imgs: [
      "https://cdn.shopify.com/s/files/1/0599/3624/3866/products/PSSS0010-Primal-Strength-Alpha-Commercial-Fitness-Elite-ISO-Full-Back-Row_88108503-ed44-41ff-b980-ebf5c3efaa4a.jpg?v=1646481656",
    ],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id massa semper, accumsan enim quis, eleifend nunc. Mauris maximus leo a laoreet lobortis. Sed a laoreet lacus, ut aliquet nisl.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [],
  },
  {
    id: 6,
    title: "Title",
    imgs: [
      "https://publish.purewow.net/wp-content/uploads/sites/2/2021/01/best-home-gym-equipment-bars.jpg?fit=680%2C489",
    ],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id massa semper, accumsan enim quis, eleifend nunc. Mauris maximus leo a laoreet lobortis. Sed a laoreet lacus, ut aliquet nisl.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [],
  },
  {
    id: 7,
    title: "Title",
    imgs: [
      "https://media.gq.com/photos/62d6d6f291f8f44bbcc9d235/4:3/w_1500,h_1125,c_limit/protein-art.jpg",
    ],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id massa semper, accumsan enim quis, eleifend nunc. Mauris maximus leo a laoreet lobortis. Sed a laoreet lacus, ut aliquet nisl.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [],
  },
  {
    id: 8,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgs: ["https://cf.shopee.sg/file/cdbb69ce554079363fb3f3eaf605491b"],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id massa semper, accumsan enim quis, eleifend nunc. Mauris maximus leo a laoreet lobortis. Sed a laoreet lacus, ut aliquet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id massa semper, accumsan enim quis, eleifend nunc. Mauris maximus leo a laoreet lobortis. Sed a laoreet lacus, ut aliquet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id massa semper, accumsan enim quis, eleifend nunc. Mauris maximus leo a laoreet lobortis. Sed a laoreet lacus, ut aliquet nisl.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 9,
    title: "Title",
    imgs: ["https://m.media-amazon.com/images/I/51mHjck4w3S.jpg"],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id massa semper, accumsan enim quis, eleifend nunc. Mauris maximus leo a laoreet lobortis. Sed a laoreet lacus, ut aliquet nisl.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [],
  },
  {
    id: 10,
    title: "Title",
    imgs: [
      "https://m.media-amazon.com/images/I/51o0B9RHTNL._AC_UF1000,1000_QL80_.jpg",
    ],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id massa semper, accumsan enim quis, eleifend nunc. Mauris maximus leo a laoreet lobortis. Sed a laoreet lacus, ut aliquet nisl.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [],
  },
];

function FetchItems() {
  const dispatch = useAppDispatch();
  dispatch(setItems(data));
}

export default FetchItems;