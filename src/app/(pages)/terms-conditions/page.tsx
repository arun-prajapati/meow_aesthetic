const page = () => {
  return (
    <div className="w-full min-h-svh py-10 bg-[#F7F7F7]">
      <h1 className="text-xl lg:text-4xl font-medium py-5 text-center">
        Terms & Conditions
      </h1>
      <div className="flex flex-col gap-5 w-[95%] mx-auto py-5 *:flex *:flex-col *:gap-2">
        <p>
          <b>1. About Us</b> Meow Aesthetics offers beauty, wellness, and
          lifestyle services, including spa treatments, manicures, facials, body
          slimming, IPL services, and more. We also operate Meow Luxury,
          providing lab-cut jewelry, luxury apparel, and accessories.
        </p>
        <p>
          <b>2. Services</b> All treatments, services, and promotions listed are
          subject to availability. We reserve the right to modify or discontinue
          services without prior notice.
        </p>
        <p>
          <b>3. Bookings and Appointments</b> Appointments can be made online,
          by phone, or in person at our outlets. A confirmation will be sent
          upon successful booking. We request at least 24 hours’ notice for
          cancellations or rescheduling. Last-minute cancellations or no-shows
          may incur a fee.
        </p>
        <p>
          {" "}
          <b>4. Payment</b> Prices are in Singapore Dollars (SGD) unless
          otherwise stated. Payment is due at the time of service or purchase.
          We accept cash, credit/debit cards, and other payment methods as
          specified in-store or online. Promotions, vouchers, and discounts are
          non-transferable, non-exchangeable, and cannot be combined unless
          stated.{" "}
        </p>
        <p>
          <b>5. Refunds and Exchanges</b> Services rendered are non-refundable.
          Products purchased (from Meow Luxury) are eligible for exchange only
          if they are defective or damaged upon receipt. Requests must be made
          within 7 days of purchase with proof of receipt.
        </p>
        <p>
          {" "}
          <b>6. Personal Information</b> We take your privacy seriously. Please
          refer to our [Privacy Policy] for details on how we collect, use, and
          protect your information.
        </p>
        <p>
          {" "}
          <b>7. Intellectual Property</b> All content on this site — including
          text, images, logos, designs, and graphics — is the property of Meow
          Aesthetics and Meow Luxury. You may not reproduce, distribute, or use
          any material without our written permission.
        </p>
        <p>
          {" "}
          <b>8. Limitation of Liability</b> While we strive for excellence, Meow
          Aesthetics shall not be liable for any indirect, incidental, or
          consequential damages arising from the use of our services or website.{" "}
        </p>
        <p>
          {" "}
          <b>9. Changes to Terms</b> We may update these Terms & Conditions from
          time to time. Any changes will be posted here. It is your
          responsibility to review these Terms periodically.
        </p>
        <p>
          {" "}
          <b>10. Governing Law</b> These Terms are governed by the laws of
          Singapore. Any disputes will be subject to the exclusive jurisdiction
          of Singapore courts.
        </p>
        <p>
          {" "}
          Contact Us If you have any questions about these Terms, please feel
          free to contact us at:
        </p>
        <p>
          ✉️ Email:
          <b>
            <a href="mailto:meowaestheticssg@gmail.com">
              meowaestheticssg@gmail.com
            </a>
          </b>
        </p>
        <p>
          📞 Phone:
          <b>
            <a href="tel:87713358">87713358</a>
          </b>
        </p>
        <p> 📍 Visit us at our outlets across Singapore!</p>
      </div>
    </div>
  );
};

export default page;
