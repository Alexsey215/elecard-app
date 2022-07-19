import { Button, Form } from "react-bootstrap"
import { fetchData } from "../store/reducers/ActionCreators";
import { useDispatch } from "react-redux";
import { dataSlice } from '../store/reducers/DataSlice.js';

function Header() {

  const dispatch = useDispatch()

  const radioSortsHandler = (e) => {

    switch (e.target.id) {

      case "dataSortByFilesize":
        dispatch(dataSlice.actions.dataSortByFilesize())
        break;
      case "dataSortByCategory":
        dispatch(dataSlice.actions.dataSortByCategory())
        break;
      case "dataSortByTimestamp":
        dispatch(dataSlice.actions.dataSortByTimestamp())
        break;
      default:
        break;
    }
  }
  return (
    <div className="d-flex justify-content-center position-sticky top-0 bg-secondary py-3 z-index text-white">     
      <Form key="radio" className="mb-3" onChange={(e)=>radioSortsHandler(e)}>
            <Form.Check
              inline
              label="Data Sort By Filesize"
              name="dataSort"
              type="radio"
              id="dataSortByFilesize"
            />
            <Form.Check
              inline
              label="Data Sort By Category"
              name="dataSort"
              type="radio"
              id="dataSortByCategory"
            />
            <Form.Check
              inline
              label="Data Sort By Timestamp"
              name="dataSort"
              type="radio"
              id="dataSortByTimestamp"
            />

      </Form>
      <Button onClick={()=>dispatch(fetchData())}>Reset</Button>
    </div>
  )
}

export default Header