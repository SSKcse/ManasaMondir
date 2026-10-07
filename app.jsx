
const { useState, useEffect, useRef } = React;


// Clean preloaded initial data (no base64 overhead)
const PRELOADED_DATA = {
  "marquee": "গৈলার ঐতিহ্যবাহী শ্রীশ্রী মা-মনসা মন্দিরের বাৎসরিক পূজা ও উৎসব-২০২৬ আগামী ১৮ আগস্ট ২০২৬ (মঙ্গলবার) অনুষ্ঠিত হতে যাচ্ছে, উক্ত অনুষ্ঠানে আপনাদের সকলকে সবান্ধবে আমন্ত্রণ জানাচ্ছি।",
  "featuredTestimonialIds": [
    5,
    6,
    4,
    8
  ],
  "committee": [
    {
      "id": 14,
      "name": "কাজল দাশগুপ্ত",
      "role": "যুগ্ম সাধারণ সম্পাদক",
      "phone": "01611040508",
      "image": "images/committee/member_14.jpg",
      "order_idx": 5
    },
    {
      "id": 15,
      "name": "প্রসেনজিৎ দে",
      "role": "যুগ্ম সধারণ সম্পাদক",
      "phone": "01735737308",
      "image": "images/committee/member_15.jpg",
      "order_idx": 6
    },
    {
      "id": 17,
      "name": "শ্রী সন্তোষ কর্মকার",
      "role": "অর্থ সম্পাদক",
      "phone": "০১৭২৭০৭৫২৫৪",
      "image": "images/committee/member_17.jpg",
      "order_idx": 7
    },
    {
      "id": 18,
      "name": "শ্রী গৌতম চন্দ্র সরকার ",
      "role": "সহ অর্থ সম্পাদক",
      "phone": "০১৭৪১৭৭১৫৪৭",
      "image": "images/committee/member_18.jpg",
      "order_idx": 8
    },
    {
      "id": 19,
      "name": "শ্রীমতি ললিতা সরকার",
      "role": " মহিলা বিষয়ক সম্পাদিকা",
      "phone": "০১৭৩৯০৯৮২৩৬",
      "image": "images/committee/member_19.jpg",
      "order_idx": 9
    },
    {
      "id": 20,
      "name": "শ্রী দিলীপ কর্মকার ",
      "role": "সাংগাঠনিক সম্পাদক",
      "phone": "০১৭৩৩১৩৬২৬২",
      "image": "images/committee/member_20.jpg",
      "order_idx": 10
    },
    {
      "id": 21,
      "name": "শ্রী গোপাল শীল ",
      "role": "সাংগাঠনিক সম্পাদক",
      "phone": "০১৬৫০২৬৯২৩৩",
      "image": "images/committee/member_21.jpg",
      "order_idx": 11
    },
    {
      "id": 22,
      "name": "শ্রী সঞ্জয় চক্রবর্তী ",
      "role": "ধর্ম বিষয়ক সম্পাদক",
      "phone": "০১৭৮৯৮২৬৫৪৭",
      "image": "images/committee/member_22.jpg",
      "order_idx": 12
    },
    {
      "id": 23,
      "name": "শ্রী বিশ্বজিৎ দাস ",
      "role": "সাংস্কৃতিক সম্পাদক",
      "phone": "০১৭১৪৯৩৪১০২",
      "image": "images/committee/member_23.jpg",
      "order_idx": 13
    },
    {
      "id": 24,
      "name": "শ্রী সুনীল কুমার দাস ",
      "role": "দপ্তর সম্পাদক",
      "phone": "০১৭১২৯৪০৭১৬",
      "image": "images/committee/member_24.jpg",
      "order_idx": 14
    },
    {
      "id": 25,
      "name": "শ্রী প্রশান্ত দাস ",
      "role": "প্রচার সম্পাদক",
      "phone": "০১৭৯১১২৫৫৮৯",
      "image": "images/committee/member_25.jpg",
      "order_idx": 15
    },
    {
      "id": 27,
      "name": "সঞ্জয় কর্মকার ",
      "role": "সহ-প্রচার সম্পাদক ",
      "phone": "01714445510",
      "image": "images/committee/member_27.jpg",
      "order_idx": 16
    },
    {
      "id": 26,
      "name": "শ্রী নিবারণ সরকার ",
      "role": "সমাজ কল্যাণ সম্পাদক",
      "phone": "০১৭১০৪৪৭৮১৫",
      "image": "images/committee/member_26.jpg",
      "order_idx": 17
    },
    {
      "id": 4,
      "name": "ড. বিনয় ভূষণ রায়",
      "role": "সভাপতি",
      "phone": "01717503657",
      "image": "images/committee/member_4.jpg",
      "order_idx": 0
    },
    {
      "id": 7,
      "name": "গৌরাঙ্গ লাল বাড়ৈ",
      "role": "সিনিয়র সহ-সভাপতি",
      "phone": "01713798798",
      "image": "images/committee/member_7.jpg",
      "order_idx": 1
    },
    {
      "id": 10,
      "name": "সুশান্ত কর্মকার",
      "role": "সহ-সভাপতি",
      "phone": "01616952920",
      "image": "images/committee/member_10.jpg",
      "order_idx": 2
    },
    {
      "id": 13,
      "name": "ডা: দিলীপ কুমার দাস",
      "role": "সাধারণ সম্পাদক",
      "phone": "01715032799",
      "image": "images/committee/member_13.jpg",
      "order_idx": 3
    },
    {
      "id": 16,
      "name": "শ্রী আশিষ তপাদার ",
      "role": "সহ সাধারণ সম্পাদক",
      "phone": "০১৭১৫২৪৩৯২৪",
      "image": "images/committee/member_16.jpg",
      "order_idx": 4
    }
  ],
  "testimonials": [
    {
      "id": 4,
      "date": "2024-02-16",
      "name": "মোঃ দেলোয়ার হোসেন",
      "designation": "অতিরিক্তি পরিচালক, বাংলাদেশ ব্যাংক",
      "text": "দেবীর সকল ভক্তদের মঙ্গল কামনা করছি। দেবীর আশির্বাদে জগতের সকলের মঙ্গল সাধিত হোক।\n"
    },
    {
      "id": 5,
      "date": "2023-12-20",
      "name": "রুম্পা সিকদার",
      "designation": "অতিরিক্ত জেলা প্রশাসক (শিক্ষা ও আইসিটি) বরিশাল",
      "text": "আজ সোমবার বিকাল ৪.৩০ মিনিটে মনসা মন্দির পরিদর্শন করার সৌভাগ্য হয়। এখানে এসিল্যান্ড বার্নীন সহ অন্যান্য গন্যমান্য ব্যক্তিবর্গ উপস্থিত ছিলেন। কবি বিজয় গুপ্ত প্রতিষ্ঠিত মনসা মন্দির সম্পর্কে অনেক তথ্য শুনে সমৃদ্ধ হলাম। সবার মঙ্গল কামনা করছি।\n"
    },
    {
      "id": 6,
      "date": "2024-01-26",
      "name": "প্রফেসর ডা. অমর কুমার সাহা",
      "designation": "সাতক্ষীরা মেডিকেল কলেজ",
      "text": "সনাতন ধর্ম ও ধর্মীয় স্থাপনা ও মন্দিরের সংরক্ষন ও মর্যাদা রক্ষা করা সব সনাতনীর নৈতিক ও সামাজিক দায়িত্ব। একটি সুসংঘটিত প্রতিষ্ঠান পরিদর্শন করতে পেরে আনন্দিত।\n"
    },
    {
      "id": 7,
      "date": "",
      "name": "মোহাম্মদ বেলায়েত হোসেন",
      "designation": "পুলিশ সুপার, বরিশাল",
      "text": "ঐতিহাসিক এই মন্দির পরিদর্শন আমার জন্য এক গার্বের বিষয়।\nআমার আবার পরিদর্শনের ইচ্ছা রইল।\n\n"
    },
    {
      "id": 8,
      "date": "2024-12-20",
      "name": "তানভীর নাহিদ খান",
      "designation": "সহকারী অধ্যাপক, থিয়েটার এবং পারফারমেন্স স্টাডিজ বিভাগ, ঢাক বিশ্ববিদ্যালয়",
      "text": "কবি বিজয়গুপ্তের পূণ্য জন্মাভূমি ও মনসামন্দির দর্শন করে ভীষণ আনন্দিত। মনসামন্দিরে পদ্মা পুরাণের পরিবেশনা ,দেশজ নাট্য রয়ানী দেখা চমৎকার অভিষ্কতা। পূণ্যভূমি অটুট থাকুক, মনসামন্দির স্বমহিমায় টিঁকে থাকুক, রয়ানী পরিবেশিত হোক অনন্ত কাল ধরে। জয়তু দেশজ নাট্য ,জয়তু রয়ানী, জয়তু বাংলা সংস্কৃতি বৈচিত্রের ভেতর ঐক্য প্রতিষ্ঠিত হোক বাংলাদেশে।\n"
    }
  ],
  "events": [
    {
      "id": 4,
      "title": "সাপ্তাহিক খিচুড়ি প্রসাদ বিতরণ কার্যক্রম চলমান",
      "date": "2026-03-22",
      "description": "প্রতি রবিবারের ন্যায় আজও শ্রী শ্রী মা মনসা মন্দিরে ভক্তবৃন্দের মাঝে সাপ্তাহিক খিচুড়ি প্রসাদ বিতরণ করা হয়েছে।\nমায়ের কৃপায় আজকের এই প্রসাদ বিতরণ কার্যক্রম শান্তিপূর্ণ ও সুশৃঙ্খলভাবে সম্পন্ন হয় এবং আজ মায়ের ভক্তবৃন্দদের উপস্থিতি ছিলো চোখে পরার মতো।\n\nপ্রসাদ বিতরণে অনুদান অথবা সহযোগিতা করতে আগ্রহীরা আমাদের নির্বাহী কমিটির সঙ্গে যোগাযোগ করতে অনুরোধ করা হলো।\n\nমা মনসার কৃপা সকলের ওপর বর্ষিত হোক।\n\nআয়োজনে: কবি বিজয় গুপ্তের স্মৃতি রক্ষা, শ্রী শ্রী মা মনসা মন্দির সংরক্ষণ ও উন্নয়ন কমিটি।",
      "image": "images/events/event_4.jpg"
    },
    {
      "id": 2,
      "title": "নব-নির্বাচিত মাননীয় সংসদ সদস্য এবং তথ্য ও সম্প্রচার মন্ত্রী জননেতা এম. জাহির উদ্দিন স্বপন মহোদয় শুভেচ্ছা।",
      "date": "2026-02-22",
      "description": "ত্রয়োদশ জাতীয় সংসদ জাতীয় সংসদ নির্বাচনে বরিশাল-১ আসনে জনগণের আশীর্বাদ ও ভালোবাসায় বিপুল ভোটে নব-নির্বাচিত মাননীয় সংসদ সদস্য, অসাম্প্রদায়িক চেতনার অহংকার জননেতা এম. জাহির উদ্দিন স্বপন মহোদয়ের\nঐতিহাসিক বিজয় এবং তথ্য ও সম্প্রচার মন্ত্রীর দায়িত্ব প্রাপ্তিতে জানাই আন্তরিক অভিনন্দন ও শুভেচ্ছা।\nমহান দায়িত্ব পালনে আপনার নেতৃত্বে দেশ ও জনগণ উপকৃত হোক এই কামনা করি।\nকবি বিজয় গুপ্তের স্মৃতিরক্ষা, শ্রীশ্রী মা-মনসা মন্দির সংরক্ষণ ও উন্নয়ন কমিটি",
      "image": "images/events/event_2.jpg"
    },
    {
      "id": 3,
      "title": "মনসা মন্দির আঙিনায় বড়ঠাকুর এর মন্দির এর ছাদ ঢালাই",
      "date": "2026-03-20",
      "description": "মনসা মন্দির আঙিনায় বড়ঠাকুর এর মন্দির এর ছাদ ঢালাই হলো। আপনি যদি এ মহৎ কাজে অংশীদার হতে আগ্রহী হন তবে নিজ আগ্রহে যোগাযোগ করুন। সকলের উপর বড়ঠাকুরের আশীর্বাদ বর্ষিত হোক।\n\nকবি বিজয় গুপ্তের স্মৃতিরক্ষা, শ্রীশ্রী মা-মনসা মন্দির সংরক্ষণ ও উন্নয়ন কমিটি\n",
      "image": "images/events/event_3.jpg"
    },
    {
      "id": 1,
      "title": "দেশনেত্রী ও প্রাক্তন প্রধানমন্ত্রী বেগম খালেদা জিয়া’র বিদেহী আত্মার চিরশান্তি কামনায় বিশেষ প্রার্থনা ",
      "date": "2026-01-04",
      "description": "আজ মন্দির প্রাঙ্গণে প্রয়াত দেশনেত্রী ও প্রাক্তন প্রধানমন্ত্রী বেগম খালেদা জিয়া’র বিদেহী আত্মার চিরশান্তি কামনায় বিশেষ প্রার্থনা অনুষ্ঠিত হয়।\nএই আয়োজনে তাঁর আত্মার সদ্গতি ও পরলোকগমনে চিরশান্তি কামনা করা হয়। \nসার্বিক তত্ত্বাবধানে ও আয়োজনে:\nকবি বিজয় গুপ্তের স্মৃতি রক্ষা, শ্রী শ্রী মা মনসা মন্দির সংরক্ষণ ও উন্নয়ন কমিটি",
      "image": "images/events/event_1.jpg"
    },
    {
      "id": 5,
      "title": "কার্যকারী কমিটির সদস্যবৃন্দের উপস্থিতিতে একটি জরুরি সভা অনুষ্ঠিত",
      "date": "2026-03-22",
      "description": "আজ ২২/০৩/২০২৬ তারিখে কার্যকারী কমিটির সদস্যবৃন্দের উপস্থিতিতে একটি জরুরি সভা অনুষ্ঠিত হয়। সভায় মন্দিরের উন্নয়ন, চলমান কার্যক্রম সমূহ, আসন্ন পহেলা বৈশাখ উদযাপনসহ বিভিন্ন গুরুত্বপূর্ণ বিষয়ে আলোচনা ও সিদ্ধান্ত গৃহীত হয়।\n\nউপস্থিত সকল সদস্যবৃন্দকে আন্তরিক ধন্যবাদ জানানো হলো।\n\nমা মনসার কৃপায় সবার মঙ্গল সাধন হোক।\nজয় মা মনসা।\n\nকবি বিজয় গুপ্তের স্মৃতি রক্ষা,\nশ্রী শ্রী মা মনসা মন্দির সংরক্ষণ ও উন্নয়ন কমিটি",
      "image": "images/events/event_5.jpg"
    },
    {
      "id": 7,
      "title": "গৈলার ঐতিহ্যবাহী শ্রীশ্রী মা মনসা মন্দিরের বাৎসরিক পূজা সফলভাবে উদযাপিত হয়েছে",
      "date": "2026-08-19",
      "description": "<p>কবি বিজয় গুপ্তের স্মৃতি রক্ষা ও মা মনসা মন্দির সংরক্ষণ ও উন্নয়ন কমিটি-এর উদ্যোগে আয়োজিত এই পবিত্র উৎসবে বিগত বছরগুলোর তুলনায় এ বছর <strong>রেকর্ড সংখ্যক সর্বোচ্চ ভক্তের সমাগম ঘটেছে</strong>। মন্দির প্রাঙ্গণ ছিল কানায় কানায় পূর্ণ।</p><p>ডিজিটাল প্লাটফর্ম গুলোতেও ব্যাপক প্রচার প্রচারণা হয়েছে। অসংখ্য গণমাধ্যমে খবর হয়েছে। হাজার হাজার ভক্ত মায়ের চরণে পূজা দিয়েছেন এবং প্রসাদ গ্রহণ করেছেন। আপনাদের সকলের উপস্থিতি আমাদের মুগ্ধ করেছে। মা মনসা সকলের মঙ্গল করুন।</p><p><br></p><p>এ অনুষ্ঠানে আমন্ত্রিত অতিথিবৃন্দ, এলাকার ও দূর-দূরান্ত থেকে আগত গণ্যমান্য ব্যক্তিবর্গ, আমাদের মাননীয় উপদেষ্টামণ্ডলী, কার্যনির্বাহী কমিটির সভাপতি ও সম্পাদকসহ সকল সদস্য এবং স্বেচ্ছাসেবকবৃন্দ উপস্থিত ছিলেন।</p><p>আমাদের বাৎসরিক পূজা সফলভাবে সম্পন্ন করার পেছনে অবদান রাখা সকলকে জানাই আন্তরিক ধন্যবাদ।</p><p>সকলের জন্য মঙ্গল কামনা করছি। মা মনসার কৃপা সকলের ওপর বর্ষিত হোক।</p>",
      "image": "images/events/event_7.jpg"
    }
  ],
  "notices": [
    {
      "id": 5,
      "date": "2026-08-19",
      "title": "গৈলার ঐতিহ্যবাহী শ্রীশ্রী মা মনসা মন্দিরের বাৎসরিক পূজা সফলভাবে উদযাপিত হয়েছে।",
      "text": "<p>কবি বিজয় গুপ্তের স্মৃতি রক্ষা ও মা মনসা মন্দির সংরক্ষণ ও উন্নয়ন কমিটি-এর উদ্যোগে আয়োজিত এই পবিত্র উৎসবে বিগত বছরগুলোর তুলনায় এ বছর <strong>রেকর্ড সংখ্যক সর্বোচ্চ ভক্তের সমাগম ঘটেছে</strong>। মন্দির প্রাঙ্গণ ছিল কানায় কানায় পূর্ণ। </p><p><br></p><p>ডিজিটাল প্লাটফর্ম গুলোতেও ব্যাপক প্রচার প্রচারণা হয়েছে। অসংখ্য গণমাধ্যমে খবর হয়েছে। হাজার হাজার ভক্ত মায়ের চরণে পূজা দিয়েছেন এবং প্রসাদ গ্রহণ করেছেন। আপনাদের সকলের উপস্থিতি আমাদের মুগ্ধ করেছে। মা মনসা সকলের মঙ্গল করুন।</p><p><br></p><p>এ অনুষ্ঠানে আমন্ত্রিত অতিথিবৃন্দ, এলাকার ও দূর-দূরান্ত থেকে আগত গণ্যমান্য ব্যক্তিবর্গ, আমাদের মাননীয় উপদেষ্টামণ্ডলী, কার্যনির্বাহী কমিটির সভাপতি ও সম্পাদকসহ সকল সদস্য এবং স্বেচ্ছাসেবকবৃন্দ উপস্থিত ছিলেন।</p><p>আমাদের বাৎসরিক পূজা সফলভাবে সম্পন্ন করার পেছনে অবদান রাখা সকলকে জানাই আন্তরিক ধন্যবাদ।</p><p>সকলের জন্য মঙ্গল কামনা করছি। মা মনসার কৃপা সকলের ওপর বর্ষিত হোক।</p><p><br></p><p>আপনাদের অনুদান এই মহৎ ও পবিত্র কাজ সফল করতে অত্যন্ত গুরুত্বপূর্ণ। মন্দির সংরক্ষণ ও উন্নয়নের জন্য আপনাদের সহায়তার হাত বাড়িয়ে দিন।</p><p>বিকাশ (bKash)-এর মাধ্যমে অনুদান পাঠাতে নিচের পার্সোনাল অ্যাকাউন্টে সেন্ড মানি (Send Money) করুন:</p><p>বিকাশ নম্বর: 01722428334</p><p><br></p><p>মন্দির উন্নয়নে অংশ নিতে আগ্রহীদের আমাদের নির্বাহী কমিটির সঙ্গে যোগাযোগ করার জন্য বিনীত অনুরোধ করা হলো।</p><p>যোগাযোগ:</p><p>সভাপতি: </p><p>ড. বিনয় ভূষণ রায় (01717503657)</p><p>অর্থ সম্পাদক: </p><p>শ্রী সন্তোষ কর্মকার (01727075254)</p><p>সহ-অর্থ সম্পাদক: </p><p>শ্রী গৌতম চন্দ্র সরকার (01741771547)</p><p>সার্বিক তত্ত্বাবধানে:</p><p>কবি বিজয় গুপ্তের স্মৃতি রক্ষা এবং শ্রীশ্রী মা মনসা মন্দির সংরক্ষণ ও উন্নয়ন কমিটি।</p><p>গৈলা, আগৈলঝাড়া, বরিশাল<img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4b/2/16/1f4cc.png\" alt=\"📌\" height=\"16\" width=\"16\"> মন্দির সম্পর্কিত সকল আপডেট ও নোটিশ পেতে:</p><p>আমাদের ফেসবুক পেজটি ফলো করুন এবং আমাদের ওয়েবসাইট ভিজিট করুন:</p><p>ওয়েবসাইট: manasamondirgoila.com</p><p><br></p>"
    },
    {
      "id": 1,
      "date": "2025-11-18",
      "title": "প্রতি রবিবার সাপ্তাহিক খিচুড়ি প্রসাদ বিতরণ ",
      "text": "শ্রী শ্রী মা মনসা মন্দিরে প্রতি রবিবার সাপ্তাহিক খিচুড়ি প্রসাদ বিতরণ করা হচ্ছে সবাইকে খিচুড়ি প্রসাদ গ্রহণ করার জন্য আমন্ত্রিত। প্রসাদ বিতরণে অনুদান অথবা সহযোগিতা করতে আগ্রহীরা আমাদের নির্বাহী কমিটির সঙ্গে যোগাযোগ করতে অনুরোধ করা হলো।\nমা মনসার কৃপা সকলের ওপর বর্ষিত হোক।\n\nআদেশক্রমে: কবি বিজয় গুপ্তের স্মৃতি রক্ষা, শ্রী শ্রী মা মনসা মন্দির সংরক্ষণ ও উন্নয়ন কমিটি।"
    },
    {
      "id": 2,
      "date": "2026-03-22",
      "title": "কার্যকারী কমিটির জরুরি মিটিং ও সাপ্তাহিক প্রসাদ বিতরণ",
      "text": "কার্যকারী কমিটির সকল সদস্যবৃন্দের অবগতির জন্য জানানো যাচ্ছে যে, আগামী ২২/০৩/২০২৬ তারিখ সকাল ১০ টার সময়ে একটি জরুরি মিটিং অনুষ্ঠিত হবে।\n\nউক্ত মিটিং শেষে নিয়মিত সাপ্তাহিক প্রসাদ বিতরণ অনুষ্ঠিত হবে।\n\nঅতএব, সংশ্লিষ্ট সকলকে যথাসময়ে উপস্থিত থাকার জন্য বিশেষভাবে অনুরোধ করা হলো।\nমা মনসার অশেষ কৃপা সকলের ওপর বর্ষিত হোক।\n\n📍 স্থান: শ্রী শ্রী মা মনসা মন্দির প্রাঙ্গন  \n🕒 সময়: সকাল ১০ টা\n📅 তারিখ: ২২/০৩/২০২৬\n\nঅনুরোধক্রমে,\nকবি বিজয় গুপ্তের স্মৃতি রক্ষা, শ্রী শ্রী মা মনসা মন্দির সংরক্ষণ ও উন্নয়ন কমিটি।"
    },
    {
      "id": 3,
      "date": "2026-04-14",
      "title": "বাংলা নববর্ষ ১৪৩৩ উপলক্ষে প্রথমবারের মতো অনুষ্ঠিত হচ্ছে কবি বিজয় গুপ্ত মেলা",
      "text": "বর্ষবরণের আনন্দে চলে আসুন \"কবি বিজয় গুপ্ত মেলায়\"! \n\nবাংলা নববর্ষ ১৪৩৩ ও পহেলা বৈশাখ উপলক্ষে আগামী ১৪ই এপ্রিল গৈলা শ্রীশ্রী মা-মনসা মন্দির প্রাঙ্গণে প্রথমবারের মতো অনুষ্ঠিত হতে যাচ্ছে দিনব্যাপী মেলা ও মনোজ্ঞ সাংস্কৃতিক অনুষ্ঠান।\nএই আয়োজনে আপনি সপরিবারে সাদরে আমন্ত্রিত। আসুন, একসাথে উদ্‌যাপন করি বাঙালির প্রাণের উৎসব! ✨\n\nতারিখ: ১লা বৈশাখ, ১৪৩৩ বঙ্গাব্দ ( ১৪ এপ্রিল, ২০২৬)\nস্থান: মা মনসা মন্দির প্রাঙ্গনে, গৈলা\nমেলা: সকাল ৮টা থেকে রাত ৮টা\nসাংস্কৃতিক অনুষ্ঠান: বিকাল ৩টা থেকে রাত ৮টা \n\nমা মনসা সকলের মঙ্গল করুন। “জয় মা-মনসা” \n\nআয়োজন ও সার্বিক তত্ত্বাবধানে:\nকবি বিজয় গুপ্তের স্মৃতিরক্ষা, শ্রীশ্রী মা-মনসা মন্দির সংরক্ষণ ও উন্নয়ন কমিটি।\nগৈলা, আগৈলঝাড়া, বরিশাল।\n\n📌 মন্দির সম্পর্কিত সকল আপডেট ও নোটিশ পেতে:\nআমাদের ফেসবুক পেজটি ফলো করুন এবং ভিজিট করুন আমাদের ওয়েবসাইট:\n🌐 https://manasamondirgoila.vercel.app/"
    },
    {
      "id": 4,
      "date": "2026-08-01",
      "title": "গৈলার ঐতিহ্যবাহী শ্রীশ্রী মা-মনসা মন্দিরের বাৎসরিক পূজা ও উৎসব-২০২৬ ",
      "text": "<p>মধ্যযুগের প্রখ্যাত কবি বিজয় গুপ্ত প্রতিষ্ঠিত গৈলার ঐতিহ্যবাহী শ্রীশ্রী মা-মনসা মন্দিরের বাৎসরিক পূজা ও উৎসব-২০২৬ অনুষ্ঠিত হতে যাচ্ছে। কবি বিজয় গুপ্তের স্মৃতি রক্ষা ও মা-মনসা মন্দির সংরক্ষণ ও উন্নয়ন কমিটি’-এর উদ্যোগে আয়োজিত এই পবিত্র উৎসবে আপনাদের সকলকে সবান্ধবে আমন্ত্রণ জানাচ্ছি।</p><p><br></p><p><strong>বিস্তারিত সময়সূচী:</strong></p><p><br></p><ul><li>রায়ানি গান: ১৩, ১৪, ১৫ আগস্ট ২০২৬ (রোজ বৃহস্পতি, শুক্র, শনিবার) ২৭, ২৮ ও ২৯ শ্রাবণ ১৪৩৩ বঙ্গাব্দ।</li><li>মূল পূজা: ১৮ আগস্ট ২০২৬ (রোজ মঙ্গলবার) ৩২ শ্রাবণ ১৪৩৩ বঙ্গাব্দ।</li><li>স্থান: মনসা মন্দির প্রাঙ্গন, গৈলা, আগৈলঝাড়া, বরিশাল।</li></ul><p><br></p><p>আপনাদের অনুদান এই মহৎ ও পবিত্র কাজ সফল করতে অত্যন্ত গুরুত্বপূর্ণ। মন্দির সংরক্ষণ ও উন্নয়নের জন্য আপনার সহায়তার হাত বাড়িয়ে দিন।</p><p>bKash-এর মাধ্যমে অনুদান পাঠাতে (পার্সোনাল একাউন্ট&nbsp;- সেন্ড মানি করুন)</p><p><br></p><p><strong>bKash নম্বর: 01722428334 (Send Money)</strong></p><p><br></p><p>সার্বিক তত্ত্বাবধানে: কবি বিজয় গুপ্তের স্মৃতি রক্ষা, শ্রী শ্রী মা মনসা মন্দির সংরক্ষণ ও উন্নয়ন কমিটি। গৈলা, আগৈলঝাড়া, বরিশাল।</p><p><br></p><p>📌 মন্দির সম্পর্কিত সকল আপডেট ও নোটিশ পেতে: আমাদের ফেসবুক পেজটি ফলো করুন এবং ভিজিট করুন আমাদের ওয়েবসাইট: <a href=\"https://www.manasamondirgoila.com\" target=\"_blank\">manasamondirgoila.com</a></p><p><br></p><p><br></p>"
    }
  ],
  "donations": [
    {
      "id": 1,
      "name": "শুভ কর্মকার ",
      "address": "গৈলা ",
      "type": "সরঞ্জাম/অন্যান্য",
      "amount": "মনসা মন্দির ওয়েবসাইট",
      "date": "",
      "is_hidden": false
    },
    {
      "id": 2,
      "name": "একমি ল্যাবরেটরিস লিমিটেড ",
      "address": "ঢাকা ",
      "type": "নগদ অর্থ",
      "amount": "300,000৳",
      "date": "",
      "is_hidden": false
    }
  ],
  "timings": {
    "morning_puja": "সকাল ৭:০০ - সকাল ৯:৩০",
    "morning_puja_en": "7:00 AM - 9:30 AM",
    "morning_desc": "প্রভাতী নিত্যপূজা, মঙ্গল আরতি ও পুষ্পাঞ্জলি",
    "morning_desc_en": "Morning Puja, Mangal Aarti & Pushpanjali",
    "bhog_time": "দুপুর ১২:০০ - দুপুর ১:৩০",
    "bhog_time_en": "12:00 PM - 1:30 PM",
    "bhog_desc": "মহাপ্রসাদ ও দ্বিপ্রহরিক ভোগ নিবেদন",
    "bhog_desc_en": "Midday Bhog Offering & Sanctum Darshan",
    "sandhya_aarti": "সন্ধ্যা ৬:০০ - রাত ৮:০০",
    "sandhya_aarti_en": "6:00 PM - 8:00 PM",
    "sandhya_desc": "সন্ধ্যা আরতি, ধূপারতি, পদাবলি কীর্তন ও শঙ্খধ্বনি",
    "sandhya_desc_en": "Evening Aarti, Dhoop Aarti, Kirtan & Conch blowing",
    "darshan_note": "প্রতিদিন সাধারণ ভক্ত ও পুণ্যার্থীদের জন্য গর্ভগৃহ দর্শন ও আশীর্বাদ উন্মুক্ত থাকে। বিশেষ তিথিতে সারারাত মায়ের পূজা অনুষ্ঠিত হয়।",
    "darshan_note_en": "Sanctum darshan is open daily for devotees. Special pujas continue through the night on auspicious festivals.",
    "status_override": "auto",
    "special_notice": "আসন্ন শ্রাবণ সংক্রান্তির বাৎসরিক মহোৎসবে দিন-রাত অহোরাত্র পূজা চলবে।"
  },
  "travel": {
    "dhaka_bus": "ঢাকা (গুলিস্তান / সায়েদাবাদ / গাবতলী) হতে পদ্মা সেতু হয়ে বরিশাল বা গৌরনদীগামী বাসে চড়ে গৌরনদী বা আগৈলঝাড়া বাসস্ট্যান্ডে নামুন। সেখান থেকে স্থানীয় ইজিবাইক বা অটোরিকশায় মাত্র ৫-১০ মিনিটে পৌঁছে যাবেন ঐতিহাসিক গৈলা মা মনসা মন্দিরে।",
    "dhaka_bus_en": "From Dhaka (Gulistan / Sayedabad / Gabtoli), take any Barishal/Gournadi bound bus via Padma Bridge. Drop off at Gournadi or Agailjhara bus stand, then take an auto-rickshaw (5-10 minutes) directly to Goila Manasa Temple.",
    "launch_route": "ঢাকা সদরঘাট হতে বিলাসবহুল লঞ্চে বরিশাল নদীবন্দর। সেখান থেকে নথুল্লাবাদ টার্মিনাল হয়ে গৌরনদী/আগৈলঝাড়া এবং সরাসরি গৈলা বাজার।",
    "launch_route_en": "Take a passenger launch from Dhaka Sadarghat to Barishal River Port, then from Nathullabad Bus Terminal take a local bus to Gournadi/Agailjhara and arrive at Goila Bazar.",
    "local_transport": "আগৈলঝাড়া উপজেলা সদর থেকে ৩ কিমি পূর্বে এবং গৌরনদী পৌরসভা থেকে ৫ কিমি পশ্চিমে মন্দিরটি অবস্থিত। স্থানীয় অটোরিকশা, মাহিন্দ্রা ও ভ্যান সার্বক্ষণিক চলাচল করে।",
    "local_transport_en": "Located 3 km east of Agailjhara upazila and 5 km west of Gournadi municipality. Easy auto-rickshaws and vans are available round-the-clock.",
    "helpline_phone": "01717503657",
    "priest_phone": "01735737308",
    "guest_house": "মন্দির চত্বরে দূর-দূরান্তের ভক্তদের বিশ্রাম ও পানীয় জলের সুন্দর সুব্যবস্থা রয়েছে। দূরবর্তী পুণ্যার্থীদের জন্য গৌরনদী ও বরিশালে সুসজ্জিত আবাসিক হোটেল ও সরকারি ডাকবাংলো রয়েছে।",
    "guest_house_en": "Rest areas and drinking water are available inside temple premises. For overnight stays, standard residential hotels and rest houses are nearby in Gournadi and Barishal town.",
    "map_link": "https://maps.google.com/?q=22.9555,90.2215"
  },
  "mantras": [
    {
      "id": 1,
      "title": "মা মনসার প্রণাম মন্ত্র",
      "title_en": "Devi Manasa Pranam Mantra",
      "sanskrit": "ওঁ আস্তীকস্য মুনের্মাতা ভগিনী বাসুকেস্তথা ।\nজরৎকারুমুনেঃ পত্নী মনসাদেবী নমোহস্তুতে ॥",
      "pronunciation": "ওঁ আস্তীকস্য মুনের্মাতা ভগিনী বাসুকেস্তথা। জরৎকারুমুনেঃ পত্নী মনসাদেবী নমোহস্তুতে॥",
      "meaning": "হে মুনি আস্তীকের জননী, নাগরাজ বাসুকির ভগিনী এবং তপস্বী জরৎকারু মুনির পরম ধার্মিক পত্নী দেবি মনসা, আপনাকে আমার ভক্তিপূর্ণ শতকোটি প্রণাম।",
      "meaning_en": "O Mother of sage Astika, sister of serpent king Vasuki, and devoted consort of sage Jaratkaru, salutations unto Goddess Manasa.",
      "category": "প্রণাম",
      "category_en": "Pranam"
    },
    {
      "id": 2,
      "title": "মা মনসার ধ্যান মন্ত্র",
      "title_en": "Devi Manasa Dhyana Mantra",
      "sanskrit": "ওঁ হেমগৌরাং রত্নভূষাং শুভ্রবস্ত্রাবৃতাং সতীম্ ।\nকোটিচন্দ্রপ্রভাং দেবীং নাগযজ্ঞোপবীতিনীম্ ॥",
      "pronunciation": "ওঁ হেমগৌরাং রত্নভূষাং শুভ্রবস্ত্রাবৃতাং সতীম্। কোটিচন্দ্রপ্রভাং দেবীং নাগযজ্ঞোপবীতিনীম্॥",
      "meaning": "স্বর্ণকান্তিযুক্তা, বহুমূল্য রত্নালঙ্কারে সজ্জিতা, শুভ্র বসনা, কোটি চন্দ্রের জ্যোতিসম্পন্না এবং পবিত্র নাগ-যজ্ঞোপবীতধারিণী শ্রী শ্রী মা মনসাকে আমি অন্তরে ধ্যান করি।",
      "meaning_en": "I meditate upon Goddess Manasa, whose complexion is like molten gold, adorned with celestial jewels, clad in pure white, luminous like millions of moons, and wearing a sacred serpent sacred thread.",
      "category": "ধ্যান",
      "category_en": "Dhyana"
    },
    {
      "id": 3,
      "title": "কবি বিজয় গুপ্তের অমর পদ্মপুরাণ পদাবলি",
      "title_en": "Immortal Verse from Padma Purana by Poet Bijoy Gupta",
      "sanskrit": "গৈলা নামে গ্রামখানি সর্বগুণে ধান্দা ।\nতাহাতে বসতি করে লোক পঞ্চনন্দা ॥\nপশ্চিমে পশ্চিমে নদী মধ্যে ফুল্লশ্রী ।\nতাহাতে বিজয় গুপ্ত রচে দেবীর চরিত্রী ॥",
      "pronunciation": "গৈলা নামে গ্রামখানি সর্বগুণে ধান্দা। তাহাতে বসতি করে লোক পঞ্চনন্দা। পশ্চিমে পশ্চিমে নদী মধ্যে ফুল্লশ্রী। তাহাতে বিজয় গুপ্ত রচে দেবীর চরিত্রী॥",
      "meaning": "মহাকবি বিজয় গুপ্ত তাঁর অমর পদ্মাপুরাণ (মনসামঙ্গল) কাব্যের সূচনায় নিজ জন্মভূমি পুণ্যতোয়া গৈলা (তৎকালীন ফুল্লশ্রী) গ্রামের অনুপম প্রাকৃতিক রূপ ও দেবী মনসার মহিমা কীর্তন করেছেন।",
      "meaning_en": "Poet Bijoy Gupta recorded the beauty and spiritual legacy of his birthplace Goila (historic Phullashri) as he commenced composing the epic Padma Purana by divine decree.",
      "category": "পদ্মপুরাণ",
      "category_en": "Padma Purana"
    },
    {
      "id": 4,
      "title": "আস্তীক মুনির নাগভয় নিবারক মন্ত্র",
      "title_en": "Sage Astika Fear-dispelling Mantra",
      "sanskrit": "সর্পাপসর্প ভদ্রং তে গচ্ছ সর্প মহাবিষ ।\nজনমেজয়স্য যজ্ঞানান্তে আস্তীকবচনং স্মর ॥",
      "pronunciation": "সর্পাপসর্প ভদ্রং তে গচ্ছ সর্প মহাবিষ। জনমেজয়স্য যজ্ঞানান্তে আস্তীকবচনং স্মর॥",
      "meaning": "হে বিষধর সর্পগণ, তোমাদের কল্যাণ হোক, তোমরা নির্বিঘ্নে প্রস্থান করো। রাজা জনমেজয়ের সর্পযজ্ঞ অবসানে মহর্ষি আস্তীকের পবিত্র সত্যবচন স্মরণ করো। ভক্তদের বিশ্বাস, এই শ্লোক স্মরণে সর্বপ্রকার ভয় ও বিঘ্ন দূরীভূত হয়।",
      "meaning_en": "Depart, O serpents, may peace be upon you. Remember the sacred vow of Sage Astika at the conclusion of King Janamejaya's sacrifice.",
      "category": "রক্ষা মন্ত্র",
      "category_en": "Protection"
    }
  ]
};

// --- Supabase Configuration ---
const SUPABASE_URL = 'https://mvtuzkwslueesgszhcmm.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_KYDbVGr_25UA3jn9zfkC9g_L5TFDGoD';

// Initialize Supabase Client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Default 4 Sacred Episodes of Royani Gaan
const DEFAULT_ROYANI_PALAS = [
  {
    id: 1,
    titleBn: 'প্রথম পর্ব: দেবী মনসার জন্ম ও মর্ত্যে পূজার আকাঙ্ক্ষা',
    titleEn: 'Episode 1: Emergence of Devi Manasa & Desire for Worship',
    tagBn: 'স্বর্গ ও মর্ত্যের মেলবন্ধন',
    tagEn: 'Heavenly Origins',
    verseBn: `পূর্বেতে বন্দনা করি দেব পদ্মনাভ।\nযাহার নাভিকমলে ব্রহ্মার প্রভাব ॥\nদক্ষিণ চরণে বন্দো গৈলা যে নগর।\nমনসা মঙ্গল কবি বিজয় গুপ্ত সুর ॥`,
    storyBn: `মধ্যযুগের অমর কবি বিজয় গুপ্ত তাঁর কাব্যে বর্ণনা করেছেন কীভাবে শিবের তেজ ও পদ্মবনে দেবী মনসার অলৌকিক আবির্ভাব ঘটে। দেবলোকে স্থান পেলেও মর্ত্যভূমিতে ভক্তবৃন্দের অকৃত্রিম ভক্তি ও পূজাই দেবীর মহিমাকে পূর্ণতা দান করে। গৈলার এই পবিত্র মন্দির সেই ভক্তিধারার আদি ও জাগ্রত সাক্ষী।`,
    storyEn: `Poet Bijoy Gupta depicts the divine emergence of Devi Manasa from the lotus lake through the spiritual energy of Lord Shiva. Though revered in the heavens, the Goddess desires worship among mortals on earth, beginning the historic narrative in Bengal.`
  },
  {
    id: 2,
    titleBn: 'দ্বিতীয় পর্ব: শিবভক্ত চাঁদ সওদাগরের সংঘাত ও সপ্তডিঙা নিমজ্জন',
    titleEn: 'Episode 2: Conflict with Chand Sadagar & Sinking of Seven Ships',
    tagBn: 'অহংকার বনাম দেবীর পরীক্ষা',
    tagEn: 'Ego vs Divine Test',
    verseBn: `শিবের পরম ভক্ত চাঁদ সওদাগর।\nমনসার চরণে কভু না নোয়ায় শির ॥\nকালিদহে ডুবিল সপ্ত মধুকর তরণী।\nচারিদেকে হাহাকার শুনি নিদারুণ বাণী ॥`,
    storyBn: `চম্পকনগরের অধিপতি শিবের একনিষ্ঠ ভক্ত চাঁদ সওদাগর দেবী মনসাকে পূজা করতে অস্বীকার করেন। দেবীর মায়ায় কালিদহ সাগরে তাঁর বাণিজ্যের সাতটি জাহাজ (সপ্তডিঙা মধুকর) অতল জলে নিমজ্জিত হয় এবং ছয় পুত্র প্রাণ হারায়। তবুও অটল চাঁদ সওদাগর মাথা নোয়ান না।`,
    storyEn: `Chand Sadagar, a staunch devotee of Lord Shiva, adamantly refuses to worship Manasa. Through divine trials, his seven merchant vessels sink in the Kalidaha sea and his sons perish, yet his resolve remains unbroken.`
  },
  {
    id: 3,
    titleBn: 'তৃতীয় পর্ব: লখিন্দর-বেহুলার অমর প্রেম ও সাঁতালির লোহার বাসর',
    titleEn: 'Episode 3: Wedding of Lakhindar-Behula & Iron Chamber',
    tagBn: 'অমর প্রেম ও বিষের দংশন',
    tagEn: 'Sacred Love & Destiny',
    verseBn: `সাঁতালী পর্বতে বাড়ি লোহার বাসর।\nছিদ্র দিয়া প্রবেশিল কালনাগিনী ঘোর ॥\nনিদ্রায় লখিন্দর ছটফট অঙ্গ জ্বলে।\nবেহুলা জাগিয়া দেখে স্বামী পড়ে ভূমিতলে ॥`,
    storyBn: `সর্পদংশন এড়াতে সাঁতালী পর্বতের চূড়ায় নিশ্ছিদ্র লোহার বাসর ঘর নির্মাণ করা হয়। কিন্তু বিধিলিপি অলঙ্ঘ্য—সূক্ষ্ম এক ছিদ্রপথে কালনাগিনী প্রবেশ করে লখিন্দরকে দংশন করে। সদ্য বিবাহিতা বেহুলা শোকে মুহ্যমান না হয়ে মৃত স্বামীকে বাঁচাতে এক অভূতপূর্ব অলৌকিক সংকল্প গ্রহণ করে।`,
    storyEn: `To avert the snakebite prophecy, an impenetrable iron bridal chamber is erected. Yet destiny unfolds as Kalnagini slips through a needle-thin crevice to bite Lakhindar. Newlywed Behula undertakes a legendary vow to resurrect her husband.`
  },
  {
    id: 4,
    titleBn: 'চতুর্থ পর্ব: কলার ভেলায় বেহুলার দেবযাত্রা ও চাঁদ সওদাগরের মনসাপূজা',
    titleEn: 'Episode 4: Behula\'s Heavenly Voyage & Historic Worship',
    tagBn: 'সতীত্বের জয় ও ভক্তির প্রতিষ্ঠা',
    tagEn: 'Triumph of Devotion',
    verseBn: `কলার মান্দাসে ভাসে সতী রূপবতী।\nস্বর্গে গিয়া নৃত্য করে সাধ্বী মহামতী ॥\nতুষ্ট হইয়া হর-গৌরী দিলেন বরদান।\nসপ্ত ভাই জীয়ন্ত হৈল ফিরিল ধনমান ॥`,
    storyBn: `গঙ্গাবক্ষে কলার মান্দাসে মৃত লখিন্দরকে কোলে নিয়ে বেহুলা অন্তহীন বিপদ অতিক্রম করে স্বর্গে দেবতাদের সভায় পৌঁছান। তাঁর অনুপম নৃত্য ও সতীধর্মে মহাদেব ও মনসাদেবী প্রসন্ন হন। লখিন্দর জীবন ফিরে পান, নিমজ্জিত জাহাজ ভেসে ওঠে, এবং চাঁদ সওদাগর বামহস্তে দেবীর চরণে পদ্মফুল অর্পণ করে মনসাপূজা প্রবর্তন করেন।`,
    storyEn: `Floating down the river on a banana raft with Lakhindar\'s body, Behula endures perilous trials to reach Indra\'s celestial court. Her dance and unwavering devotion move Shiva and Manasa; life is restored to Lakhindar, and Chand Sadagar offers worship with a lotus flower.`
  }
];

// Default Temple History & Heritage Content
const DEFAULT_TEMPLE_HISTORY = {
  p1: "বরিশাল জেলার আগৈলঝাড়া উপজেলার গৈলা (তৎকালীন ফুল্লশ্রী) গ্রামে অবস্থিত পঞ্চশতবর্ষীয় ঐতিহাসিক পুণ্যতোয়া শ্রী শ্রী মা মনসা মন্দির। পঞ্চদশ শতকের শেষ ভাগে (১৪৯৪ খ্রিষ্টাব্দ / ১৪১৬ শকাব্দে) মধ্যযুগের অন্যতম শ্রেষ্ঠ বাঙালি কবি বিজয় গুপ্ত স্বয়ং মা মনসার স্বপ্নাদেশে এই মন্দিরটি প্রতিষ্ঠা করেন।",
  p2: "এখানেই রচিত হয়েছিল বাংলা সাহিত্যের অমূল্য সম্পদ মহাকাব্য 'পদ্মাপুরাণ' বা 'মনসামঙ্গল'। ৫৩০ বছরেরও অধিক সময় ধরে এই মন্দিরটি অবিভক্ত বাংলা তথা সমগ্র ভারতীয় উপমহাদেশের ভক্তদের এক পরম জাগ্রত তীর্থভূমি হিসেবে পরিগণিত হয়ে আসছে।",
  founder: "মহাকবি বিজয় গুপ্ত",
  established: "১৪৯৪ খ্রিষ্টাব্দ (১৪১৬ শকাব্দ)",
  shloka: "গৈলা নামে গ্রামখানি সর্বগুণে ধান্দা ।\nতাহাতে বসতি করে লোক পঞ্চনন্দা ॥\nপশ্চিমে পশ্চিমে নদী মধ্যে ফুল্লশ্রী ।\nতাহাতে বিজয় গুপ্ত রচে দেবীর চরিত্রী ॥",
  shlokaMeaning: "মহাকবি বিজয় গুপ্ত তাঁর রচিত পদ্মাপুরাণের সূচনায় নিজ জন্মভূমি গৈলা গ্রামের মহিমা ও দেবী মনসার কৃপাবাণী লিপিবদ্ধ করেছেন।"
};

// Default Authentic Devotee Donation Receipts (Synced Universally)
const DEFAULT_DONATION_RECEIPTS = [
  {
    id: 'rec_1791218450819',
    receiptNo: 'MMG-REC-700554',
    name: 'Arpon Chakraborty',
    phone: '01794240669',
    gotra: '',
    amount: '500',
    method: 'bKash',
    trxId: 'Fivjiii',
    purpose: 'সাধারণ প্রণামী ও সেবা',
    date: '2026-10-05',
    amountWords: 'পাঁচ শত টাকা মাত্র',
    timestamp: '2026-10-05T16:40:50.820Z'
  },
  {
    id: 'rec_1791218450820',
    receiptNo: 'MMG-REC-747155',
    name: 'Arpon Chakraborty',
    phone: '01794240669',
    gotra: 'Hdhd',
    amount: '500',
    method: 'bKash',
    trxId: 'Hsheeh',
    purpose: 'সাধারণ প্রণামী ও সেবা',
    date: '2026-10-05',
    amountWords: 'পাঁচ শত টাকা মাত্র',
    timestamp: '2026-10-05T16:42:10.000Z'
  },
  {
    id: 'rec_1791218450821',
    receiptNo: 'MMG-REC-337785',
    name: 'sds',
    phone: 'sfsfsf',
    gotra: 'sfsfs',
    amount: '5',
    method: 'bKash',
    trxId: 'sfsfsf',
    purpose: 'সাধারণ প্রণামী ও সেবা',
    date: '2026-10-05',
    amountWords: 'পাঁচ টাকা মাত্র',
    timestamp: '2026-10-05T16:45:00.000Z'
  },
  {
    id: 'rec_1791218450822',
    receiptNo: 'MMG-REC-2024-1001',
    name: 'শ্রী অমিয় চক্রবর্তী',
    phone: '01711223344',
    gotra: 'কাশ্যপ',
    amount: '5000',
    method: 'bKash',
    trxId: 'BK9X8721YZ',
    purpose: 'বাৎসরিক পূজা ও ভক্তিসেবা তহবিল',
    date: '2026-10-04',
    amountWords: 'পাঁচ হাজার টাকা মাত্র',
    timestamp: '2026-10-04T10:00:00.000Z'
  },
  {
    id: 'rec_1791218450823',
    receiptNo: 'MMG-REC-2024-1002',
    name: 'শ্রীমতী সুনীতা রায়',
    phone: '01819876543',
    gotra: 'ভারদ্বাজ',
    amount: '2500',
    method: 'Nagad',
    trxId: 'NG7721A04B',
    purpose: 'নিত্য সেবা ও প্রসাদ বিতরণ',
    date: '2026-10-04',
    amountWords: 'দুই হাজার পাঁচ শত টাকা মাত্র',
    timestamp: '2026-10-04T11:30:00.000Z'
  },
  {
    id: 'rec_1791218450824',
    receiptNo: 'MMG-REC-2024-1003',
    name: 'শ্রী বিজন কুমার সাহা',
    phone: '01912345678',
    gotra: 'শাণ্ডিল্য',
    amount: '10000',
    method: 'মন্দির অফিসে সরাসরি নগদ (Cash)',
    trxId: 'CASH-COUNTER-09',
    purpose: 'মন্দির উন্নয়ন ও নাটমন্দির সংস্কার',
    date: '2026-10-03',
    amountWords: 'দশ হাজার টাকা মাত্র',
    timestamp: '2026-10-03T09:15:00.000Z'
  }
];

const toBengaliDigits = (num) => {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/[0-9]/g, (d) => bnDigits[d]);
};

const formatReceiptDateBn = (dateStr) => {
  if (!dateStr) return toBengaliDigits(new Date().toISOString().split('T')[0]);
  try {
    const parts = String(dateStr).split('T')[0].split('-');
    if (parts.length === 3) {
      const monthsBn = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
      const mIdx = parseInt(parts[1], 10) - 1;
      const mName = monthsBn[mIdx] || parts[1];
      return `${toBengaliDigits(parseInt(parts[2], 10))} ${mName} ${toBengaliDigits(parts[0])}`;
    }
  } catch (e) {}
  return toBengaliDigits(dateStr);
};

// High-Fidelity Official Sacred Receipt Printing Helper
const printReceiptDirectly = (receipt, currentLang = 'bn') => {
  if (!receipt) return;
  const isBn = currentLang === 'bn';
  const printWindow = window.open('', '_blank', 'width=880,height=980');
  if (!printWindow) {
    window.print();
    return;
  }

  const amtNum = typeof receipt.amount === 'number' ? receipt.amount : parseFloat(receipt.amount || 0);
  const amtFormatted = isBn ? toBengaliDigits(amtNum.toLocaleString('en-US')) : amtNum.toLocaleString();
  const dateFormatted = formatReceiptDateBn(receipt.date || receipt.timestamp);
  const rawDate = receipt.date || (receipt.timestamp ? new Date(receipt.timestamp).toISOString().split('T')[0] : '');
  const amtWords = receipt.amountWords || (isBn ? amountInBengaliWords(amtNum) : amountInEnglishWords(amtNum));

  const html = `<!DOCTYPE html>
<html lang="${isBn ? 'bn' : 'en'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>পবিত্র প্রণামী স্মারক রশিদ - ${receipt.receiptNo}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Sans+Bengali:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body, p, span, td, th, div, label {
      font-family: 'Noto Sans Bengali', 'Hind Siliguri', sans-serif !important;
      font-variant-numeric: normal !important;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
    }
    body {
      background: #faf7f2;
      color: #1c1917;
      padding: 24px 16px;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    .print-actions {
      max-width: 780px;
      margin: 0 auto 16px auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }
    .print-btn {
      background: linear-gradient(135deg, #d97706, #b45309);
      color: #ffffff;
      border: none;
      padding: 9px 22px;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(180, 83, 9, 0.25);
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .print-btn:hover { background: linear-gradient(135deg, #b45309, #92400e); }
    .close-btn {
      background: #f5f5f4;
      color: #57534e;
      border: 1px solid #d6d3d1;
      padding: 8px 18px;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
    }
    .receipt-box {
      max-width: 780px;
      margin: 0 auto;
      background: #ffffff;
      border: 3px double #b45309;
      outline: 1.5px solid #d97706;
      outline-offset: -8px;
      border-radius: 18px;
      padding: 34px 38px 28px 38px;
      position: relative;
      box-shadow: 0 10px 30px rgba(120, 53, 15, 0.08);
      background-image: radial-gradient(#fffdf9 0%, #ffffff 100%);
    }
    .watermark-container {
      position: absolute;
      top: 52%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      user-select: none;
      z-index: 0;
      opacity: 0.20; text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    .watermark-ring {
      width: 360px;
      height: 360px;
      border: 4px dashed #b45309;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.75;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    .watermark-symbol {
      font-family: 'Noto Serif Bengali', 'Hind Siliguri', serif;
      font-size: 320px;
      font-weight: 900;
      color: #b45309;
      line-height: 0.85;
      text-shadow: 0 0 45px rgba(217, 119, 6, 0.5);
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    .corner {
      position: absolute;
      font-size: 14px;
      color: #d97706;
      line-height: 1;
      user-select: none;
    }
    .c-tl { top: 12px; left: 14px; }
    .c-tr { top: 12px; right: 14px; }
    .c-bl { bottom: 12px; left: 14px; }
    .c-br { bottom: 12px; right: 14px; }
    .receipt-content { position: relative; z-index: 2; }
    .header {
      text-align: center;
      border-bottom: 2px dashed #f59e0b;
      padding-bottom: 16px;
      margin-bottom: 16px;
    }
    .temple-crest {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
      border: 2.5px solid #d97706;
      color: #b45309;
      font-size: 32px;
      font-family: 'Noto Serif Bengali', serif;
      font-weight: 900;
      margin-bottom: 8px;
      box-shadow: 0 4px 14px rgba(217, 119, 6, 0.22);
    }
    .header h1 {
      font-family: 'Noto Serif Bengali', serif;
      font-size: 27px;
      color: #7c2d12;
      font-weight: 900;
      letter-spacing: 0.3px;
      line-height: 1.25;
      margin-bottom: 4px;
    }
    .header .heritage-sub {
      font-family: 'Noto Sans Bengali', 'Hind Siliguri', sans-serif !important;
      font-size: 13px;
      color: #451a03;
      font-weight: 600;
      margin-bottom: 4px;
      white-space: nowrap;
      letter-spacing: 0.2px;
    }
    .header .contact-sub {
      font-family: 'Noto Sans Bengali', 'Hind Siliguri', sans-serif !important;
      font-size: 12px;
      color: #78716c;
      margin-bottom: 8px;
      white-space: nowrap;
      letter-spacing: 0.2px;
    }
    .sloka-pill {
      font-family: 'Noto Serif Bengali', serif;
      font-size: 13.5px;
      font-weight: 700;
      color: #9a3412;
      background: #fef3c7;
      display: inline-block;
      padding: 4px 18px;
      border-radius: 9999px;
      border: 1px solid #fcd34d;
      margin-bottom: 8px;
    }
    .badge-bar {
      background: linear-gradient(90deg, #b45309, #d97706, #b45309);
      color: #ffffff;
      font-weight: 700;
      font-size: 12px;
      letter-spacing: 0.5px;
      padding: 5px 20px;
      border-radius: 9999px;
      display: inline-block;
      box-shadow: 0 2px 6px rgba(180, 83, 9, 0.2);
    }
    .meta-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(254, 243, 199, 0.65) !important;
      border: 1px solid rgba(217, 119, 6, 0.35);
      padding: 10px 16px;
      border-radius: 12px;
      margin-bottom: 16px;
      font-size: 13.5px;
    }
    .meta-row .rec-no {
      font-family: monospace, 'Courier New', Courier;
      font-weight: 800;
      color: #78350f;
      font-size: 15px;
      letter-spacing: 0.5px;
    }
    .meta-row .rec-date {
      color: #44403c;
      font-weight: 700;
    }
    .info-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 16px;
      background: transparent !important;
      border-radius: 10px;
      overflow: hidden;
    }
    .info-table td {
      padding: 9px 12px;
      border-bottom: 1px solid rgba(217, 119, 6, 0.15) !important;
      font-size: 13.5px;
      vertical-align: middle;
      background: transparent !important;
    }
    .info-table tr:nth-child(even) td { background: rgba(254, 243, 199, 0.28) !important; }
    .info-table td.label {
      width: 32%;
      color: #78350f;
      font-weight: 600;
    }
    .info-table td.val {
      color: #1c1917;
      font-weight: 700;
    }
    .amount-box {
      background: linear-gradient(135deg, rgba(255, 251, 235, 0.82) 0%, rgba(254, 243, 199, 0.82) 45%, rgba(254, 215, 170, 0.82) 100%) !important;
      border: 2px solid #d97706;
      border-radius: 14px;
      padding: 14px 20px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      box-shadow: 0 2px 8px rgba(217, 119, 6, 0.1);
    }
    .amount-lbl {
      font-size: 11.5px;
      font-weight: 800;
      color: #92400e;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .amount-words {
      font-size: 13.5px;
      color: #78350f;
      font-weight: 700;
      margin-top: 4px;
      font-family: 'Noto Serif Bengali', 'Hind Siliguri', serif;
    }
    .amount-val {
      font-size: 28px;
      font-weight: 900;
      color: #7c2d12;
      font-family: 'Noto Serif Bengali', 'Hind Siliguri', serif;
      letter-spacing: 0.5px;
      white-space: nowrap;
      text-shadow: 0 1px 2px rgba(124, 45, 18, 0.15);
    }
    .auth-banner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
      padding: 9px 16px;
      border-radius: 10px;
      font-size: 12.5px;
      color: #065f46;
      font-weight: 700;
      margin-bottom: 24px;
    }
    .auth-banner .seal-tag {
      font-family: monospace;
      background: #d1fae5;
      border: 1px solid #6ee7b7;
      padding: 2px 8px;
      border-radius: 6px;
      font-size: 11px;
      color: #047857;
      letter-spacing: 0.5px;
    }
    .seal-wrap {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-top: 18px;
      margin-bottom: 12px;
    }
    .sig-col {
      text-align: center;
      width: 200px;
    }
    .sig-top-space { height: 36px; }
    .sig-line {
      border-top: 1.5px dashed #78716c;
      padding-top: 6px;
      font-size: 12px;
      font-weight: 600;
      color: #44403c;
      line-height: 1.35;
    }
    .stamp-circle {
      width: 96px;
      height: 96px;
      border: 2px dashed #dc2626;
      outline: 1px solid #dc2626;
      outline-offset: -3px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #dc2626;
      font-size: 9px;
      font-weight: 800;
      text-align: center;
      padding: 4px;
      transform: rotate(-6deg);
      line-height: 1.25;
      background: rgba(254, 242, 242, 0.35);
      box-shadow: 0 0 10px rgba(220, 38, 38, 0.08);
      user-select: none;
    }
    .stamp-circle .stamp-head { font-size: 8.5px; font-weight: 800; letter-spacing: 0.25px; }
    .stamp-circle .stamp-mid { font-size: 12px; font-weight: 900; margin: 1px 0; color: #b91c1c; }
    .stamp-circle .stamp-foot { font-size: 8px; font-weight: 700; }
    .blessing-foot {
      text-align: center;
      font-size: 12px;
      color: #78716c;
      font-family: 'Noto Serif Bengali', serif;
      font-style: italic;
      margin-top: 16px;
      border-top: 1px solid #e7e5e4;
      padding-top: 10px;
      line-height: 1.4;
    }
    .site-tag {
      text-align: center;
      font-size: 11px;
      color: #a8a29e;
      margin-top: 4px;
    }
    @media print {
      body { padding: 0 !important; background: #ffffff !important; }
      .print-actions { display: none !important; }
      .receipt-box {
        box-shadow: none !important;
        border: 3px double #b45309 !important;
        max-width: 100% !important;
        margin: 0 auto !important;
        page-break-inside: avoid !important;
      }
      .watermark-container {
        opacity: 0.12 !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      .watermark-symbol {
        color: #b45309 !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      .watermark-ring {
        border-color: #b45309 !important;
        opacity: 0.6 !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      @page { size: A4 portrait; margin: 10mm 12mm; }
    }
  </style>
</head>
<body>
  <div class="print-actions">
    <button class="print-btn" onclick="window.print()">
      🖨️ প্রিন্ট / PDF সংরক্ষণ করুন
    </button>
    <button class="close-btn" onclick="window.close()">
      ✕ বন্ধ করুন
    </button>
  </div>

  <div class="receipt-box">
    <span class="corner c-tl">✦</span>
    <span class="corner c-tr">✦</span>
    <span class="corner c-bl">✦</span>
    <span class="corner c-br">✦</span>

    <div class="watermark-container">
      <div class="watermark-ring"></div>
      <div class="watermark-symbol">ॐ</div>
    </div>

    <div class="receipt-content">
      <div class="header">
        <div class="temple-crest">ॐ</div>
        <h1>শ্রী শ্রী মা মনসা মন্দির, গৈলা</h1>
        <p class="heritage-sub">মহাকবি বিজয় গুপ্ত প্রতিষ্ঠিত ঐতিহাসিক মহাপবিত্র তীর্থস্থান • স্থাপিত:&nbsp;১৪৯৪&nbsp;খ্রিষ্টাব্দ&nbsp;(১৪১৬&nbsp;শকাব্দ)</p>
        <p class="contact-sub">গৈলা, আগৈলঝাড়া, বরিশাল, বাংলাদেশ • মোবাইল:&nbsp;০১৭২৭০৭৫২৫৪,&nbsp;০১৭১২৯৪০৭১৬</p>
        <div>
          <div class="sloka-pill">ওঁ হ্রীং শ্রীং ক্লীং ঐং মনসাদেব্যৈ নমঃ</div>
        </div>
        <div>
          <span class="badge-bar">✦ পবিত্র স্মারক প্রণামী রশিদ (OFFICIAL DONATION RECEIPT) ✦</span>
        </div>
      </div>

      <div class="meta-row">
        <div>
          <span style="color:#78716c;">রশিদ নং:</span>
          <span class="rec-no">${receipt.receiptNo}</span>
        </div>
        <div>
          <span style="color:#78716c;">তারিখ:</span>
          <span class="rec-date">${dateFormatted}${rawDate && rawDate !== dateFormatted ? ' (' + rawDate + ')' : ''}</span>
        </div>
      </div>

      <table class="info-table">
        <tr>
          <td class="label">পুণ্যার্থী / দাতার নাম:</td>
          <td class="val">${receipt.name}</td>
        </tr>
        ${receipt.gotra ? `<tr><td class="label">গোত্র (Lineage):</td><td class="val">${receipt.gotra}</td></tr>` : ''}
        ${receipt.phone ? `<tr><td class="label">মোবাইল নম্বর:</td><td class="val">${toBengaliDigits(receipt.phone)}</td></tr>` : ''}
        ${receipt.address ? `<tr><td class="label">ঠিকানা / বাসস্থান:</td><td class="val">${receipt.address}</td></tr>` : ''}
        <tr>
          <td class="label">দানের খাত / উদ্দেশ্য:</td>
          <td class="val">${receipt.purpose || 'শ্রী শ্রী মা মনসা মন্দির সাধারণ ভক্তিসেবা ও পূজা তহবিল'}</td>
        </tr>
        <tr>
          <td class="label">প্রদানের মাধ্যম ও TrxID:</td>
          <td class="val">${receipt.method} ${receipt.trxId ? '(TrxID: ' + receipt.trxId + ')' : ''}</td>
        </tr>
      </table>

      <div class="amount-box">
        <div>
          <div class="amount-lbl">গৃহীত প্রণামীর পরিমাণ (Donation Amount)</div>
          <div class="amount-words">কথায়: ${amtWords}</div>
        </div>
        <div class="amount-val">৳ ${amtFormatted}/-</div>
      </div>

      <div class="auth-banner">
        <span>✓ শ্রী শ্রী মা মনসা মন্দির পুণ্য তহবিলে গৃহীত, নিবন্ধিত ও সত্যায়িত</span>
        <span class="seal-tag">SEAL-VERIFIED</span>
      </div>

      <div class="seal-wrap">
        <div class="sig-col">
          <div class="sig-top-space"></div>
          <div class="sig-line">
            ${receipt.issuedBy || 'অনলাইন ভক্ত সেবা'}<br>
            <strong>আদায়কারীর স্বাক্ষর</strong>
          </div>
        </div>

        <div class="stamp-circle">
          <div class="stamp-head">★ মন্দির কার্যালয় ★</div>
          <div class="stamp-mid">সত্যায়িত</div>
          <div class="stamp-foot">গৈলা, বরিশাল</div>
        </div>

        <div class="sig-col">
          <div class="sig-top-space"></div>
          <div class="sig-line">
            সাধারণ সম্পাদক / সভাপতি<br>
            <strong>মন্দির পরিচালনা কমিটি</strong>
          </div>
        </div>
      </div>

      <div class="blessing-foot">
        "দেবী মনসার অপার কৃপায় আপনার ও আপনার পরিবারে রোগমুক্তি, ধনধান্য, সুস্বাস্থ্য ও চিরশান্তি বর্ষিত হোক।"
      </div>
      <div class="site-tag">www.manasamondirgoila.com</div>
    </div>
  </div>

  <script>
    function triggerPrint() {
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function() {
          setTimeout(function() { window.print(); }, 250);
        });
      } else {
        setTimeout(function() { window.print(); }, 400);
      }
    }
    if (document.readyState === 'complete') {
      triggerPrint();
    } else {
      window.addEventListener('load', triggerPrint);
    }
  <\/script>
</body>
</html>`;

  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
};

// --- Media, Video & High-Capacity Storage Helpers ---

// Universal Cross-Device & Tab Realtime Sync
const broadcastUniversalSync = () => {
  try {
    const bc = new BroadcastChannel('mmg_universal_sync');
    bc.postMessage({ type: 'sync', timestamp: Date.now() });
    bc.close();
  } catch (e) {}

  try {
    if (window.__supabaseSyncChannel) {
      window.__supabaseSyncChannel.send({
        type: 'broadcast',
        event: 'db_sync',
        payload: { timestamp: Date.now() }
      });
    }
  } catch (e) {}
};

const isVideoUrl = (url) => {
  if (!url) return false;
  const str = String(url).toLowerCase().trim();
  return (
    str.startsWith('idb:video_') ||
    str.startsWith('data:video/') ||
    str.startsWith('blob:') ||
    str.endsWith('.mp4') ||
    str.endsWith('.webm') ||
    str.endsWith('.ogg') ||
    str.endsWith('.mov') ||
    str.endsWith('.mkv') ||
    str.endsWith('.m4v') ||
    str.includes('.mp4?') ||
    str.includes('.webm?') ||
    str.includes('.mov?') ||
    str.includes('youtube.com') ||
    str.includes('youtu.be') ||
    str.includes('/videos/')
  );
};

const getYouTubeEmbedUrl = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
  const match = String(url).match(regExp);
  return (match && match[2].length === 11) ? `https://www.youtube-nocookie.com/embed/${match[2]}` : null;
};

// IndexedDB media store for high-capacity local video storage (virtually unlimited size)
const openMediaDB = () => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !window.indexedDB) return resolve(null);
    try {
      const req = window.indexedDB.open('MaaManasaMediaDB', 1);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('media')) {
          db.createObjectStore('media', { keyPath: 'id' });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
};

const storeMediaBlob = async (id, blobOrData) => {
  try {
    const db = await openMediaDB();
    if (!db) return false;
    return new Promise((resolve) => {
      const tx = db.transaction('media', 'readwrite');
      const store = tx.objectStore('media');
      store.put({ id, data: blobOrData, time: Date.now() });
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
    });
  } catch {
    return false;
  }
};

const getMediaBlob = async (id) => {
  try {
    const db = await openMediaDB();
    if (!db) return null;
    return new Promise((resolve) => {
      const tx = db.transaction('media', 'readonly');
      const store = tx.objectStore('media');
      const req = store.get(id);
      req.onsuccess = () => resolve(req.result ? req.result.data : null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
};

const compressImageFile = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) return resolve(null);
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => resolve(reader.result);
      img.onload = () => {
        const maxDim = 880;
        let w = img.width;
        let h = img.height;
        if (w > maxDim || h > maxDim) {
          if (w > h) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          } else {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', 0.68));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
};

// Fast availability check for local video upload server (only on localhost)
const checkUploadServer = async () => {
  if (typeof window === 'undefined' || !window.fetch) return false;
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') return false;
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 400);
    const res = await fetch('/api/upload-check', { signal: ctrl.signal });
    clearTimeout(t);
    return res.ok;
  } catch {
    return false;
  }
};

// Video file reader & high-speed unlimited upload engine
const readVideoFile = async (file) => {
  if (!file) return null;

  // 1. Try direct cloud upload to Supabase Storage ('videos' bucket)
  try {
    if (typeof supabaseClient !== 'undefined' && supabaseClient?.storage) {
      const ext = (file.name || 'video.mp4').split('.').pop().toLowerCase();
      const cleanName = (file.name || 'clip').replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 30);
      const safeName = `event_${Date.now()}_${cleanName}.${ext}`;
      const { data: upData, error: upErr } = await supabaseClient.storage
        .from('videos')
        .upload(safeName, file, {
          cacheControl: '3600',
          upsert: true
        });

      if (!upErr && upData) {
        const { data: pubData } = supabaseClient.storage.from('videos').getPublicUrl(safeName);
        if (pubData && pubData.publicUrl) {
          return pubData.publicUrl;
        }
      }
    }
  } catch (supaErr) {
    console.warn("Supabase storage upload attempt:", supaErr);
  }

  // 2. Check if local upload streaming server is actively responding (e.g. localhost)
  const serverReady = await checkUploadServer();
  if (serverReady) {
    try {
      const uploadUrl = `/api/upload?filename=${encodeURIComponent(file.name)}`;
      const res = await fetch(uploadUrl, {
        method: 'POST',
        body: file
      });
      if (res.ok) {
        const json = await res.json();
        if (json && json.success && json.url) {
          return json.url;
        }
      }
    } catch (err) {
      console.warn("Direct upload error:", err);
    }
  }

  // 3. For small videos under 4MB, convert to Base64 Data URL for instant cross-device playback
  if (file.size <= 4.0 * 1024 * 1024) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(file);
    });
  }

  // 4. For large files when Supabase Storage bucket 'videos' is not yet configured,
  // guide the user to paste a YouTube link or enable the bucket
  throw new Error(`ভিডিও ফাইলটির সাইজ (${(file.size / (1024 * 1024)).toFixed(1)} MB)। ক্লাউডে সরাসরি বড় ফাইল আপলোডের জন্য Supabase-এ 'videos' পাবলিক বাকেট অন করুন, অথবা যেকোনো YouTube/ভিডিও লিংক পেস্ট করুন (অনলিমিটেড ও দ্রুত)।`);
};

const MediaViewer = ({ url, isVideo, alt = "Media", className = "w-full h-full object-cover", controls = true, autoPlay = false, loop = false }) => {
  const [activeUrl, setActiveUrl] = useState(url);

  useEffect(() => {
    let isMounted = true;
    let createdBlobUrl = null;

    if (url && typeof url === 'string' && url.startsWith('idb:')) {
      getMediaBlob(url).then(blobData => {
        if (!isMounted) return;
        if (blobData instanceof Blob || blobData instanceof File) {
          createdBlobUrl = URL.createObjectURL(blobData);
          setActiveUrl(createdBlobUrl);
        } else if (typeof blobData === 'string') {
          setActiveUrl(blobData);
        }
      });
    } else {
      setActiveUrl(url);
    }

    return () => {
      isMounted = false;
      if (createdBlobUrl) {
        URL.revokeObjectURL(createdBlobUrl);
      }
    };
  }, [url]);

  const targetUrl = activeUrl || url;
  const isVid = isVideo || isVideoUrl(targetUrl) || (typeof url === 'string' && url.startsWith('idb:video_'));

  if (isVid) {
    const ytEmbed = getYouTubeEmbedUrl(targetUrl);
    if (ytEmbed) {
      return (
        <iframe
          src={`${ytEmbed}?autoplay=${autoPlay ? 1 : 0}&loop=${loop ? 1 : 0}&rel=0`}
          className="w-full h-full border-0 rounded-inherit"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={alt}
        />
      );
    }
    return (
      <video
        src={targetUrl}
        controls={controls}
        playsInline
        autoPlay={autoPlay}
        loop={loop}
        className={`${className} bg-black`}
      />
    );
  }
  return <img src={targetUrl} alt={alt} className={className} />;
};

// গ্যালারির ছবিগুলো
const DEFAULT_GALLERY_ITEMS = [
  { id: 'gal_1', url: 'header image.jpg', captionBn: 'শ্রীশ্রী মা মনসা মন্দির তোরণ ও মূল প্রাঙ্গণ', captionEn: 'Temple Entrance & Main Courtyard', mediaType: 'image' },
  { id: 'gal_2', url: 'gallary image.png', captionBn: 'ঐতিহাসিক শ্রীশ্রী মা মনসা মন্দির নাটমন্দির', captionEn: 'Historic Natmandir of Manasa Temple', mediaType: 'image' },
  { id: 'gal_3', url: 'ma manasa mondir font.jpg', captionBn: 'শ্রীশ্রী মা মনসা মন্দিরের পবিত্র সম্মুখভাগ', captionEn: 'Front Façade of Sacred Sanctum', mediaType: 'image' },
  { id: 'gal_4', url: 'ma manasa mondir lake dighi view.jpg', captionBn: 'মনসা মন্দিরের পবিত্র ঘটের দীঘি ও মনোরম পরিবেশ', captionEn: 'Sacred Temple Lake (Ghoter Dighi)', mediaType: 'image' }
];

const galleryImages = DEFAULT_GALLERY_ITEMS.map(g => g.url);
const galleryCaptions = DEFAULT_GALLERY_ITEMS.map(g => ({ bn: g.captionBn, en: g.captionEn }));

// --- Rich Text Editor Component ---
const QuillEditor = ({ value, onChange, placeholder }) => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  });

  useEffect(() => {
    if (editorRef.current && !quillRef.current && window.Quill) {
      quillRef.current = new window.Quill(editorRef.current, {
        theme: 'snow',
        placeholder: placeholder || 'এখানে বিস্তারিত লিখুন...',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link'],
            ['clean']
          ]
        }
      });
      quillRef.current.on('text-change', () => {
        if (onChangeRef.current) {
          onChangeRef.current(quillRef.current.root.innerHTML);
        }
      });
      if (value) {
        quillRef.current.root.innerHTML = value;
      }
    }
  }, []);

  useEffect(() => {
    if (quillRef.current && value !== quillRef.current.root.innerHTML) {
      if (!value || value === '<p><br></p>') {
        quillRef.current.root.innerHTML = '';
      } else if (quillRef.current.root.innerHTML === '<p><br></p>' || quillRef.current.root.innerHTML === '') {
        quillRef.current.root.innerHTML = value;
      }
    }
  }, [value]);

  return (
    <div className="bg-white rounded-xl border border-gray-300 overflow-hidden">
      <div ref={editorRef} />
    </div>
  );
};


// ==========================================
// I18N Localization System (বাংলা / English)
// ==========================================
const I18N = {
  bn: {
    templeTitle: "শ্রী শ্রী মা মনসা মন্দির",
    templeLocation: "গৈলা, আগৈলঝাড়া, বরিশাল",
    home: "হোম",
    history: "ইতিহাস",
    committee: "কমিটি",
    events: "ইভেন্ট",
    notice: "নোটিশ",
    noticeBoard: "নোটিশ বোর্ড",
    testimonials: "মতামত",
    donation: "প্রণামী",
    adminPanel: "এডমিন প্যানেল",
    timings: "সময়সূচী",
    travel: "ভ্রমণ গাইড",
    mantras: "পবিত্র মন্ত্র",
    dailyTimingsTitle: "দৈনিক পূজা ও আরতির সময়সূচী",
    dailyTimingsSubtitle: "ঐতিহাসিক শ্রী শ্রী মা মনসা মন্দিরের নিত্য পূজা, ভোগরাগ ও আরতি দর্শন সময়",
    morningPujaTitle: "প্রভাতী নিত্যপূজা ও অঞ্জলি",
    bhogOfferingTitle: "দ্বিপ্রহরিক ভোগ নিবেদন",
    sandhyaAartiTitle: "সন্ধ্যা আরতি ও কীর্তন",
    darshanGuidelinesTitle: "গর্ভগৃহ দর্শন ও আশীর্বাদ গ্রহণ",
    travelGuideTitle: "কীভাবে আসবেন? তীর্থ ভ্রমণ গাইড",
    travelGuideSubtitle: "ঐতিহাসিক গৈলা মা মনসা মন্দিরে পৌঁছানোর পূর্ণাঙ্গ পথনির্দেশিকা ও যানবাহন বিবরণ",
    dhakaBusTitle: "ঢাকা থেকে সড়কপথে (পদ্মা সেতু)",
    launchRouteTitle: "ঢাকা থেকে নৌপথে (লঞ্চযোগে)",
    localTransportTitle: "স্থানীয় যানবাহন ও দূরত্ব",
    guestHouseTitle: "তীর্থযাত্রীদের বিশ্রাম ও আবাসন",
    helplineTitle: "জরুরী যোগাযোগ ও পুরোহিত সহায়তা",
    mantrasTitle: "পবিত্র মনসা স্তোত্র, ধ্যান ও পদ্মপুরাণ",
    mantrasSubtitle: "দেবী মনসার আরাধনার ঐতিহ্যবাহী শ্লোকমালা এবং মহাকবি বিজয় গুপ্তের অমর পদাবলি",
    allCategory: "সকল",
    copyMantra: "মন্ত্র কপি করুন",
    playChime: "পবিত্র ঘণ্টা",
    playShankh: "পবিত্র শঙ্খধ্বনি",
    bellRungToast: "পবিত্র ঘণ্টা ধ্বনি বাজানো হয়েছে 🔔",
    shankhBlownToast: "পবিত্র শঙ্খধ্বনি বাজানো হয়েছে 🐚",
    shareMantra: "শেয়ার করুন",
    mantraCopied: "মন্ত্রটি ক্লিপবোর্ডে কপি করা হয়েছে!",
    liveStatusLabel: "লাইভ দর্শন স্ট্যাটাস",
    viewTimingsBtn: "পূর্ণাঙ্গ সময়সূচী দেখুন",
    viewTravelBtn: "ভ্রমণ নির্দেশিকা দেখুন",
    viewMantrasBtn: "পবিত্র মন্ত্র পাঠ করুন",
    backToHome: "হোমে ফিরে যান",
    scrollToTop: "উপরে যান",
    loading: "লোড হচ্ছে...",
    musicOn: "সঙ্গীত: চালু",
    musicOff: "সঙ্গীত: বন্ধ",
    musicTitleOn: "থিম সঙ্গীত বন্ধ করুন",
    musicTitleOff: "থিম সঙ্গীত চালু করুন",
    musicPlaying: "থিম সঙ্গীত বাজছে 🎵",
    musicPaused: "থিম সঙ্গীত বন্ধ 🔇",

    // Hero & Heritage
    heroTitle: "শ্রী শ্রী মা মনসা মন্দির",
    heroSubtitle: "মনসামঙ্গল কাব্যের রচয়িতা কবি বিজয় গুপ্তের প্রতিষ্ঠিত পবিত্র তীর্থস্থান",
    learnHistory: "ইতিহাস জানুন",
    giveDonation: "প্রণামী দিন",
    establishedBadge: "প্রতিষ্ঠা সন",
    establishedYear: "১৪৯৪ খ্রিষ্টাব্দ (১৪১৬ শকাব্দ)",
    templeAgeBadge: "ঐতিহ্যের বয়স",
    templeAgeSuffix: "বছরের সুপ্রাচীন ঐতিহ্য",
    heritageSubtitle: "৫ শতাব্দীর সুপ্রাচীন জীবন্ত ঐতিহ্য",
    founderTitle: "পবিত্র প্রতিষ্ঠাতা",
    founderName: "মহাকবি বিজয় গুপ্ত",
    epicTitle: "অমর মহাকাব্য",
    epicName: "পদ্মাপুরাণ",

    // Gallery
    photoGallery: "ফটো গ্যালারি",
    prevPhoto: "পূর্ববর্তী ছবি",
    nextPhoto: "পরবর্তী ছবি",

    // Devotee
    famousDevoteeTitle: "বিখ্যাত ভক্ত: কবি বিজয় গুপ্ত",
    famousDevoteeText: "মধ্যযুগের অন্যতম শ্রেষ্ঠ বাঙালি কবি বিজয় গুপ্ত। তাঁর রচিত \"পদ্মাপুরাণ\" বা \"মনসামঙ্গল\" কাব্য বাংলা সাহিত্যের এক অমূল্য রত্ন। তিনি এই গৈলা গ্রামেই জন্মগ্রহণ করেন এবং স্বয়ং মা মনসার স্বপ্নাদিষ্ট হয়ে এই পবিত্র মন্দিরটি প্রতিষ্ঠা করেন। শতাব্দীর পর শতাব্দী ধরে অসংখ্য ভক্ত মায়ের কৃপা লাভের আশায় এখানে ছুটে আসেন।",
    learnMore: "আরও জানুন",

    // Notice snippet / page
    noticeSectionDesc: "মন্দিরের গুরুত্বপূর্ণ সকল বিজ্ঞপ্তি ও আপডেট সম্পর্কে জানতে নোটিশ বোর্ড খেয়াল রাখুন।",
    allNotices: "সকল নোটিশ",
    noticePageSubtitle: "গুরুত্বপূর্ণ ঘোষণা ও বিজ্ঞপ্তি সমূহ",
    noNotices: "কোনো নোটিশ নেই।",

    // Testimonials
    testimonialsTitle: "পুণ্যার্থীদের মতামত",
    testimonialsPageSubtitle: "মন্দিরে আগত দর্শনার্থীদের অনুভূতি ও অভিজ্ঞতা",
    readMoreTestimonials: "বিস্তারিত পড়ুন",
    noTestimonials: "এখনো কোনো মতামত যোগ করা হয়নি।",

    // Committee
    committeeTitle: "পরিচালনা পরিষদ",
    committeePageTitle: "কবি বিজয় গুপ্তের স্মৃতিরক্ষা, শ্রীশ্রী মা-মনসা মন্দির সংরক্ষণ ও উন্নয়ন কমিটি",
    committeeTenure: "কমিটির মেয়াদ: ২৯-০৮-২০২৪ হইতে ২৮-০৮-২০২৬ পর্যন্ত",
    viewFullCommittee: "সম্পূর্ণ কমিটি দেখুন",

    // Events
    latestEvents: "সর্বশেষ ইভেন্টসমূহ",
    eventsPageTitle: "মন্দিরের ইভেন্টসমূহ",
    eventsPageSubtitle: "আগামী ও অতীত সকল কর্মসূচীর তালিকা",
    viewAllEvents: "সকল ইভেন্ট দেখুন",
    share: "শেয়ার",
    shareAction: "শেয়ার করুন",
    details: "বিস্তারিত",
    eventSharedToast: "ইভেন্টের তথ্য কপি করা হয়েছে!",
    noEvents: "এখনো কোনো ইভেন্ট যোগ করা হয়নি।",

    // Donation
    donationPageTitle: "মন্দিরের প্রণামী বা অনুদান",
    donationDesc1: "আপনার যেকোনো ধরণের অনুদান মন্দিরের সেবা, রক্ষণাবেক্ষণ ও ধর্মীয় কাজে সহায়তা করবে। আপনার অবদানের জন্য আমরা গভীরভাবে কৃতজ্ঞ।",
    donationDesc2: "অনলাইনে অথবা সরাসরি অনুদান প্রদান করতে চাইলে অবশ্যই নির্বাহী কমিটিকে আগে অবহিত করবেন",
    bankDetailsTitle: "ব্যাংক একাউন্ট বিস্তারিত",
    accountNameLabel: "একাউন্টের নাম:",
    accountNumberLabel: "একাউন্ট নম্বর:",
    bankLabel: "ব্যাংক:",
    bankName: "সোনালী ব্যাংক লিমিটেড",
    branchLabel: " শাখা:",
    branchName: "3111-গৈলা শাখা, বরিশাল",
    routingNumberLabel: "রাউটিং নম্বর:",
    copyBtn: "কপি",
    copiedToast: "কপি করা হয়েছে!",
    mobileBankingTitle: "মোবাইল ব্যাংকিং",
    bkashLabel: "বিকাশ",
    personalAccount: "পার্সোনাল অ্যাকাউন্ট",
    sendMoney: "সেন্ড মানি করবেন",
    donorsTitle: "আমাদের সম্মানিত দাতাগণ",
    scrollHint: "সম্পূর্ণ তালিকা দেখতে ডানে-বামে স্ক্রল করুন",
    colName: "নাম",
    colAddress: "ঠিকানা / পদবী",
    colType: "ধরণ",
    colAmount: "পরিমাণ / বিবরণ",
    typeCash: "নগদ অর্থ",
    noDonations: "এখনো কোনো অনুদান তালিকাভুক্ত করা হয়নি।",
    donationQuote: "আপনার প্রদানকৃত অনুদানের সঠিক ব্যবহারে আমরা প্রতিজ্ঞাবদ্ধ। মা মনসা আপনার সহায় হোক।",

    // History Page (Full A to Z Authentic)
    historyPageTitle: "ইতিহাস ও ঐতিহ্য",
    historyPageSubtitle: "কবি বিজয় গুপ্তের স্মৃতিধন্য শ্রী শ্রী মা মনসা মন্দিরের ৫৩০ বছরের পূর্ণাঙ্গ প্রামাণ্য ইতিহাস",
    historyP1: "মধ্যযুগের অন্যতম শ্রেষ্ঠ বাঙালি কবি বিজয় গুপ্ত। তিনি বরিশাল জেলার আগৈলঝাড়া উপজেলার গৈলা (তৎকালীন ফুল্লশ্রী) গ্রামে জন্মগ্রহণ করেন। তাঁর রচিত \"পদ্মাপুরাণ\" বা \"মনসামঙ্গল\" কাব্য বাংলা সাহিত্যের এক অমূল্য সম্পদ।",
    historyP2: "কিংবদন্তি ও ইতিহাস অনুযায়ী, কবি বিজয় গুপ্ত স্বয়ং দেবী মনসার স্বপ্নাদিষ্ট হয়ে এই স্থানে মনসা মন্দির প্রতিষ্ঠা করেছিলেন। পঞ্চদশ শতাব্দীতে প্রতিষ্ঠিত এই মন্দিরটি শুধু একটি উপাসনালয় নয়, বরং বাঙালির প্রাচীন সংস্কৃতির এক জীবন্ত সাক্ষী।",
    historyBoxTitle: "পদ্মাপুরাণ ও রয়ানী গান",
    historyBoxText: "প্রতি বছর শ্রাবণ মাসে এই মন্দিরে বিশেষ উৎসবের আয়োজন করা হয়। তখন ঐতিহ্যবাহী 'রয়ানী গান' (মনসামঙ্গল কাব্যের গীত) পরিবেশিত হয়, যা দেশের বিভিন্ন প্রান্ত থেকে আগত ভক্ত ও গবেষকদের আকর্ষণ করে।",
    historyP3: "কালের বিবর্তনে মন্দিরটি বিভিন্ন সময়ে সংস্কার করা হলেও এর আদি পবিত্রতা ও আধ্যাত্মিক পরিবেশ আজও অম্লান। দেশ-বিদেশের অসংখ্য পুণ্যার্থী আপন মনোবাসনা পূর্ণ করার জন্য এখানে ছুটে আসেন এবং মায়ের চরণে প্রণামী অর্পণ করেন।",

    historyChap1Title: "১. পুণ্যভূমি ফুল্লশ্রী ও গৈলা গ্রামের ঐতিহাসিক পটভূমি",
    historyChap1Text: "প্রাচীন চন্দ্রদ্বীপ ও বাকলা পরগনার অন্তর্গত বর্তমান বরিশাল জেলার আগৈলঝাড়া উপজেলার গৈলা গ্রাম মধ্যযুগে 'ফুল্লশ্রী' নামে খ্যাত ছিল। ফুল্লশ্রী ছিল প্রাচীন বাংলার শিক্ষা, আয়ুর্বেদ চিকিৎসা এবং সংস্কৃত ও দেশজ সাহিত্যের এক প্রখ্যাত বিদ্যাচর্চার কেন্দ্র। এই সুপবিত্র ভূমিতে পঞ্চদশ শতাব্দীতে জন্মগ্রহণ করেন মধ্যযুগীয় বাংলা সাহিত্যের প্রাতঃস্মরণীয় রূপকার মহাকবি বিজয় গুপ্ত। তাঁর পিতা ছিলেন বৈদ্য সনাতন গুপ্ত এবং মাতা রুক্মিণী দেবী। এক পরম ধর্মপ্রাণ পরিবারে বেড়ে ওঠা বিজয় গুপ্ত শৈশব থেকেই আধ্যাত্মিক সাধনায় নিমগ্ন ছিলেন।",

    historyChap2Title: "২. দেবী মনসার অলৌকিক স্বপ্নাদেশ ও পবিত্র ঘট উদ্ধার (১৪৯৪ খ্রিষ্টাব্দ)",
    historyChap2Text: "আনুমানিক ১৪৯৪ খ্রিষ্টাব্দে (১৪১৬ শকাব্দ) দেবী মনসা (পদ্মাবতী) কবি বিজয় গুপ্তকে স্বপ্নে দর্শন দিয়ে তাঁর মাহাত্ম্য প্রচার করার জন্য মহাকাব্য রচনার নির্দেশ দেন। দেবী আদেশ করেন, কবির বসতবাড়ির সম্মুখস্থ বিশাল জলাশয়ের গর্ভে নিমজ্জিত রয়েছে একটি পবিত্র তাম্র পূজ্যঘট। পরদিন প্রত্যুষে কবি বিজয় গুপ্ত দীঘিতে অবগাহন করে অলৌকিকভাবে সেই পবিত্র ঘটটি উদ্ধার করেন। দীঘির শান্ত পাড়ে এক প্রাচীন বকুল বৃক্ষের ছায়াতলে সেই ঘট স্থাপন করে কবি ভক্তিভরে শ্রী শ্রী মা মনসার প্রথম পূজা ও মন্দির প্রতিষ্ঠা করেন। সেই ঐতিহাসিক জলাশয়টি আজও 'মনসার দীঘি' বা 'ঘটের দীঘি' নামে মন্দির প্রাঙ্গণে বিদ্যমান।",

    historyChap3Title: "৩. অমর মহাকাব্য 'পদ্মাপুরাণ' (মনসামঙ্গল) রচনা ও রচনাকাল",
    historyChap3Text: "মন্দির প্রতিষ্ঠার পর দেবী মনসার স্বপ্নাদিষ্ট আদেশানুসারে মন্দিরের পাশেই বকুল বৃক্ষের নিচে বসে কবি বিজয় গুপ্ত রচনা করেন বাংলা সাহিত্যের অমূল্য সম্পদ—'পদ্মাপুরাণ'। কাব্যে তিনি শিবকন্যা মা মনসা, অনমনীয় শিবভক্ত চাঁদ সওদাগর, পতিব্রতা সতীর প্রতীক বেহুলা এবং লখিন্দরের করুণ ও বীরত্বপূর্ণ অমর উপাখ্যান অনুপম ছন্দে লিপিবদ্ধ করেন। কবি তাঁর কাব্যের ভণিতায় কাব্যের রচনাকাল সুনির্দিষ্টভাবে উল্লেখ করে গেছেন:",

    historyShloka: "\"ঋতু শূন্য বেদ শশী পরিমিত শক।\nসুলতান হোসেন শাহা নৃপতি প্রধান।।\"",
    historyShlokaMeaning: "(শকাব্দ গণনা অনুসারে: ঋতু=৬, শূন্য=০, বেদ=৪, শশী=১ অর্থাৎ অঙ্কস্য বামা গতি নিয়মে ১৪১৬ শকাব্দ বা ১৪৯৪ খ্রিষ্টাব্দ। তৎকালীন শাসক ছিলেন স্বাধীন বাংলার সুলতান আলাউদ্দিন হোসেন শাহ।)",

    historyChap4Title: "৪. গৌড়ের সুলতানি দরবারের স্বীকৃতি ও 'মহাকবি' উপাধি",
    historyChap4Text: "বিজয় গুপ্তের রচিত 'পদ্মাপুরাণ' তৎকালে সমগ্র বাংলায় অভূতপূর্ব জনপ্রিয়তা লাভ করে। এই কাব্যের সাহিত্যিক উৎকর্ষতা, গভীর মানবিক দর্শন এবং ছন্দমাধুর্যে মুগ্ধ হয়ে তৎকালীন স্বাধীন বাংলার প্রখ্যাত সুলতান আলাউদ্দিন হোসেন শাহ কবি বিজয় গুপ্তকে তাঁর রাজদরবারে আমন্ত্রণ জানান এবং তাঁকে পরম সমাদরে 'মহাকবি' উপাধিতে ভূষিত করেন। বাংলা সাহিত্যের ইতিহাসে বিজয় গুপ্তের পদ্মাপুরাণই প্রথম কাব্য যাতে সুনির্দিষ্ট দিন, তারিখ, শকাব্দ এবং তৎকালীন সুলতানের নাম নির্ভুলভাবে লিপিবদ্ধ রয়েছে।",

    historyChap5Title: "৫. পাঁচ শতাধিক বছরের ঐতিহ্যবাহী 'রয়ানী গান' ও শ্রাবণ সংক্রান্তির মহোৎসব",
    historyChap5Text: "মন্দির প্রতিষ্ঠার পর থেকে বিগত ৫৩০ বছর ধরে প্রতি বছর বাংলা শ্রাবণ মাসের শেষ দিনে—'শ্রাবণ সংক্রান্তি' (নাগ পঞ্চমী) তিথিতে গৈলা মনসা মন্দিরে ঐতিহ্যবাহী বাৎসরিক পূজা ও মহোৎসব অনুষ্ঠিত হয়ে আসছে। এই উৎসবের প্রধান আকর্ষণ শত শত বছরের প্রাচীন 'রয়ানী গান' (পদ্মাপুরাণের সুরযুক্ত পালাগান)। দেশের বিভিন্ন অঞ্চল থেকে আগত প্রখ্যাত বায়েন ও দোহার দল একনাগাড়ে ৩ থেকে ৭ দিনব্যাপী ঢোল, খোল, করতাল সহযোগে রয়ানী গান পরিবেশন করেন। উৎসব উপলক্ষে দেশ-বিদেশের লক্ষাধিক পুণ্যার্থী ও ভক্তবৃন্দ পুণ্যতোয়া ঘটের দীঘিতে স্নান করে মায়ের চরণে দুধ-কলা ও পুষ্পাঞ্জলি অর্পণ করেন।",

    historyChap6Title: "৬. আধুনিক নবজাগরণ, এক টনের পিতলের বিগ্রহ ও বর্তমান রূপ",
    historyChap6Text: "কালের আবর্তে প্রাচীন মাটির মন্দিরটি বারবার প্রাকৃতিক দুর্যোগের মুখোমুখি হলেও ভক্তদের অটল ভক্তি ও 'কবি বিজয় গুপ্তের স্মৃতি রক্ষা, শ্রী শ্রী মা মনসা মন্দির সংরক্ষণ ও উন্নয়ন কমিটি'-এর উদ্যোগে এর গৌরব অম্লান রাখা হয়েছে। ২০০৫ সালে মন্দিরের গর্ভগৃহে স্থাপন করা হয় এক টন (১০০০ কেজি) ওজনের সুবিশাল পিতলের শ্রী শ্রী মা মনসা বিগ্রহ। পরবর্তীতে ২০১৩ সালে ভক্তদের সার্বিক অনুদানে ঐতিহাসিক দীঘির তীরে মনোরম শ্বেতপাথরে সজ্জিত আধুনিক ত্রিতল মন্দির ভবন, বিশাল নাটমন্দির ও ভক্তনিবাস নির্মিত হয়। আজ এই তীর্থস্থানটি হিন্দু ধর্মাবলম্বীদের এক জাগ্রত পুণ্যপীঠ এবং সমগ্র বাঙালি জাতির হাজার বছরের সমৃদ্ধ সাহিত্য সংস্কৃতির এক অনন্য জীবন্ত স্মৃতিসৌধ।",

    // Footer
    
    // Booking & Royani & Panjika Additions
    booking: "পূজা বুকিং",
    bookingTitle: "অনলাইন পূজা ও সংকল্প বুকিং",
    bookingSubtitle: "শ্রী শ্রী মা মনসা দেবীর চরণে মানত, নিত্য ভোগ ও বিশেষ পূজা সংকল্প গ্রহণ",
    royani: "রয়ানী গান",
    royaniTitle: "ঐতিহ্যবাহী রয়ানী গান ও পদ্মাপুরাণ",
    royaniSubtitle: "মধ্যযুগের মহাকবি বিজয় গুপ্তের অমর সৃষ্টি ও গৈলা মনসা মন্দিরের ৫০০+ বছরের ঐতিহ্যবাহী সংগীতধারা",
    panjika: "পঞ্জিকা ও তিথি",
    panjikaTitle: "শুভ পঞ্জিকা ও মহোৎসব সময়সূচী",
    receipt: "প্রণামী রশিদ",
    receiptTitle: "স্বয়ংক্রিয় পবিত্র প্রণামী রশিদ",
    receiptSubtitle: "শ্রী শ্রী মা মনসা মন্দির তহবিলে প্রদত্ত প্রণামীর স্মারক রশিদ সংগ্রহ ও প্রিন্ট",
    annualFestivalTarget: "বাৎসরিক মহোৎসব ও মনসা পূজা ২০২৬",
    festivalCountdown: "মহোৎসব ও রয়ানী গানের বাকি",
    daysUnit: "দিন",
    hoursUnit: "ঘণ্টা",
    minsUnit: "মিনিট",
    secsUnit: "সেকেন্ড",
    footerAbout: "কবি বিজয় গুপ্তের প্রতিষ্ঠিত ঐতিহাসিক মন্দির। মায়ের আশীর্বাদে সবার জীবনে শান্তি ও সমৃদ্ধি নেমে আসুক।",
    quickLinks: "প্রয়োজনীয় লিংক",
    adminLogin: "এডমিন লগইন",
    contact: "যোগাযোগ",
    locationValue: "গৈলা, আগৈলঝাড়া, বরিশাল, বাংলাদেশ",
    presidentPhone: "০১৭১৭-৫০৩৬৫৭ (সভাপতি)",
    copyright: "মনসা মন্দির গৈলা। সর্বস্বত্ব সংরক্ষিত।",
    developedBy: "ওয়েবসাইট নির্মাণে:"
  },
  en: {
    templeTitle: "Shree Shree Maa Manasa Mandir",
    templeLocation: "Goila, Agailjhara, Barishal",
    home: "Home",
    history: "History",
    committee: "Committee",
    events: "Events",
    notice: "Notice",
    noticeBoard: "Notice Board",
    testimonials: "Testimonials",
    donation: "Pronami / Donation",
    adminPanel: "Admin Panel",
    timings: "Schedule",
    travel: "Travel Guide",
    mantras: "Sacred Mantras",
    dailyTimingsTitle: "Daily Puja & Aarti Schedule",
    dailyTimingsSubtitle: "Scheduled hours for sanctum darshan, daily worship, bhog offering & evening aarti",
    morningPujaTitle: "Morning Puja & Pushpanjali",
    bhogOfferingTitle: "Midday Bhog Offering",
    sandhyaAartiTitle: "Evening Aarti & Kirtan",
    darshanGuidelinesTitle: "Sanctum Darshan & Blessings",
    travelGuideTitle: "How to Reach? Pilgrim Travel Guide",
    travelGuideSubtitle: "Complete travel routes, road, launch, and local transport directions to Goila Manasa Temple",
    dhakaBusTitle: "From Dhaka by Road (Padma Bridge)",
    launchRouteTitle: "From Dhaka by River (Launch)",
    localTransportTitle: "Local Transport & Distances",
    guestHouseTitle: "Pilgrim Lodging & Rest Facilities",
    helplineTitle: "Helpline & Priest Assistance",
    mantrasTitle: "Sacred Mantras, Dhyana & Padma Purana",
    mantrasSubtitle: "Traditional Vedic & Puranic hymns dedicated to Maa Manasa and immortal verses by Poet Bijoy Gupta",
    allCategory: "All",
    copyMantra: "Copy Mantra",
    playChime: "Sacred Bell",
    playShankh: "Sacred Conch",
    bellRungToast: "Sacred temple bell rung 🔔",
    shankhBlownToast: "Sacred conch shell blown 🐚",
    shareMantra: "Share",
    mantraCopied: "Mantra copied to clipboard!",
    liveStatusLabel: "Live Darshan Status",
    viewTimingsBtn: "View Full Schedule",
    viewTravelBtn: "View Travel Guide",
    viewMantrasBtn: "Read Sacred Mantras",
    backToHome: "Back to Home",
    scrollToTop: "Scroll to top",
    loading: "Loading...",
    musicOn: "Music: ON",
    musicOff: "Music: OFF",
    musicTitleOn: "Pause Theme Song",
    musicTitleOff: "Play Theme Song",
    musicPlaying: "Theme Music Playing 🎵",
    musicPaused: "Theme Music Paused 🔇",

    // Hero & Heritage
    heroTitle: "Shree Shree Maa Manasa Mandir",
    heroSubtitle: "The sacred pilgrimage site established by medieval poet Bijoy Gupta, creator of Manasamangal Kavya",
    learnHistory: "Explore History",
    giveDonation: "Offer Pronami",
    establishedBadge: "Established",
    establishedYear: "1494 AD (1416 Shakabda)",
    templeAgeBadge: "Sacred Age",
    templeAgeSuffix: "Years of Divine Heritage",
    heritageSubtitle: "5+ Centuries of Living Heritage",
    founderTitle: "Sacred Founder",
    founderName: "Poet Bijoy Gupta",
    epicTitle: "Sacred Epic",
    epicName: "Padmapuran",

    // Gallery
    photoGallery: "Photo Gallery",
    prevPhoto: "Previous Photo",
    nextPhoto: "Next Photo",

    // Devotee
    famousDevoteeTitle: "Famous Devotee: Poet Bijoy Gupta",
    famousDevoteeText: "Poet Bijoy Gupta is one of the most revered Bengali poets of the medieval era. His masterwork 'Padmapuran' (Manasamangal Kavya) is a timeless treasure of Bengali literature. Born in this Goila village, he founded this sanctified temple following a divine revelation from Devi Manasa herself. For centuries, countless devotees have gathered here seeking Mother's divine grace.",
    learnMore: "Learn More",

    // Notice snippet / page
    noticeSectionDesc: "Stay updated with important temple announcements, notices, and ongoing activities.",
    allNotices: "All Notices",
    noticePageSubtitle: "Important Announcements & Official Notices",
    noNotices: "No notices found.",

    // Testimonials
    testimonialsTitle: "Devotee Testimonials",
    testimonialsPageSubtitle: "Expressions and reflections of devotees visiting the sacred temple",
    readMoreTestimonials: "Read All Testimonials",
    noTestimonials: "No testimonials recorded yet.",

    // Committee
    committeeTitle: "Executive Committee",
    committeePageTitle: "Poet Bijoy Gupta Memorial, Shree Shree Maa Manasa Mandir Preservation & Development Committee",
    committeeTenure: "Committee Tenure: 29-08-2024 to 28-08-2026",
    viewFullCommittee: "View Full Committee",

    // Events
    latestEvents: "Latest Events",
    eventsPageTitle: "Temple Events",
    eventsPageSubtitle: "Schedule of upcoming & past religious ceremonies and festivals",
    viewAllEvents: "View All Events",
    share: "Share",
    shareAction: "Share Event",
    details: "Details",
    eventSharedToast: "Event link copied to clipboard!",
    noEvents: "No events recorded yet.",

    // Donation
    donationPageTitle: "Temple Pronami & Donations",
    donationDesc1: "Any offering or contribution directly aids temple daily rituals, preservation, and holy celebrations. We are deeply grateful for your generous devotion.",
    donationDesc2: "Please inform the executive committee prior to sending donations online or in person.",
    bankDetailsTitle: "Bank Account Details",
    accountNameLabel: "Account Name:",
    accountNumberLabel: "Account Number:",
    bankLabel: "Bank:",
    bankName: "Sonali Bank Limited",
    branchLabel: "Branch:",
    branchName: "3111 - Goila Branch, Barishal",
    routingNumberLabel: "Routing Number:",
    copyBtn: "Copy",
    copiedToast: "copied to clipboard!",
    mobileBankingTitle: "Mobile Banking",
    bkashLabel: "bKash",
    personalAccount: "Personal Account",
    sendMoney: "Send Money",
    donorsTitle: "Our Respected Donors",
    scrollHint: "Scroll horizontally to view the complete list",
    colName: "Name",
    colAddress: "Address / Role",
    colType: "Type",
    colAmount: "Amount / Details",
    typeCash: "Cash",
    noDonations: "No donations listed yet.",
    donationQuote: "We are pledged to the righteous and transparent utilization of your sacred contribution. May Maa Manasa bless you.",

    // History Page (Full A to Z Authentic)
    historyPageTitle: "History & Heritage",
    historyPageSubtitle: "The 530-Year Comprehensive History of Shree Shree Maa Manasa Mandir and Poet Bijoy Gupta",
    historyP1: "Poet Bijoy Gupta is among the most illustrious Bengali poets of the medieval era. He was born in Goila (historically Fullashri) in Agailjhara, Barishal. His celebrated epic 'Padmapuran' (Manasamangal Kavya) stands as an invaluable monument of Bengali literary heritage.",
    historyP2: "According to legend and historical chronicle, Poet Bijoy Gupta established this temple under the direct divine inspiration of Goddess Manasa in a dream. Founded in the 15th century, this temple is not merely a sanctum of worship, but a living testament to Bengal's ancient cultural and spiritual traditions.",
    historyBoxTitle: "Padmapuran & Royani Songs",
    historyBoxText: "Every year in the auspicious month of Shravana, a grand festival is held at this temple. The traditional 'Royani Gaan' (poetic recital of Manasamangal) is performed, attracting spiritual pilgrims and literary researchers from across the nation.",
    historyP3: "Though renovated over the ages, the temple retains its pristine spiritual serenity and sacred aura. Devotees from home and abroad arrive here with devout wishes, offering their heartfelt pronami and reverence at the feet of Maa Manasa.",

    historyChap1Title: "1. Historical Background of Ancient Fullashri & Goila Village",
    historyChap1Text: "In medieval Bengal, the village of Goila in Agailjhara, Barishal (then under the historic Bakla-Chandradwip region) was renowned as 'Fullashri'. Fullashri was an illustrious epicenter of classical Sanskrit scholarship, Ayurvedic medicine, and early Bengali literature. In the 15th century, the immortal medieval poet Bijoy Gupta was born on this sacred soil to a pious family. His father was the Ayurvedic physician Sanatan Gupta and his mother was Rukmini Devi. Growing up in a deeply spiritual atmosphere, Bijoy Gupta was drawn to divine contemplation from early childhood.",

    historyChap2Title: "2. Divine Vision of Devi Manasa & Retrieval of the Sacred Ghat (1494 AD)",
    historyChap2Text: "Around the year 1494 AD (1416 Shakabda), Goddess Manasa (Padmavati) appeared to Poet Bijoy Gupta in a divine dream, commanding him to compose a narrative epic in her honor and establish her holy worship. The Goddess revealed that a sacred copper pot (Ghat) lay submerged deep in the ancient pond in front of his ancestral homestead. At dawn the following morning, Bijoy Gupta bathed in the waters and miraculously retrieved the sacred consecrated Ghat. Beneath an ancient, fragrant Bakul tree on the pond's edge, he placed the holy pot and established the very first altar of Shree Shree Maa Manasa. That historic pond is still preserved today as the sacred 'Ghat-er Dighi' (Manasa Dighi).",

    historyChap3Title: "3. Composition of the Epic 'Padmapuran' & Its Exact Date",
    historyChap3Text: "Under the serene shade of the sacred Bakul tree beside the temple sanctum, Poet Bijoy Gupta composed the immortal Bengali literary masterwork—'Padmapuran' (popularly known as Manasamangal). The epic recounts the poignant and heroic saga of Goddess Manasa, the unyielding merchant Chand Sadagar, and the epitome of devotional chastity, Behula, who sailed into eternity to resurrect her husband Lakhindar. In the poetic colophon, Bijoy Gupta meticulously recorded the exact date of his composition:",

    historyShloka: "\"Ritu Shunyo Veda Shashi Parimita Shak.\nSultan Husain Shah Nripati Pradhan.\"",
    historyShlokaMeaning: "(According to the Shakabda system: Ritu=6, Shunyo=0, Veda=4, Shashi=1; reading from right to left equals 1416 Shakabda or 1494 AD. The ruling monarch was Sultan Alauddin Husain Shah of Bengal.)",

    historyChap4Title: "4. Royal Court Acclaim & The Title of 'Mahakavi' (Great Poet)",
    historyChap4Text: "Bijoy Gupta's 'Padmapuran' swiftly garnered immense reverence across the length and breadth of Bengal. Captivated by its profound philosophical beauty, lyrical mastery, and dramatic narrative power, Sultan Alauddin Husain Shah, the ruler of independent Bengal, formally invited Bijoy Gupta to the royal court in Gaur and conferred upon him the esteemed royal title of 'Mahakavi' (Great Poet). This makes Padmapuran the earliest precisely dated literary milestone in Bengali literature mentioning the exact ruler and year.",

    historyChap5Title: "5. The 530-Year Continuous Tradition of 'Royani Gaan' & Shravana Festival",
    historyChap5Text: "For more than five centuries since its founding, the temple's principal annual festival has been celebrated on the final day of the Bengali month of Shravana—Shravana Sankranti (Nag Panchami). The crowning jewel of this holy festival is the performance of traditional 'Royani Gaan' (melodic choral folk-ballads chanting the entire Padmapuran). Renowned choral troupes from all over the country sing day and night for 3 to 7 consecutive days, accompanied by traditional Dhol, Khol, and Kanshi. Hundreds of thousands of devotees gather from home and abroad, taking ritual dips in the Ghat-er Dighi and offering devotion, milk, and flowers at the feet of Maa Manasa.",

    historyChap6Title: "6. Modern Renaissance, One-Ton Brass Deity & Present Temple Architecture",
    historyChap6Text: "While the ancient shrine endured numerous natural calamities over the centuries, the devotion of local and global devotees, organized under the 'Poet Bijoy Gupta Memorial, Shree Shree Maa Manasa Mandir Preservation & Development Committee', has restored and elevated the sanctum to majestic splendor. In 2005, a magnificent one-ton (1,000 kg) solid brass deity of Shree Shree Maa Manasa was consecrated in the inner sanctum. In 2013, a modern three-storey marble temple structure, expansive Natmandir (prayer hall), and pilgrim lodge were inaugurated beside the ancient Dighi. Today, it stands both as a living divine shrine and an eternal cultural monument to Bengali heritage.",

    // Footer
    receipt: "Donation Receipt",
    receiptTitle: "Automated Donation Receipt",
    receiptSubtitle: "Download and print your official sacred devotee donation receipt",
    footerAbout: "The historic temple founded by medieval poet Bijoy Gupta. May Maa Manasa bestow peace, health, and prosperity upon all.",
    quickLinks: "Quick Links",
    adminLogin: "Admin Login",
    contact: "Contact",
    locationValue: "Goila, Agailjhara, Barishal, Bangladesh",
    presidentPhone: "01717-503657 (President)",
    copyright: "Manasa Mandir Goila. All rights reserved.",
    developedBy: "Site Developed by:"
  }
};

// Temple Heritage Constants & Bengali Digit Formatter
const TEMPLE_ESTABLISHED_YEAR = 1494;
const TEMPLE_SHAKABDA_YEAR = 1416;
const TEMPLE_AGE = Math.max(530, new Date().getFullYear() - TEMPLE_ESTABLISHED_YEAR);

const t = (key, lang = 'bn') => {
  if (I18N[lang] && I18N[lang][key] !== undefined) {
    return I18N[lang][key];
  }
  if (I18N.bn && I18N.bn[key] !== undefined) {
    return I18N.bn[key];
  }
  return key;
};

// Committee Role Translations Mapping
const ROLE_MAP = {
  'সভাপতি': { bn: 'সভাপতি', en: 'President' },
  'সিনিয়র সহ-সভাপতি': { bn: 'সিনিয়র সহ-সভাপতি', en: 'Senior Vice-President' },
  'সহ-সভাপতি': { bn: 'সহ-সভাপতি', en: 'Vice-President' },
  'সাধারণ সম্পাদক': { bn: 'সাধারণ সম্পাদক', en: 'General Secretary' },
  'সহ সাধারণ সম্পাদক': { bn: 'সহ সাধারণ সম্পাদক', en: 'Assistant General Secretary' },
  'যুগ্ম সাধারণ সম্পাদক': { bn: 'যুগ্ম সাধারণ সম্পাদক', en: 'Joint General Secretary' },
  'যুগ্ম সধারণ সম্পাদক': { bn: 'যুগ্ম সাধারণ সম্পাদক', en: 'Joint General Secretary' },
  'অর্থ সম্পাদক': { bn: 'অর্থ সম্পাদক', en: 'Treasurer / Finance Secretary' },
  'সহ অর্থ সম্পাদক': { bn: 'সহ অর্থ সম্পাদক', en: 'Assistant Finance Secretary' },
  'সহ-অর্থ সম্পাদক': { bn: 'সহ-অর্থ সম্পাদক', en: 'Assistant Finance Secretary' },
  'মহিলা বিষয়ক সম্পাদিকা': { bn: 'মহিলা বিষয়ক সম্পাদিকা', en: "Women's Affairs Secretary" },
  'সাংগাঠনিক সম্পাদক': { bn: 'সাংগাঠনিক সম্পাদক', en: 'Organizing Secretary' },
  'ধর্ম বিষয়ক সম্পাদক': { bn: 'ধর্ম বিষয়ক সম্পাদক', en: 'Religious Affairs Secretary' },
  'সাংস্কৃতিক সম্পাদক': { bn: 'সাংস্কৃতিক সম্পাদক', en: 'Cultural Secretary' },
  'দপ্তর সম্পাদক': { bn: 'দপ্তর সম্পাদক', en: 'Office Secretary' },
  'প্রচার সম্পাদক': { bn: 'প্রচার সম্পাদক', en: 'Publicity Secretary' },
  'সহ-প্রচার সম্পাদক': { bn: 'সহ-প্রচার সম্পাদক', en: 'Assistant Publicity Secretary' },
  'সমাজ কল্যাণ সম্পাদক': { bn: 'সমাজ কল্যাণ সম্পাদক', en: 'Social Welfare Secretary' },
  'উপদেষ্টা': { bn: 'উপদেষ্টা', en: 'Advisor' },
  'সদস্য': { bn: 'সদস্য', en: 'Executive Member' }
};

const translateRole = (role, lang = 'bn') => {
  if (!role) return '';
  const clean = role.trim();
  if (lang === 'bn') return clean;
  if (ROLE_MAP[clean] && ROLE_MAP[clean].en) return ROLE_MAP[clean].en;
  for (const k of Object.keys(ROLE_MAP)) {
    if (clean.includes(k)) return ROLE_MAP[k].en;
  }
  return clean;
};

// --- Reusable Sacred Section Header ---
const SectionHeader = ({ tag, title, subtitle, icon = "fa-om", className = "text-center mb-10" }) => (
  <div className={className}>
    {tag && (
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 text-amber-900 border border-amber-300/80 shadow-xs mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
        <i className={`fas ${icon} text-amber-600 text-[11px]`}></i>
        <span>{tag}</span>
      </div>
    )}
    <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-amber-950 tracking-normal leading-normal sm:leading-relaxed py-1">
      {title}
    </h2>
    <div className="flex items-center justify-center gap-2.5 mt-3.5 select-none">
      <span className="h-[2px] w-10 sm:w-16 bg-gradient-to-r from-transparent via-amber-400 to-amber-500 rounded-full"></span>
      <span className="w-2 h-2 rotate-45 bg-amber-500 border border-amber-300 shadow-xs"></span>
      <span className="text-amber-600 text-xs px-1 font-serif">✦ ॐ ✦</span>
      <span className="w-2 h-2 rotate-45 bg-amber-500 border border-amber-300 shadow-xs"></span>
      <span className="h-[2px] w-10 sm:w-16 bg-gradient-to-l from-transparent via-amber-400 to-amber-500 rounded-full"></span>
    </div>
    {subtitle && (
      <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

// --- Unified Matching Header Controls (Music + Language Capsule) ---
const HeaderControls = ({ isMusicPlaying, toggleMusic, lang, setLang, isCompact = false }) => {
  const toggleLang = (e) => {
    e.stopPropagation();
    const next = lang === 'bn' ? 'en' : 'bn';
    setLang(next);
    try {
      localStorage.setItem('site_lang', next);
      document.documentElement.lang = next;
    } catch (err) { }
  };

  if (isCompact) {
    return (
      <div className="flex items-center bg-black/30 backdrop-blur-md rounded-full border border-yellow-400/40 p-0.5 shadow-inner">
        <button
          type="button"
          onClick={toggleMusic}
          title={isMusicPlaying ? t('musicTitleOn', lang) : t('musicTitleOff', lang)}
          className={`p-1.5 px-2.5 rounded-full text-xs flex items-center gap-1 transition-all active:scale-90 cursor-pointer ${isMusicPlaying ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-orange-950 font-bold shadow-sm' : 'text-amber-200 hover:text-white'
            }`}
        >
          {isMusicPlaying ? (
            <div className="flex items-center gap-0.5 h-3">
              <span className="w-0.5 bg-orange-950 rounded-full animate-music-bar-1 h-2"></span>
              <span className="w-0.5 bg-orange-950 rounded-full animate-music-bar-2 h-3"></span>
              <span className="w-0.5 bg-orange-950 rounded-full animate-music-bar-3 h-2"></span>
            </div>
          ) : (
            <i className="fas fa-music text-[11px]"></i>
          )}
        </button>
        <div className="w-[1px] h-3 bg-white/25 mx-0.5"></div>
        <button
          type="button"
          onClick={toggleLang}
          title={lang === 'bn' ? "Switch to English" : "বাংলায় পরিবর্তন করুন"}
          className="p-1.5 px-2 rounded-full text-[11px] font-bold text-amber-200 hover:text-white flex items-center gap-1 active:scale-90 cursor-pointer"
        >
          <span className="tracking-wider">{lang === 'bn' ? 'বাং' : 'EN'}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center bg-black/25 backdrop-blur-md rounded-full border border-yellow-400/30 p-1 shadow-inner transition-all hover:border-yellow-400/60">
      {/* Matching Music Button */}
      <button
        type="button"
        onClick={toggleMusic}
        title={isMusicPlaying ? t('musicTitleOn', lang) : t('musicTitleOff', lang)}
        aria-label="Toggle Theme Music"
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 active:scale-95 cursor-pointer ${isMusicPlaying
          ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-orange-950 shadow-md'
          : 'text-amber-100 hover:text-white hover:bg-white/10'
          }`}
      >
        <div className="flex items-center gap-0.5 h-3 justify-center">
          {isMusicPlaying ? (
            <span className="flex items-center gap-0.5">
              <span className="w-0.5 bg-orange-950 rounded-full animate-music-bar-1 h-2.5"></span>
              <span className="w-0.5 bg-orange-950 rounded-full animate-music-bar-2 h-3.5"></span>
              <span className="w-0.5 bg-orange-950 rounded-full animate-music-bar-3 h-2"></span>
            </span>
          ) : (
            <i className="fas fa-music text-xs opacity-80"></i>
          )}
        </div>
        <span className="font-sans text-[11px] xl:text-xs">
          {isMusicPlaying ? (lang === 'en' ? 'Music: ON' : 'সঙ্গীত: চালু') : (lang === 'en' ? 'Music: OFF' : 'সঙ্গীত: বন্ধ')}
        </span>
      </button>

      {/* Subtle Divider */}
      <div className="w-[1px] h-3.5 bg-white/20 mx-1"></div>

      {/* Matching Language Switcher */}
      <button
        type="button"
        onClick={toggleLang}
        title={lang === 'bn' ? "Switch to English" : "বাংলায় পরিবর্তন করুন"}
        aria-label="Toggle Language"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-amber-100 hover:text-white hover:bg-white/10 transition-all duration-200 active:scale-95 cursor-pointer"
      >
        <i className="fas fa-globe text-xs text-yellow-300"></i>
        <span className="flex items-center gap-1 font-sans text-[11px] xl:text-xs">
          <span className={lang === 'bn' ? 'font-extrabold text-yellow-300 underline decoration-2' : 'opacity-70'}>বাং</span>
          <span className="opacity-40">/</span>
          <span className={lang === 'en' ? 'font-extrabold text-yellow-300 underline decoration-2' : 'opacity-70'}>EN</span>
        </span>
      </button>
    </div>
  );
};

// --- Devotional Theme Music Toggle Component ---
const MusicToggle = ({ isMusicPlaying, toggleMusic, lang, className = "" }) => (
  <button
    onClick={toggleMusic}
    title={isMusicPlaying ? t('musicTitleOn', lang) : t('musicTitleOff', lang)}
    aria-label="Toggle Theme Music"
    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all duration-300 shadow-sm active:scale-95 cursor-pointer ${isMusicPlaying
      ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-orange-950 border-yellow-200 shadow-yellow-500/30'
      : 'bg-orange-800/80 hover:bg-orange-700 text-yellow-200 border-orange-500/50'
      } ${className}`}
  >
    <div className="flex items-center gap-0.5 h-3 w-3 justify-center">
      {isMusicPlaying ? (
        <span className="flex items-center gap-0.5">
          <span className="w-0.5 bg-orange-950 rounded-full animate-music-bar-1 h-2.5"></span>
          <span className="w-0.5 bg-orange-950 rounded-full animate-music-bar-2 h-3.5"></span>
          <span className="w-0.5 bg-orange-950 rounded-full animate-music-bar-3 h-2"></span>
        </span>
      ) : (
        <i className="fas fa-music text-xs opacity-75"></i>
      )}
    </div>
    <span className="font-sans tracking-wide">
      {isMusicPlaying ? t('musicOn', lang) : t('musicOff', lang)}
    </span>
  </button>
);

// --- Floating Music Widget (Bottom-Left) ---
const FloatingMusicWidget = ({ isMusicPlaying, toggleMusic, lang }) => (
  <div className="fixed bottom-6 left-6 z-40 flex items-center">
    <button
      onClick={toggleMusic}
      title={isMusicPlaying ? t('musicTitleOn', lang) : t('musicTitleOff', lang)}
      aria-label="Theme Music Player"
      className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-2xl backdrop-blur-md border transition-all duration-300 active:scale-95 cursor-pointer group ${isMusicPlaying
        ? 'bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 text-white border-yellow-300 shadow-orange-500/50 ring-2 ring-yellow-400/40'
        : 'bg-gray-900/90 hover:bg-gray-800 text-yellow-300 border-gray-700 hover:border-yellow-500/50 shadow-black/50'
        }`}
    >
      {isMusicPlaying ? (
        <div className="flex items-center gap-1 h-3.5">
          <span className="w-1 bg-yellow-200 rounded-full animate-music-bar-1 h-3"></span>
          <span className="w-1 bg-white rounded-full animate-music-bar-2 h-4"></span>
          <span className="w-1 bg-yellow-200 rounded-full animate-music-bar-3 h-2.5"></span>
          <span className="w-1 bg-white rounded-full animate-music-bar-1 h-3.5"></span>
        </div>
      ) : (
        <div className="w-4 h-4 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
          <i className="fas fa-play text-[10px] ml-0.5"></i>
        </div>
      )}
      <span className="text-xs font-bold tracking-wide">
        {isMusicPlaying ? (lang === 'en' ? 'Theme Music' : 'থিম সঙ্গীত') : (lang === 'en' ? 'Play Theme' : 'থিম বাজান')}
      </span>
      {isMusicPlaying && (
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
        </span>
      )}
    </button>
  </div>
);

const LanguageSwitcher = ({ lang, setLang, className = "" }) => {
  const toggle = (e) => {
    e.stopPropagation();
    const next = lang === 'bn' ? 'en' : 'bn';
    setLang(next);
    try {
      localStorage.setItem('site_lang', next);
      document.documentElement.lang = next;
    } catch (err) { }
  };

  return (
    <button
      onClick={toggle}
      title={lang === 'bn' ? "Switch to English" : "বাংলায় পরিবর্তন করুন"}
      aria-label="Toggle Language"
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border transition-all duration-200 shadow-sm active:scale-95 cursor-pointer ${lang === 'bn'
        ? 'bg-yellow-400 text-orange-950 border-yellow-300 hover:bg-yellow-300'
        : 'bg-white text-orange-900 border-white hover:bg-yellow-50'
        } ${className}`}
    >
      <i className="fas fa-globe text-xs"></i>
      <span className="flex items-center gap-1 tracking-wider font-sans">
        <span className={lang === 'bn' ? 'font-black underline decoration-2' : 'opacity-60'}>বাং</span>
        <span className="opacity-40 font-light">/</span>
        <span className={lang === 'en' ? 'font-black underline decoration-2' : 'opacity-60'}>EN</span>
      </span>
    </button>
  );
};

// --- Helper Functions ---
const englishToBengaliNumber = (engStr) => {
  if (!engStr) return '';
  const benDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return engStr.toString().replace(/\d/g, d => benDigits[d]);
};

const formatNumber = (val, lang = 'bn') => {
  if (val === null || val === undefined) return '';
  const str = val.toString();
  if (lang === 'bn') {
    return englishToBengaliNumber(str);
  }
  const bnToEng = { '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4', '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9' };
  return str.replace(/[০-৯]/g, d => bnToEng[d]);
};

const formatDate = (dateStr, lang = 'bn') => {
  if (!dateStr) return '';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return lang === 'bn' ? englishToBengaliNumber(dateStr) : dateStr;
  }
  const [y, m, d] = dateStr.split('-');
  const dayNum = parseInt(d, 10);
  const monthIdx = parseInt(m, 10) - 1;

  if (lang === 'bn') {
    const monthsBn = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
    return `${englishToBengaliNumber(dayNum)} ${monthsBn[monthIdx]}, ${englishToBengaliNumber(y)}`;
  } else {
    const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${dayNum} ${monthsEn[monthIdx]}, ${y}`;
  }
};

const formatDateToBengali = (dateStr) => formatDate(dateStr, 'bn');

const formatPhoneNumber = (val, lang = 'bn') => {
  if (!val) return '';
  const str = val.toString().trim();
  const bnToEngDigits = { '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4', '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9' };
  const rawEng = str.replace(/[০-৯]/g, d => bnToEngDigits[d]);
  const digitsOnly = rawEng.replace(/\D/g, '');

  let formatted = str;
  if (digitsOnly.length === 11 && !str.includes('-')) {
    formatted = digitsOnly.slice(0, 5) + '-' + digitsOnly.slice(5);
  }
  return formatNumber(formatted, lang);
};

const translateMarqueeToEnglish = (text) => {
  if (!text) return '';
  const bnToEngDigits = { '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4', '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9' };
  const monthsMap = {
    'জানুয়ারি': 'January', 'ফেব্রুয়ারি': 'February', 'মার্চ': 'March', 'এপ্রিল': 'April',
    'মে': 'May', 'জুন': 'June', 'জুলাই': 'July', 'আগস্ট': 'August', 'সেপ্টেম্বর': 'September',
    'অক্টোবর': 'October', 'নভেম্বর': 'November', 'ডিসেম্বর': 'December',
    'বৈশাখ': 'Boishakh', 'জ্যৈষ্ঠ': 'Joishtho', 'আষাঢ়': 'Asharh', 'শ্রাবণ': 'Sravana',
    'ভাদ্র': 'Bhadra', 'আশ্বিন': 'Ashwin', 'কার্তিক': 'Kartik', 'অগ্রহায়ণ': 'Agrahayana',
    'পৌষ': 'Poush', 'মাঘ': 'Magh', 'ফাল্গুন': 'Falgun', 'চৈত্র': 'Chaitra'
  };
  const daysMap = {
    'রবিবার': 'Sunday', 'সোমবার': 'Monday', 'মঙ্গলবার': 'Tuesday',
    'বুধবার': 'Wednesday', 'বৃহস্পতিবার': 'Thursday', 'শুক্রবার': 'Friday', 'শনিবার': 'Saturday'
  };

  let res = text;
  // Convert digits
  res = res.replace(/[০-৯]/g, d => bnToEngDigits[d]);

  // Convert months
  for (const [bn, en] of Object.entries(monthsMap)) {
    res = res.replace(new RegExp(bn, 'g'), en);
  }

  // Convert days
  for (const [bn, en] of Object.entries(daysMap)) {
    res = res.replace(new RegExp(bn, 'g'), en);
  }

  // Common high-level semantic translation for annual temple announcement
  if (res.includes('প্রতি বছর') && (res.includes('পূজা ও উৎসব') || res.includes('পূজা')) && res.includes('অনুষ্ঠিত')) {
    return "The Annual Puja & Festival is celebrated every year with due solemnity at the historic Shree Shree Maa Manasa Mandir of Goila; all devotees are cordially invited to this sacred celebration with family and friends.";
  }

  // Comprehensive phrase translations
  const phraseReplacements = [
    [/গৈলার\s*ঐতিহ্যবাহী\s*শ্রী\s*শ্রী\s*মা\s*[-–—]?\s*মনসা\s*মন্দিরে(তে)?/g, 'at the historic Shree Shree Maa Manasa Mandir of Goila'],
    [/গৈলার\s*ঐতিহ্যবাহী\s*শ্রী\s*শ্রী\s*মা\s*[-–—]?\s*মনসা\s*মন্দিরের/g, 'of the historic Shree Shree Maa Manasa Mandir of Goila'],
    [/গৈলার\s*ঐতিহ্যবাহী\s*শ্রী\s*শ্রী\s*মা\s*[-–—]?\s*মনসা\s*মন্দির/g, 'the historic Shree Shree Maa Manasa Mandir of Goila'],
    [/শ্রী\s*শ্রী\s*মা\s*[-–—]?\s*মনসা\s*মন্দিরে(তে)?/g, 'at Shree Shree Maa Manasa Mandir of Goila'],
    [/শ্রী\s*শ্রী\s*মা\s*[-–—]?\s*মনসা\s*মন্দিরের/g, 'of Shree Shree Maa Manasa Mandir of Goila'],
    [/শ্রী\s*শ্রী\s*মা\s*[-–—]?\s*মনসা\s*মন্দির/g, 'Shree Shree Maa Manasa Mandir of Goila'],
    [/উদ্ধার ঐতিহ্যবাহী|গৈলার ঐতিহ্যবাহী|ঐতিহ্যবাহী/g, 'the historic'],
    [/গৈলা(তে)?/g, 'Goila'],
    [/মন্দিরে(তে)?/g, 'at the temple'],
    [/মন্দিরের/g, 'of the temple'],
    [/প্রতি\s*বছর/g, 'every year'],
    [/যথাযোগ্য\s*মর্যাদায়/g, 'with due solemnity'],
    [/বাৎসরিক\s*পূজা\s*ও\s*উৎসব[-–—]?\s*/g, 'Annual Puja & Festival '],
    [/বাৎসরিক\s*মহোৎসব/g, 'Annual Grand Festival'],
    [/আগামী/g, 'will be held on'],
    [/অনুষ্ঠিত\s*হতে\s*যাচ্ছে|অনুষ্ঠিত\s*হবে/g, 'will be held'],
    [/অনুষ্ঠিত\s*হয়|অনুষ্ঠিত\s*হয়ে\s*থাকে/g, 'is celebrated'],
    [/পবিত্র\s*এই\s*উৎসবে/g, 'in this sacred celebration'],
    [/উক্ত\s*অনুষ্ঠানে/g, 'in the ceremony'],
    [/সকল\s*ভক্তবৃন্দকে|সকল\s*ভক্তবৃন্দ|সকল\s*পুণ্যার্থীদের/g, 'all devotees'],
    [/আপনাদের\s*সকলকে/g, 'all of you'],
    [/সবান্ধবে\s*সাদর\s*আমন্ত্রণ।?/g, 'are cordially invited with family and friends.'],
    [/সাদর\s*আমন্ত্রণ।?/g, 'are cordially invited.'],
    [/সবান্ধবে\s*আমন্ত্রণ\s*জানাচ্ছি।?/g, 'are cordially invited with family and friends.'],
    [/সবান্ধবে\s*আমন্ত্রণ/g, 'cordially invited with family and friends'],
    [/আমন্ত্রণ\s*জানাচ্ছি।?/g, 'are cordially invited.'],
    [/আমন্ত্রণ\s*জানানো\s*হচ্ছে।?/g, 'are warmly invited.'],
    [/সবাইকে\s*আমন্ত্রণ।?/g, 'All are welcome.'],
    [/মন্দিরে\s*স্বাগতম/g, 'Welcome to the Temple'],
    [/মায়ের\s*আশীর্বাদ\s*আপনার\s*সহায়\s*হোক/g, "May Mother's blessings be with you"],
    [/ঐশ্বরিক\s*উপস্থিতি\s*অনুভব\s*করুন/g, 'Feel the divine presence']
  ];

  for (const [regex, rep] of phraseReplacements) {
    res = res.replace(regex, rep);
  }

  // Clean quotation marks, double punctuation, and stray symbols
  res = res.replace(/["'“”]/g, '')
    .replace(/,\s*,/g, ',')
    .replace(/;\s*;/g, ';')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // Strip any remaining Bengali characters so English output is 100% clean
  res = res.replace(/[\u0980-\u09FF]+/g, '').replace(/\s{2,}/g, ' ').trim();
  if (res.length > 0) res = res.charAt(0).toUpperCase() + res.slice(1);
  return res;
};

const shareEvent = async (ev, showToast, lang = 'bn') => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = ev.description;
  const plainDescription = tempDiv.textContent || tempDiv.innerText || "";
  const dateLabel = lang === 'en' ? 'Date:' : 'তারিখ:';
  const visitLabel = lang === 'en' ? 'For details, visit:' : 'বিস্তারিত জানতে ভিজিট করুন:';

  const shareData = {
    title: ev.title,
    text: `${ev.title}\n\n${plainDescription}\n\n${dateLabel} ${formatDate(ev.date, lang)}\n\n${visitLabel} `,
    url: window.location.origin + window.location.pathname + '#event'
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
      showToast(t('eventSharedToast', lang));
    }
  } catch (err) {
    console.log('Share canceled or failed', err);
  }
};

// --- Reusable Back Button Component ---
const BackButton = ({ navigateTo, lang }) => (
  <button onClick={() => navigateTo('home')} className="mb-6 inline-flex items-center gap-2 text-orange-700 font-bold bg-orange-100/80 px-5 py-2 rounded-full hover:bg-orange-200 hover:text-orange-900 transition-colors shadow-sm border border-orange-200">
    <i className="fas fa-arrow-left"></i> {t('backToHome', lang)}
  </button>
);

// --- Smooth Scroll-To-Top Button ---
const ScrollToTop = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 280);
    };
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label={t('scrollToTop', lang)}
      title={t('scrollToTop', lang)}
      className="fixed bottom-6 right-6 z-40 bg-gradient-to-tr from-orange-600 to-red-600 text-white w-12 h-12 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-yellow-300 hover:shadow-orange-500/50"
    >
      <i className="fas fa-arrow-up text-lg"></i>
    </button>
  );
};

// --- Header Component ---
const Header = ({ navigateTo, isMenuOpen, setIsMenuOpen, lang, setLang, isMusicPlaying, toggleMusic }) => (
  <header className="bg-gradient-to-r from-orange-600 via-orange-650 to-red-600 text-white shadow-xl sticky top-0 z-50 border-b border-orange-500/40">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigateTo('home')}>
        <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-yellow-400 shadow-md group-hover:scale-105 transition-transform duration-300">
          <img src="logo (1).jpg" alt="Logo" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-bold font-serif tracking-normal leading-normal text-white group-hover:text-yellow-200 transition-colors py-0.5">{t('templeTitle', lang)}</h1>
          <p className="text-xs text-yellow-200 font-medium">{t('templeLocation', lang)}</p>
        </div>
      </div>

      {/* Desktop Navigation with Matching Harmony */}
      <nav className="hidden lg:flex items-center gap-4 xl:gap-5 font-medium text-xs xl:text-sm">
        <button onClick={() => navigateTo('home')} className="hover:text-yellow-300 transition-colors cursor-pointer">{t('home', lang)}</button>
        <button onClick={() => navigateTo('history')} className="hover:text-yellow-300 transition-colors cursor-pointer">{t('history', lang)}</button>
        <button onClick={() => navigateTo('royani')} className="hover:text-yellow-300 transition-colors cursor-pointer flex items-center gap-1.5"><i className="fas fa-music text-yellow-300 text-xs"></i> {t('royani', lang)}</button>
        <button onClick={() => navigateTo('booking')} className="hover:text-yellow-300 transition-colors cursor-pointer flex items-center gap-1.5"><i className="fas fa-hands-praying text-yellow-300 text-xs"></i> {t('booking', lang)}</button>
        <button onClick={() => navigateTo('committee')} className="hover:text-yellow-300 transition-colors cursor-pointer">{t('committee', lang)}</button>
        <button onClick={() => navigateTo('event')} className="hover:text-yellow-300 transition-colors cursor-pointer">{t('events', lang)}</button>
        <button onClick={() => navigateTo('notice')} className="hover:text-yellow-300 transition-colors flex items-center gap-1.5 cursor-pointer">
          <i className="fas fa-bell text-yellow-300 text-xs animate-bounce"></i> {t('notice', lang)}
        </button>
        <button onClick={() => navigateTo('testimonials')} className="hover:text-yellow-300 transition-colors cursor-pointer">{t('testimonials', lang)}</button>

        {/* Primary CTA Button: Pronami (Matching Gradient & Shine) */}
        <button
          onClick={() => navigateTo('donation')}
          className="btn-shine bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-orange-950 px-4 py-2 rounded-full font-extrabold transition-all shadow-md hover:shadow-yellow-500/50 flex items-center gap-1.5 active:scale-95 border border-yellow-200 cursor-pointer text-xs xl:text-sm"
        >
          <i className="fas fa-heart text-red-600 animate-pulse text-xs"></i> {t('donation', lang)}
        </button>

        {/* Unified Matching Utility Capsule: Music + Language */}
        <HeaderControls isMusicPlaying={isMusicPlaying} toggleMusic={toggleMusic} lang={lang} setLang={setLang} />
      </nav>

      {/* Mobile Controls: Matching Unified Dock */}
      <div className="flex items-center gap-2 sm:gap-2.5 lg:hidden">
        <HeaderControls isMusicPlaying={isMusicPlaying} toggleMusic={toggleMusic} lang={lang} setLang={setLang} isCompact={true} />
        <button onClick={() => navigateTo('donation')} className="btn-shine bg-gradient-to-r from-amber-400 to-yellow-500 text-orange-950 p-2 rounded-full font-bold shadow-md hover:shadow-yellow-500/50 active:scale-90 border border-yellow-200 cursor-pointer">
          <i className="fas fa-heart text-red-600 text-sm"></i>
        </button>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2 text-2xl active:scale-90 cursor-pointer">
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>
    </div>

    {/* Mobile Slide-Out Drawer with 100% Solid Opaque Background & Backdrop */}
    {isMenuOpen && (
      <>
        {/* Dark Dimmer Backdrop to completely cover and hide background elements */}
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* 100% Solid Opaque Mobile Navigation Menu */}
        <div className="lg:hidden bg-stone-950 text-white fixed w-full left-0 top-[60px] sm:top-[68px] shadow-2xl flex flex-col font-medium border-t-2 border-orange-500 border-b-4 border-amber-500 z-50 max-h-[85vh] overflow-y-auto">
          <div className="p-3 bg-stone-900 border-b border-stone-800 flex justify-between items-center gap-2 sticky top-0 z-10 backdrop-blur-md">
            <span className="text-xs text-yellow-300 uppercase tracking-wider font-bold flex items-center gap-1.5">
              <i className="fas fa-sliders-h text-xs"></i> Controls / নিয়ন্ত্রণ
            </span>
            <div className="flex items-center gap-2.5">
              <HeaderControls isMusicPlaying={isMusicPlaying} toggleMusic={toggleMusic} lang={lang} setLang={setLang} isCompact={true} />
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                title={lang === 'en' ? "Close Menu" : "মেনু বন্ধ করুন"}
                aria-label="Close Navigation Menu"
                className="w-8 h-8 rounded-full bg-red-600/90 hover:bg-red-500 active:scale-90 text-white flex items-center justify-center transition-all shadow-md border border-red-400 cursor-pointer text-sm font-bold shrink-0"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
          <button onClick={() => navigateTo('home')} className="py-3 px-6 text-left border-b border-stone-800/80 bg-stone-950 hover:bg-stone-900 transition-colors flex items-center gap-3"><i className="fas fa-home text-yellow-400 w-5"></i> {t('home', lang)}</button>
          <button onClick={() => navigateTo('booking')} className="py-3 px-6 text-left border-b border-stone-800/80 bg-stone-950 hover:bg-stone-900 transition-colors flex items-center gap-3 text-amber-300 font-bold"><i className="fas fa-hands-praying text-amber-400 w-5"></i> {t('booking', lang)}</button>
          <button onClick={() => navigateTo('royani')} className="py-3 px-6 text-left border-b border-stone-800/80 bg-stone-950 hover:bg-stone-900 transition-colors flex items-center gap-3 text-amber-300"><i className="fas fa-music text-amber-400 w-5"></i> {t('royani', lang)}</button>
          <button onClick={() => navigateTo('history')} className="py-3 px-6 text-left border-b border-stone-800/80 bg-stone-950 hover:bg-stone-900 transition-colors flex items-center gap-3"><i className="fas fa-landmark text-yellow-400 w-5"></i> {t('history', lang)}</button>
          <button onClick={() => navigateTo('timings')} className="py-3 px-6 text-left border-b border-stone-800/80 bg-stone-950 hover:bg-stone-900 transition-colors flex items-center gap-3"><i className="fas fa-clock text-yellow-400 w-5"></i> {t('timings', lang)}</button>
          <button onClick={() => navigateTo('travel')} className="py-3 px-6 text-left border-b border-stone-800/80 bg-stone-950 hover:bg-stone-900 transition-colors flex items-center gap-3"><i className="fas fa-route text-yellow-400 w-5"></i> {t('travel', lang)}</button>
          <button onClick={() => navigateTo('mantras')} className="py-3 px-6 text-left border-b border-stone-800/80 bg-stone-950 hover:bg-stone-900 transition-colors flex items-center gap-3"><i className="fas fa-om text-yellow-400 w-5"></i> {t('mantras', lang)}</button>
          <button onClick={() => navigateTo('committee')} className="py-3 px-6 text-left border-b border-stone-800/80 bg-stone-950 hover:bg-stone-900 transition-colors flex items-center gap-3"><i className="fas fa-users text-yellow-400 w-5"></i> {t('committee', lang)}</button>
          <button onClick={() => navigateTo('event')} className="py-3 px-6 text-left border-b border-stone-800/80 bg-stone-950 hover:bg-stone-900 transition-colors flex items-center gap-3"><i className="fas fa-calendar-alt text-yellow-400 w-5"></i> {t('events', lang)}</button>
          <button onClick={() => navigateTo('notice')} className="py-3 px-6 text-left border-b border-stone-800/80 bg-stone-950 hover:bg-stone-900 transition-colors flex items-center gap-3"><i className="fas fa-bell text-yellow-400 w-5"></i> {t('noticeBoard', lang)}</button>
          <button onClick={() => navigateTo('testimonials')} className="py-3 px-6 text-left border-b border-stone-800/80 bg-stone-950 hover:bg-stone-900 transition-colors flex items-center gap-3"><i className="fas fa-comments text-yellow-400 w-5"></i> {t('testimonials', lang)}</button>
          <button onClick={() => navigateTo('donation')} className="py-3 px-6 text-left border-b border-stone-800/80 bg-stone-950 hover:bg-stone-900 transition-colors flex items-center gap-3 text-amber-400 font-extrabold"><i className="fas fa-heart text-red-500 w-5"></i> {t('donation', lang)}</button>
          <button onClick={() => navigateTo('admin')} className="py-3 px-6 text-left bg-black text-gray-300 flex items-center gap-3 hover:text-white transition-colors">
            <i className="fas fa-cog text-orange-400 w-5"></i> {t('adminPanel', lang)}
          </button>
        </div>
      </>
    )}
  </header>
);

// --- Footer Component ---
const Footer = ({ navigateTo, lang, setLang }) => (
  <footer className="bg-gray-900 text-orange-100 pt-12 pb-6 border-t-4 border-orange-600">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <div>
        <h3 className="text-2xl font-bold text-yellow-500 mb-4 flex items-center gap-2">
          {t('templeTitle', lang)}
        </h3>
        <p className="mb-4 text-gray-400">{t('footerAbout', lang)}</p>
        <div className="flex items-center gap-4">
          <a href="http://facebook.com/manasamondirgoila" target="_blank" rel="noreferrer" className="w-10 h-10 bg-orange-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-sm" title="Facebook Page">
            <i className="fab fa-facebook-f"></i>
          </a>
          <LanguageSwitcher lang={lang} setLang={setLang} className="!border-gray-700 !bg-gray-800 !text-yellow-400 hover:!bg-gray-700" />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-2">{t('quickLinks', lang)}</h4>
        <ul className="space-y-2">
          <li><button onClick={() => navigateTo('booking')} className="hover:text-yellow-400 flex items-center gap-2 text-yellow-300 font-bold"><i className="fas fa-hands-praying text-xs text-yellow-400"></i> {t('booking', lang)}</button></li>
          <li><button onClick={() => navigateTo('royani')} className="hover:text-yellow-400 flex items-center gap-2"><i className="fas fa-music text-xs text-yellow-400"></i> {t('royani', lang)}</button></li>
          <li><button onClick={() => navigateTo('history')} className="hover:text-yellow-400 flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> {t('history', lang)}</button></li>
          <li><button onClick={() => navigateTo('timings')} className="hover:text-yellow-400 flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> {t('timings', lang)}</button></li>
          <li><button onClick={() => navigateTo('travel')} className="hover:text-yellow-400 flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> {t('travel', lang)}</button></li>
          <li><button onClick={() => navigateTo('mantras')} className="hover:text-yellow-400 flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> {t('mantras', lang)}</button></li>
          <li><button onClick={() => navigateTo('committee')} className="hover:text-yellow-400 flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> {t('committee', lang)}</button></li>
          <li><button onClick={() => navigateTo('notice')} className="hover:text-yellow-400 flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> {t('noticeBoard', lang)}</button></li>
          <li><button onClick={() => navigateTo('donation')} className="hover:text-yellow-400 flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> {t('donation', lang)}</button></li>
          <li><button onClick={() => navigateTo('admin')} className="hover:text-yellow-400 flex items-center gap-2"><i className="fas fa-cog text-xs"></i> {t('adminLogin', lang)}</button></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-2">{t('contact', lang)}</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><i className="fas fa-map-marker-alt text-orange-500 mt-1 shrink-0"></i> <span>{t('locationValue', lang)}</span></li>
          <li className="flex items-center gap-3">
            <i className="fas fa-phone text-orange-500 shrink-0"></i>
            <a href="tel:01717503657" className="hover:text-yellow-400 transition-colors bengali-num">
              {t('presidentPhone', lang)}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <i className="fas fa-envelope text-orange-500 shrink-0"></i>
            <a href="mailto:info@manasamondirgoila.com" className="hover:text-yellow-400 transition-colors">
              info@manasamondirgoila.com
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
      <p>© {new Date().getFullYear()} {t('copyright', lang)}</p>
      <p className="mt-2">Site Developed by: <span className="text-orange-400 font-medium">Arpon Chakraborty</span></p>
    </div>
  </footer>
);

// --- Helper: Play Sacred Temple Ghanta / Bell Sound ---
const playSyntheticBellSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const now = ctx.currentTime;
    const freqs = [440, 880, 1320, 1760];
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      const vol = 0.28 / (idx + 1);
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2 - idx * 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 3.2);
    });
  } catch (e) {
    console.log("Synthetic bell sound error:", e);
  }
};

const playSacredBellSound = () => {
  try {
    const audio = new Audio('music/ghanta.mp3');
    audio.volume = 0.9;
    const p = audio.play();
    if (p !== undefined) {
      p.catch(() => playSyntheticBellSound());
    }
  } catch (e) {
    playSyntheticBellSound();
  }
};

// --- Helper: Play Authentic Sacred Shonkho / Shankhanaad Sound ---
const playSacredShankhSound = () => {
  try {
    const audio = new Audio('music/shankh.mp3');
    audio.volume = 0.95;
    const p = audio.play();
    if (p !== undefined) {
      p.catch((err) => console.log("Shankh audio play error:", err));
    }
  } catch (e) {
    console.error("Shankh sound error:", e);
  }
};

// --- Helper: Dynamic Live Temple Status (Clock-aware + Override) ---
const getLiveStatus = (timings, lang = 'bn') => {
  if (timings && timings.status_override && timings.status_override !== 'auto') {
    if (timings.status_override === 'open') {
      return {
        badge: lang === 'en' ? 'OPEN NOW' : 'এখন খোলা',
        title: lang === 'en' ? 'Sanctum Darshan is Open' : 'মন্দির এখন খোলা রয়েছে (দর্শন সময়)',
        desc: (lang === 'en' ? timings.darshan_note_en : timings.darshan_note) || (lang === 'en' ? 'Devotees are welcome for darshan' : 'ভক্তদের জন্য গর্ভগৃহ উন্মুক্ত রয়েছে'),
        color: 'green',
        icon: 'fa-door-open'
      };
    }
    if (timings.status_override === 'closed') {
      return {
        badge: lang === 'en' ? 'CLOSED' : 'এখন বন্ধ',
        title: lang === 'en' ? 'Temple Sanctum is Closed' : 'মন্দির এখন বন্ধ রয়েছে (বিশ্রাম কাল)',
        desc: timings.special_notice || (lang === 'en' ? 'Please check the daily schedule below.' : 'পরবর্তী দর্শনের সময়সূচী নিচে দেখুন।'),
        color: 'gray',
        icon: 'fa-door-closed'
      };
    }
    if (timings.status_override === 'special') {
      return {
        badge: lang === 'en' ? 'SPECIAL FESTIVAL' : 'মহোৎসব চলছে',
        title: lang === 'en' ? 'Special Festival Worship in Progress' : 'বিশেষ উৎসব পূজা ও দর্শন চলছে',
        desc: timings.special_notice || '',
        color: 'amber',
        icon: 'fa-om'
      };
    }
  }

  // Auto calculation based on Bangladesh UTC+6 time
  const now = new Date();
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const bdTotalMinutes = ((utcHours + 6) % 24) * 60 + utcMinutes;

  if (bdTotalMinutes >= 420 && bdTotalMinutes < 720) {
    return {
      badge: lang === 'en' ? 'OPEN NOW' : 'খোলা রয়েছে',
      title: lang === 'en' ? 'Morning Darshan & Puja' : 'প্রভাতী দর্শন ও অঞ্জলি চলছে',
      desc: lang === 'en' ? 'Sanctum open until 1:30 PM' : 'দুপুর ১:৩০ পর্যন্ত দর্শন চলবে',
      color: 'green',
      icon: 'fa-sun'
    };
  } else if (bdTotalMinutes >= 720 && bdTotalMinutes < 810) {
    return {
      badge: lang === 'en' ? 'BHOG OFFERING' : 'ভোগ নিবেদন',
      title: lang === 'en' ? 'Midday Bhog Offering & Darshan' : 'মহাপ্রসাদ ও দ্বিপ্রহরিক ভোগ চলছে',
      desc: lang === 'en' ? 'Sacred Bhog offering in sanctum' : 'গর্ভগৃহে মায়ের ভোগরাগ নিবেদন চলছে',
      color: 'amber',
      icon: 'fa-utensils'
    };
  } else if (bdTotalMinutes >= 810 && bdTotalMinutes < 960) {
    return {
      badge: lang === 'en' ? 'CLOSED' : 'কপাট বন্ধ',
      title: lang === 'en' ? 'Sanctum Closed (Rest Period)' : 'মন্দির এখন বন্ধ (বিশ্রাম কাল)',
      desc: lang === 'en' ? 'Next Darshan opens at 4:00 PM' : 'পরবর্তী দর্শন শুরু হবে বিকাল ৪:০০ টায়',
      color: 'gray',
      icon: 'fa-moon'
    };
  } else if (bdTotalMinutes >= 960 && bdTotalMinutes < 1080) {
    return {
      badge: lang === 'en' ? 'OPEN NOW' : 'খোলা রয়েছে',
      title: lang === 'en' ? 'Afternoon Sanctum Darshan' : 'অপরাহ্ন দর্শন ও প্রণাম উন্মুক্ত',
      desc: lang === 'en' ? 'Evening Aarti starts at 6:00 PM' : 'সন্ধ্যা ৬:০০ টায় আরতি শুরু হবে',
      color: 'green',
      icon: 'fa-sun'
    };
  } else if (bdTotalMinutes >= 1080 && bdTotalMinutes < 1200) {
    return {
      badge: lang === 'en' ? 'AARTI LIVE' : 'আরতি চলছে',
      title: lang === 'en' ? 'Evening Sandhya Aarti & Kirtan 🪔' : 'সন্ধ্যা আরতি, ধূপারতি ও কীর্তন চলছে 🪔',
      desc: lang === 'en' ? 'Conch blowing & sacred chanting' : 'শঙ্খধ্বনি ও মনসামঙ্গল পদাবলি পাঠ',
      color: 'amber',
      icon: 'fa-fire'
    };
  } else {
    return {
      badge: lang === 'en' ? 'CLOSED FOR NIGHT' : 'রাত্রিকালীন বন্ধ',
      title: lang === 'en' ? 'Temple Closed for the Night' : 'মন্দির এখন বন্ধ রয়েছে (রাত্রিকালীন বিশ্রাম)',
      desc: lang === 'en' ? 'Next Mangal Aarti opens at 7:00 AM' : 'পরবর্তী প্রভাতী দর্শন শুরু হবে সকাল ৭:০০ টায়',
      color: 'gray',
      icon: 'fa-moon'
    };
  }
};

// --- Home Component ---
const Home = ({ dbError, marqueeText, marqueeTextEn, testimonials, featuredTestimonialIds, committeeMembers, events, notices, timings, travelInfo, mantras, galleryItems, navigateTo, showToast, lang }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [testIdx, setTestIdx] = useState(0);

  const activeGallery = (galleryItems && galleryItems.length > 0) ? galleryItems : DEFAULT_GALLERY_ITEMS;
  const currentGalleryImages = activeGallery.map(g => g.url);
  const currentGalleryCaptions = activeGallery.map(g => ({ bn: g.captionBn, en: g.captionEn }));

  const featuredTests = testimonials.filter(t => featuredTestimonialIds.includes(t.id));
  const displayTests = featuredTests.length > 0 ? featuredTests : testimonials.slice(0, 3);

  useEffect(() => {
    const currentItem = activeGallery[currentImg];
    const isVid = currentItem && (currentItem.mediaType === 'video' || isVideoUrl(currentItem.url));
    if (isVid) return; // Do not auto-advance if user is watching a video

    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % currentGalleryImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [currentImg, currentGalleryImages.length, activeGallery]);

  useEffect(() => {
    if (displayTests.length <= 1) return;
    const tTimer = setInterval(() => {
      setTestIdx((prev) => (prev + 1) % displayTests.length);
    }, 5000);
    return () => clearInterval(tTimer);
  }, [displayTests.length]);

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % currentGalleryImages.length);
  const prevImg = () => setCurrentImg((prev) => (prev === 0 ? currentGalleryImages.length - 1 : prev - 1));

  const openLightbox = (idx, e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    const targetIdx = typeof idx === 'number' ? idx : currentImg;
    setLightboxImg(targetIdx);
  };

  const closeLightbox = (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    setLightboxImg(null);
  };

  useEffect(() => {
    if (lightboxImg === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxImg(null);
      if (e.key === 'ArrowRight') setLightboxImg((prev) => (prev + 1) % currentGalleryImages.length);
      if (e.key === 'ArrowLeft') setLightboxImg((prev) => (prev === 0 ? currentGalleryImages.length - 1 : prev - 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body ? document.body.style.overflow : '';
    if (document.body) document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (document.body) document.body.style.overflow = originalOverflow;
    };
  }, [lightboxImg]);

  // Determine marquee translation (auto-translate from admin Bengali or use custom English)
  const displayMarquee = lang === 'en'
    ? (marqueeTextEn && marqueeTextEn.trim() !== ''
      ? marqueeTextEn
      : translateMarqueeToEnglish(marqueeText))
    : marqueeText;

  return (
    <div className="bg-orange-50 min-h-screen">
      {dbError && (
        <div className="bg-red-600 text-white text-center py-2 text-sm font-bold shadow-md relative z-50">
          ⚠ Database error fetching data.
        </div>
      )}

      {/* CSS Marquee */}
      <div 
        className="bg-orange-800 text-yellow-200 py-2.5 sm:py-2 border-b-2 border-yellow-500 marquee-wrapper shadow-inner cursor-pointer"
        title={lang === 'en' ? "Touch or hover to pause" : "ট্যাপ বা মাউস ধরে রাখলে থামবে"}
      >
        <div className="marquee-text font-medium text-sm md:text-base inline-flex items-center gap-2 leading-relaxed">
          <i className="fas fa-bell text-yellow-300 animate-bounce inline-block text-xs mr-2 flex-shrink-0"></i>
          <span className="whitespace-nowrap flex-shrink-0">{displayMarquee}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-orange-900 text-white overflow-hidden min-h-[550px] flex items-center pt-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 z-10"></div>
          <img src="ma manasa mondir goila.jpg" alt="Ma Manasa" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-20 text-center flex flex-col items-center">

          {/* Spiritual Profile Picture */}
          <div className="w-56 h-56 md:w-56 md:h-56 mb-6 rounded-full p-1 spiritual-avatar animate-divine-float bg-gradient-to-tr from-yellow-300 via-amber-400 to-orange-500 relative shadow-[0_0_50px_rgba(251,191,36,0.6)]">
            <div className="absolute inset-0 rounded-full border-2 border-white/50 mix-blend-overlay"></div>
            <img src="manasaprofile.jpg" alt="Ma Manasa Deity" className="w-full h-full object-cover rounded-full border-4 border-orange-900 shadow-inner bg-white" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-yellow-400 mb-4 font-serif tracking-wide leading-normal py-2 px-1 divine-title-glow drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] [text-shadow:_0_0_25px_rgba(250,204,21,0.6),_0_2px_4px_rgba(0,0,0,0.9)]">
            {t('heroTitle', lang)}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-orange-100 mb-6 max-w-3xl mx-auto drop-shadow-md font-medium leading-relaxed px-4">
            {t('heroSubtitle', lang)}
          </p>

          {/* Classy Heritage Accent */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base text-yellow-200/95 tracking-wide mb-4 drop-shadow-md">
            <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-amber-400/70"></span>
            <span className="text-yellow-300 font-semibold">{lang === 'en' ? 'Established 1494 AD' : 'স্থাপিত ১৪৯৪ খ্রিষ্টাব্দ'}</span>
            <span className="text-amber-400/80 text-[10px]">◆</span>
            <span className="text-orange-100 font-medium">{lang === 'en' ? `${TEMPLE_AGE} Years of Sacred Heritage` : `${toBengaliDigits(TEMPLE_AGE)} বছরের সুপ্রাচীন ঐতিহ্য`}</span>
            <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-amber-400/70"></span>
          </div>

          {/* Live Darshan Status Pill */}
          {(() => {
            const live = getLiveStatus(timings, lang);
            return (
              <div
                onClick={() => navigateTo('timings')}
                className="mb-8 cursor-pointer inline-flex items-center gap-2.5 bg-black/45 hover:bg-black/65 backdrop-blur-md px-5 py-2.5 rounded-full border border-yellow-400/40 shadow-xl hover:border-yellow-300 transition-all hover:scale-105 active:scale-95 group"
                title={t('viewTimingsBtn', lang)}
              >
                <span className={`w-3 h-3 rounded-full flex-shrink-0 ${live.color === 'green' ? 'bg-green-500 live-radar-green' : (live.color === 'amber' ? 'bg-amber-400 live-radar-amber' : 'bg-gray-400')}`}></span>
                <span className="text-xs sm:text-sm font-bold text-yellow-300 flex items-center gap-1.5">
                  <i className={`fas ${live.icon} text-xs`}></i> {live.title}
                </span>
                <span className="text-xs text-orange-200 hidden sm:inline-block">✦ {live.desc}</span>
                <span className="text-[11px] bg-yellow-400 text-orange-950 px-2.5 py-0.5 rounded-full font-extrabold group-hover:bg-yellow-300 transition-colors ml-1 shadow-xs">
                  {t('timings', lang)} →
                </span>
              </div>
            );
          })()}

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-4">
            <button onClick={() => navigateTo('history')} className="btn-shine bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(234,88,12,0.6)] border border-orange-400 text-lg hover:-translate-y-1 hover:shadow-orange-500/70">
              {t('learnHistory', lang)}
            </button>
            <button onClick={() => navigateTo('donation')} className="btn-shine bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-orange-950 px-8 py-3.5 rounded-full font-extrabold transition-all shadow-[0_0_25px_rgba(234,179,8,0.7)] text-lg flex items-center justify-center gap-2 hover:-translate-y-1 border-2 border-yellow-200">
              <i className="fas fa-heart text-red-600"></i> {t('giveDonation', lang)}
            </button>
          </div>
        </div>

        {/* Unique Straight Bottom Edge */}
        <div className="absolute bottom-0 w-full flex flex-col z-20">
          <div className="h-[2px] bg-yellow-300 w-full opacity-70"></div>
          <div className="h-2 bg-yellow-500 w-full shadow-[0_-5px_15px_rgba(0,0,0,0.3)]"></div>
          <div className="h-6 bg-orange-800 w-full relative flex items-center justify-center overflow-hidden border-b border-orange-950">
            <div className="absolute inset-0 opacity-40 flex items-center" style={{ backgroundImage: 'radial-gradient(#fbbf24 2px, transparent 2px)', backgroundSize: '16px 16px', backgroundPosition: 'center' }}></div>
          </div>
        </div>
      </section>

      {/* Quick Spiritual Gateway Cards (Premium & Minimalist Heritage Design) */}
      <section className="container mx-auto px-4 -mt-8 relative z-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Card 1: Timings */}
          <div
            onClick={() => navigateTo('timings')}
            className="cursor-pointer bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-lg hover:shadow-2xl border border-orange-100 hover:border-amber-400/80 transition-all duration-300 hover:-translate-y-1.5 flex items-center gap-3.5 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200/70 flex items-center justify-center text-xl shadow-xs group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shrink-0">
              <i className="fas fa-clock"></i>
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900 font-serif text-base group-hover:text-orange-600 transition-colors truncate">
                  {t('timings', lang)}
                </h3>
                <i className="fas fa-arrow-right text-[11px] text-gray-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all ml-1.5 shrink-0"></i>
              </div>
              <p className="text-xs text-gray-500 font-medium truncate mt-0.5">{t('dailyTimingsTitle', lang)}</p>
            </div>
          </div>

          {/* Card 2: Travel */}
          <div
            onClick={() => navigateTo('travel')}
            className="cursor-pointer bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-lg hover:shadow-2xl border border-orange-100 hover:border-teal-400/80 transition-all duration-300 hover:-translate-y-1.5 flex items-center gap-3.5 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-500"></div>
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 border border-teal-200/70 flex items-center justify-center text-xl shadow-xs group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shrink-0">
              <i className="fas fa-route"></i>
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900 font-serif text-base group-hover:text-teal-700 transition-colors truncate">
                  {t('travel', lang)}
                </h3>
                <i className="fas fa-arrow-right text-[11px] text-gray-300 group-hover:text-teal-600 group-hover:translate-x-1 transition-all ml-1.5 shrink-0"></i>
              </div>
              <p className="text-xs text-gray-500 font-medium truncate mt-0.5">{lang === 'en' ? 'Directions & Map' : 'কীভাবে আসবেন ও মানচিত্র'}</p>
            </div>
          </div>

          {/* Card 3: Mantras */}
          <div
            onClick={() => navigateTo('mantras')}
            className="cursor-pointer bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-lg hover:shadow-2xl border border-orange-100 hover:border-yellow-500/80 transition-all duration-300 hover:-translate-y-1.5 flex items-center gap-3.5 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-yellow-400"></div>
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 border border-orange-200/70 flex items-center justify-center text-xl shadow-xs group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shrink-0">
              <i className="fas fa-om"></i>
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900 font-serif text-base group-hover:text-amber-700 transition-colors truncate">
                  {t('mantras', lang)}
                </h3>
                <i className="fas fa-arrow-right text-[11px] text-gray-300 group-hover:text-amber-600 group-hover:translate-x-1 transition-all ml-1.5 shrink-0"></i>
              </div>
              <p className="text-xs text-gray-500 font-medium truncate mt-0.5">{lang === 'en' ? 'Hymns & Padma Purana' : 'পবিত্র স্তোত্র ও ধ্যান মন্ত্র'}</p>
            </div>
          </div>

          {/* Card 4: Events & Festivals (Replaces duplicate Pronami card) */}
          <div
            onClick={() => navigateTo('event')}
            className="cursor-pointer bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-lg hover:shadow-2xl border border-orange-100 hover:border-amber-400/80 transition-all duration-300 hover:-translate-y-1.5 flex items-center gap-3.5 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-rose-500"></div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200/70 flex items-center justify-center text-xl shadow-xs group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shrink-0">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900 font-serif text-base group-hover:text-amber-700 transition-colors truncate">
                  {t('events', lang)}
                </h3>
                <i className="fas fa-arrow-right text-[11px] text-gray-300 group-hover:text-amber-600 group-hover:translate-x-1 transition-all ml-1.5 shrink-0"></i>
              </div>
              <p className="text-xs text-gray-500 font-medium truncate mt-0.5">{lang === 'en' ? 'Annual Festivals & Calendar' : 'বাৎসরিক মহোৎসব ও নির্ঘণ্ট'}</p>
            </div>
          </div>
        </div>
      </section>



      {/* Photo Gallery Section */}
      <section className="py-16 container mx-auto px-4 mt-2">
        <SectionHeader
          tag={lang === 'en' ? 'Temple Visuals' : 'আলোকচিত্র সংকলন'}
          title={t('photoGallery', lang)}
          subtitle={lang === 'en' ? 'Explore the historic architecture, serene pond, and sacred ambiance of Maa Manasa Temple.' : 'ঐতিহাসিক শ্রীশ্রী মা মনসা মন্দিরের পবিত্র প্রাঙ্গণ, নাটমন্দির ও সুপ্রাচীন ঐতিহ্যের এক ঝলক।'}
          icon="fa-images"
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Showcase Frame with Gold Rim & Ambient Glow */}
          <div className="relative p-2 sm:p-3 bg-gradient-to-br from-amber-200 via-amber-400/50 to-orange-300 rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(234,88,12,0.22)] border border-amber-300/80 group">
            <div
              onClick={(e) => {
                const currentItem = activeGallery[currentImg];
                const isVid = currentItem && (currentItem.mediaType === 'video' || isVideoUrl(currentItem.url));
                if (!isVid) openLightbox(currentImg, e);
              }}
              className="relative w-full aspect-[16/10] sm:aspect-video rounded-[1.4rem] overflow-hidden bg-stone-900 select-none shadow-inner cursor-pointer"
              title={lang === 'en' ? 'Click to open full screen preview' : 'পূর্ণ আকারে দেখতে ক্লিক করুন'}
            >
              {activeGallery.map((item, index) => {
                const isVid = item.mediaType === 'video' || isVideoUrl(item.url);
                const caption = lang === 'en' ? (item.captionEn || item.captionBn) : (item.captionBn || item.captionEn);
                return (
                  <div
                    key={item.id || index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-700 flex items-center justify-center bg-stone-900 ${index === currentImg ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}
                  >
                    <MediaViewer
                      url={item.url}
                      isVideo={isVid}
                      alt={caption || `Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                      controls={true}
                    />
                  </div>
                );
              })}

              {/* Prev / Next Chevrons */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImg(); }}
                aria-label={t('prevPhoto', lang)}
                className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-amber-500 text-white hover:text-amber-950 backdrop-blur-md border border-white/30 hover:border-amber-300 w-9 h-9 sm:w-11 sm:h-11 rounded-full opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 z-20 flex items-center justify-center shadow-lg active:scale-95 cursor-pointer"
              >
                <i className="fas fa-chevron-left text-xs sm:text-base"></i>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImg(); }}
                aria-label={t('nextPhoto', lang)}
                className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-amber-500 text-white hover:text-amber-950 backdrop-blur-md border border-white/30 hover:border-amber-300 w-9 h-9 sm:w-11 sm:h-11 rounded-full opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 z-20 flex items-center justify-center shadow-lg active:scale-95 cursor-pointer"
              >
                <i className="fas fa-chevron-right text-xs sm:text-base"></i>
              </button>

              {/* Zoom Pill on Hover */}
              <div className="absolute bottom-3 right-3 z-20 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => openLightbox(currentImg, e)}
                  className="bg-black/70 hover:bg-amber-500 text-amber-200 hover:text-amber-950 text-xs px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md cursor-pointer transition-colors"
                >
                  <i className="fas fa-expand text-[10px]"></i>
                  <span>{lang === 'en' ? 'Full View' : 'পূর্ণ পর্দা'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Dedicated Media Caption & Control Bar */}
          <div className="mt-3.5 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 sm:py-3.5 border border-amber-200/90 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Media Caption */}
            <div className="flex items-center gap-3 text-center sm:text-left min-w-0">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                <i className={(activeGallery[currentImg]?.mediaType === 'video' || isVideoUrl(activeGallery[currentImg]?.url)) ? "fas fa-video text-xs" : "fas fa-camera text-xs"}></i>
              </span>
              <p className="text-sm sm:text-base font-bold text-amber-950 font-serif truncate">
                {currentGalleryCaptions[currentImg] ? (lang === 'en' ? currentGalleryCaptions[currentImg].en : currentGalleryCaptions[currentImg].bn) : ''}
              </p>
            </div>

            {/* Dots, Counter & Fullscreen Button */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200/80 shadow-2xs">
                {activeGallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    aria-label={`Media ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === currentImg
                        ? 'w-6 bg-gradient-to-r from-amber-500 to-orange-500 shadow-xs'
                        : 'w-2 bg-amber-300 hover:bg-amber-400'
                      }`}
                  ></button>
                ))}
              </div>

              {/* Counter */}
              <span className="bg-amber-100 text-amber-900 font-bold text-xs sm:text-sm px-3 py-1 rounded-full border border-amber-300 font-mono tracking-wider shadow-2xs">
                <span className="text-amber-700">{toBengaliDigits(currentImg + 1)}</span>
                <span className="text-amber-400 font-normal mx-1">/</span>
                <span>{toBengaliDigits(activeGallery.length)}</span>
              </span>

              {/* Fullscreen Button */}
              <button
                onClick={(e) => openLightbox(currentImg, e)}
                className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
                title={lang === 'en' ? 'Open Full Screen Preview' : 'পূর্ণ আকারে দেখুন'}
              >
                <i className="fas fa-expand text-xs"></i>
                <span>{lang === 'en' ? 'Full Screen' : 'ফুল স্ক্রিন'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Thumbnail Strip with Video Badges */}
          <div className="grid grid-cols-4 gap-2.5 sm:gap-4 mt-3.5 px-1">
            {activeGallery.map((item, i) => {
              const isVid = item.mediaType === 'video' || isVideoUrl(item.url);
              return (
                <button
                  key={item.id || i}
                  onClick={() => setCurrentImg(i)}
                  onDoubleClick={(e) => openLightbox(i, e)}
                  className={`relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer border-2 ${i === currentImg
                      ? 'border-amber-500 ring-2 ring-amber-400/40 shadow-md scale-[1.02]'
                      : 'border-white/80 hover:border-amber-300 opacity-70 hover:opacity-100'
                    }`}
                >
                  {isVid ? (
                    <div className="w-full h-full bg-stone-900 flex flex-col items-center justify-center relative group">
                      <div className="w-8 h-8 rounded-full bg-amber-500/80 text-white flex items-center justify-center shadow-md">
                        <i className="fas fa-play text-xs ml-0.5"></i>
                      </div>
                      <span className="absolute bottom-1 right-1 bg-black/80 text-amber-300 text-[9px] px-1.5 py-0.5 rounded font-bold flex items-center gap-0.5">
                        <i className="fas fa-video text-[8px]"></i> ভিডিও
                      </span>
                    </div>
                  ) : (
                    <img src={item.url} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                  )}
                  {i === currentImg && (
                    <div className="absolute inset-0 bg-amber-500/15 pointer-events-none"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Fullscreen Media Lightbox Modal (Portaled directly to document.body) */}
        {lightboxImg !== null && typeof document !== 'undefined' && ReactDOM.createPortal(
          <div
            id="fullscreen-lightbox"
            className="fixed inset-0 z-[999999] flex flex-col items-center justify-between p-3 sm:p-6 bg-black/95 select-none"
            style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
          >
            {/* Dedicated Backdrop */}
            <div
              className="absolute inset-0 bg-black/85 cursor-pointer -z-10"
              onClick={closeLightbox}
              title={lang === 'en' ? 'Click background to close' : 'বন্ধ করতে বাইরে ক্লিক করুন'}
            />

            {/* Lightbox Top Header */}
            <div className="w-full max-w-6xl flex items-center justify-between text-white py-2 px-2 z-20">
              <div className="flex items-center gap-3">
                <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3.5 py-1 rounded-full text-xs sm:text-sm font-mono font-bold tracking-wider">
                  {toBengaliDigits(lightboxImg + 1)} / {toBengaliDigits(activeGallery.length)}
                </span>
                <span className="text-sm sm:text-base font-semibold text-amber-100 font-serif hidden md:inline truncate max-w-md">
                  {currentGalleryCaptions[lightboxImg] ? (lang === 'en' ? currentGalleryCaptions[lightboxImg].en : currentGalleryCaptions[lightboxImg].bn) : ''}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Native Fullscreen Display Toggle */}
                <button
                  onClick={() => {
                    if (!document.fullscreenElement) {
                      const el = document.getElementById('fullscreen-lightbox') || document.documentElement;
                      if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
                      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
                    } else {
                      if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
                    }
                  }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-amber-300 border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-md"
                  title={lang === 'en' ? 'Toggle Display Fullscreen' : 'মনিটর ফুলস্ক্রিন'}
                >
                  <i className="fas fa-expand-arrows-alt text-sm"></i>
                </button>

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="w-10 h-10 rounded-full bg-red-600/80 hover:bg-red-600 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
                  aria-label="Close"
                  title={lang === 'en' ? 'Close Preview' : 'বন্ধ করুন'}
                >
                  <i className="fas fa-times text-base"></i>
                </button>
              </div>
            </div>

            {/* Lightbox Main Media Display */}
            <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center min-h-0 my-2 px-2 sm:px-14">
              <div className="w-full h-full max-h-[72vh] sm:max-h-[78vh] flex items-center justify-center rounded-xl overflow-hidden">
                <MediaViewer
                  url={activeGallery[lightboxImg]?.url}
                  isVideo={activeGallery[lightboxImg]?.mediaType === 'video' || isVideoUrl(activeGallery[lightboxImg]?.url)}
                  alt={currentGalleryCaptions[lightboxImg] ? (lang === 'en' ? currentGalleryCaptions[lightboxImg].en : currentGalleryCaptions[lightboxImg].bn) : `Full view ${lightboxImg + 1}`}
                  className="max-w-full max-h-[72vh] sm:max-h-[78vh] object-contain rounded-xl shadow-2xl"
                  controls={true}
                  autoPlay={true}
                />
              </div>

              {/* Previous Media Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImg((prev) => (prev === 0 ? activeGallery.length - 1 : prev - 1));
                }}
                className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-amber-500 text-white hover:text-amber-950 border border-white/30 hover:border-amber-400 w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center cursor-pointer transition-all shadow-2xl z-30 active:scale-90"
                aria-label="Previous"
                title={lang === 'en' ? 'Previous' : 'পূর্ববর্তী'}
              >
                <i className="fas fa-chevron-left text-lg sm:text-xl"></i>
              </button>
              {/* Next Media Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImg((prev) => (prev + 1) % activeGallery.length);
                }}
                className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-amber-500 text-white hover:text-amber-950 border border-white/30 hover:border-amber-400 w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center cursor-pointer transition-all shadow-2xl z-30 active:scale-90"
                aria-label="Next"
                title={lang === 'en' ? 'Next' : 'পরবর্তী'}
              >
                <i className="fas fa-chevron-right text-lg sm:text-xl"></i>
              </button>
            </div>

            {/* Lightbox Bottom Caption & Thumbnails */}
            <div className="w-full max-w-4xl flex flex-col items-center gap-2 pb-2 z-20">
              <p className="text-center text-amber-200 text-sm sm:text-base font-serif px-4">
                {currentGalleryCaptions[lightboxImg] ? (lang === 'en' ? currentGalleryCaptions[lightboxImg].en : currentGalleryCaptions[lightboxImg].bn) : ''}
              </p>

              {/* Thumbnails in Lightbox */}
              <div className="flex items-center gap-2 overflow-x-auto p-1 max-w-full">
                {activeGallery.map((item, i) => {
                  const isVid = item.mediaType === 'video' || isVideoUrl(item.url);
                  return (
                    <button
                      key={item.id || i}
                      onClick={() => setLightboxImg(i)}
                      className={`w-14 h-10 sm:w-18 sm:h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 relative ${
                        i === lightboxImg
                          ? 'border-amber-400 scale-105 shadow-md shadow-amber-400/50'
                          : 'border-white/30 opacity-60 hover:opacity-100'
                      }`}
                    >
                      {isVid ? (
                        <div className="w-full h-full bg-stone-900 flex items-center justify-center text-amber-400">
                          <i className="fas fa-play text-xs"></i>
                        </div>
                      ) : (
                        <img src={item.url} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>,
          document.body
        )}
      </section>

      {/* Three Holy Sacred Feature Gateways */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto -mt-2 mb-12">
          {/* Card 1: Booking */}
          <div
            onClick={() => navigateTo('booking')}
            className="cursor-pointer bg-white p-6 sm:p-7 rounded-3xl shadow-xl hover:shadow-2xl border-2 border-amber-300/80 hover:border-amber-500 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group card-hover-glow"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600"></div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all">
                <i className="fas fa-hands-praying"></i>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">
                  {lang === 'en' ? 'Online Seva' : 'অনলাইন সেবা'}
                </span>
                <h3 className="text-xl font-bold font-serif text-gray-900 mt-0.5 group-hover:text-amber-700 transition-colors">
                  {t('booking', lang)}
                </h3>
              </div>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
              {lang === 'en' ? 'Offer special Puja, Anna-Bhog, and personal prayer Sankalpa at the lotus feet of Maa Manasa.' : 'মা মনসার চরণে মানত শোধ, নিত্য ভোগ ও রোগমুক্তি সংকল্প গ্রহণের পূর্ণাঙ্গ সেবা।'}
            </p>
            <div className="flex items-center justify-between text-xs font-bold text-amber-700 pt-3 border-t border-gray-100">
              <span>{lang === 'en' ? 'Book Sankalpa' : 'সংকল্প নিন ও টোকেন পান'}</span>
              <i className="fas fa-arrow-right group-hover:translate-x-1.5 transition-transform"></i>
            </div>
          </div>

          {/* Card 2: Royani Gaan */}
          <div
            onClick={() => navigateTo('royani')}
            className="cursor-pointer bg-white p-6 sm:p-7 rounded-3xl shadow-xl hover:shadow-2xl border-2 border-orange-300/80 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group card-hover-glow"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-600 via-red-600 to-amber-600"></div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-700 border border-orange-200 flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <i className="fas fa-music"></i>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 bg-orange-100 px-2.5 py-0.5 rounded-full">
                  {lang === 'en' ? '500+ Yrs Heritage' : 'ঐতিহ্যবাহী লোকসংগীত'}
                </span>
                <h3 className="text-xl font-bold font-serif text-gray-900 mt-0.5 group-hover:text-orange-700 transition-colors">
                  {t('royani', lang)}
                </h3>
              </div>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
              {lang === 'en' ? 'Explore the medieval folk epic of Poet Bijoy Gupta, authentic verses, and 108 Japa meditation.' : 'কবি বিজয় গুপ্তের অমর সৃষ্টি, চার খণ্ডের সচিত্র পালা এবং ১০৮ জপমালার পুণ্য সুরলহরী।'}
            </p>
            <div className="flex items-center justify-between text-xs font-bold text-orange-700 pt-3 border-t border-gray-100">
              <span>{lang === 'en' ? 'Read Epic & Chants' : 'পালা পরিক্রমা ও ধ্যান'}</span>
              <i className="fas fa-arrow-right group-hover:translate-x-1.5 transition-transform"></i>
            </div>
          </div>

          {/* Card 3: Donation & Receipt */}
          <div
            onClick={() => navigateTo('donation')}
            className="cursor-pointer bg-white p-6 sm:p-7 rounded-3xl shadow-xl hover:shadow-2xl border-2 border-yellow-300/80 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group card-hover-glow"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500"></div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-yellow-50 text-yellow-700 border border-yellow-200 flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-white transition-all">
                <i className="fas fa-file-invoice"></i>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-800 bg-yellow-100 px-2.5 py-0.5 rounded-full">
                  {lang === 'en' ? 'Donation Receipt' : 'স্বয়ংক্রিয় প্রণামী রশিদ'}
                </span>
                <h3 className="text-xl font-bold font-serif text-gray-900 mt-0.5 group-hover:text-yellow-700 transition-colors">
                  {t('receipt', lang)}
                </h3>
              </div>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
              {lang === 'en' ? 'Download and print your official sacred devotee donation receipt with seal & serial number.' : 'মন্দির তহবিলে প্রদত্ত প্রণামীর অফিসিয়াল সিল ও স্মারক নম্বরযুক্ত রশিদ ডাউনলোড ও প্রিন্ট করুন।'}
            </p>
            <div className="flex items-center justify-between text-xs font-bold text-yellow-800 pt-3 border-t border-gray-100">
              <span>{lang === 'en' ? 'Get Donation Receipt' : 'প্রণামী রশিদ সংগ্রহ করুন'}</span>
              <i className="fas fa-arrow-right group-hover:translate-x-1.5 transition-transform"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Famous Devotee Section */}
      <section className="py-16 bg-white border-y border-orange-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-orange-100 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-200 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-yellow-200 rounded-full opacity-40 blur-2xl"></div>

            <div className="w-full md:w-1/3 flex justify-center relative z-10">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center border-[6px] border-orange-300 shadow-xl overflow-hidden">
                <img
                  src="kobi bijoy gupta.png"
                  alt="Kobi Bijoy Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3 relative z-10 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-900 mb-2 border-b-2 border-yellow-500 inline-flex items-center gap-2 pb-2"><i className="fas fa-feather-alt text-amber-600 animate-bounce"></i> {t('famousDevoteeTitle', lang)}</h2>

              <div className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm text-amber-900/90 font-medium mb-4">
                <span className="font-semibold">{lang === 'en' ? 'Established 1494 AD' : 'স্থাপিত ১৪৯৪ খ্রিষ্টাব্দ'}</span>
                <span className="text-amber-500">•</span>
                <span>{lang === 'en' ? `${TEMPLE_AGE} Years of Heritage` : `${toBengaliDigits(TEMPLE_AGE)} বছরের সুপ্রাচীন ঐতিহ্য`}</span>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8 text-justify">
                {t('famousDevoteeText', lang)}
              </p>
              <button onClick={() => navigateTo('history')} className="btn-shine text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 px-8 py-3 rounded-full font-bold inline-flex items-center gap-2 transition-all shadow-md hover:shadow-orange-500/50 hover:scale-105 active:scale-95 cursor-pointer">
                {t('learnMore', lang)} <i className="fas fa-chevron-right text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Puja & Aarti Schedule Preview Section */}
      {timings && (
        <section className="py-16 container mx-auto px-4 bg-gradient-to-b from-orange-50 via-amber-50/40 to-orange-50 border-b border-orange-100">
          <SectionHeader
            tag={lang === 'en' ? 'Daily Rituals & Hours' : 'নিত্য সময়সূচী ও পূজা'}
            title={t('dailyTimingsTitle', lang)}
            subtitle={t('dailyTimingsSubtitle', lang)}
            icon="fa-clock"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Morning */}
            <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-orange-100 card-hover-glow text-center flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl mb-4 shadow-sm">
                  <i className="fas fa-sun"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t('morningPujaTitle', lang)}</h3>
                <div className="text-base sm:text-lg font-extrabold text-orange-600 mb-3 bg-orange-50 py-1.5 px-4 rounded-full inline-block border border-orange-100">
                  {lang === 'en' ? (timings.morning_puja_en || timings.morning_puja) : timings.morning_puja}
                </div>
                <p className="text-sm text-gray-600">{lang === 'en' ? (timings.morning_desc_en || timings.morning_desc) : timings.morning_desc}</p>
              </div>
            </div>

            {/* Bhog */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-amber-300 card-hover-glow text-center flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                {lang === 'en' ? 'Sanctum' : 'গর্ভগৃহ'}
              </div>
              <div>
                <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl mb-4 shadow-sm">
                  <i className="fas fa-utensils"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t('bhogOfferingTitle', lang)}</h3>
                <div className="text-base sm:text-lg font-extrabold text-orange-600 mb-3 bg-amber-50 py-1.5 px-4 rounded-full inline-block border border-amber-200">
                  {lang === 'en' ? (timings.bhog_time_en || timings.bhog_time) : timings.bhog_time}
                </div>
                <p className="text-sm text-gray-600">{lang === 'en' ? (timings.bhog_desc_en || timings.bhog_desc) : timings.bhog_desc}</p>
              </div>
            </div>

            {/* Evening Aarti */}
            <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-orange-100 card-hover-glow text-center flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 mx-auto rounded-2xl bg-red-100 text-red-600 flex items-center justify-center text-2xl mb-4 shadow-sm">
                  <i className="fas fa-fire"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t('sandhyaAartiTitle', lang)}</h3>
                <div className="text-base sm:text-lg font-extrabold text-orange-600 mb-3 bg-orange-50 py-1.5 px-4 rounded-full inline-block border border-orange-100">
                  {lang === 'en' ? (timings.sandhya_aarti_en || timings.sandhya_aarti) : timings.sandhya_aarti}
                </div>
                <p className="text-sm text-gray-600">{lang === 'en' ? (timings.sandhya_desc_en || timings.sandhya_desc) : timings.sandhya_desc}</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button onClick={() => navigateTo('timings')} className="btn-shine bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-3 rounded-full font-bold shadow-md hover:shadow-orange-500/50 inline-flex items-center gap-2 cursor-pointer hover:-translate-y-0.5 transition-transform">
              {t('viewTimingsBtn', lang)} <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </section>
      )}

      {/* Notice Board Overview Snippet */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-amber-50/40 via-orange-50/20 to-white border-y border-amber-200/70 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-500 via-amber-400 to-red-600"></div>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center">

            {/* Left Herald Column */}
            <div className="md:w-1/3 text-center md:text-left bg-gradient-to-b from-white/95 via-amber-50/60 to-orange-50/40 p-7 sm:p-9 rounded-[2.2rem] border-2 border-amber-200/90 shadow-[0_15px_35px_-10px_rgba(234,88,12,0.18)] relative overflow-hidden backdrop-blur-sm">
              {/* Background Ambient Glow */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-300/20 rounded-full blur-2xl pointer-events-none"></div>

              {/* Animated Soundwave Herald Emblem */}
              <div className="relative w-20 h-20 mx-auto md:mx-0 mb-5 flex items-center justify-center">
                <div className="absolute inset-0 rounded-2xl bg-amber-400/30 animate-soundwave"></div>
                <div className="absolute inset-0 rounded-2xl bg-orange-500/25 animate-soundwave-delayed"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-orange-500/35 border-2 border-amber-200 animate-divine-float">
                  <i className="fas fa-bullhorn animate-horn"></i>
                </div>
              </div>

              {/* Live Status Badge with Notice Count */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-100/90 text-amber-900 border border-amber-300 shadow-2xs mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                </span>
                <span>{lang === 'en' ? 'Live Bulletin' : 'অফিসিয়াল বার্তা'}</span>
                <span className="w-1 h-1 rounded-full bg-amber-400"></span>
                <span className="text-[11px] text-amber-800 font-semibold">{toBengaliDigits(notices.length)} {lang === 'en' ? 'Updates' : 'টি বিজ্ঞপ্তি'}</span>
              </div>

              {/* Title & Animated Pulse Divider */}
              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-gray-900 mb-2.5 tracking-normal leading-normal py-1">
                {t('noticeBoard', lang)}
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="h-1.5 w-16 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 rounded-full"></div>
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base font-medium">
                {t('noticeSectionDesc', lang)}
              </p>

              {/* Animated CTA Button */}
              <button
                onClick={() => navigateTo('notice')}
                className="btn-shine bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold px-8 py-3.5 rounded-full hover:shadow-xl hover:shadow-orange-500/40 transition-all shadow-md inline-flex items-center gap-3 mx-auto md:mx-0 cursor-pointer hover:scale-105 active:scale-95 text-sm sm:text-base group"
              >
                <span>{t('allNotices', lang)}</span>
                <i className="fas fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1.5"></i>
              </button>
            </div>

            {/* Right Notices List */}
            <div className="md:w-2/3 w-full">
              <div className="bg-white rounded-3xl shadow-xl border-2 border-amber-200/80 p-2 sm:p-5 relative divide-y divide-amber-100/80">
                {notices.slice(0, 3).map((n, i) => (
                  <div
                    key={n.id}
                    onClick={() => navigateTo('notice')}
                    className="p-4 sm:p-5 rounded-2xl hover:bg-gradient-to-r hover:from-amber-50/80 hover:to-orange-50/40 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2.5 gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {i === 0 && (
                          <span className="bg-red-50 text-red-600 border border-red-200 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            {lang === 'en' ? 'Latest' : 'সাম্প্রতিক'}
                          </span>
                        )}
                        <h4 className="font-bold text-gray-900 text-base sm:text-lg leading-snug group-hover:text-orange-600 transition-colors">
                          {n.title}
                        </h4>
                      </div>
                      <span className="text-xs bg-amber-50 text-amber-900 border border-amber-200/80 px-3 py-1 rounded-full font-semibold whitespace-nowrap flex items-center gap-1.5 shadow-2xs w-fit shrink-0">
                        <i className="fas fa-calendar-day text-amber-600"></i> {formatDate(n.date, lang)}
                      </span>
                    </div>
                    <div
                      className="text-gray-600 text-xs sm:text-sm line-clamp-2 leading-relaxed rich-text"
                      dangerouslySetInnerHTML={{ __html: n.text }}
                    ></div>
                    <div className="mt-2.5 flex items-center gap-1 text-xs font-bold text-orange-600 group-hover:translate-x-1 transition-transform">
                      <span>{lang === 'en' ? 'Read full notice' : 'বিস্তারিত দেখুন'}</span>
                      <i className="fas fa-chevron-right text-[10px]"></i>
                    </div>
                  </div>
                ))}
                {notices.length === 0 && (
                  <p className="text-gray-500 p-8 text-center font-medium">{t('noNotices', lang)}</p>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sacred Panjika & Devotional Hymns (Side by Side Matching Premium) */}
      <section className="py-16 container mx-auto px-4">
        <SectionHeader
          tag={lang === 'en' ? 'Sacred Devotion & Tithis' : 'পবিত্র দিনপঞ্জি ও নিত্য স্তোত্র'}
          title={lang === 'en' ? 'Temple Panjika & Sacred Chants' : 'শ্রীশ্রী মা মনসা নিত্য পঞ্জিকা ও মঙ্গলধ্বনি'}
          subtitle={lang === 'en' ? 'Auspicious lunar calendar, sacred tithis, daily hymns, and interactive temple bells.' : 'দৈনিক তিথি-নক্ষত্র, মনসা পঞ্চমী, অমাবস্যা-পূর্ণিমা এবং মন্দিরের পবিত্র শঙ্খ ও ঘণ্টাধ্বনি।'}
          icon="fa-om"
          className="text-center mb-10"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 max-w-7xl mx-auto items-stretch">
          {/* Left Column: Sacred Panjika Calendar */}
          <div className="w-full flex flex-col h-full">
            <PanjikaWidget navigateTo={navigateTo} lang={lang} />
          </div>

          {/* Right Column: Sacred Mantra & Interactive Ghonta / Shonkho Sound Sanctuary */}
          <div className="relative w-full h-full rounded-[2.2rem] p-[2px] bg-gradient-to-b from-amber-500/50 via-amber-600/30 to-amber-700/50 shadow-[0_15px_35px_-10px_rgba(180,83,9,0.22)] border border-amber-400/30 flex flex-col">
            <div className="bg-gradient-to-b from-[#1f140e] via-[#241710] to-[#1a100a] text-white rounded-[2.1rem] p-5 sm:p-6 md:p-7 relative overflow-hidden border border-amber-400/20 flex-1 flex flex-col justify-between text-center card-hover-glow">

              {/* Sacred Om Watermark & Background Glow */}
              <div className="absolute -right-6 -bottom-8 opacity-10 text-9xl text-amber-300 pointer-events-none select-none">
                <i className="fas fa-om"></i>
              </div>
              <div className="absolute -left-10 -top-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Corner Flourish Motifs */}
              <span className="absolute top-4 left-5 text-amber-400/30 text-sm pointer-events-none select-none">❖</span>
              <span className="absolute top-4 right-5 text-amber-400/30 text-sm pointer-events-none select-none">❖</span>
              <span className="absolute bottom-4 left-5 text-amber-400/30 text-sm pointer-events-none select-none">❖</span>
              <span className="absolute bottom-4 right-5 text-amber-400/30 text-sm pointer-events-none select-none">❖</span>

              <div className="relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  {/* Devotional Top Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-200/95 bg-amber-500/10 border border-amber-400/30 backdrop-blur-md mb-2.5 shadow-xs">
                    <i className="fas fa-om text-amber-400 text-xs"></i>
                    <span>{lang === 'en' ? 'Sacred Devotion of the Day' : 'আজকের পবিত্র স্তোত্র'}</span>
                    <i className="fas fa-om text-amber-400 text-xs"></i>
                  </div>

                  {/* Title with Soft Divine Sacred Gold */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-amber-50 drop-shadow-sm mb-3.5 tracking-normal leading-normal py-1">
                    {lang === 'en' ? 'Shree Shree Maa Manasa Pranam Mantra' : 'মা মনসার পবিত্র প্রণাম মন্ত্র'}
                  </h3>

                  {/* Shloka Altar Sanctuary Box */}
                  <div className="bg-stone-900/70 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-amber-500/25 max-w-xl mx-auto mb-4 shadow-sm relative">
                    <p className="text-base sm:text-lg md:text-xl font-serif text-amber-50 font-bold leading-relaxed tracking-wide mb-2.5 drop-shadow-sm">
                      ওঁ আস্তীকস্য মুনের্মাতা ভগিনী বাসুকেস্তথা ।<br />
                      জরৎকারুমুনেঃ পত্নী মনসাদেবী নমোহস্তুতে ॥
                    </p>
                    <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mx-auto my-2.5"></div>
                    <p className="text-xs sm:text-sm text-amber-100/90 font-normal leading-relaxed max-w-lg mx-auto">
                      {lang === 'en'
                        ? '"Salutations unto Goddess Manasa, Mother of sage Astika, sister of serpent king Vasuki, and devoted consort of sage Jaratkaru."'
                        : '"হে মুনি আস্তীকের জননী, নাগরাজ বাসুকির ভগিনী এবং তপস্বী জরৎকারু মুনির ধর্মপত্নী দেবি মনসা, আপনাকে ভক্তিপূর্ণ প্রণাম জানাই।"'}
                    </p>
                  </div>
                </div>

                {/* Interactive Ghonta, Shonkho & Mantras Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-2">
                  {/* Sacred Bell (Ghonta) Button */}
                  <button
                    onClick={() => {
                      playSacredBellSound();
                      if (showToast) showToast(t('bellRungToast', lang));
                    }}
                    className="btn-shine bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-stone-950 font-bold px-4 sm:px-5 py-2.5 rounded-full shadow-md hover:shadow-lg active:scale-95 border border-yellow-200/80 inline-flex items-center gap-2 transition-all cursor-pointer text-xs sm:text-sm group"
                  >
                    <i className="fas fa-bell text-stone-950 text-sm group-hover:rotate-12 transition-transform"></i>
                    <span>{t('playChime', lang)}</span>
                    <span className="text-sm">🔔</span>
                  </button>

                  {/* Sacred Conch (Shonkho) Button */}
                  <button
                    onClick={() => {
                      playSacredShankhSound();
                      if (showToast) showToast(t('shankhBlownToast', lang));
                    }}
                    className="btn-shine bg-gradient-to-r from-stone-50 via-amber-50 to-orange-100 hover:from-white hover:to-amber-100 text-amber-950 font-bold px-4 sm:px-5 py-2.5 rounded-full shadow-md hover:shadow-lg active:scale-95 border border-amber-300/80 inline-flex items-center gap-2 transition-all cursor-pointer text-xs sm:text-sm group"
                  >
                    <span className="text-lg leading-none group-hover:scale-110 transition-transform">🐚</span>
                    <span>{t('playShankh', lang)}</span>
                    <i className="fas fa-volume-up text-amber-800 text-[10px]"></i>
                  </button>

                  {/* Sacred Mantras Page Link */}
                  <button
                    onClick={() => navigateTo('mantras')}
                    className="bg-amber-950/70 hover:bg-amber-900 text-amber-200 hover:text-white border border-amber-500/40 px-4 sm:px-5 py-2.5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2 shadow-sm cursor-pointer text-xs sm:text-sm"
                  >
                    <i className="fas fa-book-open text-amber-300 text-xs"></i>
                    <span>{t('viewMantrasBtn', lang)}</span>
                    <i className="fas fa-arrow-right text-[10px]"></i>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider Overview Snippet */}
      {displayTests.length > 0 && (
        <section className="py-20 container mx-auto px-4 relative">
          <SectionHeader
            tag={lang === 'en' ? 'Devotee Voices' : 'ভক্তবৃন্দের অনুভূতি'}
            title={t('testimonialsTitle', lang)}
            subtitle={lang === 'en' ? 'Spiritual reflections and experiences shared by visiting devotees.' : 'শ্রীশ্রী মা মনসা মন্দিরে আগত দেশ-বিদেশের পুণ্যার্থীদের অনুভূতি ও ভক্তিগাথা।'}
            icon="fa-heart"
            className="text-center mb-12"
          />

          <div className="max-w-4xl mx-auto bg-gradient-to-b from-white to-orange-50 rounded-3xl shadow-xl p-8 md:p-14 text-center border border-orange-100 relative overflow-hidden transition-all duration-500 select-none">
            <i className="fas fa-quote-left text-6xl text-orange-200/50 absolute top-6 left-6 md:left-10 animate-divine-float"></i>
            <i className="fas fa-quote-right text-6xl text-orange-200/50 absolute bottom-6 right-6 md:right-10"></i>

            <div className="relative z-10 min-h-[160px] flex flex-col justify-center items-center">
              <div className="text-gray-800 italic text-xl md:text-2xl leading-relaxed mb-8 max-w-2xl rich-text" dangerouslySetInnerHTML={{ __html: displayTests[testIdx] ? displayTests[testIdx].text : '' }}>
              </div>
              {displayTests[testIdx] && (
                <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-orange-100 inline-block">
                  <h4 className="font-bold text-orange-900 text-lg">{displayTests[testIdx].name}</h4>
                  <p className="text-sm text-gray-500">{displayTests[testIdx].designation}</p>
                </div>
              )}
            </div>

            <div className="flex justify-center gap-3 mt-10 relative z-10">
              {displayTests.map((_, i) => (
                <div key={i} onClick={() => setTestIdx(i)} className={`h-2.5 rounded-full cursor-pointer transition-all ${i === testIdx ? 'w-8 bg-orange-600' : 'w-2.5 bg-orange-300 hover:bg-orange-400'}`}></div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button onClick={() => navigateTo('testimonials')} className="bg-white border-[3px] border-orange-500 text-orange-600 px-10 py-3 rounded-full font-bold hover:bg-orange-50 hover:text-orange-700 transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 cursor-pointer">
              {t('readMoreTestimonials', lang)} <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </section>
      )}

      {/* Committee Snippet */}
      <section className="py-16 bg-gradient-to-b from-orange-100 to-white border-t border-orange-200">
        <div className="container mx-auto px-4">
          <SectionHeader
            tag={lang === 'en' ? 'Trust & Management' : 'মন্দির প্রশাসন'}
            title={t('committeeTitle', lang)}
            subtitle={lang === 'en' ? 'Dedicated guardians managing temple rituals, heritage preservation, and development.' : 'কবি বিজয় গুপ্তের স্মৃতি সংরক্ষণ ও শ্রীশ্রী মা মনসা মন্দির উন্নয়ন ও পরিচালনা পরিষদ।'}
            icon="fa-users"
            className="text-center mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {committeeMembers.slice(0, 8).map((member) => (
              <div key={member.id} className="bg-white rounded-3xl p-6 text-center shadow-md border-2 border-orange-100/80 card-hover-glow transition-all duration-300 flex flex-col h-full justify-between items-center group">
                <div className="w-28 h-28 mx-auto bg-gradient-to-br from-amber-100 to-orange-200 rounded-full flex items-center justify-center mb-4 text-orange-400 border-4 border-yellow-300 shadow-md overflow-hidden text-5xl shrink-0 group-hover:scale-105 group-hover:border-orange-500 transition-all duration-300">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <i className="fas fa-user"></i>
                  )}
                </div>
                <div className="w-full h-14 flex items-center justify-center mb-1">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 text-center leading-snug group-hover:text-orange-600 transition-colors line-clamp-2 px-1">
                    {member.name}
                  </h3>
                </div>
                <div className="w-full min-h-[2.5rem] flex items-center justify-center mb-4">
                  <span className="text-orange-600 font-bold text-xs sm:text-sm text-center bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/60 leading-tight">
                    {translateRole(member.role, lang)}
                  </span>
                </div>
                <div className="w-full mt-auto pt-3 border-t border-gray-100 flex justify-center items-center">
                  <a href={`tel:${(member.phone || '').replace(/\s+/g, '')}`} className="w-full flex items-center justify-center gap-2 font-semibold text-gray-700 hover:text-green-600 bg-gray-50 hover:bg-green-50 py-2 px-3 rounded-xl border border-gray-200/80 transition-colors shadow-xs text-xs sm:text-sm">
                    <i className="fas fa-phone-alt text-green-600 text-xs"></i>
                    <span className="bengali-num">{formatPhoneNumber(member.phone, lang)}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => navigateTo('committee')} className="bg-orange-600 text-white px-10 py-3.5 rounded-full font-bold hover:bg-orange-700 transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 cursor-pointer">
              {t('viewFullCommittee', lang)} <i className="fas fa-users"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Events Overview Snippet */}
      {events.length > 0 && (
        <section className="py-16 container mx-auto px-4 bg-white border-t border-gray-100">
          <SectionHeader
            tag={lang === 'en' ? 'Sacred Ceremonies' : 'বাৎসরিক মহোৎসব'}
            title={t('latestEvents', lang)}
            subtitle={lang === 'en' ? 'Upcoming pujas, annual fairs, and religious gatherings at Goila Dham.' : 'বাৎসরিক পূজা, বৈশাখী মেলা ও মন্দিরের সকল ধর্মীয় কর্মসূচীর তালিকা।'}
            icon="fa-calendar-alt"
            className="text-center mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {events.slice(0, 3).map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col overflow-hidden card-hover-glow group">
                {event.image ? (
                  <div className="h-48 w-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src = 'images/events/event_4.jpg'; }} />
                    <span className="absolute bottom-3 left-4 z-20 text-white text-xs font-bold bg-orange-600/90 backdrop-blur-sm px-2.5 py-1 rounded-md shadow flex items-center gap-1 border border-orange-500/50">
                      <i className="fas fa-calendar-alt"></i> {formatDate(event.date, lang)}
                    </span>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white p-6 flex flex-col justify-center items-center text-center h-40">
                    <i className="fas fa-calendar-alt text-5xl mb-2 opacity-50 drop-shadow-md"></i>
                    <span className="font-bold text-lg leading-tight">{formatDate(event.date, lang)}</span>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow bg-orange-50/30">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{event.title}</h3>
                  <div className="text-gray-600 text-sm line-clamp-3 leading-relaxed flex-grow rich-text" dangerouslySetInnerHTML={{ __html: event.description }}></div>

                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <button onClick={() => shareEvent(event, showToast, lang)} className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1.5 text-sm font-medium cursor-pointer">
                      <i className="fas fa-share-alt"></i> {t('share', lang)}
                    </button>
                    <button onClick={() => navigateTo('event')} className="text-orange-600 font-bold hover:text-orange-800 flex items-center gap-1 ml-auto group-hover:underline cursor-pointer">
                      {t('details', lang)} <i className="fas fa-chevron-right text-xs transition-transform group-hover:translate-x-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => navigateTo('event')} className="border-[3px] border-orange-500 text-orange-600 px-8 py-2.5 rounded-full font-bold hover:bg-orange-50 hover:text-orange-700 transition-all inline-flex items-center gap-2 cursor-pointer">
              {t('viewAllEvents', lang)} <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

// --- Sub Pages ---

// 1. Daily Puja & Aarti Timings Page

// ==========================================
// 1. Holy Words Number Formatter (Bengali & English)
// ==========================================
const amountInBengaliWords = (num) => {
  const n = parseInt(num, 10);
  if (isNaN(n) || n <= 0) return 'শূন্য টাকা মাত্র';
  const ones = [
    '', 'এক', 'দুই', 'তিন', 'চার', 'পাঁচ', 'ছয়', 'সাত', 'আট', 'নয়', 'দশ',
    'এগারো', 'বারো', 'তেরো', 'চৌদ্দ', 'পনেরো', 'ষোলো', 'সতেরো', 'আঠারো', 'উনিশ', 'বিশ',
    'একুশ', 'বাইশ', 'তেইশ', 'চব্বিশ', 'পঁচিশ', 'ছাব্বিশ', 'সাতাশ', 'আঠাশ', 'উনত্রিশ', 'ত্রিশ',
    'একত্রিশ', 'বত্রিশ', 'তেত্রিশ', 'চৌত্রিশ', 'পঁয়ত্রিশ', 'ছত্রিশ', 'সাঁইত্রিশ', 'আটত্রিশ', 'উনচল্লিশ', 'চল্লিশ',
    'একচল্লিশ', 'বিয়াল্লিশ', 'তেতাল্লিশ', 'চুয়াল্লিশ', 'পঁয়তাল্লিশ', 'ছেচল্লিশ', 'সাতচল্লিশ', 'আটচল্লিশ', 'উনপঞ্চাশ', 'পঞ্চাশ',
    'একান্ন', 'বায়ান্ন', 'তিপ্পান্ন', 'চুয়ান্ন', 'পঞ্চান্ন', 'ছাপ্পান্ন', 'সাতান্ন', 'আটান্ন', 'উনষাট', 'ষাট',
    'একষট্টি', 'বাষট্টি', 'তেষট্টি', 'চৌষট্টি', 'পঁয়ষট্টি', 'ছেষট্টি', 'সাতষট্টি', 'আটষট্টি', 'উনসত্তর', 'সত্তর',
    'একাত্তর', 'বাহাত্তর', 'তিয়াত্তর', 'চুয়াত্তর', 'পঁচাত্তর', 'ছিয়াত্তর', 'সাতাত্তর', 'আটাত্তর', 'উনআশি', 'আশি',
    'একাশি', 'বিরাশি', 'তিরাশি', 'চুরাশি', 'পঁচাশি', 'ছিয়াশি', 'সাতাশি', 'আটাশি', 'উননব্বই', 'নব্বই',
    'একানব্বই', 'বিরানব্বই', 'তিরানব্বই', 'চুরানব্বই', 'পঁচানব্বই', 'ছিয়ানব্বই', 'সাতানব্বই', 'আটানব্বই', 'নিরানব্বই'
  ];

  let result = '';
  let rem = n;
  if (rem >= 10000000) {
    const koti = Math.floor(rem / 10000000);
    result += (amountInBengaliWords(koti).replace(' টাকা মাত্র', '')) + ' কোটি ';
    rem %= 10000000;
  }
  if (rem >= 100000) {
    const lakh = Math.floor(rem / 100000);
    result += (ones[lakh] || amountInBengaliWords(lakh).replace(' টাকা মাত্র', '')) + ' লক্ষ ';
    rem %= 100000;
  }
  if (rem >= 1000) {
    const hajar = Math.floor(rem / 1000);
    result += (ones[hajar] || amountInBengaliWords(hajar).replace(' টাকা মাত্র', '')) + ' হাজার ';
    rem %= 1000;
  }
  if (rem >= 100) {
    const shata = Math.floor(rem / 100);
    result += (ones[shata] || amountInBengaliWords(shata).replace(' টাকা মাত্র', '')) + ' শত ';
    rem %= 100;
  }
  if (rem > 0) {
    result += (ones[rem] || rem) + ' ';
  }
  return result.trim() + ' টাকা মাত্র';
};

const amountInEnglishWords = (num) => {
  const n = parseInt(num, 10);
  if (isNaN(n) || n <= 0) return 'Zero Taka Only';
  const a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const inWords = (num) => {
    if (num < 20) return a[num];
    const digit = num % 10;
    return b[Math.floor(num / 10)] + (digit ? ' ' + a[digit] : '');
  };
  let str = '';
  let rem = n;
  if (rem >= 10000000) {
    str += inWords(Math.floor(rem / 10000000)) + ' Crore ';
    rem %= 10000000;
  }
  if (rem >= 100000) {
    str += inWords(Math.floor(rem / 100000)) + ' Lakh ';
    rem %= 100000;
  }
  if (rem >= 1000) {
    str += inWords(Math.floor(rem / 1000)) + ' Thousand ';
    rem %= 1000;
  }
  if (rem >= 100) {
    str += inWords(Math.floor(rem / 100)) + ' Hundred ';
    rem %= 100;
  }
  if (rem > 0) {
    str += inWords(rem) + ' ';
  }
  return str.trim() + ' Taka Only';
};

// ==========================================
// 2. Real Active Interactive Bangla Panjika Calendar Widget
// ==========================================
const PanjikaWidget = ({ navigateTo, lang = 'bn' }) => {
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Annual Festival Target: August 18, 2026, 06:00:00 AM BST
    const targetDate = new Date('2026-08-18T06:00:00+06:00').getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const curYear = currentDate.getFullYear();
  const curMonth = currentDate.getMonth(); // 0 to 11

  // Days in month calculation
  const daysInMonth = new Date(curYear, curMonth + 1, 0).getDate();
  const firstDayIndex = new Date(curYear, curMonth, 1).getDay(); // 0 = Sun

  const monthNamesEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthNamesBn = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];

  // Approximate Bengali month mapping based on Gregorian month & day
  const getBengaliMonthInfo = (year, month, day = 15) => {
    // Bengali months table with Gregorian start dates (approx)
    const map = [
      { nameBn: 'পৌষ - মাঘ', nameEn: 'Poush - Magh', bnYearOffset: 594 },      // Jan
      { nameBn: 'মাঘ - ফাল্গুন', nameEn: 'Magh - Falgun', bnYearOffset: 594 },  // Feb
      { nameBn: 'ফাল্গুন - চৈত্র', nameEn: 'Falgun - Chaitra', bnYearOffset: 594 },// Mar
      { nameBn: 'চৈত্র - বৈশাখ', nameEn: 'Chaitra - Boishakh', bnYearOffset: 593 },// Apr
      { nameBn: 'বৈশাখ - জ্যৈষ্ঠ', nameEn: 'Boishakh - Jyoishtho', bnYearOffset: 593 },// May
      { nameBn: 'জ্যৈষ্ঠ - আষাঢ়', nameEn: 'Jyoishtho - Asharh', bnYearOffset: 593 }, // Jun
      { nameBn: 'আষাঢ় - শ্রাবণ', nameEn: 'Asharh - Shravan', bnYearOffset: 593 }, // Jul
      { nameBn: 'শ্রাবণ - ভাদ্র', nameEn: 'Shravan - Bhadra', bnYearOffset: 593 }, // Aug
      { nameBn: 'ভাদ্র - আশ্বিন', nameEn: 'Bhadra - Ashwin', bnYearOffset: 593 }, // Sep
      { nameBn: 'আশ্বিন - কার্তিক', nameEn: 'Ashwin - Kartik', bnYearOffset: 593 }, // Oct
      { nameBn: 'কার্তিক - অগ্রহায়ণ', nameEn: 'Kartik - Agrahayana', bnYearOffset: 593 },// Nov
      { nameBn: 'অগ্রহায়ণ - পৌষ', nameEn: 'Agrahayana - Poush', bnYearOffset: 594 } // Dec
    ];
    const item = map[month] || map[0];
    const bYear = year - item.bnYearOffset;
    return {
      monthStr: lang === 'en' ? item.nameEn : item.nameBn,
      yearStr: formatNumber(bYear, lang) + (lang === 'en' ? ' Bangabda' : ' বঙ্গাব্দ')
    };
  };

  const bnMonthInfo = getBengaliMonthInfo(curYear, curMonth);

  // Notable recurring and specific Hindu tithis/festivals
  const getSpecialDayInfo = (day) => {
    // Check specific known festival dates
    if (curMonth === 7 && day === 18) {
      return {
        badge: 'মহোৎসব',
        badgeEn: 'Annual Festival',
        titleBn: 'শ্রীশ্রী মা মনসা মন্দিরের বাৎসরিক মহোৎসব ও রয়ানী গান',
        titleEn: 'Annual Maa Manasa Mahotsav & Royani Gaan',
        descBn: 'মন্দিরের সবচেয়ে পবিত্র বাৎসরিক মহা উৎসব ও রাতভর রয়ানী গান।',
        descEn: 'The supreme annual festival of Goila Manasa Temple with all-night Royani.',
        isGrand: true,
        icon: 'fa-om'
      };
    }
    if (curMonth === 6 && (day === 18 || day === 19)) {
      return {
        badge: 'নাগ পঞ্চমী',
        badgeEn: 'Nag Panchami',
        titleBn: 'পবিত্র নাগ পঞ্চমী ব্রত ও মনসা পূজা',
        titleEn: 'Sacred Nag Panchami Fasting & Puja',
        descBn: 'সর্পভয় নিবারণ ও দেবীর বিশেষ অভিষেক তিথি।',
        descEn: 'Devotees observe fasting and worship for protection from serpents.',
        isGrand: true,
        icon: 'fa-shield-virus'
      };
    }
    if (curMonth === 8 && day === 17) {
      return {
        badge: 'ভাদ্র সংক্রান্তি',
        badgeEn: 'Bhadra Sankranti',
        titleBn: 'ভাদ্র সংক্রান্তি বাৎসরিক মনসাপূজা সমাপন',
        titleEn: 'Bhadra Sankranti Concluding Puja',
        descBn: 'শ্রাবণী মনসা পূজার শুভ সমাপন ও মহাপ্রসাদ বিতরণ।',
        descEn: 'Auspicious conclusion of Shravani puja with mahaprasad.',
        isGrand: true,
        icon: 'fa-praying-hands'
      };
    }

    // Cyclical tithis based on day of month for demonstration
    if (day === 15) {
      return {
        badge: 'পূর্ণিমা 🌕',
        badgeEn: 'Purnima 🌕',
        titleBn: 'পবিত্র পূর্ণিমা তিথি ও সত্যনারায়ণ পূজা',
        titleEn: 'Holy Purnima & Satyanarayan Puja',
        descBn: 'পূর্ণিমার পরম পুণ্য তিথিতে মন্দিরে বিশেষ ভোগরাগ ও আরতি অনুষ্ঠিত হয়।',
        descEn: 'Special Bhog and sandhya arati offered on the full moon day.',
        icon: 'fa-moon'
      };
    }
    if (day === 30 || day === 1) {
      return {
        badge: 'অমাবস্যা 🌑',
        badgeEn: 'Amavasya 🌑',
        titleBn: 'পবিত্র অমাবস্যা তিথি',
        titleEn: 'Holy Amavasya Day',
        descBn: 'পবিত্র নিশীথ আরাধনা ও দেবী দর্শনের শুভ সময়।',
        descEn: 'Auspicious new moon day for deep meditation and prayers.',
        icon: 'fa-circle'
      };
    }
    if (day === 11 || day === 26) {
      return {
        badge: 'একাদশী 🔱',
        badgeEn: 'Ekadashi 🔱',
        titleBn: 'পবিত্র একাদশী ব্রত ও হরিনাম সংকীর্তন',
        titleEn: 'Holy Ekadashi Fast & Harinam Kirtan',
        descBn: 'সর্বপাপক্ষয়কারী একাদশী উপবাস ও মন্দির নাটমন্দিরে কীর্তন।',
        descEn: 'Devotees observe fast and participate in sacred kirtan chants.',
        icon: 'fa-pray'
      };
    }
    if (day === 5 || day === 20) {
      return {
        badge: 'পঞ্চমী তিথি 🐍',
        badgeEn: 'Panchami 🐍',
        titleBn: 'শ্রী শ্রী মা মনসার বিশেষ তিথি পূজা',
        titleEn: 'Maa Manasa Special Tithi Puja',
        descBn: 'দেবী মনসার পবিত্র পঞ্চমী পূজায় মানত শোধ ও দুগ্ধ নিবেদন।',
        descEn: 'Devotees offer milk and pushpanjali at the lotus feet of the Goddess.',
        icon: 'fa-feather-alt'
      };
    }
    return null;
  };

  const prevMonth = () => {
    setCurrentDate(new Date(curYear, curMonth - 1, 1));
    setSelectedDay(null);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(curYear, curMonth + 1, 1));
    setSelectedDay(null);
  };

  const goToToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDay(today.getDate());
  };

  const todayDate = new Date();
  const isCurrentMonth = todayDate.getFullYear() === curYear && todayDate.getMonth() === curMonth;
  const todayDay = todayDate.getDate();

  const weekDaysBn = ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহঃ', 'শুক্র', 'শনি'];
  const weekDaysEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="relative w-full h-full rounded-[2.2rem] p-[2px] bg-gradient-to-b from-amber-500/50 via-amber-600/30 to-amber-700/50 shadow-[0_15px_35px_-10px_rgba(180,83,9,0.22)] border border-amber-400/30 flex flex-col">
      <div className="bg-gradient-to-b from-[#1f140e] via-[#241710] to-[#1a100a] text-white rounded-[2.1rem] p-4 sm:p-6 md:p-7 relative overflow-hidden border border-amber-400/20 flex-1 flex flex-col justify-between card-hover-glow">

        {/* Sacred Om Watermark & Background Glow */}
        <div className="absolute -right-6 -bottom-8 opacity-10 text-9xl text-amber-300 pointer-events-none select-none">
          <i className="fas fa-om"></i>
        </div>
        <div className="absolute -left-10 -top-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Corner Flourish Motifs */}
        <span className="absolute top-4 left-5 text-amber-400/30 text-sm pointer-events-none select-none">❖</span>
        <span className="absolute top-4 right-5 text-amber-400/30 text-sm pointer-events-none select-none">❖</span>
        <span className="absolute bottom-4 left-5 text-amber-400/30 text-sm pointer-events-none select-none">❖</span>
        <span className="absolute bottom-4 right-5 text-amber-400/30 text-sm pointer-events-none select-none">❖</span>

        <div className="relative z-10 flex-1 flex flex-col justify-between">
          <div>
            {/* Devotional Top Badge */}
            <div className="text-center mb-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-200/95 bg-amber-500/10 border border-amber-400/30 backdrop-blur-md shadow-xs">
                <i className="fas fa-calendar-alt text-amber-400 text-xs"></i>
                <span>{lang === 'en' ? 'Sacred Temple Panjika' : 'পবিত্র দিনপঞ্জি ও তিথি'}</span>
                <i className="fas fa-om text-amber-400 text-xs"></i>
              </div>
            </div>

            {/* Title with Soft Divine Sacred Gold */}
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-amber-50 drop-shadow-sm mb-3.5 text-center tracking-normal leading-normal py-1">
              {lang === 'en' ? 'Shree Shree Maa Manasa Daily Panjika' : 'শ্রীশ্রী মা মনসা নিত্য শুভ পঞ্জিকা'}
            </h3>

            {/* Streamlined Header & Navigation Controls */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/20 pb-2 mb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-400/40 flex items-center justify-center text-amber-300 text-sm shadow-inner shrink-0">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-amber-200/80 font-medium">
                      {lang === 'en' ? `${monthNamesEn[curMonth]} ${curYear}` : `${monthNamesBn[curMonth]} ${formatNumber(curYear, lang)}`}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold font-serif text-amber-100">
                    {bnMonthInfo.monthStr} • {bnMonthInfo.yearStr}
                  </h4>
                </div>
              </div>

              {/* Minimalist Controls */}
              <div className="flex items-center gap-1 no-print">
                <button
                  onClick={prevMonth}
                  className="bg-stone-800/80 hover:bg-stone-700 text-amber-200 hover:text-white px-2 py-0.5 rounded border border-amber-500/30 text-[10px] font-bold transition-all active:scale-95 cursor-pointer flex items-center gap-1"
                  title="Previous Month"
                >
                  <i className="fas fa-chevron-left text-[9px]"></i>
                  <span className="hidden sm:inline">{lang === 'en' ? 'Prev' : 'পূর্ববর্তী'}</span>
                </button>
                <button
                  onClick={goToToday}
                  className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-stone-950 px-2 py-0.5 rounded text-[10px] font-bold shadow-xs transition-all active:scale-95 cursor-pointer flex items-center gap-1"
                  title="Today"
                >
                  <i className="fas fa-dot-circle text-[8px] text-red-700"></i>
                  <span>{lang === 'en' ? 'Today' : 'আজ'}</span>
                </button>
                <button
                  onClick={nextMonth}
                  className="bg-stone-800/80 hover:bg-stone-700 text-amber-200 hover:text-white px-2 py-0.5 rounded border border-amber-500/30 text-[10px] font-bold transition-all active:scale-95 cursor-pointer flex items-center gap-1"
                  title="Next Month"
                >
                  <span className="hidden sm:inline">{lang === 'en' ? 'Next' : 'পরবর্তী'}</span>
                  <i className="fas fa-chevron-right text-[9px]"></i>
                </button>
              </div>
            </div>

            {/* Slender Live Countdown Bar */}
            <div className="mb-2.5 px-2.5 py-1.5 rounded-xl bg-stone-900/80 border border-amber-500/20 flex flex-wrap items-center justify-between gap-1.5">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                <span className="text-[11px] sm:text-xs font-serif font-bold text-amber-100/90">
                  {t('annualFestivalTarget', lang)} • ১৮ আগস্ট ২০২৬
                </span>
              </div>
              <div className="flex items-center gap-1 font-mono text-[10px] sm:text-[11px] font-semibold text-amber-200">
                <span className="bg-amber-500/15 text-amber-200 px-1 py-0.2 rounded border border-amber-500/30">{formatNumber(timeLeft.days, lang)} {t('daysUnit', lang)}</span>
                <span className="text-amber-400/60">:</span>
                <span className="bg-amber-500/15 text-amber-200 px-1 py-0.2 rounded border border-amber-500/30">{formatNumber(timeLeft.hours, lang)} {t('hoursUnit', lang)}</span>
                <span className="text-amber-400/60">:</span>
                <span className="bg-amber-500/15 text-amber-200 px-1 py-0.2 rounded border border-amber-500/30">{formatNumber(timeLeft.minutes, lang)} {t('minsUnit', lang)}</span>
                <span className="text-amber-400/60">:</span>
                <span className="bg-amber-500/15 text-amber-200 px-1 py-0.2 rounded border border-amber-500/30">{formatNumber(timeLeft.seconds, lang)} {t('secsUnit', lang)}</span>
              </div>
            </div>

            {/* Compact Panjika Grid */}
            <div className="bg-stone-900/60 backdrop-blur-md rounded-xl p-1.5 sm:p-2 border border-amber-500/25 mb-2">
              {/* Days of Week Header with eye-soothing harmonious colors */}
              <div className="grid grid-cols-7 gap-1 text-center mb-1">
                {(lang === 'en' ? weekDaysEn : weekDaysBn).map((wd, i) => (
                  <div
                    key={i}
                    className={`py-0.5 rounded text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border shadow-2xs ${
                      i === 0
                        ? 'text-rose-200 bg-rose-950/60 border-rose-800/40'
                        : (i === 6 ? 'text-amber-200 bg-amber-950/60 border-amber-800/40' : 'text-amber-100/80 bg-stone-900/80 border-stone-800/70')
                    }`}
                  >
                    {wd}
                  </div>
                ))}
              </div>

              {/* Days Grid Cells */}
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDayIndex }).map((_, i) => (
                  <div key={`empty-${i}`} className="min-h-[28px] sm:min-h-[32px] rounded-lg bg-transparent"></div>
                ))}

                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const dayNum = i + 1;
                  const isToday = isCurrentMonth && dayNum === todayDay;
                  const isSelected = selectedDay === dayNum;
                  const special = getSpecialDayInfo(dayNum);

                  return (
                    <div
                      key={dayNum}
                      onClick={() => setSelectedDay(dayNum)}
                      className={`min-h-[28px] sm:min-h-[32px] p-0.5 sm:p-1 rounded-lg border transition-all cursor-pointer flex flex-col justify-between relative group select-none ${
                        isSelected
                          ? 'border-amber-300 bg-amber-600/40 ring-1 ring-amber-400/70 shadow-md scale-[1.02]'
                          : isToday
                          ? 'border-amber-400/90 bg-amber-500/25 ring-1 ring-amber-400/60 shadow-sm text-yellow-100'
                          : special
                          ? (special.isGrand ? 'border-amber-400/70 bg-amber-950/60 hover:bg-amber-900/70' : 'border-amber-500/40 bg-stone-900/80 hover:bg-amber-950/40')
                          : 'border-stone-800/70 bg-stone-900/60 hover:border-amber-400/40 hover:bg-amber-950/30'
                      }`}
                    >
                      <div className="flex justify-between items-center text-[10px] sm:text-[11px] leading-none">
                        <span className={`font-mono font-bold ${isToday ? 'text-amber-200' : 'text-stone-200'}`}>
                          {dayNum}
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-amber-300/90 font-bold">
                          {formatNumber(dayNum, lang)}
                        </span>
                      </div>

                      {isToday && (
                        <div className="absolute top-0.5 right-1/2 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></div>
                      )}

                      {special ? (
                        <div className="mt-auto pt-0.5">
                          <span
                            className={`block text-[7.5px] sm:text-[8.5px] font-bold px-0.5 py-0.2 rounded text-center truncate ${
                              special.isGrand
                                ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-stone-950 shadow-xs'
                                : 'bg-amber-400 text-stone-950 shadow-2xs'
                            }`}
                          >
                            {lang === 'en' ? special.badgeEn : special.badge}
                          </span>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Selected Day Drawer */}
          {selectedDay && (() => {
            const special = getSpecialDayInfo(selectedDay);
            const dayDate = new Date(curYear, curMonth, selectedDay);
            const dayStr = dayDate.toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

            return (
              <div className="mt-2 p-3 sm:p-3.5 rounded-2xl bg-stone-900/90 border border-amber-500/30 anim-fade-up">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-400/20 pb-1.5 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-extrabold text-amber-200">
                      <i className="fas fa-om text-xs mr-1"></i> {dayStr}
                    </span>
                    {special && (
                      <span className="text-[10px] bg-amber-400 text-stone-950 font-bold px-2 py-0.5 rounded-full">
                        {lang === 'en' ? special.badgeEn : special.badge}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedDay(null)}
                    className="text-gray-400 hover:text-white text-xs p-1"
                    title="Close"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>

                <p className="text-xs text-amber-100/90 leading-relaxed mb-2.5">
                  {special
                    ? (lang === 'en' ? special.descEn : special.descBn)
                    : (lang === 'en'
                        ? 'Auspicious day for Darshan, daily Puja offering, and peace sankalpa at Maa Manasa Temple.'
                        : 'শ্রী শ্রী মা মনসা মন্দিরের নিত্য পূজা, অঞ্জলি নিবেদন ও সর্বমঙ্গলের সংকল্প গ্রহণের পুণ্য সময়।')}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => {
                      navigateTo('booking');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="btn-shine bg-gradient-to-r from-amber-400 to-yellow-500 text-stone-950 font-bold px-3.5 py-1 rounded-full text-xs shadow-md active:scale-95 cursor-pointer flex items-center gap-1.5"
                  >
                    <i className="fas fa-hands-praying text-[11px]"></i>
                    {lang === 'en' ? 'Book Puja for This Date' : 'এই তিথিতে পূজা ও সংকল্প বুক করুন'}
                  </button>
                  <button
                    onClick={() => navigateTo('timings')}
                    className="bg-black/50 hover:bg-black/70 text-amber-200 font-semibold px-2.5 py-1 rounded-full border border-amber-400/30 text-xs transition-colors cursor-pointer"
                  >
                    <i className="fas fa-clock text-[10px] mr-1"></i>
                    {lang === 'en' ? 'Timings' : 'সময়সূচী'}
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

// 3. Online Puja & Sankalpa Booking Page
// ==========================================
const BookingPage = ({ pujaBookings, setPujaBookings, supabaseClient, navigateTo, showToast, lang = 'bn' }) => {
  const [formData, setFormData] = useState({
    devoteeName: '',
    gotra: '',
    phone: '',
    address: '',
    pujaDate: '',
    pujaType: 'মা মনসার বিশেষ নিত্য পূজা ও পুষ্পাঞ্জলি',
    sankalpa: '',
    amount: ''
  });
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const gotraPresets = ['কশ্যপ', 'শাণ্ডিল্য', 'ভরদ্বাজ', 'আলম্বায়ন', 'সাবর্ণ্য', 'মৌদ্গল্য', 'পরাশর', 'শিবগোত্র'];
  const pujaTypes = [
    {
      id: 'daily_special',
      nameBn: 'মা মনসার বিশেষ নিত্য পূজা ও পুষ্পাঞ্জলি',
      nameEn: 'Special Daily Manasa Puja & Pushpanjali',
      descBn: 'সুস্বাস্থ্য, দীর্ঘায়ু ও পারিবারিক শান্তি কামনায়'
    },
    {
      id: 'bhog_seva',
      nameBn: 'অন্নভোগ ও মহাপ্রসাদ নিবেদন',
      nameEn: 'Sacred Anna-Bhog & Mahaprasad Offering',
      descBn: 'মন্দিরে ভক্তসেবা ও দ্বিপ্রহরিক পরম অন্নভোগ'
    },
    {
      id: 'mansik_puja',
      nameBn: 'মনস্কামনা পূরণ ও মানত শোধ পূজা',
      nameEn: 'Wish-Fulfillment & Mansik Puja',
      descBn: 'বিশেষ মনোবাঞ্ছা পূর্ণান্তে দেবীর চরণে কৃতজ্ঞতা'
    },
    {
      id: 'sarpa_bhay',
      nameBn: 'সর্পভয় নিবারণ ও অষ্টনাগ পূজা',
      nameEn: 'Sarpa-Bhay Nivarana & Astanaga Puja',
      descBn: 'অষ্টনাগের সন্তুষ্টি ও গৃহশান্তি বিধান'
    },
    {
      id: 'shanti_sankalpa',
      nameBn: 'রোগমুক্তি ও সঙ্কটমোচন সংকল্প পূজা',
      nameEn: 'Healing & Crisis-Removal Sankalpa Puja',
      descBn: 'শারীরিক সুস্থতা ও বিঘ্নবিনাশ কামনায়'
    },
    {
      id: 'annual_festival',
      nameBn: 'বাৎসরিক শ্রাবণী মহোৎসব বিশেষ সংকল্প',
      nameEn: 'Annual Shravani Mahotsav Special Puja',
      descBn: 'ঐতিহাসিক ১৮ আগস্ট বাৎসরিক মহা মিলনোৎসব'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.devoteeName.trim() || !formData.phone.trim()) {
      if (showToast) showToast(lang === 'en' ? 'Please enter Devotee Name and Phone number' : 'অনুগ্রহ করে ভক্তের নাম ও মোবাইল নম্বর লিখুন');
      return;
    }
    const token = 'MMG-PUJA-' + Math.floor(100000 + Math.random() * 900000);
    const booking = {
      id: 'book_' + Date.now(),
      ...formData,
      token,
      status: 'pending',
      timestamp: new Date().toISOString()
    };

    // Save to local storage
    try {
      const existing = JSON.parse(localStorage.getItem('mmg_puja_bookings') || '[]');
      const updated = [booking, ...existing];
      localStorage.setItem('mmg_puja_bookings', JSON.stringify(updated.slice(0, 50)));
      if (setPujaBookings) setPujaBookings(updated);
    } catch (err) {}

    // Sync to Supabase
    if (supabaseClient) {
      try {
        const { data: existingRow } = await supabaseClient.from('settings').select('id, value').eq('key', 'puja_bookings').maybeSingle();
        let currentList = [];
        if (existingRow && existingRow.value) {
          try { currentList = JSON.parse(existingRow.value); } catch (e) {}
        }
        const updatedCloud = [booking, ...currentList];
        if (existingRow) {
          await supabaseClient.from('settings').update({ value: JSON.stringify(updatedCloud) }).eq('id', existingRow.id);
        } else {
          await supabaseClient.from('settings').insert({ key: 'puja_bookings', value: JSON.stringify(updatedCloud) });
        }
      } catch (err) {
        console.error('Booking sync error:', err);
      }
    }

    setConfirmedBooking(booking);
    if (showToast) showToast(lang === 'en' ? 'Sacred Puja Booking Confirmed! Token generated.' : 'পূজা ও সংকল্প বুকিং সম্পন্ন হয়েছে! সংকল্প পত্র তৈরি হয়েছে।');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyBookingSlip = () => {
    if (!confirmedBooking) return;
    const text = `শ্রী শ্রী মা মনসা মন্দির, গৈলা - সংকল্প পত্র\nটোকেন নং: ${confirmedBooking.token}\nভক্তের নাম: ${confirmedBooking.devoteeName}\nগোত্র: ${confirmedBooking.gotra || 'অনুল্লিখিত'}\nপূজার প্রকার: ${confirmedBooking.pujaType}\nপূজার তারিখ: ${confirmedBooking.pujaDate || 'নিকটতম তিথি'}\nমোবাইল: ${confirmedBooking.phone}\nসংকল্প/প্রার্থনা: ${confirmedBooking.sankalpa || 'সর্বমঙ্গলের জন্য'}\nযোগাযোগ: ০১৭২৭০৭৫২৫৪, ০১৭১২৯৪০৭১৬`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    if (showToast) showToast(lang === 'en' ? 'Sankalpa details copied!' : 'সংকল্প বিবরণ কপি হয়েছে!');
  };

  return (
    <div className="bg-orange-50 min-h-screen py-12 anim-fade-up">
      <div className="container mx-auto px-4 max-w-4xl">
        <BackButton navigateTo={navigateTo} lang={lang} />

        {/* Banner Header */}
        <div className="text-center mb-10 page-banner-aurora p-8 rounded-3xl bg-gradient-to-r from-orange-950 via-red-950 to-amber-950 text-white shadow-xl border-2 border-yellow-400/40 relative">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-1.5 rounded-full text-xs font-bold mb-3 border border-yellow-400/30">
            <i className="fas fa-hands-praying text-xs text-yellow-400"></i>
            {lang === 'en' ? 'Online Darshan & Seva' : 'অনলাইন পূজা ও সংকল্প সেবা'}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-yellow-300 mb-3 divine-title-glow">
            {t('bookingTitle', lang)}
          </h1>
          <p className="text-orange-100 text-sm sm:text-base max-w-2xl mx-auto">
            {t('bookingSubtitle', lang)}
          </p>
        </div>

        {confirmedBooking ? (
          /* Confirmation Slip / Token Card */
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-amber-400/60 p-6 sm:p-10 mb-12 relative overflow-hidden print-sacred-card">
            <div className="text-center pb-6 border-b-2 border-amber-200">
              <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 border-2 border-amber-500 flex items-center justify-center text-amber-700 text-2xl shadow-md mb-3">
                <i className="fas fa-om"></i>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-orange-950">
                {lang === 'en' ? 'Shree Shree Maa Manasa Mandir, Goila' : 'শ্রী শ্রী মা মনসা মন্দির, গৈলা'}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                {lang === 'en' ? 'Goila, Agailjhara, Barishal • Established 1494 AD' : 'গৈলা, আগৈলঝাড়া, বরিশাল • স্থাপিত ১৪৯৪ খ্রিষ্টাব্দ'}
              </p>
              <div className="inline-block mt-3 bg-amber-100 text-amber-900 border border-amber-400 px-4 py-1 rounded-full text-xs sm:text-sm font-bold tracking-wide">
                ✦ {lang === 'en' ? 'Sacred Puja Booking Token Slip' : 'পবিত্র পূজা ও সংকল্প প্রাপ্তিস্বীকার পত্র'} ✦
              </div>
            </div>

            <div className="py-6 space-y-4 text-gray-800 text-sm sm:text-base">
              <div className="flex justify-between items-center bg-orange-50/70 p-3 rounded-xl border border-orange-100">
                <span className="font-semibold text-gray-600">{lang === 'en' ? 'Token Number:' : 'টোকেন নম্বর:'}</span>
                <span className="font-mono font-bold text-amber-800 text-lg sm:text-xl tracking-wider">{confirmedBooking.token}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="block text-xs text-gray-500 font-semibold">{lang === 'en' ? 'Devotee Name' : 'ভক্তের নাম'}</span>
                  <span className="font-bold text-gray-900 text-base">{confirmedBooking.devoteeName}</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="block text-xs text-gray-500 font-semibold">{lang === 'en' ? 'Gotra (Ancestry)' : 'গোত্র'}</span>
                  <span className="font-bold text-gray-900 text-base">{confirmedBooking.gotra || (lang === 'en' ? 'Not Specified' : 'অনুল্লিখিত')}</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="block text-xs text-gray-500 font-semibold">{lang === 'en' ? 'Puja Type' : 'পূজার প্রকার'}</span>
                  <span className="font-bold text-orange-900">{confirmedBooking.pujaType}</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="block text-xs text-gray-500 font-semibold">{lang === 'en' ? 'Scheduled Date' : 'কাঙ্ক্ষিত পূজার তারিখ'}</span>
                  <span className="font-bold text-gray-900">{confirmedBooking.pujaDate || (lang === 'en' ? 'Nearest Auspicious Tithi' : 'নিকটবর্তী শুভ তিথি')}</span>
                </div>
              </div>

              {confirmedBooking.sankalpa && (
                <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200">
                  <span className="block text-xs text-amber-800 font-bold mb-1">
                    <i className="fas fa-pray text-xs mr-1"></i>
                    {lang === 'en' ? 'Devotee Sankalpa / Prayer Details:' : 'বিশেষ প্রার্থনা ও সংকল্প বিবরণ:'}
                  </span>
                  <p className="text-gray-900 italic font-serif text-sm sm:text-base leading-relaxed">
                    "{confirmedBooking.sankalpa}"
                  </p>
                </div>
              )}

              <div className="bg-orange-100/70 p-4 rounded-2xl border border-orange-200 text-xs sm:text-sm text-orange-950 flex items-center gap-3">
                <i className="fas fa-phone-volume text-xl text-orange-700 shrink-0"></i>
                <div>
                  <strong className="block">{lang === 'en' ? 'Priest & Temple Coordination Contact:' : 'পুরোহিত ও মন্দির পরিচালনা সমন্বয় হেল্পলাইন:'}</strong>
                  <span>০১৭১৭-৫০৩৬৫৭ (সভাপতি), ০১৭২৭০৭৫২৫৪ (অর্থ সম্পাদক), ০১৭১২৯৪০৭১৬ (দপ্তর সম্পাদক)</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-gray-200 no-print">
              <button
                onClick={() => window.print()}
                className="btn-shine bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold px-6 py-2.5 rounded-full shadow-md flex items-center gap-2 active:scale-95 cursor-pointer text-sm"
              >
                <i className="fas fa-print"></i>
                {lang === 'en' ? 'Print / Save Slip' : 'সংকল্প পত্র প্রিন্ট / সেভ করুন'}
              </button>
              <button
                onClick={copyBookingSlip}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-6 py-2.5 rounded-full border border-gray-300 flex items-center gap-2 active:scale-95 cursor-pointer text-sm"
              >
                <i className="fas fa-copy"></i>
                {lang === 'en' ? 'Copy Details' : 'বিবরণ কপি করুন'}
              </button>
              <button
                onClick={() => setConfirmedBooking(null)}
                className="bg-orange-50 hover:bg-orange-100 text-orange-800 font-bold px-6 py-2.5 rounded-full border border-orange-300 flex items-center gap-2 active:scale-95 cursor-pointer text-sm"
              >
                <i className="fas fa-plus-circle"></i>
                {lang === 'en' ? 'Book Another Puja' : 'নতুন পূজা বুক করুন'}
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <div className="bg-white rounded-3xl shadow-xl border-2 border-orange-100 p-6 sm:p-10 mb-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-1">
                  {lang === 'en' ? 'Devotee Name *' : 'ভক্তের পূর্ণ নাম *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'en' ? 'Enter devotee full name' : 'যেমন: অর্পণ চক্রবর্তী'}
                  value={formData.devoteeName}
                  onChange={(e) => setFormData({ ...formData, devoteeName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-base font-medium"
                />
              </div>

              {/* Gotra with Preset Pills */}
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-1">
                  {lang === 'en' ? 'Gotra (Lineage)' : 'গোত্র'}
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {gotraPresets.map((g) => (
                    <button
                      type="button"
                      key={g}
                      onClick={() => setFormData({ ...formData, gotra: g })}
                      className={`px-3 py-1 rounded-full text-xs font-bold border transition-all active:scale-95 cursor-pointer ${
                        formData.gotra === g
                          ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                          : 'bg-orange-50 text-orange-900 border-orange-200 hover:bg-orange-100'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder={lang === 'en' ? 'Or type your Gotra manually' : 'অথবা সরাসরি গোত্র লিখুন (যেমন: কশ্যপ)'}
                  value={formData.gotra}
                  onChange={(e) => setFormData({ ...formData, gotra: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-1">
                    {lang === 'en' ? 'Mobile / WhatsApp Number *' : 'মোবাইল / হোয়াটসঅ্যাপ নম্বর *'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="017XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-base font-mono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-1">
                    {lang === 'en' ? 'Preferred Puja Date' : 'পূজার কাঙ্ক্ষিত তারিখ'}
                  </label>
                  <input
                    type="date"
                    value={formData.pujaDate}
                    onChange={(e) => setFormData({ ...formData, pujaDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-base"
                  />
                </div>
              </div>

              {/* Puja Type Radio Selector */}
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  {lang === 'en' ? 'Select Puja Type / Category *' : 'পূজার প্রকার নির্বাচন করুন *'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pujaTypes.map((pt) => {
                    const isSelected = formData.pujaType === pt.nameBn;
                    return (
                      <div
                        key={pt.id}
                        onClick={() => setFormData({ ...formData, pujaType: pt.nameBn })}
                        className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex items-start gap-3 ${
                          isSelected
                            ? 'bg-amber-50/80 border-amber-500 shadow-md'
                            : 'bg-white border-gray-200 hover:border-amber-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="pujaType"
                          checked={isSelected}
                          onChange={() => setFormData({ ...formData, pujaType: pt.nameBn })}
                          className="mt-1 accent-amber-600"
                        />
                        <div>
                          <span className="font-bold text-gray-900 block text-sm sm:text-base">
                            {lang === 'en' ? pt.nameEn : pt.nameBn}
                          </span>
                          <span className="text-xs text-gray-500 mt-0.5 block">
                            {pt.descBn}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Address / Location */}
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-1">
                  {lang === 'en' ? 'Devotee Address / City' : 'ভক্তের ঠিকানা / জেলা বা দেশের নাম'}
                </label>
                <input
                  type="text"
                  placeholder={lang === 'en' ? 'City, Country (e.g. Barishal / Kolkata)' : 'যেমন: আগৈলঝাড়া, বরিশাল / ঢাকা / কলকাতা'}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm"
                />
              </div>

              {/* Special Sankalpa / Prayer */}
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-1">
                  {lang === 'en' ? 'Special Sankalpa / Prayer (Optional)' : 'বিশেষ সংকল্প বা প্রার্থনা বিবরণ (ঐচ্ছিক)'}
                </label>
                <textarea
                  rows="3"
                  placeholder={lang === 'en' ? 'Write your personal prayer, family member names, or blessings sought' : 'দেবী মনসার শ্রীচরণে আপনার বা পরিবারের রোগমুক্তি, মঙ্গল বা বিশেষ মানসিক প্রার্থনা লিখুন'}
                  value={formData.sankalpa}
                  onChange={(e) => setFormData({ ...formData, sankalpa: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="btn-shine w-full sm:w-auto bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-white font-extrabold px-10 py-4 rounded-full text-lg shadow-xl shadow-orange-500/30 transition-all hover:scale-[1.02] active:scale-95 border-2 border-yellow-200 cursor-pointer"
                >
                  <i className="fas fa-om mr-2"></i>
                  {lang === 'en' ? 'Submit Sacred Puja Booking' : 'পবিত্র সংকল্প গ্রহণ ও পূজা বুক করুন'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

// ==========================================
// 4. Royani Gaan & Padma Purana Archive Page
// ==========================================
const RoyaniPage = ({ royaniPalas, navigateTo, showToast, lang = 'bn' }) => {
  const [activePala, setActivePala] = useState(0);
  const [japaCount, setJapaCount] = useState(0);

  const palas = (royaniPalas && royaniPalas.length > 0) ? royaniPalas : DEFAULT_ROYANI_PALAS;

  const handleJapa = () => {
    setJapaCount((prev) => {
      const next = (prev + 1) % 109;
      if (next === 108) {
        if (playSacredBellSound) playSacredBellSound();
        if (showToast) showToast(lang === 'en' ? 'Sacred 108 Japa Chanting Completed!' : '১০৮ বার পবিত্র মনসা মন্ত্র জপ সমাপ্ত হয়েছে! মায়ের কৃপা বর্ষিত হোক।');
      }
      return next;
    });
  };

  return (
    <div className="bg-orange-50 min-h-screen py-12 anim-fade-up">
      <div className="container mx-auto px-4 max-w-5xl">
        <BackButton navigateTo={navigateTo} lang={lang} />

        {/* Banner Aurora Header */}
        <div className="text-center mb-10 page-banner-aurora p-8 rounded-3xl bg-gradient-to-r from-orange-950 via-red-950 to-amber-950 text-white shadow-xl border-2 border-yellow-400/40 relative">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-1.5 rounded-full text-xs font-bold mb-3 border border-yellow-400/30">
            <i className="fas fa-music text-xs text-yellow-400"></i>
            {lang === 'en' ? '530+ Years Living Musical Heritage' : '৫৩০+ বছরের প্রাচীন লোকসংগীত ঐতিহ্য'}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-yellow-300 mb-3 divine-title-glow">
            {t('royaniTitle', lang)}
          </h1>
          <p className="text-orange-100 text-sm sm:text-base max-w-3xl mx-auto">
            {t('royaniSubtitle', lang)}
          </p>
        </div>

        {/* Historical Context Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-orange-100 mb-10 card-hover-glow">
          <div className="flex items-center gap-4 border-b border-orange-100 pb-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center text-2xl shrink-0 shadow-sm">
              <i className="fas fa-feather-alt"></i>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-gray-900">
                {lang === 'en' ? 'What is Royani Gaan?' : 'রয়ানী গান কী ও এর ঐতিহাসিক পটভূমি'}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                {lang === 'en' ? 'Origin in Goila, Agailjhara, Barishal' : 'গৈলা মনসা মন্দির ও মধ্যযুগের পদ্মাপুরাণ ঐতিহ্য'}
              </p>
            </div>
          </div>
          <div className="text-gray-700 leading-relaxed space-y-3 text-sm sm:text-base">
            <p>
              {lang === 'en'
                ? 'Royani Gaan is a distinctive devotional folk-musical performance in southern Bengal, centered upon the sacred Manasamangal (Padma Purana) composed by medieval master poet Bijoy Gupta in 1494 AD at Goila.'
                : 'রয়ানী গান হলো মধ্যযুগের অমর বাঙালি মহাকবি বিজয় গুপ্ত রচিত মনসামঙ্গল বা পদ্মাপুরাণ কাব্যের উপর ভিত্তি করে পরিবেশিত এক সুপ্রাচীন লোকসংগীত ধারা। রজনী (রাত) শব্দ থেকে রয়ানী নামের উদ্ভব, কারণ শ্রাবণ মাসে মনসা পূজাকে কেন্দ্র করে এই গান সারা রাতব্যাপী পালাগান হিসেবে ভাবগাম্ভীর্যের সাথে পরিবেশিত হয়।'}
            </p>
            <p>
              {lang === 'en'
                ? 'Performed by an ensemble of 12 to 20 artists led by the "Sarkar", accompanied by traditional khol, cymbals (kartal), violin, and shehnai, the all-night performance reenacts the triumph of devotion over ego through heartfelt songs and dramatic poetry.'
                : '১২ থেকে ২০ জনের একটি সুনিপুণ দল এই পালা পরিবেশন করে, যাদের প্রধানকে বলা হয় "সরকার"। খোল, করতাল, হারমোনিয়াম, বেহালা ও সানাইয়ের সুরের মূর্ছনায় করুণ ও বীররসের মেলবন্ধনে দেবী মনসা, চাঁদ সওদাগর ও বেহুলা-লখিন্দরের অমর আখ্যান জাগ্রত হয়। শত শত বছর ধরে গৈলা মনসা মন্দির প্রাঙ্গণে এই সুরলহরী অবিরাম প্রবহমান।'}
            </p>
          </div>
        </div>

        {/* Interactive 4 Episodes of Royani */}
        <div className="bg-white rounded-3xl shadow-xl border-2 border-orange-100 overflow-hidden mb-10">
          <div className="bg-gradient-to-r from-orange-100 via-amber-100 to-orange-100 p-6 border-b border-orange-200">
            <h3 className="text-xl sm:text-2xl font-bold text-orange-950 font-serif text-center flex items-center justify-center gap-2">
              <i className="fas fa-book-open text-orange-600"></i>
              {lang === 'en' ? 'Four Sacred Episodes of Royani Pala' : 'রয়ানী পালা গানের চার মূল অধ্যায়'}
            </h3>
          </div>

          {/* Episode Tabs */}
          <div className="p-4 sm:p-6 bg-orange-50/50 border-b border-orange-100 flex flex-wrap gap-2 justify-center">
            {palas.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActivePala(idx)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all active:scale-95 cursor-pointer ${
                  activePala === idx
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-orange-100 border border-orange-200'
                }`}
              >
                {lang === 'en' ? `Episode ${idx + 1}` : `পর্ব ${toBengaliDigits(idx + 1)}`}
              </button>
            ))}
          </div>

          {/* Active Pala Display */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                {lang === 'en' ? palas[activePala].tagEn : palas[activePala].tagBn}
              </span>
            </div>
            <h4 className="text-2xl font-bold font-serif text-gray-900 mb-4">
              {lang === 'en' ? palas[activePala].titleEn : palas[activePala].titleBn}
            </h4>

            {/* Sacred Poetic Verse Box */}
            <div className="my-6 p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 shadow-inner relative overflow-hidden">
              <div className="absolute top-2 right-4 text-6xl text-amber-200/60 font-serif select-none pointer-events-none">
                ❞
              </div>
              <p className="text-xs font-bold text-amber-800 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <i className="fas fa-quill-pen"></i>
                {lang === 'en' ? 'Original Verse by Poet Bijoy Gupta (Padma Purana):' : 'কবি বিজয় গুপ্তের মূল পদ্মাপুরাণ পয়ার:'}
              </p>
              <pre className="font-serif text-base sm:text-lg text-gray-900 whitespace-pre-line leading-relaxed font-bold">
                {palas[activePala].verseBn}
              </pre>
            </div>

            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              {lang === 'en' ? palas[activePala].storyEn : palas[activePala].storyBn}
            </p>
          </div>
        </div>

        {/* Digital Japa Mala Chanting Counter */}
        <div className="bg-gradient-to-r from-amber-900 via-orange-950 to-red-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-yellow-400/40 text-center relative overflow-hidden mb-12">
          <div className="max-w-xl mx-auto">
            <div className="inline-block bg-yellow-400/20 text-yellow-300 px-4 py-1 rounded-full text-xs font-bold mb-3 border border-yellow-400/30">
              <i className="fas fa-ring text-xs text-yellow-400 mr-1.5"></i>
              {lang === 'en' ? 'Digital 108 Japa Meditation' : '১০৮ বার পবিত্র মন্ত্র জপমালা'}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-yellow-300 mb-2">
              "ওঁ হ্রীং শ্রীং ক্লীং ঐং মনসাদেব্যৈ স্বাহা"
            </h3>
            <p className="text-xs sm:text-sm text-orange-200 mb-6">
              {lang === 'en'
                ? 'Tap the counter bead for each chant. Complete 108 times for sacred blessings.'
                : 'প্রতিবার মন্ত্রোচ্চারণের পর জপ বোতাম চাপুন। ১০৮ বার সম্পন্ন হলে পুণ্যধ্বনি ধ্বনিত হবে।'}
            </p>

            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-black/50 border-4 border-yellow-400 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                <span className="text-3xl sm:text-4xl font-mono font-extrabold text-yellow-300">
                  {formatNumber(japaCount, lang)}
                </span>
                <span className="text-[10px] sm:text-xs text-orange-200 uppercase tracking-widest">
                  / ১০৮
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handleJapa}
                className="btn-shine bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-orange-950 font-extrabold px-8 py-3.5 rounded-full text-base sm:text-lg shadow-lg active:scale-90 transition-all border-2 border-yellow-200 cursor-pointer"
              >
                <i className="fas fa-hand-pointer mr-2"></i>
                {lang === 'en' ? 'Chant / জপ করুন' : 'জপ করুন (স্পর্শ করুন)'}
              </button>
              <button
                onClick={() => setJapaCount(0)}
                className="bg-black/40 hover:bg-black/60 text-orange-200 font-semibold px-4 py-3 rounded-full border border-yellow-400/30 text-xs active:scale-95 cursor-pointer"
                title="Reset Counter"
              >
                <i className="fas fa-redo-alt"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Navigation CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-center no-print">
          <button
            onClick={() => navigateTo('mantras')}
            className="bg-white hover:bg-orange-100 text-orange-900 font-bold px-6 py-3 rounded-full border-2 border-orange-200 shadow-md text-sm active:scale-95 cursor-pointer"
          >
            <i className="fas fa-om mr-2 text-amber-600"></i>
            {lang === 'en' ? 'Explore All Sacred Mantras' : 'মন্দিরের সকল পবিত্র মন্ত্র দেখুন'}
          </button>
          <button
            onClick={() => navigateTo('booking')}
            className="btn-shine bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-6 py-3 rounded-full shadow-lg text-sm active:scale-95 cursor-pointer"
          >
            <i className="fas fa-hands-praying mr-2"></i>
            {lang === 'en' ? 'Book Special Puja Online' : 'অনলাইন পূজা বুকিং করুন'}
          </button>
        </div>
      </div>
    </div>
  );
};

const TimingsPage = ({ timings, navigateTo, lang }) => {
  const [currentTime, setCurrentTime] = useState(() => new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const live = getLiveStatus(timings, lang);
  const timeStr = currentTime.toLocaleTimeString(lang === 'bn' ? 'bn-BD' : 'en-US', { hour12: true });

  return (
    <div className="bg-orange-50 min-h-screen py-12 anim-fade-up">
      <div className="container mx-auto px-4 max-w-5xl">
        <BackButton navigateTo={navigateTo} lang={lang} />

        {/* Page Banner with Aurora Glow */}
        <div className="text-center mb-10 page-banner-aurora p-8 rounded-3xl bg-gradient-to-r from-orange-950 via-orange-900 to-red-950 text-white shadow-2xl border-2 border-yellow-400/40 relative">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-1.5 rounded-full text-xs font-bold mb-4 border border-yellow-400/30">
            <i className="fas fa-clock text-xs"></i> {lang === 'en' ? 'Sanctum Worship Hours' : 'গর্ভগৃহ পূজা ও সেবা সময়'}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-yellow-300 mb-3 divine-title-glow">
            {t('dailyTimingsTitle', lang)}
          </h1>
          <p className="text-orange-100 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {t('dailyTimingsSubtitle', lang)}
          </p>

          {/* Live Digital Clock & Status Pill */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-black/50 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-yellow-400/30 text-yellow-300 font-mono text-lg font-bold flex items-center gap-2 shadow-inner">
              <i className="fas fa-history text-sm text-yellow-400"></i>
              <span>{timeStr}</span>
              <span className="text-[11px] text-gray-400 font-sans font-normal ml-1">(BST)</span>
            </div>

            <div className={`px-5 py-2.5 rounded-2xl border backdrop-blur-md flex items-center gap-2.5 shadow-lg ${live.color === 'green' ? 'bg-green-950/70 border-green-400 text-green-200' :
              (live.color === 'amber' ? 'bg-amber-950/70 border-amber-400 text-amber-200' : 'bg-gray-900/70 border-gray-500 text-gray-300')
              }`}>
              <span className={`w-3 h-3 rounded-full flex-shrink-0 ${live.color === 'green' ? 'bg-green-400 live-radar-green' :
                (live.color === 'amber' ? 'bg-amber-400 live-radar-amber' : 'bg-gray-400')
                }`}></span>
              <span className="font-bold text-sm">{live.title}</span>
            </div>
          </div>
        </div>

        {/* 3 Main Ritual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Card 1: Morning */}
          <div className="bg-white rounded-3xl p-7 shadow-lg border-2 border-orange-100 card-hover-glow text-center flex flex-col justify-between group">
            <div>
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center text-3xl mb-5 shadow-md group-hover:scale-105 transition-transform">
                <i className="fas fa-sun"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t('morningPujaTitle', lang)}</h3>
              <div className="text-lg font-extrabold text-orange-600 mb-4 bg-orange-50 py-2 px-4 rounded-xl inline-block border border-orange-100">
                {lang === 'en' ? (timings.morning_puja_en || timings.morning_puja) : timings.morning_puja}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {lang === 'en' ? (timings.morning_desc_en || timings.morning_desc) : timings.morning_desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-amber-700 font-semibold flex items-center justify-center gap-1.5">
              <i className="fas fa-sparkles text-amber-500"></i> {lang === 'en' ? 'Pushpanjali Open for All' : 'সর্বসাধারণের অঞ্জলি প্রদান'}
            </div>
          </div>

          {/* Card 2: Midday Bhog */}
          <div className="bg-white rounded-3xl p-7 shadow-xl border-2 border-amber-400 card-hover-glow text-center flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-yellow-500 text-orange-950 text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-xs">
              {lang === 'en' ? 'Sacred Bhog' : 'মহাপ্রসাদ'}
            </div>
            <div>
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 text-white flex items-center justify-center text-3xl mb-5 shadow-md group-hover:scale-105 transition-transform">
                <i className="fas fa-utensils"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t('bhogOfferingTitle', lang)}</h3>
              <div className="text-lg font-extrabold text-orange-600 mb-4 bg-amber-50 py-2 px-4 rounded-xl inline-block border border-amber-200">
                {lang === 'en' ? (timings.bhog_time_en || timings.bhog_time) : timings.bhog_time}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {lang === 'en' ? (timings.bhog_desc_en || timings.bhog_desc) : timings.bhog_desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-orange-700 font-semibold flex items-center justify-center gap-1.5">
              <i className="fas fa-hands text-orange-500"></i> {lang === 'en' ? 'Bhog & Mahaprasad' : 'মায়ের দ্বিপ্রহরিক অন্নভোগ'}
            </div>
          </div>

          {/* Card 3: Evening Aarti */}
          <div className="bg-white rounded-3xl p-7 shadow-lg border-2 border-orange-100 card-hover-glow text-center flex flex-col justify-between group">
            <div>
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 text-white flex items-center justify-center text-3xl mb-5 shadow-md group-hover:scale-105 transition-transform">
                <i className="fas fa-fire"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t('sandhyaAartiTitle', lang)}</h3>
              <div className="text-lg font-extrabold text-orange-600 mb-4 bg-orange-50 py-2 px-4 rounded-xl inline-block border border-orange-100">
                {lang === 'en' ? (timings.sandhya_aarti_en || timings.sandhya_aarti) : timings.sandhya_aarti}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {lang === 'en' ? (timings.sandhya_desc_en || timings.sandhya_desc) : timings.sandhya_desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-red-700 font-semibold flex items-center justify-center gap-1.5">
              <i className="fas fa-music text-red-500"></i> {lang === 'en' ? 'Royani & Padmapuran Kirtan' : 'রয়ানী গান ও পদাবলি কীর্তন'}
            </div>
          </div>
        </div>

        {/* Darshan & Sacred Guidelines Card */}
        <div className="bg-white rounded-3xl p-8 shadow-md border border-orange-200 mb-10">
          <h3 className="text-xl font-bold text-orange-950 mb-4 flex items-center gap-2.5">
            <i className="fas fa-info-circle text-orange-600"></i> {t('darshanGuidelinesTitle', lang)}
          </h3>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            {lang === 'en' ? (timings.darshan_note_en || timings.darshan_note) : timings.darshan_note}
          </p>

          {timings.special_notice && (
            <div className="p-4 rounded-2xl bg-amber-50 border-l-4 border-amber-500 text-amber-900 text-sm flex items-start gap-3">
              <i className="fas fa-star text-amber-600 mt-0.5"></i>
              <div>
                <strong className="block mb-1 font-bold">{lang === 'en' ? 'Special Festival Notice:' : 'বিশেষ উৎসব ঘোষণা:'}</strong>
                <span>{timings.special_notice}</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button onClick={() => navigateTo('travel')} className="btn-shine bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-3 rounded-full font-bold shadow-md hover:shadow-orange-500/50 inline-flex items-center gap-2 cursor-pointer">
            <i className="fas fa-route"></i> {t('travelGuideTitle', lang)}
          </button>
          <button onClick={() => navigateTo('donation')} className="btn-shine bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-orange-950 px-8 py-3 rounded-full font-extrabold shadow-md hover:shadow-yellow-500/50 inline-flex items-center gap-2 cursor-pointer border border-yellow-200">
            <i className="fas fa-heart text-red-600"></i> {t('giveDonation', lang)}
          </button>
        </div>
      </div>
    </div>
  );
};

// 2. Pilgrim Travel Guide & Map Page
const TravelPage = ({ travelInfo, navigateTo, lang, showToast }) => {
  return (
    <div className="bg-orange-50 min-h-screen py-12 anim-fade-up">
      <div className="container mx-auto px-4 max-w-5xl">
        <BackButton navigateTo={navigateTo} lang={lang} />

        {/* Banner with Aurora */}
        <div className="text-center mb-10 page-banner-aurora p-8 rounded-3xl bg-gradient-to-r from-orange-950 via-red-950 to-orange-900 text-white shadow-2xl border-2 border-yellow-400/40 relative">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-1.5 rounded-full text-xs font-bold mb-4 border border-yellow-400/30">
            <i className="fas fa-compass text-xs"></i> {lang === 'en' ? 'Pilgrim Route & Direction' : 'তীর্থ ভ্রমণ ও পথনির্দেশিকা'}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-yellow-300 mb-3 divine-title-glow">
            {t('travelGuideTitle', lang)}
          </h1>
          <p className="text-orange-100 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {t('travelGuideSubtitle', lang)}
          </p>
        </div>

        {/* Interactive Google Map Embed */}
        <div className="bg-white rounded-3xl p-4 shadow-xl border-2 border-orange-200 mb-10 overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b border-gray-100 gap-3">
            <div className="flex items-center gap-2 text-orange-900 font-bold">
              <i className="fas fa-map-marker-alt text-red-600 text-lg"></i>
              <span>{t('templeTitle', lang)}, {t('templeLocation', lang)}</span>
            </div>
            <a
              href={travelInfo.map_link || 'https://maps.google.com/?q=22.9555,90.2215'}
              target="_blank"
              rel="noreferrer"
              className="btn-shine bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs px-4 py-2 rounded-full font-bold shadow-sm inline-flex items-center gap-1.5 transition-all"
            >
              <i className="fas fa-external-link-alt text-[10px]"></i> {lang === 'en' ? 'Open in Google Maps' : 'গুগল ম্যাপসে ডিরেকশন দেখুন'}
            </a>
          </div>
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden mt-3 shadow-inner bg-gray-100">
            <iframe
              title="Temple Location Map"
              src="https://maps.google.com/maps?q=22.9555,90.2215&hl=bn&z=14&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* 4 Detailed Commute Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Card 1: Dhaka by Road */}
          <div className="bg-white rounded-3xl p-7 shadow-md border-2 border-orange-100 card-hover-glow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl mb-4">
                <i className="fas fa-bus"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t('dhakaBusTitle', lang)}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {lang === 'en' ? (travelInfo.dhaka_bus_en || travelInfo.dhaka_bus) : travelInfo.dhaka_bus}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-orange-600 font-bold flex items-center gap-1.5">
              <i className="fas fa-road"></i> {lang === 'en' ? 'Direct highway bus route via Padma Bridge' : 'পদ্মা সেতু হয়ে মাত্র ৩.৫ - ৪ ঘণ্টার পথ'}
            </div>
          </div>

          {/* Card 2: River Launch */}
          <div className="bg-white rounded-3xl p-7 shadow-md border-2 border-orange-100 card-hover-glow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-4">
                <i className="fas fa-ship"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t('launchRouteTitle', lang)}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {lang === 'en' ? (travelInfo.launch_route_en || travelInfo.launch_route) : travelInfo.launch_route}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-blue-600 font-bold flex items-center gap-1.5">
              <i className="fas fa-water"></i> {lang === 'en' ? 'Overnight scenic launch journey' : 'মনোরম নৌভ্রমণের অনন্য অভিজ্ঞতা'}
            </div>
          </div>

          {/* Card 3: Local Transport */}
          <div className="bg-white rounded-3xl p-7 shadow-md border-2 border-orange-100 card-hover-glow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl mb-4">
                <i className="fas fa-shuttle-van"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t('localTransportTitle', lang)}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {lang === 'en' ? (travelInfo.local_transport_en || travelInfo.local_transport) : travelInfo.local_transport}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-amber-700 font-bold flex items-center gap-1.5">
              <i className="fas fa-stopwatch"></i> {lang === 'en' ? 'Available 24/7 at Goila Bazar' : 'গৈলা বাজারে সার্বক্ষণিক যানবাহন সহজলভ্য'}
            </div>
          </div>

          {/* Card 4: Guest House & Rest */}
          <div className="bg-white rounded-3xl p-7 shadow-md border-2 border-orange-100 card-hover-glow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-2xl mb-4">
                <i className="fas fa-hotel"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t('guestHouseTitle', lang)}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {lang === 'en' ? (travelInfo.guest_house_en || travelInfo.guest_house) : travelInfo.guest_house}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-green-700 font-bold flex items-center gap-1.5">
              <i className="fas fa-shield-alt"></i> {lang === 'en' ? 'Safe and peaceful pilgrim lodging' : 'নিরাপদ ও শান্তিময় পরিবেশ'}
            </div>
          </div>
        </div>

        {/* Helpline & Priest Contacts */}
        <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 rounded-3xl p-8 text-white shadow-xl mb-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold font-serif mb-2 text-yellow-100 flex items-center gap-2">
                <i className="fas fa-headset"></i> {t('helplineTitle', lang)}
              </h3>
              <p className="text-orange-100 text-sm max-w-xl">
                {lang === 'en'
                  ? 'For route guidance, puja booking assistance, or emergency information, feel free to call our temple administration.'
                  : 'পথনির্দেশনা, পূজা বুকিং বা যে কোনো তথ্যের জন্য মন্দির কমিটির সাথে সরাসরি ফোনে যোগাযোগ করতে পারেন।'}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {travelInfo.helpline_phone && (
                <a
                  href={`tel:${travelInfo.helpline_phone}`}
                  className="bg-white text-orange-900 px-5 py-3 rounded-2xl font-bold shadow-md hover:bg-yellow-50 transition-all flex items-center gap-2.5 active:scale-95"
                >
                  <i className="fas fa-phone-alt text-green-600"></i>
                  <span>{travelInfo.helpline_phone}</span>
                </a>
              )}
              {travelInfo.priest_phone && (
                <a
                  href={`tel:${travelInfo.priest_phone}`}
                  className="bg-black/30 backdrop-blur-md border border-white/40 text-yellow-200 px-5 py-3 rounded-2xl font-bold shadow-md hover:bg-black/50 transition-all flex items-center gap-2.5 active:scale-95"
                >
                  <i className="fas fa-user text-yellow-400"></i>
                  <span>{lang === 'en' ? 'Priest:' : 'পুরোহিত:'} {travelInfo.priest_phone}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button onClick={() => navigateTo('timings')} className="btn-shine bg-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-md inline-flex items-center gap-2 cursor-pointer">
            <i className="fas fa-clock"></i> {t('dailyTimingsTitle', lang)}
          </button>
        </div>
      </div>
    </div>
  );
};

// 3. Sacred Mantras & Padma Purana Page
const MantrasPage = ({ mantras, navigateTo, lang, showToast }) => {
  const [selectedCat, setSelectedCat] = useState('all');

  const categories = [
    { key: 'all', label: t('allCategory', lang) },
    { key: 'প্রণাম', label: lang === 'en' ? 'Pranam' : 'প্রণাম' },
    { key: 'ধ্যান', label: lang === 'en' ? 'Dhyana' : 'ধ্যান' },
    { key: 'পদ্মপুরাণ', label: lang === 'en' ? 'Padma Purana' : 'পদ্মপুরাণ' },
    { key: 'রক্ষা মন্ত্র', label: lang === 'en' ? 'Protection' : 'রক্ষা মন্ত্র' },
  ];

  const filtered = selectedCat === 'all'
    ? mantras
    : mantras.filter(m => m.category === selectedCat || m.category_en === selectedCat);

  const copyMantraText = (m) => {
    try {
      const text = `${m.title}\n\n${m.sanskrit}\n\nউচ্চারণ: ${m.pronunciation}\n\nঅর্থ: ${lang === 'en' ? m.meaning_en : m.meaning}`;
      navigator.clipboard.writeText(text);
      if (showToast) showToast(t('mantraCopied', lang));
    } catch (e) { }
  };

  const shareMantraText = async (m) => {
    try {
      const shareData = {
        title: m.title,
        text: `${m.title}\n\n${m.sanskrit}\n\nঅর্থ: ${lang === 'en' ? m.meaning_en : m.meaning}\n\nশ্রী শ্রী মা মনসা মন্দির, গৈলা\n`
      };
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        copyMantraText(m);
      }
    } catch (e) { }
  };

  return (
    <div className="bg-orange-50 min-h-screen py-12 anim-fade-up">
      <div className="container mx-auto px-4 max-w-5xl">
        <BackButton navigateTo={navigateTo} lang={lang} />

        {/* Page Banner with Aurora */}
        <div className="text-center mb-10 page-banner-aurora p-8 rounded-3xl bg-gradient-to-r from-orange-950 via-amber-950 to-red-950 text-white shadow-2xl border-2 border-yellow-400/40 relative">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-1.5 rounded-full text-xs font-bold mb-4 border border-yellow-400/30">
            <i className="fas fa-om text-xs"></i> {lang === 'en' ? 'Sacred Devotion & Literature' : 'পবিত্র স্তোত্র ও মনসামঙ্গল'}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-yellow-300 mb-3 divine-title-glow">
            {t('mantrasTitle', lang)}
          </h1>
          <p className="text-orange-100 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {t('mantrasSubtitle', lang)}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                playSacredBellSound();
                if (showToast) showToast(t('bellRungToast', lang));
              }}
              className="bg-yellow-400 hover:bg-yellow-300 text-orange-950 px-6 py-2.5 rounded-full font-bold shadow-lg inline-flex items-center gap-2 cursor-pointer active:scale-95 transition-all text-sm"
            >
              <i className="fas fa-bell text-xs"></i> {t('playChime', lang)} 🔔
            </button>
            <button
              onClick={() => {
                playSacredShankhSound();
                if (showToast) showToast(t('shankhBlownToast', lang));
              }}
              className="bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300/80 px-6 py-2.5 rounded-full font-bold shadow-lg inline-flex items-center gap-2 cursor-pointer active:scale-95 transition-all text-sm"
            >
              <span className="text-base leading-none">🐚</span> {t('playShankh', lang)} 🐚
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCat(cat.key)}
              className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${selectedCat === cat.key
                ? 'bg-orange-600 text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-orange-100 border border-orange-200'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Mantras List */}
        <div className="space-y-8 mb-12">
          {filtered.map((m) => (
            <div key={m.id} className="bg-white rounded-3xl p-7 md:p-9 shadow-lg border-2 border-orange-100 card-hover-glow relative overflow-hidden group">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                    {lang === 'en' ? (m.category_en || m.category) : m.category}
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-gray-900 mt-2">
                    {lang === 'en' ? (m.title_en || m.title) : m.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      playSacredBellSound();
                      if (showToast) showToast(t('bellRungToast', lang));
                    }}
                    title={t('playChime', lang)}
                    className="w-9 h-9 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-700 flex items-center justify-center text-sm transition-all active:scale-90 cursor-pointer"
                  >
                    <i className="fas fa-bell"></i>
                  </button>
                  <button
                    onClick={() => {
                      playSacredShankhSound();
                      if (showToast) showToast(t('shankhBlownToast', lang));
                    }}
                    title={t('playShankh', lang)}
                    className="w-9 h-9 rounded-full bg-orange-50 hover:bg-orange-100 text-orange-700 flex items-center justify-center text-sm transition-all active:scale-90 cursor-pointer"
                  >
                    <span className="text-sm">🐚</span>
                  </button>
                  <button
                    onClick={() => copyMantraText(m)}
                    title={t('copyMantra', lang)}
                    className="w-9 h-9 rounded-full bg-orange-50 hover:bg-orange-100 text-orange-700 flex items-center justify-center text-sm transition-all active:scale-90 cursor-pointer"
                  >
                    <i className="fas fa-copy"></i>
                  </button>
                  <button
                    onClick={() => shareMantraText(m)}
                    title={t('shareMantra', lang)}
                    className="w-9 h-9 rounded-full bg-red-50 hover:bg-red-100 text-red-700 flex items-center justify-center text-sm transition-all active:scale-90 cursor-pointer"
                  >
                    <i className="fas fa-share-alt"></i>
                  </button>
                </div>
              </div>

              {/* Sanskrit Verse Box */}
              <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 rounded-2xl p-6 border border-amber-200/80 mb-6 text-center shadow-inner">
                <p className="text-xl sm:text-2xl font-serif text-orange-950 font-bold leading-relaxed whitespace-pre-line tracking-wide">
                  {m.sanskrit}
                </p>
              </div>

              {/* Pronunciation & Meaning */}
              <div className="space-y-3 text-sm text-gray-700">
                {m.pronunciation && (
                  <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-xl">
                    <span className="font-bold text-gray-500 min-w-20 text-xs uppercase tracking-wider">{lang === 'en' ? 'Chanting:' : 'উচ্চারণ:'}</span>
                    <span className="italic font-medium text-gray-800">{m.pronunciation}</span>
                  </div>
                )}
                <div className="flex items-start gap-2 p-1">
                  <span className="font-bold text-orange-600 min-w-20 text-xs uppercase tracking-wider">{lang === 'en' ? 'Meaning:' : 'বঙ্গানুবাদ:'}</span>
                  <span className="leading-relaxed text-gray-800 font-medium">
                    {lang === 'en' ? (m.meaning_en || m.meaning) : m.meaning}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Historic Note Card */}
        <div className="bg-white rounded-3xl p-8 border border-orange-200 shadow-sm text-center max-w-3xl mx-auto">
          <i className="fas fa-feather-alt text-3xl text-orange-500 mb-3 inline-block"></i>
          <h4 className="text-lg font-bold text-gray-900 mb-2 font-serif">
            {lang === 'en' ? 'Poet Bijoy Gupta’s Sacred Legacy' : 'মহাকবি বিজয় গুপ্তের অমর সাধনাক্ষেত্র'}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {lang === 'en'
              ? 'Goila temple is the birthplace of the immortal Padma Purana (Manasamangal). Chanting these sacred verses brings peace, spiritual strength, and removes all auspicious obstacles.'
              : 'গৈলার পবিত্র মনসা মন্দিরেই রচিত হয়েছিল বাংলা সাহিত্যের কালজয়ী মহাকাব্য পদ্মাপুরাণ। শতাব্দীর পর শতাব্দী ধরে ভক্তরা এই পবিত্র শ্লোক ও পদাবলি জপ করে অন্তরে পরম শান্তি ও কল্যাণ লাভ করে আসছেন।'}
          </p>
          <button onClick={() => navigateTo('history')} className="btn-shine bg-orange-600 text-white px-8 py-2.5 rounded-full font-bold shadow-sm inline-flex items-center gap-2 cursor-pointer">
            <i className="fas fa-landmark"></i> {t('learnHistory', lang)}
          </button>
        </div>
      </div>
    </div>
  );
};

// 4. Committee Page (Upgraded with Rich Animations)
const CommitteePage = ({ committeeMembers, navigateTo, lang }) => (
  <div className="bg-orange-50 min-h-screen py-12 anim-fade-up">
    <div className="container mx-auto px-4 max-w-6xl">
      <BackButton navigateTo={navigateTo} lang={lang} />

      {/* Banner Aurora Header */}
      <div className="text-center mb-12 page-banner-aurora p-8 rounded-3xl bg-gradient-to-r from-orange-950 via-orange-900 to-red-950 text-white shadow-xl border-2 border-yellow-400/40 relative">
        <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-1.5 rounded-full text-xs font-bold mb-3 border border-yellow-400/30">
          <i className="fas fa-users text-xs"></i> {lang === 'en' ? 'Executive Committee' : 'পরিচালনা পরিষদ'}
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300 mb-3 font-serif divine-title-glow">
          {t('committeePageTitle', lang)}
        </h1>
        <p className="text-orange-200 font-medium text-sm sm:text-base">{t('committeeTenure', lang)}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {committeeMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-3xl overflow-hidden shadow-md border-2 border-orange-100/80 flex flex-col h-full justify-between items-center p-6 card-hover-glow transition-all duration-300 group">
            <div className="w-28 h-28 bg-gradient-to-br from-amber-100 to-orange-200 rounded-full flex items-center justify-center border-4 border-yellow-300 shadow-md mb-4 text-orange-400 overflow-hidden text-5xl group-hover:scale-105 group-hover:border-orange-500 transition-all duration-300 shrink-0">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              ) : (
                <i className="fas fa-user"></i>
              )}
            </div>
            <div className="w-full h-14 flex items-center justify-center mb-1">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 text-center leading-snug group-hover:text-orange-600 transition-colors line-clamp-2 px-1">
                {member.name}
              </h3>
            </div>
            <div className="w-full min-h-[2.5rem] flex items-center justify-center mb-4">
              <span className="text-orange-600 font-bold text-xs sm:text-sm text-center bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/60 leading-tight">
                {translateRole(member.role, lang)}
              </span>
            </div>
            <div className="w-full mt-auto border-t border-gray-100 pt-4 flex justify-center items-center text-gray-600 gap-2 bg-gradient-to-b from-gray-50 to-orange-50/30 rounded-b-2xl -mx-6 -mb-6 pb-4">
              <a href={`tel:${(member.phone || '').replace(/\s+/g, '')}`} className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors py-1.5 px-4 rounded-xl hover:bg-green-50 border border-gray-200/60 shadow-xs">
                <i className="fas fa-phone-alt text-green-600 text-xs"></i>
                <span className="bengali-num">{formatPhoneNumber(member.phone, lang)}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 5. Testimonials Page (Upgraded with Rich Animations)
const TestimonialsPage = ({ testimonials, navigateTo, lang }) => (
  <div className="bg-orange-50 min-h-screen py-12 anim-fade-up">
    <div className="container mx-auto px-4 max-w-5xl">
      <BackButton navigateTo={navigateTo} lang={lang} />

      {/* Banner Aurora Header */}
      <div className="text-center mb-12 page-banner-aurora p-8 rounded-3xl bg-gradient-to-r from-orange-950 via-amber-950 to-orange-900 text-white shadow-xl border-2 border-yellow-400/40 relative">
        <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-1.5 rounded-full text-xs font-bold mb-3 border border-yellow-400/30">
          <i className="fas fa-praying-hands text-xs"></i> {lang === 'en' ? 'Devotee Experiences' : 'ভক্তদের অনুভব ও আশীর্বাদ'}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-yellow-300 mb-3 divine-title-glow">
          {t('testimonialsTitle', lang)}
        </h1>
        <p className="text-orange-200 text-sm sm:text-base">{t('testimonialsPageSubtitle', lang)}</p>
      </div>

      <div className="space-y-6">
        {testimonials.map((tItem) => (
          <div key={tItem.id} className="bg-white p-7 md:p-9 rounded-3xl shadow-md border-2 border-orange-100 card-hover-glow flex flex-col md:flex-row gap-6 items-start relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2.5 h-full bg-gradient-to-b from-yellow-400 to-orange-600"></div>
            <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl items-center justify-center text-orange-600 text-2xl shadow-inner border border-orange-200">
              <i className="fas fa-om"></i>
            </div>
            <div className="flex-grow">
              <i className="fas fa-quote-left text-orange-200 mb-3 text-3xl block"></i>
              <div className="text-gray-800 text-lg leading-relaxed mb-6 rich-text font-serif italic" dangerouslySetInnerHTML={{ __html: tItem.text }}></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-100 pt-4 mt-2">
                <div>
                  <h4 className="font-bold text-orange-950 text-lg flex items-center gap-2">
                    {tItem.name} <span className="text-yellow-500 text-xs">✦</span>
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">{tItem.designation}</p>
                </div>
                {tItem.date && (
                  <div className="mt-2 sm:mt-0 text-xs font-semibold text-gray-500 flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                    <i className="fas fa-calendar-day text-orange-500"></i> {formatDate(tItem.date, lang)}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        {testimonials.length === 0 && (
          <p className="text-center text-gray-500 p-12 bg-white rounded-3xl shadow-sm">{t('noTestimonials', lang)}</p>
        )}
      </div>
    </div>
  </div>
);

// Event Card Component with Multi-Image Slider & Video Modal
const EventCard = ({ event, showToast, lang }) => {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const imagesList = (event.images && event.images.length > 0)
    ? event.images
    : (event.image ? [event.image] : []);

  const hasVideo = !!event.video;

  return (
    <div className="bg-white rounded-3xl shadow-md border-2 border-orange-100/90 flex flex-col md:flex-row overflow-hidden card-hover-glow transition-all duration-300 group">
      {/* Media Column (Image carousel or Video placeholder or Date block) */}
      {imagesList.length > 0 ? (
        <div className="md:w-5/12 h-72 md:h-auto relative overflow-hidden bg-gray-900 flex-shrink-0 select-none">
          <img
            src={imagesList[activeImgIdx]}
            alt={`${event.title} ${activeImgIdx + 1}`}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            onError={(e) => { e.target.src = 'images/events/event_4.jpg'; }}
          />

          {/* Date Badge */}
          <span className="absolute bottom-3 left-4 z-20 text-white text-xs font-bold bg-orange-600/90 backdrop-blur-sm px-3 py-1 rounded-md shadow flex items-center gap-1.5 border border-orange-500/50">
            <i className="fas fa-calendar-alt"></i> {formatDate(event.date, lang)}
          </span>

          {/* Multiple Image Controls */}
          {imagesList.length > 1 && (
            <>
              {/* Image Count Pill */}
              <div className="absolute top-3 right-3 z-20 bg-black/70 backdrop-blur-md text-amber-300 text-xs px-2.5 py-1 rounded-full font-bold border border-white/20 flex items-center gap-1 shadow">
                <i className="fas fa-images text-[11px]"></i>
                <span>{toBengaliDigits(activeImgIdx + 1)} / {toBengaliDigits(imagesList.length)}</span>
              </div>

              {/* Prev / Next Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImgIdx(prev => (prev === 0 ? imagesList.length - 1 : prev - 1));
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-orange-600 text-white flex items-center justify-center transition-all z-20 shadow cursor-pointer active:scale-90"
                aria-label="Previous Photo"
              >
                <i className="fas fa-chevron-left text-xs"></i>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImgIdx(prev => (prev + 1) % imagesList.length);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-orange-600 text-white flex items-center justify-center transition-all z-20 shadow cursor-pointer active:scale-90"
                aria-label="Next Photo"
              >
                <i className="fas fa-chevron-right text-xs"></i>
              </button>

              {/* Indicator Dots */}
              <div className="absolute bottom-3 right-3 z-20 flex gap-1 bg-black/40 px-2 py-1 rounded-full backdrop-blur-xs">
                {imagesList.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveImgIdx(dotIdx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${dotIdx === activeImgIdx ? 'w-4 bg-amber-400' : 'w-1.5 bg-white/60 hover:bg-white'}`}
                  ></button>
                ))}
              </div>
            </>
          )}

          {/* Video Quick Play Badge overlay on image if event has video */}
          {hasVideo && (
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="absolute top-3 left-3 z-20 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg flex items-center gap-1.5 border border-white/30 cursor-pointer active:scale-95 transition-transform"
            >
              <i className="fas fa-play text-[10px]"></i>
              <span>{lang === 'en' ? 'Watch Video' : 'ভিডিও দেখুন'}</span>
            </button>
          )}
        </div>
      ) : hasVideo ? (
        <div className="md:w-5/12 h-64 md:h-auto relative overflow-hidden bg-black flex-shrink-0 flex items-center justify-center p-2">
          <MediaViewer
            url={event.video}
            isVideo={true}
            alt={event.title}
            className="w-full h-full object-cover rounded-xl"
            controls={true}
          />
        </div>
      ) : (
        <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-8 md:w-5/12 flex flex-col justify-center items-center text-center flex-shrink-0">
          <i className="fas fa-calendar-alt text-6xl mb-4 opacity-90 drop-shadow-md"></i>
          <span className="font-bold text-2xl">{formatDate(event.date, lang)}</span>
        </div>
      )}

      {/* Details Column */}
      <div className="p-7 md:p-8 flex flex-col justify-between w-full">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs w-fit">
              <i className="fas fa-calendar-day"></i> {formatDate(event.date, lang)}
            </span>
            {imagesList.length > 1 && (
              <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                <i className="fas fa-images text-[11px]"></i> {toBengaliDigits(imagesList.length)} {lang === 'en' ? 'Photos' : 'টি ছবি'}
              </span>
            )}
            {hasVideo && (
              <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                <i className="fas fa-video text-[10px]"></i> {lang === 'en' ? 'Video' : 'ভিডিও অন্তর্ভুক্ত'}
              </span>
            )}
          </div>
          <h3 className="text-2xl font-bold font-serif text-gray-900 mb-3">{event.title}</h3>
          <div className="text-gray-700 leading-relaxed text-justify mb-5 rich-text" dangerouslySetInnerHTML={{ __html: event.description }}></div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
          {hasVideo ? (
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="btn-shine bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
            >
              <i className="fas fa-play-circle text-sm"></i> {lang === 'en' ? 'Watch Festival Video' : 'উৎসবের ভিডিও দেখুন'}
            </button>
          ) : <div />}

          <button
            onClick={() => shareEvent(event, showToast, lang)}
            className="btn-shine bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-200 px-5 py-2.5 rounded-full transition-all shadow-sm flex items-center gap-2 font-bold cursor-pointer text-xs sm:text-sm"
          >
            <i className="fas fa-share-alt"></i> {t('shareAction', lang)}
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {hasVideo && isVideoModalOpen && typeof document !== 'undefined' && ReactDOM.createPortal(
        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-stone-950 rounded-2xl overflow-hidden border border-amber-500/40 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-stone-900 border-b border-stone-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <i className="fas fa-video text-amber-400"></i>
                <h4 className="font-bold font-serif text-sm sm:text-base text-amber-200 truncate">{event.title}</h4>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-red-600/80 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close"
              >
                <i className="fas fa-times text-xs"></i>
              </button>
            </div>

            {/* Video View */}
            <div className="aspect-video w-full bg-black">
              <MediaViewer
                url={event.video}
                isVideo={true}
                alt={event.title}
                className="w-full h-full"
                controls={true}
                autoPlay={true}
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

// 6. Events Page (Upgraded with Rich Animations & Multi-Media Support)
const EventsPage = ({ events, navigateTo, showToast, lang }) => (
  <div className="bg-orange-50 min-h-screen py-12 anim-fade-up">
    <div className="container mx-auto px-4 max-w-5xl">
      <BackButton navigateTo={navigateTo} lang={lang} />

      {/* Banner Aurora Header */}
      <div className="text-center mb-12 page-banner-aurora p-8 rounded-3xl bg-gradient-to-r from-orange-950 via-red-950 to-orange-900 text-white shadow-xl border-2 border-yellow-400/40 relative">
        <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-1.5 rounded-full text-xs font-bold mb-3 border border-yellow-400/30">
          <i className="fas fa-calendar-alt text-xs"></i> {lang === 'en' ? 'Festivals & Schedules' : 'উৎসব ও পূজানুষ্ঠান'}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-yellow-300 mb-3 divine-title-glow">
          {t('eventsPageTitle', lang)}
        </h1>
        <p className="text-orange-200 text-sm sm:text-base">{t('eventsPageSubtitle', lang)}</p>
      </div>

      <div className="space-y-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} showToast={showToast} lang={lang} />
        ))}
        {events.length === 0 && (
          <p className="text-center text-gray-500 p-12 bg-white rounded-3xl shadow-sm">{t('noEvents', lang)}</p>
        )}
      </div>
    </div>
  </div>
);

const NoticeBoardPage = ({ notices, navigateTo, lang }) => (
  <div className="bg-orange-50 min-h-screen py-12 anim-fade-up">
    <div className="container mx-auto px-4 max-w-4xl">
      <BackButton navigateTo={navigateTo} lang={lang} />

      {/* Banner Aurora Header */}
      <div className="text-center mb-10 page-banner-aurora p-8 rounded-3xl bg-gradient-to-r from-orange-950 via-blue-950 to-orange-900 text-white shadow-xl border-2 border-yellow-400/40 relative">
        <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-1.5 rounded-full text-xs font-bold mb-3 border border-yellow-400/30">
          <i className="fas fa-bell text-xs"></i> {lang === 'en' ? 'Temple Announcements' : 'মন্দিরের জরুরি বিজ্ঞপ্তি'}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-yellow-300 mb-3 divine-title-glow">
          {t('noticeBoard', lang)}
        </h1>
        <p className="text-blue-100 text-sm sm:text-base">{t('noticePageSubtitle', lang)}</p>
      </div>

      <div className="bg-white shadow-xl rounded-3xl p-6 md:p-10 border-2 border-blue-100/90 relative overflow-hidden card-hover-glow">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-yellow-400 to-orange-600"></div>
        {notices.map((notice, idx) => (
          <div key={notice.id} className={`py-6 ${idx !== notices.length - 1 ? 'border-b border-gray-100' : ''}`}>
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-3">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <i className="fas fa-bullhorn text-blue-600 text-sm"></i> {notice.title}
              </h3>
              <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mt-2 md:mt-0 w-max flex items-center gap-1.5 shadow-xs">
                <i className="fas fa-calendar-day text-xs"></i> {formatDate(notice.date, lang)}
              </span>
            </div>
            <div className="text-gray-700 leading-relaxed rich-text" dangerouslySetInnerHTML={{ __html: notice.text }}></div>
          </div>
        ))}
        {notices.length === 0 && (
          <p className="text-center text-gray-500 py-10 font-medium">{t('noNotices', lang)}</p>
        )}
      </div>
    </div>
  </div>
);

const DonationPage = ({ donations, donationReceipts, setDonationReceipts, supabaseClient, navigateTo, showToast, lang, defaultTab = 'methods' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || 'methods'); // 'methods' or 'receipt'

  useEffect(() => {
    if (defaultTab) setActiveTab(defaultTab);
  }, [defaultTab]);

  const [receiptForm, setReceiptForm] = useState({
    name: '',
    phone: '',
    gotra: '',
    amount: '',
    method: 'bKash',
    trxId: '',
    purpose: 'সাধারণ প্রণামী ও সেবা',
    date: new Date().toISOString().split('T')[0]
  });
  const [generatedReceipt, setGeneratedReceipt] = useState(null);

  const copyToClipboard = (text, label) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    if (showToast) showToast(label + ' ' + t('copiedToast', lang));
  };

  const handleGenerateReceipt = async (e) => {
    e.preventDefault();
    if (!receiptForm.name.trim() || !receiptForm.amount || parseFloat(receiptForm.amount) <= 0) {
      if (showToast) showToast(lang === 'en' ? 'Please enter Donor Name and Valid Amount' : 'অনুগ্রহ করে দাতার নাম ও সঠিক দানের পরিমাণ লিখুন');
      return;
    }
    const receiptNo = 'MMG-REC-' + Math.floor(100000 + Math.random() * 900000);
    const receipt = {
      id: 'rec_' + Date.now(),
      ...receiptForm,
      receiptNo,
      amountWords: lang === 'en' ? amountInEnglishWords(receiptForm.amount) : amountInBengaliWords(receiptForm.amount),
      timestamp: new Date().toISOString()
    };
    setGeneratedReceipt(receipt);

    // Save to local storage
    try {
      const existing = JSON.parse(localStorage.getItem('mmg_donation_receipts') || '[]');
      const updated = [receipt, ...existing];
      localStorage.setItem('mmg_donation_receipts', JSON.stringify(updated.slice(0, 100)));
      if (setDonationReceipts) setDonationReceipts(updated);
    } catch (err) {}

    // Sync to Supabase settings key donation_receipts with atomic upsert & cross-device broadcast
    if (supabaseClient) {
      try {
        const { data: existingRow } = await supabaseClient.from('settings').select('value').eq('key', 'donation_receipts').maybeSingle();
        let currentList = [];
        if (existingRow && existingRow.value) {
          try { currentList = JSON.parse(existingRow.value); } catch (e) {}
        }
        // Deduplicate
        const seen = new Set();
        const updatedCloud = [receipt];
        seen.add(receipt.receiptNo);
        seen.add(receipt.id);
        for (const item of [...(currentList || []), ...(donationReceipts || [])]) {
          const k = item.id || item.receiptNo;
          if (k && !seen.has(k) && !seen.has(item.receiptNo)) {
            seen.add(k);
            if (item.receiptNo) seen.add(item.receiptNo);
            updatedCloud.push(item);
          }
        }
        await supabaseClient.from('settings').upsert({
          key: 'donation_receipts',
          value: JSON.stringify(updatedCloud.slice(0, 150))
        }, { onConflict: 'key' });
        broadcastUniversalSync();
      } catch (err) {
        console.error('Receipt sync error:', err);
      }
    }

    if (showToast) showToast(lang === 'en' ? 'Official Donation Receipt Generated!' : 'পবিত্র প্রণামী রশিদ তৈরি হয়েছে!');
  };

  const copyReceiptDetails = () => {
    if (!generatedReceipt) return;
    const txt = `শ্রী শ্রী মা মনসা মন্দির, গৈলা - স্মারক প্রণামী রশিদ\nরশিদ নং: ${generatedReceipt.receiptNo}\nদাতার নাম: ${generatedReceipt.name}\nগোত্র: ${generatedReceipt.gotra || 'অনুল্লিখিত'}\nমোবাইল: ${generatedReceipt.phone || '-'}\nপরিমাণ: ৳ ${generatedReceipt.amount} /- (${generatedReceipt.amountWords})\nমাধ্যম: ${generatedReceipt.method}\nTrxID: ${generatedReceipt.trxId || '-'}\nউদ্দেশ্য: ${generatedReceipt.purpose}\nতারিখ: ${generatedReceipt.date}\nসত্যায়িত: শ্রী শ্রী মা মনসা মন্দির তহবিল`;
    if (navigator.clipboard) navigator.clipboard.writeText(txt);
    if (showToast) showToast(lang === 'en' ? 'Receipt details copied!' : 'রশিদ বিবরণ কপি হয়েছে!');
  };

  const publicDonations = donations ? donations.filter(d => !d.is_hidden) : [];
  return (
    <div className="bg-orange-50 min-h-screen py-12 anim-fade-up">
      <div className="container mx-auto px-4 max-w-5xl">
        <BackButton navigateTo={navigateTo} lang={lang} />

        {/* Banner Aurora Header */}
        <div className="text-center mb-8 page-banner-aurora p-8 rounded-3xl bg-gradient-to-r from-orange-950 via-red-950 to-amber-950 text-white shadow-xl border-2 border-yellow-400/40 relative">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-1.5 rounded-full text-xs font-bold mb-3 border border-yellow-400/30">
            <i className="fas fa-heart text-xs text-red-400"></i> {lang === 'en' ? 'Sacred Temple Service' : 'প্রণামী ও ভক্তিসেবা'}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-yellow-300 mb-3 divine-title-glow">
            {t('donationPageTitle', lang)}
          </h1>
          <p className="text-orange-100 text-sm sm:text-base max-w-2xl mx-auto">{t('donationDesc1', lang)}</p>
          <p className="text-yellow-200/90 text-xs sm:text-sm max-w-2xl mx-auto mt-1 font-medium">{t('donationDesc2', lang)}</p>
        </div>

        {/* View Mode Switcher Tabs */}
        <div className="flex justify-center gap-3 mb-10 no-print">
          <button
            onClick={() => setActiveTab('methods')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95 flex items-center gap-2 cursor-pointer ${
              activeTab === 'methods'
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg shadow-orange-500/30'
                : 'bg-white text-gray-700 hover:bg-orange-100 border border-orange-200'
            }`}
          >
            <i className="fas fa-hand-holding-heart text-xs"></i>
            {lang === 'en' ? 'Donation Channels' : 'প্রণামী মাধ্যম ও তথ্য'}
          </button>
          <button
            onClick={() => setActiveTab('receipt')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95 flex items-center gap-2 cursor-pointer ${
              activeTab === 'receipt'
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg shadow-orange-500/30'
                : 'bg-white text-gray-700 hover:bg-orange-100 border border-orange-200'
            }`}
          >
            <i className="fas fa-file-invoice text-xs"></i>
            {lang === 'en' ? 'Donation Receipt' : 'স্বয়ংক্রিয় প্রণামী রশিদ সংগ্রহ'}
          </button>
        </div>

        {activeTab === 'receipt' ? (
          <div className="mb-12">
            {generatedReceipt ? (
              /* High-Definition Official Sacred Devotee Memorial Receipt */
              <div className="bg-white rounded-3xl shadow-2xl border-4 border-amber-500/70 p-6 sm:p-10 relative overflow-hidden print-sacred-card">
                <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-amber-500 via-orange-500 to-red-600"></div>

                {/* Sacred Watermark Om */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 opacity-15">
                  <div className="w-64 h-64 sm:w-88 sm:h-88 rounded-full border-4 border-dashed border-amber-500 flex items-center justify-center">
                    <span className="font-serif text-[180px] sm:text-[230px] font-black text-amber-700 leading-none">ॐ</span>
                  </div>
                </div>

                <div className="relative z-10">
                  {/* Receipt Header with Temple Seal */}
                  <div className="text-center pb-6 border-b-2 border-amber-200">
                    <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 border-2 border-amber-500 flex items-center justify-center text-amber-700 text-2xl shadow-md mb-2">
                      <i className="fas fa-om"></i>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-serif text-orange-950">
                      {lang === 'en' ? 'Shree Shree Maa Manasa Mandir, Goila' : 'শ্রী শ্রী মা মনসা মন্দির, গৈলা'}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">
                      {lang === 'en' ? 'Goila, Agailjhara, Barishal, Bangladesh • Established 1494 AD' : 'গৈলা, আগৈলঝাড়া, বরিশাল, বাংলাদেশ • প্রতিষ্ঠা ১৪৯৪ খ্রিষ্টাব্দ / ১৪১৬ শকাব্দ'}
                    </p>
                    <div className="inline-block mt-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-1 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-sm">
                      ✦ {lang === 'en' ? 'Official Devotee Donation Receipt' : 'পবিত্র স্মারক প্রণামী রশিদ'} ✦
                    </div>
                  </div>

                  {/* Receipt Details Body */}
                  <div className="py-6 space-y-4 text-gray-800 text-sm sm:text-base">
                    <div className="flex flex-wrap justify-between items-center bg-orange-50/80 p-3.5 rounded-2xl border border-orange-200">
                      <div>
                        <span className="text-xs text-gray-500 block font-semibold">{lang === 'en' ? 'Receipt Serial No:' : 'রশিদ স্মারক নং:'}</span>
                        <span className="font-mono font-bold text-amber-900 text-lg sm:text-xl tracking-wider">{generatedReceipt.receiptNo}</span>
                      </div>
                      <div className="text-right mt-2 sm:mt-0">
                        <span className="text-xs text-gray-500 block font-semibold">{lang === 'en' ? 'Date:' : 'তারিখ:'}</span>
                        <span className="font-bold text-gray-800">{generatedReceipt.date}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
                        <span className="block text-xs text-gray-500 font-semibold">{lang === 'en' ? 'Donor / Devotee Name' : 'দাতার নাম'}</span>
                        <span className="font-bold text-gray-900 text-base">{generatedReceipt.name}</span>
                      </div>
                      <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
                        <span className="block text-xs text-gray-500 font-semibold">{lang === 'en' ? 'Gotra (Lineage)' : 'গোত্র'}</span>
                        <span className="font-bold text-gray-900 text-base">{generatedReceipt.gotra || (lang === 'en' ? 'Not Mentioned' : 'অনুল্লিখিত')}</span>
                      </div>
                      <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
                        <span className="block text-xs text-gray-500 font-semibold">{lang === 'en' ? 'Payment Method' : 'প্রদানের মাধ্যম'}</span>
                        <span className="font-bold text-orange-900">{generatedReceipt.method}</span>
                      </div>
                      <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
                        <span className="block text-xs text-gray-500 font-semibold">{lang === 'en' ? 'Transaction ID / Reference' : 'ট্রানজেকশন আইডি (TrxID) / স্লিপ নং'}</span>
                        <span className="font-mono font-bold text-gray-800">{generatedReceipt.trxId || (lang === 'en' ? 'Cash/Direct Seva' : 'সরাসরি প্রণামী')}</span>
                      </div>
                    </div>

                    {/* Amount Highlights */}
                    <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300">
                      <div className="flex flex-wrap justify-between items-center mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-800">{lang === 'en' ? 'Donated Amount' : 'গৃহীত প্রণামীর পরিমাণ'}</span>
                        <span className="text-2xl sm:text-3xl font-extrabold text-amber-900 font-mono">৳ {formatNumber(generatedReceipt.amount, lang)} /-</span>
                      </div>
                      <div className="text-sm font-serif font-bold text-gray-800 border-t border-amber-200/80 pt-2">
                        <span className="text-xs text-gray-500 font-sans font-semibold mr-1">{lang === 'en' ? 'In Words:' : 'কথায়:'}</span>
                        {generatedReceipt.amountWords}
                      </div>
                    </div>

                    {/* Verification & Blessing Seal */}
                    <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-2.5 text-emerald-800 font-bold text-xs sm:text-sm">
                        <i className="fas fa-check-circle text-emerald-600 text-lg"></i>
                        <span>{lang === 'en' ? 'Verified & Acknowledged in Sacred Temple Fund' : 'শ্রী শ্রী মা মনসা মন্দির পুণ্য তহবিলে গৃহীত ও সত্যায়িত'}</span>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-md border border-emerald-300">
                        AUTH-SEAL-VERIFIED
                      </span>
                    </div>

                    <p className="text-center text-xs sm:text-sm text-gray-600 italic font-serif pt-2">
                      "{lang === 'en' ? 'May Devi Manasa bless your family with eternal health, prosperity, and peace.' : 'দেবী মনসার অপার কৃপায় আপনার ও আপনার পরিবারে রোগমুক্তি, ধনধান্য ও শান্তি বর্ষিত হোক।'}"
                    </p>
                  </div>

                  {/* Print & Action Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-gray-200 no-print">
                    <button
                      onClick={() => printReceiptDirectly(generatedReceipt, lang)}
                      className="btn-shine bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold px-6 py-2.5 rounded-full shadow-md flex items-center gap-2 active:scale-95 cursor-pointer text-sm"
                    >
                      <i className="fas fa-print"></i>
                      {lang === 'en' ? 'Print / Download Donation Receipt' : 'প্রণামী রশিদ প্রিন্ট / PDF সংরক্ষণ'}
                    </button>
                    <button
                      onClick={copyReceiptDetails}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-6 py-2.5 rounded-full border border-gray-300 flex items-center gap-2 active:scale-95 cursor-pointer text-sm"
                    >
                      <i className="fas fa-copy"></i>
                      {lang === 'en' ? 'Copy Details' : 'বিবরণ কপি করুন'}
                    </button>
                    <button
                      onClick={() => setGeneratedReceipt(null)}
                      className="bg-orange-50 hover:bg-orange-100 text-orange-800 font-bold px-6 py-2.5 rounded-full border border-orange-300 flex items-center gap-2 active:scale-95 cursor-pointer text-sm"
                    >
                      <i className="fas fa-redo"></i>
                      {lang === 'en' ? 'New Receipt' : 'নতুন রশিদ তৈরি'}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Receipt Input Form */
              <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border-2 border-orange-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-gray-900">
                    {lang === 'en' ? 'Official Donation Receipt Form' : 'অনলাইন প্রণামী রশিদ তৈরি করুন'}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {lang === 'en' ? 'Enter your contribution details to generate and download an official donation receipt.' : 'আপনার প্রেরিত প্রণামীর তথ্য প্রদান করে তৎক্ষণাৎ মন্দিরের সিলযুক্ত স্মারক রশিদ সংগ্রহ করুন।'}
                  </p>
                </div>
                <form onSubmit={handleGenerateReceipt} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-1">{lang === 'en' ? 'Donor Full Name *' : 'দাতার পূর্ণ নাম *'}</label>
                      <input
                        type="text"
                        required
                        placeholder={lang === 'en' ? 'Your Name' : 'যেমন: শান্তনু দাস'}
                        value={receiptForm.name}
                        onChange={(e) => setReceiptForm({ ...receiptForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-1">{lang === 'en' ? 'Mobile Number' : 'মোবাইল নম্বর'}</label>
                      <input
                        type="tel"
                        placeholder="01XXXXXXXXX"
                        value={receiptForm.phone}
                        onChange={(e) => setReceiptForm({ ...receiptForm, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-base font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-1">{lang === 'en' ? 'Donation Amount (BDT) *' : 'দানের পরিমাণ (টাকা) *'}</label>
                      <input
                        type="number"
                        required
                        min="1"
                        placeholder="500, 1000, 5000..."
                        value={receiptForm.amount}
                        onChange={(e) => setReceiptForm({ ...receiptForm, amount: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-base font-mono font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-1">{lang === 'en' ? 'Payment Method' : 'প্রণামীর মাধ্যম'}</label>
                      <select
                        value={receiptForm.method}
                        onChange={(e) => setReceiptForm({ ...receiptForm, method: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-base"
                      >
                        <option value="bKash">bKash (বিকাশ)</option>
                        <option value="Nagad">Nagad (নগদ)</option>
                        <option value="Bank Transfer">Bank Transfer (ব্যাংক একাউন্ট)</option>
                        <option value="Cash / On-Site">Cash / On-Site (নগদ সেবা)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-1">{lang === 'en' ? 'Transaction ID (TrxID) / Slip No.' : 'ট্রানজেকশন আইডি (TrxID) / স্লিপ নং'}</label>
                      <input
                        type="text"
                        placeholder="e.g. 9J87K1L2"
                        value={receiptForm.trxId}
                        onChange={(e) => setReceiptForm({ ...receiptForm, trxId: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-base font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-1">{lang === 'en' ? 'Gotra (Optional)' : 'গোত্র (ঐচ্ছিক)'}</label>
                      <input
                        type="text"
                        placeholder="যেমন: কশ্যপ / শাণ্ডিল্য"
                        value={receiptForm.gotra}
                        onChange={(e) => setReceiptForm({ ...receiptForm, gotra: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-base"
                      />
                    </div>
                  </div>

                  <div className="text-center pt-3">
                    <button
                      type="submit"
                      className="btn-shine bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-white font-extrabold px-10 py-3.5 rounded-full text-base sm:text-lg shadow-xl shadow-orange-500/30 transition-all hover:scale-[1.02] active:scale-95 border-2 border-yellow-200 cursor-pointer"
                    >
                      <i className="fas fa-file-invoice mr-2"></i>
                      {lang === 'en' ? 'Generate & View Donation Receipt' : 'পবিত্র প্রণামী রশিদ তৈরি করুন'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Issued / Verified Receipts List */}
            {donationReceipts && donationReceipts.length > 0 && (
              <div className="mt-8 bg-white rounded-3xl p-6 sm:p-8 shadow-lg border-2 border-amber-100">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-amber-100">
                  <h4 className="text-lg font-bold font-serif text-gray-900 flex items-center gap-2">
                    <i className="fas fa-receipt text-amber-600"></i>
                    {lang === 'en' ? 'Previously Issued Donation Receipts' : 'সম্প্রতি সংগৃহীত স্মারক প্রণামী রশিদসমূহ'}
                  </h4>
                  <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                    {donationReceipts.length} {lang === 'en' ? 'Receipts' : 'টি রশিদ'}
                  </span>
                </div>
                <div className="space-y-3">
                  {/* Mobile Card View (100% visible on phones, no horizontal scroll) */}
                  <div className="block sm:hidden space-y-3">
                    {donationReceipts.slice(0, 10).map((r, i) => (
                      <div key={r.id || r.receiptNo || i} className="bg-amber-50/40 rounded-2xl p-4 border border-amber-200/80 shadow-xs">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-amber-100">
                          <span className="font-mono text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded border border-amber-300">
                            {r.receiptNo}
                          </span>
                          <span className="text-xs text-gray-500 font-medium">
                            <i className="fas fa-calendar-alt text-amber-600 mr-1 text-[11px]"></i>
                            {r.date || (r.timestamp ? new Date(r.timestamp).toLocaleDateString('bn-BD') : '-')}
                          </span>
                        </div>
                        <div className="flex justify-between items-start gap-2 mb-2">
                          <div>
                            <h5 className="font-bold text-gray-900 text-base">{r.name}</h5>
                            {r.gotra && <p className="text-xs text-gray-500">গোত্র: {r.gotra}</p>}
                            {r.phone && <p className="text-xs text-gray-500">ফোন: {r.phone}</p>}
                          </div>
                          <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 text-sm font-serif whitespace-nowrap">
                            ৳ {typeof r.amount === 'number' ? toBengaliDigits(r.amount.toLocaleString()) : toBengaliDigits(r.amount)} /-
                          </span>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-amber-100">
                          <div className="text-xs text-gray-600">
                            <span className="font-semibold text-gray-800">{r.method}</span>
                            {r.trxId && <span className="font-mono text-[11px] text-gray-500 block">TrxID: {r.trxId}</span>}
                          </div>
                          <button
                            type="button"
                            onClick={() => printReceiptDirectly(r, lang)}
                            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                          >
                            <i className="fas fa-print"></i> {lang === 'en' ? 'Print' : 'প্রিন্ট রশিদ'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop / Tablet Table View */}
                  <div className="hidden sm:block overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-amber-50/70 text-gray-700 font-bold border-b border-amber-200">
                          <th className="p-3">{lang === 'en' ? 'Receipt No' : 'রশিদ নং'}</th>
                          <th className="p-3">{lang === 'en' ? 'Donor Name' : 'দাতার নাম'}</th>
                          <th className="p-3">{lang === 'en' ? 'Amount' : 'পরিমাণ'}</th>
                          <th className="p-3">{lang === 'en' ? 'Method & TrxID' : 'মাধ্যম ও TrxID'}</th>
                          <th className="p-3">{lang === 'en' ? 'Date' : 'তারিখ'}</th>
                          <th className="p-3 text-center">{lang === 'en' ? 'Action' : 'প্রিন্ট'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {donationReceipts.slice(0, 10).map((r, i) => (
                          <tr key={r.id || r.receiptNo || i} className="border-b border-gray-100 hover:bg-orange-50/40 transition-colors">
                            <td className="p-3 font-mono font-bold text-amber-900">{r.receiptNo}</td>
                            <td className="p-3 font-semibold text-gray-900">
                              {r.name}
                              {r.gotra && <span className="block text-xs text-gray-500 font-normal">গোত্র: {r.gotra}</span>}
                            </td>
                            <td className="p-3 font-bold text-emerald-700 font-serif">৳ {typeof r.amount === 'number' ? toBengaliDigits(r.amount.toLocaleString()) : toBengaliDigits(r.amount)} /-</td>
                            <td className="p-3 text-xs text-gray-600">
                              <span className="font-semibold text-gray-800 block">{r.method}</span>
                              <span className="font-mono text-gray-500">{r.trxId || '-'}</span>
                            </td>
                            <td className="p-3 text-xs text-gray-500">{r.date}</td>
                            <td className="p-3 text-center">
                              <button
                                onClick={() => printReceiptDirectly(r, lang)}
                                className="bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold px-3 py-1.5 rounded-lg text-xs transition-all active:scale-95 flex items-center gap-1.5 mx-auto cursor-pointer"
                                title="প্রিন্ট করুন"
                              >
                                <i className="fas fa-print text-amber-700"></i>
                                {lang === 'en' ? 'Print' : 'প্রিন্ট'}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : null}

        <div className={activeTab === 'receipt' ? 'hidden' : ''}>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-orange-100 card-hover-glow relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-amber-500"></div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-4">
              <i className="fas fa-university text-orange-600"></i> {t('bankDetailsTitle', lang)}
            </h3>
            <div className="space-y-4 text-gray-700 text-base md:text-lg">
              <div className="flex justify-between items-center py-1 border-b border-gray-100">
                <span><strong className="text-gray-900">{t('accountNameLabel', lang)}</strong> Manosha Mondhir</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-gray-100 gap-2">
                <span className="truncate"><strong className="text-gray-900">{t('accountNumberLabel', lang)}</strong> <span className="font-mono font-bold text-orange-900">0311100066584</span></span>
                <button onClick={() => copyToClipboard('0311100066584', t('accountNumberLabel', lang))} className="shrink-0 bg-orange-100 hover:bg-orange-200 text-orange-800 text-xs font-bold px-3 py-1.5 rounded-lg transition-all active:scale-95 flex items-center gap-1 cursor-pointer">
                  <i className="fas fa-copy"></i> {t('copyBtn', lang)}
                </button>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-gray-100">
                <span><strong className="text-gray-900">{t('bankLabel', lang)}</strong> {t('bankName', lang)}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-gray-100">
                <span><strong className="text-gray-900">{t('branchLabel', lang)}</strong> {t('branchName', lang)}</span>
              </div>
              <div className="flex justify-between items-center py-1 gap-2">
                <span className="truncate"><strong className="text-gray-900">{t('routingNumberLabel', lang)}</strong> <span className="font-mono font-bold text-orange-900">200060790</span></span>
                <button onClick={() => copyToClipboard('200060790', t('routingNumberLabel', lang))} className="shrink-0 bg-orange-100 hover:bg-orange-200 text-orange-800 text-xs font-bold px-3 py-1.5 rounded-lg transition-all active:scale-95 flex items-center gap-1 cursor-pointer">
                  <i className="fas fa-copy"></i> {t('copyBtn', lang)}
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-orange-100 card-hover-glow relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-500 to-yellow-500"></div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-4">
              <i className="fas fa-mobile-alt text-yellow-600"></i> {t('mobileBankingTitle', lang)}
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-5 bg-pink-50 p-5 rounded-2xl border border-pink-200 shadow-sm flex-wrap sm:flex-nowrap">
                <div className="w-14 h-14 bg-pink-600 text-white font-bold rounded-2xl flex items-center justify-center text-sm shadow-md shrink-0">bKash</div>
                <div className="flex-grow">
                  <p className="text-2xl font-bold text-gray-800 mb-1">{t('bkashLabel', lang)}</p>
                  <p className="text-sm text-gray-600 font-semibold mb-1">{t('personalAccount', lang)}</p>
                  <p className="text-sm text-gray-600 font-semibold mb-1">{t('sendMoney', lang)}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <p className="text-2xl font-bold text-gray-800 tracking-wider font-mono">01722428334</p>
                    <button onClick={() => copyToClipboard('01722428334', t('bkashLabel', lang))} className="bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer">
                      <i className="fas fa-copy"></i> {t('copyBtn', lang)}
                    </button>
                  </div>
                </div>
                {/* QR Code Section */}
                <div className="shrink-0 mt-3 sm:mt-0">
                  <img src="bkash QR.jpg" alt="bKash QR Code" className="w-24 h-24 border-2 border-pink-300 rounded-xl shadow-sm bg-white p-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Donation List Section */}
        <div className="bg-white rounded-3xl shadow-xl border-2 border-orange-100 overflow-hidden mb-12 card-hover-glow">
          <div className="bg-gradient-to-r from-orange-100 via-amber-100 to-orange-100 p-6 border-b border-orange-200">
            <h3 className="text-2xl font-bold text-orange-950 font-serif flex items-center justify-center gap-2">
              <i className="fas fa-hand-holding-heart text-orange-600"></i> {t('donorsTitle', lang)}
            </h3>
          </div>
          <div className="p-6">
            <div className="text-xs text-gray-500 mb-2 md:hidden flex items-center gap-1">
              <i className="fas fa-arrows-alt-h text-orange-500"></i> {t('scrollHint', lang)}
            </div>
            <div className="overflow-x-auto touch-scroll">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 border-b-2 border-orange-200">
                    <th className="p-4 font-bold text-base">{t('colName', lang)}</th>
                    <th className="p-4 font-bold text-base">{t('colAddress', lang)}</th>
                    <th className="p-4 font-bold text-base">{t('colType', lang)}</th>
                    <th className="p-4 font-bold text-base text-right">{t('colAmount', lang)}</th>
                  </tr>
                </thead>
                <tbody>
                  {publicDonations.map((d) => (
                    <tr key={d.id} className="border-b border-gray-100 hover:bg-orange-50/50 transition-colors">
                      <td className="p-4 font-bold text-gray-800">{d.name}</td>
                      <td className="p-4 text-gray-600">{d.address || '-'}</td>
                      <td className="p-4">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${d.type === 'নগদ অর্থ' || d.type === 'Cash' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>
                          {lang === 'en' && d.type === 'নগদ অর্থ' ? 'Cash' : d.type}
                        </span>
                      </td>
                      <td className="p-4 text-right font-semibold text-orange-700">{formatNumber(d.amount, lang)}</td>
                    </tr>
                  ))}
                  {publicDonations.length === 0 && (
                    <tr>
                      <td colSpan="4" className="p-8 text-center text-gray-500">{t('noDonations', lang)}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-950 via-amber-950 to-orange-900 text-white p-8 rounded-3xl text-center shadow-xl border-2 border-yellow-400/40 relative overflow-hidden">
          <p className="text-xl italic font-serif text-yellow-300">"{t('donationQuote', lang)}"</p>
        </div>
        </div>
      </div>
    </div>
  );
};

const HistoryPage = ({ templeHistory, navigateTo, lang }) => {
  const hist = templeHistory || DEFAULT_TEMPLE_HISTORY;
  return (
  <div className="bg-orange-50 min-h-screen py-12 anim-fade-up">
    <div className="container mx-auto px-4 max-w-4xl">
      <BackButton navigateTo={navigateTo} lang={lang} />

      {/* Banner Aurora Header */}
      <div className="text-center mb-10 page-banner-aurora p-8 rounded-3xl bg-gradient-to-r from-orange-950 via-amber-950 to-red-950 text-white shadow-xl border-2 border-yellow-400/40 relative">
        <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-1.5 rounded-full text-xs font-bold mb-3 border border-yellow-400/30">
          <i className="fas fa-landmark text-xs"></i> {lang === 'en' ? 'Chronicles of Goila' : '৫৩১ বছরের ঐতিহ্যবাহী ইতিহাস'}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-yellow-300 mb-3 divine-title-glow">
          {t('historyPageTitle', lang)}
        </h1>
        <p className="text-orange-200 text-sm sm:text-base max-w-2xl mx-auto">{t('historyPageSubtitle', lang)}</p>
      </div>

      {/* Main Historical Document Card */}
      <div className="bg-white p-6 sm:p-10 md:p-14 rounded-3xl shadow-xl border-2 border-orange-100 relative overflow-hidden card-hover-glow">

        {/* Decorative Golden Corner Accents */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-20 blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-tr from-amber-400 to-red-400 rounded-full opacity-20 blur-2xl pointer-events-none"></div>

        {/* Existing Core Introduction (Dynamic & Preserved) */}
        <div className="bg-gradient-to-br from-amber-50/70 to-orange-50/50 p-6 rounded-2xl border-l-[5px] border-amber-500 mb-8 shadow-sm">
          <p className="text-gray-800 text-lg leading-relaxed text-justify mb-3">
            {lang === 'en' ? t('historyP1', lang) : (hist.p1 || t('historyP1', lang))}
          </p>
          <p className="text-gray-800 text-lg leading-relaxed text-justify">
            {lang === 'en' ? t('historyP2', lang) : (hist.p2 || t('historyP2', lang))}
          </p>
        </div>

        {/* Timeline & Chronological Chapters */}
        <div className="space-y-8 text-gray-700 leading-relaxed text-base sm:text-lg">

          {/* Chapter 1 */}
          <div className="p-6 rounded-2xl bg-white border border-orange-100 shadow-sm card-hover-glow">
            <h3 className="text-xl sm:text-2xl font-bold text-orange-900 mb-3 font-serif flex items-center gap-2">
              <i className="fas fa-landmark text-amber-600 text-lg"></i>
              {t('historyChap1Title', lang)}
            </h3>
            <p className="text-justify leading-loose">
              {t('historyChap1Text', lang)}
            </p>
          </div>

          {/* Chapter 2 */}
          <div className="p-6 rounded-2xl bg-white border border-orange-100 shadow-sm card-hover-glow">
            <h3 className="text-xl sm:text-2xl font-bold text-orange-900 mb-3 font-serif flex items-center gap-2">
              <i className="fas fa-water text-blue-600 text-lg"></i>
              {t('historyChap2Title', lang)}
            </h3>
            <p className="text-justify leading-loose">
              {t('historyChap2Text', lang)}
            </p>
          </div>

          {/* Chapter 3 - Composition & Immortal Shloka */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-yellow-50/90 to-amber-50/80 border-2 border-yellow-300/80 shadow-md card-hover-glow">
            <h3 className="text-xl sm:text-2xl font-bold text-orange-950 mb-3 font-serif flex items-center gap-2">
              <i className="fas fa-feather-alt text-amber-700 text-lg animate-bounce"></i>
              {t('historyChap3Title', lang)}
            </h3>
            <p className="text-justify leading-loose mb-5">
              {t('historyChap3Text', lang)}
            </p>

            {/* Antique Shloka Callout Box */}
            <div className="bg-amber-100/80 border-l-[6px] border-amber-600 p-5 rounded-xl shadow-inner text-center my-4">
              <p className="text-xl sm:text-2xl font-serif font-black text-orange-950 tracking-wider whitespace-pre-line leading-relaxed drop-shadow-sm">
                {t('historyShloka', lang)}
              </p>
              <div className="h-[1px] w-24 bg-amber-400 mx-auto my-3"></div>
              <p className="text-xs sm:text-sm text-orange-900 italic font-medium">
                {t('historyShlokaMeaning', lang)}
              </p>
            </div>
          </div>

          {/* Chapter 4 */}
          <div className="p-6 rounded-2xl bg-white border border-orange-100 shadow-sm card-hover-glow">
            <h3 className="text-xl sm:text-2xl font-bold text-orange-900 mb-3 font-serif flex items-center gap-2">
              <i className="fas fa-crown text-yellow-600 text-lg"></i>
              {t('historyChap4Title', lang)}
            </h3>
            <p className="text-justify leading-loose">
              {t('historyChap4Text', lang)}
            </p>
          </div>

          {/* Chapter 5 - Existing Royani Gaan Box (Preserved & Enhanced) */}
          <div className="bg-orange-50/90 p-6 sm:p-8 rounded-2xl border-l-[6px] border-orange-600 shadow-sm card-hover-glow">
            <h3 className="text-xl sm:text-2xl font-bold text-orange-900 mb-3 font-serif flex items-center gap-2">
              <i className="fas fa-music text-orange-600 text-lg"></i>
              {t('historyChap5Title', lang)}
            </h3>
            <p className="text-justify leading-loose mb-4">
              {t('historyChap5Text', lang)}
            </p>
            <div className="bg-white/80 p-4 rounded-xl border border-orange-200/60 text-sm text-orange-900 font-medium flex items-center gap-3">
              <i className="fas fa-sun text-yellow-500 text-xl flex-shrink-0 animate-spin" style={{ animationDuration: '10s' }}></i>
              <span>{t('historyBoxText', lang)}</span>
            </div>
          </div>

          {/* Chapter 6 */}
          <div className="p-6 rounded-2xl bg-white border border-orange-100 shadow-sm card-hover-glow">
            <h3 className="text-xl sm:text-2xl font-bold text-orange-900 mb-3 font-serif flex items-center gap-2">
              <i className="fas fa-gopuram text-orange-600 text-lg"></i>
              {t('historyChap6Title', lang)}
            </h3>
            <p className="text-justify leading-loose mb-3">
              {t('historyChap6Text', lang)}
            </p>
            <p className="text-justify leading-loose italic text-orange-900 font-medium">
              {t('historyP3', lang)}
            </p>
          </div>

        </div>

        {/* Spiritual Blessing Footer */}
        <div className="mt-10 pt-6 border-t border-orange-100 text-center">
          <p className="text-sm font-semibold text-orange-800 tracking-wider">
            ✦ জয় মা মনসা দেবী ✦ জয় মহাকবি বিজয় গুপ্ত ✦
          </p>
        </div>

      </div>
    </div>
  </div>
  );
};

// --- Admin Panel ---
const AdminPanel = ({
  supabaseClient, dbError, navigateTo,
  isAdminAuthenticated, setIsAdminAuthenticated,
  marqueeText, setMarqueeText,
  marqueeTextEn, setMarqueeTextEn,
  committeeMembers, setCommitteeMembers,
  testimonials, setTestimonials,
  events, setEvents,
  notices, setNotices,
  donations, setDonations,
  featuredTestimonialIds, setFeaturedTestimonialIds,
  timings, setTimings,
  travelInfo, setTravelInfo,
  mantras, setMantras,
  pujaBookings, setPujaBookings,
  donationReceipts, setDonationReceipts,
  royaniPalas, setRoyaniPalas,
  templeHistory, setTempleHistory,
  adminCredentials, setAdminCredentials,
  galleryItems, setGalleryItems,
  showToast
}) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [activeTab, setActiveTab] = useState('marquee');
  const [isSaving, setIsSaving] = useState(false);

  // Edit States
  const [editingCommitteeId, setEditingCommitteeId] = useState(null);
  const [editingTestimonialId, setEditingTestimonialId] = useState(null);
  const [editingNoticeId, setEditingNoticeId] = useState(null);
  const [editingEventId, setEditingEventId] = useState(null);
  const [editingDonationId, setEditingDonationId] = useState(null);
  const [editingMantraId, setEditingMantraId] = useState(null);
  const [editingGalleryId, setEditingGalleryId] = useState(null);

  // Form States
  const [newMember, setNewMember] = useState({ name: '', role: '', phone: '', image: null });
  const [newTestimonial, setNewTestimonial] = useState({ name: '', designation: '', text: '', date: '' });
  const [newNotice, setNewNotice] = useState({ title: '', date: '', text: '' });
  const [newEvent, setNewEvent] = useState({ title: '', date: '', description: '', image: null, images: [], video: '' });
  const [newDonation, setNewDonation] = useState({ name: '', address: '', type: 'নগদ অর্থ', amount: '', date: '', is_hidden: false });
  const [newGalleryPhoto, setNewGalleryPhoto] = useState({ url: '', captionBn: '', captionEn: '', image: null, mediaType: 'image' });
  const [newGalleryBatch, setNewGalleryBatch] = useState([]);
  const [galleryTabMode, setGalleryTabMode] = useState('image');
  const [editGalleryPhoto, setEditGalleryPhoto] = useState({ url: '', captionBn: '', captionEn: '', image: null, mediaType: 'image' });

  // Timings, Travel & Mantras Form States
  const [timingsForm, setTimingsForm] = useState(timings || PRELOADED_DATA.timings);
  const [travelForm, setTravelForm] = useState(travelInfo || PRELOADED_DATA.travel);
  const [newMantra, setNewMantra] = useState({
    category: 'ধ্যান',
    category_en: 'Dhyana',
    title: '',
    title_en: '',
    sanskrit: '',
    pronunciation: '',
    meaning: '',
    meaning_en: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  // Admin Credentials Change State
  const [credForm, setCredForm] = useState({
    username: adminCredentials?.username || 'admin@manasamondirgoila.com',
    newPassword: '',
    confirmPassword: ''
  });
  const [credMsg, setCredMsg] = useState({ type: '', text: '' });
  const [showCredPass, setShowCredPass] = useState(false);

  // Internal Custom Confirmation Modal State (Replaces native browser prompts)
  const [internalConfirm, setInternalConfirm] = useState({
    isOpen: false,
    title: 'মুছে ফেলার নিশ্চিতকরণ',
    message: '',
    onConfirm: null
  });

  const requestConfirm = (message, onConfirmAction, title = 'মুছে ফেলার নিশ্চিতকরণ') => {
    setInternalConfirm({
      isOpen: true,
      title,
      message,
      onConfirm: onConfirmAction
    });
  };

  useEffect(() => {
    if (adminCredentials) {
      setCredForm(prev => ({
        ...prev,
        username: adminCredentials.username || 'admin@manasamondirgoila.com'
      }));
    }
  }, [adminCredentials]);

  // Synchronize forms when props update
  useEffect(() => {
    if (timings) setTimingsForm(timings);
  }, [timings]);

  useEffect(() => {
    if (travelInfo) setTravelForm(travelInfo);
  }, [travelInfo]);

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setErrorMsg('');
    setCredMsg({ type: '', text: '' });
    setEditingCommitteeId(null);
    setEditingTestimonialId(null);
    setEditingNoticeId(null);
    setEditingEventId(null);
    setEditingDonationId(null);
    setEditingMantraId(null);
    setEditingGalleryId(null);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setErrorMsg('');

    const inputUser = loginEmail.trim().toLowerCase();
    const inputPass = loginPass.trim();

    // 1. Dynamic Customizable Admin Passkey & User ID
    const currentUsername = (adminCredentials?.username || 'admin@manasamondirgoila.com').trim().toLowerCase();
    const currentPassword = (adminCredentials?.password || 'admin1234').trim();

    const isUserMatch =
      inputUser === currentUsername ||
      (currentUsername.startsWith('admin') && inputUser === 'admin') ||
      (inputUser === 'admin@gmail.com' && currentUsername.includes('admin'));

    const isPassMatch =
      inputPass === currentPassword ||
      (currentPassword === 'admin1234' && (inputPass === 'manasa2026' || inputPass === '123456'));

    if (isUserMatch && isPassMatch) {
      setIsAdminAuthenticated(true);
      try { localStorage.setItem('temple_admin_logged_in', 'true'); } catch (e) { }
      setIsSaving(false);
      if (showToast) showToast('এডমিন ড্যাশবোর্ডে স্বাগতম!');
      return;
    }

    // 2. Supabase Cloud Authentication (Fallback)
    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: inputUser,
        password: inputPass,
      });

      if (error) {
        setErrorMsg('ইউজার আইডি বা পাসওয়ার্ড সঠিক নয়! অনুগ্রহ করে পুনরায় চেষ্টা করুন।');
      } else if (data && data.session) {
        setIsAdminAuthenticated(true);
        try { localStorage.setItem('temple_admin_logged_in', 'true'); } catch (e) { }
        if (showToast) showToast('এডমিন ড্যাশবোর্ডে স্বাগতম!');
      }
    } catch (err) {
      setErrorMsg('লগইন প্রক্রিয়ায় সমস্যা হয়েছে।');
    } finally {
      setIsSaving(false);
    }
  };

  const handleUpdateCredentials = async (e) => {
    e.preventDefault();
    setCredMsg({ type: '', text: '' });

    const newUsername = credForm.username.trim();
    const newPass = credForm.newPassword.trim();
    const confirmPass = credForm.confirmPassword.trim();

    if (!newUsername) {
      setCredMsg({ type: 'error', text: 'ইউজার আইডি বা ইমেইল ফাঁকা রাখা যাবে না!' });
      return;
    }

    if (newPass) {
      if (newPass.length < 4) {
        setCredMsg({ type: 'error', text: 'পাসওয়ার্ড কমপক্ষে ৪ অক্ষরের হতে হবে!' });
        return;
      }
      if (newPass !== confirmPass) {
        setCredMsg({ type: 'error', text: 'নতুন পাসওয়ার্ড ও কনফার্ম পাসওয়ার্ড মিলছে না!' });
        return;
      }
    }

    setIsSaving(true);
    try {
      const updated = {
        username: newUsername,
        password: newPass ? newPass : (adminCredentials?.password || 'admin1234')
      };

      const { data: existing } = await supabaseClient.from('settings').select('id').eq('key', 'admin_credentials').maybeSingle();
      let err;
      if (existing) {
        const { error } = await supabaseClient.from('settings').upsert({ key: 'puja_bookings', value: JSON.stringify(updated) }, { onConflict: 'key' }); broadcastUniversalSync();
        err = error;
      } else {
        const { error } = await supabaseClient.from('settings').insert({ key: 'admin_credentials', value: JSON.stringify(updated) });
        err = error;
      }

      if (err) throw err;

      setAdminCredentials(updated);
      try { localStorage.setItem('temple_admin_credentials', JSON.stringify(updated)); } catch (e) { }
      setCredMsg({ type: 'success', text: 'ইউজার আইডি ও পাসওয়ার্ড সফলভাবে ডাটাবেজে সংরক্ষণ করা হয়েছে!' });
      if (showToast) showToast('এডমিন ক্রেডেনশিয়াল আপডেট সফল!');
      setCredForm(prev => ({ ...prev, newPassword: '', confirmPassword: '' }));
    } catch (err) {
      setCredMsg({ type: 'error', text: 'আপডেট ব্যর্থ হয়েছে: ' + (err.message || 'ডাটাবেস ত্রুটি') });
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = async () => {
    try { localStorage.removeItem('temple_admin_logged_in'); } catch (e) { }
    try { await supabaseClient.auth.signOut(); } catch (e) { }
    setIsAdminAuthenticated(false);
    setLoginEmail('');
    setLoginPass('');
    if (showToast) showToast('সফলভাবে লগআউট হয়েছে!');
  };

  const handleImageChange = async (e, setFunc, stateVar) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const compressed = await compressImageFile(file);
        if (compressed) {
          setFunc({ ...stateVar, image: compressed });
        }
      } catch (err) {
        console.warn('Image processing error:', err);
      }
    }
  };

  // -- Marquee --
  const handleMarqueeUpdate = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setErrorMsg('');
    try {
      const enVal = (marqueeTextEn && marqueeTextEn.trim() !== '') ? marqueeTextEn : translateMarqueeToEnglish(marqueeText);
      const { error: errBn } = await supabaseClient.from('settings').upsert({ key: 'marquee', value: marqueeText }, { onConflict: 'key' });
      if (errBn) throw errBn;

      const { error: errEn } = await supabaseClient.from('settings').upsert({ key: 'marquee_en', value: enVal }, { onConflict: 'key' });
      if (errEn) throw errEn;

      if (setMarqueeTextEn) setMarqueeTextEn(enVal);
      showToast('স্ক্রলিং নোটিশ (বাংলা ও ইংরেজি) সফলভাবে আপডেট করা হয়েছে!');
    } catch (err) {
      setErrorMsg("স্ক্রলিং টেক্সট আপডেট করতে সমস্যা হয়েছে।");
    } finally {
      setIsSaving(false);
    }
  };

  const getNextTableId = async (table, localItems) => {
    try {
      const { data } = await supabaseClient.from(table).select('id').order('id', { ascending: false }).limit(1);
      if (data && data.length > 0 && data[0].id != null) {
        const dbMax = Number(data[0].id) || 0;
        const localMax = (localItems || []).reduce((m, x) => Math.max(m, Number(x.id) || 0), 0);
        return Math.max(dbMax, localMax) + 1;
      }
    } catch (e) { }
    const localMax = (localItems || []).reduce((m, x) => Math.max(m, Number(x.id) || 0), 0);
    return localMax + 1;
  };

  // -- Committee --
  const handleSaveMember = async (e) => {
    e.preventDefault();
    if (!newMember.name || !newMember.role) return;
    setIsSaving(true);
    setErrorMsg('');

    const memberData = {
      name: newMember.name,
      role: newMember.role,
      phone: newMember.phone,
      image: newMember.image
    };

    try {
      if (editingCommitteeId) {
        const { error } = await supabaseClient.from('committee').update(memberData).eq('id', editingCommitteeId);
        if (error) throw error;

        setCommitteeMembers(committeeMembers.map(m => m.id === editingCommitteeId ? { ...m, ...memberData } : m));
        showToast('সদস্যের তথ্য সফলভাবে আপডেট করা হয়েছে!');
        broadcastUniversalSync();
        setEditingCommitteeId(null);
      } else {
        const nextId = await getNextTableId('committee', committeeMembers);
        memberData.id = nextId;
        memberData.order_idx = (committeeMembers || []).length;
        const { data, error } = await supabaseClient.from('committee').insert([memberData]).select();
        if (error) throw error;
        if (data) {
          setCommitteeMembers([...committeeMembers, data[0]]);
          showToast('নতুন সদস্য সফলভাবে যুক্ত করা হয়েছে!');
          broadcastUniversalSync();
        }
      }
      setNewMember({ name: '', role: '', phone: '', image: null });
    } catch (err) {
      setErrorMsg("সদস্য তথ্য সংরক্ষণ করতে সমস্যা হয়েছে।");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteMember = (id) => {
    requestConfirm('আপনি কি নিশ্চিত যে এই সদস্যকে তালিকা থেকে মুছে ফেলতে চান?', async () => {
    setIsSaving(true);
    setErrorMsg('');
    try {
      const { error } = await supabaseClient.from('committee').delete().eq('id', id);
      if (error) throw error;
      setCommitteeMembers(committeeMembers.filter(m => m.id !== id));
      showToast('সদস্য সফলভাবে মুছে ফেলা হয়েছে!');
        broadcastUniversalSync();
      } catch (err) {
        setErrorMsg("সদস্য মুছে ফেলতে সমস্যা হয়েছে।");
      } finally {
        setIsSaving(false);
      }
    });
  };

  const handleMoveCommittee = async (index, direction) => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === committeeMembers.length - 1) return;

    const newMembers = [...committeeMembers];
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    const temp = newMembers[index];
    newMembers[index] = newMembers[swapIndex];
    newMembers[swapIndex] = temp;

    const updatedMembers = newMembers.map((m, i) => ({ ...m, order_idx: i }));
    setCommitteeMembers(updatedMembers);

    setIsSaving(true);
    setErrorMsg('');
    try {
      const updates = updatedMembers.map(m => ({
        id: m.id, name: m.name, role: m.role, phone: m.phone, image: m.image, order_idx: m.order_idx
      }));
      await supabaseClient.from('committee').upsert(updates);
      showToast('কমিটি পজিশন অর্ডার সেভ হয়েছে!');
    } catch (e) {
      setErrorMsg("কমিটি অর্ডার সংরক্ষণ করতে সমস্যা হয়েছে।");
    }
    setIsSaving(false);
  };

  // -- Testimonials --
  const handleSaveTestimonial = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setErrorMsg('');
    try {
      if (editingTestimonialId) {
        const { error } = await supabaseClient.from('testimonials').update(newTestimonial).eq('id', editingTestimonialId);
        if (error) throw error;

        let updatedList = testimonials.map(t => t.id === editingTestimonialId ? { ...t, ...newTestimonial } : t);
        updatedList.sort((a, b) => new Date(b.date) - new Date(a.date));
        setTestimonials(updatedList);
        showToast('মতামত সফলভাবে আপডেট করা হয়েছে!');
        setEditingTestimonialId(null);
      } else {
        const nextId = await getNextTableId('testimonials', testimonials);
        const testimonialToSave = {
          ...newTestimonial,
          id: nextId,
          date: newTestimonial.date || new Date().toISOString().split('T')[0]
        };
        const { data, error } = await supabaseClient.from('testimonials').insert([testimonialToSave]).select();
        if (error) throw error;
        if (data) {
          let updatedList = [data[0], ...testimonials];
          updatedList.sort((a, b) => new Date(b.date) - new Date(a.date));
          setTestimonials(updatedList);
          showToast('নতুন মতামত সফলভাবে যোগ করা হয়েছে!');
          broadcastUniversalSync();
        }
      }
      broadcastUniversalSync();
      setNewTestimonial({ name: '', designation: '', text: '', date: '' });
    } catch (err) {
      setErrorMsg("মতামত সংরক্ষণ করতে সমস্যা হয়েছে।");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteTestimonial = (id) => {
    requestConfirm('আপনি কি নিশ্চিত যে এই মতামত মুছে ফেলতে চান?', async () => {
    setIsSaving(true);
    setErrorMsg('');
    try {
      const { error } = await supabaseClient.from('testimonials').delete().eq('id', id);
      if (error) throw error;
      setTestimonials(testimonials.filter(item => item.id !== id));

      if (featuredTestimonialIds.includes(id)) {
        const updatedIds = featuredTestimonialIds.filter(x => x !== id);
        setFeaturedTestimonialIds(updatedIds);
        const { data: existing } = await supabaseClient.from('settings').select('id').eq('key', 'featured_test_ids').maybeSingle();
        if (existing) await supabaseClient.from('settings').upsert({ key: 'featured_test_ids', value: JSON.stringify(updatedIds) }, { onConflict: 'key' }); broadcastUniversalSync();
      }

      showToast('মতামত সফলভাবে মুছে ফেলা হয়েছে!');
        broadcastUniversalSync();
      } catch (err) {
        setErrorMsg("মতামত মুছে ফেলতে সমস্যা হয়েছে।");
      } finally {
        setIsSaving(false);
      }
    });
  };

  const handleToggleFeaturedTestimonial = async (id) => {
    setIsSaving(true);
    setErrorMsg('');
    try {
      let updatedIds = [...featuredTestimonialIds];
      if (updatedIds.includes(id)) {
        updatedIds = updatedIds.filter(x => x !== id);
      } else {
        updatedIds.push(id);
      }

      const { data: existing } = await supabaseClient.from('settings').select('id').eq('key', 'featured_test_ids').maybeSingle();
      if (existing) {
        await supabaseClient.from('settings').upsert({ key: 'featured_test_ids', value: JSON.stringify(updatedIds) }, { onConflict: 'key' }); broadcastUniversalSync();
      } else {
        await supabaseClient.from('settings').insert({ key: 'featured_test_ids', value: JSON.stringify(updatedIds) });
      }

      setFeaturedTestimonialIds(updatedIds);
      showToast('হোমপেজ ফিচার্ড লিস্ট আপডেট হয়েছে!');
    } catch (err) {
      setErrorMsg("ফিচার্ড লিস্ট আপডেট করতে সমস্যা হয়েছে।");
    } finally {
      setIsSaving(false);
    }
  };

  // -- Notices --
  const handleSaveNotice = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setErrorMsg('');
    try {
      if (editingNoticeId) {
        const { error } = await supabaseClient.from('notices').update(newNotice).eq('id', editingNoticeId);
        if (error) throw error;

        let updatedNotices = notices.map(n => n.id === editingNoticeId ? { ...n, ...newNotice } : n);
        updatedNotices.sort((a, b) => new Date(b.date) - new Date(a.date));
        setNotices(updatedNotices);
        showToast('নোটিশ সফলভাবে আপডেট করা হয়েছে!');
        broadcastUniversalSync();
        setEditingNoticeId(null);
      } else {
        const nextId = await getNextTableId('notices', notices);
        const noticeToSave = {
          ...newNotice,
          id: nextId,
          date: newNotice.date || new Date().toISOString().split('T')[0]
        };
        const { data, error } = await supabaseClient.from('notices').insert([noticeToSave]).select();
        if (error) throw error;
        if (data) {
          let updatedNotices = [data[0], ...notices];
          updatedNotices.sort((a, b) => new Date(b.date) - new Date(a.date));
          setNotices(updatedNotices);
          showToast('নতুন নোটিশ সফলভাবে যোগ করা হয়েছে!');
          broadcastUniversalSync();
        }
      }
      setNewNotice({ title: '', date: '', text: '' });
    } catch (err) {
      setErrorMsg("নোটিশ সংরক্ষণ করতে সমস্যা হয়েছে।");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteNotice = (id) => {
    requestConfirm('আপনি কি নিশ্চিত যে এই নোটিশটি মুছে ফেলতে চান?', async () => {
      setIsSaving(true);
      setErrorMsg('');
      try {
        const { error } = await supabaseClient.from('notices').delete().eq('id', id);
        if (error) throw error;
        setNotices(notices.filter(item => item.id !== id));
        showToast('নোটিশ সফলভাবে মুছে ফেলা হয়েছে!');
        broadcastUniversalSync();
      } catch (err) {
        setErrorMsg("নোটিশ মুছে ফেলতে সমস্যা হয়েছে।");
      } finally {
        setIsSaving(false);
      }
    });
  };

  // -- Events --
  const handleSaveEvent = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setErrorMsg('');
    try {
      const primaryImage = (newEvent.images && newEvent.images.length > 0)
        ? newEvent.images[0]
        : (newEvent.image || null);

      const tablePayload = {
        title: newEvent.title,
        date: newEvent.date || new Date().toISOString().split('T')[0],
        description: newEvent.description,
        image: primaryImage
      };

      let targetId = editingEventId;
      if (editingEventId) {
        const { error } = await supabaseClient.from('events').update(tablePayload).eq('id', editingEventId);
        if (error) throw error;
      } else {
        const nextId = await getNextTableId('events', events);
        targetId = nextId;
        const { error } = await supabaseClient.from('events').insert([{ ...tablePayload, id: nextId }]);
        if (error) throw error;
      }

      // Read current events_media from settings
      let eventsMedia = {};
      try {
        const { data: stData } = await supabaseClient.from('settings').select('value').eq('key', 'events_media').maybeSingle();
        if (stData && stData.value) {
          eventsMedia = JSON.parse(stData.value) || {};
        }
      } catch (err) {}

      const allImages = (newEvent.images && newEvent.images.length > 0)
        ? newEvent.images
        : (primaryImage ? [primaryImage] : []);

      let eventVideo = (newEvent.video || '').trim() || null;
      // Keep video URL intact for universal cross-device playback

      if (allImages.length > 1 || eventVideo) {
        eventsMedia[targetId] = {
          images: allImages,
          video: eventVideo
        };
      } else {
        delete eventsMedia[targetId];
      }

      try {
        await supabaseClient.from('settings').upsert({
          key: 'events_media',
          value: JSON.stringify(eventsMedia)
        }, { onConflict: 'key' });
      } catch (upsertErr) {
        console.warn("Could not upsert events_media to Supabase:", upsertErr);
      }

      try {
        try { localStorage.setItem('temple_events_media', JSON.stringify(eventsMedia)); } catch (e) {}
      } catch (e) {}

      const updatedItem = {
        ...tablePayload,
        id: targetId,
        images: allImages,
        video: eventVideo
      };

      let updatedEvents;
      if (editingEventId) {
        updatedEvents = events.map(ev => ev.id === editingEventId ? updatedItem : ev);
        showToast('ইভেন্ট সফলভাবে আপডেট করা হয়েছে!');
        setEditingEventId(null);
      } else {
        updatedEvents = [updatedItem, ...events];
        showToast('নতুন ইভেন্ট সফলভাবে যোগ করা হয়েছে!');
      }
      broadcastUniversalSync();
      updatedEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
      setEvents(updatedEvents);
      setNewEvent({ title: '', date: '', description: '', image: null, images: [], video: '' });
    } catch (err) {
      console.error("Save event error:", err);
      setErrorMsg("ইভেন্ট সংরক্ষণ করতে সমস্যা হয়েছে: " + (err.message || ''));
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteEvent = (id) => {
    requestConfirm('আপনি কি নিশ্চিত যে এই ইভেন্টটি মুছে ফেলতে চান?', async () => {
    setIsSaving(true);
    setErrorMsg('');
    try {
      const { error } = await supabaseClient.from('events').delete().eq('id', id);
      if (error) throw error;
      try {
        const { data: stData } = await supabaseClient.from('settings').select('value').eq('key', 'events_media').maybeSingle();
        if (stData && stData.value) {
          const eventsMedia = JSON.parse(stData.value) || {};
          delete eventsMedia[id];
          await supabaseClient.from('settings').upsert({
            key: 'events_media',
            value: JSON.stringify(eventsMedia)
          }, { onConflict: 'key' });
          localStorage.setItem('temple_events_media', JSON.stringify(eventsMedia));
        }
      } catch (e) {}
      setEvents(events.filter(item => item.id !== id));
      showToast('ইভেন্ট সফলভাবে মুছে ফেলা হয়েছে!');
      broadcastUniversalSync();
    } catch (err) {
      setErrorMsg("ইভেন্ট মুছে ফেলতে সমস্যা হয়েছে।");
    } finally {
      setIsSaving(false);
    }
    });
  };

  // -- Donations --
  const handleSaveDonation = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setErrorMsg('');
    const donationData = {
      ...newDonation,
      date: newDonation.date || new Date().toISOString().split('T')[0]
    };
    try {
      if (editingDonationId) {
        const { error } = await supabaseClient.from('donations').update(donationData).eq('id', editingDonationId);
        if (error) throw error;

        let updatedD = donations.map(d => d.id === editingDonationId ? { ...d, ...donationData } : d);
        updatedD.sort((a, b) => b.id - a.id);
        setDonations(updatedD);
        showToast('অনুদান সফলভাবে আপডেট করা হয়েছে!');
        broadcastUniversalSync();
        setEditingDonationId(null);
      } else {
        const nextId = await getNextTableId('donations', donations);
        donationData.id = nextId;
        const { data, error } = await supabaseClient.from('donations').insert([donationData]).select();
        if (error) throw error;
        if (data) {
          let updatedD = [data[0], ...donations];
          updatedD.sort((a, b) => b.id - a.id);
          setDonations(updatedD);
          showToast('নতুন অনুদান সফলভাবে যোগ করা হয়েছে!');
          broadcastUniversalSync();
        }
      }
      setNewDonation({ name: '', address: '', type: 'নগদ অর্থ', amount: '', date: '', is_hidden: false });
    } catch (err) {
      setErrorMsg("অনুদান সংরক্ষণ করতে সমস্যা হয়েছে।");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteDonation = (id) => {
    requestConfirm('আপনি কি নিশ্চিত যে এই অনুদানটি মুছে ফেলতে চান?', async () => {
      setIsSaving(true);
      setErrorMsg('');
      try {
        const { error } = await supabaseClient.from('donations').delete().eq('id', id);
        if (error) throw error;
        setDonations(donations.filter(item => item.id !== id));
        showToast('অনুদান সফলভাবে মুছে ফেলা হয়েছে!');
        broadcastUniversalSync();
      } catch (err) {
        setErrorMsg("অনুদান মুছে ফেলতে সমস্যা হয়েছে।");
      } finally {
        setIsSaving(false);
      }
    });
  };

  const handleToggleDonationVisibility = async (id, currentStatus) => {
    setIsSaving(true);
    setErrorMsg('');
    try {
      const { error } = await supabaseClient.from('donations').update({ is_hidden: !currentStatus }).eq('id', id);
      if (error) throw error;
      setDonations(donations.map(d => d.id === id ? { ...d, is_hidden: !currentStatus } : d));
      showToast(currentStatus ? 'অনুদান পাবলিক করা হয়েছে!' : 'অনুদান হাইড করা হয়েছে!');
    } catch (err) {
      setErrorMsg("স্ট্যাটাস পরিবর্তন করতে সমস্যা হয়েছে।");
    } finally {
      setIsSaving(false);
    }
  };

  // -- Timings Save Handler --
  const handleSaveTimings = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setErrorMsg('');
    try {
      setTimings(timingsForm);
      try { localStorage.setItem('temple_timings', JSON.stringify(timingsForm)); } catch (e) { }

      const { data: existing } = await supabaseClient.from('settings').select('id').eq('key', 'temple_timings').maybeSingle();
      if (existing) {
        await supabaseClient.from('settings').upsert({ key: 'temple_timings', value: JSON.stringify(timingsForm) }, { onConflict: 'key' }); broadcastUniversalSync();
      } else {
        await supabaseClient.from('settings').insert({ key: 'temple_timings', value: JSON.stringify(timingsForm) });
      }
      showToast('পূজা ও আরতির সময়সূচি সফলভাবে সংরক্ষিত হয়েছে!');
    } catch (err) {
      setErrorMsg("সময়সূচি আপডেট করতে সমস্যা হয়েছে।");
    } finally {
      setIsSaving(false);
    }
  };

  // -- Travel Guide Save Handler --
  const handleSaveTravel = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setErrorMsg('');
    try {
      setTravelInfo(travelForm);
      try { localStorage.setItem('temple_travel', JSON.stringify(travelForm)); } catch (e) { }

      const { data: existing } = await supabaseClient.from('settings').select('id').eq('key', 'travel_info').maybeSingle();
      if (existing) {
        await supabaseClient.from('settings').upsert({ key: 'travel_info', value: JSON.stringify(travelForm) }, { onConflict: 'key' }); broadcastUniversalSync();
      } else {
        await supabaseClient.from('settings').insert({ key: 'travel_info', value: JSON.stringify(travelForm) });
      }
      showToast('তীর্থযাত্রী ভ্রমণ গাইড ও যোগাযোগের তথ্য সংরক্ষিত হয়েছে!');
    } catch (err) {
      setErrorMsg("ভ্রমণ গাইড আপডেট করতে সমস্যা হয়েছে।");
    } finally {
      setIsSaving(false);
    }
  };

  // -- Sacred Mantras Save / Delete Handlers --
  const handleSaveMantra = async (e) => {
    e.preventDefault();
    if (!newMantra.title || !newMantra.sanskrit) {
      setErrorMsg("অনুগ্রহ করে মন্ত্রের শিরোনাম ও মূল শ্লোক প্রদান করুন।");
      return;
    }
    setIsSaving(true);
    setErrorMsg('');
    try {
      let updatedMantras;
      if (editingMantraId) {
        updatedMantras = (mantras || []).map(m => m.id === editingMantraId ? { ...m, ...newMantra } : m);
        showToast('মন্ত্র সফলভাবে আপডেট করা হয়েছে!');
        setEditingMantraId(null);
      } else {
        const itemToSave = {
          id: Date.now(),
          ...newMantra
        };
        updatedMantras = [itemToSave, ...(mantras || [])];
        showToast('নতুন মন্ত্র ও শ্লোক সফলভাবে যুক্ত হয়েছে!');
      }
      setMantras(updatedMantras);
      try { localStorage.setItem('temple_mantras', JSON.stringify(updatedMantras)); } catch (e) { }

      const { data: existing } = await supabaseClient.from('settings').select('id').eq('key', 'sacred_mantras').maybeSingle();
      if (existing) {
        await supabaseClient.from('settings').upsert({ key: 'sacred_mantras', value: JSON.stringify(updatedMantras) }, { onConflict: 'key' }); broadcastUniversalSync();
      } else {
        await supabaseClient.from('settings').insert({ key: 'sacred_mantras', value: JSON.stringify(updatedMantras) });
      }
      setNewMantra({
        category: 'ধ্যান',
        category_en: 'Dhyana',
        title: '',
        title_en: '',
        sanskrit: '',
        pronunciation: '',
        meaning: '',
        meaning_en: ''
      });
    } catch (err) {
      setErrorMsg("মন্ত্র সংরক্ষণ করতে সমস্যা হয়েছে।");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteMantra = (id) => {
    requestConfirm('আপনি কি নিশ্চিত যে এই মন্ত্রটি মুছে ফেলতে চান?', async () => {
    setIsSaving(true);
    setErrorMsg('');
    try {
      const updatedMantras = (mantras || []).filter(m => m.id !== id);
      setMantras(updatedMantras);
      try { localStorage.setItem('temple_mantras', JSON.stringify(updatedMantras)); } catch (e) { }

      const { data: existing } = await supabaseClient.from('settings').select('id').eq('key', 'sacred_mantras').maybeSingle();
      if (existing) {
        await supabaseClient.from('settings').upsert({ key: 'sacred_mantras', value: JSON.stringify(updatedMantras) }, { onConflict: 'key' }); broadcastUniversalSync();
      }
      showToast('মন্ত্র মুছে ফেলা হয়েছে!');
        broadcastUniversalSync();
      } catch (err) {
        setErrorMsg("মন্ত্র মুছতে সমস্যা হয়েছে।");
      } finally {
        setIsSaving(false);
      }
    });
  };

  // -- Online Puja & Sankalpa Bookings Handlers --
  const [bookingSearch, setBookingSearch] = useState('');
  const [bookingFilter, setBookingFilter] = useState('all'); // all, pending, completed

  const handleToggleBookingStatus = async (id, currentStatus) => {
    setIsSaving(true);
    setErrorMsg('');
    try {
      const nextStatus = currentStatus === 'completed' ? 'pending' : 'completed';
      const updated = (pujaBookings || []).map(b => (b.id === id || b.token === id) ? { ...b, status: nextStatus } : b);
      if (setPujaBookings) setPujaBookings(updated);
      try { localStorage.setItem('mmg_puja_bookings', JSON.stringify(updated)); } catch (e) { }

      const { data: existing } = await supabaseClient.from('settings').select('id').eq('key', 'puja_bookings').maybeSingle();
      if (existing) {
        await supabaseClient.from('settings').upsert({ key: 'puja_bookings', value: JSON.stringify(updated) }, { onConflict: 'key' }); broadcastUniversalSync();
      } else {
        await supabaseClient.from('settings').insert({ key: 'puja_bookings', value: JSON.stringify(updated) });
      }
      showToast(nextStatus === 'completed' ? 'পূজা বুকিং সম্পন্ন হিসেবে চিহ্নিত করা হয়েছে!' : 'বুকিং পুনরায় পেন্ডিং করা হয়েছে!');
    } catch (err) {
      setErrorMsg("বুকিং স্ট্যাটাস পরিবর্তন করতে সমস্যা হয়েছে।");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteBooking = (id) => {
    requestConfirm('আপনি কি নিশ্চিত যে এই পূজা বুকিং তালিকা থেকে মুছে ফেলতে চান?', async () => {
    setIsSaving(true);
    setErrorMsg('');
    try {
      const updated = (pujaBookings || []).filter(b => b.id !== id && b.token !== id);
      if (setPujaBookings) setPujaBookings(updated);
      try { localStorage.setItem('mmg_puja_bookings', JSON.stringify(updated)); } catch (e) { }

      const { data: existing } = await supabaseClient.from('settings').select('id').eq('key', 'puja_bookings').maybeSingle();
      if (existing) {
        await supabaseClient.from('settings').upsert({ key: 'puja_bookings', value: JSON.stringify(updated) }, { onConflict: 'key' }); broadcastUniversalSync();
      }
      showToast('পূজা বুকিং মুছে ফেলা হয়েছে!');
        broadcastUniversalSync();
      } catch (err) {
        setErrorMsg("বুকিং মুছে ফেলতে সমস্যা হয়েছে।");
      } finally {
        setIsSaving(false);
      }
    });
  };

  // Direct Booking Token Voucher Printer
  const printBookingDirectly = (b) => {
    if (!b) return;
    const printWindow = window.open('', '_blank', 'width=850,height=950');
    if (!printWindow) {
      alert('অনুগ্রহ করে পপ-আপ ব্লকার নিষ্ক্রিয় করুন যাতে সংকল্প পত্র প্রিন্ট হতে পারে।');
      return;
    }
    const html = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="utf-8" />
  <title>পবিত্র সংকল্প পত্র ও পূজা বুকিং - ${b.token || 'MMG'}</title>
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600;700;800&family=Noto+Serif+Bengali:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    @page { size: A4 portrait; margin: 12mm; }
    * { box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    body { margin: 0; padding: 24px; font-family: 'Hind Siliguri', 'Noto Serif Bengali', sans-serif; background: #fffcf7; color: #261605; }
    .card { max-width: 740px; margin: 0 auto; background: #fff; border: 3px double #b45309; border-radius: 16px; padding: 32px; position: relative; }
    .card::before { content: ""; position: absolute; inset: 6px; border: 1px dashed #d97706; border-radius: 12px; pointer-events: none; }
    .header { text-align: center; border-bottom: 2px solid #fef3c7; padding-bottom: 16px; margin-bottom: 20px; }
    .om { font-size: 32px; color: #b45309; margin-bottom: 4px; }
    .sloka { font-family: 'Noto Serif Bengali', serif; font-size: 13px; color: #92400e; font-weight: 700; }
    .title { font-size: 24px; font-weight: 800; color: #78350f; margin: 4px 0; }
    .subtitle { font-size: 12px; color: #57534e; }
    .token-badge { display: inline-block; background: #b45309; color: #fff; padding: 4px 16px; border-radius: 9999px; font-size: 13px; font-weight: 700; margin-top: 8px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 20px 0; }
    .item { padding: 10px 14px; background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; font-size: 13.5px; }
    .item .lbl { color: #78350f; font-weight: 600; display: block; font-size: 12px; }
    .item .val { color: #1c1917; font-weight: 800; }
    .sankalpa-box { background: #fef3c7; border: 2px solid #f59e0b; border-radius: 10px; padding: 14px; margin: 20px 0; font-size: 14px; color: #78350f; }
    .footer { display: flex; justify-content: space-between; align-items: flex-end; padding-top: 40px; }
    .sig-line { border-top: 1.5px dashed #a8a29e; width: 160px; text-align: center; font-size: 12px; font-weight: 700; color: #44403c; padding-top: 4px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="om">ॐ</div>
      <div class="sloka">"ওঁ হ্রীং শ্রীং ক্লীং ঐং মনসাদেব্যৈ স্বাহা"</div>
      <div class="title">শ্রী শ্রী মা মনসা মন্দির, গৈলা</div>
      <div class="subtitle">পো: গৈলা, উপজেলা: আগৈলঝাড়া, জেলা: বরিশাল • বাৎসরিক পূজা ও সেবা পরিষদ</div>
      <div class="token-badge">পবিত্র পূজা ও সংকল্প গ্রহণ প্রমাণপত্র • টোকেন: ${b.token}</div>
    </div>
    <div class="grid">
      <div class="item"><span class="lbl">ভক্তের নাম:</span><span class="val">${b.devoteeName}</span></div>
      <div class="item"><span class="lbl">গোত্র (Lineage):</span><span class="val">${b.gotra || 'অনুল্লিখিত'}</span></div>
      <div class="item"><span class="lbl">মোবাইল নম্বর:</span><span class="val">${b.phone || '-'}</span></div>
      <div class="item"><span class="lbl">ঠিকানা / জেলা:</span><span class="val">${b.address || '-'}</span></div>
      <div class="item" style="grid-column: span 2;"><span class="lbl">পূজার ধরণ:</span><span class="val">${b.pujaType}</span></div>
      ${b.pujaDate ? `<div class="item"><span class="lbl">পূজার নির্ধারিত তারিখ:</span><span class="val">${b.pujaDate}</span></div>` : ''}
      <div class="item"><span class="lbl">বুকিং তারিখ ও সময়:</span><span class="val">${b.timestamp ? new Date(b.timestamp).toLocaleString('bn-BD') : new Date().toLocaleDateString('bn-BD')}</span></div>
    </div>
    ${b.sankalpa ? `<div class="sankalpa-box"><strong>বিশেষ সংকল্প ও প্রার্থনা:</strong><br>${b.sankalpa}</div>` : ''}
    <div class="footer">
      <div class="sig-line">ভক্তের স্বাক্ষর</div>
      <div style="text-align: center; border: 2px dashed #b45309; border-radius: 50%; width: 70px; height: 70px; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 800; color: #b45309;">মা মনসা<br>মন্দির গৈলা</div>
      <div class="sig-line">প্রধান পুরোহিত / সেবাধ্যক্ষ</div>
    </div>
  </div>
  <script>window.onload = function() { setTimeout(function() { window.print(); }, 400); };<\/script>
</body>
</html>`;
    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
  };

  // -- Donation Receipts Handlers --
  const [receiptSearch, setReceiptSearch] = useState('');
  const [showNewReceiptModal, setShowNewReceiptModal] = useState(false);
  const [adminReceiptForm, setAdminReceiptForm] = useState({
    name: '',
    phone: '',
    gotra: '',
    amount: '',
    method: 'bKash',
    trxId: '',
    purpose: 'সাধারণ প্রণামী ও সেবা',
    date: new Date().toISOString().split('T')[0]
  });

  const handleAdminIssueReceipt = async (e) => {
    e.preventDefault();
    if (!adminReceiptForm.name.trim() || !adminReceiptForm.amount || parseFloat(adminReceiptForm.amount) <= 0) {
      setErrorMsg("অনুগ্রহ করে দাতার নাম ও সঠিক দানের পরিমাণ লিখুন।");
      return;
    }
    setIsSaving(true);
    setErrorMsg('');
    const receiptNo = 'MMG-REC-' + Math.floor(100000 + Math.random() * 900000);
    const receipt = {
      id: 'rec_' + Date.now(),
      ...adminReceiptForm,
      receiptNo,
      amountWords: amountInBengaliWords(adminReceiptForm.amount),
      timestamp: new Date().toISOString()
    };

    try {
      // 1. Fetch latest cloud receipts to prevent race conditions across mobile & PC
      let latestCloudList = [];
      try {
        const { data: cloudRow } = await supabaseClient.from('settings').select('value').eq('key', 'donation_receipts').maybeSingle();
        if (cloudRow && cloudRow.value) {
          latestCloudList = JSON.parse(cloudRow.value);
        }
      } catch (e) {}

      // Deduplicate
      const existingPool = [...(latestCloudList || []), ...(donationReceipts || [])];
      const seen = new Set();
      const updated = [receipt];
      seen.add(receipt.receiptNo);
      seen.add(receipt.id);

      for (const item of existingPool) {
        const k = item.id || item.receiptNo;
        if (k && !seen.has(k) && !seen.has(item.receiptNo)) {
          seen.add(k);
          if (item.receiptNo) seen.add(item.receiptNo);
          updated.push(item);
        }
      }

      // 2. Atomic upsert to Supabase
      const { error: upErr } = await supabaseClient.from('settings').upsert({
        key: 'donation_receipts',
        value: JSON.stringify(updated.slice(0, 150))
      }, { onConflict: 'key' });
      if (upErr) throw upErr;

      // 3. Update local state & localStorage
      if (setDonationReceipts) setDonationReceipts(updated);
      try { localStorage.setItem('mmg_donation_receipts', JSON.stringify(updated.slice(0, 150))); } catch (e) { }

      // 4. Universal sync broadcast
      broadcastUniversalSync();

      showToast('নতুন স্মারক প্রণামী রশিদ ইস্যু ও সংরক্ষিত হয়েছে!');
      setAdminReceiptForm({
        name: '',
        phone: '',
        gotra: '',
        amount: '',
        method: 'bKash',
        trxId: '',
        purpose: 'সাধারণ প্রণামী ও সেবা',
        date: new Date().toISOString().split('T')[0]
      });
      setShowNewReceiptModal(false);
      printReceiptDirectly(receipt, 'bn');
    } catch (err) {
      console.error("Receipt save error:", err);
      setErrorMsg("রশিদ সংরক্ষণ করতে সমস্যা হয়েছে: " + (err.message || ''));
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteReceipt = (id) => {
    requestConfirm('আপনি কি নিশ্চিত যে এই রশিদটি তালিকা থেকে মুছে ফেলতে চান?', async () => {
    setIsSaving(true);
    setErrorMsg('');
    try {
      let currentCloudList = donationReceipts || [];
      try {
        const { data: cloudRow } = await supabaseClient.from('settings').select('value').eq('key', 'donation_receipts').maybeSingle();
        if (cloudRow && cloudRow.value) {
          currentCloudList = JSON.parse(cloudRow.value);
        }
      } catch (e) {}

      const updated = currentCloudList.filter(r => r.id !== id && r.receiptNo !== id);
      if (setDonationReceipts) setDonationReceipts(updated);
      try { localStorage.setItem('mmg_donation_receipts', JSON.stringify(updated)); } catch (e) { }

      await supabaseClient.from('settings').upsert({
        key: 'donation_receipts',
        value: JSON.stringify(updated)
      }, { onConflict: 'key' });

      broadcastUniversalSync();
      showToast('রশিদ মুছে ফেলা হয়েছে!');
        broadcastUniversalSync();
      } catch (err) {
        setErrorMsg("রশিদ মুছতে সমস্যা হয়েছে।");
      } finally {
        setIsSaving(false);
      }
    });
  };

  // -- Royani Palas Form & Save Handler --
  const [royaniForm, setRoyaniForm] = useState(royaniPalas && royaniPalas.length > 0 ? royaniPalas : DEFAULT_ROYANI_PALAS);
  useEffect(() => {
    if (royaniPalas && royaniPalas.length > 0) setRoyaniForm(royaniPalas);
  }, [royaniPalas]);

  const handleRoyaniPalaChange = (idx, field, value) => {
    const updated = [...royaniForm];
    updated[idx] = { ...updated[idx], [field]: value };
    setRoyaniForm(updated);
  };

  const handleSaveRoyani = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setErrorMsg('');
    try {
      if (setRoyaniPalas) setRoyaniPalas(royaniForm);
      try { localStorage.setItem('temple_royani_palas', JSON.stringify(royaniForm)); } catch (e) { }

      const { data: existing } = await supabaseClient.from('settings').select('id').eq('key', 'royani_palas').maybeSingle();
      if (existing) {
        await supabaseClient.from('settings').upsert({ key: 'royani_palas', value: JSON.stringify(royaniForm) }, { onConflict: 'key' }); broadcastUniversalSync();
      } else {
        await supabaseClient.from('settings').insert({ key: 'royani_palas', value: JSON.stringify(royaniForm) });
      }
      showToast('ঐতিহ্যবাহী রয়ানী গানের চার পালা সফলভাবে সংরক্ষিত হয়েছে!');
    } catch (err) {
      setErrorMsg("রয়ানী পালা সংরক্ষণ করতে সমস্যা হয়েছে।");
    } finally {
      setIsSaving(false);
    }
  };

  // -- Temple History Form & Save Handler --
  const [historyForm, setHistoryForm] = useState(templeHistory || DEFAULT_TEMPLE_HISTORY);
  useEffect(() => {
    if (templeHistory) setHistoryForm(templeHistory);
  }, [templeHistory]);

  const handleSaveHistory = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setErrorMsg('');
    try {
      if (setTempleHistory) setTempleHistory(historyForm);
      try { localStorage.setItem('temple_history_data', JSON.stringify(historyForm)); } catch (e) { }

      const { data: existing } = await supabaseClient.from('settings').select('id').eq('key', 'temple_history').maybeSingle();
      if (existing) {
        await supabaseClient.from('settings').upsert({ key: 'temple_history', value: JSON.stringify(historyForm) }, { onConflict: 'key' }); broadcastUniversalSync();
      } else {
        await supabaseClient.from('settings').insert({ key: 'temple_history', value: JSON.stringify(historyForm) });
      }
      showToast('মন্দিরের ঐতিহাসিক পটভূমি ও পরিচিতি সংরক্ষিত হয়েছে!');
    } catch (err) {
      setErrorMsg("ইতিহাস তথ্য সংরক্ষণ করতে সমস্যা হয়েছে।");
    } finally {
      setIsSaving(false);
    }
  };

  // -- Photo Gallery Management Handlers --
  const handleSaveGalleryToCloud = async (updatedList) => {
    // If any item has oversized base64 data, persist to IndexedDB first
    const safeList = await Promise.all(updatedList.map(async (item, idx) => {
      if (item && item.url && typeof item.url === 'string' && item.url.startsWith('data:video/') && item.url.length > 400000) {
        const idbKey = `idb:video_gal_${item.id || idx}_${Date.now()}`;
        await storeMediaBlob(idbKey, item.url);
        return { ...item, url: idbKey };
      }
      return item;
    }));

    if (setGalleryItems) setGalleryItems(safeList);
    try {
      localStorage.setItem('temple_gallery_items', JSON.stringify(safeList));
    } catch (e) {
      console.warn("localStorage quota exceeded for gallery:", e);
    }

    try {
      const { data: existing } = await supabaseClient.from('settings').select('id').eq('key', 'gallery_items').maybeSingle();
      if (existing) {
        await supabaseClient.from('settings').upsert({ key: 'gallery_items', value: JSON.stringify(safeList) }, { onConflict: 'key' }); broadcastUniversalSync();
      } else {
        await supabaseClient.from('settings').insert({ key: 'gallery_items', value: JSON.stringify(safeList) });
      }
    } catch (err) {
      console.warn("Could not save gallery to Supabase:", err);
    }
  };

  // Event multi-images and video handlers
  const handleEventMultiFiles = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    setIsSaving(true);
    try {
      const compressedList = await Promise.all(files.map(compressImageFile));
      const valid = compressedList.filter(Boolean);
      setNewEvent(prev => {
        const existing = prev.images || (prev.image ? [prev.image] : []);
        const merged = [...existing, ...valid];
        return {
          ...prev,
          image: merged[0] || null,
          images: merged
        };
      });
      showToast(`${valid.length} টি ছবি সফলভাবে প্রস্তুত করা হয়েছে!`);
    } catch (err) {
      setErrorMsg("ছবি প্রসেস করতে সমস্যা হয়েছে।");
    } finally {
      setIsSaving(false);
      e.target.value = '';
    }
  };

  const handleEventVideoFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsSaving(true);
    showToast('ভিডিও ফাইল প্রসেস ও আপলোড হচ্ছে... অনুগ্রহ করে অপেক্ষা করুন।');
    try {
      const videoData = await readVideoFile(file);
      setNewEvent(prev => ({ ...prev, video: videoData }));
      showToast('ভিডিও ফাইল সফলভাবে প্রস্তুত ও যুক্ত হয়েছে!');
    } catch (err) {
      setErrorMsg(err.message || 'ভিডিও আপলোড করতে সমস্যা হয়েছে।');
    } finally {
      setIsSaving(false);
      e.target.value = '';
    }
  };

  // Gallery multi-files batch upload
  const handleGalleryMultiFiles = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    setIsSaving(true);
    try {
      const compressedList = await Promise.all(files.map(compressImageFile));
      const valid = compressedList.filter(Boolean);
      const batchEntries = valid.map((imgUrl, i) => ({
        id: 'gal_' + Date.now() + '_' + i,
        url: imgUrl,
        captionBn: 'শ্রীশ্রী মা মনসা মন্দির প্রাঙ্গণ',
        captionEn: 'Maa Manasa Temple Premises',
        mediaType: 'image'
      }));
      setNewGalleryBatch(prev => [...prev, ...batchEntries]);
      showToast(`${valid.length} টি ছবি আপলোডের জন্য ব্যাচে যুক্ত হয়েছে!`);
    } catch (err) {
      setErrorMsg('ছবি প্রসেসিং করতে সমস্যা হয়েছে।');
    } finally {
      setIsSaving(false);
      e.target.value = '';
    }
  };

  const handleSaveGalleryBatch = async () => {
    if (newGalleryBatch.length === 0) return;
    setIsSaving(true);
    setErrorMsg('');
    try {
      const updated = [...(galleryItems || DEFAULT_GALLERY_ITEMS), ...newGalleryBatch];
      await handleSaveGalleryToCloud(updated);
      setNewGalleryBatch([]);
      showToast(`মোট ${newGalleryBatch.length} টি ছবি গ্যালারিতে যোগ করা হয়েছে!`);
    } catch (err) {
      setErrorMsg('গ্যালারি সংরক্ষণ করতে সমস্যা হয়েছে: ' + (err.message || ''));
    } finally {
      setIsSaving(false);
    }
  };

  const handleGalleryVideoFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsSaving(true);
    showToast('ভিডিও ফাইল প্রসেস ও আপলোড হচ্ছে... অনুগ্রহ করে অপেক্ষা করুন।');
    try {
      const videoData = await readVideoFile(file);
      setNewGalleryPhoto(prev => ({
        ...prev,
        image: videoData,
        mediaType: 'video'
      }));
      showToast('ভিডিও ফাইল সফলভাবে প্রস্তুত ও আপলোড হয়েছে!');
    } catch (err) {
      setErrorMsg(err.message || 'ভিডিও আপলোড করতে সমস্যা হয়েছে।');
    } finally {
      setIsSaving(false);
      e.target.value = '';
    }
  };

  const handleAddGalleryPhoto = async (e) => {
    e.preventDefault();
    const mediaUrl = (newGalleryPhoto.image || newGalleryPhoto.url || '').trim();
    if (!mediaUrl) {
      setErrorMsg("অনুগ্রহ করে একটি ছবি/ভিডিও আপলোড করুন অথবা অনলাইন লিংক প্রদান করুন।");
      return;
    }
    const isVid = newGalleryPhoto.mediaType === 'video' || isVideoUrl(mediaUrl);
    setIsSaving(true);
    setErrorMsg('');
    try {
      const newEntry = {
        id: 'gal_' + Date.now(),
        url: mediaUrl,
        captionBn: newGalleryPhoto.captionBn.trim() || (isVid ? 'শ্রীশ্রী মা মনসা মন্দির ভিডিও' : 'শ্রীশ্রী মা মনসা মন্দির প্রাঙ্গণ'),
        captionEn: newGalleryPhoto.captionEn.trim() || (isVid ? 'Maa Manasa Temple Video' : 'Maa Manasa Temple Premises'),
        mediaType: isVid ? 'video' : 'image'
      };
      const updated = [...(galleryItems || DEFAULT_GALLERY_ITEMS), newEntry];
      await handleSaveGalleryToCloud(updated);
      setNewGalleryPhoto({ url: '', captionBn: '', captionEn: '', image: null, mediaType: 'image' });
      showToast(isVid ? 'নতুন ভিডিও সফলভাবে গ্যালারিতে যোগ করা হয়েছে!' : 'নতুন ছবি সফলভাবে গ্যালারিতে যোগ করা হয়েছে!');
    } catch (err) {
      setErrorMsg('গ্যালারির মিডিয়া সংরক্ষণে ত্রুটি: ' + (err.message || ''));
    } finally {
      setIsSaving(false);
    }
  };

  const handleStartEditGalleryPhoto = (item) => {
    setEditingGalleryId(item.id);
    setEditGalleryPhoto({
      url: item.url || '',
      captionBn: item.captionBn || '',
      captionEn: item.captionEn || '',
      image: null,
      mediaType: item.mediaType || (isVideoUrl(item.url) ? 'video' : 'image')
    });
  };

  const handleUpdateGalleryPhoto = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setErrorMsg('');
    try {
      const updated = (galleryItems || DEFAULT_GALLERY_ITEMS).map(item => {
        if (item.id === editingGalleryId) {
          const finalUrl = editGalleryPhoto.image || editGalleryPhoto.url || item.url;
          const isVid = editGalleryPhoto.mediaType === 'video' || isVideoUrl(finalUrl);
          return {
            ...item,
            url: finalUrl,
            captionBn: editGalleryPhoto.captionBn.trim() || item.captionBn,
            captionEn: editGalleryPhoto.captionEn.trim() || item.captionEn,
            mediaType: isVid ? 'video' : 'image'
          };
        }
        return item;
      });
      await handleSaveGalleryToCloud(updated);
      setEditingGalleryId(null);
      showToast('গ্যালারির তথ্য ও ক্যাপশন হালনাগাদ করা হয়েছে!');
    } catch (err) {
      setErrorMsg('মিডিয়া আপডেট করতে সমস্যা হয়েছে: ' + (err.message || ''));
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteGalleryPhoto = (id) => {
    requestConfirm('আপনি কি নিশ্চিত এই ছবিটি গ্যালারি থেকে মুছে ফেলতে চান?', async () => {
      setIsSaving(true);
      try {
        const currentList = galleryItems || DEFAULT_GALLERY_ITEMS;
        if (currentList.length <= 1) {
          setErrorMsg("গ্যালারিতে কমপক্ষে একটি ছবি থাকতে হবে!");
          setIsSaving(false);
          return;
        }
        const updated = currentList.filter(item => item.id !== id);
        await handleSaveGalleryToCloud(updated);
        broadcastUniversalSync();
        showToast('ছবিটি গ্যালারি থেকে মুছে ফেলা হয়েছে।');
      } catch (err) {
        setErrorMsg('ছবি মুছতে সমস্যা হয়েছে: ' + (err.message || ''));
      } finally {
        setIsSaving(false);
      }
    });
  };

  const handleMoveGalleryPhoto = async (index, direction) => {
    const list = [...(galleryItems || DEFAULT_GALLERY_ITEMS)];
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= list.length) return;
    const temp = list[index];
    list[index] = list[targetIdx];
    list[targetIdx] = temp;
    await handleSaveGalleryToCloud(list);
    showToast('গ্যালারির ছবির ক্রম পরিবর্তিত হয়েছে!');
  };

  if (!isAdminAuthenticated) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 relative py-12">
        <div className="absolute inset-0 bg-orange-900/10 z-0"></div>
        <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md border-t-[8px] border-orange-600 relative z-10">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-200 shadow-sm">
              <i className="fas fa-shield-alt text-orange-600 text-4xl"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">এডমিন প্যানেল</h2>
            <p className="text-sm text-gray-500 mt-1">লগইন করে তথ্য ও কন্টেন্ট পরিচালনা করুন</p>
          </div>
          {errorMsg && (
            <div className="bg-red-50 text-red-700 p-3.5 rounded-xl mb-5 text-sm text-center border border-red-200 font-medium flex items-center justify-center gap-2">
              <i className="fas fa-exclamation-triangle text-red-500"></i> {errorMsg}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">ইউজার আইডি বা ইমেইল (User ID / Email)</label>
              <div className="relative">
                <input
                  type="text"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none bg-gray-50 text-gray-800 text-sm font-medium"
                  placeholder="admin অথবা admin@manasamondirgoila.com"
                  required
                />
                <i className="fas fa-user absolute left-4 top-3.5 text-gray-400"></i>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">পাসওয়ার্ড (Password)</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                  className="w-full pl-11 pr-11 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none bg-gray-50 text-gray-800 text-sm"
                  placeholder="••••••••"
                  required
                />
                <i className="fas fa-lock absolute left-4 top-3.5 text-gray-400"></i>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3 text-gray-400 hover:text-gray-600 focus:outline-none p-1"
                  title={showPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখুন"}
                >
                  <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                </button>
              </div>
            </div>
            <button type="submit" disabled={isSaving} className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-3.5 rounded-xl hover:from-orange-700 hover:to-orange-600 transition-all disabled:opacity-50 shadow-md flex items-center justify-center gap-2">
              {isSaving ? <><i className="fas fa-spinner fa-spin"></i> যাচাই করা হচ্ছে...</> : <><i className="fas fa-sign-in-alt"></i> লগইন করুন</>}
            </button>
          </form>

          <div className="mt-6 text-center border-t border-gray-100 pt-4">
            <button onClick={() => navigateTo('home')} className="text-sm font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1.5 transition-colors">
              <i className="fas fa-arrow-left text-xs"></i> মূল ওয়েবসাইটে ফিরে যান
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-12 relative">

      <div className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-md sticky top-0 z-40 border-b-4 border-orange-500">
        <h2 className="text-xl font-bold flex items-center gap-2"><i className="fas fa-user-shield text-orange-400"></i> ড্যাশবোর্ড (এডমিন)</h2>
        <div className="flex gap-4 items-center">
          <button onClick={() => navigateTo('home')} className="text-gray-300 hover:text-white font-medium text-sm flex items-center gap-1.5 transition-colors">
            <i className="fas fa-external-link-alt text-xs"></i> ওয়েবসাইট দেখুন
          </button>
          <button onClick={handleLogout} className="bg-red-600/20 text-red-400 px-4 py-1.5 rounded-lg flex items-center gap-2 hover:bg-red-600/40 hover:text-white font-medium text-sm transition-colors border border-red-500/30">
            <i className="fas fa-sign-out-alt"></i> লগআউট
          </button>
        </div>
      </div>

      {/* Quick Overview Stats Ribbon */}
      <div className="container mx-auto px-4 mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-13 gap-2.5">
          <div onClick={() => handleTabSwitch('marquee')} className="cursor-pointer bg-white p-3 rounded-2xl border border-gray-200 shadow-xs hover:border-orange-400 hover:shadow-sm transition-all text-center">
            <i className="fas fa-scroll text-orange-500 text-base mb-1"></i>
            <div className="text-[10px] text-gray-500 font-bold">স্ক্রলিং নোটিশ</div>
            <div className="text-xs font-extrabold text-gray-800 truncate">{marqueeText ? 'সক্রিয়' : 'খালি'}</div>
          </div>
          <div onClick={() => handleTabSwitch('timings')} className="cursor-pointer bg-white p-3 rounded-2xl border border-gray-200 shadow-xs hover:border-orange-400 hover:shadow-sm transition-all text-center">
            <i className="fas fa-clock text-amber-500 text-base mb-1"></i>
            <div className="text-[10px] text-gray-500 font-bold">পূজা সময়সূচি</div>
            <div className="text-xs font-extrabold text-amber-600 truncate">{timingsForm.status_override === 'auto' ? 'অটো ক্লক' : timingsForm.status_override}</div>
          </div>
          <div onClick={() => handleTabSwitch('travel')} className="cursor-pointer bg-white p-3 rounded-2xl border border-gray-200 shadow-xs hover:border-orange-400 hover:shadow-sm transition-all text-center">
            <i className="fas fa-route text-teal-600 text-base mb-1"></i>
            <div className="text-[10px] text-gray-500 font-bold">ভ্রমণ গাইড</div>
            <div className="text-xs font-extrabold text-gray-800 truncate">ম্যাপ ও রুট</div>
          </div>
          <div onClick={() => handleTabSwitch('mantras')} className="cursor-pointer bg-white p-3 rounded-2xl border border-gray-200 shadow-xs hover:border-orange-400 hover:shadow-sm transition-all text-center">
            <i className="fas fa-om text-orange-600 text-base mb-1"></i>
            <div className="text-[10px] text-gray-500 font-bold">পবিত্র মন্ত্র</div>
            <div className="text-xs font-extrabold text-gray-800">{(mantras || []).length} টি</div>
          </div>
          <div onClick={() => handleTabSwitch('committee')} className="cursor-pointer bg-white p-3 rounded-2xl border border-gray-200 shadow-xs hover:border-orange-400 hover:shadow-sm transition-all text-center">
            <i className="fas fa-users text-blue-500 text-base mb-1"></i>
            <div className="text-[10px] text-gray-500 font-bold">কমিটি সদস্য</div>
            <div className="text-xs font-extrabold text-gray-800">{committeeMembers.length} জন</div>
          </div>
          <div onClick={() => handleTabSwitch('testimonials')} className="cursor-pointer bg-white p-3 rounded-2xl border border-gray-200 shadow-xs hover:border-orange-400 hover:shadow-sm transition-all text-center">
            <i className="fas fa-comments text-amber-500 text-base mb-1"></i>
            <div className="text-[10px] text-gray-500 font-bold">মতামত</div>
            <div className="text-xs font-extrabold text-gray-800">{testimonials.length} টি</div>
          </div>
          <div onClick={() => handleTabSwitch('notices')} className="cursor-pointer bg-white p-3 rounded-2xl border border-gray-200 shadow-xs hover:border-orange-400 hover:shadow-sm transition-all text-center">
            <i className="fas fa-bullhorn text-red-500 text-base mb-1"></i>
            <div className="text-[10px] text-gray-500 font-bold">নোটিশসমূহ</div>
            <div className="text-xs font-extrabold text-gray-800">{notices.length} টি</div>
          </div>
          <div onClick={() => handleTabSwitch('events')} className="cursor-pointer bg-white p-3 rounded-2xl border border-gray-200 shadow-xs hover:border-orange-400 hover:shadow-sm transition-all text-center">
            <i className="fas fa-calendar-alt text-purple-500 text-base mb-1"></i>
            <div className="text-[10px] text-gray-500 font-bold">ইভেন্টসমূহ</div>
            <div className="text-xs font-extrabold text-gray-800">{events.length} টি</div>
          </div>
          <div onClick={() => handleTabSwitch('donations')} className="cursor-pointer bg-white p-3 rounded-2xl border border-gray-200 shadow-xs hover:border-orange-400 hover:shadow-sm transition-all text-center">
            <i className="fas fa-hand-holding-usd text-green-500 text-base mb-1"></i>
            <div className="text-[10px] text-gray-500 font-bold">মোট অনুদান</div>
            <div className="text-xs font-extrabold text-gray-800">{donations ? donations.length : 0} টি</div>
          </div>
          <div onClick={() => handleTabSwitch('bookings')} className="cursor-pointer bg-white p-3 rounded-2xl border border-gray-200 shadow-xs hover:border-amber-500 hover:shadow-sm transition-all text-center">
            <i className="fas fa-hands-praying text-amber-500 text-base mb-1"></i>
            <div className="text-[10px] text-gray-500 font-bold">পূজা বুকিং</div>
            <div className="text-xs font-extrabold text-amber-700">{(pujaBookings || []).length} টি</div>
          </div>
          <div onClick={() => handleTabSwitch('receipts')} className="cursor-pointer bg-white p-3 rounded-2xl border border-gray-200 shadow-xs hover:border-emerald-500 hover:shadow-sm transition-all text-center">
            <i className="fas fa-file-invoice text-emerald-500 text-base mb-1"></i>
            <div className="text-[10px] text-gray-500 font-bold">প্রণামী রশিদ</div>
            <div className="text-xs font-extrabold text-emerald-700">{(donationReceipts || []).length} টি</div>
          </div>
          <div onClick={() => handleTabSwitch('royani')} className="cursor-pointer bg-white p-3 rounded-2xl border border-gray-200 shadow-xs hover:border-yellow-500 hover:shadow-sm transition-all text-center">
            <i className="fas fa-music text-yellow-500 text-base mb-1"></i>
            <div className="text-[10px] text-gray-500 font-bold">রয়ানী পালা</div>
            <div className="text-xs font-extrabold text-yellow-700">{(royaniPalas || []).length} টি</div>
          </div>
          <div onClick={() => handleTabSwitch('history')} className="cursor-pointer bg-white p-3 rounded-2xl border border-gray-200 shadow-xs hover:border-amber-600 hover:shadow-sm transition-all text-center">
            <i className="fas fa-landmark text-amber-600 text-base mb-1"></i>
            <div className="text-[10px] text-gray-500 font-bold">মন্দির ইতিহাস</div>
            <div className="text-xs font-extrabold text-amber-900">৫৩১ বছর</div>
          </div>
          <div onClick={() => handleTabSwitch('gallery')} className="cursor-pointer bg-white p-3 rounded-2xl border border-gray-200 shadow-xs hover:border-pink-500 hover:shadow-sm transition-all text-center">
            <i className="fas fa-images text-pink-500 text-base mb-1"></i>
            <div className="text-[10px] text-gray-500 font-bold">ফটোগ্যালারি</div>
            <div className="text-xs font-extrabold text-pink-700">{(galleryItems || DEFAULT_GALLERY_ITEMS).length} টি</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-6 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col sticky top-24">
            <button onClick={() => handleTabSwitch('marquee')} className={`px-5 py-3 text-left font-bold text-sm border-b ${activeTab === 'marquee' ? 'bg-orange-50 text-orange-700 border-l-[5px] border-l-orange-600' : 'text-gray-600 hover:bg-gray-50 border-l-[5px] border-transparent'}`}>
              <i className="fas fa-text-width w-5"></i> স্ক্রলিং টেক্সট
            </button>
            <button onClick={() => handleTabSwitch('timings')} className={`px-5 py-3 text-left font-bold text-sm border-b ${activeTab === 'timings' ? 'bg-orange-50 text-orange-700 border-l-[5px] border-l-orange-600' : 'text-gray-600 hover:bg-gray-50 border-l-[5px] border-transparent'}`}>
              <i className="fas fa-clock w-5 text-amber-500"></i> পূজা ও আরতি সময়
            </button>
            <button onClick={() => handleTabSwitch('travel')} className={`px-5 py-3 text-left font-bold text-sm border-b ${activeTab === 'travel' ? 'bg-orange-50 text-orange-700 border-l-[5px] border-l-orange-600' : 'text-gray-600 hover:bg-gray-50 border-l-[5px] border-transparent'}`}>
              <i className="fas fa-route w-5 text-teal-600"></i> ভ্রমণ গাইড ও রুট
            </button>
            <button onClick={() => handleTabSwitch('mantras')} className={`px-5 py-3 text-left font-bold text-sm border-b ${activeTab === 'mantras' ? 'bg-orange-50 text-orange-700 border-l-[5px] border-l-orange-600' : 'text-gray-600 hover:bg-gray-50 border-l-[5px] border-transparent'}`}>
              <i className="fas fa-om w-5 text-orange-600"></i> পবিত্র মন্ত্র ও শ্লোক
            </button>
            <button onClick={() => handleTabSwitch('committee')} className={`px-5 py-3 text-left font-bold text-sm border-b ${activeTab === 'committee' ? 'bg-orange-50 text-orange-700 border-l-[5px] border-l-orange-600' : 'text-gray-600 hover:bg-gray-50 border-l-[5px] border-transparent'}`}>
              <i className="fas fa-users w-5 text-blue-500"></i> কমিটি ম্যানেজমেন্ট
            </button>
            <button onClick={() => handleTabSwitch('testimonials')} className={`px-5 py-3 text-left font-bold text-sm border-b ${activeTab === 'testimonials' ? 'bg-orange-50 text-orange-700 border-l-[5px] border-l-orange-600' : 'text-gray-600 hover:bg-gray-50 border-l-[5px] border-transparent'}`}>
              <i className="fas fa-comments w-5 text-amber-500"></i> মতামত ম্যানেজমেন্ট
            </button>
            <button onClick={() => handleTabSwitch('notices')} className={`px-5 py-3 text-left font-bold text-sm border-b ${activeTab === 'notices' ? 'bg-orange-50 text-orange-700 border-l-[5px] border-l-orange-600' : 'text-gray-600 hover:bg-gray-50 border-l-[5px] border-transparent'}`}>
              <i className="fas fa-bullhorn w-5 text-red-500"></i> নোটিশ বোর্ড
            </button>
            <button onClick={() => handleTabSwitch('events')} className={`px-5 py-3 text-left font-bold text-sm border-b ${activeTab === 'events' ? 'bg-orange-50 text-orange-700 border-l-[5px] border-l-orange-600' : 'text-gray-600 hover:bg-gray-50 border-l-[5px] border-transparent'}`}>
              <i className="fas fa-calendar-alt w-5 text-purple-500"></i> ইভেন্ট ম্যানেজমেন্ট
            </button>
            <button onClick={() => handleTabSwitch('donations')} className={`px-5 py-3 text-left font-bold text-sm border-b ${activeTab === 'donations' ? 'bg-orange-50 text-orange-700 border-l-[5px] border-l-orange-600' : 'text-gray-600 hover:bg-gray-50 border-l-[5px] border-transparent'}`}>
              <i className="fas fa-hand-holding-usd w-5 text-green-500"></i> অনুদান ম্যানেজমেন্ট
            </button>
            <button onClick={() => handleTabSwitch('bookings')} className={`px-5 py-3 text-left font-bold text-sm border-b ${activeTab === 'bookings' ? 'bg-orange-50 text-orange-700 border-l-[5px] border-l-orange-600' : 'text-gray-600 hover:bg-gray-50 border-l-[5px] border-transparent'}`}>
              <i className="fas fa-hands-praying w-5 text-amber-500"></i> পূজা ও সংকল্প বুকিং
            </button>
            <button onClick={() => handleTabSwitch('receipts')} className={`px-5 py-3 text-left font-bold text-sm border-b ${activeTab === 'receipts' ? 'bg-orange-50 text-orange-700 border-l-[5px] border-l-orange-600' : 'text-gray-600 hover:bg-gray-50 border-l-[5px] border-transparent'}`}>
              <i className="fas fa-file-invoice w-5 text-emerald-500"></i> প্রণামী রশিদসমূহ
            </button>
            <button onClick={() => handleTabSwitch('royani')} className={`px-5 py-3 text-left font-bold text-sm border-b ${activeTab === 'royani' ? 'bg-orange-50 text-orange-700 border-l-[5px] border-l-orange-600' : 'text-gray-600 hover:bg-gray-50 border-l-[5px] border-transparent'}`}>
              <i className="fas fa-music w-5 text-yellow-500"></i> ঐতিহ্যবাহী রয়ানী গান
            </button>
            <button onClick={() => handleTabSwitch('history')} className={`px-5 py-3 text-left font-bold text-sm border-b ${activeTab === 'history' ? 'bg-orange-50 text-orange-700 border-l-[5px] border-l-orange-600' : 'text-gray-600 hover:bg-gray-50 border-l-[5px] border-transparent'}`}>
              <i className="fas fa-landmark w-5 text-amber-600"></i> মন্দির ইতিহাস ও ঐতিহ্য
            </button>
            <button onClick={() => handleTabSwitch('gallery')} className={`px-5 py-3 text-left font-bold text-sm border-b ${activeTab === 'gallery' ? 'bg-orange-50 text-orange-700 border-l-[5px] border-l-orange-600' : 'text-gray-600 hover:bg-gray-50 border-l-[5px] border-transparent'}`}>
              <i className="fas fa-images w-5 text-pink-500"></i> ফটোগ্যালারি ও চিত্রশালা
            </button>
            <button onClick={() => handleTabSwitch('security')} className={`px-5 py-3 text-left font-bold text-sm ${activeTab === 'security' ? 'bg-orange-50 text-orange-700 border-l-[5px] border-l-orange-600' : 'text-gray-600 hover:bg-gray-50 border-l-[5px] border-transparent'}`}>
              <i className="fas fa-shield-halved w-5 text-rose-600"></i> এডমিন আইডি ও পাসওয়ার্ড
            </button>
          </div>
          <div className="mt-6 p-5 bg-green-50 text-green-800 rounded-2xl text-sm border border-green-200 shadow-sm flex items-start gap-3">
            <i className="fas fa-check-circle mt-1 text-green-600"></i>
            <div>
              <p className="font-bold mb-1">সিস্টেম স্ট্যাটাস</p>
              {dbError ? <p className="text-red-600">ডাটাবেজ সংযোগে সমস্যা!</p> : <p>ডাটাবেজ সংযুক্ত রয়েছে</p>}
            </div>
          </div>
        </div>

        <div className="flex-grow">
          {errorMsg && (
            <div className="mb-4 bg-red-100 border border-red-300 text-red-800 px-5 py-3 rounded-xl flex items-center gap-3 shadow-sm font-medium">
              <i className="fas fa-exclamation-circle text-lg"></i> {errorMsg}
            </div>
          )}

          {activeTab === 'marquee' && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3 flex items-center gap-2">
                <i className="fas fa-bullhorn text-orange-500"></i> হোমপেজের চলমান বিজ্ঞপ্তি (Marquee)
              </h3>
              <form onSubmit={handleMarqueeUpdate} className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-bold text-gray-700">
                      <span className="bg-orange-100 text-orange-800 px-2.5 py-0.5 rounded-full text-xs mr-2 font-extrabold">বাংলা</span>
                      বাংলা বিজ্ঞপ্তি টেক্সট <span className="text-red-500">*</span>
                    </label>
                    <span className="text-xs text-gray-500">হোমপেজে বাংলা মোডে এই টেক্সটটি স্ক্রোল করবে</span>
                  </div>
                  <textarea
                    value={marqueeText}
                    onChange={(e) => {
                      const val = e.target.value;
                      setMarqueeText(val);
                      if (setMarqueeTextEn) {
                        setMarqueeTextEn(translateMarqueeToEnglish(val));
                      }
                    }}
                    rows={3}
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none text-base bg-gray-50 font-medium"
                    placeholder="বাংলায় নোটিশ লিখুন..."
                    required
                  ></textarea>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-bold text-gray-700">
                      <span className="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full text-xs mr-2 font-extrabold">English</span>
                      ইংরেজি বিজ্ঞপ্তি টেক্সট (Auto-translated from Bangla)
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        if (setMarqueeTextEn) setMarqueeTextEn(translateMarqueeToEnglish(marqueeText));
                      }}
                      className="text-xs bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold py-1 px-3 rounded-lg border border-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                      title="বাংলা থেকে তাৎক্ষণিক নতুন অনুবাদ তৈরি করুন"
                    >
                      <i className="fas fa-sync-alt text-amber-600 text-xs"></i> রিফ্রেশ অনুবাদ
                    </button>
                  </div>
                  <textarea
                    value={marqueeTextEn || translateMarqueeToEnglish(marqueeText)}
                    onChange={(e) => {
                      if (setMarqueeTextEn) setMarqueeTextEn(e.target.value);
                    }}
                    rows={3}
                    className="w-full px-5 py-3.5 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-base bg-blue-50/30 text-gray-800 font-medium"
                    placeholder="English marquee notice (auto-translates from Bengali, or type custom English)..."
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1.5 flex items-center gap-1.5">
                    <i className="fas fa-info-circle text-blue-500"></i>
                    ভক্তরা যখন ইংরেজি ভাষা (EN) নির্বাচন করবেন, তখন এই বার্তাটি স্ক্রোল করবে। তারিখ ও বার স্বয়ংক্রিয়ভাবে পরিবর্তিত হয়।
                  </p>
                </div>

                <div className="pt-2">
                  <button type="submit" disabled={isSaving} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-bold disabled:opacity-50 shadow-md transition-all inline-flex items-center gap-2 cursor-pointer">
                    <i className="fas fa-save"></i> {isSaving ? 'সংরক্ষণ করা হচ্ছে...' : 'সংরক্ষণ করুন'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'committee' && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3 flex items-center gap-2"><i className="fas fa-user-plus text-orange-500"></i> {editingCommitteeId ? 'সদস্য আপডেট করুন' : 'নতুন সদস্য যোগ করুন'}</h3>
              <form onSubmit={handleSaveMember} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 bg-gray-50 p-6 rounded-2xl border border-gray-200 items-end shadow-inner">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">নাম <span className="text-red-500">*</span></label>
                  <input type="text" value={newMember.name} onChange={e => setNewMember(prev => ({ ...prev, name: e.target.value }))} className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500" required placeholder="উদা: রহিম উদ্দীন" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">পদবী <span className="text-red-500">*</span></label>
                  <input type="text" value={newMember.role} onChange={e => setNewMember(prev => ({ ...prev, role: e.target.value }))} className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500" required placeholder="উদা: সদস্য" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">ফোন নম্বর</label>
                  <input type="text" value={newMember.phone} onChange={e => setNewMember(prev => ({ ...prev, phone: e.target.value }))} className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500" placeholder="উদা: ০১৭১..." />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">ছবি (আপলোড বা লিংক)</label>
                  <div className="flex flex-col gap-2">
                    <label className="flex-grow cursor-pointer bg-white border border-gray-300 px-4 py-2.5 rounded-xl text-sm hover:bg-gray-50 flex items-center justify-center gap-2 overflow-hidden shadow-sm">
                      <i className="fas fa-upload text-gray-500"></i>
                      <span className="text-gray-600 truncate font-medium">{(newMember.image && newMember.image.startsWith('data:')) ? 'ছবি আপলোড করা হয়েছে' : 'ডিভাইস থেকে আপলোড'}</span>
                      <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, setNewMember, newMember)} className="hidden" />
                    </label>
                    <input type="text" value={(!newMember.image || newMember.image.startsWith('data:')) ? '' : newMember.image} onChange={(e) => setNewMember(prev => ({ ...prev, image: e.target.value }))} className="w-full px-4 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-orange-500" placeholder="অথবা ড্রাইভ লিংক দিন..." />
                  </div>
                  {newMember.image && (
                    <img src={newMember.image} alt="Preview" className="w-16 h-16 object-cover rounded-lg border border-gray-300 shadow-sm mt-2" />
                  )}
                </div>
                <div className="lg:col-span-4 mt-2 flex gap-3">
                  <button type="submit" disabled={isSaving} className="w-full bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 flex items-center justify-center gap-2 font-bold disabled:opacity-50 shadow-md">
                    <i className={editingCommitteeId ? "fas fa-save" : "fas fa-plus"}></i> {isSaving ? 'সেভ হচ্ছে...' : (editingCommitteeId ? 'আপডেট করুন' : 'সদস্য যুক্ত করুন')}
                  </button>
                  {editingCommitteeId && (
                    <button type="button" onClick={() => { setEditingCommitteeId(null); setNewMember({ name: '', role: '', phone: '', image: null }); }} className="bg-gray-500 text-white px-6 py-3 rounded-xl hover:bg-gray-600 font-bold shadow-md">বাতিল</button>
                  )}
                </div>
              </form>

              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-3 flex items-center justify-between">
                <span><i className="fas fa-list text-orange-500 mr-2"></i> বর্তমান কমিটি লিস্ট</span>
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">{committeeMembers.length} জন</span>
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 text-sm border-b">
                      <th className="p-4 w-20 text-center">অর্ডার</th>
                      <th className="p-4 w-16">ছবি</th>
                      <th className="p-4 font-bold">নাম</th>
                      <th className="p-4 font-bold">পদবী</th>
                      <th className="p-4 text-center font-bold">অ্যাকশন</th>
                    </tr>
                  </thead>
                  <tbody>
                    {committeeMembers.map((m, idx) => (
                      <tr key={m.id} className="border-b hover:bg-orange-50 transition-colors text-sm">
                        <td className="p-2 border-r bg-gray-50 align-middle">
                          <div className="flex flex-col items-center gap-2">
                            <button type="button" onClick={() => handleMoveCommittee(idx, 'up')} disabled={idx === 0} className="text-gray-500 hover:text-orange-600 disabled:opacity-20 hover:bg-gray-200 w-6 h-6 rounded-full flex items-center justify-center transition-all"><i className="fas fa-chevron-up"></i></button>
                            <button type="button" onClick={() => handleMoveCommittee(idx, 'down')} disabled={idx === committeeMembers.length - 1} className="text-gray-500 hover:text-orange-600 disabled:opacity-20 hover:bg-gray-200 w-6 h-6 rounded-full flex items-center justify-center transition-all"><i className="fas fa-chevron-down"></i></button>
                          </div>
                        </td>
                        <td className="p-3">
                          {m.image ? (
                            <img src={m.image} alt={m.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-lg border-2 border-white shadow-sm">
                              <i className="fas fa-user"></i>
                            </div>
                          )}
                        </td>
                        <td className="p-4 font-bold text-gray-800 text-base">{m.name}</td>
                        <td className="p-4 text-orange-600 font-semibold">{m.role}</td>
                        <td className="p-4 text-center whitespace-nowrap">
                          <button type="button" onClick={() => { setNewMember(m); setEditingCommitteeId(m.id); window.scrollTo(0, 0); }} className="text-blue-600 hover:text-white hover:bg-blue-600 bg-blue-50 border border-blue-200 p-2 rounded-lg mr-2 transition-colors" title="এডিট">
                            <i className="fas fa-edit w-5"></i>
                          </button>
                          <button type="button" onClick={() => handleDeleteMember(m.id)} className="text-red-600 hover:text-white hover:bg-red-600 bg-red-50 border border-red-200 p-2 rounded-lg transition-colors" title="ডিলিট">
                            <i className="fas fa-trash w-5"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3 flex items-center gap-2"><i className="fas fa-comment-dots text-orange-500"></i> {editingTestimonialId ? 'মতামত আপডেট করুন' : 'নতুন মতামত যোগ করুন'}</h3>
              <form onSubmit={handleSaveTestimonial} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 bg-gray-50 p-6 rounded-2xl border border-gray-200 items-end shadow-inner">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">নাম <span className="text-red-500">*</span></label>
                  <input type="text" value={newTestimonial.name} onChange={e => setNewTestimonial(prev => ({ ...prev, name: e.target.value }))} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-orange-500" required placeholder="নাম লিখুন" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">পদবী/ঠিকানা</label>
                  <input type="text" value={newTestimonial.designation} onChange={e => setNewTestimonial(prev => ({ ...prev, designation: e.target.value }))} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-orange-500" placeholder="পদবী লিখুন" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">তারিখ</label>
                  <input type="date" value={newTestimonial.date} onChange={e => setNewTestimonial(prev => ({ ...prev, date: e.target.value }))} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-700 focus:ring-2 focus:ring-orange-500" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1">মতামত <span className="text-red-500">*</span></label>
                  <QuillEditor value={newTestimonial.text} onChange={val => setNewTestimonial(prev => ({ ...prev, text: val }))} placeholder="মতামত লিখুন..." />
                </div>
                <div className="md:col-span-2 mt-2 flex gap-3">
                  <button type="submit" disabled={isSaving} className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 flex items-center justify-center gap-2 font-bold disabled:opacity-50 shadow-md">
                    <i className={editingTestimonialId ? "fas fa-save" : "fas fa-plus"}></i> {isSaving ? 'সেভ হচ্ছে...' : (editingTestimonialId ? 'আপডেট করুন' : 'মতামত যুক্ত করুন')}
                  </button>
                  {editingTestimonialId && (
                    <button type="button" onClick={() => { setEditingTestimonialId(null); setNewTestimonial({ name: '', designation: '', text: '', date: '' }); }} className="bg-gray-500 text-white px-6 py-3 rounded-xl hover:bg-gray-600 font-bold shadow-md">বাতিল</button>
                  )}
                </div>
              </form>

              <div className="flex justify-between items-center mb-6 border-b pb-3 mt-8">
                <h3 className="text-xl font-bold text-gray-800"><i className="fas fa-list text-orange-500 mr-2"></i> বর্তমান মতামতসমূহ</h3>
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-bold">Total: {testimonials.length}</span>
              </div>
              <div className="space-y-4">
                {testimonials.map(t => (
                  <div key={t.id} className="border border-gray-200 rounded-2xl p-5 bg-white hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="flex-grow">
                      <p className="font-bold text-base text-gray-800 flex items-center gap-2">
                        {t.name} <span className="text-gray-500 font-medium text-xs bg-gray-100 px-2 py-1 rounded">({formatDateToBengali(t.date)})</span>
                        {featuredTestimonialIds.includes(t.id) && <span className="text-yellow-600 bg-yellow-50 border border-yellow-200 text-[10px] px-2 py-0.5 rounded-full"><i className="fas fa-star"></i> হোমপেজ</span>}
                      </p>
                      <p className="text-sm text-orange-600 mb-3 font-semibold">{t.designation}</p>
                      <div className="text-gray-600 italic bg-gray-50 p-3 rounded-lg border-l-4 border-gray-300 rich-text" dangerouslySetInnerHTML={{ __html: t.text }}></div>
                    </div>
                    <div className="flex gap-2 self-end md:self-start bg-gray-50 p-2 rounded-xl border border-gray-100">
                      <button type="button" onClick={() => handleToggleFeaturedTestimonial(t.id)} className={`p-2.5 rounded-lg transition-colors shadow-sm border ${featuredTestimonialIds.includes(t.id) ? 'bg-yellow-100 text-yellow-600 border-yellow-200 hover:bg-yellow-200' : 'bg-white text-gray-400 border-gray-200 hover:text-yellow-500'}`} title={featuredTestimonialIds.includes(t.id) ? "হোমপেজ থেকে সরান" : "হোমপেজে দেখান"}>
                        <i className={featuredTestimonialIds.includes(t.id) ? "fas fa-star" : "far fa-star"}></i>
                      </button>
                      <button type="button" onClick={() => { setNewTestimonial(t); setEditingTestimonialId(t.id); window.scrollTo(0, 0); }} className="text-blue-600 hover:text-white hover:bg-blue-600 bg-white border border-blue-200 p-2.5 rounded-lg transition-colors shadow-sm" title="এডিট">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button type="button" onClick={() => handleDeleteTestimonial(t.id)} disabled={isSaving} className="text-red-600 hover:text-white hover:bg-red-600 bg-white border border-red-200 p-2.5 rounded-lg transition-colors shadow-sm disabled:opacity-50" title="ডিলিট">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'notices' && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3 flex items-center gap-2"><i className="fas fa-bullhorn text-orange-500"></i> {editingNoticeId ? 'নোটিশ আপডেট করুন' : 'নতুন নোটিশ যোগ করুন'}</h3>
              <form onSubmit={handleSaveNotice} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 bg-gray-50 p-6 rounded-2xl border border-gray-200 items-end shadow-inner">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">শিরোনাম <span className="text-red-500">*</span></label>
                  <input type="text" value={newNotice.title} onChange={e => setNewNotice(prev => ({ ...prev, title: e.target.value }))} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-orange-500" required placeholder="উদা: নতুন কমিটি গঠন" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">তারিখ <span className="text-red-500">*</span></label>
                  <input type="date" value={newNotice.date} onChange={e => setNewNotice(prev => ({ ...prev, date: e.target.value }))} required className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-700 focus:ring-2 focus:ring-orange-500" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1">নোটিশের বিবরণ <span className="text-red-500">*</span></label>
                  <QuillEditor value={newNotice.text} onChange={val => setNewNotice(prev => ({ ...prev, text: val }))} placeholder="বিস্তারিত লিখুন..." />
                </div>
                <div className="md:col-span-2 mt-2 flex gap-3">
                  <button type="submit" disabled={isSaving} className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 flex items-center justify-center gap-2 font-bold disabled:opacity-50 shadow-md">
                    <i className={editingNoticeId ? "fas fa-save" : "fas fa-plus"}></i> {isSaving ? 'সেভ হচ্ছে...' : (editingNoticeId ? 'আপডেট করুন' : 'নোটিশ যুক্ত করুন')}
                  </button>
                  {editingNoticeId && (
                    <button type="button" onClick={() => { setEditingNoticeId(null); setNewNotice({ title: '', date: '', text: '' }); }} className="bg-gray-500 text-white px-6 py-3 rounded-xl hover:bg-gray-600 font-bold shadow-md">বাতিল</button>
                  )}
                </div>
              </form>

              <div className="flex justify-between items-center mb-6 border-b pb-3 mt-8">
                <h3 className="text-xl font-bold text-gray-800"><i className="fas fa-list text-orange-500 mr-2"></i> বর্তমান নোটিশসমূহ</h3>
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-bold">Total: {notices.length}</span>
              </div>
              <div className="space-y-4">
                {notices.map(n => (
                  <div key={n.id} className="border border-gray-200 rounded-2xl p-5 bg-white hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg text-gray-800">{n.title}</h3>
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md flex items-center gap-1">
                          <i className="fas fa-calendar-day"></i> {formatDateToBengali(n.date)}
                        </span>
                      </div>
                      <div className="text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100 rich-text" dangerouslySetInnerHTML={{ __html: n.text }}></div>
                    </div>
                    <div className="flex gap-2 self-end md:self-start bg-gray-50 p-2 rounded-xl border border-gray-100">
                      <button type="button" onClick={() => { setNewNotice(n); setEditingNoticeId(n.id); window.scrollTo(0, 0); }} className="text-blue-600 hover:text-white hover:bg-blue-600 bg-white border border-blue-200 p-2.5 rounded-lg transition-colors shadow-sm" title="এডিট">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button type="button" onClick={() => handleDeleteNotice(n.id)} disabled={isSaving} className="text-red-600 hover:text-white hover:bg-red-600 bg-white border border-red-200 p-2.5 rounded-lg transition-colors shadow-sm disabled:opacity-50" title="ডিলিট">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
                {notices.length === 0 && (
                  <p className="text-center text-gray-500 p-10 bg-white rounded-xl shadow-sm border border-gray-100">এখনো কোনো নোটিশ যোগ করা হয়নি।</p>
                )}
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3 flex items-center gap-2">
                <i className="fas fa-calendar-alt text-orange-500"></i> {editingEventId ? 'ইভেন্ট আপডেট করুন' : 'নতুন ইভেন্ট যোগ করুন'}
              </h3>
              <form onSubmit={handleSaveEvent} className="space-y-6 mb-10 bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-inner">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">ইভেন্টের শিরোনাম <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      value={newEvent.title}
                      onChange={e => setNewEvent(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-orange-500"
                      required
                      placeholder="উদা: শ্রীশ্রী মা মনসার বাৎসরিক মহোৎসব"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">তারিখ <span className="text-red-500">*</span></label>
                    <input
                      type="date"
                      value={newEvent.date}
                      onChange={e => setNewEvent(prev => ({ ...prev, date: e.target.value }))}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-700 focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Multiple Images Upload & Management Section */}
                <div className="p-4 sm:p-5 bg-white rounded-2xl border border-amber-200 shadow-xs space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <label className="text-sm font-bold text-amber-950 flex items-center gap-2">
                      <i className="fas fa-images text-orange-500"></i> ইভেন্টের ছবি (এক বা একাধিক ছবি নির্বাচন করতে পারেন)
                    </label>
                    <span className="text-xs text-amber-700 font-semibold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      সংযুক্ত ছবি: {((newEvent.images && newEvent.images.length > 0) ? newEvent.images.length : (newEvent.image ? 1 : 0))} টি
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="cursor-pointer bg-amber-50 hover:bg-amber-100/70 border-2 border-dashed border-amber-300 px-4 py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
                      <i className="fas fa-file-image text-amber-600"></i>
                      <span className="text-amber-900 font-bold">ডিভাইস থেকে এক বা একাধিক ছবি বাছাই করুন</span>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleEventMultiFiles}
                        className="hidden"
                      />
                    </label>

                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="অথবা অনলাইন ছবির URL লিংক লিখুন..."
                        id="event-single-img-url"
                        className="flex-grow px-3 py-2 border rounded-xl text-xs focus:ring-2 focus:ring-orange-500"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            const val = e.target.value.trim();
                            if (val) {
                              setNewEvent(prev => {
                                const current = prev.images || (prev.image ? [prev.image] : []);
                                const updated = [...current, val];
                                return { ...prev, image: updated[0], images: updated };
                              });
                              e.target.value = '';
                            }
                          }
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const input = document.getElementById('event-single-img-url');
                          if (input && input.value.trim()) {
                            const val = input.value.trim();
                            setNewEvent(prev => {
                              const current = prev.images || (prev.image ? [prev.image] : []);
                              const updated = [...current, val];
                              return { ...prev, image: updated[0], images: updated };
                            });
                            input.value = '';
                          }
                        }}
                        className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-xl text-xs font-bold shrink-0 transition-colors"
                      >
                        + যোগ
                      </button>
                    </div>
                  </div>

                  {/* Thumbnail Previews List */}
                  {((newEvent.images && newEvent.images.length > 0) || newEvent.image) && (
                    <div className="pt-2">
                      <p className="text-[11px] text-gray-500 mb-2">প্রথম ছবিটি মূল কভার হিসেবে প্রদর্শিত হবে:</p>
                      <div className="flex flex-wrap gap-2.5">
                        {((newEvent.images && newEvent.images.length > 0) ? newEvent.images : [newEvent.image]).map((imgSrc, imgIdx) => (
                          <div key={imgIdx} className="relative group w-20 h-20 rounded-xl overflow-hidden border-2 border-amber-300 shadow-xs">
                            <img src={imgSrc} alt={`Event media ${imgIdx + 1}`} className="w-full h-full object-cover" />
                            {imgIdx === 0 && (
                              <span className="absolute bottom-0 inset-x-0 bg-orange-600 text-[9px] text-white font-bold text-center py-0.5">
                                কভার
                              </span>
                            )}
                            <button
                              type="button"
                              onClick={() => {
                                setNewEvent(prev => {
                                  const current = (prev.images && prev.images.length > 0) ? prev.images : (prev.image ? [prev.image] : []);
                                  const filtered = current.filter((_, idx) => idx !== imgIdx);
                                  return { ...prev, image: filtered[0] || null, images: filtered };
                                });
                              }}
                              className="absolute top-1 right-1 w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] opacity-90 hover:opacity-100 shadow transition-opacity"
                              title="ছবি মুছুন"
                            >
                              <i className="fas fa-times"></i>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Upload & URL Section */}
                <div className="p-4 sm:p-5 bg-white rounded-2xl border border-red-200 shadow-xs space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <label className="text-sm font-bold text-red-950 flex items-center gap-2">
                      <i className="fas fa-video text-red-600"></i> ইভেন্টের ভিডিও (ঐচ্ছিক - ফাইল আপলোড বা YouTube লিংক)
                    </label>
                    {newEvent.video && (
                      <button
                        type="button"
                        onClick={() => setNewEvent(prev => ({ ...prev, video: '' }))}
                        className="text-xs text-red-600 hover:text-red-800 font-bold"
                      >
                        <i className="fas fa-trash-alt mr-1"></i> ভিডিও মুছে ফেলুন
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <span className="block text-xs font-bold text-gray-700 mb-1.5 flex items-center gap-1.5">
                        <i className="fab fa-youtube text-red-600 text-sm"></i>
                        ইউটিউব / অনলাইন ভিডিও লিংক (সুপারিশকৃত)
                      </span>
                      <input
                        type="text"
                        value={newEvent.video && newEvent.video.startsWith('data:video') ? '' : (newEvent.video || '')}
                        onChange={e => setNewEvent(prev => ({ ...prev, video: e.target.value }))}
                        placeholder="YouTube / Shorts লিংক দিন (e.g. https://youtu.be/...)"
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-xs focus:ring-2 focus:ring-red-500"
                      />
                      <span className="block text-[11px] text-gray-500 mt-1">
                        💡 ফেসবুক, ইউটিউব বা যেকোনো অনলাইন ভিডিওর লিংক পেস্ট করলে তৎক্ষণাৎ চলবে।
                      </span>
                    </div>

                    <div>
                      <span className="block text-xs font-bold text-gray-700 mb-1.5 flex items-center gap-1.5">
                        <i className="fas fa-file-video text-orange-600 text-sm"></i>
                        ডিভাইস থেকে ভিডিও ফাইল
                      </span>
                      <label className="cursor-pointer bg-red-50 hover:bg-red-100/70 border-2 border-dashed border-red-300 px-4 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors">
                        <i className="fas fa-cloud-upload-alt text-red-600"></i>
                        <span className="text-red-900 font-bold">ভিডিও ফাইল নির্বাচন করুন (.mp4, .webm)</span>
                        <input
                          type="file"
                          accept="video/*"
                          onChange={handleEventVideoFile}
                          className="hidden"
                        />
                      </label>
                      <span className="block text-[11px] text-gray-500 mt-1">
                        ছোট ক্লিপ সরাসরি আপলোড হবে; ক্লাউড বাকেট যুক্ত থাকলে যেকোনো সাইজের ফাইল চলবে।
                      </span>
                    </div>
                  </div>

                  {newEvent.video && (
                    <div className="pt-2">
                      <div className="w-full max-w-sm aspect-video rounded-xl overflow-hidden border-2 border-red-300 bg-black shadow-sm">
                        <MediaViewer
                          url={newEvent.video}
                          isVideo={true}
                          alt="Video Preview"
                          className="w-full h-full object-cover"
                          controls={true}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">ইভেন্টের বিস্তারিত <span className="text-red-500">*</span></label>
                  <QuillEditor value={newEvent.description} onChange={val => setNewEvent(prev => ({ ...prev, description: val }))} placeholder="বিস্তারিত লিখুন..." />
                </div>

                <div className="flex gap-3">
                  <button type="submit" disabled={isSaving} className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-bold disabled:opacity-50 shadow-md">
                    <i className={editingEventId ? "fas fa-save" : "fas fa-plus"}></i> {isSaving ? 'সেভ হচ্ছে...' : (editingEventId ? 'ইভেন্ট আপডেট করুন' : 'ইভেন্ট যুক্ত করুন')}
                  </button>
                  {editingEventId && (
                    <button type="button" onClick={() => { setEditingEventId(null); setNewEvent({ title: '', date: '', description: '', image: null, images: [], video: '' }); }} className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-bold shadow-md">বাতিল</button>
                  )}
                </div>
              </form>

              <div className="flex justify-between items-center mb-6 border-b pb-3 mt-8">
                <h3 className="text-xl font-bold text-gray-800"><i className="fas fa-list text-orange-500 mr-2"></i> বর্তমান ইভেন্টসমূহ</h3>
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-bold">Total: {events.length}</span>
              </div>
              <div className="space-y-4">
                {events.map(ev => {
                  const evImages = (ev.images && ev.images.length > 0) ? ev.images : (ev.image ? [ev.image] : []);
                  return (
                    <div key={ev.id} className="border border-gray-200 rounded-2xl p-5 bg-white hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start gap-4">
                      {evImages.length > 0 ? (
                        <div className="w-full md:w-36 h-28 bg-gray-100 rounded-xl overflow-hidden shrink-0 relative">
                          <img src={evImages[0]} alt={ev.title} className="w-full h-full object-cover" />
                          {evImages.length > 1 && (
                            <span className="absolute bottom-1 right-1 bg-black/80 text-amber-300 text-[10px] px-1.5 py-0.5 rounded font-bold">
                              📷 {evImages.length}
                            </span>
                          )}
                          {ev.video && (
                            <span className="absolute top-1 left-1 bg-red-600 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">
                              ▶ ভিডিও
                            </span>
                          )}
                        </div>
                      ) : ev.video ? (
                        <div className="w-full md:w-36 h-28 bg-stone-900 rounded-xl flex items-center justify-center text-red-500 shrink-0">
                          <i className="fas fa-video text-2xl"></i>
                        </div>
                      ) : null}

                      <div className="flex-grow w-full">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="font-bold text-lg text-gray-800">{ev.title}</h3>
                          <span className="text-xs font-semibold text-orange-700 bg-orange-100 border border-orange-200 px-2.5 py-1 rounded-md flex items-center gap-1">
                            <i className="fas fa-calendar-alt"></i> {formatDateToBengali(ev.date)}
                          </span>
                          {evImages.length > 1 && (
                            <span className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                              📷 {evImages.length}টি ছবি
                            </span>
                          )}
                          {ev.video && (
                            <span className="text-xs font-semibold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-md">
                              🎥 ভিডিও আছে
                            </span>
                          )}
                        </div>
                        <div className="text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100 rich-text" dangerouslySetInnerHTML={{ __html: ev.description }}></div>
                      </div>
                      <div className="flex gap-2 self-end md:self-start bg-gray-50 p-2 rounded-xl border border-gray-100 shrink-0">
                        <button
                          type="button"
                          onClick={() => {
                            setNewEvent({
                              title: ev.title,
                              date: ev.date,
                              description: ev.description,
                              image: ev.image || (ev.images && ev.images[0]) || null,
                              images: ev.images || (ev.image ? [ev.image] : []),
                              video: ev.video || ''
                            });
                            setEditingEventId(ev.id);
                            window.scrollTo(0, 0);
                          }}
                          className="text-blue-600 hover:text-white hover:bg-blue-600 bg-white border border-blue-200 p-2.5 rounded-lg transition-colors shadow-sm"
                          title="এডিট"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button type="button" onClick={() => handleDeleteEvent(ev.id)} disabled={isSaving} className="text-red-600 hover:text-white hover:bg-red-600 bg-white border border-red-200 p-2.5 rounded-lg transition-colors shadow-sm disabled:opacity-50" title="ডিলিট">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  );
                })}
                {events.length === 0 && (
                  <p className="text-center text-gray-500 p-10 bg-white rounded-xl shadow-sm border border-gray-100">এখনো কোনো ইভেন্ট যোগ করা হয়নি।</p>
                )}
              </div>
            </div>
          )}

          {activeTab === 'donations' && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3 flex items-center gap-2">
                <i className="fas fa-hand-holding-usd text-orange-500"></i> {editingDonationId ? 'অনুদান আপডেট করুন' : 'নতুন অনুদান যোগ করুন'}
              </h3>
              <form onSubmit={handleSaveDonation} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 bg-gray-50 p-6 rounded-2xl border border-gray-200 items-end shadow-inner">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">দাতার নাম <span className="text-red-500">*</span></label>
                  <input type="text" value={newDonation.name} onChange={e => setNewDonation(prev => ({ ...prev, name: e.target.value }))} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-orange-500" required placeholder="নাম লিখুন" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">ঠিকানা বা পদবী</label>
                  <input type="text" value={newDonation.address} onChange={e => setNewDonation(prev => ({ ...prev, address: e.target.value }))} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-orange-500" placeholder="উদা: ঢাকা" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">অণুদানের ধরণ <span className="text-red-500">*</span></label>
                  <select value={newDonation.type} onChange={e => setNewDonation(prev => ({ ...prev, type: e.target.value }))} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-orange-500 bg-white">
                    <option value="নগদ অর্থ">নগদ অর্থ</option>
                    <option value="সরঞ্জাম/অন্যান্য">সরঞ্জাম/অন্যান্য</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">পরিমাণ / বিবরণ <span className="text-red-500">*</span></label>
                  <input type="text" value={newDonation.amount} onChange={e => setNewDonation(prev => ({ ...prev, amount: e.target.value }))} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-orange-500" required placeholder="উদা: ৫০০০ টাকা বা ১টি ফ্যান" />
                </div>
                <div className="lg:col-span-4 mt-2 flex gap-3">
                  <button type="submit" disabled={isSaving} className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 flex items-center justify-center gap-2 font-bold disabled:opacity-50 shadow-md">
                    <i className={editingDonationId ? "fas fa-save" : "fas fa-plus"}></i> {isSaving ? 'সেভ হচ্ছে...' : (editingDonationId ? 'আপডেট করুন' : 'অনুদান যুক্ত করুন')}
                  </button>
                  {editingDonationId && (
                    <button type="button" onClick={() => { setEditingDonationId(null); setNewDonation({ name: '', address: '', type: 'নগদ অর্থ', amount: '', date: '', is_hidden: false }); }} className="bg-gray-500 text-white px-6 py-3 rounded-xl hover:bg-gray-600 font-bold shadow-md">বাতিল</button>
                  )}
                </div>
              </form>

              <div className="flex justify-between items-center mb-6 border-b pb-3 mt-8">
                <h3 className="text-xl font-bold text-gray-800"><i className="fas fa-list text-orange-500 mr-2"></i> বর্তমান দাতাদের তালিকা</h3>
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-bold">Total: {donations ? donations.length : 0}</span>
              </div>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 text-sm border-b">
                      <th className="p-4 font-bold">নাম</th>
                      <th className="p-4 font-bold">ঠিকানা/পদবী</th>
                      <th className="p-4 font-bold">ধরণ</th>
                      <th className="p-4 font-bold text-right">পরিমাণ/বিবরণ</th>
                      <th className="p-4 text-center font-bold">অ্যাকশন</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donations && donations.map(d => (
                      <tr key={d.id} className={`border-b hover:bg-orange-50 transition-colors text-sm ${d.is_hidden ? 'opacity-60 bg-gray-50' : ''}`}>
                        <td className="p-4 font-bold text-gray-800">
                          {d.name}
                          {d.is_hidden && <span className="ml-2 text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded border border-red-200 font-bold">Hidden</span>}
                        </td>
                        <td className="p-4 text-gray-600">{d.address || '-'}</td>
                        <td className="p-4">
                          <span className={`text-xs font-bold px-2 py-1 rounded border ${d.type === 'নগদ অর্থ' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>
                            {d.type}
                          </span>
                        </td>
                        <td className="p-4 text-right font-semibold text-orange-600">{d.amount}</td>
                        <td className="p-4 text-center whitespace-nowrap">
                          <button type="button" onClick={() => handleToggleDonationVisibility(d.id, d.is_hidden)} className={`border p-2 rounded-lg mr-2 transition-colors ${d.is_hidden ? 'bg-gray-200 text-gray-600 hover:bg-gray-300' : 'bg-green-50 text-green-600 border-green-200 hover:bg-green-600 hover:text-white'}`} title={d.is_hidden ? "পাবলিক করুন" : "হাইড করুন"}>
                            <i className={d.is_hidden ? "fas fa-eye-slash w-5" : "fas fa-eye w-5"}></i>
                          </button>
                          <button type="button" onClick={() => { setNewDonation(d); setEditingDonationId(d.id); window.scrollTo(0, 0); }} className="text-blue-600 hover:text-white hover:bg-blue-600 bg-blue-50 border border-blue-200 p-2 rounded-lg mr-2 transition-colors" title="এডিট">
                            <i className="fas fa-edit w-5"></i>
                          </button>
                          <button type="button" onClick={() => handleDeleteDonation(d.id)} className="text-red-600 hover:text-white hover:bg-red-600 bg-red-50 border border-red-200 p-2 rounded-lg transition-colors" title="ডিলিট">
                            <i className="fas fa-trash w-5"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                    {(!donations || donations.length === 0) && (
                      <tr><td colSpan="5" className="text-center p-6 text-gray-500">কোনো ডেটা নেই।</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'timings' && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-6 border-b pb-3">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <i className="fas fa-clock text-amber-500"></i> দৈনিক পূজা ও আরতি সময়সূচি পরিচালনা
                </h3>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                  লাইভ স্ট্যাটাস সক্রিয়
                </span>
              </div>

              <form onSubmit={handleSaveTimings} className="space-y-6">
                {/* Live Status Override */}
                <div className="bg-amber-50/70 p-5 rounded-xl border border-amber-200">
                  <label className="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <i className="fas fa-toggle-on text-amber-600"></i> লাইভ মন্দির স্ট্যাটাস ওভাররাইড (Live Status Override)
                  </label>
                  <p className="text-xs text-gray-600 mb-3">
                    সাধারণত বাংলাদেশের সময় অনুসারে ঘড়ির কাটায় স্বয়ংক্রিয়ভাবে দর্শন ও আরতি স্ট্যাটাস প্রদর্শিত হয়। বিশেষ কারণে মন্দির সাময়িক বন্ধ বা খোলা রাখতে চাইলে এখান থেকে পরিবর্তন করুন।
                  </p>
                  <select
                    value={timingsForm.status_override || 'auto'}
                    onChange={(e) => setTimingsForm({ ...timingsForm, status_override: e.target.value })}
                    className="w-full sm:w-80 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 bg-white font-bold text-sm text-gray-800"
                  >
                    <option value="auto">স্বয়ংক্রিয় (Auto Clock Based)</option>
                    <option value="খোলা">সর্বদা খোলা প্রদর্শন করুন (Force Open)</option>
                    <option value="বন্ধ">সাময়িক বন্ধ প্রদর্শন করুন (Force Closed)</option>
                  </select>
                </div>

                {/* Festival Special Announcement */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    বিশেষ উৎসব বা পূজার নোটিশ (ঐচ্ছিক)
                  </label>
                  <input
                    type="text"
                    value={timingsForm.special_notice || ''}
                    onChange={(e) => setTimingsForm({ ...timingsForm, special_notice: e.target.value })}
                    placeholder="যেমন: আগামী ১৮ আগস্ট মনসা পূজায় মন্দির দিনরাত খোলা থাকবে..."
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Morning Aarti */}
                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 space-y-3">
                    <h4 className="font-bold text-orange-900 flex items-center gap-2 text-sm border-b pb-2">
                      <i className="fas fa-sun text-yellow-500"></i> ১. প্রাতঃকালীন মঙ্গল আরতি
                    </h4>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">সময় (বাংলা)</label>
                      <input
                        type="text"
                        value={timingsForm.morning_aarti || ''}
                        onChange={(e) => setTimingsForm({ ...timingsForm, morning_aarti: e.target.value })}
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">Time (English)</label>
                      <input
                        type="text"
                        value={timingsForm.morning_aarti_en || ''}
                        onChange={(e) => setTimingsForm({ ...timingsForm, morning_aarti_en: e.target.value })}
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">বিবরণ</label>
                      <textarea
                        rows="2"
                        value={timingsForm.morning_desc || ''}
                        onChange={(e) => setTimingsForm({ ...timingsForm, morning_desc: e.target.value })}
                        className="w-full p-2 bg-white border border-gray-300 rounded-lg text-xs"
                      ></textarea>
                    </div>
                  </div>

                  {/* Midday Bhog */}
                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 space-y-3">
                    <h4 className="font-bold text-orange-900 flex items-center gap-2 text-sm border-b pb-2">
                      <i className="fas fa-utensils text-orange-500"></i> ২. দ্বিপ্রহরিক অন্নভোগ ও দর্শন
                    </h4>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">সময় (বাংলা)</label>
                      <input
                        type="text"
                        value={timingsForm.bhog_time || ''}
                        onChange={(e) => setTimingsForm({ ...timingsForm, bhog_time: e.target.value })}
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">Time (English)</label>
                      <input
                        type="text"
                        value={timingsForm.bhog_time_en || ''}
                        onChange={(e) => setTimingsForm({ ...timingsForm, bhog_time_en: e.target.value })}
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">বিবরণ</label>
                      <textarea
                        rows="2"
                        value={timingsForm.bhog_desc || ''}
                        onChange={(e) => setTimingsForm({ ...timingsForm, bhog_desc: e.target.value })}
                        className="w-full p-2 bg-white border border-gray-300 rounded-lg text-xs"
                      ></textarea>
                    </div>
                  </div>

                  {/* Evening Aarti */}
                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 space-y-3">
                    <h4 className="font-bold text-orange-900 flex items-center gap-2 text-sm border-b pb-2">
                      <i className="fas fa-fire text-red-500"></i> ৩. সান্ধ্য আরতি ও কীর্তন
                    </h4>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">সময় (বাংলা)</label>
                      <input
                        type="text"
                        value={timingsForm.sandhya_aarti || ''}
                        onChange={(e) => setTimingsForm({ ...timingsForm, sandhya_aarti: e.target.value })}
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">Time (English)</label>
                      <input
                        type="text"
                        value={timingsForm.sandhya_aarti_en || ''}
                        onChange={(e) => setTimingsForm({ ...timingsForm, sandhya_aarti_en: e.target.value })}
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">বিবরণ</label>
                      <textarea
                        rows="2"
                        value={timingsForm.sandhya_desc || ''}
                        onChange={(e) => setTimingsForm({ ...timingsForm, sandhya_desc: e.target.value })}
                        className="w-full p-2 bg-white border border-gray-300 rounded-lg text-xs"
                      ></textarea>
                    </div>
                  </div>

                  {/* Darshan & Rules Note */}
                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 space-y-3">
                    <h4 className="font-bold text-orange-900 flex items-center gap-2 text-sm border-b pb-2">
                      <i className="fas fa-info-circle text-blue-500"></i> ৪. ভক্তদর্শন ও পূজার নির্দেশিকা
                    </h4>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">নির্দেশনা (বাংলা)</label>
                      <textarea
                        rows="3"
                        value={timingsForm.darshan_note || ''}
                        onChange={(e) => setTimingsForm({ ...timingsForm, darshan_note: e.target.value })}
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">Guidelines (English)</label>
                      <textarea
                        rows="3"
                        value={timingsForm.darshan_note_en || ''}
                        onChange={(e) => setTimingsForm({ ...timingsForm, darshan_note_en: e.target.value })}
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-md flex items-center gap-2"
                  >
                    {isSaving ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-save"></i>}
                    সময়সূচি সংরক্ষণ করুন
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'travel' && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-6 border-b pb-3">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <i className="fas fa-route text-teal-600"></i> তীর্থযাত্রী ভ্রমণ গাইড ও রুট পরিচালনা
                </h3>
              </div>

              <form onSubmit={handleSaveTravel} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Dhaka Bus Route */}
                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 space-y-3">
                    <h4 className="font-bold text-gray-800 flex items-center gap-2 text-sm border-b pb-2">
                      <i className="fas fa-bus text-orange-600"></i> ঢাকা থেকে সড়কপথ (বাস)
                    </h4>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">বিবরণ (বাংলা)</label>
                      <textarea
                        rows="3"
                        value={travelForm.dhaka_bus || ''}
                        onChange={(e) => setTravelForm({ ...travelForm, dhaka_bus: e.target.value })}
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">Description (English)</label>
                      <textarea
                        rows="3"
                        value={travelForm.dhaka_bus_en || ''}
                        onChange={(e) => setTravelForm({ ...travelForm, dhaka_bus_en: e.target.value })}
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                      ></textarea>
                    </div>
                  </div>

                  {/* Launch Route */}
                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 space-y-3">
                    <h4 className="font-bold text-gray-800 flex items-center gap-2 text-sm border-b pb-2">
                      <i className="fas fa-ship text-blue-600"></i> নৌপথ (লঞ্চ ভ্রমণ)
                    </h4>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">বিবরণ (বাংলা)</label>
                      <textarea
                        rows="3"
                        value={travelForm.launch_route || ''}
                        onChange={(e) => setTravelForm({ ...travelForm, launch_route: e.target.value })}
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">Description (English)</label>
                      <textarea
                        rows="3"
                        value={travelForm.launch_route_en || ''}
                        onChange={(e) => setTravelForm({ ...travelForm, launch_route_en: e.target.value })}
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                      ></textarea>
                    </div>
                  </div>

                  {/* Local Transport */}
                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 space-y-3">
                    <h4 className="font-bold text-gray-800 flex items-center gap-2 text-sm border-b pb-2">
                      <i className="fas fa-shuttle-van text-amber-600"></i> স্থানীয় যানবাহন ও গৈলা বাজার
                    </h4>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">বিবরণ (বাংলা)</label>
                      <textarea
                        rows="3"
                        value={travelForm.local_transport || ''}
                        onChange={(e) => setTravelForm({ ...travelForm, local_transport: e.target.value })}
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">Description (English)</label>
                      <textarea
                        rows="3"
                        value={travelForm.local_transport_en || ''}
                        onChange={(e) => setTravelForm({ ...travelForm, local_transport_en: e.target.value })}
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                      ></textarea>
                    </div>
                  </div>

                  {/* Guest House */}
                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 space-y-3">
                    <h4 className="font-bold text-gray-800 flex items-center gap-2 text-sm border-b pb-2">
                      <i className="fas fa-hotel text-green-600"></i> তীর্থযাত্রী বিশ্রাম ও আবাসন
                    </h4>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">পরামর্শ (বাংলা)</label>
                      <textarea
                        rows="3"
                        value={travelForm.guest_house || ''}
                        onChange={(e) => setTravelForm({ ...travelForm, guest_house: e.target.value })}
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">Advice (English)</label>
                      <textarea
                        rows="3"
                        value={travelForm.guest_house_en || ''}
                        onChange={(e) => setTravelForm({ ...travelForm, guest_house_en: e.target.value })}
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Helpline Numbers & Map URL */}
                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 space-y-4">
                  <h4 className="font-bold text-gray-800 text-sm border-b pb-2 flex items-center gap-2">
                    <i className="fas fa-phone text-green-600"></i> জরুরি যোগাযোগ ও গুগল ম্যাপ লিংক
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">হেল্পলাইন ফোন</label>
                      <input
                        type="text"
                        value={travelForm.helpline_phone || ''}
                        onChange={(e) => setTravelForm({ ...travelForm, helpline_phone: e.target.value })}
                        placeholder="01722428334"
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">পুরোহিতজীর ফোন</label>
                      <input
                        type="text"
                        value={travelForm.priest_phone || ''}
                        onChange={(e) => setTravelForm({ ...travelForm, priest_phone: e.target.value })}
                        placeholder="01712345678"
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">গুগল ম্যাপস লিংক</label>
                      <input
                        type="text"
                        value={travelForm.map_link || ''}
                        onChange={(e) => setTravelForm({ ...travelForm, map_link: e.target.value })}
                        placeholder="https://maps.google.com/..."
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-md flex items-center gap-2"
                  >
                    {isSaving ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-save"></i>}
                    ভ্রমণ গাইড সংরক্ষণ করুন
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'mantras' && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-6 border-b pb-3">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <i className="fas fa-om text-orange-600"></i> পবিত্র মন্ত্র ও পদ্মাপুরাণ পরিচালনা
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => playSacredBellSound()}
                    className="bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <i className="fas fa-bell"></i> ঘণ্টা টেস্ট
                  </button>
                  <button
                    type="button"
                    onClick={() => playSacredShankhSound()}
                    className="bg-orange-100 hover:bg-orange-200 text-orange-900 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>🐚</span> শঙ্খধ্বনি টেস্ট
                  </button>
                </div>
              </div>

              {/* Mantra Add/Edit Form */}
              <form onSubmit={handleSaveMantra} className="bg-orange-50/60 p-6 rounded-2xl border border-orange-200 mb-8 space-y-4">
                <h4 className="font-bold text-orange-950 text-base mb-2">
                  {editingMantraId ? 'মন্ত্র সম্পাদনা করুন' : 'নতুন মন্ত্র বা শ্লোক যুক্ত করুন'}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">ক্যাটাগরি</label>
                    <select
                      value={newMantra.category || 'ধ্যান'}
                      onChange={(e) => {
                        const val = e.target.value;
                        let valEn = 'Dhyana';
                        if (val === 'প্রণাম') valEn = 'Pranam';
                        if (val === 'পদ্মপুরাণ') valEn = 'Padma Purana';
                        if (val === 'রক্ষা মন্ত্র') valEn = 'Protection';
                        setNewMantra(prev => ({ ...prev, category: val, category_en: valEn }));
                      }}
                      className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-sm"
                    >
                      <option value="ধ্যান">ধ্যান (Dhyana)</option>
                      <option value="প্রণাম">প্রণাম (Pranam)</option>
                      <option value="পদ্মপুরাণ">পদ্মপুরাণ (Padma Purana)</option>
                      <option value="রক্ষা মন্ত্র">রক্ষা মন্ত্র (Protection)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">শিরোনাম (বাংলা) *</label>
                    <input
                      type="text"
                      required
                      value={newMantra.title || ''}
                      onChange={(e) => setNewMantra(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="মা মনসার ধ্যান মন্ত্র"
                      className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Title (English)</label>
                    <input
                      type="text"
                      value={newMantra.title_en || ''}
                      onChange={(e) => setNewMantra(prev => ({ ...prev, title_en: e.target.value }))}
                      placeholder="Maa Manasa Dhyana Mantra"
                      className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">মূল সংস্কৃত শ্লোক (Sanskrit Verse) *</label>
                  <textarea
                    rows="3"
                    required
                    value={newMantra.sanskrit || ''}
                    onChange={(e) => setNewMantra(prev => ({ ...prev, sanskrit: e.target.value }))}
                    placeholder="ওঁ দেবীং মনসাং ভক্ত্যা সংপূজ্য বিধিবৎ সদা..."
                    className="w-full p-3 bg-white border border-gray-300 rounded-lg text-sm font-serif"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">উচ্চারণ ও জপ নির্দেশিকা</label>
                  <input
                    type="text"
                    value={newMantra.pronunciation || ''}
                    onChange={(e) => setNewMantra(prev => ({ ...prev, pronunciation: e.target.value }))}
                    placeholder="Om Devim Manasam Bhaktya..."
                    className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">বঙ্গানুবাদ ও মাহাত্ম্য</label>
                    <textarea
                      rows="2"
                      value={newMantra.meaning || ''}
                      onChange={(e) => setNewMantra(prev => ({ ...prev, meaning: e.target.value }))}
                      className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">English Meaning & Significance</label>
                    <textarea
                      rows="2"
                      value={newMantra.meaning_en || ''}
                      onChange={(e) => setNewMantra(prev => ({ ...prev, meaning_en: e.target.value }))}
                      className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                    ></textarea>
                  </div>
                </div>

                <div className="flex gap-3 justify-end pt-2">
                  {editingMantraId && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingMantraId(null);
                        setNewMantra({ category: 'ধ্যান', category_en: 'Dhyana', title: '', title_en: '', sanskrit: '', pronunciation: '', meaning: '', meaning_en: '' });
                      }}
                      className="px-5 py-2 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 font-bold text-sm"
                    >
                      বাতিল
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-2 rounded-xl transition-all shadow-md flex items-center gap-2 text-sm"
                  >
                    {isSaving ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-save"></i>}
                    {editingMantraId ? 'আপডেট করুন' : 'মন্ত্র যুক্ত করুন'}
                  </button>
                </div>
              </form>

              {/* Mantras List */}
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 text-base mb-3 border-b pb-2 flex items-center justify-between">
                  <span>সংরক্ষিত মন্ত্র ও স্তোত্রসমূহ</span>
                  <span className="text-xs bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-bold">
                    মোট {(mantras || []).length} টি
                  </span>
                </h4>

                {(mantras || []).map((m) => (
                  <div key={m.id} className="p-4 rounded-xl border border-gray-200 bg-gray-50/40 hover:bg-orange-50/30 transition-all flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-100 px-2.5 py-0.5 rounded-full">
                          {m.category}
                        </span>
                        <h5 className="font-bold text-gray-900 text-base">{m.title}</h5>
                      </div>
                      <p className="text-xs text-orange-950 font-serif font-semibold bg-white p-2.5 rounded-lg border border-orange-100 mt-2 whitespace-pre-line">
                        {m.sanskrit}
                      </p>
                      {m.meaning && (
                        <p className="text-xs text-gray-600 mt-2">
                          <strong className="text-gray-700">অর্থ:</strong> {m.meaning}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          setNewMantra(m);
                          setEditingMantraId(m.id);
                          window.scrollTo({ top: 300, behavior: 'smooth' });
                        }}
                        className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white p-2 rounded-lg border border-blue-200 transition-colors"
                        title="এডিট"
                      >
                        <i className="fas fa-edit w-4"></i>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteMantra(m.id)}
                        className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white p-2 rounded-lg border border-red-200 transition-colors"
                        title="মুছে ফেলুন"
                      >
                        <i className="fas fa-trash w-4"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <i className="fas fa-shield-halved text-rose-600"></i> এডমিন সিকিউরিটি ও পাসওয়ার্ড পরিবর্তন
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    এডমিন প্যানেলে লগইন করার ইউজার আইডি (বা ইমেইল) এবং পাসওয়ার্ড পরিবর্তন করুন
                  </p>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <i className="fas fa-lock"></i> সুরক্ষিত অঞ্চল
                </span>
              </div>

              {/* Status Notice */}
              {credMsg.text && (
                <div className={`p-4 rounded-xl mb-6 text-sm flex items-center gap-3 border font-medium ${credMsg.type === 'success'
                  ? 'bg-green-50 text-green-800 border-green-200'
                  : 'bg-red-50 text-red-800 border-red-200'
                  }`}>
                  <i className={`fas ${credMsg.type === 'success' ? 'fa-circle-check text-green-600' : 'fa-triangle-exclamation text-red-600'} text-lg`}></i>
                  <div>{credMsg.text}</div>
                </div>
              )}

              {/* Current Active Info Card */}
              <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200/80 p-5 rounded-2xl mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-orange-700 mb-1 flex items-center gap-1.5">
                    <i className="fas fa-id-badge"></i> বর্তমান সক্রিয় ইউজার আইডি
                  </div>
                  <div className="text-lg font-mono font-bold text-gray-900">
                    {adminCredentials?.username || 'admin@manasamondirgoila.com'}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    পাসওয়ার্ড পরিবর্তন না করতে চাইলে নতুন পাসওয়ার্ডের ঘরগুলো খালি রাখুন।
                  </div>
                </div>
                <div className="bg-white px-4 py-2.5 rounded-xl border border-orange-200 shadow-sm text-center">
                  <div className="text-[11px] font-bold text-gray-500 uppercase">ডাটাবেজ স্ট্যাটাস</div>
                  <div className="text-xs font-bold text-green-600 flex items-center justify-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> ক্লাউড সিঙ্ক সক্রিয়
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleUpdateCredentials} className="space-y-6 max-w-2xl">
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-1.5 flex items-center gap-1.5">
                    <i className="fas fa-user-circle text-orange-600"></i> নতুন ইউজার আইডি / ইমেইল (User ID / Email)
                  </label>
                  <input
                    type="text"
                    value={credForm.username}
                    onChange={(e) => setCredForm({ ...credForm, username: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm font-medium"
                    placeholder="উদাঃ admin অথবা আপনার ইমেইল"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1.5">
                    আপনি যেকোনো নাম, ইউজারনেম (যেমনঃ <code className="bg-gray-100 px-1.5 py-0.5 rounded text-orange-600 font-bold">admin</code>) অথবা সাধারণ ইমেইল দিতে পারেন।
                  </p>
                </div>

                <div className="border-t pt-5">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-sm font-bold text-gray-800 flex items-center gap-1.5">
                      <i className="fas fa-key text-amber-600"></i> নতুন পাসওয়ার্ড (New Password)
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowCredPass(!showCredPass)}
                      className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                    >
                      <i className={`fas ${showCredPass ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                      {showCredPass ? 'পাসওয়ার্ড লুকান' : 'পাসওয়ার্ড দেখুন'}
                    </button>
                  </div>
                  <input
                    type={showCredPass ? 'text' : 'password'}
                    value={credForm.newPassword}
                    onChange={(e) => setCredForm({ ...credForm, newPassword: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm"
                    placeholder="অপরিবর্তিত রাখতে চাইলে খালি রাখুন"
                  />
                  <p className="text-xs text-gray-500 mt-1.5">
                    পাসওয়ার্ড পরিবর্তন করতে চাইলে কমপক্ষে ৪ অক্ষর দিন।
                  </p>
                </div>

                {credForm.newPassword && (
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-1.5 flex items-center gap-1.5">
                      <i className="fas fa-circle-check text-green-600"></i> নতুন পাসওয়ার্ড নিশ্চিত করুন (Confirm Password)
                    </label>
                    <input
                      type={showCredPass ? 'text' : 'password'}
                      value={credForm.confirmPassword}
                      onChange={(e) => setCredForm({ ...credForm, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm"
                      placeholder="নতুন পাসওয়ার্ডটি আবার লিখুন"
                      required={!!credForm.newPassword}
                    />
                  </div>
                )}

                <div className="pt-4 border-t flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-md flex items-center gap-2 text-sm disabled:opacity-50"
                  >
                    {isSaving ? <><i className="fas fa-spinner fa-spin"></i> সংরক্ষণ হচ্ছে...</> : <><i className="fas fa-save"></i> ক্রেডেনশিয়াল সংরক্ষণ করুন</>}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCredForm({
                        username: adminCredentials?.username || 'admin@manasamondirgoila.com',
                        newPassword: '',
                        confirmPassword: ''
                      });
                      setCredMsg({ type: '', text: '' });
                    }}
                    className="px-5 py-3 border border-gray-300 text-gray-600 hover:bg-gray-100 rounded-xl text-sm font-semibold transition-colors"
                  >
                    রিসেট
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* 11. Puja & Sankalpa Bookings Tab */}
          {activeTab === 'bookings' && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <i className="fas fa-calendar-check text-amber-600"></i> পূজা ও সংকল্প বুকিং ব্যবস্থাপনা
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">ভক্তদের অনলাইন পূজা বুকিং ও সংকল্প আবেদনসমূহের তালিকা</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1.5 rounded-full font-bold">
                    মোট বুকিং: {(pujaBookings || []).length}
                  </span>
                  <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1.5 rounded-full font-bold">
                    পেন্ডিং: {(pujaBookings || []).filter(b => b.status !== 'completed').length}
                  </span>
                </div>
              </div>

              {/* Filter and Search */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="sm:col-span-2">
                  <div className="relative">
                    <i className="fas fa-search absolute left-3.5 top-3.5 text-gray-400 text-sm"></i>
                    <input
                      type="text"
                      placeholder="নাম, ফোন নম্বর, গোত্র বা টোকেন লিখে খুঁজুন..."
                      value={bookingSearch}
                      onChange={(e) => setBookingSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  {['all', 'pending', 'completed'].map(f => (
                    <button
                      key={f}
                      onClick={() => setBookingFilter(f)}
                      className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${bookingFilter === f ? 'bg-amber-600 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                      {f === 'all' ? 'সকল' : f === 'pending' ? 'পেন্ডিং' : 'সম্পন্ন'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bookings List */}
              {(() => {
                const searchQ = (bookingSearch || '').toLowerCase().trim();
                const filtered = (pujaBookings || []).filter(b => {
                  const matchFilter = bookingFilter === 'all' || (bookingFilter === 'completed' ? b.status === 'completed' : b.status !== 'completed');
                  const matchSearch = !searchQ ||
                    (b.devoteeName && b.devoteeName.toLowerCase().includes(searchQ)) ||
                    (b.phone && b.phone.includes(searchQ)) ||
                    (b.gotra && b.gotra.toLowerCase().includes(searchQ)) ||
                    (b.token && b.token.toLowerCase().includes(searchQ)) ||
                    (b.pujaType && b.pujaType.toLowerCase().includes(searchQ));
                  return matchFilter && matchSearch;
                });

                if (filtered.length === 0) {
                  return (
                    <div className="text-center py-12 bg-amber-50/50 rounded-2xl border border-dashed border-amber-200">
                      <i className="fas fa-pray text-4xl text-amber-300 mb-2"></i>
                      <p className="text-gray-500 font-medium">কোনো পূজা বুকিং পাওয়া যায়নি</p>
                    </div>
                  );
                }

                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filtered.map(b => (
                      <div key={b.id || b.token} className="p-5 rounded-2xl border border-amber-100 bg-amber-50/20 hover:border-amber-300 transition-all flex flex-col justify-between shadow-sm">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="font-mono text-xs font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-lg">
                              {b.token || 'MMG-PUJA'}
                            </span>
                            <span className={`text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1 ${b.status === 'completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-orange-100 text-orange-800'}`}>
                              <i className={`fas ${b.status === 'completed' ? 'fa-check-circle' : 'fa-clock'}`}></i>
                              {b.status === 'completed' ? 'সম্পন্ন' : 'পেন্ডিং'}
                            </span>
                          </div>
                          <h4 className="font-bold text-gray-900 text-base">{b.devoteeName}</h4>
                          <div className="text-xs text-gray-600 space-y-1 mt-2">
                            <p><span className="font-semibold text-gray-700">পূজা:</span> {b.pujaType}</p>
                            <p><span className="font-semibold text-gray-700">গোত্র:</span> {b.gotra || 'অনুল্লিখিত'} • <span className="font-semibold text-gray-700">ফোন:</span> <a href={`tel:${b.phone}`} className="text-amber-700 font-bold hover:underline">{b.phone}</a></p>
                            {b.pujaDate && <p><span className="font-semibold text-gray-700">পূজার তারিখ:</span> {b.pujaDate}</p>}
                            {b.address && <p><span className="font-semibold text-gray-700">ঠিকানা:</span> {b.address}</p>}
                            {b.sankalpa && (
                              <p className="bg-white p-2.5 rounded-lg border border-amber-100 mt-2 italic text-gray-700 text-xs">
                                <span className="font-semibold not-italic text-amber-800">সংকল্প/প্রার্থনা:</span> "{b.sankalpa}"
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between gap-2 pt-4 mt-4 border-t border-amber-100">
                          <button
                            type="button"
                            onClick={() => printBookingDirectly(b)}
                            className="text-xs font-bold px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
                            title="সংকল্প প্রমাণপত্র প্রিন্ট করুন"
                          >
                            <i className="fas fa-print"></i> সংকল্প পত্র
                          </button>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => handleToggleBookingStatus(b.id || b.token, b.status)}
                              className={`text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors ${b.status === 'completed' ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' : 'bg-emerald-600 text-white hover:bg-emerald-700'}`}
                            >
                              <i className={`fas ${b.status === 'completed' ? 'fa-undo' : 'fa-check'}`}></i>
                              {b.status === 'completed' ? 'পেন্ডিং করুন' : 'সম্পন্ন করুন'}
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteBooking(b.id || b.token)}
                              className="text-xs text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
                              title="মুছে ফেলুন"
                            >
                              <i className="fas fa-trash-alt"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>
          )}

          {/* 12. Donation & Pranami Receipts Tab */}
          {activeTab === 'receipts' && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <i className="fas fa-receipt text-orange-600"></i> স্মারক প্রণামী রশিদসমূহ
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">ভক্তদের ইস্যুকৃত ডিজিটাল প্রণামী রশিদ ও হিসাব ভাউচার</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1.5 rounded-full font-bold">
                    মোট প্রণামী রশিদ: {(donationReceipts || []).length} টি
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowNewReceiptModal(!showNewReceiptModal)}
                    className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <i className={`fas ${showNewReceiptModal ? 'fa-times' : 'fa-plus'}`}></i>
                    {showNewReceiptModal ? 'ফর্ম বন্ধ করুন' : 'নতুন প্রণামী রশিদ ইস্যু করুন'}
                  </button>
                </div>
              </div>

              {/* In-Panel New Receipt Creation Form */}
              {showNewReceiptModal && (
                <form onSubmit={handleAdminIssueReceipt} className="mb-8 p-6 bg-gradient-to-br from-amber-50/70 to-orange-50/50 rounded-2xl border-2 border-amber-200">
                  <h4 className="font-bold text-amber-950 mb-4 flex items-center gap-2 text-sm">
                    <i className="fas fa-file-invoice text-amber-600"></i> ভক্তের জন্য নতুন অফিসিয়াল প্রণামী রশিদ প্রস্তুত করুন
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">দাতার পূর্ণ নাম *</label>
                      <input
                        type="text"
                        required
                        value={adminReceiptForm.name}
                        onChange={(e) => setAdminReceiptForm({ ...adminReceiptForm, name: e.target.value })}
                        placeholder="উদা: সুব্রত রায়"
                        className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">মোবাইল নম্বর</label>
                      <input
                        type="tel"
                        value={adminReceiptForm.phone}
                        onChange={(e) => setAdminReceiptForm({ ...adminReceiptForm, phone: e.target.value })}
                        placeholder="০১৭১..."
                        className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">গোত্র (ঐচ্ছিক)</label>
                      <input
                        type="text"
                        value={adminReceiptForm.gotra}
                        onChange={(e) => setAdminReceiptForm({ ...adminReceiptForm, gotra: e.target.value })}
                        placeholder="উদা: কশ্যপ"
                        className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">দানের পরিমাণ (টাকা) *</label>
                      <input
                        type="number"
                        required
                        min="1"
                        value={adminReceiptForm.amount}
                        onChange={(e) => setAdminReceiptForm({ ...adminReceiptForm, amount: e.target.value })}
                        placeholder="উদা: ৫০০"
                        className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">পরিশোধের মাধ্যম</label>
                      <select
                        value={adminReceiptForm.method}
                        onChange={(e) => setAdminReceiptForm({ ...adminReceiptForm, method: e.target.value })}
                        className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      >
                        <option value="bKash">বিকাশ (bKash)</option>
                        <option value="Nagad">নগদ (Nagad)</option>
                        <option value="Rocket">রকেট (Rocket)</option>
                        <option value="Bank">ব্যাংক ডিপোজিট</option>
                        <option value="নগদ ক্যাশ">মন্দির অফিসে নগদ প্রদান</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">ট্রানজেকশন আইডি / মেমো নং</label>
                      <input
                        type="text"
                        value={adminReceiptForm.trxId}
                        onChange={(e) => setAdminReceiptForm({ ...adminReceiptForm, trxId: e.target.value })}
                        placeholder="উদা: BKL897312"
                        className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">দানের উদ্দেশ্য / খাত</label>
                      <input
                        type="text"
                        value={adminReceiptForm.purpose}
                        onChange={(e) => setAdminReceiptForm({ ...adminReceiptForm, purpose: e.target.value })}
                        placeholder="উদা: সাধারণ প্রণামী ও সেবা"
                        className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowNewReceiptModal(false)}
                      className="px-4 py-2 border rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100"
                    >
                      বাতিল
                    </button>
                    <button
                      type="submit"
                      disabled={isSaving}
                      className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-6 py-2 rounded-xl transition-all shadow-md flex items-center gap-1.5"
                    >
                      {isSaving ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-check-circle"></i>}
                      প্রণামী রশিদ ইস্যু ও প্রিন্ট করুন
                    </button>
                  </div>
                </form>
              )}

              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <i className="fas fa-search absolute left-3.5 top-3.5 text-gray-400 text-sm"></i>
                  <input
                    type="text"
                    placeholder="রশিদ নম্বর, দাতার নাম, ফোন বা ট্রানজেকশন আইডি লিখে খুঁজুন..."
                    value={receiptSearch}
                    onChange={(e) => setReceiptSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Receipts Table */}
              {(() => {
                const searchQ = (receiptSearch || '').toLowerCase().trim();
                const filtered = (donationReceipts || []).filter(r => {
                  if (!searchQ) return true;
                  return (r.receiptNo && r.receiptNo.toLowerCase().includes(searchQ)) ||
                    (r.name && r.name.toLowerCase().includes(searchQ)) ||
                    (r.phone && r.phone.includes(searchQ)) ||
                    (r.gotra && r.gotra.toLowerCase().includes(searchQ)) ||
                    (r.trxId && r.trxId.toLowerCase().includes(searchQ));
                });

                if (filtered.length === 0) {
                  return (
                    <div className="text-center py-12 bg-orange-50/50 rounded-2xl border border-dashed border-orange-200">
                      <i className="fas fa-receipt text-4xl text-orange-300 mb-2"></i>
                      <p className="text-gray-500 font-medium">কোনো প্রণামী রশিদ পাওয়া যায়নি</p>
                    </div>
                  );
                }

                return (
                  <div className="space-y-4">
                    {/* 1. Mobile Cards View (100% visible on phones, no cutoff, print & delete always visible) */}
                    <div className="block md:hidden space-y-3">
                      {filtered.map(r => (
                        <div key={r.id || r.receiptNo} className="bg-amber-50/30 rounded-2xl p-4 border border-amber-200 shadow-xs hover:border-amber-400 transition-all">
                          <div className="flex items-center justify-between pb-2 mb-2 border-b border-amber-100">
                            <span className="font-mono text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded border border-amber-300">
                              {r.receiptNo}
                            </span>
                            <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                              <i className="fas fa-calendar-alt text-amber-600 text-[10px]"></i>
                              {r.date || (r.timestamp ? new Date(r.timestamp).toLocaleDateString('bn-BD') : '-')}
                            </span>
                          </div>

                          <div className="py-1 space-y-1.5">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h4 className="font-bold text-gray-900 text-base leading-snug">{r.name}</h4>
                                <div className="text-xs text-gray-600 mt-0.5">
                                  {r.gotra && <span className="mr-2">গোত্র: <strong>{r.gotra}</strong></span>}
                                  {r.phone && <span>ফোন: <a href={`tel:${r.phone}`} className="text-amber-800 font-bold hover:underline">{r.phone}</a></span>}
                                </div>
                              </div>
                              <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 text-sm font-serif whitespace-nowrap shadow-2xs">
                                ৳ {typeof r.amount === 'number' ? toBengaliDigits(r.amount.toLocaleString()) : toBengaliDigits(r.amount)}
                              </span>
                            </div>

                            {r.purpose && (
                              <p className="text-xs text-gray-500 bg-white/80 px-2.5 py-1 rounded-lg border border-amber-100">
                                <span className="font-medium text-gray-400">খাত:</span> {r.purpose}
                              </p>
                            )}

                            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                              <span className="inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-gray-200 text-gray-700 font-medium">
                                <i className="fas fa-wallet text-amber-600 text-[10px]"></i> {r.method || 'বিকাশ'}
                              </span>
                              {r.trxId && (
                                <span className="font-mono text-[11px] text-gray-600 bg-gray-50 px-2 py-0.5 rounded border border-gray-200">
                                  TrxID: {r.trxId}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="pt-3 mt-2 border-t border-amber-100 flex items-center justify-between gap-2">
                            <button
                              type="button"
                              onClick={() => printReceiptDirectly(r, 'bn')}
                              className="flex-1 py-2 px-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer"
                            >
                              <i className="fas fa-print"></i> রশিদ প্রিন্ট করুন
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteReceipt(r.id || r.receiptNo)}
                              className="py-2 px-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-xs font-bold flex items-center gap-1 border border-red-200 transition-colors cursor-pointer"
                              title="মুছে ফেলুন"
                            >
                              <i className="fas fa-trash-alt"></i> মুছুন
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 2. Desktop / Tablet Full Table View */}
                    <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-amber-50/80 text-amber-950 text-xs font-bold uppercase tracking-wider border-b border-amber-200">
                            <th className="py-3 px-4">রশিদ নম্বর</th>
                            <th className="py-3 px-4">দাতার নাম ও পরিচয়</th>
                            <th className="py-3 px-4">পরিমাণ</th>
                            <th className="py-3 px-4">মাধ্যম ও TrxID</th>
                            <th className="py-3 px-4">তারিখ</th>
                            <th className="py-3 px-4 text-right">কার্যক্রম</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm">
                          {filtered.map(r => (
                            <tr key={r.id || r.receiptNo} className="hover:bg-amber-50/30 transition-colors">
                              <td className="py-3 px-4">
                                <span className="font-mono text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
                                  {r.receiptNo}
                                </span>
                              </td>
                              <td className="py-3 px-4">
                                <p className="font-bold text-gray-900">{r.name}</p>
                                <p className="text-xs text-gray-500">{r.gotra ? `গোত্র: ${r.gotra} • ` : ''}{r.phone || '-'}</p>
                              </td>
                              <td className="py-3 px-4">
                                <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 font-serif">
                                  ৳ {typeof r.amount === 'number' ? toBengaliDigits(r.amount.toLocaleString()) : toBengaliDigits(r.amount)}
                                </span>
                              </td>
                              <td className="py-3 px-4">
                                <p className="text-xs font-semibold text-gray-700">{r.method || 'বিকাশ'}</p>
                                {r.trxId && <p className="font-mono text-[11px] text-gray-500">{r.trxId}</p>}
                              </td>
                              <td className="py-3 px-4 text-xs text-gray-500">
                                {r.date || (r.timestamp ? new Date(r.timestamp).toLocaleDateString('bn-BD') : '-')}
                              </td>
                              <td className="py-3 px-4 text-right">
                                <div className="inline-flex items-center gap-1.5">
                                  <button
                                    type="button"
                                    onClick={() => printReceiptDirectly(r, 'bn')}
                                    className="text-xs font-bold px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors flex items-center gap-1 shadow-sm cursor-pointer"
                                    title="রশিদ প্রিন্ট করুন"
                                  >
                                    <i className="fas fa-print"></i> প্রিন্ট
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteReceipt(r.id || r.receiptNo)}
                                    className="text-xs text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors cursor-pointer"
                                    title="মুছে ফেলুন"
                                  >
                                    <i className="fas fa-trash-alt"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* 13. Royani Gaan 4 Palas Tab */}
          {activeTab === 'royani' && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <i className="fas fa-music text-purple-600"></i> ঐতিহ্যবাহী রয়ানী গানের চার পালা
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">পদ্মাপুরাণ ও মনসামঙ্গলের ৪টি পবিত্র পর্বের শ্লোক ও কাহিনী সম্পাদনা</p>
                </div>
              </div>

              <form onSubmit={handleSaveRoyani} className="space-y-6">
                {(royaniForm || []).map((pala, idx) => (
                  <div key={pala.id || idx} className="p-6 rounded-2xl border border-purple-100 bg-purple-50/20 space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-purple-100">
                      <span className="font-bold text-purple-900 text-sm flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-purple-600 text-white inline-flex items-center justify-center text-xs font-bold">
                          {idx + 1}
                        </span>
                        পর্ব {idx + 1}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">বাংলা শিরোনাম</label>
                        <input
                          type="text"
                          value={pala.titleBn || ''}
                          onChange={(e) => handleRoyaniPalaChange(idx, 'titleBn', e.target.value)}
                          className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">English Title</label>
                        <input
                          type="text"
                          value={pala.titleEn || ''}
                          onChange={(e) => handleRoyaniPalaChange(idx, 'titleEn', e.target.value)}
                          className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">বাংলা উপশিরোনাম (Tag)</label>
                        <input
                          type="text"
                          value={pala.tagBn || ''}
                          onChange={(e) => handleRoyaniPalaChange(idx, 'tagBn', e.target.value)}
                          className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">English Tag</label>
                        <input
                          type="text"
                          value={pala.tagEn || ''}
                          onChange={(e) => handleRoyaniPalaChange(idx, 'tagEn', e.target.value)}
                          className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">অমর পয়ার শ্লোক (পদ্মাপুরাণ)</label>
                      <textarea
                        rows={3}
                        value={pala.verseBn || ''}
                        onChange={(e) => handleRoyaniPalaChange(idx, 'verseBn', e.target.value)}
                        className="w-full px-3 py-2 border rounded-xl text-sm font-serif focus:ring-2 focus:ring-purple-500 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">বাংলা কাহিনী সারাংশ</label>
                        <textarea
                          rows={4}
                          value={pala.storyBn || ''}
                          onChange={(e) => handleRoyaniPalaChange(idx, 'storyBn', e.target.value)}
                          className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">English Narrative</label>
                        <textarea
                          rows={4}
                          value={pala.storyEn || ''}
                          onChange={(e) => handleRoyaniPalaChange(idx, 'storyEn', e.target.value)}
                          className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t flex items-center justify-end gap-3">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-md flex items-center gap-2 text-sm disabled:opacity-50"
                  >
                    {isSaving ? <><i className="fas fa-spinner fa-spin"></i> সংরক্ষণ হচ্ছে...</> : <><i className="fas fa-save"></i> রয়ানী গানের পালা সংরক্ষণ করুন</>}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* 14. Temple History & Heritage Tab */}
          {activeTab === 'history' && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <i className="fas fa-landmark text-amber-700"></i> মন্দিরের ইতিহাস ও পটভূমি ব্যবস্থাপনা
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">৫৩০+ বছরের প্রাচীন মন্দির পরিচিতি ও মহাকবি বিজয় গুপ্তের তথ্য</p>
                </div>
              </div>

              <form onSubmit={handleSaveHistory} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">মন্দির প্রতিষ্ঠাতা</label>
                    <input
                      type="text"
                      value={historyForm.founder || ''}
                      onChange={(e) => setHistoryForm({ ...historyForm, founder: e.target.value })}
                      placeholder="মহাকবি বিজয় গুপ্ত"
                      className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">প্রতিষ্ঠা সাল</label>
                    <input
                      type="text"
                      value={historyForm.established || ''}
                      onChange={(e) => setHistoryForm({ ...historyForm, established: e.target.value })}
                      placeholder="১৪৯৪ খ্রিষ্টাব্দ (১৪১৬ শকাব্দ)"
                      className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">প্রারম্ভিক পটভূমি (অনুচ্ছেদ ১)</label>
                  <textarea
                    rows={4}
                    value={historyForm.p1 || ''}
                    onChange={(e) => setHistoryForm({ ...historyForm, p1: e.target.value })}
                    className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">ঐতিহাসিক গুরুত্ব ও মহিমা (অনুচ্ছেদ ২)</label>
                  <textarea
                    rows={4}
                    value={historyForm.p2 || ''}
                    onChange={(e) => setHistoryForm({ ...historyForm, p2: e.target.value })}
                    className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">বিজয় গুপ্তের অমর শ্লোক (Immortal Verse)</label>
                  <textarea
                    rows={3}
                    value={historyForm.shloka || ''}
                    onChange={(e) => setHistoryForm({ ...historyForm, shloka: e.target.value })}
                    className="w-full px-3 py-2 border rounded-xl text-sm font-serif focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">শ্লোকের মর্মার্থ ও বঙ্গানুবাদ</label>
                  <textarea
                    rows={3}
                    value={historyForm.shlokaMeaning || ''}
                    onChange={(e) => setHistoryForm({ ...historyForm, shlokaMeaning: e.target.value })}
                    className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div className="pt-4 border-t flex items-center justify-end gap-3">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-md flex items-center gap-2 text-sm disabled:opacity-50"
                  >
                    {isSaving ? <><i className="fas fa-spinner fa-spin"></i> সংরক্ষণ হচ্ছে...</> : <><i className="fas fa-save"></i> ঐতিহাসিক তথ্য সংরক্ষণ করুন</>}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* 15. Photo Gallery Management Tab */}
          {activeTab === 'gallery' && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <i className="fas fa-images text-pink-600"></i> ফটোগ্যালারি ও চিত্রশালা ব্যবস্থাপনা
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    ওয়েবসাইটের প্রধান ফটো গ্যালারি ও পূর্ণদৈর্ঘ্য লাইটবক্সের আলোকচিত্র, ক্যাপশন ও প্রদর্শন ক্রম পরিচালনা করুন
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-pink-700 bg-pink-50 px-3 py-1.5 rounded-full border border-pink-200">
                    মোট ছবি: {(galleryItems || DEFAULT_GALLERY_ITEMS).length} টি
                  </span>
                </div>
              </div>

              {/* Mode Selector: Photo (Single/Multiple) vs Video */}
              <div className="flex border-b border-gray-200 gap-2">
                <button
                  type="button"
                  onClick={() => setGalleryTabMode('image')}
                  className={`pb-2.5 px-4 font-bold text-sm flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
                    galleryTabMode === 'image'
                      ? 'border-pink-600 text-pink-700'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <i className="fas fa-images"></i> ছবি আপলোড (এক বা একাধিক)
                </button>
                <button
                  type="button"
                  onClick={() => setGalleryTabMode('video')}
                  className={`pb-2.5 px-4 font-bold text-sm flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
                    galleryTabMode === 'video'
                      ? 'border-red-600 text-red-700'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <i className="fas fa-video"></i> ভিডিও আপলোড বা লিংক
                </button>
              </div>

              {/* Photo Mode Form */}
              {galleryTabMode === 'image' && (
                <div className="space-y-6">
                  {/* Single Image Form */}
                  <div className="bg-pink-50/40 p-6 rounded-2xl border border-pink-100">
                    <h4 className="text-base font-bold text-pink-950 mb-3 flex items-center gap-2">
                      <i className="fas fa-plus-circle text-pink-600"></i> একক ছবি যোগ করুন
                    </h4>
                    <form onSubmit={handleAddGalleryPhoto} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1">
                            ছবির ফাইল আপলোড (কম্প্রেসড ও অপ্টিমাইজড)
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageChange(e, setNewGalleryPhoto, newGalleryPhoto)}
                            className="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-pink-100 file:text-pink-700 hover:file:bg-pink-200 cursor-pointer"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1">
                            অথবা ছবির অনলাইন URL / লিংক
                          </label>
                          <input
                            type="text"
                            value={newGalleryPhoto.url}
                            onChange={(e) => setNewGalleryPhoto({ ...newGalleryPhoto, url: e.target.value })}
                            placeholder="উদা: header image.jpg বা https://..."
                            className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Photo Preview if selected */}
                      {(newGalleryPhoto.image || newGalleryPhoto.url) && (
                        <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-pink-200">
                          <img
                            src={newGalleryPhoto.image || newGalleryPhoto.url}
                            alt="Preview"
                            className="w-24 h-16 object-cover rounded-lg border shadow-xs"
                          />
                          <div className="text-xs text-gray-600">
                            <span className="font-bold text-pink-700">ছবি প্রাকদর্শন:</span> {newGalleryPhoto.image ? 'ডিভাইস ফাইল আপলোড' : 'ওয়েব লিংক'}
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1">বাংলা ক্যাপশন *</label>
                          <input
                            type="text"
                            value={newGalleryPhoto.captionBn}
                            onChange={(e) => setNewGalleryPhoto({ ...newGalleryPhoto, captionBn: e.target.value })}
                            placeholder="উদা: শ্রীশ্রী মা মনসা মন্দির তোরণ ও মূল প্রাঙ্গণ"
                            className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1">English Caption (ঐচ্ছিক)</label>
                          <input
                            type="text"
                            value={newGalleryPhoto.captionEn}
                            onChange={(e) => setNewGalleryPhoto({ ...newGalleryPhoto, captionEn: e.target.value })}
                            placeholder="e.g. Temple Entrance & Main Courtyard"
                            className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="submit"
                          disabled={isSaving}
                          className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold px-6 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2 text-sm disabled:opacity-50 cursor-pointer"
                        >
                          {isSaving ? <><i className="fas fa-spinner fa-spin"></i> সংরক্ষণ হচ্ছে...</> : <><i className="fas fa-plus"></i> গ্যালারিতে ছবি যোগ করুন</>}
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Multiple Images Batch Upload */}
                  <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-amber-950 flex items-center gap-2">
                          <i className="fas fa-layer-group text-amber-600"></i> একসাথে একাধিক ছবি আপলোড (Multiple Upload)
                        </h4>
                        <p className="text-xs text-gray-600 mt-0.5">একসাথে ৩, ৫ বা ততোধিক ছবি নির্বাচন করুন, স্বয়ংক্রিয়ভাবে অপ্টিমাইজ হয়ে যোগ হবে</p>
                      </div>
                      <label className="cursor-pointer bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all shrink-0">
                        <i className="fas fa-folder-open"></i> একাধিক ছবি বাছুন
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleGalleryMultiFiles}
                          className="hidden"
                        />
                      </label>
                    </div>

                    {newGalleryBatch.length > 0 && (
                      <div className="bg-white p-4 rounded-xl border border-amber-300 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-amber-900">
                            নির্বাচিত ছবি সমূহ ({newGalleryBatch.length} টি)
                          </span>
                          <button
                            type="button"
                            onClick={() => setNewGalleryBatch([])}
                            className="text-xs text-red-600 hover:text-red-800 font-bold"
                          >
                            সব বাতিল করুন
                          </button>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
                          {newGalleryBatch.map((batchItem, bIdx) => (
                            <div key={bIdx} className="relative group aspect-square rounded-lg overflow-hidden border shadow-xs">
                              <img src={batchItem.url} alt={`Batch ${bIdx + 1}`} className="w-full h-full object-cover" />
                              <button
                                type="button"
                                onClick={() => setNewGalleryBatch(prev => prev.filter((_, idx) => idx !== bIdx))}
                                className="absolute top-1 right-1 w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] opacity-90 hover:opacity-100"
                              >
                                <i className="fas fa-times"></i>
                              </button>
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-end pt-2">
                          <button
                            type="button"
                            onClick={handleSaveGalleryBatch}
                            disabled={isSaving}
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-md disabled:opacity-50 cursor-pointer"
                          >
                            <i className="fas fa-check-double"></i> গ্যালারিতে সব ({newGalleryBatch.length} টি) ছবি সেভ করুন
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Video Mode Form */}
              {galleryTabMode === 'video' && (
                <div className="bg-red-50/50 p-6 rounded-2xl border border-red-200">
                  <h4 className="text-base font-bold text-red-950 mb-3 flex items-center gap-2">
                    <i className="fas fa-video text-red-600"></i> গ্যালারিতে ভিডিও যোগ করুন
                  </h4>
                  <form onSubmit={handleAddGalleryPhoto} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          ভিডিও ফাইল আপলোড (.mp4, .webm, .mov - যেকোনো সাইজ, আনলিমিটেড)
                        </label>
                        <input
                          type="file"
                          accept="video/*"
                          onChange={handleGalleryVideoFile}
                          className="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-red-100 file:text-red-700 hover:file:bg-red-200 cursor-pointer"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          অথবা YouTube / অনলাইন ভিডিও লিংক
                        </label>
                        <input
                          type="text"
                          value={newGalleryPhoto.url && newGalleryPhoto.url.startsWith('data:') ? '' : newGalleryPhoto.url}
                          onChange={(e) => setNewGalleryPhoto({ ...newGalleryPhoto, url: e.target.value, mediaType: 'video' })}
                          placeholder="উদা: https://youtu.be/... বা https://www.youtube.com/watch?v=..."
                          className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Video Preview */}
                    {(newGalleryPhoto.image || newGalleryPhoto.url) && (
                      <div className="p-3 bg-white rounded-xl border border-red-200">
                        <div className="w-full max-w-sm aspect-video rounded-lg overflow-hidden bg-black mb-2 shadow-xs">
                          <MediaViewer
                            url={newGalleryPhoto.image || newGalleryPhoto.url}
                            isVideo={true}
                            alt="Gallery Video Preview"
                            className="w-full h-full object-cover"
                            controls={true}
                          />
                        </div>
                        <span className="text-xs text-red-700 font-bold">ভিডিও প্রাকদর্শন সক্রিয়</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">বাংলা ক্যাপশন *</label>
                        <input
                          type="text"
                          value={newGalleryPhoto.captionBn}
                          onChange={(e) => setNewGalleryPhoto({ ...newGalleryPhoto, captionBn: e.target.value })}
                          placeholder="উদা: মন্দিরের শ্রীশ্রী মা মনসা পূজার ভিডিও দর্শন"
                          className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">English Caption (ঐচ্ছিক)</label>
                        <input
                          type="text"
                          value={newGalleryPhoto.captionEn}
                          onChange={(e) => setNewGalleryPhoto({ ...newGalleryPhoto, captionEn: e.target.value })}
                          placeholder="e.g. Sacred Darshan Video of Maa Manasa"
                          className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={isSaving}
                        className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold px-6 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2 text-sm disabled:opacity-50 cursor-pointer"
                      >
                        {isSaving ? <><i className="fas fa-spinner fa-spin"></i> সংরক্ষণ হচ্ছে...</> : <><i className="fas fa-video"></i> গ্যালারিতে ভিডিও যোগ করুন</>}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Existing Gallery Photos / Videos List */}
              <div>
                <h4 className="text-base font-bold text-gray-800 mb-4 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <i className="fas fa-layer-group text-pink-600"></i> বর্তমান গ্যালারি আলোকচিত্র ও ভিডিও তালিকা
                  </span>
                  <span className="text-xs font-normal text-gray-500">
                    (বাম/ডান অ্যারো দিয়ে হোমপেজে প্রদর্শনের ক্রম পরিবর্তন করতে পারেন)
                  </span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(galleryItems || DEFAULT_GALLERY_ITEMS).map((item, index) => {
                    const isEditing = editingGalleryId === item.id;
                    const totalCount = (galleryItems || DEFAULT_GALLERY_ITEMS).length;
                    const isVid = item.mediaType === 'video' || isVideoUrl(item.url);

                    return (
                      <div
                        key={item.id || index}
                        className={`p-4 rounded-2xl border transition-all ${
                          isEditing
                            ? 'border-pink-500 bg-pink-50/50 shadow-md ring-2 ring-pink-300'
                            : 'border-gray-200 bg-white hover:border-pink-200 shadow-xs'
                        }`}
                      >
                        {isEditing ? (
                          /* Edit Form */
                          <form onSubmit={handleUpdateGalleryPhoto} className="space-y-3">
                            <div className="flex items-center justify-between pb-2 border-b">
                              <span className="text-xs font-bold text-pink-700">মিডিয়া সম্পাদনা #{index + 1} ({isVid ? 'ভিডিও' : 'ছবি'})</span>
                              <button
                                type="button"
                                onClick={() => setEditingGalleryId(null)}
                                className="text-gray-400 hover:text-gray-600 text-xs"
                              >
                                <i className="fas fa-times"></i> বাতিল
                              </button>
                            </div>

                            <div className="flex gap-3 items-center">
                              {isVid ? (
                                <div className="w-20 h-14 bg-black rounded-lg overflow-hidden flex items-center justify-center text-amber-400 shrink-0">
                                  <i className="fas fa-play text-base"></i>
                                </div>
                              ) : (
                                <img
                                  src={editGalleryPhoto.image || editGalleryPhoto.url || item.url}
                                  alt="Current"
                                  className="w-20 h-14 object-cover rounded-lg border shadow-xs shrink-0"
                                />
                              )}
                              <div className="flex-1 min-w-0">
                                <label className="block text-[11px] font-bold text-gray-600 mb-0.5">নতুন ফাইল বা URL</label>
                                <input
                                  type="text"
                                  value={editGalleryPhoto.url || ''}
                                  onChange={(e) => setEditGalleryPhoto({ ...editGalleryPhoto, url: e.target.value })}
                                  placeholder="URL বা লিংক দিন..."
                                  className="w-full px-2 py-1 border rounded text-xs"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-[11px] font-bold text-gray-700 mb-0.5">বাংলা ক্যাপশন</label>
                              <input
                                type="text"
                                value={editGalleryPhoto.captionBn}
                                onChange={(e) => setEditGalleryPhoto({ ...editGalleryPhoto, captionBn: e.target.value })}
                                className="w-full px-2.5 py-1.5 border rounded-lg text-xs focus:ring-2 focus:ring-pink-500 focus:outline-none"
                              />
                            </div>

                            <div>
                              <label className="block text-[11px] font-bold text-gray-700 mb-0.5">English Caption</label>
                              <input
                                type="text"
                                value={editGalleryPhoto.captionEn}
                                onChange={(e) => setEditGalleryPhoto({ ...editGalleryPhoto, captionEn: e.target.value })}
                                className="w-full px-2.5 py-1.5 border rounded-lg text-xs focus:ring-2 focus:ring-pink-500 focus:outline-none"
                              />
                            </div>

                            <div className="flex items-center justify-end gap-2 pt-2 border-t">
                              <button
                                type="button"
                                onClick={() => setEditingGalleryId(null)}
                                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-bold transition-colors"
                              >
                                বাতিল
                              </button>
                              <button
                                type="submit"
                                disabled={isSaving}
                                className="px-4 py-1.5 bg-pink-600 hover:bg-pink-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors cursor-pointer"
                              >
                                {isSaving ? 'সংরক্ষণ...' : 'আপডেট করুন'}
                              </button>
                            </div>
                          </form>
                        ) : (
                          /* View Card */
                          <div>
                            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gray-900 mb-3 border">
                              {isVid ? (
                                <div className="w-full h-full flex flex-col items-center justify-center bg-stone-900 text-amber-400">
                                  <i className="fas fa-play-circle text-3xl"></i>
                                  <span className="text-[11px] font-bold text-white mt-1">ভিডিও মিডিয়া</span>
                                </div>
                              ) : (
                                <img
                                  src={item.url}
                                  alt={item.captionBn || `Gallery ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              )}
                              <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-xs text-white px-2 py-0.5 rounded-full text-[10px] font-mono font-bold flex items-center gap-1">
                                <span>#{index + 1}</span>
                                {isVid && <span className="text-amber-400 font-sans">✦ ভিডিও</span>}
                              </div>
                            </div>

                            <div className="mb-3 space-y-1">
                              <p className="font-bold text-gray-900 text-sm line-clamp-1">{item.captionBn || 'ক্যাপশন নেই'}</p>
                              {item.captionEn && (
                                <p className="text-xs text-gray-500 italic line-clamp-1">{item.captionEn}</p>
                              )}
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                              <div className="flex items-center gap-1">
                                <button
                                  type="button"
                                  onClick={() => handleMoveGalleryPhoto(index, -1)}
                                  disabled={index === 0}
                                  className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-pink-100 text-gray-600 hover:text-pink-700 flex items-center justify-center transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                                  title="বামে / পূর্বে সরান"
                                >
                                  <i className="fas fa-arrow-left text-[11px]"></i>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleMoveGalleryPhoto(index, 1)}
                                  disabled={index === totalCount - 1}
                                  className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-pink-100 text-gray-600 hover:text-pink-700 flex items-center justify-center transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                                  title="ডানে / পরে সরান"
                                >
                                  <i className="fas fa-arrow-right text-[11px]"></i>
                                </button>
                              </div>

                              <div className="flex items-center gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => handleStartEditGalleryPhoto(item)}
                                  className="px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                                >
                                  <i className="fas fa-edit text-[10px]"></i> সম্পাদনা
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteGalleryPhoto(item.id)}
                                  className="w-7 h-7 rounded-lg text-red-500 hover:bg-red-50 flex items-center justify-center transition-colors cursor-pointer"
                                  title="মুছে ফেলুন"
                                >
                                  <i className="fas fa-trash-alt text-xs"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* 16. Security & Credentials Tab */}
          {activeTab === 'security' && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-xl mx-auto">
              <div className="flex items-center gap-3 pb-4 border-b mb-6">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-xl border border-rose-200">
                  <i className="fas fa-shield-halved"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">এডমিন আইডি ও পাসওয়ার্ড পরিবর্তন</h3>
                  <p className="text-xs text-gray-500 mt-0.5">প্যানেলে প্রবেশের ইউজার আইডি ও নিরাপদ পাসওয়ার্ড হালনাগাদ করুন</p>
                </div>
              </div>

              {credMsg.text && (
                <div className={`p-4 rounded-xl mb-5 text-sm font-medium border flex items-center gap-2.5 ${
                  credMsg.type === 'success'
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-rose-50 text-rose-800 border-rose-200'
                }`}>
                  <i className={`fas ${credMsg.type === 'success' ? 'fa-check-circle text-emerald-600' : 'fa-circle-exclamation text-rose-600'}`}></i>
                  <span>{credMsg.text}</span>
                </div>
              )}

              <form onSubmit={handleUpdateCredentials} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    এডমিন ইউজার আইডি / ইমেইল *
                  </label>
                  <input
                    type="text"
                    required
                    value={credForm.username}
                    onChange={(e) => setCredForm({ ...credForm, username: e.target.value })}
                    placeholder="admin@manasamondirgoila.com"
                    className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none"
                  />
                  <p className="text-[11px] text-gray-500 mt-1">লগইনের জন্য এই ইউজার আইডিটি ব্যবহার করা হবে।</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    নতুন পাসওয়ার্ড (পরিবর্তন করতে চাইলে লিখুন)
                  </label>
                  <div className="relative">
                    <input
                      type={showCredPass ? 'text' : 'password'}
                      value={credForm.newPassword}
                      onChange={(e) => setCredForm({ ...credForm, newPassword: e.target.value })}
                      placeholder="কমপক্ষে ৪ অক্ষরের নতুন পাসওয়ার্ড"
                      className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCredPass(!showCredPass)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs p-1"
                    >
                      <i className={`fas ${showCredPass ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    নতুন পাসওয়ার্ড নিশ্চিত করুন
                  </label>
                  <input
                    type={showCredPass ? 'text' : 'password'}
                    value={credForm.confirmPassword}
                    onChange={(e) => setCredForm({ ...credForm, confirmPassword: e.target.value })}
                    placeholder="নতুন পাসওয়ার্ডটি আবার লিখুন"
                    className="w-full px-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none"
                  />
                </div>

                <div className="pt-3 border-t flex justify-end">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-bold px-7 py-3 rounded-xl transition-all shadow-md flex items-center gap-2 text-sm disabled:opacity-50"
                  >
                    {isSaving ? <><i className="fas fa-spinner fa-spin"></i> সংরক্ষণ হচ্ছে...</> : <><i className="fas fa-key"></i> পাসওয়ার্ড সংরক্ষণ করুন</>}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Internal Custom Confirmation Modal (Completely replaces native browser confirm) */}
      {internalConfirm && internalConfirm.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-sm sm:max-w-md w-full p-6 shadow-2xl border border-gray-100 text-center transform transition-all scale-100">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-inner">
              <i className="fas fa-trash-alt"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{internalConfirm.title}</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed px-2">{internalConfirm.message}</p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setInternalConfirm(prev => ({ ...prev, isOpen: false }))}
                className="flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl text-sm transition-colors cursor-pointer"
              >
                বাতিল
              </button>
              <button
                type="button"
                onClick={async () => {
                  const action = internalConfirm.onConfirm;
                  setInternalConfirm(prev => ({ ...prev, isOpen: false }));
                  if (action) await action();
                }}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <i className="fas fa-check"></i> হ্যাঁ, মুছে ফেলুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


function App() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('site_lang') || 'bn';
    } catch (e) {
      return 'bn';
    }
  });

  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash.replace('#', '') || 'home';
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dbError, setDbError] = useState(false);

  const [marqueeText, setMarqueeText] = useState(() => {
    try {
      const saved = localStorage.getItem('temple_marquee');
      if (saved) return saved;
    } catch (e) {}
    return PRELOADED_DATA.marquee || 'মন্দিরে স্বাগতম ✦ মায়ের আশীর্বাদ আপনার সহায় হোক ✦ ঐশ্বরিক উপস্থিতি অনুভব করুন';
  });
  const [marqueeTextEn, setMarqueeTextEn] = useState(() => {
    try {
      const saved = localStorage.getItem('temple_marquee_en');
      if (saved) return saved;
    } catch (e) {}
    return '';
  });
  const [featuredTestimonialIds, setFeaturedTestimonialIds] = useState(() => {
    try {
      const saved = localStorage.getItem('temple_featured_test_ids');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return PRELOADED_DATA.featuredTestimonialIds || [5, 6, 4, 8];
  });
  const [committeeMembers, setCommitteeMembers] = useState(() => {
    try {
      const saved = localStorage.getItem('temple_committee');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return PRELOADED_DATA.committee || [];
  });
  const [testimonials, setTestimonials] = useState(() => {
    try {
      const saved = localStorage.getItem('temple_testimonials');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return PRELOADED_DATA.testimonials || [];
  });
  const [events, setEvents] = useState(() => {
    try {
      const saved = localStorage.getItem('temple_events');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return PRELOADED_DATA.events || [];
  });
  const [notices, setNotices] = useState(() => {
    try {
      const saved = localStorage.getItem('temple_notices');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return PRELOADED_DATA.notices || [];
  });
  const [donations, setDonations] = useState(() => {
    try {
      const saved = localStorage.getItem('temple_donations');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return [];
  });

  // Features 3, 4, 5: Timings, Travel Guide, Sacred Mantras
  const [timings, setTimings] = useState(() => {
    try {
      const saved = localStorage.getItem('temple_timings');
      return saved ? JSON.parse(saved) : PRELOADED_DATA.timings;
    } catch (e) {
      return PRELOADED_DATA.timings;
    }
  });

  const [travelInfo, setTravelInfo] = useState(() => {
    try {
      const saved = localStorage.getItem('temple_travel');
      return saved ? JSON.parse(saved) : PRELOADED_DATA.travel;
    } catch (e) {
      return PRELOADED_DATA.travel;
    }
  });

  const [mantras, setMantras] = useState(() => {
    try {
      const saved = localStorage.getItem('temple_mantras');
      return saved ? JSON.parse(saved) : PRELOADED_DATA.mantras;
    } catch (e) {
      return PRELOADED_DATA.mantras;
    }
  });

  const [pujaBookings, setPujaBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('mmg_puja_bookings');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [donationReceipts, setDonationReceipts] = useState(() => {
    try {
      const saved = localStorage.getItem('mmg_donation_receipts') || localStorage.getItem('temple_donation_receipts');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      return DEFAULT_DONATION_RECEIPTS;
    } catch (e) {
      return DEFAULT_DONATION_RECEIPTS;
    }
  });

  const [royaniPalas, setRoyaniPalas] = useState(() => {
    try {
      const saved = localStorage.getItem('temple_royani_palas');
      return saved ? JSON.parse(saved) : DEFAULT_ROYANI_PALAS;
    } catch (e) {
      return DEFAULT_ROYANI_PALAS;
    }
  });

  const [templeHistory, setTempleHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('temple_history_data');
      return saved ? JSON.parse(saved) : DEFAULT_TEMPLE_HISTORY;
    } catch (e) {
      return DEFAULT_TEMPLE_HISTORY;
    }
  });

  const [galleryItems, setGalleryItems] = useState(() => {
    try {
      const saved = localStorage.getItem('temple_gallery_items');
      return saved ? JSON.parse(saved) : DEFAULT_GALLERY_ITEMS;
    } catch (e) {
      return DEFAULT_GALLERY_ITEMS;
    }
  });

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    try {
      return localStorage.getItem('temple_admin_logged_in') === 'true';
    } catch (e) {
      return false;
    }
  });

  const [adminCredentials, setAdminCredentials] = useState(() => {
    try {
      const saved = localStorage.getItem('temple_admin_credentials');
      if (saved) return JSON.parse(saved);
    } catch (e) { }
    return { username: 'admin@manasamondirgoila.com', password: 'admin1234' };
  });

  const audioRef = useRef(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const userPausedRef = useRef(false);

  // Initialize and handle Theme Music (Auto-play when newly opened)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.55;

    // Helper to start playback smoothly
    const startAudio = () => {
      if (userPausedRef.current) return Promise.resolve();
      if (!audio.paused) {
        setIsMusicPlaying(true);
        return Promise.resolve();
      }
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        return playPromise.then(() => {
          setIsMusicPlaying(true);
          removeGestureListeners();
        }).catch(() => {
          // Autoplay blocked before interaction; keep listeners active
          setIsMusicPlaying(false);
        });
      }
      return Promise.resolve();
    };

    // 1. Immediate autoplay attempt on initial page load
    startAudio();

    // 2. Fallback for strict browser autoplay policies:
    // Automatically trigger on the very first user interaction (click, tap, key press)
    const onUserInteraction = () => {
      if (!userPausedRef.current) {
        startAudio();
      }
    };

    const gestureEvents = ['click', 'pointerdown', 'touchstart', 'touchend', 'keydown'];
    const removeGestureListeners = () => {
      gestureEvents.forEach(evt => {
        document.removeEventListener(evt, onUserInteraction, true);
        window.removeEventListener(evt, onUserInteraction, true);
      });
    };

    gestureEvents.forEach(evt => {
      document.addEventListener(evt, onUserInteraction, { capture: true });
      window.addEventListener(evt, onUserInteraction, { capture: true });
    });

    const onPlay = () => setIsMusicPlaying(true);
    const onPause = () => setIsMusicPlaying(false);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      removeGestureListeners();
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMusicPlaying) {
      audio.pause();
      userPausedRef.current = true;
      setIsMusicPlaying(false);
      showToast(t('musicPaused', lang));
    } else {
      userPausedRef.current = false;
      audio.play().then(() => {
        setIsMusicPlaying(true);
        showToast(t('musicPlaying', lang));
      }).catch(err => {
        console.error('Audio play error:', err);
      });
    }
  };


  // Global Toast State
  const [toastMsg, setToastMsg] = useState('');

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  useEffect(() => {
    try {
      document.documentElement.lang = lang;
      if (lang === 'en') {
        document.title = "Shree Shree Maa Manasa Mandir, Goila - Sacred Historic Temple";
      } else {
        document.title = "শ্রী শ্রী মা মনসা মন্দির, গৈলা - ঐতিহাসিক পবিত্র তীর্থস্থান";
      }
    } catch (e) { }
  }, [lang]);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [currentPage]);

    // Universal Realtime Database Sync across all mobile devices & desktops
  useEffect(() => {
    if (!supabaseClient) return;

    // Supabase Realtime Postgres Changes & Global Broadcast Channel
    const channel = supabaseClient
      .channel('temple_universal_db_sync')
      .on('broadcast', { event: 'db_sync' }, () => {
        fetchData();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'settings' }, () => {
        fetchData();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'committee' }, () => {
        fetchData();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'testimonials' }, () => {
        fetchData();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'events' }, () => {
        fetchData();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'notices' }, () => {
        fetchData();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'donations' }, () => {
        fetchData();
      })
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          window.__supabaseSyncChannel = channel;
        }
      });

    window.__supabaseSyncChannel = channel;

    // Cross-tab BroadcastChannel
    let bc;
    try {
      bc = new BroadcastChannel('mmg_universal_sync');
      bc.onmessage = (event) => {
        if (event.data === 'sync' || event.data?.type === 'sync') {
          fetchData();
        }
      };
    } catch (e) {}

    // Tab visibility & focus re-validation
    const handleRevalidate = () => {
      if (document.visibilityState === 'visible') {
        fetchData();
      }
    };
    window.addEventListener('focus', handleRevalidate);
    document.addEventListener('visibilitychange', handleRevalidate);

    // Periodic heartbeat sync every 20 seconds (plus instant on tab focus & broadcast)
    const interval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        fetchData();
      }
    }, 20000);

    return () => {
      supabaseClient.removeChannel(channel);
      if (window.__supabaseSyncChannel === channel) {
        window.__supabaseSyncChannel = null;
      }
      if (bc) bc.close();
      window.removeEventListener('focus', handleRevalidate);
      document.removeEventListener('visibilitychange', handleRevalidate);
      clearInterval(interval);
    };
  }, [supabaseClient]);

  useEffect(() => {
    fetchData();
    const checkSession = async () => {
      try {
        if (localStorage.getItem('temple_admin_logged_in') === 'true') {
          setIsAdminAuthenticated(true);
          return;
        }
      } catch (e) { }
      try {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (session) setIsAdminAuthenticated(true);
      } catch (e) { }
    };
    checkSession();
  }, []);

  async function fetchData() {
    setDbError(false);
    try {
      // Parallelize all queries across HTTP/2 multiplexing for instant response
      const [
        settingsRes,
        committeeRes,
        testimonialsRes,
        eventsRes,
        noticesRes,
        donationsRes
      ] = await Promise.allSettled([
        supabaseClient.from('settings').select('id, key, value'),
        supabaseClient.from('committee').select('id, name, role, phone, order_idx, image').order('order_idx', { ascending: true }).order('id', { ascending: true }),
        supabaseClient.from('testimonials').select('*').order('date', { ascending: false }).order('id', { ascending: false }),
        supabaseClient.from('events').select('id, title, date, description, image').order('date', { ascending: false }).order('id', { ascending: false }),
        supabaseClient.from('notices').select('*').order('date', { ascending: false }).order('id', { ascending: false }),
        supabaseClient.from('donations').select('*').order('id', { ascending: false })
      ]);

      // 1. Process Settings (excluding heavy events_media)
      if (settingsRes.status === 'fulfilled' && settingsRes.value.data) {
        const settingsData = settingsRes.value.data;
        const mq = settingsData.find(s => s.key === 'marquee');
        if (mq && mq.value) {
          setMarqueeText(mq.value);
          try { localStorage.setItem('temple_marquee', mq.value); } catch (e) { }
        }
        const mqEn = settingsData.find(s => s.key === 'marquee_en');
        if (mqEn && mqEn.value) {
          setMarqueeTextEn(mqEn.value);
          try { localStorage.setItem('temple_marquee_en', mqEn.value); } catch (e) { }
        }
        const ft = settingsData.find(s => s.key === 'featured_test_ids');
        if (ft && ft.value) {
          try {
            setFeaturedTestimonialIds(JSON.parse(ft.value));
            localStorage.setItem('temple_featured_test_ids', ft.value);
          } catch (e) { }
        }

        const tm = settingsData.find(s => s.key === 'temple_timings');
        if (tm && tm.value) {
          try {
            const parsed = JSON.parse(tm.value);
            setTimings(parsed);
            localStorage.setItem('temple_timings', tm.value);
          } catch (e) { }
        }

        const tr = settingsData.find(s => s.key === 'travel_info');
        if (tr && tr.value) {
          try {
            const parsed = JSON.parse(tr.value);
            setTravelInfo(parsed);
            localStorage.setItem('temple_travel', tr.value);
          } catch (e) { }
        }

        const sm = settingsData.find(s => s.key === 'sacred_mantras');
        if (sm && sm.value) {
          try {
            const parsed = JSON.parse(sm.value);
            setMantras(parsed);
            localStorage.setItem('temple_mantras', sm.value);
          } catch (e) { }
        }

        const ac = settingsData.find(s => s.key === 'admin_credentials');
        if (ac && ac.value) {
          try {
            const parsed = JSON.parse(ac.value);
            setAdminCredentials(parsed);
            localStorage.setItem('temple_admin_credentials', ac.value);
          } catch (e) { }
        }

        const pb = settingsData.find(s => s.key === 'puja_bookings');
        if (pb && pb.value) {
          try {
            const parsed = JSON.parse(pb.value);
            setPujaBookings(parsed);
            localStorage.setItem('mmg_puja_bookings', pb.value);
          } catch (e) { }
        }

        const dr = settingsData.find(s => s.key === 'donation_receipts');
        if (dr && dr.value) {
          try {
            const parsed = JSON.parse(dr.value);
            setDonationReceipts(parsed);
            localStorage.setItem('mmg_donation_receipts', dr.value);
          } catch (e) { }
        }

        const rp = settingsData.find(s => s.key === 'royani_palas');
        if (rp && rp.value) {
          try {
            const parsed = JSON.parse(rp.value);
            setRoyaniPalas(parsed);
            localStorage.setItem('temple_royani_palas', rp.value);
          } catch (e) { }
        }

        const th = settingsData.find(s => s.key === 'temple_history');
        if (th && th.value) {
          try {
            const parsed = JSON.parse(th.value);
            setTempleHistory(parsed);
            localStorage.setItem('temple_history_data', th.value);
          } catch (e) { }
        }

        const gi = settingsData.find(s => s.key === 'gallery_items');
        if (gi && gi.value) {
          try {
            const parsed = JSON.parse(gi.value);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setGalleryItems(parsed);
              localStorage.setItem('temple_gallery_items', gi.value);
            }
          } catch (e) { }
        }
      }

      // 2. Process Committee
      if (committeeRes.status === 'fulfilled' && committeeRes.value.data) {
        const committeeData = committeeRes.value.data;
        const mappedCommittee = committeeData.map(m => {
          const local = PRELOADED_DATA.committee.find(p => p.id === m.id);
          const img = m.image || (local && local.image) || `images/committee/member_${m.id}.jpg`;
          return { ...m, image: img };
        });
        setCommitteeMembers(mappedCommittee);
        try { localStorage.setItem('temple_committee', JSON.stringify(mappedCommittee)); } catch (e) { }
      }

      // 3. Process Testimonials
      if (testimonialsRes.status === 'fulfilled' && testimonialsRes.value.data) {
        const testimonialsData = testimonialsRes.value.data;
        setTestimonials(testimonialsData);
        try { localStorage.setItem('temple_testimonials', JSON.stringify(testimonialsData)); } catch (e) { }
      }

      // 4. Process Events (with universal media from cloud settings)
      if (eventsRes.status === 'fulfilled' && eventsRes.value.data) {
        const eventsData = eventsRes.value.data;
        let eventsMediaMap = {};
        if (settingsRes.status === 'fulfilled' && settingsRes.value.data) {
          const emRow = settingsRes.value.data.find(s => s.key === 'events_media');
          if (emRow && emRow.value) {
            try { eventsMediaMap = JSON.parse(emRow.value) || {}; } catch (e) {}
          }
        }
        if (Object.keys(eventsMediaMap).length === 0) {
          try {
            const raw = localStorage.getItem('temple_events_media');
            if (raw) eventsMediaMap = JSON.parse(raw) || {};
          } catch (e) {}
        }

        const mappedEvents = eventsData.map(ev => {
          const local = (PRELOADED_DATA.events || []).find(p => p.id === ev.id);
          const imgSrc = ev.image || (local && local.image) || `images/events/event_${ev.id}.jpg`;
          const media = eventsMediaMap[ev.id] || {};
          const images = (media.images && media.images.length > 0) ? media.images : (imgSrc ? [imgSrc] : []);
          return {
            ...ev,
            image: imgSrc,
            images: images,
            video: media.video || null
          };
        });
        setEvents(mappedEvents);
        try { localStorage.setItem('temple_events', JSON.stringify(mappedEvents)); } catch (e) { }
        try { localStorage.setItem('temple_events_media', JSON.stringify(eventsMediaMap)); } catch (e) { }
      }

      // 5. Process Notices (CRITICAL: Instant update & cached for next refresh)
      if (noticesRes.status === 'fulfilled' && noticesRes.value.data) {
        const noticesData = noticesRes.value.data;
        setNotices(noticesData);
        try { localStorage.setItem('temple_notices', JSON.stringify(noticesData)); } catch (e) { }
      }

      // 6. Process Donations
      if (donationsRes.status === 'fulfilled' && donationsRes.value.data) {
        const dData = donationsRes.value.data;
        setDonations(dData);
        try { localStorage.setItem('temple_donations', JSON.stringify(dData)); } catch (e) { }
      }


    } catch (error) {
      console.error("Supabase Database Error:", error);
    }
  };

  const navigateTo = (page) => {
    setIsMenuOpen(false);
    if (currentPage === page) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      window.location.hash = page;
      setCurrentPage(page);
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home dbError={dbError} marqueeText={marqueeText} marqueeTextEn={marqueeTextEn} testimonials={testimonials} featuredTestimonialIds={featuredTestimonialIds} committeeMembers={committeeMembers} events={events} notices={notices} timings={timings} travelInfo={travelInfo} mantras={mantras} galleryItems={galleryItems} navigateTo={navigateTo} showToast={showToast} lang={lang} />;
      case 'timings': return <TimingsPage timings={timings} navigateTo={navigateTo} lang={lang} />;
      case 'travel': return <TravelPage travelInfo={travelInfo} navigateTo={navigateTo} lang={lang} showToast={showToast} />;
      case 'mantras': return <MantrasPage mantras={mantras} navigateTo={navigateTo} lang={lang} showToast={showToast} />;
      case 'committee': return <CommitteePage committeeMembers={committeeMembers} navigateTo={navigateTo} lang={lang} />;
      case 'testimonials': return <TestimonialsPage testimonials={testimonials} navigateTo={navigateTo} lang={lang} />;
      case 'donation': return <DonationPage donations={donations} donationReceipts={donationReceipts} setDonationReceipts={setDonationReceipts} supabaseClient={supabaseClient} navigateTo={navigateTo} showToast={showToast} lang={lang} />;
      case 'history': return <HistoryPage templeHistory={templeHistory} navigateTo={navigateTo} lang={lang} />;
      case 'booking': return <BookingPage pujaBookings={pujaBookings} setPujaBookings={setPujaBookings} supabaseClient={supabaseClient} navigateTo={navigateTo} showToast={showToast} lang={lang} />;
      case 'royani': return <RoyaniPage royaniPalas={royaniPalas} navigateTo={navigateTo} showToast={showToast} lang={lang} />;
      case 'event': return <EventsPage events={events} navigateTo={navigateTo} showToast={showToast} lang={lang} />;
      case 'notice': return <NoticeBoardPage notices={notices} navigateTo={navigateTo} lang={lang} />;
      case 'admin': return <AdminPanel
        supabaseClient={supabaseClient} dbError={dbError} navigateTo={navigateTo}
        isAdminAuthenticated={isAdminAuthenticated} setIsAdminAuthenticated={setIsAdminAuthenticated}
        marqueeText={marqueeText} setMarqueeText={setMarqueeText}
        marqueeTextEn={marqueeTextEn} setMarqueeTextEn={setMarqueeTextEn}
        committeeMembers={committeeMembers} setCommitteeMembers={setCommitteeMembers}
        testimonials={testimonials} setTestimonials={setTestimonials}
        events={events} setEvents={setEvents} notices={notices} setNotices={setNotices}
        donations={donations} setDonations={setDonations}
        featuredTestimonialIds={featuredTestimonialIds} setFeaturedTestimonialIds={setFeaturedTestimonialIds}
        timings={timings} setTimings={setTimings}
        travelInfo={travelInfo} setTravelInfo={setTravelInfo}
        mantras={mantras} setMantras={setMantras}
        pujaBookings={pujaBookings} setPujaBookings={setPujaBookings}
        donationReceipts={donationReceipts} setDonationReceipts={setDonationReceipts}
        royaniPalas={royaniPalas} setRoyaniPalas={setRoyaniPalas}
        templeHistory={templeHistory} setTempleHistory={setTempleHistory}
        adminCredentials={adminCredentials} setAdminCredentials={setAdminCredentials}
        galleryItems={galleryItems} setGalleryItems={setGalleryItems}
        showToast={showToast}
      />;
      default: return <Home dbError={dbError} marqueeText={marqueeText} marqueeTextEn={marqueeTextEn} testimonials={testimonials} featuredTestimonialIds={featuredTestimonialIds} committeeMembers={committeeMembers} events={events} notices={notices} timings={timings} travelInfo={travelInfo} mantras={mantras} galleryItems={galleryItems} navigateTo={navigateTo} showToast={showToast} lang={lang} />;
    }
  };

  return (
    <div className="font-sans text-gray-900 selection:bg-yellow-300 selection:text-orange-900 overflow-x-hidden relative">

      {/* Global Toast Message */}
      {toastMsg && (
        <div className="fixed bottom-10 right-10 z-[100] bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 font-bold text-lg toast-animate border border-green-500">
          <i className="fas fa-check-circle text-2xl"></i> {toastMsg}
        </div>
      )}

      {currentPage !== 'admin' && <Header navigateTo={navigateTo} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} lang={lang} setLang={setLang} isMusicPlaying={isMusicPlaying} toggleMusic={toggleMusic} />}
      <main className="min-h-screen bg-white">
        {isLoading && currentPage === 'home' ? (
          <div className="flex flex-col gap-4 items-center justify-center h-screen bg-orange-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-600 drop-shadow-md"></div>
            <p className="text-orange-800 font-bold tracking-widest animate-pulse">{t('loading', lang)}</p>
          </div>
        ) : (
          renderPage()
        )}
      </main>
      {currentPage !== 'admin' && <Footer navigateTo={navigateTo} lang={lang} setLang={setLang} />}
      <audio ref={audioRef} id="global-audio" src="music/theme.mp3" loop preload="auto" autoPlay playsInline></audio>
      <FloatingMusicWidget isMusicPlaying={isMusicPlaying} toggleMusic={toggleMusic} lang={lang} />
      <ScrollToTop lang={lang} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
