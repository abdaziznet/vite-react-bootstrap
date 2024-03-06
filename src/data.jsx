//import image data
import { Image } from "react-bootstrap";
import img1 from "./assets/img/finger 2.jpg";
import img2 from "./assets/img/finger 3.jpg";
import img3 from "./assets/img/finger 4.jpg";

export const SrcImage = () => {
  return <Image src={img1}></Image>;
};

export const CardSummary = [
  {
    id: 1,
    title: "Branch Total",
    value: "40",
  },
  {
    id: 2,
    title: "Reconstruct Images",
    value: "20",
  },
  {
    id: 3,
    title: "User Total",
    value: "100",
  },
];

export const CardMenu = [
  {
    id: 1,
    img: img1,
    title: "Reconstruct Images",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 2,
    img: img2,
    title: "Verification Images",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 3,
    img: img3,
    title: "Verification Images",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

export const ListViewPercentage = [
  {
    branchOfficeCode: "0100-000",
    percentage: "50%",
  },
  {
    branchOfficeCode: "0100-000",
    percentage: "50%",
  },
  {
    branchOfficeCode: "0100-000",
    percentage: "50%",
  },
  {
    branchOfficeCode: "0100-000",
    percentage: "50%",
  },
  {
    branchOfficeCode: "0100-000",
    percentage: "50%",
  },
  {
    branchOfficeCode: "0100-000",
    percentage: "50%",
  },
  {
    branchOfficeCode: "0100-000",
    percentage: "50%",
  },
  {
    branchOfficeCode: "0100-000",
    percentage: "50%",
  },
  {
    branchOfficeCode: "0100-000",
    percentage: "50%",
  },
  {
    branchOfficeCode: "0100-000",
    percentage: "50%",
  },
  {
    branchOfficeCode: "0100-000",
    percentage: "50%",
  },
  {
    branchOfficeCode: "0100-000",
    percentage: "50%",
  },
  {
    branchOfficeCode: "0100-000",
    percentage: "50%",
  },
  {
    branchOfficeCode: "0100-000",
    percentage: "50%",
  },
  {
    branchOfficeCode: "0100-000",
    percentage: "50%",
  },
  {
    branchOfficeCode: "0100-000",
    percentage: "50%",
  },
];

export const EnumOfUserGroupBCA = [
  {
    id: 1,
    label: "Select All",
  },
  {
    id: 2,
    label: "Manager",
  },
  {
    id: 3,
    label: "Enroller",
  },
  {
    id: 4,
    label: "User",
  },
  {
    id: 5,
    label: "Reporter",
  },
];

export const EnumOfActivity = [
  {
    id: 1,
    label: "Login",
  },
  { id: 2, label: "Reconstruct Images" },
  { id: 3, label: "Verification Images" },
];

export const EnumOfOrderBy = [
  {
    id: 1,
    label: "Branch Code",
  },
  {
    id: 2,
    label: "Office Code",
  },
  {
    id: 3,
    label: "Created Date",
  },
];

export const EnumOfSortBy = [
  {
    id: 1,
    label: "Ascending",
  },
  {
    id: 2,
    label: "Descending",
  },
];
