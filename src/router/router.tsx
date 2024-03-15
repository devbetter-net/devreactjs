import { Suspense, lazy } from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { AdminLayout, PublicLayout } from "../layouts";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const TestPage = lazy(() => import("../pages/TestPage"));
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<Suspense fallback={<>...</>}><Home /></Suspense>} />
                <Route path="home" element={<Suspense fallback={<>...</>}><Home /></Suspense>} />
                <Route path="test" element={<Suspense fallback={<>...</>}><TestPage /></Suspense>} />
            </Route>
            <Route path="/login" element={<Login />}/>
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<h1>Admin Dashboard</h1>} />
            </Route>
        </>
    )
);

export { router };