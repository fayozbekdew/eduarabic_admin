import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import Dropzone, { IDropzoneProps } from "react-dropzone-uploader";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";

const FormListBlogAdd = () => {
  const [category, setCategory] = useState<any[]>([]);
  const [categoryName, setCategoryName] = useState<string[]>([]);
  const [extraDesc, setExtraDesc] = useState<object[]>([]);
  const [tag, setTag] = useState<object[]>([]);
  const extraDescRef = useRef(null);
  const tagRef = useRef(null);
  const blogRef = useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    banner: "",
    extra_desc: "",
    what_learn: "",
  });
  const getCategories = () => {
    fetch("https://api.eduarabic.uz/api/v1/blog/category/")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        CategoryNameCut(data);
      });
  };
  useEffect(() => {
    getCategories();
  }, []);
  const CategoryNameCut = (categories: any) => {
    const category = categories.map((item: any) => item.name);
    setCategoryName(category);
  };
  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleCategoryChange = (selected: string[]) => {
    const sectionID = category.filter(
      (item: any) => item.name === selected[0]
    )[0].id;
    setFormData((prev) => ({
      ...prev,
      category: sectionID,
    }));
  };
  const handleExtraDesc = () => {
    if (extraDescRef.current?.value) {
      setExtraDesc([...extraDesc, { title: extraDescRef.current.value }]);
      extraDescRef.current.value = "";
    }
  };
  function handleDeleteExtra(name: string) {
    setExtraDesc(extraDesc.filter((des) => des.title !== name));
  }
  const handleAddTag = () => {
    if (tagRef.current?.value) {
      setTag([...tag, { name: tagRef.current.value }]);
      tagRef.current.value = "";
    }
  };
  function handleDeleteTag(name: string) {
    setTag(extraDesc.filter((des) => des.name !== name));
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", formData.title);
    form.append("category", formData.category);
    form.append("description", formData.description);
    form.append("extra_desc", formData.extra_desc);
    form.append("what_learn", formData.what_learn);
    form.append("image", formData.image);
    form.append("banner", formData.banner);
    form.append("tag", JSON.stringify(tag));
    form.append("post_desc", JSON.stringify(extraDesc));
    console.log('form', form);
    fetch("https://api.eduarabic.uz/api/v1/blog/post/", {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success(data.message);
          blogRef.current?.reset();
        }
      })
  };
  return (
    <Form
      innerRef={blogRef}
      onSubmit={handleSubmit}
      className="stepper-one g-3 needs-validation custom-input"
      noValidate
    >
      <Row>
        <Col sm="6">
          <FormGroup>
            <Label check>
              {"Maqola nomi"}
              <span className="txt-danger">*</span>
            </Label>
            <Input
              name="title"
              type="text"
              onChange={handleInputChange}
              placeholder="Maqola nomini kiriting"
            />
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <Label check>
              {"Maqola kategoriyasi"}
              <span className="txt-danger">*</span>
            </Label>
            <Typeahead
              options={categoryName}
              onChange={handleCategoryChange}
              placeholder="Kurs kategoriyasi"
              id="Basic-TypeAhead"
            />
          </FormGroup>
        </Col>
        <Col xs="12">
          <Label check>{"Tavsif"}</Label>
          <Input
            type="textarea"
            name="description"
            onChange={handleInputChange}
            rows={3}
            placeholder={"Maqola tavsifi"}
          />
        </Col>
        <Col xs="12">
          <Label check>{"Qo'shimcha tavsif"}</Label>
          <Input
            type="textarea"
            name="extra_desc"
            onChange={handleInputChange}
            rows={3}
            placeholder={"Maqola tavsifi"}
          />
        </Col>
        <Col xs="12">
          <Label check>{"Nimaga bu maqolani o'qishingiz kerak?"}</Label>
          <Input
            type="textarea"
            name="what_learn"
            onChange={handleInputChange}
            rows={2}
            placeholder={"Maqola tavsifi"}
          />
        </Col>
        <Col className="mt-3 mb-5" xs="12">
          <Label check>{"Maqola afzalliklari"}</Label>

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
                  {item?.title}
                  <button
                    type="button"
                    className="fa fa-minus-square text-danger border-0 bg-transparent"
                    onClick={() => handleDeleteExtra(item?.title)}
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
        <Col className="mb-5" xs="12">
          <Label check>{"Tag lar"}</Label>

          <div
            style={{ height: "100%", minHeight: "100px" }}
            className="border d-flex flex-column p-2 gap-1"
          >
            <div className=" w-100 h-100 bg-red border w-100 p-2 d-flex flex-column gap-1">
              {tag.map((item, index) => (
                <small
                  key={index}
                  className="d-flex justify-content-between align-items-center gap-4 w-100 border p-2 b-radius-10"
                >
                  {item?.name}
                  <button
                    type="button"
                    className="fa fa-minus-square text-danger border-0 bg-transparent"
                    onClick={() => handleDeleteTag(item?.name)}
                  ></button>
                </small>
              ))}
            </div>
            <span className="d-flex align-items-center gap-4 w-100">
              <Input
                innerRef={tagRef}
                name="tag"
                type="text"
                placeholder={"Kurs uchun taglar"}
              />
              <button
                onClick={handleAddTag}
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
        <Col xs="12">
          <FormGroup>
            <Label check>
              {"Kurs uchun banner rasm"}
              <span className="txt-danger">*</span>
            </Label>
            <Dropzone
              getUploadParams={getUploadParams}
              onChangeStatus={handleBannerChange}
              maxFiles={1}
            />
          </FormGroup>
        </Col>
      </Row>
      <button className="btn btn-success">Yuborish</button>
    </Form>
  );
};

export default FormListBlogAdd;
