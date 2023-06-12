import "../../css/stadion-result.css";
import { ResultProps } from "../../components/result-component";
import { ResultComponent } from "../../components/result-component";

export function StadionResult() {
  return (
    <div id={"stadion-result"}>
      <h1>提出結果</h1>
      <div id={"header"}>
        {headers.map((data, index) => (
          <div key={index} className={"content"}>
            <p>{data}</p>
          </div>
        ))}
      </div>
      {sampledata.map((data, index) => {
        return (
          <div key={index}>
            <ResultComponent
              title={data.title}
              memory={data.memory}
              time={data.time}
              lang={data.lang}
              result={data.result}
              link={data.link}
            />
          </div>
        );
      })}
    </div>
  );
}
const headers = [
  "提出した問題",
  "メモリ使用量",
  "実行時間",
  "言語",
  "提出結果",
  "詳細",
];
const sampledata: ResultProps[] = [
  {
    title: "A問題",
    memory: "100kB",
    time: "100ms",
    lang: "C(GCC)",
    result: "AC",
    link: "link",
  },
  {
    title: "A問題",
    memory: "100kB",
    time: "100ms",
    lang: "C(GCC)",
    result: "WA",
    link: "link",
  },
  {
    title: "A問題",
    memory: "100kB",
    time: "100ms",
    lang: "C(GCC)",
    result: "",
    link: "link",
  },
  {
    title: "A問題",
    memory: "100kB",
    time: "100ms",
    lang: "C(GCC)",
    result: "TWA",
    link: "link",
  },
];
