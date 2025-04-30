import React, { useState } from 'react';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Explore = () => {
  const [category, setCategory] = useState('all');
  const [searchText, setSearchText] = useState('');

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group mb-3">
                <select 
                  className="form-select mt-2" 
                  style={{ maxWidth: '150px' }} 
                  onChange={(e) => setCategory(e.target.value)} 
                  value={category}
                >
                  <option value="all">All</option>
                  <option value="american">American</option>
                  <option value="caribbean">Caribbean</option>
                  <option value="chinese">Chinese</option>
                  <option value="indian">Indian</option>
                  <option value="italian">Italian</option>
                  <option value="japanese">Japanese</option>
                  <option value="korean">Korean</option>
                  <option value="mexican">Mexican</option>
                  <option value="thai">Thai</option>
                </select>
                <input type="text" className="form-control mt-2" placeholder="Search food.." onChange={(e) => setSearchText(e.target.value)} value={searchText} />
                <button className="btn btn-primary mt-2" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FoodDisplay category={category} searchText={searchText} />
    </>
  );
}

export default Explore;
