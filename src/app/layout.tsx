import React from "react";
import type { Metadata } from 'next';
import './stylesheets/global.scss';
import StyledComponentsRegistry from "@/lib/registry";
import { poppins_bold, poppins_medium, poppins_regular } from './fonts/fonts';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";


export const metadata: Metadata = {
    title: 'Nyo-tshong',
    description: 'Best shoping store',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${poppins_regular.variable} ${poppins_medium.variable} ${poppins_bold.variable}`}>
            <body>
                <Header />
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
                <Footer />
            </body>
        </html>
    )
}
