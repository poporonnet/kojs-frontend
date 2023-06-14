import { Header } from "../components/header";
import "../css/stadion-home.css";
import { StadionComponent } from "../components/StadionComponent";

export function StadionHome() {
  return (
    <div id={"stadion-home"}>
      <Header page={"stadion"} />
      <main>
        <h1>
          <span>Sta</span>dion
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
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
    </div>
  );
}

const testdata = [
  {
    name: "第0回KOJSコンテスト",
    time: "mm/dd~mm/dd",
    type: "archive",
    link: "../0/description",
  },
  {
    name: "第1回KOJSコンテスト",
    time: "mm/dd~mm/dd",
    type: "archive",
    link: "../1/description",
  },
  {
    name: "第2回KOJSコンテスト",
    time: "mm/dd~mm/dd",
    type: "archive",
    link: "../2/description",
  },
  {
    name: "第3回KOJSコンテスト",
    time: "mm/dd~mm/dd",
    type: "archive",
    link: "../3/description",
  },
  {
    name: "第4回KOJSコンテスト",
    time: "mm/dd~mm/dd",
    type: "archive",
    link: "../4/description",
  },
  {
    name: "第5回KOJSコンテスト",
    time: "mm/dd~mm/dd",
    type: "archive",
    link: "../5/description",
  },
  {
    name: "第6回KOJSコンテスト",
    time: "mm/dd~mm/dd",
    type: "archive",
    link: "../6/description",
  },
  {
    name: "第7回KOJSコンテスト",
    time: "mm/dd~mm/dd",
    type: "active",
    link: "../7/description",
  },
];
