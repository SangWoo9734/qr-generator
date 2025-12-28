
export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-extrabold text-text-primary mb-8">Terms of Service</h1>
      
      <div className="prose prose-indigo max-w-none space-y-8 text-text-secondary leading-relaxed">
        <p className="text-sm italic">Last Updated: December 28, 2025</p>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using QR Studio (qr-generator.cc), you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">2. Use License</h2>
          <p>
            Permission is granted to use our QR code generators for both personal and commercial purposes. This includes, but is not limited to:
          </p>
          <ul className="list-disc pl-5 mt-4">
            <li>Creating codes for business cards, menus, or flyers.</li>
            <li>Using generated codes in marketing campaigns.</li>
            <li>Printing codes on physical products.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">3. Disclaimer</h2>
          <p>
            The materials on QR Studio&apos;s website are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, 
            and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, 
            fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">4. Limitations</h2>
          <p>
            In no event shall QR Studio or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, 
            or due to business interruption) arising out of the use or inability to use the materials on our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">5. Governing Law</h2>
          <p>
            Any claim relating to QR Studio&apos;s website shall be governed by the laws of the operating jurisdiction without regard to its conflict of law provisions.
          </p>
        </section>
      </div>
    </div>
  );
}
