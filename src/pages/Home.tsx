import React from 'react';
/** @jsxImportSource @emotion/react */ 
import {css} from "@emotion/react"
import { Card, Col, Row } from 'antd';


const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const home = css`
  ${flex}
  min-height: 80vh;
  flex-direction: column;  
`
const cardStyle = css`
  ${flex}
  max-height: 80%;
`

const Home = () => {
  const {Meta} = Card

  type Card = {
    image: string;
    title: string;
    describe: string;
  };

  const cards:Card[] = [
    {
      image: '1.img',
      title: '목표',
      describe: 'hello'
    },
    {
      image: '2.img',
      title: '목표',
      describe: 'hello'
    },
    {
      image: '3.img',
      title: '목표',
      describe: 'hello'
    },
  ]
  return (
    <div css={home}>
      <div css={css`flex-basis: 10rem;`}>
        <h1>Lemonbase Clone</h1>
      </div>
      <div css={cardStyle}>
        <Row gutter={[8, 8]} justify="center" align="middle">
          {cards.map((card, idx)=>{
            return (
              <Col key={idx.toString()} span={8}>
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