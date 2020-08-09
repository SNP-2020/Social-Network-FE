import React, { useState } from 'react'
import './Post.css';
import { Card, Row, Col, Image } from 'react-bootstrap'
import TimeAgo from 'timeago-react'

const Post = (props) => {

  return (
    <Card className="mt-3 border-0 shadow" style={{ borderRadius: "2rem" }}>

      <Card.Body className="pt-2">
        <Card.Title className="mb-1">
          <Row className="px-2">
            <Col xs={{ span: 1 }} className="p-0">
              <Image
                style={{ width: '80%' }}
                src={props.postData.owner.profilePic}
                roundedCircle />
            </Col>
            <Col className="py-1 mt-1 px-0">
              <span className="post-name m-0">{props.postData.owner.name}</span>
              <span className="post-time text-muted"><TimeAgo datetime={props.postData.timestamp} /></span>
            </Col>
          </Row>
        </Card.Title>
        <hr className="my-2" />
        <Card.Text>
          {props.postData.content.text}
        </Card.Text>
      </Card.Body>
      {props.postData.content.image &&
        (
          <Card.Img
            variant="bottom"
            src={props.postData.content.image}
            style={{ borderBottomLeftRadius: "2rem", borderBottomRightRadius: "2rem" }} />
        )}
    </Card>
  )
}

export default Post
