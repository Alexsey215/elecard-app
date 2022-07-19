import { useEffect, useState } from "react";
import { Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate()

  const listViewHandler = (e) => {
    if(e.target.id === "cardsList") {
      navigate("/list")
    } else if (e.target.id === "treeList") {
      navigate("/treeview")
    }
  }

  return (
    <div className="position-fixed w-100 bottom-0 bg-secondary py-3 mt-4 z-index text-white">
      <Form key="radio" className="d-flex justify-content-center" onChange={e => listViewHandler(e)}>
            <Form.Check
              inline
              label="Cards View"
              name="listView"
              type="radio"
              id="cardsList"
            />
            <Form.Check
              inline
              label="Tree View"
              name="listView"
              type="radio"
              id="treeList"
            />
      </Form>
    </div>
  )
}

export default Footer