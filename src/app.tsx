import React from "react";
interface loginStyle {
  width: string;
  height: string;
  backgroundColor: string;
}
const App = () => {
  let styles: React.CSSProperties = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  };
  const loginSubmit = () => {
    alert("jolryua");
  };
  return (
    <div>
      <div id="login" style={styles}>
        <div id="login-input"></div>
        <div id="login-submit" onClick={loginSubmit}>
          clicj
        </div>
      </div>
    </div>
  );
};
export default App;
