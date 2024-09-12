import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';
import { HomePage } from './pages/Home';
import { Footer } from './common/Loader/Main/footer';
import { NotFound } from './pages/404page';
import { OrdersComponent } from './pages/orders';
import { AuthInit, useAuth } from './pages/Authentication/AuthHelpers';

const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <AuthInit>
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route element={<DefaultLayout />}>
          <Route index element={<Suspense fallback={<Loader />}><HomePage /><Footer /></Suspense>} />
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                    <Footer />
                  </Suspense>
                }
              />
            );
          })}
          {!!currentUser && <>
            <Route path="/orders" element={<Suspense fallback={<Loader />}><OrdersComponent /><Footer /></Suspense>} />
            <Route path="/profile" element={<Suspense fallback={<Loader />}><Profile /><Footer /></Suspense>} />
            <Route path="/settings" element={<Suspense fallback={<Loader />}><Settings /><Footer /></Suspense>} />
          </>}
          <Route path="*" element={<Suspense fallback={<Loader />}><NotFound /><Footer /></Suspense>} />
        </Route>
      </Routes>
    </AuthInit>
  );
}

export default App;
