import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Dashboard from "./component/Dashboard.jsx";
// import AuthRouter from "./routing/AuthRouter.jsx";
// import PageContainer from "./pages/PageContainer.jsx";
// import BookDetails from "./component/BookDetails.jsx";
// import SearchBar from "./component/SearchBar.jsx";
// import Books from "./component/Books/Books.jsx";
import store from "./store/store.jsx";
import { Provider } from "react-redux";
import App from "./App.jsx";
// const router = createBrowserRouter([
//   { path: "/", element: <PageContainer /> },
//   {
//     path: "/dashboard",

//     element: (
//       <AuthRouter>
//         <Dashboard />
//       </AuthRouter>
//     ),
//     children: [
//       { index: true, element: <Books /> },
//       {
//         path: "book",
//         element: <BookDetails />,
//       },
//     ],
//   },
// ]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
