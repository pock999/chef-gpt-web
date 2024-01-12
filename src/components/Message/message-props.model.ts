export class MessageProps {
  id: number;
  content: string = '';
  backgroundColor?: string = '#dddddd';
  role: 'user' | 'ai' = 'user';
  avartarImg?: string = '/static/images/avatar/1.jpg';
  create_time?: string;
}