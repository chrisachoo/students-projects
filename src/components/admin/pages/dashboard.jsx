import { useState } from 'react'
import { useSignout } from '../../hooks/useSignout'
import { useLocation, useNavigate } from 'react-router-dom'
import { HiUsers, HiShoppingCart } from 'react-icons/hi'
import { FaSignOutAlt, FaFileInvoice, FaTags } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'
import { ImBin2 } from 'react-icons/im'
import ReactPaginate from 'react-paginate'
import Upload from './components/upload'
import './dashboard.css'

const Dashboard = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { signout } = useSignout()
  console.log('response: ', state)
  const numberFormatter = Intl.NumberFormat('en-US')

  const handleSignout = () => {
    navigate('/')
    signout()
  }

  const [activeTab, setActiveTab] = useState()
  const [pages, setPageNumber] = useState(0)
  const perPage = 7
  const pageVisited = pages * perPage

  const pageCount = Math.ceil(state.length / perPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <section className='dashboard'>

      <div className='menu'>
        <div className='header-menu'>
          <h1>Sharp Witted</h1>
          <div className='header-menu__dashboard'>
            <h3>Dashboard</h3>
          </div>
        </div>
        <div className='menu__items'>
          <h4>management</h4>
          <div className='menu__items-list'>
            <li onClick={() => setActiveTab('home')}><HiUsers /><p>customers</p></li>
            <li onClick={() => setActiveTab('orders')}><HiShoppingCart /><p>orders</p></li>
            <li onClick={() => setActiveTab('add-products')}><FaTags /><p>add products</p></li>
            <li onClick={() => setActiveTab('invoices')}><FaFileInvoice /><p>invoices</p></li>
          </div>
          <div className='signout'>
            <h2 onClick={handleSignout}><FaSignOutAlt />Logout</h2>
          </div>
        </div>
      </div>

      <div className='section__padding'>
        {activeTab === 'home' && (
          <div>
            <div className='flex__cards'>
              <div className='flex__cards-card'>
                <p>Users</p>
                <h2>{state.length}</h2>
              </div>
              <div className='flex__cards-card'>
                <p>Sessions</p>
                <h2>66.7</h2>
              </div>
              <div className='flex__cards-card'>
                <p>Convension Rate</p>
                <h2>66%</h2>
              </div>
            </div>

            <div className='users'>
              <table>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>state</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {state.slice(pageVisited, pageVisited + perPage)
                    .map((x) => {
                      return (
                        <tr key={x.id}>
                          <td>{x.first_name}</td>
                          <td>{x.last_name}</td>
                          <td>{x.email}</td>
                          <td>{x.cellno}</td>
                          <td>{x.account_status}</td>
                          <td><li className='action'><AiFillEdit /><span><ImBin2 /></span></li></td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
              <div className='pagination'>
                <ReactPaginate
                  previousLabel={"<"}
                  nextLabel={">"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={'pagination__container'}
                  previousLinkClassName={'previous'}
                  nextLinkClassName={'next'}
                  disabledClassName={'disabled'}
                  activeClassName={'active'}
                />
              </div>
            </div>
          </div>
        )}
        {activeTab === 'add-products' && <Upload />}
      </div>
    </section>
  )
}

export default Dashboard