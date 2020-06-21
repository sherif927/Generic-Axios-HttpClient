import { Api } from "./base-api/api";
import { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { User } from "../models/User";
import { Post } from "../models/Post";

export class PostApi extends Api {

  constructor(config: AxiosRequestConfig) {
    super(config);
  }
  /**
     * Generates an HTTP Request to get All the posts in the system.
     * 
     * @returns {Promise<User[]>} User[] - All the posts
     */
  public async getAllPosts(): Promise<Post[]> {
    let response: AxiosResponse<Post[]> = await this.get<Post[]>("posts").catch((error: AxiosError) => { throw error });
    let posts: Post[] = response.data;
    return posts;
  }
}

