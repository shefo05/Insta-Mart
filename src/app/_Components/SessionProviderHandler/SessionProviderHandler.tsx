'use client'

import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SessionProviderHandler({ children }: Props) {


  return <SessionProvider>


    {children}
    
    </SessionProvider>;
}


