import "../../css/stadion-description.css";
import { Markdown } from "../../components/markdown";
import { ButtonComponent } from "../../components/ButtonComponent";
const description = `
この競技プログラミングコンテストでは、四則演算（足し算、引き算、掛け算、割り算）の基本的な計算のスキルを競います。\n

参加者は与えられる入力に対して、正しい計算結果を返すプログラムを実装してください。\n
問題文には複数の数が含まれます。ただし、計算結果は整数または小数になるものとします。\n
競技時間内にできるだけ多くの問題に正解し、正確さと効率性を競いましょう。スピーディーな計算や正確な結果の返却がポイントとなります。\n
参加者は、提供される数式を計算するために好みのプログラミング言語を選ぶことができます。\n
このコンテストの評価基準は、正解した問題の数と実行時間、提出時間です。\n
`;
import "../../css/stadion-description.css";
export function StadionDescription() {
  return (
    <div id="stadion-description">
      <h1>はじめの第一歩</h1>
      <div className={"text"}>
        <Markdown value={description} />
      </div>
      <ButtonComponent
        text={"はじめる"}
        color={"#ffffff"}
        backgroundColor={"#00BFFF"}
        borderRadius={"0.5rem"}
        link={"../1/problem"}
      />
    </div>
  );
}
