export const ErrorPage = () => {

  return (
    <div className="bg-gray-300 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto">
        <div className="w-full p-4 text-center bg-gray-800 border border-gray-700 rounded-lg shadow sm:p-8 my-4">
          <img className="mx-auto max-h-96 w-auto mb-5" src="/404.jpg" alt="404 Image"/>
          <h5 className="mb-5 text-3xl font-bold text-white">404 Page Not Found</h5>
          <p className="mb-5 text-base text-gray-400 sm:text-lg">
            Unfortunately we weren't able to find the page you were searching for. But do not worry! Just go up above and you can continue browsing!
          </p>
        </div>
      </div>
    </div>
  );
};