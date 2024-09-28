import React from "react";
import contact_bg from "../../assets/homepage/contact_us_bg.png";
import email from "../../assets/icons/email.png";
import pin from "../../assets/icons/pin.png";

function Contact() {
  return (
    <div className="w-full relative h-[120vh]">
      <img src={contact_bg.src} className="w-full h-full" />

      <div className="absolute w-full h-full z-10 bg-gradient-to-t from-[#ffffffd9] to-[#ffffff] top-0 flex flex-col items-center justify-center">
        <div className="w-[85%] h-[90%] max_width_container flex flex-col items-center gap-y-[50px]">
          <h2 className="text-[54px] font-medium">Contact Us</h2>
          <p className="w-[50%] text-center text-[21px] font-thin">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </p>

          <div className="grid grid-cols-2 w-[70%]">
            <div className="grid grid-cols-[1fr,10fr] gap-4">
              <div className="w-[54px] h-[54px] bg-white grid place-items-center rounded-[100px]">
                <img src={email.src} className="w-[23px]" />
              </div>
              <div className="flex flex-col gap-y-2">
                <h2 className="text-[24px] font-bold">Email us</h2>
                <p className="text-[16px] text-[#161C2D]">
                  egourev@gmail.com <br />
                  blake.burstyn@compass.com
                  <br />
                  oceancapitalfunding@gmail.com
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[1fr,10fr] gap-4">
              <div className="w-[54px] h-[54px] bg-white grid place-items-center rounded-[100px]">
                <img src={pin.src} className="w-[23px]" />
              </div>
              <div className="flex flex-col gap-y-2">
                <h2 className="text-[24px] font-bold">Visit us</h2>
                <p className="text-[16px]">
                  20505 S. Dixie Hwy, Cutler Bay, FL
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-[40px] w-full rounded-[20px] flex flex-col gap-y-[20px]">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex w-full flex-col gap-y-2">
                <label className="text-[15px] font-bold">
                  First & Last Name
                </label>
                <input placeholder="Example: John doe" className="font-thin" />
              </div>

              <div className="flex w-full flex-col gap-y-2">
                <label className="text-[15px] font-bold">Email</label>
                <input placeholder="i.e., john.doe@gmail.com" className="font-thin" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex w-full flex-col gap-y-2">
                <label className="text-[15px] font-bold">Phone Number</label>
                <input placeholder="i.e. +1-234-567-7890" className="font-thin" />
              </div>

              <div className="flex w-full flex-col gap-y-2">
                <label className="text-[15px] font-bold">Subject</label>
                <input placeholder="i.e., I need help" className="font-thin" />
              </div>
            </div>

            <div className="grid grid-cols-1">
              <div className="flex w-full flex-col gap-y-2">
                <label className="text-[15px] font-bold">Message</label>
                <input placeholder="Type your message" className="font-thin" />
              </div>
            </div>

            <button className="bg-primaryblue mt-[60px] px-[70px] py-[10px] w-fit rounded-[6px] text-white duration-200 ease-out hover:opacity-70">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
