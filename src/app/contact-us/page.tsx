import ContactUsForm from "@/components/ContactUsForm/ContactUsForm";
import React from "react";

export default function ContactUspage() {
  return (
    <>
   <img
        className="w-100 h-100"
        src="https://image.wedmegood.com/resized/1900X/uploads/city_bg_image/17/jaipur_bg.jpg"
        alt="banner"
      />
      <div className="grid grid-cols-1 md:grid-cols-12 mt-10 justify-start">
        <div className="md:col-span-8">
          <ContactUsForm />
        </div>
        <div className="mx-4 my-4 md:col-span-4 md:mr-4">
          <div className="mb-3">
            <h3 className="text-lg font-medium">Vendors</h3>
            <p className="text-sm">
              If you are a registered vendor or a business looking to promote
              your brand on our portal, please send in your queries at
              vendors@comany.com
            </p>
          </div>
          <div className="mb-3">
            <h3 className="text-lg font-medium">Marketing Collaborations</h3>
            <p className="text-sm">
              For brand collaborations - sponsored content, social media
              activations etc., please write into partnerships@comany.com
            </p>
          </div>
          <div className="mb-3">
            <h3 className="text-lg font-medium">Wedding Submissions</h3>
            <p className="text-sm">
              Company Name features wedding across cultures, styles and budgets.
              To submit your wedding, kindly email us 15-20 photos at
              submissions@comany.com
            </p>
          </div>
          <div className="mb-3">
            <h3 className="text-lg font-medium">Careers</h3>
            <p className="text-sm">
              We are a team of passionate young minds looking to reinvent the
              wedding space. Please check our careers page for current openings
              and email us at hr@comany.com
            </p>
          </div>
          <div className="mb-3">
            <h3 className="text-lg font-medium">Customers</h3>
            <p className="text-sm">
              We love to hear from our precious users. For any feedback or
              queries simply write in to info@comany.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
