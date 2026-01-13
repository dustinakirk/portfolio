import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import './PeakActiveLegal.css';

export default function PeakActivePrivacy() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.title = 'Privacy Policy - Peak Active';

    return () => {
      document.title = 'Dustin Kirk - Principal Product Designer';
    };
  }, []);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const rootClass = `legal-page${isDark ? ' legal-page--dark' : ''}`;

  return (
    <div className={rootClass}>
      <div className="legal-page__body">
        <header className="legal-header">
          <Link to="/peakactive" className="legal-header__back">
            <ChevronLeft className="legal-header__back-icon" />
            Back to Peak Active
          </Link>
          <p className="legal-header__brand">Peak Active</p>
          <h1 className="legal-header__title">Privacy Policy</h1>
        </header>

        <main className="legal-content">
          <p className="legal-content__updated">Last Updated: January 2025</p>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">1. Introduction</h2>
            <p className="legal-content__text">
              Peak Active ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use the Peak Active application ("App").
            </p>
            <p className="legal-content__text">
              <span className="legal-content__emphasis">Our core privacy principle: Your health and fitness data stays on your device.</span> We designed Peak Active with privacy at its foundation. All data processing happens locally on your iPhone, and we do not collect, transmit, or store your personal health information on any external servers.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">2. Information We Access</h2>
            <p className="legal-content__text">
              The App accesses the following types of data through Apple HealthKit to provide its functionality:
            </p>
            <ul className="legal-content__list">
              <li><span className="legal-content__emphasis">Step Count:</span> The number of steps recorded by your device</li>
              <li><span className="legal-content__emphasis">Walking/Running Distance:</span> Distance traveled during walking and running activities</li>
              <li><span className="legal-content__emphasis">Active Energy Burned:</span> Calories burned during physical activity</li>
              <li><span className="legal-content__emphasis">Flights Climbed:</span> The number of floors climbed</li>
              <li><span className="legal-content__emphasis">Workout Data:</span> Information about detected walking and running activities</li>
            </ul>
            <p className="legal-content__text">
              This data is accessed with your explicit permission and is used solely to display your activity information within the App.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">3. Information We Do NOT Collect</h2>
            <p className="legal-content__text">
              Peak Active is designed with a privacy-first approach. We do not collect or have access to:
            </p>
            <ul className="legal-content__list">
              <li>Your name, email address, or personal identification information</li>
              <li>Your location or GPS data</li>
              <li>Your health or fitness data from HealthKit</li>
              <li>Your device identifiers or advertising IDs</li>
              <li>Your contacts, photos, or other personal files</li>
              <li>Usage analytics or behavioral tracking data</li>
            </ul>
            <p className="legal-content__text">
              <span className="legal-content__emphasis">We have no servers that receive your data.</span> The App operates entirely offline after installation.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">4. How We Use Your Information</h2>
            <p className="legal-content__text">
              All data processing occurs locally on your device for the following purposes:
            </p>
            <ul className="legal-content__list">
              <li>Detecting and displaying walking and running activities</li>
              <li>Calculating and showing activity statistics (steps, distance, calories, duration)</li>
              <li>Presenting historical activity data and trends</li>
              <li>Providing real-time activity tracking during walks</li>
            </ul>
            <p className="legal-content__text">
              Your HealthKit data never leaves your device. It is read from HealthKit, processed by the App, and displayed to you—all within your iPhone's secure environment.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">5. Data Storage and Security</h2>
            <p className="legal-content__text">
              <span className="legal-content__emphasis">Local Storage Only:</span> All activity data displayed in the App is stored locally on your device using Apple's secure storage mechanisms. We do not maintain any external databases or cloud storage for user data.
            </p>
            <p className="legal-content__text">
              <span className="legal-content__emphasis">Apple's Security:</span> Your HealthKit data is protected by Apple's security frameworks, including device encryption and the iOS security architecture. Access to HealthKit data requires your explicit permission and can be revoked at any time.
            </p>
            <p className="legal-content__text">
              <span className="legal-content__emphasis">Data Retention:</span> The App accesses your HealthKit data in real-time. Any cached data for display purposes is stored locally and remains under your control. Deleting the App removes all locally stored data.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">6. Apple HealthKit</h2>
            <p className="legal-content__text">
              Peak Active integrates with Apple HealthKit in compliance with Apple's HealthKit guidelines:
            </p>
            <ul className="legal-content__list">
              <li>We only request access to health data categories necessary for the App's functionality</li>
              <li>HealthKit data is never used for advertising or marketing purposes</li>
              <li>HealthKit data is never sold, shared with third parties, or transferred outside your device</li>
              <li>You can manage HealthKit permissions at any time in your iPhone's Settings app under Privacy & Security → Health</li>
            </ul>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">7. Third-Party Services</h2>
            <p className="legal-content__text">
              Peak Active does not integrate with any third-party analytics, advertising, or data collection services. The App does not contain:
            </p>
            <ul className="legal-content__list">
              <li>Advertising networks or ad tracking</li>
              <li>Analytics SDKs or usage tracking</li>
              <li>Social media integrations</li>
              <li>Third-party data processors</li>
            </ul>
            <p className="legal-content__text">
              The only external integration is with Apple HealthKit, which operates under Apple's privacy policies and your device's permission settings.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">8. Children's Privacy</h2>
            <p className="legal-content__text">
              The App is not intended for children under the age of 13. We do not knowingly collect any information from children under 13. If you are a parent or guardian and believe your child has used the App, please contact us. Since the App does not collect any personal information, no data from any user, including children, is transmitted to us.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">9. Your Rights and Choices</h2>
            <p className="legal-content__text">
              You have complete control over your data:
            </p>
            <ul className="legal-content__list">
              <li><span className="legal-content__emphasis">Access:</span> View all your activity data directly in the App</li>
              <li><span className="legal-content__emphasis">Control:</span> Manage HealthKit permissions in iOS Settings at any time</li>
              <li><span className="legal-content__emphasis">Delete:</span> Remove all locally stored data by deleting the App</li>
              <li><span className="legal-content__emphasis">Revoke:</span> Withdraw HealthKit access without affecting your HealthKit data</li>
            </ul>
            <p className="legal-content__text">
              Since we do not collect or store your data externally, there is no data for us to provide, correct, or delete upon request—you already have full control.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">10. International Users</h2>
            <p className="legal-content__text">
              The App is available internationally through the App Store. Since all data processing occurs locally on your device and no data is transmitted to external servers, your data remains subject only to your device's local jurisdiction and Apple's privacy practices.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">11. Changes to This Privacy Policy</h2>
            <p className="legal-content__text">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically. Your continued use of the App after any changes constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">12. Contact Us</h2>
            <p className="legal-content__text">
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="legal-content__text">
              Email: <a href="mailto:dustin@dustinkirk.com" className="legal-content__link">dustin@dustinkirk.com</a>
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">13. Summary</h2>
            <p className="legal-content__text">
              Peak Active is built on a foundation of privacy:
            </p>
            <ul className="legal-content__list">
              <li>All data stays on your device</li>
              <li>No personal information is collected</li>
              <li>No data is transmitted to external servers</li>
              <li>No advertising or analytics tracking</li>
              <li>You have complete control over your data</li>
            </ul>
            <p className="legal-content__text">
              We believe your health data is personal and should remain private. Peak Active is designed to give you valuable insights into your walking activity without compromising your privacy.
            </p>
          </section>
        </main>

        <footer className="legal-footer">
          <p className="legal-footer__text">
            &copy; {new Date().getFullYear()} Peak Active. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
