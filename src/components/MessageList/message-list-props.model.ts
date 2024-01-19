import { MessageProps } from "../Message/message-props.model";

export class MessageListProps {
  messageList: Array<MessageProps>;
  responseProgress: boolean;
  hasMore: boolean;
  conversationId: string | number;
  fetchMore: Function;
}