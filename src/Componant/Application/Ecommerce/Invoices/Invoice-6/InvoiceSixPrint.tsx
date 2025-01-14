import { Col } from "reactstrap";
import { Btn } from "../../../../../AbstractElements";
import { Cancel, Print } from "../../../../../utils/Constant";
import { useReactToPrint } from "react-to-print";

const InvoiceSixPrint = ({ componentRef }: { componentRef: React.RefObject<HTMLDivElement> }) => {
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Col sm="12" className="text-center mt-3">
      <Btn color="primary" className="me-2" onClick={handlePrint}>
        {Print}
      </Btn>
      <Btn color="secondary">
        {Cancel}
      </Btn>
    </Col>
  );
};

export default InvoiceSixPrint;
