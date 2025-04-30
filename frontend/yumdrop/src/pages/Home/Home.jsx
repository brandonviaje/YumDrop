import Header from '../../components/MenuBar/Header/Header';
import ExploreMenu from '../../components/MenuBar/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import { useState } from 'react';

const Home = () => {

  const [category, setCategory] = useState('');

  return (
    <main className='container'>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </main>
  )
}

export default Home;
