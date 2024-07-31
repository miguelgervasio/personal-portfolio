import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.jpg";
import projImg3 from "../../assets/img/project-img3.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './styles.css';

export const Projects = () => {

  const projects = [
    {
      linkProject: "https://projeto-front-end-gamma.vercel.app",
      title: "PlayVício Global",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      linkProject: "https://plann-er-gamma.vercel.app",
      title: "Plann.er",
      description: "Development",
      imgUrl: projImg2,
    },
    {
      title: "--",
      description: "--",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Meus Projetos</h2>
                  <p>Abaixo você encontrará uma seleção dos meus projetos. Obrigado por dedicar seu tempo para conferir o meu trabalho. Espero que goste!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Ainda não temos nada aqui!</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Ainda não temos nada aqui!</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
