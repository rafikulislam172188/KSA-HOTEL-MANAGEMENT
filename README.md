# KSA Hotel Management System

একটি সম্পূর্ণ হোটেল ম্যানেজমেন্ট সিস্টেম যা রুম বুকিং, অতিথি ব্যবস্থাপনা, বিল/চালান, কর্মচারী ব্যবস্থাপনা, রুম ইনভেন্টরি এবং রিপোর্টিং ফিচার সহ আসে।

## প্রযুক্তি স্ট্যাক

- **ডেস্কটপ অ্যাপ্লিকেশন:** Electron.js
- **ব্যাকএন্ড:** Node.js + Express.js
- **ডাটাবেস:** PostgreSQL / MySQL
- **ORM:** Sequelize
- **অথেন্টিকেশন:** JWT
- **নিরাপত্তা:** bcryptjs, helmet, CORS

## ফিচারস

- ✅ রুম বুকিং এবং ম্যানেজমেন্ট
- ✅ অতিথি ব্যবস্থাপনা
- ✅ বিল এবং চালান সিস্টেম
- ✅ কর্মচারী ব্যবস্থাপনা
- ✅ রুম ইনভেন্টরি ট্র্যাকিং
- ✅ বিস্তারিত রিপোর্টিং

## ইনস্টলেশন

### প্রয়োজনীয়তা
- Node.js (v14 বা তার উপরে)
- PostgreSQL বা MySQL

### সেটআপ

```bash
# রিপোজিটরি ক্লোন করুন
git clone https://github.com/rafikulislam172188/KSA-HOTEL-MANAGEMENT.git
cd KSA-HOTEL-MANAGEMENT

# ডিপেন্ডেন্সি ইনস্টল করুন
npm install

# এনভায়রনমেন্ট ভেরিয়েবল সেটআপ করুন
cp .env.example .env

# ডাটাবেস মাইগ্রেশন চালান
npm run db:migrate

# ডেভেলপমেন্ট মোডে চালান
npm run dev
```

## প্রজেক্ট স্ট্রাকচার

```
KSA-HOTEL-MANAGEMENT/
├── src/
│   ├── main.js                 # Electron মেইন প্রসেস
│   ├── preload.js             # Electron preload স্ক্রিপ্ট
│   ├── server/
│   │   ├── index.js          # Express সার্ভার
│   │   ├── middleware/       # মিডলওয়্যার
│   │   ├── routes/           # API রুট
│   │   └── controllers/      # কন্ট্রোলার
│   ├── database/
│   │   ├── models/           # ডাটাবেস মডেল
│   │   ├── migrations/       # ডাটাবেস মাইগ্রেশন
│   │   └── config.js         # ডাটাবেস কনফিগ
│   ├── client/               # ফ্রন্টএন্ড
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── utils/
│   └── utils/
├── public/                    # স্ট্যাটিক ফাইল
├── .env.example              # এনভায়রনমেন্ট টেমপ্লেট
├── package.json              # প্যাকেজ ডিপেন্ডেন্সি
└── README.md                 # এই ফাইল
```

## লাইসেন্স

MIT License - বিস্তারিত জন্য LICENSE ফাইল দেখুন

## যোগাযোগ

যেকোনো প্রশ্ন বা সাহায্যের জন্য ইস্যু তৈরি করুন.