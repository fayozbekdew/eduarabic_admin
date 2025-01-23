import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { Fragment, useEffect, useRef, useState } from "react";
import Dropzone, { IDropzoneProps } from "react-dropzone-uploader";
import { toast } from "react-toastify";
import { Progressbar } from "../../../AbstractElements";
import {useNavigate } from 'react-router-dom'
const wrapperStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "#f8f9fa",
};

const overlayStyle = {
  position: "absolute" as "absolute",

  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10,
};

const ThreeStepForm = () => {
  const [section, setSection] = useState<any>([]);
  const [sectionName, setSectionName] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [loader, setLoader] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    minute: "",
    section: "",
    description: "",
    video: null as File | null, // Faylni saqlash uchun
  });

  const getSection = () => {
    fetch("https://api.eduarabic.uz/courses/section/")
      .then((res) => res.json())
      .then((data) => {
        setSection(data);
        sectionNameFn(data);
      });
  };
  useEffect(() => {
    getSection();
  }, []);

  const sectionNameFn = (data: any) => {
    const sections = data.map((item: any) => item.title);
    setSectionName(sections);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleTypeaheadChange = (selected: string[]) => {
    console.log(selected, section);
    const sectionID = section.filter(
      (item: any) => item.title === selected[0]
    )[0].id;
    setFormData((prev) => ({
      ...prev,
      section: sectionID,
    }));
  };
  const handleVideoChange = (file: File) => {
    setFormData((prev) => ({
      ...prev,
      video: file,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    form.append("title", formData.title);
    form.append("minute", formData.minute);
    form.append("section", formData.section);
    form.append("description", formData.description);
    if (formData.video) {
      form.append("video", formData.video);
    }
    try {
      setLoader(true);
      const response = await fetch("https://api.eduarabic.uz/courses/lesson/", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        toast.success("Dars muvaffaqiyatli yuborildi!");
        setLoader(false);
        setFormData({
          title: "",
          minute: "",
          section: "",
          description: "",
          video: null,
        });
        setProgress(0);
        formRef.current.reset();
        navigate('/kurs/umumiy#one')
        
      } else {
        setLoader(false);
        toast.error("Yuborishda xatolik yuz berdi.");
        formRef.current.reset();
      }
    } catch (error) {
      toast.error("Server bilan bog‘lanishda xatolik yuz berdi.");
      setLoader(false);
      formRef.current.reset();
    }
  };
  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };
  const handleDropzoneChangeStatus = ({ file, meta }: any) => {
    if (meta.status === "uploading" && meta.percent) {
      console.log(meta.percent);
      setProgress(Math.round(meta.percent));
    }
    if (meta.status === "done") {
      setProgress(100);
      handleVideoChange(file);
    }
  };

  return (
    <Form
      innerRef={formRef}
      onSubmit={handleSubmit}
      className="stepper-one g-3 needs-validation custom-input"
      noValidate
    >
      {loader && (
        <div style={wrapperStyle}>
          <div style={overlayStyle}>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Progressbar
                style={{ width: "60%" }}
                color="primary"
                striped
                animated
                value="100"
              />
            </Col>
          </div>
        </div>
      )}
      <Row>
        <Col sm="6">
          <FormGroup>
            <Label check>
              {"Dars nomi"}
              <span className="txt-danger">*</span>
            </Label>
            <Input
              name="title"
              type="text"
              placeholder="Dars nomi"
              value={formData.title}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <Label check>
              {"Dars davomiyligi"}
              <span className="txt-danger">*</span>
            </Label>
            <Input
              name="minute"
              type="number"
              placeholder="Dars davomiyligi (minutda)"
              value={formData.minute}
              onChange={handleInputChange}
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
              options={sectionName}
              placeholder="Kursni tanlang"
              id="basic-typeahead"
              onChange={handleTypeaheadChange}
            />
          </FormGroup>
        </Col>
        <Col xs="12">
          <Label check>{"Dars tavsifi"}</Label>
          <Input
            type="textarea"
            name="description"
            rows={3}
            placeholder="Dars tavsifi"
            value={formData.description}
            onChange={handleInputChange}
          />
        </Col>
        <Col xs="12">
          <FormGroup>
            <Label check>
              {"Dars videosi"}
              <span className="txt-danger">*</span>
            </Label>
            <Dropzone
              getUploadParams={getUploadParams}
              onChangeStatus={handleDropzoneChangeStatus}
              maxFiles={1}
            />
            {progress == 100 && <p className="text-success">Yuklandi✅</p>}
          </FormGroup>
        </Col>
      </Row>
      <button className="btn btn-secondary">Yuborish</button>
    </Form>
  );
};

export default ThreeStepForm;
