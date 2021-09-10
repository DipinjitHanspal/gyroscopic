export class CreateItemDto {
  readonly title: string;
  readonly dueDate?: Date;
  readonly done?: boolean;
  readonly tags?: string[];
}
