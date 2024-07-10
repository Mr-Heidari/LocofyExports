import { FunctionComponent } from "react";
import Groups from "./Groups";

export type WhyUsType = {
  className?: string;
};

const WhyUs: FunctionComponent<WhyUsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row flex-wrap items-center justify-center py-[50px] px-2.5 gap-[10px] text-left text-xl text-black font-inter border-b-[1px] border-solid border-silver ${className}`}
    >
      <div className="flex-1 flex flex-row flex-wrap items-center justify-center gap-[10px]">
        <Groups
          image="/image19@2x.png"
          prop="تمرکز در برگزاری دوره های مفید  "
          prop1="پرورش متخصص"
        />
        <Groups
          image="/image20@2x.png"
          prop="كيفيت محتوا"
          prop1="محصولات آموزشي با کیفیت منحصر به فرد"
          imageIconWidth="57px"
          imageIconBorderRadius="18.75px"
          imageIconHeight="64px"
          divWidth="unset"
          divFontSize="20px"
          divColor="#000"
          divDisplay="unset"
          divWidth1="252.8px"
          divFontSize1="16px"
          divColor1="#5c5c5c"
        />
        <Groups
          image="/image21@2x.png"
          prop="بهره گیری از اساتید باتجربه کشور"
          prop1="اساتيد برجسته "
          imageIconWidth="59px"
          imageIconBorderRadius="unset"
          imageIconHeight="63px"
          divWidth="unset"
          divFontSize="16px"
          divColor="#5c5c5c"
          divDisplay="unset"
          divWidth1="142px"
          divFontSize1="20px"
          divColor1="#000"
        />
      </div>
      <div className="bg-gray-200 flex flex-col items-center justify-center py-0 px-[50px] gap-[10px] text-13xl">
        <div className="w-64 relative font-semibold inline-block h-[39px] shrink-0">
          چرا آکادمی ارزش ؟
        </div>
        <img
          className="w-[107px] relative h-4 object-cover"
          alt=""
          src="/image22@2x.png"
        />
        <div className="w-[342.8px] relative text-2xl-5 leading-[28.98px] text-dimgray-200 text-right inline-block h-[145px] shrink-0">
          آکادمی ارزش ، راهی بسوی پیشرفت می باشد. دورههای ما شامل کلاسهای آنلاين
          از سطوح مبتدی تا پیشرفته میباشد. با ما، یادگیری یک تجربه حرفه ای و
          سرگرم کننده است.
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
