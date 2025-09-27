'use client'

import { useSession } from "next-auth/react";

export function useCredentialsToken(): string | undefined {
  const { data: session } = useSession();
  return (session as unknown as { credentialsToken?: string } | undefined)?.credentialsToken;
}
