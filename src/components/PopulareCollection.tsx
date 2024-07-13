import { FunctionComponent } from "react";

export type PopulareCollectionType = {
  className?: string;
};

const PopulareCollection: FunctionComponent<PopulareCollectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start pt-5 px-0 pb-[50px] gap-[50px] text-left text-11xl text-black font-inter border-b-[1px] border-solid border-silver ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center gap-[14px]">
        <h2 className="m-0 relative text-inherit font-semibold font-inherit">
          دسته های پرمخاطب
        </h2>
        <img
          className="w-[108px] relative h-[15px] object-cover"
          alt=""
          src="/image31@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center gap-[35px] text-base-4">
        <img
          className="w-[66px] relative rounded-tl-none rounded-tr-10xs rounded-br-10xs rounded-bl-none h-40 object-cover"
          alt=""
          src="/frame-32@2x.png"
        />
        <div className="w-[278px] h-[227px] flex flex-col items-center justify-start gap-[17px]">
          <img
            className="w-[278px] relative h-[170px] object-cover"
            alt=""
            src="/image4@2x.png"
          />
          <div className="w-[91px] flex flex-col items-center justify-start">
            <p className="m-0 self-stretch relative leading-[22px]">
              Web Design
            </p>
            <p className="m-0 self-stretch relative leading-[22px] text-center">
              {" "}
              1 درس
            </p>
          </div>
        </div>
        <div className="w-[271px] h-[227px] flex flex-col items-center justify-start gap-[11px] text-center text-sm-9">
          <div className="w-[271px] h-[172px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
            <img
              className="w-[271px] relative h-40 object-cover"
              alt=""
              src="/image5@2x.png"
            />
            <img
              className="w-[61px] relative h-12 object-cover mt-[-36px]"
              alt=""
              src="/image6@2x.png"
            />
          </div>
          <div className="w-[75px] h-11 flex flex-col items-start justify-center">
            <p className="m-0 self-stretch relative leading-[22px]">Backend</p>
            <p className="m-0 self-stretch relative leading-[22px]"> 1 درس</p>
          </div>
        </div>
        <div className="w-[271px] relative h-[178px] text-sm-1">
          <div className="absolute top-[187px] left-[103px] w-[61px] flex flex-col items-center justify-start">
            <p className="m-0 self-stretch relative leading-[20px]">{`Full Stack `}</p>
            <p className="m-0 self-stretch relative leading-[20px] text-center">
              1 درس
            </p>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[271px] h-[178px] overflow-hidden flex flex-col items-center justify-start">
            <img
              className="w-[271px] relative h-40 object-cover"
              alt=""
              src="/image7@2x.png"
            />
            <img
              className="w-[55px] relative rounded-tl-7xl-5 rounded-tr-10xs rounded-br-10xs rounded-bl-[10.75px] h-[54px] object-cover mt-[-36px]"
              alt=""
              src="/image8@2x.png"
            />
          </div>
        </div>
        <div className="w-[271px] relative h-[165px] bg-[url('/public/frame-34@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="absolute top-[189px] left-[59px] w-[141px] flex flex-col items-center justify-start">
            <p className="m-0 self-stretch relative leading-[24px]">{`Mobile Application `}</p>
            <p className="m-0 self-stretch relative leading-[24px] text-center">
              1 درس
            </p>
          </div>
          <img
            className="absolute top-[129px] left-[99px] w-[73px] h-[51px] overflow-hidden object-cover"
            alt=""
            src="/frame@2x.png"
          />
        </div>
        <img
          className="w-[110px] relative rounded-t-none rounded-br-none rounded-bl-10xs h-[166px] object-cover"
          alt=""
          src="/frame-35@2x.png"
        />
      </div>
      <div className="w-[89px] h-[21px] flex flex-row items-start justify-start py-2 pr-0 pl-px box-border gap-[7px]">
        <img
          className="w-2.5 relative h-2.5 object-cover"
          alt=""
          src="/image9@2x.png"
        />
        <img
          className="w-2.5 relative h-2.5 object-cover"
          alt=""
          src="/image10@2x.png"
        />
        <img
          className="w-2.5 relative h-2.5 object-cover"
          alt=""
          src="/image11@2x.png"
        />
        <img
          className="w-2.5 relative h-2.5 object-cover"
          alt=""
          src="/image12@2x.png"
        />
        <img
          className="w-5 relative h-2.5 object-cover"
          alt=""
          src="/image13@2x.png"
        />
      </div>
    </section>
  );
};

export default PopulareCollection;