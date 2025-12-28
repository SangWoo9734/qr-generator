
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl font-sans">
      <h1 className="text-4xl font-extrabold text-text-primary mb-8">About QR Studio</h1>
      
      <div className="prose prose-indigo max-w-none space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">Our Mission</h2>
          <p>
            At QR Studio, we believe that essential digital tools should be accessible to everyone, for free, without compromising privacy. 
            Our mission is to provide the most reliable, fast, and feature-rich QR code generator hub on the web.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-5 space-y-4">
            <li>
              <strong>Privacy First:</strong> Unlike many other generators, we process your data entirely in your own browser. 
              Nothing you type is ever sent to our servers.
            </li>
            <li>
              <strong>No Hidden Costs:</strong> We don&apos;t charge for &quot;dynamic&quot; codes or high-resolution downloads. All features are 100% free.
            </li>
            <li>
              <strong>Permanent Codes:</strong> The static QR codes you create here will work forever. They don&apos;t have expiration dates and don&apos;t rely on our servers to function.
            </li>
            <li>
              <strong>No Account Needed:</strong> We don&apos;t want your email address. You can start generating codes immediately without signing up.
            </li>
          </ul>
        </section>

        <section className="bg-primary-light p-8 rounded-2xl border border-primary/10 italic">
          &quot;The best tools are the ones that get the job done quickly and then get out of your way. That&apos;s what we strive for with QR Studio.&quot;
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">Contact Us</h2>
          <p>
            Have feedback or questions? Feel free to reach out to us at <a href="mailto:support@qr-generator.cc" className="text-primary font-semibold hover:underline">support@qr-generator.cc</a>. 
            We&apos;re always looking for ways to improve our tools for you.
          </p>
        </section>
      </div>
    </div>
  );
}
