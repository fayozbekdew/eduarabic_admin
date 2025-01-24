import Dropzone from "react-dropzone-uploader";
import {
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Container,
  Card,
  CardBody,
} from "reactstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import CardHeaderCommon from "../../CommonElements/CardHeaderCommon/CardHeaderCommon";
const AddAuthorForm: React.FC = () => {
  const [socials, setSocials] = useState([]);
  const socialsRef = useRef(null);
  const socialsSelectRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    occupation: "",
    avatar: "",
  });
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  const handleSocials = () => {
    let socialsName = "";
    const selectedRadio = Array.from(
      socialsSelectRef.current.querySelectorAll("input")
    ).find((radio) => radio.checked);
    if (selectedRadio) {
      socialsName = selectedRadio.value;
    }

    if (socialsRef.current?.value && socialsName) {
      setSocials([
        ...socials,
        { link: socialsRef.current.value, name: socialsName },
      ]);
      socialsRef.current.value = "";
      socialsSelectRef.current.value = "";
      socialsName = "";
    }
  };
  function handleDeleteSocials(name: string) {
    setSocials(socials.filter((des) => des.name !== name));
  }
  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };
  const handleAvatarImg = (fileWithMeta: {
    meta: { status: string };
    file: File;
  }) => {
    if (fileWithMeta.meta.status === "done") {
      setFormData((prev) => ({
        ...prev,
        avatar: fileWithMeta.file,
      }));
    } else if (fileWithMeta.meta.status === "removed") {
      setFormData((prev) => ({
        ...prev,
        avatar: null,
      }));
    }
  };
  async function handleSubmit(data: any) {
    let form = new FormData();
    form.append("name", formData.name);
    form.append("description", formData.description);
    form.append("occupation", formData.occupation);
    form.append("avatar", formData.avatar);
    form.append("socials", JSON.stringify(socials));
    try {
      const response = await fetch("https://api.eduarabic.uz/courses/author/", {
        method: "POST",
        body: form,
      });
      if (response.ok) {
        toast.success("O'qituvchi muvaffaqiyatli qo'shildi");
      } else {
        toast.error("O'qituvchi qo'shishda xatolik yuz berdi");
      }
    } catch (error) {
      toast.error("O'qituvchi qo'shishda xatolik yuz berdi");
    }
  }
  return (
    <Container fluid>
      <Row>
        <Col xl="12">
          <Card className="">
            <CardHeaderCommon title={"O'qituchi malumotlarini kiriting"} />
            <CardBody className="basic-wizard important-validation">
              <Form
                className="stepper-one g-3 needs-validation custom-input"
                noValidate
              >
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <Label check>
                        {"O'qituvchi ismi"}
                        <span className="txt-danger">*</span>
                      </Label>
                      <Input
                        onChange={handleInputChange}
                        name="name"
                        type="text"
                        value={formData.name}
                        placeholder={"Kurs nomi"}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="12">
                    <FormGroup>
                      <Label check>
                        {"Kasbi"}
                        <span className="txt-danger">*</span>
                      </Label>
                      <Input
                        onChange={handleInputChange}
                        name="occupation"
                        type="text"
                        value={formData.occupation}
                        placeholder={"Kasbini kiriting"}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="12">
                    <Label check>{"Tavsif"}</Label>
                    <Input
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      type="textarea"
                      placeholder="Tavsif kiriting"
                      rows={3}
                    />
                  </Col>
                  <Col className="mb-5 mt-2" xs="12">
                    <Label check>{"Ijtimoiy tarmoqlar"}</Label>

                    <div
                      style={{ height: "100%", minHeight: "100px" }}
                      className="border d-flex flex-column p-2 gap-1"
                    >
                      <div className=" w-100 h-100 bg-red border w-100 p-2 d-flex flex-column gap-1">
                        {socials.map((item, index) => (
                          <small
                            key={index}
                            className="d-flex justify-content-between align-items-center gap-4 w-100 border p-2 b-radius-10"
                          >
                            {item?.name}
                            <button
                              type="button"
                              className="fa fa-minus-square text-danger border-0 bg-transparent"
                              onClick={() => handleDeleteSocials(item?.name)}
                            ></button>
                          </small>
                        ))}
                      </div>
                      <span className="d-flex align-items-center gap-4 w-100">
                        <div className="d-flex gap-4" ref={socialsSelectRef}>
                          <label className="d-flex gap-2 align-items-center">
                            Telegram
                            <input
                              type="radio"
                              name="social"
                              value="telegram"
                            />
                          </label>

                          <label className="d-flex gap-2 align-items-center">
                            Instagram
                            <input
                              type="radio"
                              name="social"
                              value="instagram"
                            />
                          </label>

                          <label className="d-flex gap-2 align-items-center">
                            Youtube
                            <input type="radio" name="social" value="youtube" />
                          </label>
                        </div>
                        <Input
                          innerRef={socialsRef}
                          name="firstName"
                          type="url"
                          placeholder={"Ijtimoiy tarmoq linkini kiriting"}
                        />
                        <button
                          onClick={handleSocials}
                          type="button"
                          className="btn btn-primary"
                        >
                          +
                        </button>
                      </span>
                    </div>
                  </Col>
                  <Col xs="12">
                    <FormGroup>
                      <Label check>
                        {"Kurs banner uchun rasm"}
                        <span className="txt-danger">*</span>
                      </Label>
                      <Dropzone
                        getUploadParams={getUploadParams}
                        onChangeStatus={handleAvatarImg}
                        maxFiles={1}
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
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddAuthorForm;
