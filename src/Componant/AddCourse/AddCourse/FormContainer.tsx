import { Card, CardBody, Col, Form } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";

import { ChangeEvent, useState } from "react";

import CardHeaderCommon from "../../../CommonElements/CardHeaderCommon/CardHeaderCommon";
import { numberWizardData } from "../../../Data/Forms/FormsLayout/FormWizardOne/FormWizardOne";
import StepperHorizontal from "../../Forms/FormsLayout/FormWizardOne/NumberingWizard/StepperHorizontal";
import { setBasicInputFormValue } from "../../../ReduxToolkit/Reducers/NumberingWizardSlice";
import OneStepForm from "./OneStepForm";
import TwoStepForm from "./TwoStepForm";
import ThreeStepForm from "./ThreeStepForm";

const FormContainer = () => {
  const [level, setLevel] = useState(1);
  return (
    <Col xl="12">
      <Card className="">
        <CardHeaderCommon
          title={"Kurs haqida malumtlarni kiriting"}
          span={numberWizardData}
        />
        <CardBody className="basic-wizard important-validation">
          <StepperHorizontal level={level} />
          <div id="msform">
            {level === 1 && <OneStepForm setLevel={setLevel} />}
            {level === 2 && <TwoStepForm setLevel={setLevel} />}
            {level === 3 && <ThreeStepForm setLevel={setLevel} />}
          </div>
          {/* <div className="wizard-footer d-flex gap-2 justify-content-end mt-5">
            {numberLevel > 1 && (
              <Btn
                className="alert-light-primary"
                color="transparent"
                onClick={() => dispatch(handleBackButton())}
              >
                {'Ortga'}
              </Btn>
            )}
            <Btn
              disabled={showFinish ? true : false}
              color="primary"
              onClick={() => dispatch(handleNextButton())}
            >
              {showFinish ? "Yuborish" : "Keyingi"}
            </Btn>
          </div> */}
        </CardBody>
      </Card>
    </Col>
  );
};

export default FormContainer;
