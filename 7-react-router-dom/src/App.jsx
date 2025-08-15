
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import Home from "./pages/home";
import PostList, { postLoader } from "./pages/post-list";
import PostComments from "./pages/post-comments";
import './App.css';
import Header from "./components/header";
import Error from "./components/error";
import Login from "./components/login";
import SignUp from "./components/signup";
import RequireAuth from "./components/require-auth";
import Product from "./pages/product";

const router =  createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/auth",
        element: <Home />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'signup',
            element: <SignUp />,
          }
        ]
      },      
      {
        path: "/posts",
        element: (
          <RequireAuth>
            <PostList />
          </RequireAuth>
          ),
        loader: postLoader,
      },
      {
        path: "/posts/:postId",
        element: <PostComments />
      },
      {
        path: "/product",
        element: <Product />
      },
    ],
  }
]);

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

/*
Question 1:
Old way of writing:
....................

function App() {
  return <BrowserRouter>
      <Header />
      <Routes>
        <Route index element = {<Home />}/>
        <Route path = "/posts" element = {<PostList />} />
        <Route path = "/posts/:postId" element = {<PostComments />} />
      </Routes>
  </BrowserRouter>
}

*/

// Question 2 : Create a login form and onSubmit route them to a different page 
//  Solution : Impelemented in <Home />

// Question 3: Design a Error / 404 Not Found Route
// Solution : Implemented in <Error />

// Question 4:  Give the example of a nested route in react router dom
// Solution : implemented in <Login /> and <SignUp />

// Question 5: Create protected route which redirects to a login page 
//Solution : implemented in  <RequireAuth>   <PostList />  </RequireAuth>

// Question 6: How  will you design a product page where user selects the specs and share the link to other users, it opens exact way as it was for original user ?




export default App;
