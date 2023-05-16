import { Header } from "../components/header";
import "../css/stadion.css";
import { StadionComponent } from "../components/StadionComponent";
const testdata = [
  {
    name: "第0回KOJSコンテスト",
    time: "mm/dd~mm/dd",
    type: "archive",
    link: "../1/description",
  },
  {
    name: "第1回KOJSコンテスト",
    time: "mm/dd~mm/dd",
    type: "active",
    link: "../2/description",
  },
  {
    name: "第0回KOJSコンテスト",
    time: "mm/dd~mm/dd",
    type: "archive",
    link: "../3/description",
  },
  {
    name: "第1回KOJSコンテスト",
    time: "mm/dd~mm/dd",
    type: "active",
    link: "../4/description",
  },
];

export function StadionHome() {
  return (
    <center>
      <Header page={"stadion"} />
      <div className={"stadion"}>
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
          {testdata.map((item) => (
            <StadionComponent
              name={item.name}
              time={item.time}
              type={item.type}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </center>
  );
}
