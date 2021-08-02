import React ,{useState} from "react";
import { Form, Input, Button,Row,Col,notification } from "antd";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

import database from "../firebase/firebase";
import getLocationFromIp from "../functions/getLocation";
import "./form.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Confessionform = () => {

    const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);    
    var userLocation=await getLocationFromIp();
    if(userLocation.error)
    {
      notification.error({
        message:'Ad Block detected!',
        description:'Please disable ad block!'
      });
      setLoading(false);
      return ;
    }
    console.log("Sending");
    var newMessage=database.ref('messages').push();
    newMessage.set({
      sentBy:values.username,
      confession:values.confession,
      ConfeessionFor:values.confesse,
      country:userLocation.data.country,
      state:userLocation.data.regionName,
      city:userLocation.data.city,
      zipCode:userLocation.data.zip,
      isp:userLocation.data.isp,
      latitude:userLocation.data.lat,
      longitude:userLocation.data.lon,
      ipAddress:userLocation.data.query
    })
    console.log("Sent too much! ;)");
    notification.success({
      message:'Sent!'
    });
    setLoading(false);
  };

  return (
    <>
      <BeatLoader color="white" loading={loading} css={override} size={40} />
      <Form onFinish={onFinish} style={{alignItems:"center"}}>
        <Form.Item label="Username" name="username">
          <Input placeholder="Give yourself any name!" />
        </Form.Item>
        <Form.Item label="Confess to" name="confesse">
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item label="Confession" name="confession">
          <Input.TextArea placeholder="Confession here" />
        </Form.Item>
        <Form.Item>
        <Row>
            <Col xs={100} sm={100} md={12}/>
            <Col>
            <Button type="primary" htmlType="submit">
          Submit
        </Button>
            </Col>
            <Col span={5}/>
        </Row>        
        </Form.Item>
      </Form>
    </>
  );
};

export default Confessionform;
