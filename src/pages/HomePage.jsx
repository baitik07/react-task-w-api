import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [infos, setInfos] = useState([]);

  async function getInformation() {
    const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
    setInfos(data);
    console.log(data);
  }

  useEffect(() => {
    console.log("birth");
    getInformation();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: "20px",
        rowGap: "30px",
      }}
    >
      {infos.map((item) => (
        <Card
          bg="dark"
          data-bs-theme="dark"
          key={item.id}
          border="warning"
          style={{ width: "18rem" }}
        >
          <Card.Header style={{ height: "95px", padding: "16px" }}>
            {item.title}
          </Card.Header>
          <Card.Body>
            <Card.Title>News</Card.Title>
            <Card.Text style={{ margin: "0" }}>{item.body}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default HomePage;
