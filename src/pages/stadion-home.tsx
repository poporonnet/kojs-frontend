import { Header } from "../components/header";
import "../css/stadion-home.css";
import { StadionComponent } from "../components/StadionComponent";
import { Footer } from "../components/footer";

export function StadionHome() {
  return (
    <div id={"stadion-home"}>
      <Header page={"stadion"} />
      <main>
        <h1>
          <span>Sta</span>dion
        </h1>
        <div style={{
          margin: "0 auto",
        }}>
          {testdata.map((item, index) => (
            <div key={index}>
              <StadionComponent
                name={item.name}
                time={item.time}
                type={item.type}
                link={item.link}
              />
            </div>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

const testdata = [
  {
    name: "第0回KOJSコンテスト",
    time: "mm/dd~mm/dd",
    type: "archive",
    link: "../stadion/0/description",
  },
  {
    name: "第1回KOJSコンテスト",
    time: "mm/dd~mm/dd",
    type: "archive",
    link: "../stadion/1/description",
  },
  {
    name: "第2回KOJSコンテスト",
    time: "mm/dd~mm/dd",
    type: "archive",
    link: "../stadion/2/description",
  },
  {
    name: "第3回KOJSコンテスト",
    time: "mm/dd~mm/dd",
    type: "active",
    link: "../stadion/3/description",
  },
];
