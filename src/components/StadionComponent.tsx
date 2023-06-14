import { Link } from "react-router-dom";
type Props = {
  name: string;
  time: string;
  type: string;
  link: string;
};

export function StadionComponent(props: Props) {
  const color =
    props.type === "active"
      ? "#3A88D0"
      : props.type === "archive"
      ? "#FFD700"
      : "#22DC22";
  return (
    <div
      style={{
        margin: "1rem auto",
        display: "block",
      }}
    >
      <Link to={props.link} className={"Link"}>
        <div
          style={{
            border: "solid",
            width: "50rem",
            height: "8rem",
            borderColor: color,
            borderRadius: "1rem",
            marginBottom: "1rem",
            marginTop: "1rem",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          <div className={"title"}>
            <h3>{props.name}</h3>
          </div>
          <div className={"data"}>
            <p>{props.time}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
