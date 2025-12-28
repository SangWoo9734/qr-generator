import { EmailIcon, PhoneIcon, RocketIcon, TextIcon, UrlIcon, WifiIcon } from '@/components/ui/Icons';
import Link from 'next/link';

const tools = [
  {
    name: 'URL QR Code',
    description: 'Convert any website link into a scannable QR code.',
    path: '/url',
    icon: <UrlIcon className="w-8 h-8" />,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    name: 'WiFi QR Code',
    description: 'Share your WiFi network details without typing passwords.',
    path: '/wifi',
    icon: <WifiIcon className="w-8 h-8" />,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    name: 'Text QR Code',
    description: 'Create a QR code for plain text messages and notes.',
    path: '/text',
    icon: <TextIcon className="w-8 h-8" />,
    color: 'bg-violet-50 text-violet-600',
  },
  {
    name: 'Email QR Code',
    description: 'Pre-fill email recipient and subject for quick contact.',
    path: '/email',
    icon: <EmailIcon className="w-8 h-8" />,
    color: 'bg-fuchsia-50 text-fuchsia-600',
  },
  {
    name: 'Phone QR Code',
    description: 'Generate a QR code that opens the dialer with your number.',
    path: '/phone',
    icon: <PhoneIcon className="w-8 h-8" />,
    color: 'bg-sky-50 text-sky-600',
  },
];

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

      {/* Ad Placeholder - Home Bottom */}
      <div className="container mx-auto px-4 mb-20">
        <div className="w-full h-32 bg-white border border-dashed border-border-custom rounded-2xl flex items-center justify-center text-text-secondary text-xs uppercase tracking-widest">
          Advertisement
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-white py-20 border-t border-border-custom">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 bg-primary-light text-primary rounded-full flex items-center justify-center text-xl font-bold">1</div>
              <h4 className="text-xl font-bold text-text-primary">Always Free</h4>
              <p className="text-text-secondary text-sm">No hidden costs, no subscriptions, and zero watermarks on your generated codes.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 bg-primary-light text-primary rounded-full flex items-center justify-center text-xl font-bold">2</div>
              <h4 className="text-xl font-bold text-text-primary">100% Private</h4>
              <p className="text-text-secondary text-sm">Your data never leaves your browser. QR codes are generated locally for maximum security.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 bg-primary-light text-primary rounded-full flex items-center justify-center text-xl font-bold">3</div>
              <h4 className="text-xl font-bold text-text-primary">Commercial Use</h4>
              <p className="text-text-secondary text-sm">Generate QR codes for your business, menu, or marketing materials without any restrictions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
