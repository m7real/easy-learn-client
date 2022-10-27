import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Checkout from "../../Pages/Courses/Checkout/Checkout";
import CourseDetail from "../../Pages/Courses/CourseDetail/CourseDetail";
import Courses from "../../Pages/Courses/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import NotFoundPage from "../../Pages/Others/NotFoundPage/NotFoundPage";
import ScrollToTop from "../../Pages/Others/ScrollToTop/ScrollToTop";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // wrapper used so that previous scroll resets on new route
      <ScrollToTop>
        <Main></Main>
      </ScrollToTop>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://assignment-10-server-bice.vercel.app/courses"),
      },
      {
        path: "/course/:id",
        element: <CourseDetail></CourseDetail>,
        loader: ({ params }) => fetch(`https://assignment-10-server-bice.vercel.app/course/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          // this will be a private route
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://assignment-10-server-bice.vercel.app/course/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetch("https://assignment-10-server-bice.vercel.app/blogs"),
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
        loader: () => fetch("https://assignment-10-server-bice.vercel.app/faq"),
      },
    ],
  },
  {
    path: "*",
    // this element will be shown on 404 not found route
    element: <NotFoundPage></NotFoundPage>,
  },
]);
