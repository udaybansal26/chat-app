import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Robot from '../assets/robot.gif'

function Welcome({ currentUser }) {
  // const [username, setUsername] = useState('');

  // useEffect(() => {
  //   async function fetchUsername() {
  //     if (currentUser) {
  //       const user = await currentUser.username; // Assuming this is async, although it likely isn't
  //       setUsername(user);
  //     }
  //   }
  //   fetchUsername();
  // }, [currentUser]);
  return (
    <Container>
      
      <img src={Robot} alt="robot" />
      <h1>Welcome, <span>{currentUser.username}!</span></h1>
      <h3>Please select a chat to start Messaging</h3>
    </Container>
  )
}

export default Welcome

const Container = styled.div `
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  color:white;
  img{
    height:20rem;
  }
  span{
   color:#4e00ff
  }
`