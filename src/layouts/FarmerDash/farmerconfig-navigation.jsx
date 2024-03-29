import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/employee',
    icon: icon('ic_analytics'),
  },
  {
    title: 'ratings',
    path: '/employee/ratings',
    icon: icon('ic_user'),
  },
 
  {
    title: 'logout',
    path: '/',
    icon: icon('ic_lock'),
  },

];

export default navConfig;
