import { FaNodeJs } from "react-icons/fa";
import HomePage from "../pages/HomePage";

export default async function page() {
  return (
    <>
      {true ? (
        <HomePage />
      ) : (
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-5 text-cyan-500 fixed z-30 bg-gray-100 dark:bg-grey-900">
          <FaNodeJs size={100} className="animate-pulse" />
          <p className="animate-pulse text-xl">Loading...</p>
        </div>
      )}
    </>
  );
}
