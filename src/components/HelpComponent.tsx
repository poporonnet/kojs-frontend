import "../css/help.css";
type Props = {
  question: string;
  answer: string;
};

export function HelpComponent(props: Props) {
  return (
    <div className={"help"}>
      <div style={{ width: "20%", paddingLeft: "20%" }}>
        <p>
          <span>Q. </span>
          {props.question}
        </p>
      </div>
      <div
        style={{
          width: "50%",
        }}
      >
        <p>
          <span>A. </span>
          {props.answer}
        </p>
      </div>
    </div>
  );
}
