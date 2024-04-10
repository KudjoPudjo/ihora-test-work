import {createBrowserRouter, LoaderFunctionArgs, RouterProvider} from "react-router-dom";
import Main from "../Pages/Main/Main";
import Car from "../Pages/Main/children/Car/Car";
import CarModel from "../Pages/Main/children/CarModel/CarModel";
import CarModif from "../Pages/Main/children/CarModif/CarModif";
import CarParam from "../Pages/Main/children/Param/CarParam";

export default function Index (){
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Main />,

            children:[
                {
                    path: "/car",
                    element: <Car />,
                },
                {
                    path: "car/:carName",
                    element: <CarModel />,
                },
                {
                    path: "car/:carName/:model",
                    element: <CarModif />,
                },
                {
                    path: "car/:carName/:model/:param",
                    element: <CarParam />,
                },
            ]
        }
    ])

    return (
        <RouterProvider router={router}></RouterProvider>
    )
}
