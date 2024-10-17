import PageContainer from "./pages/PageContainer";
import Dashboard from "./component/Dashboard";
import Cart from "./component/Cart/Cart";
import Wishlist from "./component/Wishlist/Wishlist";
import BookDetails from "./component/BookDetails";
import Books from "./component/Books/Books";
import LandingPage from "./component/LandingPage";
import AuthRouter from "./routing/AuthRouter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageContainer />,
  },

  {
    path: "dashboard",
    element: (
      <AuthRouter>
        <Dashboard />
      </AuthRouter>
    ),
    children: [{ index: true, element: <Books /> }],
  },
  {
    path: "icon",
    element: <Cart />,
  },
  {
    path: "order",
    element: <LandingPage />,
  },
  {
    path: "book/:id",
    element: (
      <AuthRouter>
        <BookDetails />
      </AuthRouter>
    ),
  },

  {
    path: "cart/:id",
    element: <Cart />,
  },
  ,
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
