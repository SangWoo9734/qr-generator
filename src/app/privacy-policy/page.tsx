
export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-extrabold text-text-primary mb-8">Privacy Policy</h1>
      
      <div className="prose prose-indigo max-w-none space-y-8 text-text-secondary leading-relaxed">
        <p className="text-sm italic">Last Updated: December 28, 2025</p>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">1. Information We Do Not Collect</h2>
          <p>
            Your privacy is our top priority. We do <strong>not</strong> collect, store, or share any information you enter into our QR code generators. 
            All QR code generation happens locally in your web browser using JavaScript.
          </p>
          <ul className="list-disc pl-5 mt-4">
            <li>We do not see your URLs.</li>
            <li>We do not see your WiFi passwords.</li>
            <li>We do not see your text messages or phone numbers.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">2. Cookies and Analytics</h2>
          <p>
            We use standard analytics tools (like Google Analytics) to understand how visitors use our site in aggregate. 
            This helps us improve the user experience. These tools may use cookies to collect non-personally identifiable information such as:
          </p>
          <ul className="list-disc pl-5 mt-4">
            <li>Browser type and version.</li>
            <li>Operating system.</li>
            <li>Pages visited and time spent on the site.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">3. Advertising</h2>
          <p>
            We use third-party advertising companies (such as Google AdSense) to serve ads when you visit our website. 
            These companies may use information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">4. External Links</h2>
          <p>
            Our website contains links to other sites. We are not responsible for the privacy practices or the content of such websites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">5. Contact Information</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@qr-generator.cc" className="text-primary hover:underline">privacy@qr-generator.cc</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
