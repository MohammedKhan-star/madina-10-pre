import { Suspense } from "react";
import ResultPageClient from "./ResultPageClient";

export default function Page() {
  return (
    <Suspense fallback={<p className="mt-10 text-center">Loading result...</p>}>
      <ResultPageClient />
    </Suspense>
  );
}