import React from "react";
import { Container, Row } from "reactstrap";
import FormContainer from "./FormContainer";
const AddCourseFormContainer: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <FormContainer />
      </Row>
    </Container>
  );
};

export default AddCourseFormContainer;
