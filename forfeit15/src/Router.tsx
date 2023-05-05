import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import Settings from './pages/Settings';
import Thread from "./pages/Thread";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/thread" element={<Thread/>}/>
        </Routes>
    );
}
