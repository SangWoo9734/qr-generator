
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About QR Studio - Our Story & Philosophy',
  description: 'Learn about QR Studio\'s mission to provide professional-grade QR code tools while championing user privacy and technical excellence.',
  alternates: {
    canonical: '/about',
    languages: {
      'en-US': '/en-US/about',
      'es-ES': '/es-ES/about',
      'ja-JP': '/ja-JP/about',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl font-sans">
      <div className="space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full uppercase tracking-wider mb-4">
            Our Story & Philosophy
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-text-primary tracking-tight">
            Redefining <span className="text-primary">QR Code Generation</span>
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Welcome to <strong>QR Studio</strong> (qr-generator.cc), a dedicated utility designed to simplify digital connectivity while championing user privacy and technical excellence.
          </p>
        </section>

        {/* Mission & Privacy Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start border-t border-border-custom pt-20">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">Our Mission</h2>
            <p className="text-text-secondary leading-relaxed text-lg">
              QR Studio was born out of a simple observation: most QR tools either require unnecessary signups, charge for essential features like high-resolution downloads, or track your data for marketing. 
            </p>
            <p className="text-text-secondary leading-relaxed text-lg">
              We built this platform to be different. Our mission is to provide <strong>professional-grade marketing tools</strong> to everyone—from students and educators to small business owners—without the "data tax" or paywalls usually associated with free services.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">Privacy by Design</h2>
            <p className="text-text-secondary leading-relaxed text-lg">
              The cornerstone of our philosophy is <strong>Local-First Processing</strong>. While other generators upload your sensitive information (like WiFi passwords or private URLs) to their servers, QR Studio performs the entire generation process locally.
            </p>
            <p className="text-text-secondary leading-relaxed text-lg">
              Using modern client-side JavaScript, your data never leaves your device. This architecture ensures that your private data remains just that—private. We don't need to see what you're generating, and we certainly don't want to store it.
            </p>
          </section>
        </div>

        {/* Core Values Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Instant Access', desc: 'No accounts, no email verification, and no wait times. Generate codes in seconds.' },
            { title: '100% Free Forever', desc: 'High-resolution PNG and SVG downloads are available to everyone without any cost.' },
            { title: 'Static & Permanent', desc: 'All codes are static; they never expire and don\'t rely on our servers to function.' },
            { title: 'Commercial Ready', desc: 'Tailored for business use, from restaurant menus to global marketing campaigns.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-border-custom shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-text-primary mb-3">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Technology Section */}
        <section className="bg-white p-10 md:p-16 rounded-[2.5rem] border border-border-custom shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-text-primary">The Technology Behind the Studio</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">We leverage world-class standards and modern web technologies to deliver a premium user experience.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-xl font-bold">01</div>
                <h4 className="font-bold text-text-primary">High-Fidelity Rendering</h4>
                <p className="text-sm text-text-secondary leading-relaxed">Our engine uses advanced SVG vector rendering to ensure every QR code is mathematically perfect and sharp at any scale.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-xl font-bold">02</div>
                <h4 className="font-bold text-text-primary">ISO Efficiency</h4>
                <p className="text-sm text-text-secondary leading-relaxed">We strictly follow ISO/IEC 18004:2015 standards, ensuring 100% compatibility with every smartphone and scanner worldwide.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-xl font-bold">03</div>
                <h4 className="font-bold text-text-primary">Reed-Solomon Correction</h4>
                <p className="text-sm text-text-secondary leading-relaxed">Built-in error correction allows our codes to remain scannable even if up to 30% of the area is damaged or obscured.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="text-center space-y-8 bg-primary/5 p-12 md:p-20 rounded-[2.5rem] border border-primary/10">
          <h2 className="text-3xl font-bold text-text-primary">How We Remain Sustainable</h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
            To keep QR Studio free and independent, we display modest advertisements. This model allows us to maintain the tool without charging our users or selling their data, keeping the service sustainable for the long term.
          </p>
          <div className="pt-6">
            <a href="/" className="inline-flex items-center justify-center px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20">
              Start Creating Now
            </a>
          </div>
        </section>

        <section className="text-center pt-10">
          <p className="text-text-secondary font-medium">
            Thank you for choosing <strong>QR Studio</strong> for your digital connectivity needs. 
          </p>
        </section>
      </div>
    </div>
  );
}
