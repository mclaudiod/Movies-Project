import { Link } from "react-router-dom";

export const MoviesFooter = () => {
  return (
    <div className="bg-gray-800 bottom-0">
      <div className="w-full mx-auto max-w-screen-xl p-4">
        <span className="text-sm text-gray-400">
          © 2024{" "}
          <Link to="https://github.com/mclaudiod" className="hover:underline">
            Claudio D. Morales
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
};
