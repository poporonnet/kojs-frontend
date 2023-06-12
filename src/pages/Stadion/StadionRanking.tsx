import { RankingProps } from "../../components/ranking-component";
import { RankingComponent } from "../../components/ranking-component";
import "../../css/stadion-ranking.css";
const sample: RankingProps[] = [
  {
    rank: "1",
    name: "ねこ",
    status: ["AC", "AC", "AC", "TWA"],
    score: "250",
  },
  {
    rank: "2",
    name: "いぬ",
    status: ["AC", "AC", "WA", "NONE"],
    score: "100",
  },
  {
    rank: "3",
    name: "うさぎ",
    status: ["AC", "TWA", "WA", "WA"],
    score: "50",
  },
];
const problemssample = ["A問題", "B問題", "C問題", "D問題"];

export function StadionRanking() {
  return (
    <>
      <div id={"stadion-ranking"}>
        <h1>ランキング</h1>
        <div className={"header"}>
          <p>順位</p>
          <p>名前</p>
          {problemssample.map((problem, index) => (
            <p key={index}>{problem}</p>
          ))}
          <p>得点</p>
        </div>
        {sample.map((props, index) => (
          <RankingComponent {...props} key={index} />
        ))}
      </div>
    </>
  );
}
