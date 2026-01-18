export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  name: string;
  questions: FAQItem[];
}

export const generalFAQ: FAQCategory[] = [
  {
    name: 'Getting Started',
    questions: [
      {
        id: 'how-to-create',
        question: 'How do I create a QR code?',
        answer: 'Creating a professional-grade QR code with QR Studio is a seamless process designed for speed and privacy. First, select your desired tool (URL, WiFi, Text, etc.) from our navigation menu. Enter the required information into the secure form. Our system processes this data locally in your browser—nothing is sent to our servers. Once ready, click "Generate QR Code" to see your preview. You can then download your finished code as a high-resolution PNG for digital platforms or a scalable SVG (vector) for professional printing and large-scale marketing materials.'
      },
      {
        id: 'how-to-download',
        question: 'How do I download a QR code?',
        answer: 'After your QR code is generated, the preview section will display download buttons for PNG and SVG formats. PNG is a raster format ideal for web use, social media, and presentations. SVG is a vector format that is essential for high-quality printing, as it can be scaled infinitely without losing sharpness. Simply select your preferred format, and the file will be saved directly to your downloads folder. At QR Studio, we provide these high-resolution files for free, without watermarks or forced registrations.'
      },
      {
        id: 'png-vs-svg',
        question: 'What\'s the difference between PNG and SVG for QR codes?',
        answer: 'PNG (Portable Network Graphics) is a pixel-based format. It\'s great for digital use because it supports transparency and is widely compatible. However, if you enlarge a PNG too much, it becomes blurry or pixelated. SVG (Scalable Vector Graphics) is math-based. It describes the QR code as a series of points and lines. This means you can scale an SVG to the size of a mountain, and it will remain pin-sharp. We always recommend SVG for any physical printing—from business cards to outdoor billboards.'
      },
      {
        id: 'mobile-creation',
        question: 'Can I generate QR codes on my smartphone?',
        answer: 'Absolutely. QR Studio is built using a mobile-first responsive design. You can access all our tools directly through your mobile browser (Safari, Chrome, etc.) on both iOS and Android. The generation happens on your device just as it does on a desktop, ensuring that you can create, customize, and download secure QR codes on the go for events or impromptu meetings.'
      },
      {
        id: 'how-to-scan',
        question: 'How do I scan a QR code?',
        answer: 'Modern smartphone operating systems (iOS 11+ and Android 9+) have native QR scanning built directly into their standard camera apps. Just open your camera and point it at the QR code. You will see a small banner or notification pop up—tap it to open the link or see the data. If you have an older device, you can download specialized QR reader apps from the App Store or Google Play Store. For maximum security, always preview the link before clicking if your scanner allows it.'
      },
      {
        id: 'qr-size',
        question: 'What is the recommended size for a QR code?',
        answer: 'Size matters for scan reliability. For close-up items like business cards, a minimum size of 2x2 cm (approximately 0.8x0.8 inches) is recommended. For marketing materials like flyers, 3x3 cm is better. A professional rule of thumb is a 10:1 ratio: if the scanning distance is 1 meter, the QR code should be at least 10 cm wide. Always remember to leave a white border (the "quiet zone") around the code so the lens can distinguish it from the background.'
      }
    ]
  },
  {
    name: 'Technical & Standards',
    questions: [
      {
        id: 'do-qr-expire',
        question: 'Do the generated QR codes expire?',
        answer: 'No. QR Studio generates "static" QR codes. Unlike "dynamic" codes offered by some subscription services, our codes encode your data directly into the pixel pattern. This means they are permanent and will never expire. They do not rely on our servers to work. As long as the information you encoded (like a URL) remains active, the QR code will work for years to come. This makes them a reliable, maintenance-free solution for printed physical assets.'
      },
      {
        id: 'error-correction',
        question: 'What is QR code error correction?',
        answer: 'Error correction is a brilliant built-in feature of the ISO/IEC 18004 standard. It uses Reed-Solomon mathematical algorithms to add redundant data to the code. This allows the QR code to be scanned correctly even if it\'s up to 30% damaged, dirty, or obscured. Higher error correction levels make the pattern denser but provide more "room for error." QR Studio uses an optimized level that ensures a high success rate while maintaining a clean, professional appearance.'
      },
      {
        id: 'data-capacity',
        question: 'How much data can a single QR code hold?',
        answer: 'The theoretical maximum capacity for a version 40 QR code is 4,296 alphanumeric characters or 2,953 bytes. However, more data means a more complex and "dense" pattern. Dense patterns are harder for older phones to scan, especially in low light. For the best user experience, we recommend keeping your content as concise as possible. If you need to encode a very long URL, consider using a URL shortener first.'
      },
      {
        id: 'offline-work',
        question: 'Do QR codes require an internet connection to work?',
        answer: 'The scan itself does not require internet—the decoding happens entirely on the phone. Whether the content *after* scanning needs internet depends on the type. Text, WiFi credentials, and contact info (vCard) work entirely offline. URL QR codes obviously need a data connection to load the website they point to. This makes QR codes excellent for bridging offline environments (like hiking trails or industrial warehouses) with digital information.'
      },
      {
        id: 'universal-standard',
        question: 'Are these QR codes compatible worldwide?',
        answer: 'Yes. We strictly adhere to the international ISO/IEC 18004:2015 standard. This is a global specification used by every scanner and smartphone manufacturer on the planet. A QR code you generate here in Tokyo will scan perfectly in New York or London. This universal compatibility is what makes QR codes one of the most powerful tools for global marketing and information logistics.'
      }
    ]
  },
  {
    name: 'Advanced QR Techniques',
    questions: [
      {
        id: 'static-vs-dynamic',
        question: 'What is the difference between static and dynamic QR codes?',
        answer: 'Static QR codes (like the ones we generate) encode the data directly into the pattern. They are free, permanent, and can\'t be changed. Dynamic QR codes encode a "short link" that redirects to your actual content. Dynamic codes allow you to change the destination URL without reprinting the code and provide scan tracking. While dynamic codes offer more features, they often require a monthly subscription. Static codes are the best choice for privacy and long-term reliability without recurring costs.'
      },
      {
        id: 'design-impact',
        question: 'How does design affect QR code scan rates?',
        answer: 'Design plays a massive role in user engagement. A QR code that fits your brand\'s color palette can see up to 30% more scans than a generic black-and-white one. However, readability is paramount. Always maintain high contrast (dark foreground on light background) and avoid overlaying complex patterns or low-transparency images behind the code, as this can confuse the scanning sensor.'
      },
      {
        id: 'vcard-details',
        question: 'Can I share my entire contact card via QR?',
        answer: 'Yes, using the vCard (VCF) format. You can encode your name, phone numbers, email, company, and physical address. When someone scans a vCard QR code, their phone immediately asks if they want to "Create New Contact," automatically filling in all the fields. It\'s the ultimate 21st-century business card upgrade, ensuring you never end up in a desk drawer or the recycling bin.'
      },
      {
        id: 'low-light-scanning',
        question: 'What makes a QR code scan-friendly in low light?',
        answer: 'The scanning sensor needs to clearly identify the three large "finder patterns" (the squares in the corners). To improve low-light performance: 1. Use larger modules (fewer characters of data). 2. Use a high-contrast black-on-white scheme. 3. Ensure the physical material isn\'t too glossy, as glare from the phone\'s flash can wash out the pattern. QR Studio\'s clean generation algorithm is optimized for high readability across varying environmental conditions.'
      }
    ]
  },
  {
    name: 'Privacy & Security',
    questions: [
      {
        id: 'is-it-free',
        question: 'Is QR Studio really free for commercial use?',
        answer: 'Yes. We are committed to keeping QR Studio 100% free for everyone—from students to multinational corporations. We don\'t charge for high-resolution files, we don\'t limit the number of codes you can create, and we never add watermarks. Our service is supported by modest advertisements, allowing us to provide premium tools to the public without a paywall.'
      },
      {
        id: 'data-storage-privacy',
        question: 'How do you handle my private data?',
        answer: 'We don\'t. Unlike many other generators that upload your data to a server to render the image, QR Studio uses client-side JavaScript. Everything happens transitionally in your own browser\'s memory. When you type a WiFi password or a personal message, that data never touches our server disks or logs. This architectural choice makes us one of the most secure and private QR tools available on the web today.'
      },
      {
        id: 'malicious-qr-risks',
        question: 'Should I be worried about malicious QR codes?',
        answer: 'A QR code itself is just data; it can\'t "hack" your phone. However, it can link to a website that tries to trick you. This is known as "attagging." Always scan codes from trusted sources. When you use QR Studio, you are in control—we don\'t inject any hidden trackers or unauthorized redirects into your codes. The code you create is exactly the data you provided and nothing more.'
      },
      {
        id: 'signup-requirement',
        question: 'Why don\'t you require an account?',
        answer: 'We believe that utility tools should be as frictionless as possible. Requiring an account often serves the purpose of data collection for marketing. By removing the signup process, we ensure your anonymity and respect your time. You can come to our site, get what you need, and leave—no strings attached, no spam emails, and no database entries for your personal information.'
      }
    ]
  },
  {
    name: 'Business Use',
    questions: [
      {
        id: 'commercial-use',
        question: 'Can I use QR codes for my business?',
        answer: 'Absolutely! QR codes are an incredibly versatile tool for businesses of all sizes. You can use them on business cards to share contact info, on restaurant menus for contactless ordering, on product packaging for manuals, or on marketing posters to drive traffic to your website. Because our codes are free and high-resolution, they are perfect for professional use in any industry.'
      },
      {
        id: 'marketing-benefits',
        question: 'Are QR codes good for marketing?',
        answer: 'Yes, QR codes are a powerful bridge between physical and digital marketing. They allow you to track engagement from offline materials like flyers and billboards by using UTM parameters in your URLs. They provide a "frictionless" way for customers to interact with your brand—instead of typing a long URL, they can simply scan and arrive at your landing page in seconds.'
      },
      {
        id: 'business-cards',
        question: 'Can I use QR codes on business cards?',
        answer: 'Yes, using a QR code on a business card is a modern and efficient way to share your contact details. You can create a URL QR code that points to your LinkedIn profile or portfolio, or a vCard QR code that allows people to save your contact information directly to their phone\'s address book with a single scan. It saves space on your card and makes it easier for people to reach you.'
      }
    ]
  },
  {
    name: 'Troubleshooting',
    questions: [
      {
        id: 'wont-scan',
        question: 'Why won\'t my QR code scan?',
        answer: 'There are a few common reasons why a QR code might not scan. First, check the contrast; a dark code on a light background is easiest to read. Second, ensure the code isn\'t too small for the scanning distance. Third, check for blurriness or low resolution—using our SVG format for printing prevents this. Finally, make sure there is enough empty space (the "quiet zone") around the code so the scanner can identify it.'
      },
      {
        id: 'blurry-qr',
        question: 'My QR code is blurry, what should I do?',
        answer: 'If your QR code looks blurry, it\'s likely because you are using a low-resolution raster image (like a small PNG) and trying to scale it up. To fix this, always download the SVG version of your QR code for printing or large-scale use. SVG files are vector-based and will remain perfectly sharp at any size. If you are using it for a website, ensure you download a PNG at a size that matches or exceeds its display dimensions.'
      },
      {
        id: 'download-issue',
        question: 'Why is the download button not working?',
        answer: 'If the download button isn\'t responding, try refreshing the page and generating the code again. Ensure that you have a stable internet connection and that your browser is up to date. Occasionally, browser extensions or ad-blockers can interfere with the download process; try disabling them temporarily or using an incognito/private window to see if that resolves the issue.'
      }
    ]
  }
];
