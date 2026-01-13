import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import './PeakActiveLegal.css';

export default function PeakActiveTerms() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.title = 'Terms and Conditions - Peak Active';

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
          <h1 className="legal-header__title">Terms and Conditions</h1>
        </header>

        <main className="legal-content">
          <p className="legal-content__updated">Last Updated: January 2025</p>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">1. Acceptance of Terms</h2>
            <p className="legal-content__text">
              By downloading, installing, or using the Peak Active application ("App"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use the App.
            </p>
            <p className="legal-content__text">
              These Terms constitute a legally binding agreement between you and Peak Active ("we," "us," or "our") regarding your use of the App.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">2. Description of Service</h2>
            <p className="legal-content__text">
              Peak Active is a passive walk tracking application for iPhone that utilizes Apple HealthKit to automatically detect and record periods of intentional walking and running activity. The App provides users with activity statistics including steps, distance, calories burned, duration, and floors climbed without requiring manual start or stop actions.
            </p>
            <p className="legal-content__text">
              Key features of the App include:
            </p>
            <ul className="legal-content__list">
              <li>Automatic detection of walking and running activities</li>
              <li>Daily step counting and activity logs</li>
              <li>Historical activity data viewing</li>
              <li>Battery-efficient operation</li>
              <li>On-device data processing with no data transmission to external servers</li>
            </ul>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">3. Eligibility</h2>
            <p className="legal-content__text">
              You must be at least 13 years of age to use this App. By using the App, you represent and warrant that you are at least 13 years old and have the legal capacity to enter into these Terms. If you are under 18 years of age, you represent that you have your parent's or guardian's permission to use the App.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">4. Apple HealthKit Integration</h2>
            <p className="legal-content__text">
              The App integrates with Apple HealthKit to access and display your health and fitness data. By using the App, you acknowledge and agree that:
            </p>
            <ul className="legal-content__list">
              <li>You must grant the App permission to access HealthKit data for the App to function properly</li>
              <li>The App reads step count, distance, active energy burned, and floor count data from HealthKit</li>
              <li>All HealthKit data processing occurs entirely on your device</li>
              <li>We do not store, transmit, or have access to your HealthKit data</li>
              <li>You may revoke HealthKit permissions at any time through your device settings</li>
            </ul>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">5. Privacy and Data Collection</h2>
            <p className="legal-content__text">
              Your privacy is important to us. Our collection and use of information is governed by our{' '}
              <Link to="/peakactive/privacy" className="legal-content__link">Privacy Policy</Link>, which is incorporated into these Terms by reference. By using the App, you consent to our data practices as described in our Privacy Policy.
            </p>
            <p className="legal-content__text">
              <span className="legal-content__emphasis">Key privacy commitments:</span> All activity data is processed and stored locally on your device. We do not collect, transmit, or store any personal health data on external servers.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">6. User Responsibilities</h2>
            <p className="legal-content__text">
              When using the App, you agree to:
            </p>
            <ul className="legal-content__list">
              <li>Use the App only for lawful purposes and in accordance with these Terms</li>
              <li>Not attempt to reverse engineer, decompile, or disassemble the App</li>
              <li>Not use the App in any manner that could damage, disable, or impair the App</li>
              <li>Not attempt to gain unauthorized access to any portion of the App</li>
              <li>Ensure that your use of the App complies with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">7. Health Disclaimer</h2>
            <p className="legal-content__text">
              <span className="legal-content__emphasis">The App is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease or health condition.</span> The information provided by the App is for general informational and fitness tracking purposes only and should not be considered medical advice.
            </p>
            <p className="legal-content__text">
              You should consult with a qualified healthcare professional before beginning any exercise program or if you have concerns about your health. The activity data provided by the App is based on HealthKit calculations and may not be completely accurate for all users or activities.
            </p>
            <p className="legal-content__text">
              We are not responsible for any health decisions you make based on information provided by the App.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">8. Intellectual Property</h2>
            <p className="legal-content__text">
              The App and its original content, features, and functionality are owned by Peak Active and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="legal-content__text">
              You are granted a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes in accordance with these Terms.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">9. Disclaimer of Warranties</h2>
            <p className="legal-content__text">
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="legal-content__text">
              We do not warrant that the App will be uninterrupted, error-free, or completely secure. We do not guarantee the accuracy, completeness, or usefulness of any activity data or information provided by the App.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">10. Limitation of Liability</h2>
            <p className="legal-content__text">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL PEAK ACTIVE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE APP.
            </p>
            <p className="legal-content__text">
              Our total liability to you for any claims arising from your use of the App shall not exceed the amount you paid, if any, to download or use the App.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">11. Indemnification</h2>
            <p className="legal-content__text">
              You agree to indemnify, defend, and hold harmless Peak Active and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your use of the App or violation of these Terms.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">12. Modifications to Terms</h2>
            <p className="legal-content__text">
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the App after any changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">13. Termination</h2>
            <p className="legal-content__text">
              We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the App will cease immediately.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">14. Governing Law</h2>
            <p className="legal-content__text">
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the App shall be resolved in the courts of competent jurisdiction.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">15. Severability</h2>
            <p className="legal-content__text">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
            </p>
          </section>

          <section className="legal-content__section">
            <h2 className="legal-content__heading">16. Contact Information</h2>
            <p className="legal-content__text">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="legal-content__text">
              Email: <a href="mailto:dustin@dustinkirk.com" className="legal-content__link">dustin@dustinkirk.com</a>
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
