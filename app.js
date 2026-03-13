/* =====================================================
   app.js — Telegram Bot + i18n (RU/UZ) + All Interactions
===================================================== */

/* ── Telegram Config ──────────────────────────────── */
const TG_TOKEN = '8736733769:AAGrZ7c8rCG87RJ_QSZ8S1g9p_PEOGPEBwo';
const TG_CHAT_ID = '-4996996247';

async function sendToTelegram(data) {
  const msg = `
🔔 <b>Новая заявка на менторство!</b>

👤 <b>Имя:</b> ${escHtml(data.name)}
📱 <b>Соцсеть:</b> ${escHtml(data.social)}
🎯 <b>Ниша:</b> ${escHtml(data.niche)}
💰 <b>Доход:</b> ${escHtml(data.income)}
🚀 <b>Цель:</b> ${escHtml(data.goal)}
🌐 <b>Язык сайта:</b> ${(window._currentLang || 'ru').toUpperCase()}
`.trim();

  const resp = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TG_CHAT_ID, text: msg, parse_mode: 'HTML' })
  });
  if (!resp.ok) throw new Error('Telegram error ' + resp.status);
  return resp.json();
}

function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* ── i18n Translations ────────────────────────────── */
const I18N = {
  ru: {
    nav_about: "Обо мне", nav_process: "Процесс", nav_results: "Результаты", nav_pricing: "Стоимость",
    cta_apply: "Подать заявку",
    hero_badge: "50+ студентов уже прошли трансформацию",
    hero_h1_1: "Я строю личные бренды,", hero_h1_2: "которые приносят",
    hero_h1_3: " клиентов,", hero_h1_4: "авторитет и доход",
    hero_sub: "За 2 месяца совместной работы я помогу вам перейти от невидимости к признанному авторитету в вашей нише. Без воды — только реальные инструменты и ежедневная поддержка.",
    hero_proof: 'Уже со мной <strong>50+ экспертов</strong> — <span class="text-accent">~70% достигли сильного роста</span>',
    cta_apply_full: "Подать заявку на менторство", cta_call: "Записаться на звонок",
    stat_students: "Студентов", stat_growth: "Добились роста", stat_months: "Месяца", stat_spots: "Мест",
    scroll_hint: "Прокрутите вниз",
    photo_hint: "Добавьте<br/>ваше фото",
    hero_img_badge: "Ментор по личному бренду",
    his_label: "Трансформаций",
    hooks_eyebrow: "Правда о личном бренде",
    hooks_title1: "Если вы узнаёте себя —", hooks_title2: "читайте дальше.",
    hook1: '"Невидимых экспертов <strong>не покупают.</strong>"',
    hook2: '"Если контент не приносит клиентов — <strong>он сломан.</strong>"',
    hook3: '"Подписчики не важны. Важен <strong>авторитет.</strong>"',
    hook4: '"Ваши знания ценны — но ваше <strong>позиционирование слабое.</strong>"',
    hook5: '"Личный бренд — самый <strong>прибыльный актив</strong> сегодня."',
    hook6: '"Хватит ждать. <strong>Займите позицию эксперта.</strong>"',
    problem_eyebrow: "Настоящая проблема",
    problem_title1: "Вы эксперт.", problem_title3: "Но вас никто не замечает.",
    problem_sub: "Я видел это сотни раз. Умные, компетентные люди остаются невидимыми, пока менее квалифицированные конкуренты забирают их клиентов.",
    p1_title: "Нулевая видимость", p1_desc: "Вы создаёте контент, но вас никто не видит. Вы растворяетесь в шуме, пока менее компетентные люди забирают внимание аудитории.",
    p2_title: "Нет потока клиентов", p2_desc: "Нет входящих заявок, нет DM, нет рефералов. Вы гонитесь за каждой возможностью вместо того, чтобы вас искали сами.",
    p3_title: "Хаотичный контент", p3_desc: "Вы публикуете без системы. Иногда «выстреливает», чаще нет. Без стратегии любые усилия — это азартная игра.",
    p4_title: "Непостоянный рост", p4_desc: "Редкие всплески — и снова тишина. У вас нет системы роста — только случайная удача.",
    p5_title: "Низкий авторитет", p5_desc: "Вас не воспринимают как эксперта №1. Вас видят одним из многих — и торгуются за цену.",
    p6_title: "Бесконечная гонка", p6_desc: "Больше работы — те же результаты. Без правильного позиционирования усилия не накапливаются — они истощают.",
    tr_eyebrow: "Что меняется",
    tr_title1: "Из невидимого эксперта", tr_title2: "в ", tr_title3: "признанный авторитет",
    before: "ДО", after: "ПОСЛЕ",
    b1: "Я веду вас к известности в нише", b2: "Постоянный поток клиентов", b3: "Контент, который конвертирует",
    b4: "Премиальные цены без торгов", b5: "Чёткое позиционирование", b6: "Системный контент-движок", b7: "Несколько источников дохода",
    a1: "Известный и уважаемый эксперт", a2: "Входящие премиальные клиенты", a3: "Контент, который конвертирует",
    a4: "Командование премиальными ценами", a5: "Чёткое позиционирование", a6: "Автоматизированная система контента", a7: "Несколько источников дохода",
    two_months: "2 месяца",
    auth_eyebrow: "Обо мне", auth_meet: "Меня зовут ", auth_badge: "Ментор по личному бренду",
    auth_tagline: '"Я строю личные бренды, которые меняют жизни людей через признание, доверие и авторитет."',
    auth_bio: "Я посвятил карьеру одной цели: помогать экспертам, предпринимателям и профессионалам создавать бренды, которые не просто красиво выглядят — они приносят реальные деньги. Моя методология основана на позиционировании, аутентичном сторителлинге и системном контенте. Никакой теории — только то, что реально работает.",
    auth_s1: "Студентов прошли менторство", auth_s2: "Достигли сильного роста", auth_s3: "Только практика",
    auth_phil: 'Ноль теории ради теории. В каждой сессии я фокусируюсь на создании <strong>реальных активов</strong> для вашей конкретной ниши.',
    proc_eyebrow: "Моя методология", proc_title1: "6 шагов к", proc_title2: "вашей трансформации",
    proc_sub: "Каждый шаг строится на предыдущем. Я провожу вас от неизвестного эксперта до монетизированного авторитета.",
    step1_title: "Позиционирование", step1_desc: "Вместе мы определяем ваше уникальное позиционирование — нишу, сообщение и аудиторию. Это фундамент всего.",
    step2_title: "Система контента", step2_desc: "Я помогаю построить системный контент-движок. Проверенные фреймворки, которые создают доверие и конверсии.",
    step3_title: "Рост аудитории", step3_desc: "Внедряем стратегии, которые привлекают правильных подписчиков — ваших будущих клиентов.",
    step4_title: "Создание продукта", step4_desc: "Мы создаём ваш флагманский оффер — курс, коучинг или консалтинг.",
    step5_title: "Запуск", step5_desc: "Мы вместе планируем и проводим запуск. Я помогаю создать ажиотаж и конвертировать аудиторию.",
    step6_title: "Монетизация", step6_desc: "Выстраиваем несколько источников дохода. Ваш авторитет — ваш главный актив.",
    feat_eyebrow: "Карта пути", feat_title1: "Всё, что я даю вам", feat_title2: "на пути к цели",
    feat_sub: "Каждый элемент программы — это шаг на пути от эксперта к признанному бренду",
    f1_title: "Персональная стратегия", f1_desc: "Глубокие сессии для построения вашей кастомной стратегии бренда.",
    f2_title: "Вирусные фреймворки", f2_desc: "Проверенные шаблоны для создания контента, который останавливает скролл и строит авторитет.",
    f3_title: "Система роста", f3_desc: "Пошаговые плейбуки, которые привлекают нужных людей — будущих клиентов.",
    f4_title: "Монетизация", f4_desc: "Как превращать аудиторию в доход. Упаковка экспертизы. Продажи без давления.",
    f5_title: "Создание продукта", f5_desc: "Дизайн и запуск первого цифрового продукта или премиального оффера.",
    f6_title: "Стратегия запуска", f6_desc: "Полная дорожная карта от прогрева до допродаж.",
    f7_title: "Ежедневная обратная связь", f7_desc: "Каждый день я разбираю ваш контент, стратегию и действия.",
    f8_title: "Библиотека уроков", f8_desc: "Все записи лекций, шаблоны и фреймворки останутся у вас навсегда.",
    res_eyebrow: "Результаты моих студентов",
    res_title1: "Реальные люди.", res_title2: "Реальные трансформации.",
    res_sub: "~70% моих выпускников достигают сильного роста аудитории за 2 месяца совместной работы.",
    t1_text: "Я выросла с 2 000 до 80 000 подписчиков за 8 недель. Что важнее — подписала 6 новых премиальных клиентов прямо во время менторства.",
    t1_name: "Айша К.", t1_role: "Бизнес-коуч", t1_result: "Рост аудитории",
    t2_text: "Запустил первый онлайн-курс на 6-й неделе и заработал $4 200 за первые 3 дня. Рустам помог мне просто взять и сделать это.",
    t2_name: "Михаил Т.", t2_role: "Консультант по маркетингу", t2_result: "Первый запуск",
    t3_text: "Подняла ставку с $150/час до $500/час после перепозиционирования. Теперь клиенты сами приходят ко мне.",
    t3_name: "Сара Л.", t3_role: "HR-консультант", t3_result: "Рост ставки",
    gs1: "Выпускников", gs2: "Достигли роста", gs3: "Инвестиция",
    price_eyebrow: "Инвестиция", price_title: "Одна цена. Полная трансформация.",
    scarcity: "ОГРАНИЧЕННЫЕ МЕСТА — Только 10–15 участников в группе",
    price_name: "Моё менторство по личному бренду", price_duration: "Программа на 2 месяца",
    price_desc: "Полный доступ к моей 2-месячной программе трансформации с ежедневной поддержкой.",
    pf1: "Персональные стратегические сессии со мной", pf2: "Мои вирусные контент-фреймворки",
    pf3: "Плейбуки роста аудитории", pf4: "Стратегия монетизации",
    pf5: "Создание вашего продукта вместе", pf6: "Планирование и запуск",
    pf7: "Ежедневная обратная связь от меня", pf8: "Доступ к библиотеке уроков навсегда",
    pf9: "Группа 10–15 участников",
    cta_apply_now: "Подать заявку — Занять место",
    price_note: "Требуется заявка. Места ограничены. Я отбираю участников лично по степени готовности.",
    faq_eyebrow: "Часто задают",
    faq_big: "ВОПРОСЫ?<br/>МЫ ЗДЕСЬ,<br/>ЧТОБЫ<br/>ПОМОЧЬ!",
    faq_left_sub: "Есть вопрос? Напишите — я отвечу лично в течение 24 часов.",
    faq1_q: "Нужно ли иметь большую аудиторию?",
    faq1_a: "Абсолютно нет. Многие мои лучшие выпускники начинали с нуля. Я учу строить правильную аудиторию — целевую, а не просто большую.",
    faq2_q: "Нужен ли опыт создания контента?",
    faq2_a: "Опыт не нужен. Я обучаю всему с нуля: как снимать, монтировать, писать цепляющие тексты и выстраивать присутствие с первого дня.",
    faq3_q: "Сколько времени нужно в неделю?",
    faq3_a: "Рассчитывайте на 1–2 часа в день: живые сессии, задания, создание и публикация контента.",
    faq4_q: "Что если я никогда не создавал контент?",
    faq4_a: "Отлично. Начало с нуля — это преимущество. Я строю ваш бренд с чистого листа с правильными основами.",
    faq5_q: "Каких результатов реально ожидать?",
    faq5_a: "~70% моих выпускников достигают сильного узнавания и роста аудитории за 2 месяца. Многие привлекают первых премиальных клиентов прямо во время программы.",
    faq6_q: "Это теория или реальная работа?",
    faq6_a: "100% внедрение. Каждая сессия заканчивается конкретным результатом — чем-то созданным или запущенным.",
    fcta_eyebrow: "Ваш выбор",
    fcta_title1: "Ваш личный бренд может", fcta_title2: "изменить всю вашу жизнь.",
    fcta_sub: "Эксперты, которые будут лидировать через 2 года, строят бренды прямо сейчас. Единственный вопрос: будете ли вы среди них?",
    fcta_urgency: "Следующий поток: Только 10–15 мест — Подайте заявку, пока они не заняты",
    footer_sub: "Менторство по личному бренду",
    footer_copy: "© 2026 Рустам. Все права защищены.",
    modal_badge: "Ограниченные места", modal_title: "Подать заявку на менторство",
    modal_sub: "Заполните форму — я лично рассмотрю заявку в течение 24 часов.",
    field_name: "Ваше имя *", field_social: "Instagram / Ссылка на соцсеть *",
    field_niche: "Ваша ниша / Экспертиза *", field_income: "Текущий доход в месяц *",
    income_select: "Выберите диапазон",
    income_1: "До $500/мес", income_2: "$500 – $2 000/мес",
    income_3: "$2 000 – $5 000/мес", income_4: "$5 000 – $10 000/мес", income_5: "Более $10 000/мес",
    field_goal: "Ваша главная цель от менторства? *",
    ph_name: "например, Алексей Иванов",
    ph_social: "@ваш_аккаунт",
    ph_niche: "например, коучинг, маркетинг, фитнес",
    ph_goal: "например, запустить первый продукт и привлечь 3 клиента...",
    submit_btn: "Отправить заявку",
    form_note: "Нажимая кнопку, вы соглашаетесь на связь через Telegram/WhatsApp для обсуждения заявки.",
    success_title: "Заявка отправлена! ✅",
    success_text: "Я лично получил вашу заявку и свяжусь с вами в течение 24 часов через Telegram или WhatsApp.",
    success_cta: "Написать мне в Telegram",
    push_title: "Мало мест осталось!",
    push_sub: "Только 3 свободных места в следующем потоке",
    prog_eyebrow: "Формат программы",
    prog_title1: "Что вас ждёт", prog_title2: "внутри менторства",
    fact1_title: "2 МЕСЯЦА ИНТЕНСИВА", fact1_desc: "Высокий темп, созданный для максимального внедрения и результата.",
    fact2_title: "ГРУППОВОЕ МЕНТОРСТВО", fact2_desc: "Ограничено 15 студентами для прямого доступа к эксперту.",
    fact3_title: "ЕЖЕДНЕВНЫЙ ФИДБЕК", fact3_desc: "Прямая обратная связь по вашему контенту и стратегии каждый день.",
    fact4_title: "ДОСТУП НАВСЕГДА", fact4_desc: "Все записи, шаблоны и фреймворки остаются у вас после программы.",
    prog_modules_title: "🗂 Что вы получите:",
    pm1: "Персональная стратегия бренда под вашу нишу",
    pm2: "Вирусные контент-фреймворки, которые конвертируют",
    pm3: "Плейбук роста — привлечение нужной аудитории",
    pm4: "Упаковка экспертизы в премиальный оффер",
    pm5: "Полный запуск вашего продукта или услуги",
    pm6: "Несколько источников дохода от личного бренда",
    prog_for_whom: "🎯 Идеально для:",
    fw1: "Предпринимателей", fw2: "Экспертов", fw3: "Консультантов", fw4: "Фрилансеров", fw5: "Профи своего дела",
    fw_note: "У вас должен быть существующий опыт или бизнес, чтобы получить максимум от программы.",
  },
  uz: {
    nav_about: "Men haqimda", nav_process: "Jarayon", nav_results: "Natijalar", nav_pricing: "Narx",
    cta_apply: "Ariza berish",
    hero_badge: "50+ talaba allaqachon o'zgarishni boshdan kechirdi",
    hero_h1_1: "Men shaxsiy brendlar yarataman,", hero_h1_2: "ular sizga olib keladi",
    hero_h1_3: " mijozlar,", hero_h1_4: "obro' va daromad",
    hero_sub: "2 oylik hamkorlik davomida men sizni ko'rinmaslikdan o'z sohangizdagi tan olingan mutaxassisga aylantirishga yordamlashaman. Nazariyasiz — faqat real vositalar va kunlik qo'llab-quvvatlash.",
    hero_proof: 'Men bilan allaqachon <strong>50+ mutaxassis</strong> — <span class="text-accent">~70% kuchli o\'sishga erishdi</span>',
    cta_apply_full: "Mentorlikka ariza berish", cta_call: "Qo'ng'iroqqa yozilish",
    stat_students: "Talabalar", stat_growth: "O'sishga erishdi", stat_months: "Oy", stat_spots: "O'rinlar",
    scroll_hint: "Pastga aylantiring",
    photo_hint: "Rasmingizni<br/>qo'shing",
    hero_img_badge: "Shaxsiy brend mentori",
    his_label: "Transformatsiya",
    hooks_eyebrow: "Shaxsiy brend haqida haqiqat",
    hooks_title1: "Agar o'zingizni tanisangiz —", hooks_title2: "o'qishni davom ettiring.",
    hook1: '"Ko\'rinmas mutaxassislarni <strong>hech kim sotib olmaydi.</strong>"',
    hook2: '"Kontent mijoz keltirmasa — <strong>u buzilgan.</strong>"',
    hook3: '"Obunachlar emas. <strong>Obro\' muhim.</strong>"',
    hook4: '"Bilimingiz qadrli — ammo <strong>pozitsioningiz zaif.</strong>"',
    hook5: '"Shaxsiy brend — bugungi kunda eng <strong>foydali aktiv.</strong>"',
    hook6: '"Kutishni bas qiling. <strong>Ekspert sifatida o\'rnashib oling.</strong>"',
    problem_eyebrow: "Asosiy muammo",
    problem_title1: "Siz mutaxasssissiz.", problem_title3: "Lekin hech kim bilmaydi.",
    problem_sub: "Buni yuzlab marta ko'rganman. Aqlli, layoqatli odamlar ko'rinmas holda qolaveradi, past malakali raqobatchilar esa ularning mijozlarini tortib ketadi.",
    p1_title: "Nol ko'rinish", p1_desc: "Kontent yaratasiz, lekin hech kim ko'rmaydi. Kamroq malakali odamlar e'tiborni tortib ketayotganda siz shovqinda yo'qolib ketasiz.",
    p2_title: "Mijozlar oqimi yo'q", p2_desc: "Kiruvchi so'rovlar yo'q, DM yo'q, referal yo'q. Sizni izlash o'rniga siz har bir imkoniyatni quvlaysiz.",
    p3_title: "Tartibsiz kontent", p3_desc: "Strategiyasiz post qilasiz. Ba'zan tutadi, ko'pincha yo'q. Tizim bo'lmasa — bu lotereya.",
    p4_title: "Beqaror o'sish", p4_desc: "Kamdan-kam ko'tarilishlar va sukut. O'sish tizimingiz yo'q — faqat tasodifiy omad.",
    p5_title: "Past obro'", p5_desc: "Siz №1 ekspert sifatida ko'rilmaysiz. Ko'plab odamlardan biri sifatida ko'rilasiz — va narx bo'yicha savdo qilishadi.",
    p6_title: "Cheksiz poyga", p6_desc: "Ko'proq ish — xuddi shu natija. To'g'ri pozitsionlanmagan holda sa'y-harakatlar to'planmaydi — ular tushkunlikka tushiradi.",
    tr_eyebrow: "O'zgarish",
    tr_title1: "Ko'rinmas mutaxassisdan", tr_title2: "", tr_title3: "tan olingan obro'ga",
    before: "OLDIN", after: "KEYIN",
    b1: "Sohadagi mashhurlikka olib boraman", b2: "Doimiy mijozlar oqimi", b3: "Konvertatsiya qiluvchi kontent",
    b4: "Narx muzokarasisiz premium ish haqi", b5: "Aniq pozitsionlash", b6: "Tizimli kontent dvigatel", b7: "Ko'p daromad manbalari",
    a1: "Mashhur va hurmatli ekspert", a2: "Kiruvchi premium mijozlar", a3: "Konvertatsiya qiluvchi kontent",
    a4: "Premium narxlarni boshqarish", a5: "Aniq pozitsionlash", a6: "Avtomatlashtirilgan kontent tizimi", a7: "Ko'p daromad manbalari",
    two_months: "2 oy",
    auth_eyebrow: "Men haqimda", auth_meet: "Mening ismim ", auth_badge: "Shaxsiy brend mentori",
    auth_tagline: '"Men tan olish, ishonch va obro\' orqali odamlar hayotini o\'zgartiradigan shaxsiy brendlar yarataman."',
    auth_bio: "Men kareramni bir maqsadga bag'ishladim: mutaxassislar, tadbirkorlar va professionallarga nafaqat chiroyli ko'rinadigan, balki real pul topib beradigan brendlar yaratishga yordam berish.",
    auth_s1: "Talabalar mentorlikdan o'tdi", auth_s2: "Kuchli o'sishga erishdi", auth_s3: "Faqat amaliyot",
    auth_phil: 'Nazariya uchun nazariya yo\'q. Har bir seansdа men sizning sohangizdagi <strong>real aktivlar</strong> yaratishga e\'tibor qarataman.',
    proc_eyebrow: "Mening metodologiyam", proc_title1: "6 qadam", proc_title2: "transformatsiyangizga",
    proc_sub: "Har bir qadam oldingilarning ustiga quriladi. Men sizni noma'lum mutaxassisdan monetizatsiya qilingan obro'ga olib boraman.",
    step1_title: "Pozitsionlash", step1_desc: "Birgalikda noyob pozitsionangizniz — nisha, xabar va auditoriyangizni aniqlaymiz.",
    step2_title: "Kontent tizimi", step2_desc: "Tizimli kontent dvigatel yaratishga yordam beraman. Ishonch va konvertatsiya yaratadigan freameworklar.",
    step3_title: "Auditoriya o'sishi", step3_desc: "To'g'ri obunachilarni jalb qiladigan strategiyalarni joriy etamiz — sizning kelajakdagi mijozlaringiz.",
    step4_title: "Mahsulot yaratish", step4_desc: "Flagship taklifingizni yaratamiz — kurs, kouching yoki konsalting.",
    step5_title: "Ishga tushirish", step5_desc: "Birgalikda ishga tushirishni rejalashtirish va o'tkazamiz. Auditoriyani xaridorlarga aylantirish.",
    step6_title: "Monetizatsiya", step6_desc: "Ko'p daromad manbalarini quramiz. Sizning obro'ingiz — sizning asosiy aktivingiz.",
    feat_eyebrow: "Yo'l xaritasi", feat_title1: "Sizga beradigan hamma narsa", feat_title2: "maqsad sari yo'lda",
    feat_sub: "Dasturning har bir elementi — mutaxassisdan tan olingan brendga o'tish yo'lidagi qadam",
    f1_title: "Shaxsiy strategiya", f1_desc: "Brendingiz uchun maxsus strategiya yaratish bo'yicha chuqur seanslar.",
    f2_title: "Viral freameworklar", f2_desc: "Aylantirish toʻxtatadigan va obro' qoʻzg'atadigan kontent yaratish uchun sinovdan o'tgan shablonlar.",
    f3_title: "O'sish tizimi", f3_desc: "To'g'ri odamlarni jalb qiladigan qadamma-qadam o'yin kitoblari — kelajakdagi mijozlar.",
    f4_title: "Monetizatsiya", f4_desc: "Auditoriyani daromadga aylantirish. Tajribani qadoqlash. Bosimisiz savdo.",
    f5_title: "Mahsulot yaratish", f5_desc: "Birinchi raqamli mahsulot yoki premium taklifni loyihalash va ishga tushirish.",
    f6_title: "Ishga tushirish strategiyasi", f6_desc: "Isitish bosqichidan qo'shimcha savdogacha to'liq yo'l xaritasi.",
    f7_title: "Kundalik fikr-mulohaza", f7_desc: "Har kuni kontentingizni, strategiyangizni va harakatlaringizni ko'rib chiqaman.",
    f8_title: "Darslar kutubxonasi", f8_desc: "Barcha ma'ruza yozuvlari, shablonlar va freameworklar sizda doimiy qoladi.",
    res_eyebrow: "Talabalarimning natijalari",
    res_title1: "Real odamlar.", res_title2: "Real o'zgarishlar.",
    res_sub: "Bitiruvchilarimning ~70% 2 oy ichida kuchli auditoriya o'sishiga erishadi.",
    t1_text: "8 haftada 2 000 dan 80 000 obunachiga o'sdim. Muhimi — mentorlik davomida 6 yangi premium mijozni qo'ldim.",
    t1_name: "Aysha K.", t1_role: "Biznes-kouching", t1_result: "Auditoriya o'sishi",
    t2_text: "6-haftada birinchi onlayn kursimni ishga tushirdim va dastlabki 3 kunda $4 200 topdim.",
    t2_name: "Mixail T.", t2_role: "Marketing maslahatchisi", t2_result: "Birinchi ishga tushirish",
    t3_text: "Qayta pozitsionlashdan so'ng stavkamni soatiga $150 dan $500 ga ko'tардим. Endi mijozlarning o'zi keladi.",
    t3_name: "Sara L.", t3_role: "HR maslahatchisi", t3_result: "Stavka o'sishi",
    gs1: "Bitiruvchilar", gs2: "O'sishga erishdi", gs3: "Investitsiya",
    price_eyebrow: "Investitsiya", price_title: "Bir narx. To'liq o'zgarish.",
    scarcity: "CHEKLANGAN O'RINLAR — Guruhda faqat 10–15 ishtirokchi",
    price_name: "Mening shaxsiy brend mentorligim", price_duration: "2 oylik dastur",
    price_desc: "Rustam bilan 2 oylik shaxsiy brend transformatsiya dasturiga to'liq kirish.",
    pf1: "Men bilan shaxsiy strategik seanslar", pf2: "Mening viral kontent freameworklarim",
    pf3: "Auditoriya o'sishi o'yin kitoblari", pf4: "Monetizatsiya strategiyasi",
    pf5: "Mahsulingizni birgalikda yaratish", pf6: "Rejalashtirish va ishga tushirish",
    pf7: "Mendan kundalik fikr-mulohaza", pf8: "Darslar kutubxonasiga abadiy kirish",
    pf9: "10–15 ishtirokchidan iborat guruh",
    cta_apply_now: "Ariza berish — O'rin egallash",
    price_note: "Ariza talab qilinadi. O'rinlar cheklangan. Men ishtirokchilarni shaxsan tanlayman.",
    faq_eyebrow: "Ko'p so'raladi",
    faq_big: "SAVOLLAR?<br/>BIZ BU<br/>YERDA,<br/>YORDAM<br/>BERAMIZ!",
    faq_left_sub: "Savolingiz bormi? Yozing — 24 soat ichida shaxsan javob beraman.",
    faq1_q: "Katta auditoriyaga ega bo'lish kerakmi?",
    faq1_a: "Absolyut yo'q. Ko'p bitiruvchilarim noldan boshlagan. Men to'g'ri auditoriyani — katta emas, maqsadli auditoriyani qurishni o'rgataman.",
    faq2_q: "Kontent yaratish tajribasi kerakmi?",
    faq2_a: "Oldingi tajriba shart emas. Noldan hammani o'rgataman: suratga olish, montaj, sarlavhalar yozish va birinchi kundan mavjudlikni qurish.",
    faq3_q: "Haftasiga qancha vaqt kerak?",
    faq3_a: "Kuniga 1–2 soatga tayyorlaning: jonli seanslar, topshiriqlar, kontent yaratish va e'lon qilish.",
    faq4_q: "Hech qachon kontent yaratmasam-chi?",
    faq4_a: "Ajoyib. Noldan boshlash — bu ustunlik. Brendingizni to'g'ri asoslar bilan toza sahifadan quramiz.",
    faq5_q: "Realitikda qanday natijalar kutish mumkin?",
    faq5_a: "Bitiruvchilarimning ~70% 2 oy ichida kuchli tanilish va o'lchab bo'ladigan auditoriya o'sishiga erishadi.",
    faq6_q: "Bu nazariy yoki haqiqiy ish?",
    faq6_a: "100% amaliyot. Har bir seans biror narsa qurilgani, yaratilgani yoki e'lon qilingan holda tugaydi.",
    fcta_eyebrow: "Sizning tanlovingiz",
    fcta_title1: "Shaxsiy brendingiz", fcta_title2: "butun hayotingizni o'zgartirishi mumkin.",
    fcta_sub: "2 yildan so'ng sohalariga rahbarlik qiladigan mutaxassislar hozir brendlarini qurishmoqda. Yagona savol: siz ulardan biri bo'lasizmi?",
    fcta_urgency: "Keyingi to'lqin: Faqat 10–15 o'rin — Ular tugamasdan oldin ariza bering",
    footer_sub: "Shaxsiy brend mentorligi",
    footer_copy: "© 2026 Rustam. Barcha huquqlar himoyalangan.",
    modal_badge: "Cheklangan o'rinlar", modal_title: "Mentorlikka ariza berish",
    modal_sub: "Shaklni to'ldiring — men arizangizni 24 soat ichida ko'rib chiqaman.",
    field_name: "To'liq ismingiz *", field_social: "Instagram / Ijtimoiy tarmoq havolasi *",
    field_niche: "Soha / Mutaxassisligingiz *", field_income: "Joriy oylik daromad *",
    income_select: "Diapazonni tanlang",
    income_1: "$500 gacha/oy", income_2: "$500 – $2 000/oy",
    income_3: "$2 000 – $5 000/oy", income_4: "$5 000 – $10 000/oy", income_5: "$10 000 dan ortiq/oy",
    field_goal: "Mentorlikdan asosiy maqsadingiz? *",
    ph_name: "masalan, Aleksey Ivanov",
    ph_social: "@sizning_akkauntingiz",
    ph_niche: "masalan, kouching, marketing, fitness",
    ph_goal: "masalan, birinchi mahsulotni ishga tushirish va 3 premium mijoz olish...",
    submit_btn: "Ariza yuborish",
    form_note: "Tugmani bosib, ariza muhokamasi uchun Telegram/WhatsApp orqali bog'lanishga rozilik bildirasiz.",
    success_title: "Ariza yuborildi! ✅",
    success_text: "Arizangizni shaxsan oldim va 24 soat ichida Telegram yoki WhatsApp orqali siz bilan bog'lanaman.",
    success_cta: "Telegramda yozing",
    push_title: "Oz joy qoldi!",
    push_sub: "Keyingi guruhda faqat 3 bo'sh o'rin",
    prog_eyebrow: "Dastur formati",
    prog_title1: "Sizni nima kutmoqda", prog_title2: "mentorlik ichida",
    fact1_title: "2 OYLIK INTENSIV", fact1_desc: "Maksimal joriy etish va natija uchun yaratilgan yuqori sur'at.",
    fact2_title: "GURUHLI MENTORLIK", fact2_desc: "Ekspertga to'g'ridan-to'g'ri kirish uchun 15 talaba bilan cheklangan.",
    fact3_title: "KUNDALIK FIKR-MULOHAZA", fact3_desc: "Har kuni kontentingiz va strategiyangiz bo'yicha to'g'ridan-to'g'ri fikr-mulohaza.",
    fact4_title: "ABADIY KIRISH", fact4_desc: "Barcha yozuvlar, shablonlar va freameworklar dasturdan keyin sizda qoladi.",
    prog_modules_title: "🗂 Nima olasiz:",
    pm1: "Sohangizdagi shaxsiy brend strategiyasi",
    pm2: "Konvertatsiya qiluvchi viral kontent freameworklari",
    pm3: "O'sish o'yin kitobi — to'g'ri auditoriyani jalb qilish",
    pm4: "Tajribani premium taklifga qadoqlash",
    pm5: "Mahsulot yoki xizmatingizning to'liq ishga tushirilishi",
    pm6: "Shaxsiy brenddan bir nechta daromad manbalari",
    prog_for_whom: "🎯 Ideal:",
    fw1: "Tadbirkorlar", fw2: "Mutaxassislar", fw3: "Maslahatchilar", fw4: "Frilanserlar", fw5: "O'z sohasining professionallari",
    fw_note: "Dasturdan maksimum foyda olish uchun mavjud tajriba yoki biznesingiz bo'lishi kerak.",
  }
};

