import { Header } from "../components/header.tsx";
import { Link } from "react-router-dom";
import { Footer } from "../components/footer";
const description = `
Kemomimi Online Judge System（KOJ）は、オンラインでプログラミングを勉強できるサービスです。プログラミングをイチから勉強したり、リアルタイムのコンテストで他の人とプログラミングの能力を競ったりすることができます。また、多くの言語に対応しているプレイグラウンドもあります。

KOJは、プログラミングを学ぶのに有用なサービスを目指しています。

プログラミングの基礎から応用まで、幅広い学習コンテンツが用意されています。また、リアルタイムのコンテストでは、他の人と競いながらプログラミングのスキルを磨くことができます。

KOJは、無料で利用することができます。

KOJは、プログラミングを学びたい人にとって、最適なサービスです。ぜひ、KOJを活用して、プログラミングを楽しんでください。
`;

export function Home() {
  return (
    <div>
      <Header page={"home"} />
      <div
        className={"home"}
        style={{
          width: "80%",
          maxWidth: "1000px",
          minWidth: "500px",
          margin: "0 auto",
        }}
      >
        <div>
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            <span style={{ color: "#FC3030" }}>Kemomimi</span> Online Judge
            System
          </h1>
          <p>{description}</p>
          <Link to={"/codeadventure"} className={"Link"}>
            <div
              style={{
                borderRadius: "1rem",
                height: "10rem",
                border: "solid 3px #FC9230",
                margin: "3rem auto",
              }}
            >
              <div
                style={{
                  marginLeft: "2rem",
                }}
              >
                <h2>
                  Code<span style={{ color: "#FC9230" }}>Adventure</span>
                </h2>
                <p>あなたにあったレベルからプログラミングを勉強できるよ</p>
              </div>
            </div>
          </Link>
          <Link to={"/stadion"} className={"Link"}>
            <div
              style={{
                borderRadius: "1rem",
                height: "10rem",
                border: "solid 3px #4F73F5",
                margin: "3rem auto",
              }}
            >
              <div
                style={{
                  marginLeft: "2rem",
                }}
              >
                <h2>
                  <span style={{ color: "#4F73F5" }}>Sta</span>dion
                </h2>
                <p>自分の実力をためそう!</p>
              </div>
            </div>
          </Link>
          <Link to={"/playground"} className={"Link"}>
            <div
              style={{
                borderRadius: "1rem",
                height: "10rem",
                border: "solid 3px #777788",
                margin: "3rem auto",
              }}
            >
              <div
                style={{
                  marginLeft: "2rem",
                }}
              >
                <h2>CodePlayground</h2>
                <p>
                  プログラミングを試せるPlaygroundだよ。じゃんじゃん練習してこう
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
