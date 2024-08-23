import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Link Lord</title>
      </Head>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
          Privacy Policy
        </h1>
        <p className="mb-4 text-lg text-gray-700">
          Welcome to Link Lord. We value your privacy and are committed to
          protecting your personal information. This Privacy Policy outlines how
          we collect, use, and safeguard your data when you use our services.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Information We Collect
        </h2>
        <p className="mb-4 text-lg text-gray-700">
          We may collect personal information such as your name, email address,
          and any other information you provide when using our services.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          How We Use Your Information
        </h2>
        <p className="mb-4 text-lg text-gray-700">
          We use the information we collect to provide, maintain, and improve
          our services, as well as to communicate with you and personalize your
          experience on Link Lord.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Sharing Your Information
        </h2>
        <p className="mb-4 text-lg text-gray-700">
          We do not share your personal information with third parties except
          as necessary to provide our services, comply with legal obligations,
          or protect our rights.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Your Rights
        </h2>
        <p className="mb-4 text-lg text-gray-700">
          You have the right to access, update, or delete your personal
          information. If you wish to exercise these rights, please contact us
          at support@linklord.com.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Security
        </h2>
        <p className="mb-4 text-lg text-gray-700">
          We implement appropriate security measures to protect your information
          from unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-4 text-lg text-gray-700">
          We may update this Privacy Policy from time to time. We encourage you
          to review this policy periodically for any changes.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Contact Us
        </h2>
        <p className="mb-4 text-lg text-gray-700">
          If you have any questions or concerns about this Privacy Policy, please
          contact us at support@linklord.com.
        </p>

        <p className="text-lg text-gray-700">
          Last updated: [Date]
        </p>
      </div>
    </>
  );
}
