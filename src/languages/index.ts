const languages = {
  aboutus: ['About Us', 'О нас', 'Biz haqimizda'],
  tatw: ['Tours around the world', 'Туры по всему миру', "Dunyo bo'ylab sayohatlar"],
  ttu: ['Tours to Uzbekistan', 'Туры в Узбекистан', "O'zbekistonga sayohatlar"],
  viu: ['Visas in Uzbekistan', 'Визы в Узбекистане', "O'zbekistonda vizalar"],
  photogallery: ['Photo gallery', 'Фотогалерея', 'Fotogalereya'],
  reviews: ['Reviews', 'Отзывы', 'Sharhlar'],
  contact: ['Contacts', 'Контакты', 'Kontaktlar'],
  aop: ['Acceptance of payments', 'Прием платежей', "To'lovlarni qabul qilish"],
  lmtft: [
    'Last minute tours from Tashkent',
    'Горящие туры из Ташкента',
    "Toshkentdan so'nggi daqiqali sayohatlar",
  ],
  request: ['Request a call', 'Заказать звонок', "Biz bilan bog'laning"],
  ttc: ['Tours to Cappadocia', 'Туры в Каппадокию', 'Kapadokiyaga sayohatlar'],
  ttcs: [
    '<b>Cappadocia</b> should definitely be added to the list of places to visit. Here tourists can expect rest for every taste: historical, cultural and educational programs, religious, pilgrimage, gastronomic tourism.',
    '<b>Каппадокия</b> непременно должна быть внесена в список мест, которые необходимо посетить. Здесь туристов ожидает отдых на любой вкус: историческая и культурно-познавательная программы, религиозный, паломнический, гастрономический туризм.',
    "Kapadokiya albatta tashrif buyuradigan joylar ro'yxatiga qo'shilishi kerak. Bu erda sayyohlar har qanday lazzat uchun dam olishni kutishlari mumkin: tarixiy, madaniy va ma'rifiy dasturlar, diniy, ziyorat, gastronomik turizm.",
  ],
  tti: ['Tours to Italy', 'Туры в Египет', 'Italiyaga sayohatlar'],
  ttic: [
    'A Mediterranean state in Southern Europe with a long coastline that has had a huge impact on Western culture and cuisine.',
    'Гостей ждут прекрасные условия для дайвинга, активная клубная жизнь и исторические места. Курортная зона включает в себя пять районов, которые находятся вдоль цепочки пляжей.',
    "G'arb madaniyati va oshxonasiga katta ta'sir ko'rsatgan uzun qirg'oq chizig'iga ega Janubiy Evropadagi O'rta er dengizi davlati.",
  ],
  hid: ['Holidays in Dubai', 'Отдых в Дубаи', 'Dubayda dam olish'],
  hids: [
    'Tours to the largest city of the UAE. Every year the tourist flow is estimated in thousands of people. Since holidays in Dubai are possible in summer and winter, this place is considered one of the most popular. The city is ready to surprise and excite even the most jaded travelers.',
    'Туры в крупнейший город ОАЭ. Ежегодно туристический поток исчисляется тысячами людей. Так как отдых в Дубае возможен летом и зимой, это место считается одним из самых популярных. Город готов удивлять и волновать даже самых пресыщенных путешественников.',
    "BAAning eng yirik shahriga sayohatlar. Har yili sayyohlar oqimi minglab odamlarni tashkil etadi. Dubayda yoz va qishda dam olish mumkin bo'lganligi sababli, bu joy eng mashhurlaridan biri hisoblanadi. Shahar hatto eng charchagan sayohatchilarni ham hayratda qoldirishga va hayajonga solishga tayyor.",
  ],
  tte: ['Tours to Egypt', 'Туры в Египет', 'Misrga sayohatlar'],
  ttes: [
    'It offers excellent diving conditions, an active club life and historical sites. The resort area includes five areas that are located along the chain of beaches.',
    'Гостей ждут прекрасные условия для дайвинга, активная клубная жизнь и исторические места. Курортная зона включает в себя пять районов, которые находятся вдоль цепочки пляжей.',
    "Bu ajoyib sho'ng'in sharoitlari, faol klub hayoti va tarixiy joylarni taklif etadi. Dam olish maskani plyajlar zanjiri bo'ylab joylashgan beshta hududni o'z ichiga oladi.",
  ],
  rhitm: [
    'Romantic holidays in the Maldives',
    'Романтический отдых на Мальдивах',
    'Maldiv orollarida romantik dam olish',
  ],
  rhitms: [
    '<b>The Maldives</b> is a classic of a comfortable and beautiful holiday on the shores of the azure ocean. Snow-white sands, extraordinary beauty of water and ubiquitous sprawling palm trees are the hallmark of the islands. Luxurious hotels are located here, which welcome tourists with open arms all year round.',
    '<b>Мальдивы</b> – это классика комфортного и красивого отдыха на берегу лазурного океана. Белоснежные пески, необыкновенной красоты вода и вездесущие раскидистые пальмы – это визитная карточка островов. Здесь расположены роскошные отели, которые с распростертыми объятиями принимают туристов круглый год.',
    "Maldiv orollari - jozibali okean qirg'og'ida qulay va chiroyli dam olishning klassikasi. Qor-oq qumlar, suvning ajoyib go'zalligi va hamma joyda keng tarqalgan palma daraxtlari orollarning o'ziga xos belgisidir. Bu yerda yil davomida sayyohlarni quchoq ochib kutib oladigan hashamatli mehmonxonalar joylashgan.",
  ],
  toatw: [
    'Tours online around the world',
    'Туры онлайн по всему миру',
    "Dunyo bo'ylab onlayn sayohatlar",
  ],
  tatftltoiu: [
    'Tours and tours from the leading tour operator in Uzbekistan',
    'Туры и путевки от ведущего туроператора в Узбекистане',
    "O'zbekistondagi yetakchi turoperatordan turlar va sayohatlar",
  ],
  name: ['Name', 'Ваше имя', 'Ismingiz'],
  phonenumber: ['Phone number', 'Номер телефона', 'Telefon raqamingiz'],
  agree: [
    'I agree to the processing of my personal data',
    'Я согласен на обработку моих персональных данных',
    "Men shaxsiy ma'lumotlarimni qayta ishlashga roziman",
  ],
  pick: ['Pick me a tour', 'Подберите мне тур', 'Habarni yuboring'],
  required: [
    'This field is required',
    'Это поле обязательно к заполнению',
    'Ushbu qator to’ldirilishi shart',
  ],
  tourprices: ['Tour prices', 'Цены на туры', 'Tur narxlari'],
  tlpit: [
    'The lowest prices in Tashkent',
    'Самые низкие цены в Ташкенте',
    'Eng arzon narxlar Toshkentda',
  ],
  uniquetours: ['Unique tours', 'Уникальные туры', 'Noyob sayohatlar'],
  csoht: [
    'Convenient showcase of hot tours',
    'Удобная витрина горящих туров',
    "Issiq turlarning qulay ko'rgazmasi",
  ],
  years10: ['10 years on the market', '10 лет на рынке', 'Turizm sohasida 10 yil'],
  rcrr: [
    'Reliable company, received recognition',
    'Надёжная компания, получили признание',
    'Ishonchli kompaniya',
  ],
  htatw: [
    'Hot tours around the world',
    'Горящие туры по всему миру',
    "Dunyo bo'ylab issiq sayohatlar",
  ],
  hutbutts: [
    'Hurry uo to book unforgettable tours this summer',
    'Успейте забронировать незабываемые туры этим летом',
    'Bu yozda unutilmas sayohatlarni bron qilishga shoshiling',
  ],
  egypt: ['Egypt', 'Египет', 'Misr'],
  egyptc: [
    'On the Red and Mediterranean Seas there are numerous resorts for lovers of diving, surfing and similar hobbies',
    'На Красном и Средиземном морях расположены многочисленные курорты для любителей дайвинга, сёрфинга и тому подобных увлечений.',
    "Qizil va O'rta er dengizlarida sho'ng'in, serfing va shunga o'xshash sevimli mashg'ulotlarni sevuvchilar uchun ko'plab kurortlar mavjud.",
  ],
  turkey: ['Turkey', 'Турция', 'Turkiya'],
  turkeyc: [
    'Tourists are attracted by the famous Hagia Sophia with its soaring dome and mosaics, the majestic Blue Mosque.',
    'Туристов привлекают знаменитый собор Святой Софии с его устремленным ввысь куполом и мозаиками, величественная Голубая мечеть.',
    "Sayyohlarni o'zining baland gumbazi va mozaikalari bilan mashhur Ayasofya, ulug'vor Moviy masjid o'ziga jalb qiladi.",
  ],
  greece: ['Greece', 'Греция', 'Gretsiya'],
  greecec: [
    'The black sand beaches of Santorini, the resorts of Mykonos and other summer vacation spots are popular with tourists.',
    'У туристов пользуются популярностью пляжи острова Санторини с черным песком, курорты острова Миконос и другие места летнего отдыха.',
    'Santorinining qora qumli plyajlari, Mikonos kurortlari va boshqa yozgi dam olish maskanlari sayyohlar orasida mashhur.',
  ],
  dubai: ['Dubai', 'Дубаи', 'Dubay'],
  dubaic: [
    'City and emirate on the coast of the Persian Gulf in the United Arab Emirates, which is famous for its luxurious shops, architecture.',
    'Город и эмират на побережье Персидского залива в Объединенных Арабских Эмиратах, который славится своими роскошными магазинами, архитектурой.',
    "Birlashgan Arab Amirliklarida Fors ko'rfazi sohilidagi shahar va amirlik o'zining hashamatli do'konlari, arxitekturasi bilan mashhur.",
  ],
  italy: ['Italy', 'Италия', 'Italiya'],
  italyc: [
    'A Mediterranean state in Southern Europe with a long coastline that has had a huge impact on Western culture and cuisine.',
    'Средиземноморское государство в Южной Европе с длинной береговой линией, которое оказало огромное влияние на западную культуру и кухню.',
    "G'arb madaniyati va oshxonasiga katta ta'sir ko'rsatgan uzun qirg'oq chizig'iga ega Janubiy Evropadagi O'rta er dengizi davlati.",
  ],
  maldives: ['Maldives', 'Мальдивы', 'Maldiv orollari'],
  maldivesc: [
    'In the capital, Male, the bustling fish market, the restaurants and shops on the main road of Mejede Magu, and the Hukuru Miski Mosque are worth a visit.',
    'В столице страны Мале стоит посетить оживленный рыбный рынок, рестораны и магазины на главной дороге Меджеде-Магу, а также мечеть Хукуру-Миский.',
    "Poytaxt Maleda gavjum baliq bozori, Mejede Maguning asosiy yo'lidagi restoran va do'konlar, Hukuru Miski masjidi tashrif buyurishga arziydi.",
  ],
  bookatour: ['Book a tour', 'Забронировать тур', 'Turni bron qiling'],
  uttsu: [
    'Unique tours to Sunny Uzbekistan',
    'Уникальные туры в Солнечный Узбекистан',
    "Quyoshli O'zbekistonga noyob sayohatlar",
  ],
  khiva: ['Khiva', 'Хива', 'Xiva'],
  kokand: ['Kokand', 'Коканд', "Qo'qon"],
  shakhrisabz: ['Shakhrisabz', 'Шахрисабз', 'Shahrisabz'],
  karakalpakstan: ['Karakalpakstan', 'Каракалпакстан', "Qoraqalpog'iston"],
  ritmou: [
    'Rest in the mountains of Uzbekistan',
    'Отдых в горах Узбекистана',
    "O'zbekiston tog'larida dam oling",
  ],
  samarkand: ['Samarkand', 'Самарканд', 'Samarqand'],
  bukhara: ['Bukhara', 'Бухара', 'Buxoro'],
  prn: ['Pay right now!', 'Оплатите прямо сейчас!', "Sayohatlarni qulay ravishda to'lang"],
  pac: ['Payment amount, сўм', 'Сумма платежа, сўм', "To'lov miqdori, сўм"],
  email: ['E-mail', 'E-mail', 'E-mail'],
  comment: ['Comment', 'Комментарий', 'Izoh'],
  ycpw: ['You can pay with', 'Вы сможете оплатить с помощью:', "... bilan to'lashingiz mumkin:"],
  pay: ['Pay', 'Оплатить', 'Pay'],
  viuc: [
    '<p>Obtaining visas in Tashkent is very simple if you turn to specialists. If, nevertheless, you want to make a visa yourself, then get ready to spend time and understand the requirements of embassies. Find information about the location of the visa center, find out its opening hours. Correctly fill out the visa application form, taking into account the requirements for filling. Some forms must be completed electronically. And finally, when you have collected all the documents and came to the visa center, you will be at the closed doors, since you did not sign up for the biometrics, and the appointment may be several days in advance. We get lost time and a disrupted trip.</p><br /><p>Making a passport or visa is simplified tenfold by contacting specialists. Since we have been working in this area for many years and we have already developed an algorithm for working with embassies and visa centers. As a result, you get visas on time, with minimal effort and energy.</p>',
    '<p>Получить визы в Ташкенте очень просто, если обратиться к специалистам. Если же, все-таки, хотите делать визу самостоятельно, то готовьтесь потратить времени и разобраться в требованиях посольств. Найти информацию о местонахождении визового центра, узнать время его работы. Правильно заполнить визовую анкету, с учетом требований к заполнению. Некоторые анкеты обязательно заполнять в электронном виде. И наконец, когда вы собрали все документы и пришли в визовый центр, оказаться у закрытых дверей, так как вы не записались на сдачу биометрии, а запись может быть на несколько дней вперед. Получаем потерянное время и сорванную поездку.</p><br /><p>Оформление загранпаспорта или визы упрощается в десятки раз, обратившись к специалистам. Так как мы работаем в этой сфере много лет и у нас уже отработан алгоритм работы с посольствами и визовыми центрами. В результате, вы получаете визы в срок, с минимальными затратами сил и энергии.</p>',
    "<p>Agar siz mutaxassislarga murojaat qilsangiz, Toshkentda viza olish juda oddiy. Agar siz o'zingiz viza olishni istasangiz, vaqt sarflashga va elchixonalarning talablarini tushunishga tayyor bo'ling. Viza markazining joylashuvi haqida ma'lumot toping, uning ish vaqtini bilib oling. To'ldirish talablarini inobatga olgan holda viza ariza shaklini to'g'ri to'ldiring. Ba'zi shakllar elektron shaklda to'ldirilishi kerak. Va nihoyat, barcha hujjatlarni yig'ib, viza markaziga kelganingizda, siz yopiq eshiklar oldida bo'lasiz, chunki siz biometrikaga yozilmagansiz va uchrashuv bir necha kun oldin bo'lishi mumkin. Biz vaqtni yo'qotamiz va sayohatni buzamiz.</p><br /><p>Pasport yoki vizani rasmiylashtirish mutaxassislarga murojaat qilish orqali o'n baravar soddalashtiriladi. Biz ko'p yillardan buyon ushbu sohada ishlaganimizdan beri elchixonalar va viza markazlari bilan ishlash algoritmini ishlab chiqdik. Natijada siz minimal kuch va kuch bilan o'z vaqtida viza olasiz.</p>",
  ],
  rathl: [
    'Recreation at the highest level!',
    'Отдых на самом высоком уровне!',
    'Eng yuqori darajada dam olish!',
  ],
  rathlc: [
    `The field of activity of <b>"MUSAFIRTOUR"</b> includes the whole range of services related to the provision of tourist trips. With us you can order a tour that will fully meet your needs and wishes. We will help you realize your dream of vacation, wherever you want to go, freeing you from the burdensome burden of collecting documents.`,
    'Сфера деятельности <b>«MUSAFIRTOUR»</b> включает весь спектр услуг, связанный с обеспечением туристических поездок. У нас вы сможете заказать тур, который будет полностью соответствовать вашим запросам и пожеланиям. Мы поможем осуществить вашу мечту об отдыхе, куда бы вы ни захотели отправиться, освободив вас от обременительной нагрузки сбора документов.',
    `<b>"JOY TRAVEL"</b> kompaniyasining faoliyat sohasi turistik sayohatlarni taqdim etish bilan bog\'liq xizmatlarning butun majmuasini o\'z ichiga oladi. Biz bilan siz o\'zingizning ehtiyojlaringiz va istaklaringizga to\'liq javob beradigan turga buyurtma berishingiz mumkin. Biz sizga ta\'til haqidagi orzuingizni ro\'yobga chiqarishga yordam beramiz, qayerga bormoqchi bo\'lsangiz ham, hujjatlarni yig\'ishning og\'ir yukidan xalos qilamiz.`,
  ],
  wylatfy: [
    'Would you like a tour for you?',
    'Хотите подберем Вам тур?',
    'Siz uchun turni tashkil qiberamiz',
  ],
  cotp: ['Check out the photos', 'Ознакомьтесь с фотографиями', "Fotosuratlarni ko'rib chiqing"],
  ffoc: ['Feedback from our clients', 'Отзывы наших клиентов', 'Mijozlarimizdan fikr-mulohazalar'],
  luhyfat: [
    'Let us help you find a tour!',
    'Поможем подобрать тур!',
    'Keling, sizga sayohatni topishga yordam beramiz!',
  ],
  yccuiacwooac: [
    'You can contact us in any convenient way or order a call',
    'Вы можете связаться с нами любым удобным способом или заказать звонок',
    "Biz bilan istalgan qulay usulda bog'lanishingiz yoki qo'ng'iroqqa buyurtma berishingiz mumkin",
  ],
  address: [
    'Uzbekistan, Tashkent city, Shaykhantakhur district, st. Samarkand Darvoza, 4A building, apt. 43',
    'Узбекистан, г. Ташкент, Шайхантахурский район, ​​​​​​​ул. Самарканд Дарвоза, 4А дом, кв.43',
    'Oʻzbekiston, Toshkent shahri, Shayxontoxur tumani, st. Samarqand Darvoza, 4A bino, 43-uy',
  ],
  wwcys: [
    'We will contact you shortly',
    'Свяжемся с вами в ближайшее время',
    "Tez orada siz bilan bog'lanamiz",
  ],
  send: ['Send a message', 'Отправить', 'Habarni yuboring'],
  cancel: ['Cancel', 'Отмена', 'Bekor qilish'],
  cac: ['Choose a country', 'Выберите страну', 'Mamlakatni tanlang'],
  traveldate: ['Travel date', 'Дата поездки', 'Sayohat sanasi'],
  adults: ['Adults', 'Взрослые', 'Kattalar'],
  children: ['Children', 'Дети', 'Yosh bolalar'],
  babies: ['Babies', 'Младенцы', 'Chaqaloqlar'],
  etdoac: [
    'Enter data to order a callback',
    'Введите данные для заказа обратного звонка',
    "Qayta qo'ng'iroqqa buyurtma berish uchun ma'lumotlarni kiriting",
  ],
}

export default languages
