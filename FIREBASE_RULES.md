# Firebase Realtime Database Rules

## 📋 Database Structure

Your Firebase database should have this structure:

```json
{
  "links": {
    "telegram1": {
      "url": "https://t.me/channel1",
      "name": "Channel Name 1",
      "active": true,
      "createdAt": 1234567890
    },
    "telegram2": {
      "url": "https://t.me/channel2",
      "name": "Channel Name 2",
      "active": true,
      "createdAt": 1234567891
    }
  },
  "clicks": {
    "click1": {
      "button": "Get Started",
      "step": 1,
      "timestamp": 1234567890,
      "userAgent": "Mozilla/5.0..."
    }
  },
  "adClicks": {
    "adclick1": {
      "adType": "native",
      "adId": "adsterra-native-1",
      "timestamp": 1234567890,
      "step": 1
    }
  }
}
```

## 🔒 Recommended Rules (For Production)

Copy and paste these rules in Firebase Console → Realtime Database → Rules:

```json
{
  "rules": {
    "links": {
      ".read": true,
      ".write": "auth != null",
      ".indexOn": ["active"]
    },
    "clicks": {
      ".read": "auth != null",
      ".write": true
    },
    "adClicks": {
      ".read": "auth != null",
      ".write": true
    }
  }
}
```

## 📖 Rules Explanation

### Links Node
- **`.read": true`** - Anyone can read links (needed for website to display)
- **`.write": "auth != null"`** - Only authenticated users can write (admin only)
- **`.indexOn": ["active"]`** - Index for faster queries on active links

### Clicks Node
- **`.read": "auth != null"`** - Only authenticated users can read click data
- **`.write": true`** - Anyone can write click data (for tracking)

### AdClicks Node
- **`.read": "auth != null"`** - Only authenticated users can read ad click data
- **`.write": true`** - Anyone can write ad click data (for tracking)

## 🚀 Quick Setup (Test Mode)

For testing, you can use these permissive rules:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

**⚠️ Warning:** These rules allow anyone to read and write to your database. Only use for testing!

## 🔐 Secure Rules (For Production)

For production with authentication:

```json
{
  "rules": {
    "links": {
      ".read": true,
      ".write": "auth != null",
      ".validate": {
        "newChild.hasChildren(['url', 'name', 'active'])": true,
        "newChild.child('url').isString()": true,
        "newChild.child('name').isString()": true,
        "newChild.child('active').isBoolean()": true
      }
    },
    "clicks": {
      ".read": "auth != null",
      ".write": true,
      ".validate": {
        "newChild.hasChildren(['button', 'step', 'timestamp'])": true,
        "newChild.child('button').isString()": true,
        "newChild.child('step').isNumber()": true,
        "newChild.child('timestamp').isNumber()": true
      }
    },
    "adClicks": {
      ".read": "auth != null",
      ".write": true,
      ".validate": {
        "newChild.hasChildren(['adType', 'adId', 'timestamp', 'step'])": true,
        "newChild.child('adType').isString()": true,
        "newChild.child('adId').isString()": true,
        "newChild.child('timestamp').isNumber()": true,
        "newChild.child('step').isNumber()": true
      }
    }
  }
}
```

## 📝 How to Apply Rules

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project "coinzo-1a2a8"
3. Go to **Realtime Database**
4. Click on **Rules** tab
5. Replace the existing rules with the rules above
6. Click **Publish**

## ✅ Recommended Approach

**For your use case, I recommend:**

1. **Start with test rules** (first 30 days):
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

2. **After testing, switch to secure rules** (production):
```json
{
  "rules": {
    "links": {
      ".read": true,
      ".write": "auth != null",
      ".indexOn": ["active"]
    },
    "clicks": {
      ".read": "auth != null",
      ".write": true
    },
    "adClicks": {
      ".read": "auth != null",
      ".write": true
    }
  }
}
```

## 🎯 Why These Rules?

- **Links readable by everyone** - Your website needs to display links to all users
- **Links writable by admin only** - Prevents unauthorized link changes
- **Clicks writable by everyone** - Allows tracking from all users
- **Clicks readable by admin only** - Protects your analytics data
- **Index on active** - Makes queries faster when filtering active links

## 🔧 Testing Your Rules

After applying rules, test by:
1. Opening your website
2. Checking if links load correctly
3. Clicking buttons to track clicks
4. Verifying data appears in Firebase Console

---

**Your Firebase is ready to go! 🚀**
