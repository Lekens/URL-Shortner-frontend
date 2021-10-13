export interface ITabButton {
  title: string;
  active?: boolean;
  extraClassName?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  style: object;
}
