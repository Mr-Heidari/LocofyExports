import { FunctionComponent } from "react";

export type NavbarType = {
  className?: string;
};

const Navbar: FunctionComponent<NavbarType> = ({ className = "" }) => {
  return (
    <nav
      className={`m-0 self-stretch flex flex-row items-center justify-between pt-[15px] px-0 pb-0 text-left text-base text-dimgray-100 font-inter border-t-[1px] border-solid border-darkgray ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-[20px]">
        <a className="[text-decoration:none] relative font-semibold text-[inherit]">
          تماس با ما
        </a>
        <a className="[text-decoration:none] relative font-semibold text-[inherit]">{`درباره ما `}</a>
      </div>
      <div className="flex flex-row items-center justify-start gap-[30px] text-xl text-darkslategray">
        <div className="flex flex-row items-center justify-center py-0 px-3 gap-[50px] sm:hidden md:hidden">
          <a className="[text-decoration:none] relative leading-[8px] font-medium text-[inherit]">
            بلاگ
          </a>
          <a className="[text-decoration:none] relative leading-[8px] font-medium text-[inherit]">
            دانش نامه
          </a>
          <a className="[text-decoration:none] relative leading-[8px] font-medium text-[inherit]">
            مشاوره
          </a>
          <a className="[text-decoration:none] relative leading-[8px] font-medium text-[inherit]">
            اساتید
          </a>
          <a className="[text-decoration:none] relative leading-[8px] font-medium text-[inherit]">
            دوره ها
          </a>
        </div>
        <img
          className="w-px relative h-[38px] object-cover sm:hidden md:hidden"
          alt=""
          src="/image2@2x.png"
        />
        <div className="flex flex-row items-center justify-start gap-[20px]">
          <label
            className="cursor-pointer relative leading-[36px] font-medium sm:hidden"
            htmlFor="categories"
          >
            دسته بندی
          </label>
          <img
            className="w-[19px] relative h-[18px] object-cover"
            id="categories"
            alt=""
            src="/image3@2x.png"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;