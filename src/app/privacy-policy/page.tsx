
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - 100% Private QR Generation | QR Studio',
  description: 'Our commitment to your privacy. Learn how QR Studio processes your data locally in your browser without ever sending it to our servers.',
  alternates: {
    canonical: '/privacy-policy',
    languages: {
      'en-US': '/en-US/privacy-policy',
      'es-ES': '/es-ES/privacy-policy',
      'ja-JP': '/ja-JP/privacy-policy',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-extrabold text-text-primary mb-8">Privacy Policy</h1>
      
      <div className="prose prose-indigo max-w-none space-y-8 text-text-secondary leading-relaxed">
        <p className="text-sm italic">Last Updated: December 29, 2025</p>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">Introduction</h2>
          <p>
            Welcome to <strong>QR Studio</strong> (qr-generator.cc). We are dedicated to providing a secure and private environment for our users. This Privacy Policy outlines how we handle your information and our commitment to transparency and privacy. By using our service, you agree to the practices described in this policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">1. No Data Collection Policy</h2>
          <p>
            Unlike traditional web services, QR Studio is built as a client-side application. This means that for our core services—specifically the generation of QR codes for URLs, WiFi networks, text messages, emails, and phone numbers—<strong>no data is sent to or stored on our servers.</strong>
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Input Data:</strong> Any text, link, or password you enter into our generators is processed locally in your browser to create the QR code image.</li>
            <li><strong>No Accounts:</strong> We do not require registration or personal information (such as your name or email address) to use our tools.</li>
            <li><strong>No Retention:</strong> Since no data is transmitted to our servers, we have no database of your generated codes.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">2. Cookies and Log Files</h2>
          <p>
            Like most websites, we use log files and cookies to improve your experience and manage the site. Log files include information such as internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamps, and referring/exit pages. This information is used to analyze trends, administer the site, and track user movement in the aggregate.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">3. Google Analytics</h2>
          <p>
            We use Google Analytics to monitor and analyze web traffic and user behavior. Google Analytics is a web analysis service provided by Google Inc. (&quot;Google&quot;). Google utilizes the Data collected to track and examine the use of this Application, to prepare reports on its activities and share them with other Google services.
          </p>
          <p>
            Google may use the Data collected to contextualize and personalize the ads of its own advertising network. You can opt-out of Google Analytics by installing the Google Analytics opt-out browser add-on.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">4. Google AdSense and DoubleClick Cookie</h2>
          <p>
            Google, as a third-party vendor, uses cookies to serve ads on our site. Google&apos;s use of the DoubleClick cookie enables it and its partners to serve ads to our users based on their visit to our site or other sites on the Internet.
          </p>
          <p>
            Users may opt-out of the use of the DoubleClick cookie for interest-based advertising by visiting the <a href="https://adssettings.google.com/authenticated" className="text-primary hover:underline">Google Ads Settings</a> page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">5. Managing Cookies</h2>
          <p>
            You can choose to disable or selectively turn off our cookies or third-party cookies in your browser settings. However, this can affect how you are able to interact with our site as well as other websites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">6. COPPA (Children Online Privacy Protection Act)</h2>
          <p>
            We do not specifically market to children under the age of 13 years old. Our service is a general-purpose utility for adults and organizations. We do not knowingly collect any personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">7. Contact Information</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy, please feel free to reach out to us at:
          </p>
          <p className="font-bold text-text-primary mt-2">
            Email: <a href="mailto:contact@qr-generator.cc" className="text-primary hover:underline font-semibold">contact@qr-generator.cc</a>
          </p>
        </section>
      </div>
    </div>
  );
}
