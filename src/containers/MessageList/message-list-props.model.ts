import { MessageProps } from "../../components/MessageUI/message-ui-props.model";

export class MessageListProps {
  messageList: Array<MessageProps>;
  responseProgress: boolean;
  hasMore: boolean;
  conversationId: string | number;
  fetchMore: Function;
}