import { useState } from 'react'
import { useSignout } from '../../hooks/useSignout'
import { useLocation, useNavigate } from 'react-router-dom'
import { HiUsers, HiShoppingCart } from 'react-icons/hi'
import { FaSignOutAlt, FaFileInvoice, FaTags } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'
import { ImBin2 } from 'react-icons/im'
import ReactPaginate from 'react-paginate'
import Upload from './components/upload'
import { useShop } from '../../hooks/useShop'
import { GrStatusGoodSmall } from 'react-icons/gr'
import './dashboard.css'
import { useEffect } from 'react'

const Dashboard = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { signout } = useSignout()
  const { getAllCategory } = useShop()
  console.log('response: ', state)
  const numberFormatter = Intl.NumberFormat('en-US')

  const handleSignout = () => {
    navigate('/')
    signout()
  }

  const [options, setOptions] = useState()
  useEffect(() => {
    const fetchCategories = async () => {
      const results = await getAllCategory()
      if (results.length > 0) {
        setOptions(results)
      }
    }

    fetchCategories()
  }, [])

  const [activeTab, setActiveTab] = useState('home')
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
            <li className={activeTab === 'home' ? 'active':'' } onClick={() => setActiveTab('home')}><HiUsers /><p>customers</p></li>
            <li className={activeTab === 'orders' ? 'active':'' } onClick={() => setActiveTab('orders')}><HiShoppingCart /><p>orders</p></li>
            <li className={activeTab === 'add-products' ? 'active':'' } onClick={() => setActiveTab('add-products')}><FaTags /><p>add products</p></li>
            <li className={activeTab === 'invoices' ? 'active':'' } onClick={() => setActiveTab('invoices')}><FaFileInvoice /><p>invoices</p></li>
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
                          <td>{x.account_status? 
                            <div className='status'><GrStatusGoodSmall color='#00FFFF'/><p>active</p></div>: 
                            <div className='status'><GrStatusGoodSmall color='#FF4343'/><p>disabled</p></div>}
                          </td>
                          <td><li className='action'><AiFillEdit/><span><ImBin2 color='#FFBB00' /></span></li></td>
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
        {activeTab === 'add-products' && <Upload data={options} />}
      </div>
    </section>
  )
}

export default Dashboard