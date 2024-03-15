import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  // {
  //   title: 'AdminPanel',
  //   path: '/admin',
  //   icon: icon('ic_analytics'),
  // },
  {
    title: 'Customer',
    path: '/admin/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Farmers',
    path: '/admin/farmer',
    icon: icon('ic_cart'),
  },

  {
    title: 'Logout',
    path: '/',
    icon: icon('ic_lock'),
  },

];

export default navConfig;
