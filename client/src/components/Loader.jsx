// components/Loader.jsx
const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-blue-500 border-dotted rounded-full animate-spin mb-4"></div>

      <p className="text-lg text-white font-medium">
        Loading jobs, please wait...
      </p>
    </div>
  );
};

export default Loader;
