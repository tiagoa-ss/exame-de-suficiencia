export const createModal = () => {
  const modal = document.getElementById("create-modal");

  const btn = document.getElementById("create-button");

  const span = document.getElementsByClassName("close-create")[0];

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

export const closeCreateModal = () => {
  const modal = document.getElementById("create-modal");

  const titleInput = document.getElementById("title");
  const infoInput = document.getElementById("information");

  titleInput.value = "";
  infoInput.value = "";

  modal.style.display = "none";
};
