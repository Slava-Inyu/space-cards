import RenderCounter from "./RenderCounter";


type Props = {
  onClick: () => void;
  theme: "add" | "remove";
  text: string;
};

function Button({ onClick, theme, text }: Props) {
  return (
    <button onClick={onClick} className={`button button-${theme}`}>
      <RenderCounter/>
      {text}
    </button>
  );
}

export default Button;
