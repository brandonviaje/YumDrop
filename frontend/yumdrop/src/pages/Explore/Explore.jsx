import React from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Explore = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="input-group mb-3">
                <select className='form-select mt-2' style={{'maxWidth': '150px'}}>
                  <option value="American">American</option>
                  <option value="Caribbean">Caribbean</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Indian">Indian</option>
                  <option value="Italian">Italian</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Korean">Korean</option>
                  <option value="Mexican">Mexican</option>
                  <option value="Thai">Thai</option>
                </select>
                <input type="text" className='form-control mt-2' placeholder='Search food..' />
                <button className='btn btn-primary mt-2' type='submit'>
                  <i className='bi bi-search'></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FoodDisplay />
    </>

  )
}

export default Explore;
