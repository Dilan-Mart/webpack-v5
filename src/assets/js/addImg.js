import src from "../img/male.jpg";
import alt from "../txt/maleAlt.txt"

const addImg = () => {
  const img = document.createElement("img");
  img.alt = alt;
  img.src = src;
  document.body.appendChild(img)
};

export default addImg
