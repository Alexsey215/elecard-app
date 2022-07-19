import { useSelector } from "react-redux";
import MyCard from "./MyCard.js"
import {Col, Container, Row, Spinner} from 'react-bootstrap';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemPagination from "./ItemPagination.js";


function CardList() {

  const { data, isLoading, error } = useSelector(state => state.dataReducer);

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10)

  const { page } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (page) {
        setCurrentPage(Number(page));
    }
  }, [page])

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
      pageNumbers.push(i);
  }

  const nextPage = () => {
      if (currentPage !== pageNumbers.length) {
          setCurrentPage(currentPage + 1);
          navigate(`/list/${currentPage + 1}`);
      }
  }

  const prevPage = () => {
      if (currentPage !== 1) {
          setCurrentPage(currentPage - 1);
          navigate(`/list/${currentPage - 1}`);
      }
  }


  return (
    <Container >
      <Row className="d-flex flex-wrap">
        {isLoading && <Spinner className="d-block m-auto my-5" animation="border" />}
        {error && <h4>{error}</h4>}
        {!!currentData && 
          currentData.map((item) =>
              <Col key={item.timestamp}>
                  <MyCard item={item}/>
              </Col>
            )
        }
      </Row>
      <Row>
        {!isLoading && 
          <ItemPagination
              pageNumbers={pageNumbers}
              nextPage={nextPage}
              prevPage={prevPage}
          />
        }
      </Row>
    </Container>
  )
}

export default CardList