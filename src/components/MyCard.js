import {convertDate} from '../utils/convertDate.js'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { dataSlice } from '../store/reducers/DataSlice.js';

function MyCard({item}) {
  const dispatch = useDispatch();

  const removeItem = (timestamp) => {
    dispatch(dataSlice.actions.dataRemoveItem(timestamp));
  }
  return (
      <Card className='m-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`http://contest.elecard.ru/frontend_data/${item.image}`} alt={`image from ${item.category} category`} />
        <Card.Body>
          <Card.Title>{item.category}</Card.Title>
          <Card.Text>{item.filesize}</Card.Text>
          <Card.Text>{convertDate(item.timestamp)}</Card.Text>
          <Button onClick={()=>removeItem(item.timestamp)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </Button>
        </Card.Body>
      </Card>
  )
}

export default MyCard
