# App Store Reviewer Notes

**Copy this text into the "Reviewer Notes" section when submitting to Apple App Store Connect, Google Play Console, and Amazon Appstore.**

---

## To the App Review Team:

Thank you for reviewing **Onyx Stream**.

Please note that Onyx Stream is strictly a **neutral media player UI** (similar to VLC Media Player). Out of the box, the application contains **zero media content, zero live streams, and zero VODs**. It is designed for users to input their own legally obtained M3U playlists or Xtream API credentials.

Because the app is empty upon download, we have provided a **safe, public-domain test playlist** so you can verify the video player and EPG functionality during your review.

---

### Test Account / Playlist Credentials:

**Login Type:** Xtream Codes API

**Server URL:** `http://test-streams.mux.dev`  
*(Note: Replace this with a real, active public-domain test server you set up)*

**Username:** `appstore_reviewer`

**Password:** `test_password_123`

---

### Expected Behavior:

Upon entering these credentials, the app will populate with **public domain content** (e.g., Big Buck Bunny, Tears of Steel, Sintel). You can click any of these to verify that our video playback engine functions correctly.

The EPG timeline will display placeholder program schedules for these test streams.

---

### Legal Disclaimer:

As clearly stated in our app description and onboarding screens:

> **"Onyx Stream is a media player. It does not provide, include, or endorse any media content. Users must provide their own playlists."**

This application is a **neutral tool** and does not facilitate piracy. We comply with all DMCA and copyright regulations.

---

### Contact for Technical Issues:

If you have any technical issues testing the playback engine or accessing the test credentials, please contact our development team immediately at:

**info@onyx-global.co.uk**

---

## Additional Notes:

1. **Deep Linking to Third-Party Apps:**  
   Our app includes quick-launch buttons for Netflix, Disney+, Prime Video, and DAZN. These are **deep links only** — they redirect users to the official apps if installed, or to the App Store/Google Play if not. We do not authenticate with these services or access their content programmatically.

2. **Cloud Sync Feature:**  
   The "Cloud Sync" feature stores only **user preferences, favorites, and watch history metadata** (e.g., "User paused at 00:12:34 on Channel X"). We do not store the actual video streams or playlist URLs on our servers.

3. **Subscription Model:**  
   - Free Tier: Supports 1 playlist, basic playback  
   - Pro Tier ($9.99/year or $29.99 lifetime): Unlimited playlists, cloud sync, catch-up TV, multi-view  

All subscriptions are managed through your respective app store's IAP (In-App Purchase) system.

---

Thank you for your thorough review. We're committed to maintaining the highest standards of quality and legal compliance.

**— The Onyx Stream Development Team**
