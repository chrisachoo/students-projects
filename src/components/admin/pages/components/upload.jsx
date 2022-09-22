import { useState } from 'react'
import { saveProductsDeatils } from '../../hook/addProducts'
import { Loader } from '../../../'
import './styles.css'

const Upload = ({ data }) => {

  const [file, setFile] = useState()
  const [successful, isSuccessful] = useState(null)
  const { upload, saveProducts, error, isLoading } = saveProductsDeatils()
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    category: ''
  })

  const handleFormChange = (event) => {
    const updatedForm = { ...form }
    updatedForm[event.target.name] = event.target.value;

    setForm(updatedForm)
  }

  const uploadImage = async () => {
    const formData = new FormData()
    formData.append('file', file)
    console.log('file: ', file)
    // await upload(formData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const picture_url = await uploadImage()
    let { name, description, price, quantity, category } = form
    const found = await data.find(({ name }) => name === category)
    // const category_id = found.id

    await saveProducts(name, description, price, quantity, category_id, picture_url)
  }

  return (
    <div className='section-container'>
      {isLoading ? <Loader /> : null}
      <div className='inner-container'>
        <div className='inner-container__one'>
          <div className='preview'>
            <label htmlFor='file-ip-1'>Upload Image</label>
            <input type='file' id='file-ip-1' accept='.jpg, .png'
              onChange={(event) => { setFile(event.target.files[0]) }}
            />
            <img src={file ? (URL.createObjectURL(file)) : ''} />
            {successful && <div className='error'>{successful}</div>}
          </div>
          <button className='btn' onClick={uploadImage}>upload</button>
        </div>
        <div className='inner-container__two'>
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Product Name' name='name'
              value={form.name} onChange={handleFormChange} required={true}
            />
            <div className='select'>
              <select name='category' id='cate' value={form.category} onChange={handleFormChange} required={true}>
                <option value=''>--Please choose an option--</option>
                <option value={data[0].name}>{data[0].name}</option>
                <option value={data[1].name}>{data[1].name}</option>
                <option value={data[2].name}>{data[2].name}</option>
                <option value={data[3].name}>{data[3].name}</option>
                <option value={data[4].name}>{data[4].name}</option>
                <option value={data[5].name}>{data[5].name}</option>
                <option value={data[6].name}>{data[6].name}</option>
              </select>
            </div>
            <textarea name='description' placeholder='Description' rows="5"
              value={form.description} onChange={handleFormChange} required={true}
            ></textarea>
            <div className='inline__input'>
              <input type='number' placeholder='Quantity' name='quantity'
                value={form.quantity} onChange={handleFormChange} required={true}
              />
              <input type='number' placeholder='price' name='price'
                value={form.price} onChange={handleFormChange} required={true}
              />
            </div>
            <button className='btn btn-primary' type='submit'>Add Product</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Upload;