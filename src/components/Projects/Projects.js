import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import room from "../../Assets/Projects/room.jpg";
import insurance from "../../Assets/Projects/insurance.jpg";
import editor from "../../Assets/Projects/society360.png";
import book from "../../Assets/Projects/book.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import weather from "../../Assets/Projects/weather.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insurance}
              isBlog={false}
              title="InsuranceWallah"
              description="InsuranceWallah is a comprehensive Insurance Management System designed to simplify and streamline the process of managing insurance policies. It provides a centralized platform for users to explore, purchase, and manage insurance policies, while offering admins efficient tools for policy management, user authentication, and claims processing. With features like secure authentication, policy tracking, and seamless integration with payment gateways, InsuranceWallah ensures a hassle-free experience for both customers and administrators."
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Book-Management"
              description="Book-Management is a backend project designed to manage a bookstore efficiently. It provides CRUD operations for handling books, customers, and orders, enabling seamless management of inventory and transactions. The system allows admins to add, update, delete, and retrieve book details while ensuring secure authentication for users. With a well-structured database and RESTful API endpoints, Book-Management serves as the backbone for any bookstore application, ensuring smooth operations and efficient data handling."
              ghLink="https://github.com/Kaushal2212/Book-Management"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={room}
              isBlog={false}
              title="Hotel-Room-Management"
              description="Hotel-Room-Management is a backend project designed to streamline hotel operations by managing rooms, bookings, and customer details efficiently. It provides CRUD operations for handling hotel rooms, reservations, and guest information, ensuring smooth booking and management processes. The system allows admins to add, update, delete, and retrieve room details while offering secure authentication for users. With a structured database and RESTful API endpoints, Hotel-Room-Management serves as the backbone for any hotel booking system, enabling seamless operations and efficient data handling."
              ghLink="https://github.com/Kaushal2212/Hotel-Room-management"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather-Application"
              description="API-Integrated Weather Application is a web-based application that provides real-time weather updates by integrating with third-party weather APIs. Users can search for any city to get detailed weather information, including temperature, humidity, wind speed, and forecasts. The application features a user-friendly interface, dynamic weather icons, and a responsive design for seamless access on any device. With API integration, it ensures accurate and up-to-date weather data, making it a reliable tool for users to plan their day effectively. "
              ghLink="https://github.com/Kaushal2212/CodTech-/tree/master/API%20INTEGRATION"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
