import { http } from '../shared';
import { AuthRegisterReqDTO, AuthRegisterResDTO, AuthLoginReqDTO, AuthLoginResDTO } from './models';
import { CONFIG } from '../config';

export const AuthAPI = {
  async register(payload: AuthRegisterReqDTO): Promise<AuthRegisterResDTO> {
    return await http.post('/registrations', payload);
  },

  async login(payload: AuthLoginReqDTO): Promise<AuthLoginResDTO> {
    return await http.post('/login', payload);
  },

  async logout(): Promise<any> {
    return await http.delete('/logout', {
      headers: {
        token: localStorage.getItem(CONFIG.tokenKey),
      },
    });
  }
};