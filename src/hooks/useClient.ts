'use client'

import { useEffect, useState } from "react";

export function useClient() {
  const [clientSide, setClientSide] = useState(false);
  useEffect(() => setClientSide(true), []);
  return clientSide;
}
