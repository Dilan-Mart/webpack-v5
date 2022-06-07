import "../style/css/button.css";

const button = document.createElement("button");
button.classList.add("btn", "btn-reddish");
button.textContent = "God bless you";
button.onclick = () => {
  const p = document.createElement("p");
  p.classList.add("p", "p-reddish");
  p.textContent = "You are blessed!";
  document.body.appendChild(p);
};

export default button;
