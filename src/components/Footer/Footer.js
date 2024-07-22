import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import './styles.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h2 id="mainLogo">MG</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/miguel-gervasio/" target="blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/miguelgervasio_/" target="blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
