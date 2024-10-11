export const Button = ({
  text,
  handler,
}: {
  text: string;
  handler?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return <button onClick={handler}>{text}</button>;
};