/* ── Apply translations ───────────────────────────── */
function applyLang(lang) {
  const t = I18N[lang];
  if (!t) return;
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key]) el.setAttribute('placeholder', t[key]);
  });
  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.l === lang);
  });
  localStorage.setItem('lang', lang);
  window._currentLang = lang;
}

/* ── Theme ────────────────────────────────────────── */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

/* ── Init ─────────────────────────────────────────── */
const savedTheme = localStorage.getItem('theme') || 'dark';
const savedLang = localStorage.getItem('lang') || 'ru';
applyTheme(savedTheme);
applyLang(savedLang);

document.getElementById('themeToggle').addEventListener('click', () => {
  applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});
document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(window._currentLang === 'ru' ? 'uz' : 'ru');
});

/* ── Push notification — show after 5 seconds ─────── */
setTimeout(() => {
  const toast = document.getElementById('pushToast');
  if (toast) toast.classList.add('show');
  // Auto-hide after 8 seconds
  setTimeout(() => toast && toast.classList.remove('show'), 8000);
}, 5000);
document.getElementById('pushClose').addEventListener('click', () => {
  document.getElementById('pushToast').classList.remove('show');
});

/* ── Nav ──────────────────────────────────────────── */
const nav = document.getElementById('nav');
const navBurger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

