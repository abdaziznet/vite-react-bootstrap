//import image data
import { Image } from "react-bootstrap";
import img1 from "./assets/finger 2.jpg";

export const SrcImage = () => {
  return <Image src={img1}></Image>;
};

export const CardMenu = [
  {
    id: 1,
    img: img1,
    title: "Reconstruct Images",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 2,
    img: img1,
    title: "Verification Images",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 3,
    img: img1,
    title: "Verification Images",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];
