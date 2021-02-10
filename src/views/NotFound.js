import React from "react";
import imagePath from "../assets/bird.jpg";
import { Link } from "react-router-dom";

const styles = {
  container: { textAlign: "center" },
  status: { fontSize: 96, marginBottom: 16 },
};

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.status}>404</h1>
      <img src={imagePath} alt="error" width="320" />
      <p>
        Ooops, Dude, you are lost -
        <Link exact to="/">
          click here
        </Link>
        please
      </p>
    </div>
  );
};

export default NotFound;
