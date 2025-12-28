
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl font-sans">
      <h1 className="text-4xl font-extrabold text-text-primary mb-8">About QR Studio</h1>
      
      <div className="prose prose-indigo max-w-none space-y-8 text-text-secondary leading-relaxed text-lg">
        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-6">Redefining QR Code Generation</h2>
          <p>
            Welcome to <strong>QR Studio</strong> (qr-generator.cc), a dedicated online tool service designed to simplify the way you interact with and create QR codes. In a digital world where connectivity is key, QR codes serve as the bridge between physical and digital spaces. However, we noticed a gap in the market: most tools either require unnecessary signups, charge for &quot;premium&quot; features like high-resolution downloads, or—most concerningly—track your data.
          </p>
          <p>
            We built QR Studio to be different. Our platform is a lightweight, high-performance web application designed for one purpose: to allow anyone to generate professional-grade QR codes instantly, for free, and with absolute privacy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">Our Commitment to Your Privacy</h2>
          <p>
            The cornerstone of our philosophy is <strong>Privacy by Design</strong>. While other generators upload your sensitive information (like WiFi passwords or private URLs) to their servers before rendering a code, QR Studio performs the entire generation process locally within your own browser. 
          </p>
          <p>
            Using modern client-side JavaScript libraries, your data never leaves your device. This architecture not only makes the process incredibly fast but also ensures that your private data remains just that—private. We don&apos;t need to see what you&apos;re generating, and we certainly don&apos;t want to store it.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 my-12">
          <div className="bg-background-secondary p-6 rounded-2xl border border-border-custom">
            <h3 className="text-xl font-bold text-text-primary mb-3">Instant Access</h3>
            <p className="text-base font-normal">No accounts, no email verification, and no wait times. Bookmark the tool and use it whenever you need it, instantly.</p>
          </div>
          <div className="bg-background-secondary p-6 rounded-2xl border border-border-custom">
            <h3 className="text-xl font-bold text-text-primary mb-3">100% Free Forever</h3>
            <p className="text-base font-normal">We do not believe in paywalls for essential utilities. High-resolution PNG and SVG downloads are available to everyone without cost.</p>
          </div>
          <div className="bg-background-secondary p-6 rounded-2xl border border-border-custom">
            <h3 className="text-xl font-bold text-text-primary mb-3">Static & Permanent</h3>
            <p className="text-base font-normal">All codes generated here are static, meaning they will never expire and don&apos;t rely on our servers to redirect users.</p>
          </div>
          <div className="bg-background-secondary p-6 rounded-2xl border border-border-custom">
            <h3 className="text-xl font-bold text-text-primary mb-3">Clean Aesthetics</h3>
            <p className="text-base font-normal">Our tools are built with a focus on user experience, featuring a professional UI tailored for both individual and business use.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">Why We Provide This for Free</h2>
          <p>
            Often, users ask: &quot;What&apos;s the catch?&quot; There isn&apos;t one. We believe the internet should be a collection of helpful, trustable utilities. By offering a high-quality free service, we aim to build a platform that users return to and share with others. 
          </p>
          <p>
            To keep the servers running and the coffee brewing, we may display modest advertisements via Google AdSense. This allows us to maintain the tool without charging our users or selling their data, keeping the service sustainable for the long term.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">Who Can Benefit from QR Studio?</h2>
          <p>
            Our tool suite is built to be versatile. <strong>Small business owners</strong> use it to create menus and business cards. <strong>Event organizers</strong> use it for seamless check-ins. <strong>Tech enthusiasts</strong> use it to share WiFi credentials without typing long passwords. Whether you&apos;re a student, a marketer, or a developer, QR Studio provides the reliability you need.
          </p>
        </section>

        <section className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
          <h2 className="text-2xl font-bold text-primary mb-4">The Values We Stand By</h2>
          <p>
            We are committed to continuous improvement. As the web evolves, so will QR Studio. We are constantly refining our algorithms and expanding our feature set based on user feedback. Our goal is to remain the most trusted name in free, private QR code generation.
          </p>
        </section>

        <section>
          <p className="text-center font-medium">
            Thank you for trusting QR Studio with your digital connectivity needs. 
          </p>
        </section>
      </div>
    </div>
  );
}
