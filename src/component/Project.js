import React from 'react';
import Card from 'react-bootstrap/Card'

//bootstrap styling css
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Project.css'
//importing image
import project from '../images/project.jpg'

//import videos
import videodata from '../json/video.json'

function Project() {  
    console.log("project");
  return (
    <div className="project-main">
      <h1 className="heading text-dark">Ongoing Project are listed below:-</h1>
      <div className='demo-pic text-dark'>
        <h2 className='text-dark'>Discription about projects:</h2>
        <p className='mx-3'>All the projects listed here is the react application.
          <br/>
          Code Editor: VSCode.<br/>
          languages: HTML5, CSS, JSX.<br/>
          Database: SQL Server.
        </p>
        <Card>
        <Card.Img src={project}></Card.Img>
        </Card>
      </div>
      <div className='project-display'>
        {
            videodata.map(key=><div className='div-vdo border' key={key.id}><video src={key.src} width="420" height="345" autoPlay controls muted loop/> <p>Project Name: {key.name} <br/> Video Type: {key.type}</p> </div>)
        }
      </div>
    </div>
  )
}

export const MemoizedProject= React.memo(Project);
