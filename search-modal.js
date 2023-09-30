export const searchModal = () => {
  const modal = document.getElementById("search-modal");

  const btn = document.getElementById("search");

  const span = document.getElementsByClassName("close-search")[0];

  btn.onclick = () => {
    modal.style.display = "block";
  };

  span.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

export const closeSearchModal = () => {
  const modal = document.getElementById("search-modal");

  const titleInput = document.getElementById("search-title");
  const dateInput = document.getElementById("search-date");

  titleInput.value = "";
  dateInput.value = "";

  modal.style.display = "none";
};
