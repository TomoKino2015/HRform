import { FormData } from '../types/form';

export const generateEmailContent = (data: FormData, isEligible: boolean) => {
  if (isEligible) {
    return {
      subject: "Your registration is completed! / 登録完了のお知らせ",
      body: `Your registration is completed!
Now, let's set up the meeting for the interview and prepare for it.

面接のための打ち合わせを設定し、準備を進めていきましょう。

1. Schedule a meeting now  
[ミーティング設定用URL] 

Thank you for your time. Please take a look at the following information about AtHearth's business before the meeting.
We look forward to making this a mutually beneficial meeting.

面談をより良い時間にするため以下をクリックして事前資料に目を通して頂けますと幸いです。ご質問などもお気軽に聞いて下さい。

お互いにとってより良い面談となりますように。

2. Check the pre-documents
[事前資料URL]

If you have any questions, please reply to this email or talent@athearth.com.

ご質問はこのEメール又はtalent@athearth.com宛にてお問い合わせください。`
    };
  }

  return {
    subject: "Your registration is completed! / 登録完了のお知らせ",
    body: `Your registration is completed!
We would get back to you in case we confirm a mutual fit.

登録内容を確認後、折り返しの連絡をさせて頂くことがあります。

Meanwhile, you can also check the other positions as follows.
Thank you for your time & cooperation.

お待ちの間、以下より他ポジションを確認頂く事も出来ます。

[他ポジションのURL]

貴重なお時間とご協力につき有難うございます。

If you have any questions, please reply to this email or talent@athearth.com.

ご質問はこのEメール又はtalent@athearth.com宛にてお問い合わせください。`
  };
};