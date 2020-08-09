import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

const MainInfo = () => {
  return (
    <div className="p-4 rounded-bottom" style={{ backgroundColor: "#FFF" }}>
      <Row>
        <Col xs={{ span: 3 }}>
          <Image
            style={{ width: '90%' }}
            src="https://www.sardiniauniqueproperties.com/wp-content/uploads/2015/10/square-profile-pic-2.jpg"
            roundedCircle />
        </Col>
        <Col className="py-3">
          <h4 className="m-0">John Doe</h4>
          <span className="text-muted"><i class="fas fa-mars"></i> Male</span>
        </Col>
      </Row>
    </div>
  )
}

export default MainInfo
