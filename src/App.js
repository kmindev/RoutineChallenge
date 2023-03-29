import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeAbout from './Project/HomeAbout';
import Layout from './Project/Layout/Layout';
import Layout2 from './Project/Layout/Layout2';
import Layout3 from './Project/Layout/Layout3';
import Login from './Project/Login';
import Join from './Project/Join';
import CreateChallenge from './Project/Challenge/CreateChallenge';
import MyPage from './Project/MyPage/MyPage';
import EditInformation from './Project/MyPage/EditInformation';
import Challenge from './Project/Challenge/Challenge';
import Layout4 from './Project/Layout/Layout4';
import DetailChallenge from './Project/Challenge/DetailChallenge';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomeAbout />} />
      </Route>

      <Route element={<Layout2 />}>
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/createChallenge' element={<CreateChallenge />} />
      </Route>

      <Route element={<Layout3 />}>
        <Route path='/myPage' element={<MyPage />} />
        <Route path='/editInfo' element={<EditInformation />} />
      </Route>

      <Route element={<Layout4 />}>
        <Route path='/challenge' element={<Challenge />} />
        <Route path='/detailChallenge' element={<DetailChallenge />} />
      </Route>
    </Routes>
  )
}

export default App;
