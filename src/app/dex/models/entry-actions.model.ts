
export interface EntryActions {
  value: string;
  label: string;
  iconName?: string;
  isDelete?: boolean;
}

export enum EntryActionType {
  Switch = 'switch',
  Duplicate = 'duplicate',
  Delete = 'delete',
}
