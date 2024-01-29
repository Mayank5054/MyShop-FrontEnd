import React from "react";
import ReactDOM  from "react-dom";

const App = () => {
    const divText = "hello Variable !";
    return (
        <div
        style={{
            backgroundColor:"red"
        }}
        >{divText}</div>
    )
}

ReactDOM.render(
<App />,
// document.getElementById("root")
document.querySelector("#root")
);