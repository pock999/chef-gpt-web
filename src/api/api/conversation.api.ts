import { http } from '../../shared';
import { ConversationGetListQueryReqVO } from '../vo';
import { ConversationGetListResDTO } from '../dto';
import { CONFIG } from '../../config';
import _ from 'lodash';

export const ConversationAPI = {
  async getConversationList(payload: ConversationGetListQueryReqVO): Promise<ConversationGetListResDTO> {

    let queryParams: string[] = [];

    if(!_.isEmpty(payload.page)) {
      queryParams.push(`page=${payload.page}`);
    }

    if(!_.isEmpty(payload.count)) {
      queryParams.push(`count=${payload.count}`);
    }

    const queryStr = queryParams.length === 0 ? '' : `?${queryParams.join('&')}`

    const res = await http.get(`/conversations${queryStr}`, {
      headers: {
        token: localStorage.getItem(CONFIG.tokenKey),
      }
    });

    return {
      ...res.data,
      status: res.status,
    };
  },
  async createConversation() {
    // post /conversations
  },
  async deleteConversation() {
    // delete /conversations

  },
  async getTitle() {
    // get /titles
  },
};