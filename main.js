window.addEventListener("load", () => {
  const modal = document.getElementById("menu-modal");

  const btn = document.getElementById("menu");

  const span = document.getElementsByClassName("close")[0];

  btn.onclick = () => {
    modal.style.display = 'block';
  };

  span.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
);
