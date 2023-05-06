type ButtonProps = {
  text: string;
  onClick: () => void;
  color: string;
  backgroundColor: string;
  borderRadius: string;
};

export function ButtonComponent(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      style={{
        width: "auto",
        backgroundColor: props.backgroundColor,
        color: props.color,
        borderRadius: props.borderRadius,
        height: "auto",
        border: "none",
      }}
    >
      <p
        style={{
          height: "auto",
          margin: 0,
          fontSize: "1rem",
          padding: "0.2rem 0.6rem",
        }}
      >
        {props.text}
      </p>
    </button>
  );
}
