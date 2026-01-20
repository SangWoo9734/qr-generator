
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - QR Studio Support',
  description: 'Have questions or feedback about our QR code tools? Reach out to the QR Studio team. We\'re here to help.',
  alternates: {
    canonical: '/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl font-sans">
      <h1 className="text-4xl font-extrabold text-text-primary mb-8">Contact Us</h1>
      
      <div className="prose prose-indigo max-w-none space-y-8 text-text-secondary leading-relaxed">
        <section>
          <p>
            Welcome to <strong>QR Studio</strong> (qr-generator.cc). We are committed to providing a seamless and high-quality experience for all your QR code generation needs. Your feedback, questions, and suggestions are vital to our continuous improvement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">How Can We Help You?</h2>
          <p>
            Whether you have a question about our tools, a suggestion for a new feature, a bug report, or simply want to share your success story using our QR codes, we are here to listen. Our primary goal is to ensure that our tools remain free, private, and efficient for users worldwide.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Support:</strong> If you're experiencing technical difficulties or have questions about how to use our generators.</li>
            <li><strong>Feedback:</strong> We love hearing how you use our QR codes and what we can do to make the service better.</li>
            <li><strong>Bug Reports:</strong> Help us maintain a stable service by letting us know if something isn't working as expected.</li>
            <li><strong>Collaboration:</strong> For any business inquiries or collaboration proposals.</li>
          </ul>
        </section>

        <section className="bg-primary-light p-8 rounded-2xl border border-primary/10">
          <h3 className="text-xl font-bold text-primary mb-2">Email Us</h3>
          <p className="mb-4">
            The best way to reach us is via email. We aim to review all messages and provide a thoughtful response as quickly as possible.
          </p>
          <a 
            href="mailto:contact@qr-generator.cc" 
            className="text-2xl font-bold text-primary hover:underline block mb-2"
          >
            contact@qr-generator.cc
          </a>
          <p className="text-sm">
            Please note: While we strive to respond to every inquiry, response times may vary depending on the volume of messages. We do not respond to spam, solicitation, or unrelated marketing emails.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">Privacy Note</h2>
          <p>
            When you contact us, the information you provide is used solely to respond to your inquiry. We do not use your contact information for marketing purposes, nor do we share it with third parties.
          </p>
        </section>
      </div>
    </div>
  );
}
