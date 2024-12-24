import React from 'react';
import { Mail } from 'lucide-react';

const ThankYouRejected: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#10d999] mb-4">
            Your registration is completed!
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            We would get back to you in case we confirm a mutual fit.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            登録内容を確認後、折り返しの連絡をさせて頂くことがあります。
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-gray-700">
              Meanwhile, you can also check the other positions as follows.
              Thank you for your time & cooperation.
            </p>
            <p className="text-gray-700">
              お待ちの間、以下より他ポジションを確認頂く事も出来ます。
            </p>
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-block bg-[#10d999] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              他ポジションのURL
            </a>
          </div>

          <div className="border-t pt-6">
            <p className="text-gray-700 text-center mb-4">
              貴重なお時間とご協力につき有難うございます。
            </p>
          </div>

          <div className="border-t pt-6 text-center">
            <p className="text-gray-600 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              If you have any questions, please contact:
            </p>
            <a
              href="mailto:talent@athearth.com"
              className="text-[#10d999] hover:underline"
            >
              talent@athearth.com
            </a>
            <p className="text-gray-600 mt-2">
              ご質問はこのEメール又はtalent@athearth.com宛にてお問い合わせください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouRejected;