import { AdUnit } from '@/components/ui/AdUnit';
import { RocketIcon } from '@/components/ui/Icons';
import { tools } from '@/config/tools';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-background-secondary min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-border-custom overflow-hidden relative">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary-light px-4 py-1.5 rounded-full text-primary text-sm font-semibold mb-2">
              <RocketIcon size={16} />
              <span>100% Free & No Signup Required</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary tracking-tight">
              Create Professional <br />
              <span className="text-primary">QR Codes Instantly</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              The ultimate all-in-one suite for generating high-quality QR codes. 
              Secure, private, and codes that never expire.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/url"
                className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20"
              >
                Create URL QR Code
              </Link>
              <Link
                href="/wifi"
                className="bg-white text-text-primary border border-border-custom px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-background-secondary transition-all transform hover:-translate-y-1"
              >
                Setup WiFi QR
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Choose Your Tool</h2>
          <p className="text-text-secondary">Select from our variety of specialized QR code generators.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.path}
              className="group bg-white p-8 rounded-2xl border border-border-custom hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/5 transform hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 ${tool.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{tool.name}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {tool.description}
              </p>
              <span className="text-primary font-semibold text-sm inline-flex items-center group-hover:translate-x-1 transition-transform">
                Get Started 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Ad Placement - Home Bottom */}
      <div className="container mx-auto px-4 mb-20 text-center">
        <span className="text-[10px] text-text-secondary/50 uppercase tracking-widest mb-2 block">Advertisement</span>
        <div className="flex justify-center">
          <AdUnit slot="2229817675" />
        </div>
      </div>

      {/* How It Works Section */}
      <section className="bg-white py-24 border-t border-border-custom">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">How QR Studio Works</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-2">Select Your Input Type</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">Choose from URLs, WiFi networks, plain text, emails, or phone numbers. Our specialized forms ensure the resulting data structure is optimized for universal scanning.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-2">Local Browser Generation</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">Unlike other tools, we don't send your sensitive data (like WiFi passwords) to a server. Your browser's memory handles the entire mathematical calculation of the QR pattern.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-2">ISO Standard Verification</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">Every code is generated according to ISO/IEC 18004 standards. We test the internal structure to ensure it works across all devices, from legacy scanners to the latest iPhones.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-2">Flexible Export Options</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">Download your code as a high-resolution PNG for digital use or a vector-based SVG for high-end professional printing and large-scale marketing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Foundation Section (E-E-A-T) */}
      <section className="bg-background-secondary py-24 border-t border-border-custom">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-lg uppercase tracking-wider">Technical Foundation</div>
              <h2 className="text-3xl font-bold text-text-primary">Engineered for Performance and Privacy</h2>
              <p className="text-text-secondary leading-relaxed">
                QR Studio isn't just another website; it's a high-performance, client-side application. We leverage <strong>Advanced Javascript Algorithms</strong> and <strong>SVG Vector Rendering</strong> to ensure your QR codes are crisp at any resolution.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-xl border border-border-custom">
                  <span className="text-primary font-bold block mb-1">Privacy-First</span>
                  <span className="text-xs text-text-secondary leading-tight">No passwords or links ever touch our server database.</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-border-custom">
                  <span className="text-primary font-bold block mb-1">Infinite Scaling</span>
                  <span className="text-xs text-text-secondary leading-tight">SVG export ensures zero pixelation for billboards.</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white p-8 rounded-3xl border border-border-custom shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/[0.02] transform group-hover:scale-110 transition-transform duration-500"></div>
              <h4 className="font-bold text-text-primary mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                The Gold Standard of QR Technology
              </h4>
              <ul className="space-y-4">
                {[
                  'ISO/IEC 18004 Compliance',
                  'Reed-Solomon Error Correction',
                  'Optimized Data Masking Algorithms',
                  'Client-Side Rendering Engine',
                  'Low-Latency SVG Generation'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24 border-t border-border-custom">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-2xl font-bold">1</div>
              <h4 className="text-xl font-bold text-text-primary">Always Free</h4>
              <p className="text-text-secondary text-sm leading-relaxed">We aim to democratize access to digital tools. No hidden costs, no recurring subscriptions, and absolute zero watermarks on your generated codes.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-2xl font-bold">2</div>
              <h4 className="text-xl font-bold text-text-primary">Privacy by Design</h4>
              <p className="text-text-secondary text-sm leading-relaxed">Our architecture is built on the principle of transparency. Your data never leaves your browser, ensuring your WiFi passwords and personal details stay secure.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-2xl font-bold">3</div>
              <h4 className="text-xl font-bold text-text-primary">Business Ready</h4>
              <p className="text-text-secondary text-sm leading-relaxed">Whether you are a restaurant owner needing menus or a corporation doing global marketing, our codes are stable, permanent, and perfectly professional.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            'name': 'QR Studio',
            'url': 'https://qr-generator.cc',
            'description': 'Free, private, and professional QR code generator. Generate WiFi, URL, Text, Email, and Phone QR codes locally in your browser.'
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'QR Studio',
            'url': 'https://qr-generator.cc',
            'logo': 'https://qr-generator.cc/rocket.png'
          })
        }}
      />
    </div>
  );
}
