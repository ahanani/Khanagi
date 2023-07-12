function Menu({ backgroundOp, title, images, names, prices, descriptions }) {
  const handleElevOn = (event) => {
    document.getElementById(
      event.target.id
    ).style.boxShadow = `0px 0px 25px #9e9e9e`;
  };

  const handleElevOff = (event) => {
    document.getElementById(
      event.target.id
    ).style.boxShadow = `0px 0px 5px #9e9e9e`;
  };

  return (
    <div
      style={{
        width: "90%",
        margin: "30px auto auto auto",
        opacity: backgroundOp,
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
        <div
          style={{
            backgroundColor: "black",
            height: "0.2vh",
            margin: "auto 0px auto 0px",
          }}
        ></div>
        <h2 style={{ textAlign: "center" }}>{title}</h2>
        <div
          style={{
            backgroundColor: "black",
            height: "0.2vh",
            margin: "auto 0px auto 0px",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        {images.map((image, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                width: "200px",
                flexDirection: "column",
              }}
            >
              <img
                src={require(`../statics/Images/${title}/${image}.jpeg`)}
                alt={names[index]}
                id={image + title}
                onMouseOver={handleElevOn}
                onMouseOut={handleElevOff}
                style={{
                  boxShadow: `0px 0px 5px #9e9e9e`,
                  overflow: "hidden",
                  width: "200px",
                  height: "200px",
                  borderRadius: "5px",
                  objectFit: "cover",
                }}
              />
              <span style={{ marginTop: "10px" }}>
                {names[index]}
                <span style={{ fontSize: "0.6em" }}> ${prices[index]}</span>
              </span>
              <p style={{ overflowWrap: "break-word", fontSize: "0.6em" }}>
                {descriptions[index]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
