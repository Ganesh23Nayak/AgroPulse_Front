import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/farmerdash',
    icon: icon('ic_analytics'),
  },
  {
    title: 'ratings',
    path: '/farmerdash/ratings',
    icon: icon('ic_user'),
  },
 
  {
    title: 'logout',
    path: '/',
    icon: icon('ic_lock'),
  },

];

export default navConfig;
