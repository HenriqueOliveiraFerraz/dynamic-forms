export interface IBaseForm<ValueType, ObjectKey> {
  key: string | keyof ObjectKey;
  value: ValueType | null;
}
