import { useState } from 'react'
import { saveProductsDeatils } from '../../hook/addProducts'
import './styles.css'

const Upload = () => {

  const [file, setFile] = useState()
  const [category , setCategory ] = useState()
  const [form, setForm] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    quantity: ''
  })

  const showPreview = (event) => {
    if (event.target.files.length > 0) {
      setFile(URL.createObjectURL(event.target.files[0]))
      console.log('file: ', file)
    }
  }


  const handleFormChange = (event) => {
    const updatedForm = { ...form }
    updatedForm[event.target.name] = event.target.value;

    setForm(updatedForm)
  }

  const uploadImage = async () => {
    if (file) {
      const _url = await upload(file)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    let { name, category, description } = form
  }

  return (
    <div className='section-container'>
      <div className='inner-container'>
        <div className='inner-container__one'>
          <div className='preview'>
            <label htmlFor='file-ip-1'>Upload Image</label>
            <input type='file' id='file-ip-1' accept='.jpg, .png'
              onChange={showPreview}
            />
            <img src={file} />
          </div>
        </div>
        <div className='inner-container__two'>
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Product Name' />
            <div className='select'>
              <select name='Categories' id='cate'>
                <option value=''>--Please choose an option--</option>
                <option value={options[0].value}>{options[0].label}</option>
                <option value={options[1].value}>{options[1].label}</option>
                <option value={options[2].value}>{options[2].label}</option>
                <option value={options[3].value}>{options[3].label}</option>
                <option value={options[4].value}>{options[4].label}</option>
                <option value={options[5].value}>{options[5].label}</option>
                <option value={options[6].value}>{options[6].label}</option>
              </select>
            </div>
            <textarea name='description' placeholder='Description' rows="5"></textarea>
            <div className='inline__input'>
              <input type='number' placeholder='Quantity' />
              <input type='number' placeholder='price' />
            </div>
            <button className='btn btn-primary' type='submit'>Add Product</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Upload;