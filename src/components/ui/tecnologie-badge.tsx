import type React from "react";
import { Badge } from "./badge";

export function TecnologieBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge className="rounded-3xl h-fit w-fit bg-muted text-muted-foreground">{children}</Badge>

  )
}