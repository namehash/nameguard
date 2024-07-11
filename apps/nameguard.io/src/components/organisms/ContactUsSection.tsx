import { ContactUsForm } from "./ContactUsForm";
import {
  CalButton,
  ColorfulBg,
  PreSectionText,
  SectionTitle,
  SectionText,
  AirplaneIllustration,
} from "@/components/atoms/";

export const ContactSection = () => {
  return (
    <section className="w-full max-w-[1216px] m-auto px-5 lg:pb-20 pb-5">
      <ColorfulBg className="absolute top-0 left-0 w-full z-[-1] min-h-[200px]" />

      <div className="lg:mt-[100px] lg:mb-[120px] pt-[60px] mb-[60px]">
        <PreSectionText className="text-start ">Get in touch</PreSectionText>
        <h1 className="font-bold text-[52px] ">Contact</h1>
      </div>

      <div className="w-full flex lg:flex-row flex-col justify-between items-center rounded-[8px] bg-gradient-to-r lg:px-10 lg:py-8 p-5 mb-20 from-[#2D2D2D] to-black">
        <div className="flex flex-col gap-2 mb-4 lg:mb-0">
          <h3 className="text-2xl leading-8 font-semibold text-white">
            Discuss an integration
          </h3>
          <p className="text-lg leading-7 font-normal text-gray-500">
            Schedule a call with us to discuss an integration with NameGuard
          </p>
        </div>
        <CalButton className="px-[25px] py-[13px] rounded-[8px] bg-white flex hover:bg-gray-100 transition-colors duration-200 w-full justify-center lg:w-auto">
          Schedule a call
        </CalButton>
      </div>
      <div className="w-full flex flex-col lg:flex-row m-auto gap-10 max-w-7xl">
        <div className="lg:w-1/2 w-full flex flex-col gap-3 items-start">
          <SectionTitle className="text-3xl lg:text-4xl font-bold">
            Let&apos;s chat
          </SectionTitle>
          <SectionText className="text-gray-500 text-lg">
            If you have questions, ideas, or share a passion for NameGuard and
            would like to explore collaboration, please don&apos;t hesitate to
            reach out to us.
          </SectionText>
          <div className="w-full">
            <AirplaneIllustration />
          </div>
        </div>
        <div className="lg:w-1/2 w-full bg-gray-50 py-4 px-4 lg:py-8 lg:px-10 border rounded-[8px] flex justify-center items-center">
          <ContactUsForm title="Send your request" />
        </div>
      </div>
    </section>
  );
};