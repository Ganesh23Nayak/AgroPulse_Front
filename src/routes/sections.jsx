import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import Admin from 'src/pages/Admin';
import Market from 'src/pages/Market';
// import Farmer from 'src/pages/Farmer';
import DashboardLayout from 'src/layouts/dashboard';
import AdminDashboardLayout from 'src/layouts/AdminNav/adminindex';
import FarmerDashboardLayout from 'src/layouts/FarmerDash/farmerindex';
import FarmerLanding from 'src/layouts/FarmerDash/src/components/FarmerLanding';

import MessageList from 'src/sections/admin/test';
import FarmerCard from 'src/sections/farmer/card';
import AdminFarmer from 'src/sections/admin/AdminFarmer';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const RegisterPage = lazy(() => import('src/pages/register'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const LandingPage = lazy(() => import('src/pages/landing'));

export default function Router() {
  // const [role, setRole] = useState("");
  
    
 

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   if (user) {
  //     setRole(user.role);
  //   } 
  // }, []);

  const routes = useRoutes([
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'register',
      element: <RegisterPage />,
    },
    {
      path: 'shop',
      element: <Market />,
    },
    {
      path: 'client',
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          path: '',
          element: <IndexPage />,
        },
        {
          path: 'user',
          element:<UserPage />,
        },
        {
          path: 'blog',
          element: <BlogPage />,
        },
      ],
    },
    {
      path: 'admin',
      element: (
        <AdminDashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </AdminDashboardLayout>
      ),
      children: [
        {
          path: '',
          element: <Admin />,
        },
        {
          path: 'user',
          element:<MessageList />,
        },
        {
          path: 'farmer',
          element:<AdminFarmer />,
        },
      ],
    },
    {
      path: 'employee',
      element: (
        <FarmerDashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </FarmerDashboardLayout>
      ),
      children: [
        {
          path: '',
          element:<FarmerLanding />,
        },
        {
          path: 'ratings',
          element:<FarmerCard />,
        },
      ],
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}