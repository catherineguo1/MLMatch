import React from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';

const htmlContent = `
  <style>
    [data-custom-class='body'], [data-custom-class='body'] * {
      background: transparent !important;
    }
    [data-custom-class='title'], [data-custom-class='title'] * {
      font-family: Arial !important;
      font-size: 26px !important;
      color: #000000 !important;
    }
    [data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
      font-family: Arial !important;
      color: #595959 !important;
      font-size: 14px !important;
    }
    [data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
      font-family: Arial !important;
      font-size: 19px !important;
      color: #000000 !important;
    }
    [data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
      font-family: Arial !important;
      font-size: 17px !important;
      color: #000000 !important;
    }
    [data-custom-class='body_text'], [data-custom-class='body_text'] * {
      color: #595959 !important;
      font-size: 14px !important;
      font-family: Arial !important;
    }
    [data-custom-class='link'], [data-custom-class='link'] * {
      color: #3030F1 !important;
      font-size: 14px !important;
      font-family: Arial !important;
      word-break: break-word !important;
    }
  </style>
  <div data-custom-class="body">
    <div><strong><span style="font-size: 26px;"><span data-custom-class="title">Privacy Policy</span></span></strong></div>
    <div><span style="color: rgb(127, 127, 127);"><strong><span style="font-size: 15px;"><span data-custom-class="subtitle">Last updated April 07, 2025</span></span></strong></span></div>
    <div style="line-height: 1.5;">
      <span style="color: rgb(89, 89, 89); font-size: 15px;" data-custom-class="body_text">
        This Privacy Notice for <strong>MLMatch</strong> ("we," "us," or "our") describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
      </span>
      <ul>
        <li data-custom-class="body_text" style="line-height: 1.5;">
          <span style="font-size: 15px; color: rgb(89, 89, 89);">Download and use our mobile application (MLMatch), or any other application of ours that links to this Privacy Notice</span>
        </li>
        <li data-custom-class="body_text" style="line-height: 1.5;">
          <span style="font-size: 15px; color: rgb(89, 89, 89);">Engage with us in other related ways, including any sales, marketing, or events</span>
        </li>
      </ul>
      <p data-custom-class="body_text"><strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <strong>cat18012003@gmail.com</strong>.</p>

      <h2 data-custom-class="heading_1">SUMMARY OF KEY POINTS</h2>
      <p data-custom-class="body_text"><strong>What personal information do we process?</strong> We process personal information that you provide to us, such as name, contact information, and app usage data.</p>
      <p data-custom-class="body_text"><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</p>
      <p data-custom-class="body_text"><strong>Do we collect any information from third parties?</strong> No, we do not collect information from third parties.</p>
      <p data-custom-class="body_text"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with the law.</p>
      <p data-custom-class="body_text"><strong>How do we keep your information safe?</strong> We have organizational and technical processes to protect your information. However, no electronic transmission is 100% secure.</p>
      <p data-custom-class="body_text"><strong>What are your rights?</strong> Depending on your location, you may have rights under applicable laws to access, modify, or delete your personal data.</p>
      <p data-custom-class="body_text"><strong>How do you exercise your rights?</strong> The easiest way is by contacting us at <strong>cat18012003@gmail.com</strong>.</p>

      <h2 data-custom-class="heading_1">1. WHAT INFORMATION DO WE COLLECT?</h2>
      <p data-custom-class="body_text">We collect personal information that you voluntarily provide when you register on the app, express interest in learning about us or our products and Services, or otherwise contact us.</p>

      <h2 data-custom-class="heading_1">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
      <p data-custom-class="body_text">We process your information to provide, improve, and administer our Services, communicate with you, ensure security and prevent fraud, and comply with law.</p>

      <h2 data-custom-class="heading_1">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
      <p data-custom-class="body_text">We may share information in specific situations such as business transfers, or as required by law.</p>

      <h2 data-custom-class="heading_1">4. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
      <p data-custom-class="body_text">We keep your information as long as necessary for the purposes outlined unless a longer retention period is required by law.</p>

      <h2 data-custom-class="heading_1">5. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
      <p data-custom-class="body_text">We use technical and organizational security measures. However, we cannot guarantee complete security over the internet.</p>

      <h2 data-custom-class="heading_1">6. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
      <p data-custom-class="body_text">Depending on your location, you may have rights that allow you greater access to or control over your personal information.</p>

      <h2 data-custom-class="heading_1">7. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
      <p data-custom-class="body_text">Most browsers and some mobile OS offer a Do-Not-Track feature. We do not currently respond to such signals.</p>

      <h2 data-custom-class="heading_1">8. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
      <p data-custom-class="body_text">Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>

      <h2 data-custom-class="heading_1">9. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
      <p data-custom-class="body_text">If you have questions or comments, you may email us at <strong>cat18012003@gmail.com</strong>.</p>
    </div>
  </div>
`;

export default function PrivacyPolicyScreen() {
  const { width } = useWindowDimensions();

  return (
    <ScrollView style={{ padding: 16 }}>
      <RenderHTML contentWidth={width} source={{ html: htmlContent }} />
    </ScrollView>
  );
}