import { Suspense, lazy } from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* <Route path="/" element={<PublicLayout />}>
                <Route index element={<Suspense fallback={<>...</>}><Home /></Suspense>} />
                <Route path="home" element={<Suspense fallback={<>...</>}><Home /></Suspense>} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<h1>About</h1>} />
            </Route> */}
        </>
    )
);

export { router };