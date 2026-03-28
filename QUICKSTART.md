# Luncher - Quick Start Guide 🚀

Get your Luncher website up and running in 5 minutes!

## ⚡ Quick Setup (5 Minutes)

### Step 1: Firebase is Already Configured! ✅

Your Firebase configuration is already set up in [`index.html`](index.html):

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyBQn69HSj_p3K1FTpPiBZMgHlbj5MnnWg0",
  authDomain: "coinzo-1a2a8.firebaseapp.com",
  databaseURL: "https://coinzo-1a2a8-default-rtdb.firebaseio.com",
  projectId: "coinzo-1a2a8",
  storageBucket: "coinzo-1a2a8.firebasestorage.app",
  messagingSenderId: "655863310444",
  appId: "1:655863310444:web:eecf7db53e38bbbd8f5049",
  measurementId: "G-38422J73NZ"
};
```

**No configuration needed!** Just deploy and use.

### Step 2: Add Your First Telegram Link (1 minute)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project "coinzo-1a2a8"
3. Go to **Realtime Database**
4. Click the "+" button to add data
5. Create a node called "links"
6. Add a child node with a unique ID (e.g., "telegram1")
7. Add the following fields:
   - `url`: "https://t.me/yourchannel"
   - `name`: "Your Channel Name"
   - `active`: true

### Step 3: Deploy Your Website (2 minutes)

**Option A: Firebase Hosting (Recommended)**
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Deploy
firebase deploy
```

**Option B: Any Web Hosting**
- Upload all files to your hosting
- Access `index.html` to see your site

## 📁 Files Overview

| File | Purpose |
|------|---------|
| [`index.html`](index.html) | Main website with 7-step navigation |
| [`styles.css`](styles.css) | Modern black & white styling |
| [`app.js`](app.js) | Navigation logic & ad management |
| [`firebase-config.js`](firebase-config.js) | Firebase helper functions |
| [`README.md`](README.md) | Full documentation |
| [`PLAN.md`](PLAN.md) | Architecture documentation |

## 🎯 How It Works

1. **User visits** → Sees landing page with popunder ad
2. **Clicks "Get Started"** → Navigates to step 2 with banner ads
3. **Continues through steps 3-4** → More content and native ads
4. **Step 5: Verification** → User verifies they're real
5. **Step 6: Loading** → Animated loading bar with ads
6. **Step 7: Final** → User clicks "Reveal Link"
7. **Step 8: Destination** → Link displayed with copy icon

## 💰 Ad Integration - All Set! ✅

All your ad codes are already integrated:

### 1. Popunder (28897720) ✅
```html
<script src="https://pl28998046.profitablecpmratenetwork.com/e8/1c/03/e81c03dca13d4f6a4f9babe1b6d7d382.js"></script>
```

### 2. Banner 160x300 (28897721) ✅
```html
<script>
  atOptions = {
    'key' : '810644be5c29b37d9b9a77038b727eb6',
    'format' : 'iframe',
    'height' : 300,
    'width' : 160,
    'params' : {}
  };
</script>
<script src="https://www.highperformanceformat.com/810644be5c29b37d9b9a77038b727eb6/invoke.js"></script>
```

### 3. Smartlink (28897722) ✅
```html
<a href="https://www.profitablecpmratenetwork.com/git9hrmci0?key=903fe49c6d56dce425a2bd6d3a8e94bd" target="_blank">
    Special Offer
</a>
```

### 4. Native Banner (28897723) ✅
```html
<script async="async" data-cfasync="false" src="https://pl28998221.profitablecpmratenetwork.com/93844ce08b89a079003eef47404ba09f/invoke.js"></script>
<div id="container-93844ce08b89a079003eef47404ba09f"></div>
```

### 5. Social Bar (28897724) ✅
```html
<script src="https://pl28998222.profitablecpmratenetwork.com/47/bc/6a/47bc6af8861bddcf1d2e1e095a4c4c7d.js"></script>
```

## 📱 Mobile Ready

The website is fully responsive and works perfectly on:
- ✅ Desktop computers
- ✅ Tablets
- ✅ Mobile phones

## 🎨 Customization

### Change Colors
Edit [`styles.css`](styles.css) lines 5-12:
```css
:root {
    --primary-black: #000000;
    --primary-white: #FFFFFF;
    --dark-gray: #1a1a1a;
    --medium-gray: #333333;
    --light-gray: #f5f5f5;
}
```

### Change Content
Edit [`index.html`](index.html) to modify:
- Headings and text
- Icons (Font Awesome classes)
- Button text
- Statistics

### Add More Steps
1. Add new section in [`index.html`](index.html)
2. Update `totalSteps` in [`app.js`](app.js) line 5
3. Add step indicator in progress bar

## 📊 Analytics

Built-in tracking for:
- Button clicks
- Ad clicks
- Link clicks

All data stored in Firebase under:
- `clicks` - Button clicks
- `adClicks` - Ad clicks
- `linkClicks` - Telegram link clicks

## 🆘 Troubleshooting

### Firebase Not Working?
- Check if Firebase SDK is loaded
- Verify Firebase configuration in [`index.html`](index.html)
- Check browser console for errors
- Ensure database rules allow read/write

### Ads Not Showing?
- Verify Adsterra account is active
- Check ad codes are correctly placed in [`index.html`](index.html)
- Ensure ad containers have proper IDs
- Check browser console for script errors

### Links Not Updating?
- Verify Firebase database has data
- Check if links are marked as `active: true`
- Look at browser console for errors
- Test with fallback link

## 📞 Support

For issues:
1. Check browser console for errors
2. Review Firebase documentation
3. Check Adsterra documentation
4. Review [`README.md`](README.md) for detailed instructions

## 🎉 You're Ready!

Your Luncher website is now ready to:
- ✅ Generate ad revenue
- ✅ Deliver Telegram links to users
- ✅ Track clicks and engagement
- ✅ Work on all devices

**Next Steps:**
1. Add your Telegram links via Firebase Console
2. Share your website
3. Monitor your earnings!

---

**Happy Earning! 💰**
