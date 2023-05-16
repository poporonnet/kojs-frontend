import { Header } from "../components/header.tsx";
import { HelpComponent } from "../components/HelpComponent.tsx";
import { ButtonComponent } from "../components/ButtonComponent.tsx";
const helps = [
  {
    question: "お金はかかりかすか",
    answer: "いいえ。すべてのサービスは無料で提供しています。",
  },
  {
    question: "誰が運営していますか",
    answer: "KemomimiはPoporonNetworkによって運営されています。",
  },
  {
    question: "PoporonNetworkとは",
    answer: "高専生によって構成されるコミュニティです。",
  },
  {
    question: "対応しているプログラミング言語は",
    answer:
      "現在C,C++(GCCとClang),Ruby,Python,JS・TS(Node.js), Go,Rustに対応しています。",
  },
  {
    question: "不具合を見つけたのですが",
    answer:
      "お手数ですが、kemomimi-support@poporon.net宛にメールにてお知らせください。",
  },
];
export function Help() {
  return (
    <center>
      <Header page={"help"} />
      <h1 style={{ color: "#FC3030" }}>help</h1>
      <ButtonComponent
        text={"↩戻る"}
        color={"#fff"}
        backgroundColor={"#FC3030"}
        borderRadius={"1rem"}
        link={"/"}
        style={{
          position: "absolute",
          top: "4rem",
          left: "1rem",
        }}
      />
      {helps.map((item) => {
        return <HelpComponent question={item.question} answer={item.answer} />;
      })}
    </center>
  );
}
