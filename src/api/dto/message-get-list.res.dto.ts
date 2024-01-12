import { MessageVO } from "../vo";
import { IResponseDTO } from "./response.dto";

export class MessageGetListResDTO implements IResponseDTO<any> {
  msg: string;
  status: number;
  data: {
    page: {
      total_count: number;
      total_page: number;
    };
    messages: Array<MessageVO>;
  };
}