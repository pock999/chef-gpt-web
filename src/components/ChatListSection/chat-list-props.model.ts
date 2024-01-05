export class ChatItem {
  avatarImg: string;
  altString?: string;
  title: string;
  dateTime: string | Date;
}

export class ChatListProps {
  chatList: Array<ChatItem>;
}