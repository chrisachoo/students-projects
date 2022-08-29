import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { Card } from '../../'
import './lists.css'

const Products = () => {
  const { state } = useLocation()
  const [pages, setPageNumber] = useState(0)
  const perPage = 9
  const pageVisited = pages * perPage
  const navigate = useNavigate()

  const listproducts = state
    .slice(pageVisited, pageVisited + perPage)
    .map((state) => {
      return (
        <Card
          key={state.id}
          path={state.picture_url}
          description={state.description}
          price={state.price}
          onClick={() => getProductDetails(state)}
        />
      )
    })

  const getProductDetails = async (state) => {
    console.log('currentTarget: ', state)
    navigate('/product-details', { state: state })
  }

  const pageCount = Math.ceil(state.length / perPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div className='section__padding'>
      <div className='card__section'>
        {listproducts}
      </div>
      <div className='product__pagination'>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'pagination__buttons'}
          previousLinkClassName={'previous__button'}
          nextLinkClassName={'next__button'}
          disabledClassName={'pagination__disabled'}
          activeClassName={'pagination__active'}
        />
      </div>
    </div>
  )
}

export default Products