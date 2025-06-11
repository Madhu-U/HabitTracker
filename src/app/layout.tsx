"use client";
import "./globals.css";
import {Provider} from "react-redux";
import {store} from "@/store/store";
import {CssBaseline} from "@mui/material";
import React from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Provider store={store}>
          <CssBaseline>
            {children}
          </CssBaseline>
      </Provider>
      </body>
    </html>
  );
}
