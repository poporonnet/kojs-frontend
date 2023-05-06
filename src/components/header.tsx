type HeaderProps = {
  page: string;
};

export function Header(props: HeaderProps) {
  const primarycolor =
    props.page === "home"
      ? "#FC3030"
      : props.page === "CodeAdventure"
      ? "#FC9230"
      : props.page === "Stadion"
      ? "#3082FC"
      : props.page === "Playground"
      ? "#709EF8"
      : props.page === "help"
      ? "#FC3030"
      : props.page === "mypage"
      ? "#BB30FC"
      : "black";
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "3rem",
        }}
      >
        <p
          style={{
            color: primarycolor,
            fontSize: "1.5rem",
            float: "left",
          }}
        >
          Kemomimi
        </p>
        <div
          style={{
            display: "flex",
            width: "60%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {props.page === "CodeAdventure" ? (
            <p>
              Code<span style={{ color: "#FC9230" }}>Adventure</span>
            </p>
          ) : (
            <p>CodeAdventure</p>
          )}
          {props.page === "Stadion" ? (
            <p>
              <span style={{ color: "#3082FC" }}>Sta</span>dion
            </p>
          ) : (
            <p>Stadion</p>
          )}
          {props.page === "Playground" ? (
            <p>
              <span style={{ color: "#709EF8" }}>Play</span>ground
            </p>
          ) : (
            <p>Playground</p>
          )}
          {props.page === "help" ? (
            <p style={{ color: "#FC3030" }}></p>
          ) : (
            <p>help</p>
          )}
        </div>
        {/* eslint-disable-next-line no-irregular-whitespace */}
        {/* これはユーザーのアイコン　臨時でこうしてる */}
        <div
          style={{
            float: "right",
            border: `3px solid ${primarycolor}`,
            borderRadius: "50%",
            width: "2.2rem",
            height: "2.2rem",
          }}
        >
          <p>k</p>
        </div>
      </header>
    </>
  );
}
