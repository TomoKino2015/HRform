import React from 'react';
import { Mail } from 'lucide-react';

const ThankYouAccepted: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#10d999] mb-4">
            Your registration is completed!
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Now, let's set up the meeting for the interview and prepare for it.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            面接のための打ち合わせを設定し、準備を進めていきましょう。
          </p>
        </div>

        <div className="space-y-8">
          <div className="border-b pb-6">
            <h2 className="text-xl font-semibold mb-4">1. Schedule a meeting now</h2>
            <a
              href="#"
              className="inline-block bg-[#10d999] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              ミーティング設定用URL
            </a>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700">
              Thank you for your time. Please take a look at the following information about AtHearth's business before the meeting.
              We look forward to making this a mutually beneficial meeting.
            </p>
            <p className="text-gray-700">
              面談をより良い時間にするため以下をクリックして事前資料に目を通して頂けますと幸いです。ご質問などもお気軽に聞いて下さい。
            </p>
            <p className="text-gray-700">
              お互いにとってより良い面談となりますように。
            </p>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">2. Check the pre-documents</h2>
            <a
              href="#"
              className="inline-block bg-gray-100 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
            >
              事前資料URL
            </a>
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

export default ThankYouAccepted;