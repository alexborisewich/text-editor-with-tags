export type ListProps = {
  dataTestId?: string;
  type: 'notes' | 'tags';
  data: string[];
  onClickTag?: (arg: string) => void;
};
