import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={editor}
              isBlog={false}
              title="AWS CDK cross stacks reference workshop"
              description="Demonstrate how to do a CDK cross stack reference by two methods: CloudFormation native & ssm store"
              ghLink="https://github.com/aws-6w8hnx/cdk-workshop-cross-stack-reference"
              demoLink="https://repost.aws/knowledge-center/cdk-cross-stack-reference"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AWS CodeDeploy EC2/ASG workshops"
              description="Demonstrate how CodeDeploy works for EC2 and ASG, deployment via AWS CloudFormation"
              ghLink="https://github.com/aws-6w8hnx/code-workshop-ec2-codedeploy"
              demoLink="https://github.com/aws-6w8hnx/code-workshop-ec2-codedeploy/blob/2b45857860d5ae8d8b56876e5267f524cdbb13ed/README.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AWS CodeDeploy ECS/Lambda workshops"
              description="Demonstrate how CodeDeploy works for ECS Blue Green deployment & Rolling update, and Lambda deployment, deployment via AWS Cloud Development Kit(CDK) and AWS Serverless Application Model(SAM)"
              ghLink="https://github.com/aws-6w8hnx/code-workshop-ecs-lambda-codedeploy"
              demoLink="https://github.com/aws-6w8hnx/code-workshop-ecs-lambda-codedeploy/blob/c041a7911b9af50c2e390ea366e0cfdb4c3b3ccd/ECS/README.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AWS Control Tower AFT workshop"
              description="Demonstrate how terraform and AWS Control Tower AFT works, and also have a Control Tower AFT troubleshooting."
              ghLink="https://github.com/aws-6w8hnx/controltower-workshop-aft"
              demoLink="https://github.com/aws-6w8hnx/controltower-workshop-aft/blob/a2fa07d5044c7df7a95479aaad488f2000798591/README.md"              
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
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
