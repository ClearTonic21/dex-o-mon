
export interface EntryActions {
  value: string;
  label: string;
  iconName?: string;
  isDelete?: boolean;
}

export enum EntryActionTypes {
  Switch = 'switch',
  Duplicate = 'duplicate',
  Delete = 'delete',
}
