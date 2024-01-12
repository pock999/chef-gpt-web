export class MessageVO {
  id: number;
  role: 'user' | 'ai';
  content: string;
  create_time: string;
}