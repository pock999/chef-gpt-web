export class ChatItem {
  id: number;
  avatarImg?: string;
  altString?: string;
  title: string | null;
  create_time: string | Date;
}

export class ChatListProps {
  selected: null | number | undefined | string;
  chatList: Array<ChatItem>;
  showAddButton: boolean;
  hasMore: boolean = false;
}