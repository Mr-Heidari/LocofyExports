import { FunctionComponent } from "react";

export type TopTeachersType = {
  className?: string;
};

const TopTeachers: FunctionComponent<TopTeachersType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-center py-[100px] px-0 gap-[14px] text-left text-11xl text-black font-inter border-b-[1px] border-solid border-silver ${className}`}
    >
      <div className="w-[141px] flex flex-col items-center justify-start gap-[14px]">
        <h2 className="m-0 self-stretch relative text-inherit font-semibold font-inherit">
          اساتيد برتر
        </h2>
        <img
          className="w-[91px] relative h-[15px] object-cover"
          alt=""
          src="/image23@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[14px] text-center text-base-2">
        <div className="h-[322px] w-[296px] bg-gray-200 flex flex-col items-center justify-end gap-[21px] cursor-pointer text-base-9">
          <img
            className="w-64 relative rounded-6xs h-[227px] object-cover"
            alt=""
            src="/image24@2x.png"
          />
          <p className="m-0 w-[74px] relative leading-[34px] inline-block">
            نام استاد تخصص
          </p>
        </div>
        <div className="h-[322px] w-[296px] bg-gray-200 flex flex-col items-center justify-end gap-[21px] cursor-pointer">
          <img
            className="w-64 relative rounded-6xs h-[227px] object-cover"
            alt=""
            src="/image25@2x.png"
          />
          <p className="m-0 w-[73px] relative leading-[30px] inline-block">
            نام استاد تخصص
          </p>
        </div>
        <div className="h-[322px] w-[296px] bg-gray-200 flex flex-col items-center justify-end gap-[21px] cursor-pointer">
          <img
            className="w-64 relative rounded-6xs h-[227px] object-cover"
            alt=""
            src="/image26@2x.png"
          />
          <p className="m-0 w-[73px] relative leading-[34px] inline-block">
            نام استاد تخصص
          </p>
        </div>
        <div className="h-[322px] w-[296px] bg-gray-200 flex flex-col items-center justify-end gap-[21px] cursor-pointer">
          <img
            className="w-64 relative rounded-6xs h-[227px] object-cover"
            alt=""
            src="/image27@2x.png"
          />
          <div className="w-[77px] overflow-hidden flex flex-col items-end justify-center">
            <div className="w-[73px] relative leading-[28px] inline-block">
              نام استاد تخصص
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopTeachers;
