import { Col } from "react-bootstrap";
import './styles.css';

export const ProjectCard = ({ linkProject, title, description, imgUrl }) => {

  return (
    <Col size={12} sm={6} md={4}>
      <a href={linkProject} target="blank">
        <div className="proj-imgbx">
          <img src={imgUrl} className="imgCenter" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
