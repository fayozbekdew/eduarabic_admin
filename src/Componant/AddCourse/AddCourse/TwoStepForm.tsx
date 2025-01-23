import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const TwoStepForm = ({ setLevel }: any) => {
  const [courses, setCourses] = useState<any>([]);
  const [courseName, setCourseName] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    course: "",
    title: "",
  });
  const getCourses = () => {
    fetch("https://api.eduarabic.uz/courses/")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        courseNameFn(data);
      });
  };
  useEffect(() => {
    getCourses();
  }, []);
  function courseNameFn(data: any) {
    let course = [];
    data.forEach((item: any) => {
      course.push(item.title);
    });
    setCourseName(course);
  }
  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  function handleTypeaheadChange(selected: string[]) {
    console.log(selected);
    const courseID = courses.filter(
      (item: any) => item.title === selected[0]
    )[0].id;
    setFormData((prev) => ({ ...prev, course: courseID }));
  }
  async function handleSubmit(data: any) {
    console.log(data);
    const req = await fetch("https://api.eduarabic.uz/courses/section/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (req.ok) {
      toast.success("Bo'lim muvaffaqiyatli qo'shildi!");
      setFormData({
        course: "",
        title: "",
      });
      setLevel(3);
    } else {
      toast.error("Bo'lim qo'shishda xatolik yuz berdi!");
    }
  }
  return (
    <Form className="stepper-one g-3 needs-validation custom-input" noValidate>
      <Row>
        <Col sm="12">
          <FormGroup>
            <Label check>
              {"Bo'lim nomi"}
              <span className="txt-danger">*</span>
            </Label>
            <Input
              onChange={handleTitleChange}
              name="title"
              type="text"
              placeholder={"Kurs nomi"}
            />
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <Label check>
              {"Kurslar ro'yhati"}
              <span className="txt-danger">*</span>
            </Label>
            <Typeahead
              onChange={handleTypeaheadChange}
              options={courseName}
              placeholder="Kursni tanlang"
              id="Basic TypeAhead"
            />
          </FormGroup>
        </Col>
      </Row>
      <button
        className="btn btn-secondary mt-4"
        type="button"
        onClick={() => handleSubmit(formData)}
      >
        Yuborish
      </button>
    </Form>
  );
};

export default TwoStepForm;
