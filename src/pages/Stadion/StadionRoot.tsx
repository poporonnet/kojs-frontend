import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../../css/stadion.css";
import { Header } from "../../components/header.tsx";
export function StadionRoot() {
  const pages = [
    {
      name: "説明",
      link: "description",
    },
    {
      name: "ランキング",
      link: "ranking",
    },
    {
      name: "提出結果",
      link: "result",
    },
  ];
  const props = {
    title: "第１回Kemomimi杯",
    problems: [
      {
        name: "A-足し算",
        link: "1",
      },
      {
        name: "B-引き算",
        link: "2",
      },
      {
        name: "C-掛け算",
        link: "3",
      },
      {
        name: "D-除算",
        link: "4",
      },
      {
        name: "E-足し算",
        link: "5",
      },
    ],
  };
  const currentLink = useLocation().pathname.split("/");
  {
    /*再レンダリング用関数*/
  }
  return (
    <>
      <Header page={"stadion"} />
      <div id="stadion">
        <div id="sidebar">
          <Link to={"description"} className={"Link"}>
            <h3>第１回Kemomimi杯</h3>
          </Link>
          {pages.map((page) => {
            if (currentLink[2] === page.link) {
              return (
                <Link to={`${page.link}`} className={"Link"} key={page.link}>
                  <div id={"current"}>
                    <h3>{page.name}</h3>
                  </div>
                </Link>
              );
            } else {
              return (
                <Link to={`${page.link}`} className={"Link"} key={page.link}>
                  <div id={"uncurrent"}>
                    <h3>{page.name}</h3>
                  </div>
                </Link>
              );
            }
          })}
          <div id="problems">
            {props.problems.map((problem) => {
              if (currentLink[2] === problem.link) {
                return (
                  <Link to={`${problem.link}/problem`} className={"Link"} key={problem.link}>
                    <div id={"current"}>
                      <h3>{problem.name}</h3>
                    </div>
                  </Link>
                );
              } else {
                return (
                  <Link to={`${problem.link}/problem`} className={"Link"} key={problem.link}>
                    <div id={"uncurrent"}>
                      <h3>{problem.name}</h3>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
