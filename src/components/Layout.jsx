import React from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Layout.css';

const Layout = () => {
    // Check if we are in a chat route
    const isChatOpen = useMatch('/chat/:id');
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="app-container">
            {/* Sidebar is hidden on mobile if chat is open */}
            <div className={`sidebar-area ${isChatOpen ? 'hidden-mobile' : ''}`}>
                <Sidebar />
            </div>

            {/* Chat area is hidden on mobile if chat is NOT open (i.e. showing list) */}
            <div className={`chat-area ${!isChatOpen ? 'hidden-mobile' : ''}`}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
