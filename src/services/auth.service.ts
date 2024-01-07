import { AuthAPI, AuthRegisterReqVO, AuthLoginReqVO } from '../api';
import { CONFIG } from '../config';
import _ from 'lodash';

import {
  Snackbar
} from '../shared';

export const AuthService = {
  async register(payload: AuthRegisterReqVO) {
    try {
      const result = await AuthAPI.register(payload);
      Snackbar.success('註冊成功');
    } catch (err) {
      console.error('err => ', err);
      if(_.get(err, 'response')) {
        const res = _.get(err, 'response');
        Snackbar.error(res.data.msg);
      } else {
        Snackbar.error('例外');
      }

      throw err;
    }
  },

  async login(payload: AuthLoginReqVO) {
    try {
      const result = await AuthAPI.login(payload);
      localStorage.setItem(CONFIG.authKey, JSON.stringify(result.data));
      localStorage.setItem(CONFIG.tokenKey, result.data.token);
      Snackbar.success('登入成功');
    } catch (err) {
      console.error('err => ', err);
      if(_.get(err, 'response')) {
        const res = _.get(err, 'response');
        Snackbar.error(res.data.msg);
      } else {
        Snackbar.error('例外');
      }

      throw err;
    }
  },

  async logout() {
    try {
      await AuthAPI.logout();
      Snackbar.success('登出成功');
    } catch (err) {
      console.error('err => ', err);
    }
    localStorage.clear();
  }
};