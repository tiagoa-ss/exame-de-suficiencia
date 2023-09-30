export class Posts {
  constructor() {
    const localData = localStorage.getItem("posts") || "[]";

    this.posts = JSON.parse(localData);
  }

  createPost(post) {
    this.posts.push(post);
    this.saveOnStorage();
  }

  searchPost(title, date) {
    if (title && date) {
      return this.posts.filter(
        (post) => post.title.includes(title) && post.date === date
      );
    } else {
      return this.posts.filter(
        (post) => post.title.includes(title) || post.date === date
      );
    }
  }

  deletePost(postNumber) {
    this.posts.splice(postNumber, 1);

    this.saveOnStorage();
  }

  saveOnStorage() {
    const newPosts = JSON.stringify(this.posts);
    localStorage.setItem("posts", newPosts);
  }
}
