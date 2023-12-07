export type Option = {
  id: number | string;
  value: string;
  text: string;
};
export type SelectProps = {
  options: Option[];
  select: string;
  onChange: (value: string) => void;
  className: string;
};
