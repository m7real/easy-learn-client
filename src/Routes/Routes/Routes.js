import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseDetail from "../../Pages/Courses/CourseDetail/CourseDetail";
import Courses from "../../Pages/Courses/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";
import NotFoundPage from "../../Pages/Others/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/course/:id",
        element: <CourseDetail></CourseDetail>,
        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
]);
