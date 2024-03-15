const user = JSON.parse(localStorage.getItem('user'));



export const account = {
  displayName: user ? user.name :'Jaydon Frankie',
  email: user ? user.email :'demo@minimals.cc',
  photoURL: '/assets/images/avatars/avatar_25.jpg',
};
