import { useRef, useState } from "react";
import leftArrow from "../../../assets/left-arrow.svg";
import rightArrow from "../../../assets/right-arrow.svg";
import ItemCard from "../../../components/UI/cards/ItemCard";
import { Item } from "../../../models/item";

type Props = {
  data: Item[];
  title: string;
};

function PopularProducts({ title, data }: Props) {
  const listRef = useRef<HTMLDivElement>(null);
  const [seeArrows, setSeeArrows] = useState("none");

  const scrollTo = (x: number) => {
    if (listRef.current) {
      listRef.current.scrollTo({
        left: listRef.current.scrollLeft + x,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="section-products">
      <h1
        className="section-title"
        style={{ paddingBottom: 1 + "%", paddingTop: 1 + "%" }}
      >
        {title}
      </h1>
      <div
        className="container-arrows is-fluid"
        onMouseEnter={() => setSeeArrows("block")}
        onMouseLeave={() => setSeeArrows("none")}
      >
        <div className="arrows-container">
          <img
            className="arrow arrow-left"
            src={leftArrow}
            alt="Left Arrow"
            onClick={() => scrollTo(-450)}
            style={{ display: seeArrows }}
          />
          <img
            className="arrow arrow-right"
            src={rightArrow}
            alt="Right Arrow"
            onClick={() => scrollTo(+450)}
            style={{ display: seeArrows }}
          />
        </div>
        <div
          className="container-slider is-fluid"
          ref={listRef}
          style={{ borderBottom: "none", scrollBehavior: "smooth" }}
        >
          <div className="columns" style={{ marginLeft: 12, width: 80 + "%" }}>
            {data.map((item) => {
              return <ItemCard item={item} key={item._id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularProducts;
