import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
  color: string;
  backgroundColor: string;
  borderRadius: string;
  link: string;
  style: React.CSSProperties;
};

export function ButtonComponent(props: ButtonProps) {
  return (
    <Link
      style={{
        width: "auto + 2rem",
        backgroundColor: props.backgroundColor,
        color: props.color,
        borderRadius: props.borderRadius,
        height: "2rem",
        border: "none",
        textDecoration: "none",
        ...props.style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      to={props.link}
    >
      <p
        style={{
          height: "auto",
          margin: 0,
          fontSize: "1.4rem",
          padding: "0.2rem 0.6rem",
        }}
      >
        {props.text}
      </p>
    </Link>
  );
}
