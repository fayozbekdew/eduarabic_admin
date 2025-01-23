import { Card, CardBody, Col, Form } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";

import { ChangeEvent } from "react";

import CardHeaderCommon from "../../../CommonElements/CardHeaderCommon/CardHeaderCommon";
import { Back, NumberingWizardHeading } from "../../../utils/Constant";
import { numberWizardData } from "../../../Data/Forms/FormsLayout/FormWizardOne/FormWizardOne";
import { Btn } from "../../../AbstractElements";
import StepperHorizontal from "../../Forms/FormsLayout/FormWizardOne/NumberingWizard/StepperHorizontal";
import { handleBackButton, handleNextButton, setBasicInputFormValue } from "../../../ReduxToolkit/Reducers/NumberingWizardSlice";
import OneStepForm from "./OneStepForm";
import CartInfoForm from "../../Forms/FormsLayout/FormWizardOne/NumberingWizard/CartInfoForm";
import FeedbackForm from "../../Forms/FormsLayout/FormWizardOne/NumberingWizard/FeedbackForm";
import FinishForm from "../../Forms/FormsLayout/FormWizardOne/Common/FinishForm";
import FormListBlogAdd from "./FormListBlogAdd";

const AddBlogContainer = () => {
  const { numberLevel, basicInputFormValue, showFinish } = useAppSelector(
    (state) => state.numberingWizard
  );
  const dispatch = useAppDispatch();

  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value =
      name === "agreeTerms" ||
      name === "informationCheckBox" ||
      name === "agreeConditions"
        ? event.target.checked
        : name === "uploadDocumentation"
        ? event.target.files && event.target.files[0].name
        : event.target.value;
    dispatch(setBasicInputFormValue({ ...basicInputFormValue, [name]: value }));
  };

  return (
    <Col xl="12">
      <Card className="">
        <CardHeaderCommon
          title={'Maqola malumotlarini kiriting'}
          span={numberWizardData}
        />
        <CardBody className="basic-wizard important-validation">
          <FormListBlogAdd/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AddBlogContainer;
