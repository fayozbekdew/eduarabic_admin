import { Table } from "reactstrap";
import { Image } from "../../../../../AbstractElements";
import InvoiceRightSide from "./InvoiceRightSide";
import InvoiceAddress from "./InvoiceAddress";
import InvoiceDetail from "./InvoiceDetail";

const InvoiceFiveHeader = () => {
  return (
    <Table className="table-responsive" style={{ width: "100%" }} borderless>
      <tbody>
        <tr style={{ padding: "28px 0 5px", display: "flex", justifyContent: "space-between", alignItems: "center" }} >
          <td>
            <Image className="img-fluid for-light" src={"/src/assets/images/logo/logo.svg"} alt="logo" />
            <Image className="img-fluid for-dark" src={"/src/assets/images/logo/logo.svg"} alt="logo"/>
          </td>
          <td>
            <InvoiceRightSide />
          </td>
        </tr>
        <tr style={{ display: "flex", justifyContent: "space-between" }} >
            <InvoiceAddress />
            <InvoiceDetail />
        </tr>
      </tbody>
    </Table>
  );
};

export default InvoiceFiveHeader;
