import { ConversationAPI, ConversationGetListQueryReqVO } from '../api';
import { CONFIG } from '../config';
import _ from 'lodash';

import {
  Snackbar
} from '../shared';

export const ConversationService = {
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
};