import React from 'react';
import { assets } from '../../assets/assets';
import { useState } from 'react';
import { addFood } from '../../services/foodService';
import { toast } from 'react-toastify';

const AddFood = () => {

  const [image,setImage] = useState(false);
  const [data,setData] = useState({
    name:'',
    description: '',
    price: '',
    category: 'American'
  });


  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]: value}));
  }

  const onSubmitHandler = async(event)=>{
    event.preventDefault();
    if(!image){
      toast.error('Please select an image!');
      return
    }

    // API Call
    try{
      await addFood(data,image);
      toast.success("Food Added Successfully!");

      //Reset Form Data
      setData({name:'',description:'',category:'American',price:''});
      setImage(null);

    }catch(error){
      toast.error("Error Adding Food.");
    }
  }

  return (
    <div className="mx-2 mt-2">
      <div className="row">
        <div className="card col-md-4">
          <div className="card-body">
            <form onSubmit={onSubmitHandler}>
              <h2 className="mb-4">Add Food</h2>
  
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img
                    src={image ? URL.createObjectURL(image) : assets.upload}
                    alt=""
                    width={98}
                  />
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  required
                  hidden
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder='Enter food name...'
                  id="name"
                  required
                  name="name"
                  onChange={onChangeHandler}
                  value={data.name}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  placeholder='$0.00'
                  name="price"
                  className="form-control"
                  id="price"
                  required
                  onChange={onChangeHandler}
                  value={data.price}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="form-control"
                  onChange={onChangeHandler}
                  value={data.category}
                >
                  <option value="american">American</option>
                  <option value="carribean">Caribbean</option>
                  <option value="chinese">Chinese</option>
                  <option value="indian">Indian</option>
                  <option value="italian">Italian</option>
                  <option value="japanese">Japanese</option>
                  <option value="korean">Korean</option>
                  <option value="mexican">Mexican</option>
                  <option value="thai">Thai</option>
                </select>
              </div>
  
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  placeholder='Enter description here...'
                  rows="5"
                  required
                  name="description"
                  onChange={onChangeHandler}
                  value={data.description}
                ></textarea>
              </div>
  
              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default AddFood;
