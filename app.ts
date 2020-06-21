import { UserApi } from "./api/user.api";
import { apiConfig } from './api/base-api/api.config';
import { PostApi } from "./api/post.api";

let userApi: UserApi = new UserApi(apiConfig);
let postApi: PostApi = new PostApi(apiConfig);

Promise.all([
  userApi.getAllUsers(),
  postApi.getAllPosts()
]).then(([users, posts]) => {
  console.log(users);
  console.log(posts);
})