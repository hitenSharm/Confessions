import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import Confessionform from "./components/form";
import { css } from "@emotion/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import "antd/dist/antd.css";
import "./App.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(false), 1500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return loading ? (
    <div>
      <Row style={{ marginTop: "12vh", textAlign: "center" }}>
      <ClimbingBoxLoader color="white" loading={loading} css={override} size={40} />
      </Row>
    </div>
  ) : (
    <div>
      <Row style={{ marginTop: "12vh", textAlign: "center" }}>
        <Col span={8} />
        <Col span={8}>
          <h1 className="heading">Confess here</h1>
          <Confessionform />
        </Col>
        <Col span={8} />
      </Row>
    </div>
  );
}

export default App;

