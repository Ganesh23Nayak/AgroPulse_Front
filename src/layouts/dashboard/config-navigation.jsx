import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Dashboard',
    path: '/client',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Labourers',
    path: '/client/user',
    icon: icon('ic_user'),
  },
  {
    title: 'blog',
    path: '/client/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Logout',
    path: '/',
    icon: icon('ic_lock'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
