import { lazy, Suspense, useState, useEffect } from 'react';
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
  const [role, setRole] = useState("");    


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setRole(user.role);
      
    } 

  }, []);
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
      element: role === "CUSTOMER" ? (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ):<Page404 />,
      children: [
        {
          path: '',
          element: role === "CUSTOMER" ? <IndexPage /> : <Page404 />,
        },
        {
          path: 'user',
          element: role === "CUSTOMER" ? <UserPage /> : <Page404 />,
        },
        {
          path: 'blog',
          element: role === "CUSTOMER" ? <BlogPage /> : <Page404 />,
        },
      ],
    },
    {
      path: 'admin',
      element: role=== "ADMIN" ?(
        <AdminDashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </AdminDashboardLayout>
      ):<Page404 />,
      children: [
        {
          path: '',
          element: role === "ADMIN" ? <Admin /> : <Page404 />,
        },
        {
          path: 'user',
          element: role === "ADMIN" ? <MessageList /> : <Page404 />,
        },
        {
          path: 'farmer',
          element: role === "ADMIN" ? <AdminFarmer /> : <Page404 />,
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
          element: role === "LABOUR" ? <FarmerLanding /> : <Page404 />,
        },
        {
          path: 'ratings',
          element: role === "LABOUR" ? <FarmerCard /> : <Page404 />,
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