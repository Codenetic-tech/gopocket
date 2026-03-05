import React, { useState, useEffect } from "react";
import Navbar from "../dashboard/Navbar";
import Watchlist from "./Watchlist";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const [watchlistPosition, setWatchlistPosition] = useState<"left" | "right">(() => {
        return (localStorage.getItem("watchlist-position") as "left" | "right") || "left";
    });

    // Listen for changes in localStorage (from Settings page)
    useEffect(() => {
        const handleStorageChange = () => {
            const newPosition = (localStorage.getItem("watchlist-position") as "left" | "right") || "left";
            setWatchlistPosition(newPosition);
        };

        window.addEventListener("storage", handleStorageChange);
        // Custom event for same-tab updates
        window.addEventListener("layout-changed", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("layout-changed", handleStorageChange);
        };
    }, []);

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-slate-100 p-3 gap-3">
            {/* Top Header */}
            <header className="bg-white rounded-xl shadow-sm shrink-0 overflow-hidden">
                <Navbar />
            </header>

            {/* Main Content Area */}
            <div className={`flex flex-1 overflow-hidden gap-3 ${watchlistPosition === "right" ? "flex-row-reverse" : "flex-row"}`}>
                {/* Watchlist (30%) */}
                <aside className="w-[30%] min-w-[280px] max-w-[400px] h-full bg-white rounded-xl shadow-sm overflow-hidden">
                    <Watchlist />
                </aside>

                {/* Dashboard Content (70% - expands to fill) */}
                <main className="flex-1 h-full bg-white rounded-xl shadow-sm overflow-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
