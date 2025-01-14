import { Card, CardBody, Col, Container, Row } from "reactstrap";
import InvoiceSixPrint from "./InvoiceSixPrint";
import InvoiceSixHeader from "./InvoiceSixHeader";
import UserDetails from "./UserDetails";
import InvoiceSixTable from "./InvoiceSixTable";
import { useRef } from "react";

const InvoiceSixContainer = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  return (
    <Container>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <div ref={componentRef} className="invoice">
                <div>
                    <InvoiceSixHeader />
                    <hr />
                    <UserDetails />
                    <InvoiceSixTable />
                </div>
                <InvoiceSixPrint componentRef={componentRef} />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InvoiceSixContainer;
