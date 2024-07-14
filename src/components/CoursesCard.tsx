import { FunctionComponent } from "react";

export type CoursesCardType = {
  className?: string;
};

const CoursesCard: FunctionComponent<CoursesCardType> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-[450px] w-[313px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col items-center justify-start gap-[10px] cursor-pointer text-left text-base text-white font-inter ${className}`}
    >
      <div className="w-[313px] h-[213px] flex flex-col items-end justify-start py-[9px] px-[16.5px] box-border bg-[url('/public/frame-100@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="bg-darkorange flex flex-row items-center justify-center py-2 px-2.5 gap-[8px]">
          <div className="relative font-semibold">15 هفته</div>
          <img
            className="w-[23px] relative h-[23px] object-cover"
            alt=""
            src="/image17@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-center py-0 px-[15px] gap-[14px] text-xs text-black">
        <div className="w-24 h-[45px] flex flex-col items-center justify-center text-white">
          <div className="rounded-8xs bg-dodgerblue-200 flex flex-col items-center justify-center py-2.5 px-5">
            <div className="relative font-semibold">دسته دوره</div>
          </div>
        </div>
        <h3 className="m-0 self-stretch relative text-base font-semibold font-inherit text-right">
          عنوان دوره
        </h3>
        <p className="m-0 self-stretch relative text-base-9 leading-[27.98px] text-right">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است
        </p>
        <div className="self-stretch flex flex-row items-center justify-end text-base-4">
          <p className="m-0 relative"> 5 (2 راى)</p>
          <img
            className="w-3.5 relative h-[17px] object-cover"
            alt=""
            src="/image18@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
