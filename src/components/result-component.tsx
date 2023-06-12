import "../css/result-component.css";
import {Link} from "react-router-dom";

export type ResultProps = {
  title: string;
  memory: string;
  time: string;
  lang: string;
  result : string;
  link: string;
}
export function ResultComponent(props: ResultProps) {
  return (
    <div id={"result-component"}>
      <div className={"content"}>
        <p>{props.title}</p>
      </div>
      <div className={"content"}>
        <p>{props.memory}</p>
      </div>
      <div className={"content"}>
        <p>{props.time}</p>
      </div>
      <div className={"content"}>
        <p>{props.lang}</p>
      </div>
      <div className={"content"}>
        <p
          style={{
            color:
              props.result === "AC"
                ? "green"
                : props.result === "WA"
                  ? "red"
                  : props.result === "TWA"
                    ? "orange"
                    : "gray",
          }}
        >
          {props.result === "AC"
            ? "AC"
            : props.result === "WA"
              ? "WA"
              : props.result === "TWA"
                ? "TWA"
                : "判定中"}
        </p>
      </div>
      <div className={"content"}>
        <Link to={props.link}>詳細</Link>
      </div>
    </div>
  )
}
