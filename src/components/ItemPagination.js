import {Pagination} from 'react-bootstrap';

const ItemPagination = ({ nextPage, prevPage }) => {

    return (
        <Pagination style={{marginBottom: '6em'}} className='d-flex justify-content-center'>
            <Pagination.Prev className='w-25 mt-4' onClick={() => prevPage()}>Previous</Pagination.Prev>       
            <Pagination.Next className='w-25 mt-4' onClick={() => nextPage()}>Next</Pagination.Next>
        </Pagination>
    );
}
export default ItemPagination;