navBurger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('active');
  const spans = navBurger.querySelectorAll('span');
  spans[0].style.transform = open ? 'translateY(7px) rotate(45deg)' : '';
  spans[1].style.opacity = open ? '0' : '1';
  spans[2].style.transform = open ? 'translateY(-7px) rotate(-45deg)' : '';
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navBurger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
  });
});

/* ── Scroll fade-in ───────────────────────────────── */
const fadeObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = parseFloat(el.style.getPropertyValue('--step-delay') || '0');
      setTimeout(() => el.classList.add('visible'), delay);
      fadeObs.unobserve(el);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.fade-up').forEach(el => fadeObs.observe(el));

/* ── Hero Canvas ──────────────────────────────────── */
(function () {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; }
  window.addEventListener('resize', resize, { passive: true });
  resize();
  class P {
    constructor() { this.reset(true); }
    reset(rand) {
      this.x = rand ? Math.random() * W : (Math.random() > .5 ? Math.random() * W : Math.random() * 50);
      this.y = rand ? Math.random() * H : Math.random() * H;
      this.vx = (Math.random() - .5) * .45;
      this.vy = (Math.random() - .5) * .45;
      this.life = 0; this.max = .5 + Math.random() * .5;
      this.r = .8 + Math.random() * 1.4;
      this.red = Math.random() > .72;
    }
    update() {
      this.x += this.vx; this.y += this.vy; this.life += .003;
      if (this.life > this.max || this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset(false);
    }
    draw() {
      const a = Math.sin((this.life / this.max) * Math.PI);
      ctx.fillStyle = this.red ? `rgba(229,9,20,${a * .75})` : `rgba(255,255,255,${a * .22})`;
      ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fill();
    }
  }
  for (let i = 0; i < 70; i++) particles.push(new P());
  function frame() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 120) { ctx.strokeStyle = `rgba(229,9,20,${(1 - d / 120) * .1})`; ctx.lineWidth = .5; ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke(); }
    }
    requestAnimationFrame(frame);
  }
  frame();
})();

