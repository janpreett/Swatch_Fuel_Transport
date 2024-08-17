/* src/components/PrivacyPolicy.js */
import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = ({ onClose }) => {
  return (
    <div className="privacy-policy">
      <div className="privacy-policy__content">
        <h2>Privacy Policy for Swatch Fuel Transport</h2>
        <p><strong>Effective Date:</strong> August 17, 2024</p>

        <h3>1. Introduction</h3>
        <p>Welcome to Swatch Fuel Transport Inc. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including our website and mobile applications.</p>

        <h3>2. Information We Collect</h3>
        <p>When you use our services, we may collect personal information that you provide directly, including:</p>
        <ul>
          <li><strong>Contact Information:</strong> Your name, phone number, email address, and mailing address.</li>
        </ul>

        <h4>2.2 Usage Information</h4>
        <p>We may automatically collect information about your interaction with our services, such as:</p>
        <ul>
          <li><strong>Log Data:</strong> IP address, browser type, operating system, and usage statistics.</li>
          <li><strong>Device Information:</strong> Device type, unique device identifiers, and device settings.</li>
          <li><strong>Location Information:</strong> Geographic location derived from your device or IP address.</li>
        </ul>

        <h4>2.3 Cookies and Tracking Technologies</h4>
        <p>We use cookies and similar technologies to enhance your user experience. Cookies help us remember your preferences and analyze how you use our services.</p>

        <h3>3. How We Use Your Information</h3>
        <p>We use your information for the following purposes:</p>
        <ul>
          <li><strong>Service Delivery:</strong> To process your orders, manage your account, and provide fuel transport services.</li>
          <li><strong>Customer Support:</strong> To respond to inquiries, address concerns, and provide assistance.</li>
          <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect against fraud or misuse.</li>
        </ul>

        <h3>4. How We Share Your Information</h3>
        <p>We may share your information with:</p>
        <ul>
          <li><strong>Legal Requirements:</strong> Authorities or regulators when required to comply with legal obligations or respond to legal requests.</li>
        </ul>

        <h3>5. Data Security</h3>
        <p>We implement reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. While we strive to protect your data, no method of transmission over the internet or electronic storage is completely secure.</p>

        <h3>6. Your Rights and Choices</h3>
        <p>Depending on your jurisdiction, you may have rights regarding your personal information, including:</p>
        <ul>
          <li><strong>Access and Correction:</strong> The right to access, correct, or update your personal information.</li>
          <li><strong>Deletion:</strong> The right to request the deletion of your personal information, subject to certain exceptions.</li>
          <li><strong>Opt-Out:</strong> The right to opt-out of receiving marketing communications from us.</li>
          <li><strong>Consent Withdrawal:</strong> The right to withdraw consent for processing based on consent.</li>
        </ul>
        <p>To exercise your rights, please contact us using the contact information below.</p>

        <h3>7. Changes to This Privacy Policy</h3>
        <p>We may update this Privacy Policy periodically. We will notify you of significant changes by posting the updated policy on our website or through other appropriate means.</p>

        <h3>8. Contact Us</h3>
        <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
        <address>
          Swatch Fuel Transport Inc.<br />
          Phone: +1(609)-444-8223, +1(609)-853-0234<br />
          Email: swatchfueltransport@yahoo.com
        </address>
        <p>Thank you for choosing Swatch Fuel Transport Inc. We are committed to safeguarding your privacy.</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
export default PrivacyPolicy;