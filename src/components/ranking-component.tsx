import "../css/ranking-component.css";
export type RankingProps = {
  rank: string;
  name: string;
  status: string[];
  score: string;
};
export function RankingComponent(props: RankingProps) {
  return (
    <div className={"ranking-component"}>
      <p>
        {props.rank}
      </p>
      <p>
        {props.name}
      </p>
      {props.status.map((status, index) => (
        <p
          style={{
            color:
              status === "AC"
                ? "green"
                : status === "WA"
                  ? "red"
                  : status === "TWA"
                    ? "orange"
                    : "gray",
          }}
          key={index}
        >
          {status === "AC"
            ? "◯"
            : status === "WA"
              ? "×"
              : status === "TWA"
                ? "△"
                : "-"}
        </p>
      ))}
      <p>{props.score}</p>
    </div>
  );
}
