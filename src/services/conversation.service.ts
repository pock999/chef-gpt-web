import { ConversationAPI, ConversationGetListQueryReqVO } from '../api';
import { CONFIG } from '../config';
import _ from 'lodash';

import {
  Snackbar
} from '../shared';

export const ConversationService = {
  /**
   * 取得對話的訊息列表
   */
  async getConversationList(payload: ConversationGetListQueryReqVO) {
    try {
      const result = await ConversationAPI.getConversationList(payload);
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
   * 新增對話
   */
  async createConversation() {
    try {
      const result = await ConversationAPI.createConversation();
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
   * 刪除對話
   */
  async deleteConversation(conversationId: number) {
    try {
      const result = await ConversationAPI.deleteConversation(conversationId);
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
   * 取得對話標題
   */
  async getTitle(conversationId: number) {
    try {
      const result = await ConversationAPI.getTitle(conversationId);
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
};