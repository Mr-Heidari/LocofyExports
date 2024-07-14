import { FunctionComponent } from "react";

export type UserCommentsType = {
  className?: string;
};

const UserComments: FunctionComponent<UserCommentsType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-center py-[50px] px-0 gap-[50px] text-left text-base-2 text-black font-inter border-b-[1px] border-solid border-silver ${className}`}
    >
      <div className="flex flex-col items-end justify-center gap-[20px] text-11xl">
        <div className="w-[445px] h-[229px] flex flex-col items-center justify-start gap-[62px]">
          <div className="w-[436px] h-[87px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[18px]">
            <h2 className="m-0 relative text-inherit font-semibold font-inherit">
              آنچه درباره آکادمی ارزش می گویند
            </h2>
            <img
              className="w-[333.2px] h-[33px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame1@2x.png"
            />
          </div>
          <p className="m-0 w-[445px] overflow-hidden flex flex-col items-end justify-center text-lg-5">
            <div className="w-[364px] relative leading-[20px] inline-block">
              لورم ایپسوم یا طرحنما متنی ساختگی و بدون معنى است كه برای امتحان
              فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده
              میشود.
            </div>
          </p>
        </div>
        <div className="w-[161px] h-[63px] bg-darkorange flex flex-col items-center justify-center cursor-pointer text-base text-white">
          <div className="relative font-semibold">مشاهده همه</div>
        </div>
      </div>
      <div className="w-[291px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col items-end justify-center py-[38px] px-[39px] box-border gap-[34px] text-center">
        <div className="self-stretch flex flex-row items-center justify-center">
          <img
            className="w-[103px] relative rounded-[49.75px] h-[103px] object-cover"
            alt=""
            src="/image28@2x.png"
          />
        </div>
        <p className="m-0 self-stretch relative leading-[19px]">
          لورم ايپسوم يا طرح نما متنى ساختگی و بدون معنی است كه برای امتحان فونت
          و یا پر کردن فضا دريك طراحى گرافيكى ويا صنعت چاپ استفاده ميشود.
        </p>
        <div className="flex flex-row items-center justify-center gap-[2px]">
          <img
            className="w-4 relative h-[15px] object-cover"
            alt=""
            src="/image29@2x.png"
          />
          <img
            className="w-4 relative h-[15px] object-cover"
            alt=""
            src="/image30@2x.png"
          />
          <img
            className="w-3.5 relative h-[15px] object-cover"
            alt=""
            src="/image311@2x.png"
          />
          <img
            className="w-[19px] relative h-[15px] object-cover"
            alt=""
            src="/image32@2x.png"
          />
          <img
            className="w-[21px] relative h-[15px] object-cover"
            alt=""
            src="/image33@2x.png"
          />
        </div>
        <p className="m-0 self-stretch relative text-base-4 text-right">
          نام و نام خانوادگی
        </p>
      </div>
      <div className="w-[294px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col items-end justify-center py-[38px] px-[41px] box-border gap-[32px] text-right">
        <div className="self-stretch flex flex-row items-center justify-center">
          <img
            className="w-[100px] relative h-[100px] object-cover"
            alt=""
            src="/image34@2x.png"
          />
        </div>
        <p className="m-0 self-stretch relative leading-[20px]">
          لورم ایپسوم يا طرح نما متنى ساختگی و بدون معنى است كه برای امتحان فونت
          و یا پر کردن فضا دريک طراحى گرافيكى ويا صنعت چاپ استفاده ميشود.
        </p>
        <div className="flex flex-row items-center justify-center gap-[2px]">
          <img
            className="w-4 relative h-[15px] object-cover"
            alt=""
            src="/image35@2x.png"
          />
          <img
            className="w-4 relative h-[15px] object-cover"
            alt=""
            src="/image36@2x.png"
          />
          <img
            className="w-4 relative h-[15px] object-cover"
            alt=""
            src="/image36@2x.png"
          />
          <img
            className="w-[15px] relative h-[15px] object-cover"
            alt=""
            src="/image37@2x.png"
          />
          <img
            className="w-5 relative h-[15px] object-cover"
            alt=""
            src="/image38@2x.png"
          />
        </div>
        <p className="m-0 self-stretch relative">نام و نام خانوادگی</p>
      </div>
    </section>
  );
};

export default UserComments;
