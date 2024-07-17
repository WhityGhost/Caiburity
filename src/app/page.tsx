import MainLoader from "../components/BaseComponents/Loader/MainLoader";
import HomePage from "../pages/HomePage";
import { Suspense } from "react";

export default async function page() {
  return (
    <Suspense fallback={<MainLoader />}>
      <HomePage />
    </Suspense>
  );
}
