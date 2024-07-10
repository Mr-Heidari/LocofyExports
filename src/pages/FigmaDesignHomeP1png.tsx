import { FunctionComponent } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PopulareCollection from "../components/PopulareCollection";
import TopCourses from "../components/TopCourses";
import NewCourses from "../components/NewCourses";
import WhyUs from "../components/WhyUs";
import TopTeachers from "../components/TopTeachers";
import UserComments from "../components/UserComments";
import News from "../components/News";
import Footer from "../components/Footer";

const FigmaDesignHomeP1png: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-center gap-[10px]">
      <header className="self-stretch flex flex-col items-start justify-start py-0 px-[50px] gap-[10px]">
        <Header />
        <Navbar />
      </header>
      <section className="self-stretch h-[454px] flex flex-col items-center justify-center bg-[url('/public/hero@3x.png')] bg-cover bg-no-repeat bg-[top] text-right text-[36px] text-whitesmoke font-inter">
        <div className="w-[800px] flex flex-row items-center justify-end min-w-[800px] max-w-[800px]">
          <p className="m-0 w-[267px] relative leading-[60px] font-semibold inline-block shrink-0">
            بهترين دوره ها را در آكادمى ارزش دنبال كنيد
          </p>
        </div>
      </section>
      <PopulareCollection />
      <TopCourses />
      <NewCourses />
      <WhyUs />
      <TopTeachers />
      <UserComments />
      <News />
      <Footer />
    </div>
  );
};

export default FigmaDesignHomeP1png;