/* ── Roadmap horizontal scroll ────────────────────── */
(function () {
  const wrapper = document.querySelector('.roadmap__scroll-wrapper');
  const track = document.getElementById('roadmapTrack');
  const rmLeft = document.getElementById('rmLeft');
  const rmRight = document.getElementById('rmRight');
  const dotsContainer = document.getElementById('rmDots');
  if (!wrapper || !track) return;

  const STEP = 270; // scroll per click
  let items = track.querySelectorAll('.roadmap__item');
  let isDragging = false, startX = 0, scrollLeft = 0;

  // Create dots
  items.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'rm-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => wrapper.scrollTo({ left: i * STEP, behavior: 'smooth' }));
    dotsContainer.appendChild(d);
  });

  function updateDots() {
    const idx = Math.round(wrapper.scrollLeft / STEP);
    document.querySelectorAll('.rm-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  }
  wrapper.addEventListener('scroll', updateDots, { passive: true });

  rmLeft.addEventListener('click', () => wrapper.scrollBy({ left: -STEP, behavior: 'smooth' }));
  rmRight.addEventListener('click', () => wrapper.scrollBy({ left: STEP, behavior: 'smooth' }));

  // Drag to scroll
  wrapper.addEventListener('mousedown', e => { isDragging = true; startX = e.pageX - wrapper.offsetLeft; scrollLeft = wrapper.scrollLeft; wrapper.style.cursor = 'grabbing'; });
  window.addEventListener('mouseup', () => { isDragging = false; wrapper.style.cursor = 'grab'; });
  wrapper.addEventListener('mousemove', e => { if (!isDragging) return; e.preventDefault(); const x = e.pageX - wrapper.offsetLeft; wrapper.scrollLeft = scrollLeft - (x - startX); });
  // Touch
  wrapper.addEventListener('touchstart', e => { startX = e.touches[0].pageX; scrollLeft = wrapper.scrollLeft; }, { passive: true });
  wrapper.addEventListener('touchmove', e => { wrapper.scrollLeft = scrollLeft - (e.touches[0].pageX - startX); }, { passive: true });
})();

