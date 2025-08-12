import { useEffect, useRef } from "react";
import JobCard from "./JobCard";

const AllJobs = ({ data, getData }) => {
  // const loaderRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const entry = entries[0];
  //       if (entry.isIntersecting) {
  //         getData(); // call backend to get more jobs
  //         console.log("Loading more jobs...");
  //       }
  //     },
  //     {
  //       root: null,
  //       rootMargin: "0px",
  //       threshold: 1.0,
  //     }
  //   );

  //   if (loaderRef.current) observer.observe(loaderRef.current);

  //   return () => {
  //     if (loaderRef.current) observer.unobserve(loaderRef.current);
  //   };
  // }, [getData]);

  return (
    <div className="p-4">
      {data.map((job, ind) => (
        <JobCard key={ind} job={job} />
      ))}

      {/* Intersection Observer target */}
      {/* <div ref={loaderRef} className="h-10"></div> */}
      {/* 
      <div className="text-center text-gray-500 py-4">
        Scroll down to load more jobs...
      </div> */}
    </div>
  );
};

export default AllJobs;
