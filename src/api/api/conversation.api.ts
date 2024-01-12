import { http } from '../../shared';
import { ConversationGetListQueryReqVO, CreateConversationResVO, GetTitlesResVO } from '../vo';
import { ConversationGetListResDTO, IResponseDTO } from '../dto';
import { CONFIG } from '../../config';
import _ from 'lodash';

export const ConversationAPI = {
  /**
   * 取得對話列表 API
   */
  async getConversationList(payload: ConversationGetListQueryReqVO): Promise<ConversationGetListResDTO> {

    let queryParams: string[] = [];

    if(_.get(payload, 'page')) {
      queryParams.push(`page=${payload.page}`);
    }

    if(_.get(payload, 'count')) {
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
  /**
   * 新增對話 API
   */
  async createConversation(): Promise<IResponseDTO<CreateConversationResVO>> {
    const res = await http.post(`/conversations`, null, {
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
   * 刪除對話 API
   */
  async deleteConversation(conversationId: number): Promise<IResponseDTO<any>> {
    const res = await http.delete(`/conversations/${conversationId}`, {
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
   * 取得對話標題 API
   */
  async getTitle(conversationId: number): Promise<IResponseDTO<GetTitlesResVO>> {
    const res = await http.get(`/titles/${conversationId}`, {
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