/* ── Modal ────────────────────────────────────────── */
const modal = document.getElementById('appModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
function openModal() { modal.classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeModal() { modal.classList.remove('active'); document.body.style.overflow = ''; }
['heroApplyBtn', 'navApplyBtn', 'pricingApplyBtn', 'finalApplyBtn', 'faqApplyBtn'].forEach(id => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener('click', openModal);
});
modalOverlay.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.querySelectorAll('.btn').forEach(btn => {
  if (btn.textContent.trim().toLowerCase().includes('запис') || btn.id === 'heroCallBtn' || btn.id === 'finalCallBtn') {
    // handled below
  }
});
['heroCallBtn', 'finalCallBtn'].forEach(id => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener('click', () => window.open('https://t.me/rustamdd', '_blank'));
});

/* ── Form submit → Telegram ───────────────────────── */
document.getElementById('appForm').addEventListener('submit', async e => {
  e.preventDefault();
  const t = I18N[window._currentLang || 'ru'];
  const ids = ['fieldName', 'fieldSocial', 'fieldNiche', 'fieldIncome', 'fieldGoal'];
  let valid = true;
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      valid = false;
      el.style.borderColor = 'rgba(229,9,20,0.8)';
      el.style.boxShadow = '0 0 0 3px rgba(229,9,20,0.15)';
      el.addEventListener('input', () => { el.style.borderColor = ''; el.style.boxShadow = ''; }, { once: true });
    }
  });
  if (!valid) return;

  const submitBtn = document.getElementById('submitBtn');
  submitBtn.disabled = true;
  submitBtn.querySelector('span').textContent = '⏳ Отправка...';

  try {
    await sendToTelegram({
      name: document.getElementById('fieldName').value.trim(),
      social: document.getElementById('fieldSocial').value.trim(),
      niche: document.getElementById('fieldNiche').value.trim(),
      income: document.getElementById('fieldIncome').value,
      goal: document.getElementById('fieldGoal').value.trim(),
    });

    e.target.innerHTML = `
      <div style="text-align:center;padding:24px 0;display:flex;flex-direction:column;align-items:center;gap:14px;">
        <div style="font-size:52px;">✅</div>
        <h3 style="font-size:22px;font-weight:800;color:var(--text)">${t.success_title}</h3>
        <p style="font-size:14px;color:var(--text-60);line-height:1.65;max-width:360px;">${t.success_text}</p>
        <a href="https://t.me/rustamdd" target="_blank"
           style="margin-top:10px;display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,var(--red),var(--red-dark));color:#fff;font-weight:700;padding:14px 28px;border-radius:50px;font-size:15px;text-decoration:none;box-shadow:0 0 28px var(--red-glow)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.025 9.54c-.15.674-.543.838-1.1.52l-3.04-2.24-1.468 1.41c-.163.162-.299.298-.612.298l.218-3.087 5.624-5.08c.244-.218-.054-.338-.377-.12L7.043 14.2l-2.97-.928c-.645-.202-.658-.645.135-.953l11.59-4.47c.537-.195 1.007.13.764.4z"/></svg>
          ${t.success_cta}
        </a>
      </div>`;
  } catch (err) {
    submitBtn.disabled = false;
    submitBtn.querySelector('span').textContent = t.submit_btn;
    const notice = document.createElement('p');
    notice.style.cssText = 'color:rgba(229,9,20,0.8);font-size:13px;text-align:center;margin-top:-8px';
    notice.textContent = 'Ошибка отправки. Пожалуйста, напишите напрямую в Telegram.';
    submitBtn.after(notice);
    setTimeout(() => notice.remove(), 5000);
  }
});

/* ── FAQ accordion ────────────────────────────────── */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-question').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });
    if (!open) { btn.setAttribute('aria-expanded', 'true'); btn.nextElementSibling.classList.add('open'); }
  });
});

/* ── 3D tilt on cards ─────────────────────────────── */
document.querySelectorAll('.feature-card,.problem-card,.testimonial-card,.roadmap__card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-5px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

/* ── Smooth nav links ─────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  });
});
