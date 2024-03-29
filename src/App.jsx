import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Principal } from './pages/Principal';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Principal />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
