import { http } from '../../shared';
import { CONFIG } from '../../config';
import _ from 'lodash';
import { MessageDetailResVO, MessageGetListQueryReqVO, PostMessageReqVO } from '../vo';
import { IResponseDTO, MessageGetListResDTO } from '../dto';

export const MessageAPI = {
  /**
   * 取得對話的訊息列表 API
   */
  async getMessageList(conversationId: number, payload: MessageGetListQueryReqVO): Promise<MessageGetListResDTO> {
    let queryParams: string[] = [];

    if(_.get(payload, 'page')) {
      queryParams.push(`page=${payload.page}`);
    }

    if(_.get(payload, 'count')) {
      queryParams.push(`count=${payload.count}`);
    }

    const queryStr = queryParams.length === 0 ? '' : `?${queryParams.join('&')}`;

    const res = await http.get(`/messages/${conversationId}${queryStr}`, {
      headers: {
        token: localStorage.getItem(CONFIG.tokenKey),
      }
    });

    return {
      ...res.data,
      status: res.status,
    };
  },
  /**
   * 新增對話的訊息 API
   */
  async postMessage(payload: PostMessageReqVO): Promise<IResponseDTO<MessageDetailResVO>> {
    const res = await http.post(`/messages`, payload, {
      headers: {
        token: localStorage.getItem(CONFIG.tokenKey),
      }
    });

    return {
      ...res.data,
      status: res.status,
    };
  },
};
