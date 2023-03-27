import Authors from "../pages/authors";
import HomeLayout from "../pages/homeLayout";
import Books from "../pages/books";
import Settings from "../pages/settings";
const routes = [
    
    
     {
      path: '/',
      component: HomeLayout,
      isPrivate: false,
    },
     {
      path: '/books',
      component: Books,
      isPrivate: false,
    },
    {
      path: '/authors',
      component: Authors,
      isPrivate: false,
    },
    {
      path: '/settings',
      component: Settings,
      isPrivate: true,
    }
  ];
  export default routes