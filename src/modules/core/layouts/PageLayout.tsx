import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import type { PageLayoutProps } from "../types/page-layout.type";
import { Sidebar } from "../components/Sidebar";
import { GlobalProvider } from "../providers/GlobalProvider";

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    const location = useLocation();
    const isLogin = location.pathname === "/" || location.pathname === "/login";

    return (
        <GlobalProvider>
            <div className="min-h-screen w-full flex bg-background">
            {!isLogin && (
                <Sidebar />
            )}
            <main className={`flex-1 flex flex-col items-center transition-all duration-300 ${!isLogin ? 'md:ml-10' : ''}`}>
                {children ? children : <Outlet />}
            </main>
            </div>
        </GlobalProvider>
    );
};

export default PageLayout;
