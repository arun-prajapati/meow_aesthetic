const page = () => {
  return (
    <div className="w-full min-h-svh py-10 bg-[#F7F7F7]">
      <h1 className="text-xl lg:text-4xl font-medium py-5 text-center">
        Privacy Policy
      </h1>
      <div className="flex flex-col gap-5 w-[95%] mx-auto py-5 *:flex *:flex-col *:gap-2">
        <div>
          <p>
            At Meow Aesthetics, your privacy is important to us. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website or use our services. By
            accessing or using our site, you agree to the terms outlined below.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, mailing address, date of birth, and any other information
              you voluntarily provide during booking, inquiries, purchases, or
              sign-ups.
            </li>
            <li>
              <strong>Payment Information:</strong> Billing details collected
              for purchases or services (handled securely through payment
              gateways; we do not store full payment card information).
            </li>
            <li>
              <strong>Usage Information:</strong> Data such as IP address,
              browser type, device information, pages visited, time spent on
              pages, and other analytics collected automatically through cookies
              and tracking technologies.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            2. How We Use Your Information
          </h2>
          <p>We use your information to:</p>
          <ul className="list-disc list-inside">
            <li>Process bookings, purchases, and service requests</li>
            <li>
              Personalize your experience at Meow Aesthetics and Meow Luxury
            </li>
            <li>
              Send service updates, promotional offers, and newsletters (
              {`only if
              you've opted in`}
              )
            </li>
            <li>Respond to your inquiries and customer service needs</li>
            <li>Improve our website, services, and customer experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">3. Sharing Your Information</h2>
          <p>
            We respect your privacy and do <strong>not</strong> sell, rent, or
            trade your personal information to third parties. We may share your
            information only with:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Trusted third-party service providers (e.g., payment processors,
              email marketing platforms) who assist us in operating our business
            </li>
            <li>
              Legal authorities if required by law, regulation, or court order
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">4. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your
            browsing experience and understand how you interact with our
            website. You can choose to disable cookies through your browser
            settings, but it may affect your site experience.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">5. Your Choices</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside">
            <li>Access and request a copy of your personal information</li>
            <li>Correct any inaccurate or outdated information</li>
            <li>
              Withdraw your consent for marketing communications at any time
            </li>
            <li>
              Request the deletion of your personal data, subject to applicable
              law
            </li>
          </ul>
          <p>
            To exercise these rights, please contact us at [Insert Email
            Address].
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">6. Security</h2>
          <p>
            We implement reasonable security measures to protect your personal
            information. However, please be aware that no method of electronic
            transmission or storage is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of external sites.
            Please review their privacy policies separately.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            8. Updates to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. Updates will be posted on this page with the
            revised accordingly.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle
            your information, please reach out to us:
          </p>
          <ul className="list-disc list-inside">
            <li>
              ✉️ Email:{" "}
              <b>
                <a href="mailto:meowaestheticssg@gmail.com">
                  meowaestheticssg@gmail.com
                </a>
              </b>
            </li>
            <li>
              📞 Phone:{" "}
              <b>
                <a href="tel:87713358">87713358</a>
              </b>
            </li>
            <li>📍 Visit us at our outlets across Singapore!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
