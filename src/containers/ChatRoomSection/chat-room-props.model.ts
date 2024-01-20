import { MessageProps } from "../../components/MessageUI/message-ui-props.model";

export class ChatRoomProps {
  messageList: Array<MessageProps>;
  sendMessage: Function;
  loading: boolean;
  hasMore: boolean = false;
  conversationId: number | string;
  fetchMore: Function;
}