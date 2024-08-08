import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { BodyComponent } from './layout/body';
import { BoilerRepaire } from './pages/boiler/repaire';
// import { BoilerRepaireBook } from './pages/boiler/repaire/book';

export const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='boilers' />} />
        <Route path='/boilers'>
          <Route index element={<Navigate to='boiler-repairs' />} />
          <Route path='boiler-repairs'>
            <Route index element={<BodyComponent><BoilerRepaire /></BodyComponent>} />
            {/* <Route path='book' element={<BodyComponent><BoilerRepaireBook /></BodyComponent>} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}