import { FunctionComponent } from "react";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-col items-start justify-start py-[63px] px-[42px] bg-[url('/public/footer@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-xl text-black font-inter ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-[130px] gap-[105px]">
        <div className="flex flex-col items-end justify-center gap-[20px]">
          <h3 className="m-0 relative text-inherit font-semibold font-inherit">
            مخاطبین
          </h3>
          <p className="m-0 w-[330px] relative text-base leading-[28px] text-right inline-block">
            آدرس ایمیل خود را برای ثبت نام در اشتراک خبرنامه ما وارد كنيد
          </p>
          <div className="flex flex-row items-center justify-center gap-[10px]">
            <button className="cursor-pointer [border:none] p-2.5 bg-darkorange w-[138px] rounded-3xs h-[53px] flex flex-row items-center justify-center box-border">
              <div className="relative text-base leading-[25px] font-semibold font-inter text-white text-right">
                ارسال
              </div>
            </button>
            <input
              className="[border:none] [outline:none] bg-white w-[184px] h-12 flex flex-row items-center justify-center p-2.5 box-border font-inter text-base text-dimgray-100"
              placeholder="ایمیل"
              type="text"
            />
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[23px]">
            <a className="[text-decoration:none] w-[18px] relative h-[18px] bg-[url('/public/image110@3x.png')] bg-cover bg-no-repeat bg-[top]" />
            <a className="[text-decoration:none] w-[18px] relative h-[15px] bg-[url('/public/image210@3x.png')] bg-cover bg-no-repeat bg-[top]" />
            <a className="[text-decoration:none] w-[18px] relative h-3.5 bg-[url('/public/image310@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          </div>
        </div>
        <div className="w-[69px] flex flex-col items-start justify-center gap-[21px] text-base">
          <h3 className="m-0 self-stretch relative text-xl font-semibold font-inherit">
            لینک ها
          </h3>
          <a className="[text-decoration:none] self-stretch relative text-[inherit]">
            مخاطبین
          </a>
          <a className="[text-decoration:none] self-stretch relative text-[inherit]">
            دانش نامه
          </a>
        </div>
        <div className="w-[114px] flex flex-col items-start justify-center gap-[21px] text-base">
          <h3 className="m-0 self-stretch relative text-xl font-semibold font-inherit">
            آکادمی ارزش
          </h3>
          <p className="m-0 self-stretch relative">درباره ما</p>
          <p className="m-0 self-stretch relative">دوره ها</p>
          <p className="m-0 self-stretch relative">اساتيد</p>
          <p className="m-0 self-stretch relative">رويدادها</p>
        </div>
        <div className="flex flex-col items-end justify-center gap-[10px] text-dodgerblue-100">
          <div className="w-[255px] flex flex-row items-start justify-between">
            <div className="w-[180px] flex flex-col items-end justify-center">
              <div className="w-[115px] relative leading-[30px] font-semibold inline-block">
                آكادمی ارزش
              </div>
              <div className="relative leading-[30px] font-semibold">
                Arzesh-Academy
              </div>
            </div>
            <img
              className="w-[71px] relative h-[67px] object-cover"
              alt=""
              src="/image42@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-end justify-center gap-[5px] text-base text-black">
            <p className="m-0 self-stretch relative leading-[25px] text-right">
              آدرس : خیابان اول کوچه دوم ساختمان شركت شبكه ارزش
            </p>
            <p className="m-0 relative leading-[25px]">{`تلفن : 123456789 `}</p>
            <p className="m-0 w-[193px] relative leading-[25px] inline-block">
              ايميل : arzesh@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;