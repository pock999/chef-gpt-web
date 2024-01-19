import { MessageProps } from "../Message/message-props.model";

export class ChatRoomProps {
  messageList: Array<MessageProps>;
  sendMessage: Function;
  loading: boolean;
  hasMore: boolean = false;
  conversationId: number | string;
  fetchMore: Function;
}