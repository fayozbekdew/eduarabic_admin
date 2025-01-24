import React, { useEffect, useRef, useState } from "react";
import {
  Col,
  Form,
  Container,
  Card,
  CardBody,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { toast } from "react-toastify";
import CardHeaderCommon from "../../CommonElements/CardHeaderCommon/CardHeaderCommon";
const AddQuizForm: React.FC = ({ setLevel }: any) => {
  const [lesson, setLesson] = useState([]);
  const [lessonName, setLessonName] = useState([]);
  const [variants, setVariants] = useState([]);
  const variantSelectRef = useRef(null);
  const variantRef = useRef(null);
  const [formData, setFormData] = useState({
    question: "",
    lesson: "",
    true_answer: "",
  });
  const getLesson = () => {
    fetch("https://api.eduarabic.uz/courses/lesson/")
      .then((res) => res.json())
      .then((data) => {
        setLesson(data), lessonNameFn(data);
      });
  };
  useEffect(() => {
    getLesson();
  }, []);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleVariant = () => {
    let optionVal = "";
    const selectedOption = Array.from(
      variantSelectRef.current.querySelectorAll("input")
    ).find((radio) => radio.checked);
    if (selectedOption) {
      optionVal = selectedOption.value;
    }
    if (variantRef.current?.value && optionVal) {
      setVariants([
        ...variants,
        { text: variantRef.current.value, option: optionVal },
      ]);
    }
    variantRef.current.value = "";
  };
  const handleLessonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e[0]) {
      const lessonID = lesson.filter((lesson) => lesson.title === e[0])[0].id;
      setFormData((prev) => ({ ...prev, lesson: lessonID }));
    }
  };
  const handleTrueAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e[0]) {
      const lessonID = ["a", "b", "c", "d"].filter(
        (lesson) => lesson === e[0]
      )[0];
      setFormData((prev) => ({ ...prev, true_answer: lessonID }));
    }
  };

  function lessonNameFn(authors) {
    let authorsName: string[] = [];
    authors.forEach((author: any) => {
      authorsName.push(author.title);
    });
    setLessonName(authorsName);
  }

  function handleDeleteVariant(name: string) {
    setVariants(variants.filter((des) => des?.text?.toLowerCase() !== name));
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.question && formData.true_answer && formData.lesson) {
      fetch("https://api.eduarabic.uz/courses/lesson/test/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...formData,
            variants: variants
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            toast.success("Test qo'shildi");
          } else {
            toast.error("Test qo'shishda xatolik yuz berdi");
          }
        });
    } else {
      toast.error("Test qo'shishda xatolik yuz berdi");
    }
  };
  console.log(formData);
  return (
    <Container fluid>
      <Row>
        <Col xl="12">
          <Card className="">
            <CardHeaderCommon title={"Testni kiriting"} />
            <CardBody className="basic-wizard important-validation">
              <Form
                id="one"
                onSubmit={handleSubmit}
                className="stepper-one g-3 needs-validation custom-input"
                noValidate
              >
                <Row>
                  <Col sm="6">
                    <FormGroup>
                      <Label check>
                        {"Darsni tanlang"}
                        <span className="txt-danger">*</span>
                      </Label>
                      <Typeahead
                        id="category"
                        options={lessonName}
                        onChange={handleLessonChange}
                        placeholder="Darsni tanlang"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label check>
                        {"Test savolini kiriting"}
                        <span className="txt-danger">*</span>
                      </Label>
                      <Input
                        name="question"
                        value={formData.question}
                        onChange={handleInputChange}
                        placeholder="Test savoli"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col className="mb-5 mt-2" xs="12">
                    <Label check>{"Test variantlari"}</Label>

                    <div
                      style={{ height: "100%", minHeight: "100px" }}
                      className="border d-flex flex-column p-2 gap-1"
                    >
                      <div className=" w-100 h-100 bg-red border w-100 p-2 d-flex flex-column gap-1">
                        {variants.map((item, index) => (
                          <small
                            key={index}
                            className="d-flex justify-content-between align-items-center gap-4 w-100 border p-2 b-radius-10"
                          >
                            <small className="d-flex align-items-center gap-2">
                              <p>{item.option}.</p>
                              {item.text}
                            </small>
                            <button
                              type="button"
                              className="fa fa-minus-square text-danger border-0 bg-transparent"
                              onClick={() => handleDeleteVariant(item?.text)}
                            ></button>
                          </small>
                        ))}
                      </div>
                      <span className="d-flex align-items-center gap-4 w-100">
                        <div className="d-flex gap-4" ref={variantSelectRef}>
                          <label className="d-flex gap-2 align-items-center">
                            A
                            <input type="radio" name="variant" value="a" />
                          </label>

                          <label className="d-flex gap-2 align-items-center">
                            B
                            <input type="radio" name="variant" value="b" />
                          </label>

                          <label className="d-flex gap-2 align-items-center">
                            C
                            <input type="radio" name="variant" value="c" />
                          </label>
                          <label className="d-flex gap-2 align-items-center">
                            D
                            <input type="radio" name="variant" value="d" />
                          </label>
                        </div>
                        <Input
                          innerRef={variantRef}
                          name=""
                          type="text"
                          placeholder={"test variantini kiriting"}
                        />
                        <button
                          onClick={handleVariant}
                          type="button"
                          className="btn btn-primary"
                        >
                          +
                        </button>
                      </span>
                    </div>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label check>
                        {"To'g'ri javobni tanlang"}
                        <span className="txt-danger">*</span>
                      </Label>
                      <Typeahead
                        id="true_answer"
                        options={["a", "b", "c", "d"]}
                        onChange={handleTrueAnswerChange}
                        placeholder="To'gri javobni tanlang"
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <button className="btn btn-secondary mt-4">Yuborish</button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddQuizForm;