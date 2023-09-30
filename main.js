import { menuModal } from "./menu.js";
import { createModal, closeCreateModal } from "./create-modal.js";
import { searchModal, closeSearchModal } from "./search-modal.js";
import { Posts } from "./posts.js";

const posts = new Posts();

const showPosts = () => {
  const savedPosts = posts.posts;

  const postList = document.getElementsByClassName("post-list")[0];

  postList.innerHTML = "";

  savedPosts.forEach((post, i) => {
    const div = document.createElement("div");
    div.classList.add("post");

    const title = document.createElement("h4");
    title.classList.add("post-titles");
    title.innerText = post.title;

    const date = document.createElement("p");
    date.classList.add("post-date");
    date.innerText = post.date;

    const information = document.createElement("p");
    information.innerHTML = post.information;

    const deleteImg = document.createElement("div");
    deleteImg.classList.add("delete-post-icon");
    deleteImg.innerHTML =
      '<img src="./assets/trash-solid.svg" width="10px" height="10px"></img>';

    deleteImg.addEventListener("click", () => {
      posts.deletePost(i);

      showPosts();
    });

    div.appendChild(title);

    div.appendChild(date);

    div.appendChild(information);

    div.appendChild(deleteImg);

    postList.appendChild(div);
  });
};

window.addEventListener("load", () => {
  menuModal();
  createModal();
  searchModal();
  showPosts();

  const createForm = document.getElementById("create-form");

  const searchForm = document.getElementById("search-modal");

  const getBtn = document.getElementById("get-posts");

  createForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const createFormData = new FormData(event.target);

    if (createFormData.get("title") && createFormData.get("information")) {
      const newPost = {
        title: createFormData.get("title"),
        information: createFormData.get("information"),
        date: new Date().toLocaleDateString("pt-br"),
      };

      alert("Post criado!");
      closeCreateModal();
      posts.createPost(newPost);
    } else {
      alert("Os campos devem ser preenchidos.");
    }

    showPosts();
  });

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const searchFormData = new FormData(event.target);

    const results = posts.searchPost(
      searchFormData.get("search-title"),
      searchFormData.get("search-date")
    );

    const postList = document.getElementsByClassName("post-list")[0];

    postList.innerHTML = "";

    results.forEach((post) => {
      const div = document.createElement("div");
      div.classList.add("post");

      const title = document.createElement("h4");
      title.classList.add("post-titles");
      title.innerText = post.title;

      const date = document.createElement("p");
      date.classList.add("post-date");
      date.innerText = post.date;

      const information = document.createElement("p");
      information.innerHTML = post.information;

      const deleteImg = document.createElement("div");
      deleteImg.classList.add("delete-post-icon");
      deleteImg.innerHTML =
        '<img src="./assets/trash-solid.svg" width="10px" height="10px"></img>';

      deleteImg.addEventListener("click", () => {
        posts.deletePost(i);

        showPosts();
      });

      div.appendChild(title);

      div.appendChild(date);

      div.appendChild(information);

      div.appendChild(deleteImg);

      postList.appendChild(div);
    });

    closeSearchModal();
  });
});
