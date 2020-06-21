import { Api } from "./base-api/api";
import { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { User } from "../models/User";

export class UserApi extends Api {

  constructor(config: AxiosRequestConfig) {
    super(config);
  }
  /**
     * Generates an HTTP Request to get All the users in the system.
     * 
     * @returns {Promise<User[]>} User[] - All the users
     */
  public async getAllUsers(): Promise<User[]> {
    let response: AxiosResponse<User[]> = await this.get<User[]>("users").catch((error: AxiosError) => { throw error });
    let users: User[] = response.data;
    return users;
  }
}

