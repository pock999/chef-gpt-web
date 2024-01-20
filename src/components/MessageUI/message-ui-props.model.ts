import { COLOR } from "../../config";

export class MessageUIProps {
  id: number;
  content: string = '';
  backgroundColor?: string = COLOR.grayScale[700];
  role: 'user' | 'ai' = 'user';
  avartarImg?: string = '/static/images/avatar/1.jpg';
  create_time?: string;
  progress?: boolean = false;
}