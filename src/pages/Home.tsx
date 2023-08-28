import React from 'react';
/** @jsxImportSource @emotion/react */ 
import {css} from "@emotion/react"
import { Card, Col, Row } from 'antd';



const home = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  const {Meta} = Card

  type Card = {
    image: string;
    describe: string;
  };

  const cards:Card[] = [
    {
      image: '1.img',
      describe: 'hello'
    },
    {
      image: '2.img',
      describe: 'hello'
    },
    {
      image: '3.img',
      describe: 'hello'
    },
    {
      image: '4.img',
      describe: 'hello'
    },
    {
      image: '5.img',
      describe: 'hello'
    }
  ]
  return (
    <div css={home}>
      <div>
        <h1>Lemonbase Clone</h1>
      </div>
      <div css={flex}>
        <Row gutter={8}>
          {cards.map((card, idx)=>{
            return (
              <Col key={idx}>
                <Card
                  style={{ width: 400 }}
                  cover={
                    <img
                      alt="${idx} image"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                >
                  <Meta
                    title={card.image}
                    description={card.describe}
                  />
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
    </div>  
  );
};

export default Home;