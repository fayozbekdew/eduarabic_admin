import {  Row,Container } from "reactstrap";
import AddBlogContainer from "./AddBlogContainer";
import AddBlogForms from "./AddBlogForms";
const AddBlogForm = () => {
  return (
    <Container fluid>
      <Row>
       <AddBlogContainer/>
      </Row>
    </Container>
  );
};

export default AddBlogForm;
