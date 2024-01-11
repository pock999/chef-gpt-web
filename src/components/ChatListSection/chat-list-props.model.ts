export class ChatItem {
  avatarImg?: string;
  altString?: string;
  title: string;
  create_time: string | Date;
}

export class ChatListProps {
  chatList: Array<ChatItem>;
}