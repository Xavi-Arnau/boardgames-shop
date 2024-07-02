import { Suspense } from "react";
import ResultsList from "@/components/results/ResultsList";

const ResultsPage = () => {
  return (
    <Suspense>
      <ResultsList />
    </Suspense>
  );
};

export default ResultsPage;
