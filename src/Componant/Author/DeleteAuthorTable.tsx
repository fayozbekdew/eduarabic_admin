import React, { useEffect, useMemo, useState } from "react";
import { Card, CardBody, CardHeader, Col, Input, Label } from "reactstrap";
import { H4 } from "../../AbstractElements";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { LI, UL } from "../../AbstractElements";
import { Href } from "../../utils/Constant";

const DeleteAuthorTable = () => {
  const [filterText, setFilterText] = useState("");
  const [courses, setCourses] = useState<any[]>([]);
  const deleteCourse = (id: any) => {
    fetch(`https://api.eduarabic.uz/courses/author/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        getTeachers();
      });
  };
  const TableAction = ({ id }: any) => {
    return (
      <UL className="action simple-list flex-row" id={id}>
        <LI
          onClick={() => {
            deleteCourse(id);
          }}
          className="delete"
        >
          <Link to={Href}>
            <i className="icon-trash" />
          </Link>
        </LI>
      </UL>
    );
  };
  const DeleteTableColumn = [
    {
      name: "Ismi",
      selector: (row: any) => row["name"],
      sortable: true,
    },
    {
      name: "Kasbi",
      selector: (row: any) => `${row.occupation}`,
      sortable: true,
    },
    {
      name: "Darajasi",
      selector: (row: any) => `${row.star}`,
      sortable: true,
    },
    {
      name: "O'quvchilar soni",
      selector: (row: any) => `${row.student_count}`,
      sortable: true,
    },
    {
      name: "Amallar",
      cell: (row: any) => <TableAction id={row.id} />,
      // sortable: true,
    },
  ];
  const filteredItems = courses.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );
  const getTeachers = () => {
    fetch("https://api.eduarabic.uz/courses/author/")
      .then((res) => res.json())
      .then((data) => {
        Array.isArray(data) ? setCourses(data) : setCourses([]);
      });
  };
  useEffect(() => {
    getTeachers();
  }, []);
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div
        id="basic-1_filter"
        className="dataTables_filter d-flex align-items-center"
      >
        <Label className="me-2">Qidirish:</Label>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilterText(e.target.value)
          }
          type="search"
          value={filterText}
        />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm="12">
      <Card>
        <CardHeader className="pb-0 card-no-border">
          <H4>O&apos;qituchini o&apos;chirish</H4>
        </CardHeader>
        <CardBody>
          <div className="table-responsive">
            <DataTable
              columns={DeleteTableColumn}
              data={filteredItems}
              pagination
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
              highlightOnHover
              striped
              persistTableHead
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DeleteAuthorTable;

