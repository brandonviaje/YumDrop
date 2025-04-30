import Header from '../../components/MenuBar/Header/Header';
import ExploreMenu from '../../components/MenuBar/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {
  return (
    <main className='container'>
      <Header/>
      <ExploreMenu/>
      <FoodDisplay/>
    </main>
  )
}

export default Home;
