import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
        </nav>
    );
};