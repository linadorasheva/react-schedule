import axios, { AxiosResponse } from 'axios';
import { IUser } from '../types/user';

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<IUser[]>> {
    return axios.get<IUser[]>('./mockUsers.json');
  }
}
