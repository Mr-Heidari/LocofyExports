import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";

export type NewsType = {
  className?: string;
};

const News: FunctionComponent<NewsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-center gap-[40px] text-left text-11xl text-black font-inter ${className}`}
    >
      <div className="self-stretch flex flex-col items-end justify-center py-0 px-[130px]">
        <div className="w-[183px] flex flex-col items-center justify-center gap-[20px]">
          <h2 className="m-0 self-stretch relative text-inherit font-semibold font-inherit">
            اخبار و مقالات
          </h2>
          <img
            className="w-[92px] relative h-[15px] object-cover"
            alt=""
            src="/image39@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[70px] text-right text-sm">
        <FrameComponent />
        <FrameComponent />
        <FrameComponent />
      </div>
    </section>
  );
};

export default News;
