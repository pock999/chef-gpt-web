import { http } from '../../shared';
import { AuthRegisterReqVO, AuthRegisterResVO, AuthLoginReqVO, AuthLoginResVO } from '../vo';
import { IResponseDTO } from '../dto';
import { CONFIG } from '../../config';

export const AuthAPI = {
  async register(payload: AuthRegisterReqVO): Promise<IResponseDTO<AuthRegisterResVO>> {
    const res = await http.post('/registrations', payload);
    
    return {
      ...res.data,
      status: res.status,
    };
  },

  async login(payload: AuthLoginReqVO): Promise<IResponseDTO<AuthLoginResVO>> {
    const res = await http.post('/login', payload);

    return {
      ...res.data,
      status: res.status,
    };
  },

  async logout(): Promise<any> {
    return await http.delete('/logout', {
      headers: {
        token: localStorage.getItem(CONFIG.tokenKey),
      },
    });
  }
};