import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my projects.
        </Desc>
        
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Frontend projects' ?
            <ToggleButton active value="Frontend projects" onClick={() => setToggle('Frontend projects')}>Frontend Projects</ToggleButton>
            :
            <ToggleButton value="Frontend projects" onClick={() => setToggle('Frontend projects')}>Frontend Projects</ToggleButton>
          }
          <Divider />
          {toggle === 'UI/UX Design' ?
            <ToggleButton active value="UI/UX Design" onClick={() => setToggle('UI/UX Design')}>UI/UX Design</ToggleButton>
            :
            <ToggleButton value="UI/UX Design" onClick={() => setToggle('UI/UX Design')}>UI/UX Design</ToggleButton>
          }
          <Divider />
          {toggle === 'Mini Projects' ?
            <ToggleButton active value="Mini Projects" onClick={() => setToggle('Mini Projects')}>Mini Projects</ToggleButton>
            :
            <ToggleButton value="Mini Projects" onClick={() => setToggle('Mini Projects')}>Mini Projects</ToggleButton>
          }
          
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects