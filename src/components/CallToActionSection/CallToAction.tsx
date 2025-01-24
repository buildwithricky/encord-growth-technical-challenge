import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";
interface CallToActionProps {
  heading:string;
  subHeading:{subHeading:string};
  callToActionText:string;
  callToActionUrl:string;
}

const CallToAction:React.FC<CallToActionProps> = ({heading,subHeading,callToActionText,callToActionUrl}) => {
    return (
      <section className=" mt-5 bg-primary relative w-full mb-10 lg:px-32 z-10 lg:py-20 sm:px-9 px-4 py-16 sm:mx-auto text-center text-white rounded-2.5xl d  max-w-7xl ">
        <img
          src={'../images/cta_image.png'}
          className="h-full w-full absolute inset-0 -z-10 rounded-2.5xl"
        />
        <div className="flex flex-col justify-center w-full max-w-5xl">
          <h4 className="text-2xl font-semibold mx-auto font-manrope sm:text-3.25xl px-5 sm:px-24 lg:px-0 lg:text-4.5xl max-w-[700px] leading-8 sm:leading-10 lg:tracking-tightest_4 lg:leading-12 ">
            {heading}
          </h4>
          <p className="mb-5 sm:mb-7 mt-3.5 sm:mt-6 text-sm sm:text-lg text-gray-2200 md:px-5 leading-5 sm:leading-7 max-w-[720px] mx-auto sm:px-10 lg:px-0">
{subHeading?.subHeading}
          </p>
          <section>
            <form
              action={callToActionUrl}
              onSubmit={() => alert("form submitted")}
              className="relative flex flex-col w-full gap-3 mb-4 sm:flex-row"
            >
              <input
                type="text"
                placeholder="Your email address"
                className="w-full border-none text-gray-2500 placeholder-gray-600 focus:rounded-4xl rounded-4xl focus:!shadow-none focus:!outline-none focus:ring-0 focus:!border-none placeholder:text-base placeholder:tracking-[-0.8px]  leading-6 disabled:bg-gray-300 bg-white pl-[22px] pr-20 sm:pr-32 py-3.5 ring-0"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 font-semibold text-white rounded-lg shadow-lg sm:max-w-fit bg-primary focus:outline-none focus:ring-2"
              >
            {callToActionText}
              </button>
            </form>
          </section>
        </div>
      </section>
    );
};

export default CallToAction;
