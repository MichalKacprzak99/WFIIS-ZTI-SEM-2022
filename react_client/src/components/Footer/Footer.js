import React from "react";

const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
};

const Footer = () => {
    const currentDate = new Date();

    return (
        <div style={style}>Copyright &copy; React Example {currentDate.getFullYear()}</div>
    );
}

export default Footer