import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLayout({ children, title, page }) {
    return (
        <div className="min-h-screen flex flex-col bg-white-smoke">
            <Helmet>
                <title>{`Nicole Chau - ${title}`}</title>
                <meta name="description" content={`Nicole Chau Portfolio- ${title}`} />
            </Helmet>

            <Navbar page={page} />

            <main className="flex-1 w-4/5 lg:min-w-3/5 mx-auto 2xl:max-w-[1280px] h-full">
                    {children}
            </main>

            <Footer />
        </div>
    );
}