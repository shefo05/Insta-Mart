'use client'

import { useSession } from "next-auth/react";

 export const { data: session } = useSession();
 export const credentialsToken = (session as any)?.credentialsToken;
