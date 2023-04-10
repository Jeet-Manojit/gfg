import React from 'react'
import "./style.css"
import { Button, Card, Col } from 'react-bootstrap';

function User({userData}) {
    const {id,title,firstName,lastName,picture} = userData;
    const fullName = `${title} ${firstName} ${lastName}` 
    
  return (
    //576px 768px 992px 1200px
    <Col xs={10} sm={6} md={5} lg={4} xl={3}>
      <Card className='user'>
          <Card.Body className='user-card'>
              <img className='profile' height="100px" src={picture} alt="profile" />
              <div>
                <div style={{marginBottom : "15px"}}>{fullName}</div>
                  <Button>Add Friend</Button>
                </div>
          </Card.Body> 
      </Card>
    </Col>
  )
}

export default User