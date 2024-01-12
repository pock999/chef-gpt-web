import { MessageAPI, MessageGetListQueryReqVO, PostMessageReqVO } from '../api';
import { CONFIG } from '../config';
import _ from 'lodash';

import {
  Snackbar
} from '../shared';

export const MessageService = {
  /**
   * 取得對話的訊息列表
   */
  async getMessageList(conversationId: number, payload: MessageGetListQueryReqVO) {
    try {
      const result = await MessageAPI.getMessageList(conversationId, payload);
      return result.data;
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
  /**
   * 新增對話的訊息
   */
  async postMessage(payload: PostMessageReqVO) {
    try {
      const result = await MessageAPI.postMessage(payload);
      return result.data;
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
}