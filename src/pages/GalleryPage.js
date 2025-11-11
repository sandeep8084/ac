import Gallery from "../components/Gallery/Gallery";

const images = [
  {
    img: "/assets/accc.png",
    title: "Accenture",
  },
  {
    img: "/assets/accc.png",
    title: "Accenture",
  },
  {
    img: "/assets/accc.png",
    title: "Accenture",
  },
  {
    img: "/assets/accc.png",
    title: "Accenture",
  },
  {
    img: "/assets/accc.png",
    title: "Accenture",
  },
  {
    img: "/assets/accc.png",
    title: "Accenture",
  },
];

const ImageGallery = () => {
  return <Gallery images={images} />;
};

export default ImageGallery;
