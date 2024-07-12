import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[351px] h-[489px] flex flex-col items-center justify-start relative text-right text-sm text-black font-inter ${className}`}
    >
      <img
        className="w-[351px] relative rounded-md h-[284px] object-cover z-[0]"
        alt=""
        src="/image40@2x.png"
      />
      <div className="w-[302px] !m-[0] absolute top-[144px] left-[24.5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col items-end justify-start pt-10 px-2.5 pb-[15px] box-border gap-[10px] z-[1]">
        <div className="self-stretch flex flex-col items-end justify-center gap-[10px]">
          <p className="m-0 self-stretch relative leading-[27px]">{`دسته `}</p>
          <h3 className="m-0 self-stretch relative text-5xl leading-[27px] font-semibold font-inherit">
            عنوان
          </h3>
          <p className="m-0 self-stretch relative leading-[27px]">
            لورم ایپسوم یا طرحنما متنی ساختگی وبدون معنی است كه برای امتحان فونت
            و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده ميشود.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-[25px] text-left text-smi-3">
          <p className="m-0 w-20 relative inline-block shrink-0">1403-02-15</p>
          <img
            className="w-[38px] relative h-10 object-cover"
            alt=""
            src="/image41@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
