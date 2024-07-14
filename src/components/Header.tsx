import { FunctionComponent } from "react";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-between text-left text-xl text-dimgray-300 font-inter ${className}`}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-[40px]">
        <div className="flex flex-row items-center justify-center gap-[20px]">
          <a className="[text-decoration:none] relative leading-[8px] font-semibold text-[inherit] hover:cursor-pointer hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">{`ثبت نام `}</a>
          <a className="[text-decoration:none] relative leading-[8px] font-semibold text-[inherit] hover:cursor-pointer hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
            ورود
          </a>
        </div>
        <div className="rounded-3xs flex flex-row items-center justify-center py-[15px] px-2.5 gap-[10px] border-[1px] border-solid border-dimgray-300 sm:flex">
          <img
            className="w-[19px] relative h-[19px] object-cover"
            alt=""
            src="/image@2x.png"
          />
          <input
            className="[border:none] [outline:none] font-semibold font-inter text-base bg-[transparent] relative text-gray-100 text-left"
            placeholder="هر آنچه در جستجوى آن هستيد."
            type="text"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-end text-dodgerblue-100">
        <div className="flex flex-col items-end justify-center gap-[5px]">
          <h1 className="m-0 w-[119px] relative text-inherit leading-[36px] font-semibold font-inherit inline-block">{`آكادمی ارزش `}</h1>
          <div className="w-[110px] relative h-0">
            <div className="absolute top-[-1px] left-[-1px] box-border w-[102px] h-0.5 border-t-[2px] border-solid border-dodgerblue-100" />
          </div>
          <h1 className="m-0 relative text-inherit leading-[36px] font-semibold font-inherit">
            Arzesh-Academy
          </h1>
        </div>
        <img
          className="h-[73px] w-[77px] relative object-cover bg-[red]"
          alt=""
          src="/image1@2x.png"
        />
      </div>
    </div>
  );
};

export default Header;