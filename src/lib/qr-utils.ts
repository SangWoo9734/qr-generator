import QRCode from 'qrcode';

export interface QRCodeOptions {
  width?: number;
  margin?: number;
  color?: {
    dark?: string;
    light?: string;
  };
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
}

export const generateQRCodeDataURL = async (
  text: string,
  options: QRCodeOptions = {}
): Promise<string> => {
  try {
    return await QRCode.toDataURL(text, {
      width: options.width || 512,
      margin: options.margin || 4,
      color: options.color || { dark: '#000000', light: '#ffffff' },
      errorCorrectionLevel: options.errorCorrectionLevel || 'M',
    });
  } catch (err) {
    console.error('Error generating QR code data URL:', err);
    throw err;
  }
};

export const generateQRCodeSVG = async (
  text: string,
  options: QRCodeOptions = {}
): Promise<string> => {
  try {
    return await QRCode.toString(text, {
      type: 'svg',
      width: options.width || 512,
      margin: options.margin || 4,
      color: options.color || { dark: '#000000', light: '#ffffff' },
      errorCorrectionLevel: options.errorCorrectionLevel || 'M',
    });
  } catch (err) {
    console.error('Error generating QR code SVG:', err);
    throw err;
  }
};
