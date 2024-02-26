"use client";
import { useFormStatus } from "react-dom";
export default function Button() {
  const status = useFormStatus();
  return (
    <button type="submit" disabled={status.pending} style={{ width: "200px" }}>
      {status.pending ? "Submiting..." : "Save Anime"}
    </button>
  );
}
