import React from 'react'
import Card from 'react-bootstrap/Card';


//styling bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
//external css file.
import '../css/profile.css'

//profile image
import myPic from '../images/mypic.jpg'

function ProfilePic() {
  console.log('profilePic')
  return (
    <>
    <Card className='profile-card border-dark '>
        <Card.Img className='profile-img' variant='top' src={myPic}/>
        <Card.Body>
            <Card.Title className='text-start h2 fw-bold text-decoration-underline text-light'>Ajay Manger</Card.Title>
            <Card.Text className='text-start h6'>:-Front-End Developer <br/>&nbsp;&nbsp;Fresher</Card.Text>
        </Card.Body>
    </Card>
    </>
  )
}
export const MemoizedProfilePic=React.memo(ProfilePic);
