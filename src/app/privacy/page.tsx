import type { Metadata } from "next";
import Link from "next/link";
import SubpageShell from "@/components/layout/SubpageShell";

export const metadata: Metadata = {
  title: "Privacy Policy — Modulum Studio",
  description: "Privacy Policy for Delyo app by Modulum Studio",
  alternates: { canonical: "/privacy" },
};

const h2 = "text-2xl font-semibold tracking-tight text-neutral-900 mb-4";
const p = "text-neutral-600 leading-relaxed";
const block = "space-y-4";

export default function PrivacyPage() {
  return (
    <SubpageShell>
      <div className="max-w-3xl mx-auto px-6 md:px-12 pt-20 pb-24 md:pt-28">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-5">Privacy Policy</h1>
          <div className="w-12 h-1 rounded-full mx-auto mb-5 bg-linear-to-r from-[#667eea] via-[#f093fb] to-[#ffd89b]" />
          <p className="text-lg text-neutral-500">Effective Date: January 8, 2025</p>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-100 shadow-xl shadow-neutral-300/30 p-8 md:p-12 space-y-10">
          <section className={block}>
            <h2 className={h2}>Introduction</h2>
            <p className={p}>
              Modulum Studio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the Delyo mobile application (&quot;the App&quot;). This Privacy
              Policy explains how we collect, use, and protect your information when you use our App.
            </p>
            <p className={p}>
              By using Delyo, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className={block}>
            <h2 className={h2}>Information Collection and Use</h2>
            <p className={p}>
              Delyo is designed with privacy in mind. We do not collect, store, or process any personal information
              from users of our application.
            </p>
            <p className={p}>The App may collect minimal technical information necessary for basic functionality, such as:</p>
            <ul className={`${p} list-disc pl-6 space-y-2`}>
              <li>Device type and operating system version (for compatibility purposes)</li>
              <li>App usage statistics (anonymous and aggregated)</li>
              <li>Crash reports (to improve app stability)</li>
            </ul>
            <p className={p}>
              This technical information cannot be used to identify individual users and is used solely for improving
              the App&apos;s performance and user experience.
            </p>
          </section>

          <section className={block}>
            <h2 className={h2}>Data Sharing</h2>
            <p className={p}>
              We do not sell, trade, or otherwise transfer any user information to third parties. Since we do not
              collect personal data, there is no personal information to share.
            </p>
            <p className={p}>
              Any anonymous technical data collected may be shared with service providers solely for the purpose of app
              analytics and crash reporting to improve our services.
            </p>
          </section>

          <section className={block}>
            <h2 className={h2}>Data Security</h2>
            <p className={p}>
              We implement appropriate security measures to protect against unauthorized access, alteration, disclosure,
              or destruction of any information we may collect. However, since we do not collect personal information,
              the security risk is minimal.
            </p>
          </section>

          <section className={block}>
            <h2 className={h2}>Advertising and Tracking</h2>
            <p className={p}>
              Delyo does not display advertisements and does not use tracking technologies such as cookies or similar
              technologies to track users across other applications or websites.
            </p>
          </section>

          <section className={block}>
            <h2 className={h2}>Children&apos;s Privacy</h2>
            <p className={p}>
              Our App is suitable for all ages. Since we do not collect personal information from any users, including
              children under 13, we are in compliance with the Children&apos;s Online Privacy Protection Act (COPPA).
            </p>
          </section>

          <section className={block}>
            <h2 className={h2}>Changes to This Privacy Policy</h2>
            <p className={p}>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the &quot;Effective Date&quot; at the top of this policy.
            </p>
            <p className={p}>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
              are effective when they are posted on this page.
            </p>
          </section>

          <section className={block}>
            <h2 className={h2}>Contact Information</h2>
            <p className={p}>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <div className="bg-neutral-50 border border-neutral-100 rounded-xl p-6 mt-2">
              <p className="text-neutral-900 font-medium">Modulum Studio</p>
              <p className={p}>Email: support@modulumstudio.com</p>
              <p className={p}>Website: https://modulumstudio.com</p>
            </div>
          </section>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-full border border-neutral-300 text-neutral-900 font-medium hover:border-neutral-900 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </SubpageShell>
  );
}
