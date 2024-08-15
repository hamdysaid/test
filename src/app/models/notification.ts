import { BaseEntity } from './base-entity';

export interface Notification extends BaseEntity {
  title: string;
  titleAR: string;
  description: string;
  descriptionAR: string;
  image: string;
  isRead: boolean;
  userId: string;
}
