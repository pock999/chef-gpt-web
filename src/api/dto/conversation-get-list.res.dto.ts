import { ConversationGetListItemResVO } from "../vo";
import { IResponseDTO } from "./response.dto";

export class ConversationGetListResDTO implements IResponseDTO<any> {
  msg: string;
  status: number;
  data: {
    page: {
      total_count: number;
      total_page: number;
    };
    conversations: Array<ConversationGetListItemResVO>;
  };
}