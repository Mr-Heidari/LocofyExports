import { FunctionComponent } from "react";
import CoursesCard from "./CoursesCard";

export type NewCoursesType = {
  className?: string;
};

const NewCourses: FunctionComponent<NewCoursesType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-center py-[50px] px-0 gap-[10px] text-left text-xl text-dodgerblue-100 font-inter border-b-[1px] border-solid border-silver ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between py-0 px-[100px]">
        <a className="[text-decoration:none] w-[123px] relative font-semibold text-[inherit] inline-block h-5 shrink-0">
          مشاهده همه
        </a>
        <div className="flex flex-col items-center justify-center gap-[20px] text-11xl text-black">
          <h2 className="m-0 relative text-inherit font-semibold font-inherit">
            دوره های جدید
          </h2>
          <img
            className="w-[107px] relative h-[15px] object-cover"
            alt=""
            src="/image16@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[30px] text-base text-white">
        <CoursesCard />
        <CoursesCard />
        <CoursesCard />
        <CoursesCard />
      </div>
    </section>
  );
};

export default NewCourses;
