import { Table } from "reactstrap";
import { Image } from "../../../../../AbstractElements";

const InvoiceHeader = () => {
  return (
    <td>
      <Table className="logo-wrappper w-100 order-details" borderless>
        <tbody>
          <tr>
            <td>
              <Image className="img-fluid for-light" src={"/src/assets/images/logo/logo.svg"} alt="logo" />
              <Image className="img-fluid for-dark" src={"/src/assets/images/logo/logo.svg"} alt="logo" />
              <span style={{ opacity: "0.8", display: "block", marginTop: 10 }} >
                202-555-0258
              </span>
            </td>
            <td className="address" style={{ textAlign: "right", opacity: "0.8", width: "16%"}} >
              <span>1982 Harvest Lane New York, NY12210 United State</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceHeader;
