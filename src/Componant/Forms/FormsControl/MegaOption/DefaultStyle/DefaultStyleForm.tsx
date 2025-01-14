import { Card, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Badges } from '../../../../../AbstractElements'
import { defaultFormData } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'

const DefaultStyleForm = () => {
  return (
    <Form className="mega-inline">
      <Row>
        {defaultFormData.map((item,index) => (
          <Col sm="6" key={index}>
            <Card>
              <div className="d-flex p-20">
                <FormGroup className={`radio radio-${item.color} m-0"`} check>
                  <Input id={`radio${item.id}`} type="radio" name="radio1" value="option1" />
                  <Label for={`radio${item.id}`} check>
                    <span className="flex-grow-1 megaoption-space">
                      <span className="mt-0 mega-title-badge">
                        {item.badgeTitle}
                        <Badges color={item.color} className="pull-right digits">{item.digits}</Badges>
                      </span>
                      <span>{item.shippingText}</span>
                    </span>
                  </Label>
                </FormGroup>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Form>
  )
}

export default DefaultStyleForm