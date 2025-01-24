import React, { useEffect, useRef, useState } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import Dropzone, { IDropzoneProps } from "react-dropzone-uploader";
import { toast } from "react-toastify";
const OneStepForm: React.FC = ({ setLevel }: any) => {
  const [author, setAuthor] = useState([]);
  const [authorName, setAuthorName] = useState<string[]>([]);
  const [selectedAuthor, setSelectedAuthor] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [courseLevel, setCourseLevel] = useState("");
  const extraDescRef = useRef(null);
  const [extraDesc, setExtraDesc] = useState<object[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    courseBannerVideo: "",
    image: "",
    banner: "",
    course_banner_video_image: "",
    course_banner_video_id: "",
  });
  const courseCategory = [
    "Miftahul Arobiyya",
    "Bayna Yadayk",
    "At-Takallum",
    "Manhajul Alamiy",
    "Al-Kamil",
    "Lisan",
    "Sarf",
    "Nahv",
  ];
  const getAuthor = () => {
    fetch("https://api.eduarabic.uz/courses/author/")
      .then((res) => res.json())
      .then((data) => {
        setAuthor(data);
        authorNameFn(data);
      });
  };
  useEffect(() => {
    getAuthor();
  }, []);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleExtraDesc = () => {
    if (extraDescRef.current?.value) {
      setExtraDesc([...extraDesc, { extra_desc: extraDescRef.current.value }]);
      extraDescRef.current.value = "";
    }
  };
  const handleCourseAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e[0]) {
      const authorID = author.filter((author) => author.name === e[0])[0].id;
      setSelectedAuthor(authorID);
    }
  };
  const handleCourseCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e[0]) {
      const category = e[0].toLowerCase().split(" ").join("_");
      setSelectedCategory(category);
    }
  };
  const handleCourseLevel = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e[0] && e[0].toLowerCase() === "boshlangich") {
      setCourseLevel("beginner");
    } else if (e[0] && e[0].toLowerCase() === "o'rta") {
      setCourseLevel("middle");
    } else if (e[0] && e[0].toLowerCase() === "yuqori") {
      setCourseLevel("advanced");
    }
  };

  function authorNameFn(authors) {
    let authorsName: string[] = [];
    authors.forEach((author: any) => {
      authorsName.push(author.name);
    });
    setAuthorName(authorsName);
  }
  const handleImageChange = (fileWithMeta: {
    meta: { status: string };
    file: File;
  }) => {
    if (fileWithMeta.meta.status === "done") {
      setFormData((prev) => ({
        ...prev,
        image: fileWithMeta.file,
      }));
    } else if (fileWithMeta.meta.status === "removed") {
      setFormData((prev) => ({
        ...prev,
        image: null, // Agar fayl o'chirilsa, `null` qiling
      }));
    }
  };

  const handleBannerChange = (fileWithMeta: {
    meta: { status: string };
    file: File;
  }) => {
    if (fileWithMeta.meta.status === "done") {
      setFormData((prev) => ({
        ...prev,
        banner: fileWithMeta.file,
      }));
    } else if (fileWithMeta.meta.status === "removed") {
      setFormData((prev) => ({
        ...prev,
        banner: null, // Agar fayl o'chirilsa, `null` qiling
      }));
    }
  };

  const handleBannervideoImg = (fileWithMeta: {
    meta: { status: string };
    file: File;
  }) => {
    if (fileWithMeta.meta.status === "done") {
      setFormData((prev) => ({
        ...prev,
        course_banner_video_image: fileWithMeta.file,
      }));
    } else if (fileWithMeta.meta.status === "removed") {
      setFormData((prev) => ({
        ...prev,
        course_banner_video_image: null,
      }));
    }
  };
  function handleDeleteExtra(name: string) {
    setExtraDesc(extraDesc.filter((des) => des.extra_desc !== name));
  }
  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let FormDataSend = new FormData();
    FormDataSend.append("title", formData.title);
    FormDataSend.append("description", formData.description);
    FormDataSend.append("price", formData.price);
    FormDataSend.append("category", selectedCategory);
    FormDataSend.append("level", courseLevel);
    FormDataSend.append("author", selectedAuthor);
    FormDataSend.append("course_descs", JSON.stringify(extraDesc));
    //   extraDesc.forEach(desc => {
    //     FormDataSend.append("course_descs", JSON.stringify(desc));
    // });
    FormDataSend.append(
      "course_banner_video_id",
      formData.course_banner_video_id
    );
    FormDataSend.append(
      "course_banner_video_image",
      formData.course_banner_video_image
    );
    if (formData.banner) {
      FormDataSend.append("banner", formData.banner);
    }
    if (formData.image) {
      FormDataSend.append("image", formData.image);
    }

    console.log("Jo'natiladigan ma'lumot:", FormDataSend);
    // Serverga yuborish
    fetch("https://api.eduarabic.uz/courses/", {
      method: "POST",
      body: FormDataSend,
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Ma'lumot muvaffaqiyatli yuborildi!");
          setLevel(2);
        } else {
          toast.error("Xatolik yuz berdi!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Server bilan ulanishda xatolik yuz berdi!");
      });
  };
  console.log(formData);
  console.log(extraDesc);
  return (
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
              {"Kurs nomi"}
              <span className="txt-danger">*</span>
            </Label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Kurs nomi"
              required
            />
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <Label check>
              {"Narxi"}
              <span className="txt-danger">*</span>
            </Label>
            <Input
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Narxni kiriting"
              type="number"
              required
            />
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <Label check>
              {"Kurs kategoriyasi"}
              <span className="txt-danger">*</span>
            </Label>
            <Typeahead
              id="category"
              options={courseCategory}
              onChange={handleCourseCategory}
              placeholder="Kategoriyani tanlang"
              required
            />
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <Label check>
              {"Kurs darajasi"}
              <span className="txt-danger">*</span>
            </Label>
            <Typeahead
              id="level"
              options={["Boshlangich", "O'rta", "Yuqori"]}
              onChange={handleCourseLevel}
              placeholder="Darajani tanlang"
              required
            />
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <Label check>
              {"Kurs banner video"}
              <span className="txt-danger">*</span>
            </Label>
            <Input
              name="course_banner_video_id"
              value={formData.course_banner_video_id}
              onChange={handleInputChange}
              placeholder="Video ID kiriting"
              required
            />
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <Label check>
              {"Kurs o'qituvchisi"}
              <span className="txt-danger">*</span>
            </Label>
            <Typeahead
              id="author"
              options={authorName}
              onChange={handleCourseAuthor}
              placeholder="O'qituvchini tanlang"
              required
            />
          </FormGroup>
        </Col>
        <Col xs="12">
          <FormGroup>
            <Label check>
              {"Kurs banner uchun rasm"}
              <span className="txt-danger">*</span>
            </Label>
            <Dropzone
              getUploadParams={getUploadParams}
              onChangeStatus={handleBannervideoImg}
              maxFiles={1}
            />
          </FormGroup>
        </Col>
        <Col xs="6">
          <FormGroup>
            <Label check>
              {"Kurs uchun rasm "}
              <span className="txt-danger">*</span>
            </Label>
            <Dropzone
              getUploadParams={getUploadParams}
              onChangeStatus={handleImageChange}
              maxFiles={1}
            />
          </FormGroup>
        </Col>
        <Col xs="6">
          <FormGroup>
            <Label check>
              {"Kurs uchun banner"}
              <span className="txt-danger">*</span>
            </Label>
            <Dropzone
              getUploadParams={getUploadParams}
              onChangeStatus={handleBannerChange}
              maxFiles={1}
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
        <Col xs="12">
          <Label check>{"Kurs afzalligi"}</Label>

          <div
            style={{ height: "100%", minHeight: "100px" }}
            className="border d-flex flex-column p-2 gap-1"
          >
            <div className=" w-100 h-100 bg-red border w-100 p-2 d-flex flex-column gap-1">
              {extraDesc.map((item, index) => (
                <small
                  key={index}
                  className="d-flex justify-content-between align-items-center gap-4 w-100 border p-2 b-radius-10"
                >
                  {item?.extra_desc}
                  <button
                    type="button"
                    className="fa fa-minus-square text-danger border-0 bg-transparent"
                    onClick={() => handleDeleteExtra(item?.extra_desc)}
                  ></button>
                </small>
              ))}
            </div>
            <span className="d-flex align-items-center gap-4 w-100">
              <Input
                innerRef={extraDescRef}
                name="firstName"
                type="url"
                placeholder={"Kurs uchun afzalliglar"}
              />
              <button
                onClick={handleExtraDesc}
                type="button"
                className="btn btn-primary"
              >
                +
              </button>
            </span>
          </div>
        </Col>
      </Row>
      <button className="btn btn-secondary mt-4">Yuborish</button>
    </Form>
  );
};

export default OneStepForm;
