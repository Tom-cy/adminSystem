import React, { Component } from "react";
import { Card, Row, Col, Modal } from "antd";
const { Meta } = Card;
export default class Gallery extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      visible: false
    };
  }
  bigimg = imgsrc => {
    this.setState({
      imgsrc,
      visible: true
    });
  };
  render() {
    const imgs = [
      ["1.png", "2.png", "3.png", "4.png", "5.png"],
      ["6.png", "7.png", "8.png", "9.png", "10.png"],
      ["11.png", "12.png", "13.png", "14.png", "15.png"],
      ["16.png", "17.png", "18.png", "19.png", "20.png"],
      ["21.png", "22.png", "23.png", "24.png", "25.png"]
    ];

    const imgList = imgs.map((item, index) =>
      item.map((item, index) => (
        <Card
          style={{ marginBottom: 10 }}
          key={index}
          hoverable
          cover={<img src={"./gallery/"+item} alt=''/>}
          onClick={() => this.bigimg(item)}
        >
          <Meta title="Europe Street beat" description="OOOOOO" />
        </Card>
      ))
    );

    return (
      <div>
        <Row gutter={10}>
          <Col span={5}>{imgList[0]}</Col>
          <Col span={5}>{imgList[1]}</Col>
          <Col span={5}>{imgList[2]}</Col>
          <Col span={5}>{imgList[3]}</Col>
          <Col span={4}>{imgList[4]}</Col>
        </Row>
        <Modal
          width={350}
          // height={500}
          visible={this.state.visible}
          onCancel={() => {
            this.setState({
              visible: false
            });
          }}
          footer={null}
        >
          <img
            style={{ width: "100%" }}
            src={"./gallery/" + this.state.imgsrc}
            alt=""
          />
        </Modal>
      </div>
    );
  }
}
