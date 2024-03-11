import { Suspense, lazy } from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { AdminLayout, PublicLayout } from "../layouts";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<Suspense fallback={<>...</>}><Home /></Suspense>} />
                <Route path="home" element={<Suspense fallback={<>...</>}><Home /></Suspense>} />
            </Route>
            <Route path="/login" element={<Login />}/>
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<h1>About</h1>} />
            </Route>
        </>
    )
);

export { router };