import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type GroupsType = {
  className?: string;
  image?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  imageIconWidth?: CSSProperties["width"];
  imageIconBorderRadius?: CSSProperties["borderRadius"];
  imageIconHeight?: CSSProperties["height"];
  divWidth?: CSSProperties["width"];
  divFontSize?: CSSProperties["fontSize"];
  divColor?: CSSProperties["color"];
  divDisplay?: CSSProperties["display"];
  divWidth1?: CSSProperties["width"];
  divFontSize1?: CSSProperties["fontSize"];
  divColor1?: CSSProperties["color"];
};

const Groups: FunctionComponent<GroupsType> = ({
  className = "",
  image,
  prop,
  prop1,
  imageIconWidth,
  imageIconBorderRadius,
  imageIconHeight,
  divWidth,
  divFontSize,
  divColor,
  divDisplay,
  divWidth1,
  divFontSize1,
  divColor1,
}) => {
  const imageIconStyle: CSSProperties = useMemo(() => {
    return {
      width: imageIconWidth,
      borderRadius: imageIconBorderRadius,
      height: imageIconHeight,
    };
  }, [imageIconWidth, imageIconBorderRadius, imageIconHeight]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      width: divWidth,
      fontSize: divFontSize,
      color: divColor,
      display: divDisplay,
    };
  }, [divWidth, divFontSize, divColor, divDisplay]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      width: divWidth1,
      fontSize: divFontSize1,
      color: divColor1,
    };
  }, [divWidth1, divFontSize1, divColor1]);

  return (
    <div
      className={`w-[285px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white h-[175px] flex flex-col items-center justify-center gap-[10px] text-left text-xl text-black font-inter ${className}`}
    >
      <img
        className="w-[54px] relative rounded-lgi h-[57px] object-cover"
        alt=""
        src={image}
        style={imageIconStyle}
      />
      <div
        className="w-[281px] relative font-semibold whitespace-pre-wrap inline-block"
        style={divStyle}
      >
        {prop}
      </div>
      <div
        className="w-[119px] relative text-base font-semibold text-dimgray-200 inline-block"
        style={div1Style}
      >
        {prop1}
      </div>
    </div>
  );
};

export default Groups;
