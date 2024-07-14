import { FunctionComponent } from "react";

export type TopCoursesType = {
  className?: string;
};

const TopCourses: FunctionComponent<TopCoursesType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start pt-5 px-0 pb-[50px] gap-[50px] text-left text-11xl text-black font-inter border-b-[1px] border-solid border-silver ${className}`}
    >
      <div className="w-[217px] flex flex-col items-center justify-start gap-[10px]">
        <h2 className="m-0 self-stretch relative text-inherit font-semibold font-inherit">
          دوره های برگزیده
        </h2>
        <img
          className="w-[107px] relative h-[15px] object-cover"
          alt=""
          src="/image14@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row items-center justify-between py-0 px-[50px] text-4xl-9">
        <img
          className="w-[51px] relative h-[51px] object-cover hover:cursor-pointer hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
          alt=""
          src="/leftarrowbutton@2x.png"
        />
        <div className="flex-1 flex flex-row flex-wrap items-center justify-center gap-[180px] hover:cursor-pointer">
          <img
            className="w-[329px] relative h-[304px] object-cover"
            alt=""
            src="/frame-47@2x.png"
          />
          <div className="w-[458px] flex flex-col items-end justify-start gap-[33px]">
            <div className="w-[384.8px] flex flex-col items-end justify-center gap-[10px]">
              <h3 className="m-0 relative text-inherit font-semibold font-inherit">
                عنوان دوره اول
              </h3>
              <p className="m-0 w-[379.7px] relative text-lgi-2 leading-[27.98px] text-right inline-block">
                توضیحات مختصری از دوره جهت راهنمایی بهتر فراكيران آکادمی ارزش
              </p>
              <div className="w-[111px] flex flex-col items-start justify-start gap-[11px] text-base">
                <p className="m-0 self-stretch relative font-semibold">
                  • هدف اول دوره
                </p>
                <p className="m-0 self-stretch relative font-semibold">
                  • هدف دوم دوره
                </p>
              </div>
            </div>
            <div className="w-[458px] rounded-3xs bg-gray-200 box-border h-[125px] flex flex-row items-end justify-end pt-[33px] px-[34px] pb-[28.3px] gap-[5px] text-xs-5 border-[1px] border-solid border-lightslategray">
              <div className="w-[194px] h-[60px] overflow-hidden shrink-0 flex flex-col items-end justify-start gap-[10px]">
                <p className="m-0 w-[87.9px] relative leading-[14.99px] inline-block">
                  نام و نام خانوادگی تخصص استاد
                </p>
                <p className="m-0 relative text-base-4">
                  "جوزه فعاليت و سابقه آموزشى"
                </p>
              </div>
              <img
                className="w-[75px] relative h-[69px] object-cover"
                alt=""
                src="/image15@2x.png"
              />
            </div>
          </div>
        </div>
        <img
          className="w-12 relative h-12 object-cover hover:cursor-pointer"
          alt=""
          src="/rightarrowbutton@2x.png"
        />
      </div>
    </section>
  );
};

export default TopCourses;
