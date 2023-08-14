import React from "react";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './assets/stylesheets/global.scss';
import StyledComponentsRegistry from "@/lib/registry";


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
        <html lang="en">
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    )
}
