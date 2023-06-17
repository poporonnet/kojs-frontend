import { Header } from "../components/header.tsx";
import { Link } from "react-router-dom";
import { Footer } from "../components/footer";

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
        <center>
          <h1>
            <span style={{ color: "#FC3030" }}>Kemomimi</span> Online Judge
            System
          </h1>
          <p>
            説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Link to={"/codeadventure"} className={"Link"}>
              <div
                style={{
                  borderRadius: "1rem",
                  height: "10rem",
                  border: "solid 3px #FC9230",
                  width: "18rem",
                }}
              >
                <h2>
                  Code<span style={{ color: "#FC9230" }}>Adventure</span>
                </h2>
                <p>あなたにあったレベルからプログラミングを勉強できるよ</p>
              </div>
            </Link>
            <Link to={"/stadion"} className={"Link"}>
              <div
                style={{
                  borderRadius: "1rem",
                  height: "10rem",
                  width: "18rem",
                  border: "solid 3px #4F73F5",
                }}
              >
                <h2>
                  <span style={{ color: "#4F73F5" }}>Sta</span>dion
                </h2>
                <p>自分の実力をためそう!</p>
              </div>
            </Link>
            <Link to={"/playground"} className={"Link"}>
              <div
                style={{
                  borderRadius: "1rem",
                  height: "10rem",
                  width: "18rem",
                  border: "solid 3px #777788",
                }}
              >
                <h2>CodePlayground</h2>
                <p>
                  プログラミングを試せるPlaygroundだよ。じゃんじゃん練習してこう
                </p>
              </div>
            </Link>
          </div>
        </center>
      </div>
      <Footer/>
    </div>
  );
}
