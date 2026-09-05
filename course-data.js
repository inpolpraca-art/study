window.COURSE_DATA = {
  "lessons": [
    {
      "day": 1,
      "title": "HTML: создаём основу сайта",
      "desc": "HTML/CSS/JS, браузер, frontend/backend, URL, домен и хостинг.",
      "tag": "База",
      "body": "<h3>Что изучить</h3><p>HTML отвечает за структуру и смысл, CSS — за внешний вид, JavaScript — за поведение. Браузер получает ресурсы и строит страницу.</p><h3>Практика</h3><p>Открой 2–3 сайта и выпиши для каждого 5 секций. Нарисуй будущий сайт ресторана: Header → Hero → About → Menu → Gallery → Reviews → Booking → Contacts → Footer.</p><h3>Чек</h3><ul><li>☐ Могу объяснить HTML/CSS/JS</li><li>☐ Понимаю frontend и backend</li><li>☐ Есть структура будущего проекта</li></ul>",
      "open": [
        "Рабочий стол Windows",
        "VS Code",
        "Chrome"
      ],
      "create": [
        "Папку my-first-site",
        "Файл index.html"
      ],
      "steps": [
        "На рабочем столе создай папку motownia-smakow.",
        "Открой VS Code → File → Open Folder → выбери motownia-smakow.",
        "Слева нажми New File → создай index.html.",
        "Напечатай первой строкой <!DOCTYPE html>. Не вставляй весь документ сразу.",
        "Создай <html lang=\"ru\"> и внутри него head и body.",
        "В head по одной строке добавь charset, viewport и title.",
        "В body добавь h1 и p. После каждой добавленной части нажимай Ctrl+S.",
        "Открой index.html в Chrome и обновляй Ctrl+R после изменений.",
        "Сравни то, что видишь, с объяснением каждой строки ниже."
      ],
      "code": "<!doctype html>\n<html lang=\"ru\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Мой первый сайт</title>\n</head>\n<body>\n  <h1>Привет! Это мой первый сайт.</h1>\n  <p>Я учусь создавать сайты с нуля.</p>\n</body>\n</html>",
      "explain": [
        [
          "<!DOCTYPE html>",
          "говорит браузеру использовать HTML5. Это декларация документа."
        ],
        [
          "<html lang=\"ru\">",
          "корневой элемент. lang сообщает язык содержимого."
        ],
        [
          "<head>",
          "служебная часть: метаданные, title и подключения."
        ],
        [
          "<meta charset=\"UTF-8\">",
          "кодировка для корректного отображения символов."
        ],
        [
          "<meta name=\"viewport\" ...>",
          "настройка ширины и масштаба на мобильных устройствах."
        ],
        [
          "<title>",
          "название вкладки браузера."
        ],
        [
          "<body>",
          "видимое содержимое страницы."
        ],
        [
          "<h1>",
          "главный заголовок."
        ],
        [
          "<p>",
          "абзац текста."
        ]
      ],
      "challenge": "Измени название, title, h1 и p. Добавь второй абзац полностью самостоятельно.",
      "expected": "В Chrome виден заголовок и два абзаца, а вкладка имеет твоё название.",
      "mistakes": [
        "Проверь, что файл называется index.html, а не index.html.txt.",
        "После изменения нажми Ctrl+S и Ctrl+R.",
        "Проверь закрывающие теги."
      ],
      "goal": "Создать первый HTML-документ и понять каждую строку.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html",
      "duration": "≈ 40–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "База",
        "HTML",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "<!doctype html>",
          "meaning": "Объявляет современный HTML-документ.",
          "when": "В первой строке index.html.",
          "example": "<!doctype html>",
          "insert": "Напиши первой строкой файла.",
          "tip": "Не является видимым содержимым."
        },
        {
          "syntax": "<html>",
          "meaning": "Корневой элемент страницы. Внутри него находятся head и body.",
          "when": "Один раз вокруг всего документа.",
          "example": "<html lang=\"ru\"> ... </html>",
          "insert": "После doctype открой html, а закрывающий тег поставь в самом низу.",
          "tip": "lang сообщает язык страницы."
        },
        {
          "syntax": "<head>",
          "meaning": "Служебная часть HTML: title, meta и подключения CSS.",
          "when": "В каждом документе.",
          "example": "<head>...</head>",
          "insert": "После открытия html и до body.",
          "tip": "Видимый контент сюда не кладём."
        },
        {
          "syntax": "<body>",
          "meaning": "Видимая часть страницы.",
          "when": "Для текста, изображений, секций, форм.",
          "example": "<body><h1>Привет</h1></body>",
          "insert": "После head.",
          "tip": "То, что пользователь видит, обычно находится здесь."
        },
        {
          "syntax": "<h1>",
          "meaning": "Главный заголовок страницы.",
          "when": "Для основного сообщения страницы.",
          "example": "<h1>Motownia Smaków</h1>",
          "insert": "В Hero или начале контента.",
          "tip": "Не выбирай h1 только ради размера текста."
        },
        {
          "syntax": "<p>",
          "meaning": "Абзац текста.",
          "when": "Для описаний и обычного текста.",
          "example": "<p>Домашняя кухня каждый день.</p>",
          "insert": "Под заголовком.",
          "tip": "Не делай большие отступы десятками br."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "HTML",
          "where": "В body",
          "instruction": "Пишем `<h1>` — это наш главный заголовок.",
          "code": "<h1>Motownia Smaków</h1>",
          "result": "Браузер делает самый важный заголовок крупнее остальных.",
          "connect": "Пока это просто текст. Позже CSS задаст ему размер, вес и цвет."
        },
        {
          "n": 2,
          "area": "HTML",
          "where": "Сразу после h1",
          "instruction": "Пишем `<p>` — это обычный абзац для короткого описания.",
          "code": "<p>Современная кухня и уютная атмосфера.</p>",
          "result": "Под заголовком появляется текст.",
          "connect": "h1 и p находятся внутри одного body и уже образуют маленький блок Hero."
        },
        {
          "n": 3,
          "area": "HTML",
          "where": "Внутри body перед h1",
          "instruction": "Пишем `<header>` — это верхняя часть страницы.",
          "code": "<header></header>",
          "result": "Пока визуально почти ничего не меняется: header — контейнер.",
          "connect": "В следующий урок мы положим внутрь header навигацию и logo."
        },
        {
          "n": 4,
          "area": "HTML",
          "where": "Внутри header",
          "instruction": "Пишем `<nav>` — место для навигации.",
          "code": "<nav></nav>",
          "result": "Создаём отдельное место для будущих ссылок.",
          "connect": "nav будет содержать ссылки `<a>`."
        },
        {
          "n": 5,
          "area": "HTML",
          "where": "Внутри nav",
          "instruction": "Пишем `<a href=\"#menu\">Меню</a>` — ссылка ведёт к элементу с id=\"menu\".",
          "code": "<a href=\"#menu\">Меню</a>",
          "result": "Пока переход сработает только после создания id=\"menu\".",
          "connect": "Это первая связь двух частей HTML: href=\"#menu\" ↔ id=\"menu\"."
        },
        {
          "n": 6,
          "area": "HTML",
          "where": "Ниже Hero",
          "instruction": "Пишем `<main>` — основной контент страницы.",
          "code": "<main></main>",
          "result": "Создаём контейнер для главных секций.",
          "connect": "Внутри main позже появятся Menu, About, Gallery и Contacts."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>O nas</h2><p>Наша кухня, атмосфера и люди.</p></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 2,
      "title": "HTML: структура общего проекта",
      "desc": "VS Code, структура проекта и Chrome DevTools.",
      "tag": "Setup",
      "body": "<h3>Что установить</h3><p>Установи VS Code и Chrome. В VS Code создай папку проекта и файлы index.html, styles.css, app.js. Полезны Live Server, Prettier и Auto Rename Tag.</p><h3>Практика</h3><p>Открой DevTools → Elements и Console. Сгенерируй HTML через `!` + Enter. Создай папки images и assets.</p><h3>Чек</h3><ul><li>☐ VS Code установлен</li><li>☐ Chrome установлен</li><li>☐ Умею открыть DevTools</li><li>☐ Понимаю структуру проекта</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 2"
      ],
      "steps": [
        "Открой тот же motownia-smakow/index.html.",
        "Найди body и не удаляй его содержимое.",
        "Создай внутри body header. Внутри header помести название и nav.",
        "После header создай main. В main сделай section class=\"hero\".",
        "После main создай footer.",
        "Сохрани и открой Elements через F12, чтобы увидеть дерево HTML.",
        "Проверь вложенность: html → body → header/main/footer."
      ],
      "code": "<h3>Что установить</h3><p>Установи VS Code и Chrome. В VS Code создай папку проекта и файлы index.html, styles.css, app.js. Полезны Live Server, Prettier и Auto Rename Tag.</p><h3>Практика</h3><p>Открой DevTools → Elements и Console. Сгенерируй HTML через `!` + Enter. Создай папки images и assets.</p><h3>Чек</h3><ul><li>☐ VS Code установлен</li><li>☐ Chrome установлен</li><li>☐ Умею открыть DevTools</li><li>☐ Понимаю структуру проекта</li></ul>",
      "explain": [
        [
          "Setup",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Добавь nav с тремя ссылками и объясни себе, почему nav находится внутри header.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Понять вложенность и собрать header, main, section и footer.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "Setup",
        "HTML",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "<header>",
          "meaning": "Шапка или вводная часть страницы.",
          "when": "Для логотипа, навигации и CTA.",
          "example": "<header>...</header>",
          "insert": "В начале body.",
          "tip": "Это смысл HTML, а не стиль."
        },
        {
          "syntax": "<nav>",
          "meaning": "Контейнер для навигационных ссылок.",
          "when": "Для главного меню.",
          "example": "<nav><a href=\"#menu\">Меню</a></nav>",
          "insert": "Внутри header.",
          "tip": "Ссылки должны вести к реальным адресам или id."
        },
        {
          "syntax": "<main>",
          "meaning": "Главное содержимое страницы.",
          "when": "Обычно один main.",
          "example": "<main>...</main>",
          "insert": "После header.",
          "tip": "Footer обычно находится после main."
        },
        {
          "syntax": "<section>",
          "meaning": "Смысловой раздел страницы.",
          "when": "Для Hero, About, Menu, Gallery и т.д.",
          "example": "<section id=\"menu\"><h2>Меню</h2></section>",
          "insert": "Внутри main.",
          "tip": "Хорошо, когда секция имеет заголовок и понятную цель."
        },
        {
          "syntax": "<footer>",
          "meaning": "Нижняя часть страницы.",
          "when": "Для контактов, копирайта, ссылок.",
          "example": "<footer>© 2026</footer>",
          "insert": "После main.",
          "tip": "Обычно один главный footer."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "HTML",
          "where": "Внутри header",
          "instruction": "Пишем `<a class=\"logo\" href=\"#top\">Motownia</a>` — logo тоже ссылка.",
          "code": "<a class=\"logo\" href=\"#top\">Motownia</a>",
          "result": "Появляется название сайта.",
          "connect": "class=\"logo\" позже будет оформлен CSS."
        },
        {
          "n": 2,
          "area": "HTML",
          "where": "Внутри nav после logo",
          "instruction": "Пишем ещё одну ссылку `<a>` для About.",
          "code": "<a href=\"#about\">O nas</a>",
          "result": "Появляется пункт меню.",
          "connect": "href=\"#about\" должен совпасть с id секции About."
        },
        {
          "n": 3,
          "area": "HTML",
          "where": "В main",
          "instruction": "Создаём `<section id=\"top\">` — это отдельная смысловая секция страницы.",
          "code": "<section id=\"top\"></section>",
          "result": "Создан блок, к которому можно привязать ссылку.",
          "connect": "id уникален и используется как адрес внутри страницы."
        },
        {
          "n": 4,
          "area": "HTML",
          "where": "Внутри top",
          "instruction": "Пишем `<div class=\"hero__content\">` — блочный контейнер для заголовка и текста.",
          "code": "<div class=\"hero__content\"></div>",
          "result": "Пока невидим, но собирает элементы в одну группу.",
          "connect": "CSS сможет задать этой группе ширину, отступы и положение."
        },
        {
          "n": 5,
          "area": "HTML",
          "where": "Ниже top",
          "instruction": "Создаём `<section id=\"about\">` с `<h2>` и `<p>`.",
          "code": "<section id=\"about\"><h2>O nas</h2><p>Коротко о ресторане.</p></section>",
          "result": "Появляется вторая секция.",
          "connect": "Ссылка href=\"#about\" теперь имеет цель."
        },
        {
          "n": 6,
          "area": "HTML",
          "where": "В конце main",
          "instruction": "Создаём пустые секции menu, gallery и contacts.",
          "code": "<section id=\"menu\"></section>\n<section id=\"gallery\"></section>\n<section id=\"contacts\"></section>",
          "result": "Получаем полный скелет страницы.",
          "connect": "Следующие дни будут заполнять эти секции по одной."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>O nas</h2><p>Наша кухня, атмосфера и люди.</p></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 3,
      "title": "HTML: ссылки и секции",
      "desc": "Скелет HTML, заголовки, абзацы, ссылки и списки.",
      "tag": "HTML",
      "body": "<h3>HTML-скелет</h3><p>Минимальный документ содержит doctype, html, head и body. В head — метаданные и подключения, в body — содержимое страницы.</p><h3>Код</h3><pre>&lt;!doctype html&gt;\n&lt;html lang=\"ru\"&gt;\n&lt;head&gt;\n  &lt;meta charset=\"UTF-8\"&gt;\n  &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;\n  &lt;title&gt;Casa Nova — ресторан&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;h1&gt;Casa Nova&lt;/h1&gt;\n  &lt;p&gt;Современная кухня в центре города.&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre><h3>Задание</h3><div class='task'>Создай заголовок, описание и ссылку «Забронировать столик». Проверь, что ссылка кликается.</div><h3>Чек</h3><ul><li>☐ Знаю head/body</li><li>☐ Умею h1 и p</li><li>☐ Умею создавать ссылки</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 3"
      ],
      "steps": [
        "Открой тот же index.html.",
        "В Hero добавь ссылку <a> и назови её Zobacz menu.",
        "Поставь href=\"#menu\".",
        "Создай ниже section id=\"menu\".",
        "Внутри menu добавь h2 и список ul с тремя li.",
        "Сохрани и нажми ссылку в Chrome.",
        "Посмотри, как href=\"#menu\" нашёл id=\"menu\". Это первая настоящая связь элементов."
      ],
      "code": "<h3>HTML-скелет</h3><p>Минимальный документ содержит doctype, html, head и body. В head — метаданные и подключения, в body — содержимое страницы.</p><h3>Код</h3>&lt;!doctype html&gt;\n&lt;html lang=\"ru\"&gt;\n&lt;head&gt;\n  &lt;meta charset=\"UTF-8\"&gt;\n  &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;\n  &lt;title&gt;Casa Nova — ресторан&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;h1&gt;Casa Nova&lt;/h1&gt;\n  &lt;p&gt;Современная кухня в центре города.&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;<h3>Задание</h3><div class='task'>Создай заголовок, описание и ссылку «Забронировать столик». Проверь, что ссылка кликается.</div><h3>Чек</h3><ul><li>☐ Знаю head/body</li><li>☐ Умею h1 и p</li><li>☐ Умею создавать ссылки</li></ul>",
      "explain": [
        [
          "HTML",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 3 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Связать навигацию с секциями через href и id.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "HTML",
        "HTML",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "<a>",
          "meaning": "Ссылка. href определяет, куда перейти.",
          "when": "Для навигации и CTA.",
          "example": "<a href=\"#menu\">Меню</a>",
          "insert": "В nav или CTA.",
          "tip": "Для перехода внутри страницы используй #id."
        },
        {
          "syntax": "id",
          "meaning": "Уникальное имя элемента.",
          "when": "Для якорей и JS.",
          "example": "<section id=\"contacts\">",
          "insert": "Добавь id на нужный элемент.",
          "tip": "Один id не должен повторяться."
        },
        {
          "syntax": "class",
          "meaning": "Имя элемента, которое можно использовать в CSS и JS.",
          "when": "Для повторяемых компонентов.",
          "example": "<div class=\"card\">...</div>",
          "insert": "Добавь class в HTML → используй .card в CSS.",
          "tip": "Один class можно использовать много раз."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "HTML",
          "where": "Внутри Hero",
          "instruction": "Пишем `<h1>` — это название/главный оффер.",
          "code": "<h1>Вкус, который запоминается</h1>",
          "result": "Главный текст Hero появляется на странице.",
          "connect": "CSS позже сделает h1 большим и контрастным."
        },
        {
          "n": 2,
          "area": "HTML",
          "where": "Под h1",
          "instruction": "Пишем `<p>` — поясняем, что предлагает сайт.",
          "code": "<p>Авторская кухня, свежие продукты и вечер, который хочется повторить.</p>",
          "result": "Под заголовком появляется описание.",
          "connect": "p станет вторичным текстом через CSS."
        },
        {
          "n": 3,
          "area": "HTML",
          "where": "Под p",
          "instruction": "Пишем `<a class=\"btn\" href=\"#contacts\">Забронировать столик</a>` — CTA.",
          "code": "<a class=\"btn\" href=\"#contacts\">Забронировать столик</a>",
          "result": "Появляется ссылка-действие.",
          "connect": "class=\"btn\" позже превратит обычную ссылку в кнопку."
        },
        {
          "n": 4,
          "area": "HTML",
          "where": "В main после Hero",
          "instruction": "Создаём Menu через `<section id=\"menu\">`.",
          "code": "<section id=\"menu\"><h2>Menu</h2></section>",
          "result": "Появляется отдельная секция меню.",
          "connect": "CTA href=\"#contacts\" работает независимо от Menu."
        },
        {
          "n": 5,
          "area": "HTML",
          "where": "В Menu",
          "instruction": "Пишем `<ul>` и три `<li>` — список блюд.",
          "code": "<ul><li>Ramen</li><li>Steak</li><li>Cheesecake</li></ul>",
          "result": "Получаем три пункта.",
          "connect": "Позже Grid превратит их в карточки."
        },
        {
          "n": 6,
          "area": "HTML",
          "where": "Проверка связи",
          "instruction": "Кликаем «Забронировать столик» и проверяем, что браузер ищет id=\"contacts\".",
          "code": "<a href=\"#contacts\">Забронировать столик</a>\n<section id=\"contacts\">...</section>",
          "result": "Страница прокручивается к Contact.",
          "connect": "Запомни правило: href=\"#X\" должен совпадать с id=\"X\"."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section id=\"menu\" class=\"box\"><h2>Menu</h2><div class=\"cards\"><article>Ramen</article><article>Steak</article><article>Cheesecake</article></div></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 4,
      "title": "HTML: изображения",
      "desc": "header, nav, main, section, article, footer и структура.",
      "tag": "HTML",
      "body": "<h3>Семантика</h3><p>Не строи сайт из одних div. Используй header, nav, main, section, article и footer.</p><h3>Код</h3><pre>&lt;header&gt;&lt;nav&gt;...&lt;/nav&gt;&lt;/header&gt;\n&lt;main&gt;\n  &lt;section id=\"about\"&gt;...&lt;/section&gt;\n  &lt;section id=\"menu\"&gt;...&lt;/section&gt;\n&lt;/main&gt;\n&lt;footer&gt;...&lt;/footer&gt;</pre><h3>Задание</h3><div class='task'>Перепиши каркас ресторана семантическими тегами и добавь id секциям.</div><h3>Чек</h3><ul><li>☐ Использую semantic HTML</li><li>☐ Понимаю main</li><li>☐ Умею якорную навигацию</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 4"
      ],
      "steps": [
        "В папке проекта создай images.",
        "Положи туда фотографию и назови её hero.jpg.",
        "В Hero добавь img.",
        "В src укажи images/hero.jpg.",
        "Добавь alt, описывающий фотографию.",
        "Сохрани и проверь Chrome.",
        "Если картинка не появилась, проверь путь, имя файла и расширение."
      ],
      "code": "<h3>Семантика</h3><p>Не строи сайт из одних div. Используй header, nav, main, section, article и footer.</p><h3>Код</h3>&lt;header&gt;&lt;nav&gt;...&lt;/nav&gt;&lt;/header&gt;\n&lt;main&gt;\n  &lt;section id=\"about\"&gt;...&lt;/section&gt;\n  &lt;section id=\"menu\"&gt;...&lt;/section&gt;\n&lt;/main&gt;\n&lt;footer&gt;...&lt;/footer&gt;<h3>Задание</h3><div class='task'>Перепиши каркас ресторана семантическими тегами и добавь id секциям.</div><h3>Чек</h3><ul><li>☐ Использую semantic HTML</li><li>☐ Понимаю main</li><li>☐ Умею якорную навигацию</li></ul>",
      "explain": [
        [
          "HTML",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 4 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Добавить локальные фотографии и понять src и alt.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "HTML",
        "HTML",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "<img>",
          "meaning": "Показывает изображение. src — путь/URL, alt — описание.",
          "when": "Для фото и галереи.",
          "example": "<img src=\"dish.jpg\" alt=\"Паста с грибами\">",
          "insert": "Найди изображение → вставь путь в src → опиши его в alt.",
          "tip": "Если фото не загрузилось, alt помогает понять, что там должно быть."
        },
        {
          "syntax": "alt",
          "meaning": "Текстовое описание изображения.",
          "when": "Для доступности и fallback.",
          "example": "alt=\"Интерьер ресторана\"",
          "insert": "Внутри img.",
          "tip": "Описывай смысл, а не просто слово «фото»."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "HTML",
          "where": "В Hero после текста",
          "instruction": "Пишем `<img>` — это изображение. `src` хранит адрес картинки, `alt` описывает её.",
          "code": "<img src=\"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80\" alt=\"Интерьер ресторана\">",
          "result": "Появляется фото.",
          "connect": "CSS позже задаст ему ширину, высоту и object-fit."
        },
        {
          "n": 2,
          "area": "HTML",
          "where": "В Menu в каждой карточке",
          "instruction": "Добавляем своё фото блюда через `<img>`.",
          "code": "<img src=\"АДРЕС_ФОТО\" alt=\"Паста с соусом\">",
          "result": "Карточка получает визуальный контент.",
          "connect": "alt нужен, если фото не загрузится, и для доступности."
        },
        {
          "n": 3,
          "area": "HTML",
          "where": "Перед картинкой",
          "instruction": "Пишем `figure` — смысловой контейнер изображения.",
          "code": "<figure></figure>",
          "result": "Можно объединить фото и подпись.",
          "connect": "Внутри figure удобно использовать img + figcaption."
        },
        {
          "n": 4,
          "area": "HTML",
          "where": "После img",
          "instruction": "Пишем `<figcaption>` — подпись фотографии.",
          "code": "<figcaption>Интерьер Motownia</figcaption>",
          "result": "Под фото появляется подпись.",
          "connect": "CSS позже оформит её как маленький текст."
        },
        {
          "n": 5,
          "area": "HTML",
          "where": "Проверка src",
          "instruction": "Открываем прямой URL картинки в новой вкладке и убеждаемся, что открывается именно изображение.",
          "code": "src=\"https://...jpg\"",
          "result": "Если URL не является прямым изображением, `<img>` может не показать фото.",
          "connect": "Для учебы используй прямой URL изображения."
        },
        {
          "n": 6,
          "area": "HTML",
          "where": "Проверка alt",
          "instruction": "Временно сломай src и посмотри на alt.",
          "code": "alt=\"Интерьер ресторана\"",
          "result": "Браузер показывает описание вместо изображения.",
          "connect": "Это наглядно показывает, зачем нужен alt."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>Фото</h2><img class=\"photo\" src=\"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80\" alt=\"Интерьер ресторана\"></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 5,
      "title": "HTML: форма контактов",
      "desc": "img, alt, video, якоря и лицензии изображений.",
      "tag": "HTML",
      "body": "<h3>Media</h3><p>У изображения должен быть осмысленный alt. Для декоративного изображения — пустой alt. Не используй чужие фотографии без проверки права использования.</p><h3>Код</h3><pre>&lt;img src=\"image.jpg\" alt=\"Интерьер ресторана\"&gt;\n&lt;a href=\"#menu\"&gt;Посмотреть меню&lt;/a&gt;</pre><h3>Задание</h3><div class='task'>Добавь hero-фото, фото блюда и якорь на меню. Проверь alt.</div><h3>Чек</h3><ul><li>☐ Знаю зачем alt</li><li>☐ Умею img и ссылки</li><li>☐ Понимаю вопрос лицензий</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 5"
      ],
      "steps": [
        "После Menu создай section id=\"contact\".",
        "Внутри создай form.",
        "Для имени создай label и input; for у label должен совпасть с id input.",
        "Для email создай input type=\"email\".",
        "Для сообщения создай textarea.",
        "Добавь button type=\"submit\".",
        "Проверь, что все поля можно заполнить. Отправку пока не делаем — она появится с JavaScript."
      ],
      "code": "<h3>Media</h3><p>У изображения должен быть осмысленный alt. Для декоративного изображения — пустой alt. Не используй чужие фотографии без проверки права использования.</p><h3>Код</h3>&lt;img src=\"image.jpg\" alt=\"Интерьер ресторана\"&gt;\n&lt;a href=\"#menu\"&gt;Посмотреть меню&lt;/a&gt;<h3>Задание</h3><div class='task'>Добавь hero-фото, фото блюда и якорь на меню. Проверь alt.</div><h3>Чек</h3><ul><li>☐ Знаю зачем alt</li><li>☐ Умею img и ссылки</li><li>☐ Понимаю вопрос лицензий</li></ul>",
      "explain": [
        [
          "HTML",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 5 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Создать поля, label, input, textarea и кнопку.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "HTML",
        "HTML",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "<form>",
          "meaning": "Контейнер формы.",
          "when": "Для пользовательского ввода.",
          "example": "<form id=\"contact-form\">...</form>",
          "insert": "В секции контактов.",
          "tip": "Для реальной отправки позже понадобится сервер или внешний сервис."
        },
        {
          "syntax": "<label>",
          "meaning": "Подпись поля формы.",
          "when": "Для доступной формы.",
          "example": "<label for=\"email\">Email</label>",
          "insert": "Перед input.",
          "tip": "for должен совпадать с id."
        },
        {
          "syntax": "<input>",
          "meaning": "Однострочное поле ввода.",
          "when": "Для имени, email, телефона.",
          "example": "<input id=\"email\" type=\"email\">",
          "insert": "Внутри form.",
          "tip": "type=email даёт базовую проверку браузера."
        },
        {
          "syntax": "<textarea>",
          "meaning": "Многострочное поле.",
          "when": "Для сообщения.",
          "example": "<textarea id=\"message\"></textarea>",
          "insert": "Внутри form.",
          "tip": "Размер удобно задавать CSS."
        },
        {
          "syntax": "<button>",
          "meaning": "Кнопка действия.",
          "when": "Для JS, формы и интерактивности.",
          "example": "<button type=\"button\">Открыть</button>",
          "insert": "В нужном компоненте.",
          "tip": "Внутри form явно указывай type."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "HTML",
          "where": "Внутри contacts",
          "instruction": "Пишем `<form>` — это контейнер формы.",
          "code": "<form></form>",
          "result": "Пока пусто, но появляется структура будущей заявки.",
          "connect": "Внутрь form кладём label и input."
        },
        {
          "n": 2,
          "area": "HTML",
          "where": "Внутри form",
          "instruction": "Пишем `<label for=\"name\">Imię</label>` — подпись связана с input через for/id.",
          "code": "<label for=\"name\">Imię</label>",
          "result": "Появляется подпись поля.",
          "connect": "for=\"name\" ↔ id=\"name\" — ещё одна связь элементов."
        },
        {
          "n": 3,
          "area": "HTML",
          "where": "После label",
          "instruction": "Пишем `<input id=\"name\" name=\"name\" type=\"text\">`.",
          "code": "<input id=\"name\" name=\"name\" type=\"text\">",
          "result": "Появляется поле ввода имени.",
          "connect": "type определяет тип поля; name пригодится при отправке данных."
        },
        {
          "n": 4,
          "area": "HTML",
          "where": "Для телефона",
          "instruction": "Пишем второй label + input type=\"tel\".",
          "code": "<label for=\"phone\">Telefon</label>\n<input id=\"phone\" name=\"phone\" type=\"tel\">",
          "result": "Появляется поле телефона.",
          "connect": "Каждый label должен ссылаться на свой уникальный id."
        },
        {
          "n": 5,
          "area": "HTML",
          "where": "Для сообщения",
          "instruction": "Пишем `<textarea id=\"message\" name=\"message\"></textarea>`.",
          "code": "<textarea id=\"message\" name=\"message\"></textarea>",
          "result": "Появляется большое поле текста.",
          "connect": "CSS позже задаст ему высоту."
        },
        {
          "n": 6,
          "area": "HTML",
          "where": "В конце form",
          "instruction": "Пишем `<button type=\"submit\">Wyślij</button>`.",
          "code": "<button type=\"submit\">Wyślij</button>",
          "result": "Появляется кнопка отправки.",
          "connect": "На Day 27 JS перехватит submit и проверит поля."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>Kontakt</h2><form id=\"bookingForm\"><label for=\"name\">Imię</label><input id=\"name\"><button type=\"submit\">Wyślij</button></form></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 6,
      "title": "CSS: подключаем оформление",
      "desc": "label, input, select, textarea и HTML-валидация.",
      "tag": "HTML",
      "body": "<h3>Формы</h3><p>label связывается с полем через for/id. Используй правильные типы email, tel, date и number. Клиентская валидация не заменяет серверную.</p><h3>Код</h3><pre>&lt;form id=\"bookingForm\"&gt;\n  &lt;label for=\"name\"&gt;Имя&lt;/label&gt;\n  &lt;input id=\"name\" name=\"name\" required&gt;\n  &lt;label for=\"email\"&gt;Email&lt;/label&gt;\n  &lt;input id=\"email\" name=\"email\" type=\"email\" required&gt;\n  &lt;button type=\"submit\"&gt;Забронировать&lt;/button&gt;\n&lt;/form&gt;</pre><h3>Задание</h3><div class='task'>Сделай форму: имя, телефон, дата, гости, комментарий.</div><h3>Чек</h3><ul><li>☐ У каждого поля есть label</li><li>☐ Использую required</li><li>☐ Понимаю границы клиентской валидации</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 6"
      ],
      "steps": [
        "Создай styles.css в корне проекта.",
        "В head index.html подключи <link rel=\"stylesheet\" href=\"styles.css\">.",
        "В styles.css создай правило body с фигурными скобками.",
        "Добавь color, background и font-family.",
        "Сохрани два файла и обнови Chrome."
      ],
      "code": "<h3>Формы</h3><p>label связывается с полем через for/id. Используй правильные типы email, tel, date и number. Клиентская валидация не заменяет серверную.</p><h3>Код</h3>&lt;form id=\"bookingForm\"&gt;\n  &lt;label for=\"name\"&gt;Имя&lt;/label&gt;\n  &lt;input id=\"name\" name=\"name\" required&gt;\n  &lt;label for=\"email\"&gt;Email&lt;/label&gt;\n  &lt;input id=\"email\" name=\"email\" type=\"email\" required&gt;\n  &lt;button type=\"submit\"&gt;Забронировать&lt;/button&gt;\n&lt;/form&gt;<h3>Задание</h3><div class='task'>Сделай форму: имя, телефон, дата, гости, комментарий.</div><h3>Чек</h3><ul><li>☐ У каждого поля есть label</li><li>☐ Использую required</li><li>☐ Понимаю границы клиентской валидации</li></ul>",
      "explain": [
        [
          "HTML",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 6 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Создать styles.css и связать его с HTML.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html + styles.css",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "HTML",
        "CSS",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "<section>",
          "meaning": "Смысловой раздел страницы.",
          "when": "Для Hero, About, Menu, Gallery и т.д.",
          "example": "<section id=\"menu\"><h2>Меню</h2></section>",
          "insert": "Внутри main.",
          "tip": "Хорошо, когда секция имеет заголовок и понятную цель."
        },
        {
          "syntax": "<a>",
          "meaning": "Ссылка. href определяет, куда перейти.",
          "when": "Для навигации и CTA.",
          "example": "<a href=\"#menu\">Меню</a>",
          "insert": "В nav или CTA.",
          "tip": "Для перехода внутри страницы используй #id."
        },
        {
          "syntax": "id",
          "meaning": "Уникальное имя элемента.",
          "when": "Для якорей и JS.",
          "example": "<section id=\"contacts\">",
          "insert": "Добавь id на нужный элемент.",
          "tip": "Один id не должен повторяться."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "CSS",
          "where": "В head index.html",
          "instruction": "Подключаем CSS: `<link rel=\"stylesheet\" href=\"styles.css\">`.",
          "code": "<link rel=\"stylesheet\" href=\"styles.css\">",
          "result": "После создания файла styles.css браузер сможет читать CSS.",
          "connect": "HTML создаёт элементы → CSS выбирает их и меняет внешний вид."
        },
        {
          "n": 2,
          "area": "CSS",
          "where": "В styles.css, первая строка",
          "instruction": "Пишем `* { box-sizing: border-box; }` — размер включает padding и border.",
          "code": "* { box-sizing: border-box; }",
          "result": "Размер блоков становится предсказуемее.",
          "connect": "Это базовое правило удобно поставить в начале CSS."
        },
        {
          "n": 3,
          "area": "CSS",
          "where": "Для body",
          "instruction": "Пишем `body { margin: 0; }` — убираем стандартный отступ браузера.",
          "code": "body { margin: 0; }",
          "result": "Контент касается краёв окна без стандартной рамки.",
          "connect": "Дальше добавим фон и шрифт."
        },
        {
          "n": 4,
          "area": "CSS",
          "where": "Для body",
          "instruction": "Пишем `body { font-family: Arial, sans-serif; }`.",
          "code": "body { font-family: Arial, sans-serif; }",
          "result": "Меняется шрифт страницы.",
          "connect": "Все дочерние элементы обычно наследуют font-family."
        },
        {
          "n": 5,
          "area": "CSS",
          "where": "Для h1",
          "instruction": "Пишем `.hero h1 { margin: 0; }` — выбираем h1 внутри Hero.",
          "code": ".hero h1 { margin: 0; }",
          "result": "Убирается стандартный внешний отступ h1.",
          "connect": "Селектор `.hero h1` означает: h1 внутри элемента с class=\"hero\"."
        },
        {
          "n": 6,
          "area": "CSS",
          "where": "Проверка связи",
          "instruction": "Сохрани Ctrl+S → Chrome → Ctrl+R.",
          "code": "body { background: #080808; color: white; }",
          "result": "Если фон стал тёмным — CSS подключён.",
          "connect": "Если нет — сначала проверь путь href=\"styles.css\" и имя файла."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>Секция</h2><p>HTML создаёт блок, CSS задаёт его размеры, отступы и вид.</p><a class=\"btn\" href=\"#\">CTA</a></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 7,
      "title": "CSS: текст, цвета и шрифты",
      "desc": "Cascade, specificity, классы, id и подключение CSS.",
      "tag": "CSS",
      "body": "<h3>CSS</h3><p>Подключи CSS через link. `.` выбирает класс, `#` — id, селектор тега — соответствующий HTML-тег. Учись давать классам смысловые имена.</p><h3>Код</h3><pre>* { box-sizing: border-box; }\nbody { margin: 0; background: #111; color: #fff; }\n.hero-title { font-size: 64px; }</pre><h3>Задание</h3><div class='task'>Создай .site-header, .hero и .button. Не стилизуй всё через id.</div><h3>Чек</h3><ul><li>☐ Умею подключить CSS</li><li>☐ Понимаю class/id/tag</li><li>☐ Понимаю cascade</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 7"
      ],
      "steps": [
        "Открой styles.css.",
        "Настрой body: background, color, font-family и line-height.",
        "Настрой h1 через font-size и font-weight.",
        "Настрой p через font-size и line-height.",
        "Настрой ссылку как CTA.",
        "Меняй по одному свойству и наблюдай результат."
      ],
      "code": "<h3>CSS</h3><p>Подключи CSS через link. `.` выбирает класс, `#` — id, селектор тега — соответствующий HTML-тег. Учись давать классам смысловые имена.</p><h3>Код</h3>* { box-sizing: border-box; }\nbody { margin: 0; background: #111; color: #fff; }\n.hero-title { font-size: 64px; }<h3>Задание</h3><div class='task'>Создай .site-header, .hero и .button. Не стилизуй всё через id.</div><h3>Чек</h3><ul><li>☐ Умею подключить CSS</li><li>☐ Понимаю class/id/tag</li><li>☐ Понимаю cascade</li></ul>",
      "explain": [
        [
          "CSS",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 7 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Построить визуальную иерархию текста.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html + styles.css",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "CSS",
        "CSS",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "class",
          "meaning": "Имя элемента, которое можно использовать в CSS и JS.",
          "when": "Для повторяемых компонентов.",
          "example": "<div class=\"card\">...</div>",
          "insert": "Добавь class в HTML → используй .card в CSS.",
          "tip": "Один class можно использовать много раз."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "CSS",
          "where": "Для body",
          "instruction": "Задаём `background` — фон страницы.",
          "code": "body { background: #080808; }",
          "result": "Страница становится тёмной.",
          "connect": "Цвет задаётся CSS, HTML только содержит контент."
        },
        {
          "n": 2,
          "area": "CSS",
          "where": "Для body",
          "instruction": "Задаём `color` — основной цвет текста.",
          "code": "body { color: #f5f5f5; }",
          "result": "Обычный текст становится светлым.",
          "connect": "Отдельные элементы позже получат свои цвета."
        },
        {
          "n": 3,
          "area": "CSS",
          "where": "Для h1",
          "instruction": "Пишем `font-size` — размер текста.",
          "code": ".hero h1 { font-size: 64px; }",
          "result": "Заголовок становится крупнее.",
          "connect": "Размер можно потом сделать адаптивным через clamp."
        },
        {
          "n": 4,
          "area": "CSS",
          "where": "Для h1",
          "instruction": "Пишем `font-weight` — толщину текста.",
          "code": ".hero h1 { font-weight: 800; }",
          "result": "Заголовок становится плотнее/жирнее.",
          "connect": "100–900 — условная шкала толщины, если шрифт её поддерживает."
        },
        {
          "n": 5,
          "area": "CSS",
          "where": "Для p",
          "instruction": "Пишем `line-height` — расстояние между строками.",
          "code": ".hero p { line-height: 1.6; }",
          "result": "Длинный текст становится легче читать.",
          "connect": "Это особенно важно для мобильных экранов."
        },
        {
          "n": 6,
          "area": "CSS",
          "where": "Для CTA",
          "instruction": "Пишем `.btn { text-decoration: none; }`, чтобы убрать подчёркивание ссылки.",
          "code": ".btn { text-decoration: none; }",
          "result": "Ссылка начинает выглядеть как основа будущей кнопки.",
          "connect": "Дальше добавим padding, background и border-radius."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>Секция</h2><p>HTML создаёт блок, CSS задаёт его размеры, отступы и вид.</p><a class=\"btn\" href=\"#\">CTA</a></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 8,
      "title": "CSS: box model",
      "desc": "Типографика, цвета, line-height и читаемость.",
      "tag": "CSS",
      "body": "<h3>Типографика</h3><p>Настрой font-family, font-weight, line-height, letter-spacing и max-width. Сначала читаемость, потом декоративность.</p><h3>Практика</h3><p>Подключи шрифт через Google Fonts или используй системный стек. Создай систему H1, H2, body, small и button.</p><h3>Чек</h3><ul><li>☐ Понимаю line-height</li><li>☐ Умею настроить текст</li><li>☐ Избегаю слишком длинных строк</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 8"
      ],
      "steps": [
        "В начале CSS добавь * { box-sizing: border-box; }.",
        "Убери стандартный margin у body.",
        "Для section задай padding.",
        "Для CTA добавь padding и border-radius.",
        "Для img задай max-width:100%.",
        "Открой DevTools → Computed → Box Model."
      ],
      "code": "<h3>Типографика</h3><p>Настрой font-family, font-weight, line-height, letter-spacing и max-width. Сначала читаемость, потом декоративность.</p><h3>Практика</h3><p>Подключи шрифт через Google Fonts или используй системный стек. Создай систему H1, H2, body, small и button.</p><h3>Чек</h3><ul><li>☐ Понимаю line-height</li><li>☐ Умею настроить текст</li><li>☐ Избегаю слишком длинных строк</li></ul>",
      "explain": [
        [
          "CSS",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 8 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Понять padding, margin, border и box-sizing.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html + styles.css",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "CSS",
        "CSS",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "display: grid",
          "meaning": "Включает CSS Grid.",
          "when": "Для сеток карточек.",
          "example": "display:grid;",
          "insert": "На родителе карточек.",
          "tip": "Добавь grid-template-columns."
        },
        {
          "syntax": "grid-template-columns",
          "meaning": "Задаёт колонки Grid.",
          "when": "Для количества колонок и их ширины.",
          "example": "grid-template-columns:repeat(3,1fr);",
          "insert": "В .menu-grid.",
          "tip": "1fr означает долю доступного пространства."
        },
        {
          "syntax": "gap",
          "meaning": "Расстояние между flex/grid-элементами.",
          "when": "Для сеток и меню.",
          "example": "gap:24px;",
          "insert": "На контейнере.",
          "tip": "Часто удобнее, чем много margin."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "CSS",
          "where": ".hero",
          "instruction": "Пишем `padding` — внутреннее пространство блока.",
          "code": ".hero { padding: 80px 24px; }",
          "result": "Контент отодвигается от краёв блока.",
          "connect": "Padding находится внутри элемента."
        },
        {
          "n": 2,
          "area": "CSS",
          "where": ".hero h1",
          "instruction": "Пишем `margin-bottom` — расстояние после заголовка.",
          "code": ".hero h1 { margin-bottom: 20px; }",
          "result": "Между h1 и следующим элементом появляется место.",
          "connect": "Margin находится снаружи элемента."
        },
        {
          "n": 3,
          "area": "CSS",
          "where": ".hero",
          "instruction": "Пишем `max-width` для ограничения ширины.",
          "code": ".hero { max-width: 1200px; }",
          "result": "Слишком широкий блок перестаёт растягиваться бесконечно.",
          "connect": "Обычно max-width объединяют с margin: 0 auto."
        },
        {
          "n": 4,
          "area": "CSS",
          "where": ".hero",
          "instruction": "Пишем `margin: 0 auto` — центрируем блок по горизонтали.",
          "code": ".hero { margin: 0 auto; }",
          "result": "Блок с ограниченной шириной становится по центру.",
          "connect": "Это работает, когда есть доступная ширина меньше max-width."
        },
        {
          "n": 5,
          "area": "CSS",
          "where": ".btn",
          "instruction": "Пишем `padding: 14px 20px` — увеличиваем кликабельную область.",
          "code": ".btn { padding: 14px 20px; }",
          "result": "CTA становится похожей на настоящую кнопку.",
          "connect": "Padding добавляет место внутри ссылки."
        },
        {
          "n": 6,
          "area": "CSS",
          "where": ".btn",
          "instruction": "Пишем `border-radius: 999px` — скругляем кнопку.",
          "code": ".btn { border-radius: 999px; }",
          "result": "Кнопка становится pill-формы.",
          "connect": "Позже hover изменит её при наведении."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>Секция</h2><p>HTML создаёт блок, CSS задаёт его размеры, отступы и вид.</p><a class=\"btn\" href=\"#\">CTA</a></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 9,
      "title": "CSS: контейнер сайта",
      "desc": "width, height, padding, border, margin, box-sizing.",
      "tag": "CSS",
      "body": "<h3>Box Model</h3><p>Каждый элемент — content, padding, border и margin. `box-sizing:border-box` делает расчёты предсказуемее.</p><h3>Код</h3><pre>.card {\n  width: 320px;\n  padding: 24px;\n  border: 1px solid #333;\n  margin: 16px;\n  box-sizing: border-box;\n}</pre><h3>Задание</h3><div class='task'>Сделай карточку блюда и поэкспериментируй с padding/margin в DevTools.</div><h3>Чек</h3><ul><li>☐ Объясняю padding vs margin</li><li>☐ Понимаю border-box</li><li>☐ Умею отлаживать размеры</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 9"
      ],
      "steps": [
        "В HTML оберни содержимое крупных частей в div class=\"container\".",
        "В CSS создай .container.",
        "Задай width:100%.",
        "Задай max-width:1180px.",
        "Задай margin-inline:auto.",
        "Добавь горизонтальный padding.",
        "Посмотри, как все секции выровнялись."
      ],
      "code": "<h3>Box Model</h3><p>Каждый элемент — content, padding, border и margin. `box-sizing:border-box` делает расчёты предсказуемее.</p><h3>Код</h3>.card {\n  width: 320px;\n  padding: 24px;\n  border: 1px solid #333;\n  margin: 16px;\n  box-sizing: border-box;\n}<h3>Задание</h3><div class='task'>Сделай карточку блюда и поэкспериментируй с padding/margin в DevTools.</div><h3>Чек</h3><ul><li>☐ Объясняю padding vs margin</li><li>☐ Понимаю border-box</li><li>☐ Умею отлаживать размеры</li></ul>",
      "explain": [
        [
          "CSS",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 9 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Сделать единую ширину и выравнивание всех секций.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html + styles.css",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "CSS",
        "CSS",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "box-sizing",
          "meaning": "Определяет, как браузер считает размеры с padding и border.",
          "when": "Обычно задают глобально.",
          "example": "*,*::before,*::after{box-sizing:border-box;}",
          "insert": "В начале CSS.",
          "tip": "border-box упрощает расчёт ширины."
        },
        {
          "syntax": "padding",
          "meaning": "Внутренний отступ.",
          "when": "Для карточек, кнопок, секций.",
          "example": "padding:24px;",
          "insert": "В CSS нужного элемента.",
          "tip": "Не путай с margin."
        },
        {
          "syntax": "margin",
          "meaning": "Внешний отступ.",
          "when": "Для расстояния снаружи.",
          "example": "margin-top:40px;",
          "insert": "В CSS элемента.",
          "tip": "Для grid/flex чаще лучше gap."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "HTML",
          "where": "Внутри main вокруг контента",
          "instruction": "Пишем `<div class=\"container\">` — общий контейнер.",
          "code": "<div class=\"container\">...контент...</div>",
          "result": "Появляется единый родитель для ширины сайта.",
          "connect": "Все основные секции можно поместить внутрь container."
        },
        {
          "n": 2,
          "area": "CSS",
          "where": ".container",
          "instruction": "Пишем `width: min(100% - 40px, 1200px)` — ограничиваем ширину и оставляем поля.",
          "code": ".container { width: min(100% - 40px, 1200px); }",
          "result": "Контент получает одинаковые боковые поля.",
          "connect": "min() выбирает меньшее из значений."
        },
        {
          "n": 3,
          "area": "CSS",
          "where": ".container",
          "instruction": "Пишем `margin-inline: auto` — центрируем контейнер.",
          "code": ".container { margin-inline: auto; }",
          "result": "Контент выравнивается по центру.",
          "connect": "margin-inline работает слева/справа независимо от направления текста."
        },
        {
          "n": 4,
          "area": "CSS",
          "where": "Секциям",
          "instruction": "Пишем `padding-block: 80px` — вертикальные поля секций.",
          "code": ".section { padding-block: 80px; }",
          "result": "Секции перестают слипаться.",
          "connect": "Один класс можно повторно использовать для About, Menu, Gallery."
        },
        {
          "n": 5,
          "area": "CSS",
          "where": "Проверка",
          "instruction": "Сравниваем левый край Header, Hero и Menu.",
          "code": "<div class=\"container\">...</div>",
          "result": "Все важные элементы имеют одну вертикальную линию.",
          "connect": "Это основа аккуратной композиции сайта."
        },
        {
          "n": 6,
          "area": "CSS",
          "where": "Связь",
          "instruction": "Запоминаем цепочку: HTML `.container` → CSS `.container` → все вложенные элементы получают общую ширину.",
          "code": "class=\"container\"\n.container { ... }",
          "result": "Видим, как имя из HTML становится селектором CSS.",
          "connect": "Эта схема повторится сотни раз в реальной работе."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>Секция</h2><p>HTML создаёт блок, CSS задаёт его размеры, отступы и вид.</p><a class=\"btn\" href=\"#\">CTA</a></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 10,
      "title": "CSS: Flexbox и Header",
      "desc": "Навигация, карточки, выравнивание и gap.",
      "tag": "CSS",
      "body": "<h3>Flexbox</h3><p>Flexbox удобен для одномерной раскладки. Главное: display:flex, justify-content, align-items, gap и flex-wrap.</p><h3>Код</h3><pre>.nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n}</pre><h3>Задание</h3><div class='task'>Сделай header: логотип, меню и CTA. Затем адаптируй его для мобильного.</div><h3>Чек</h3><ul><li>☐ Понимаю оси flex</li><li>☐ Умею gap</li><li>☐ Умею выравнивание</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 10"
      ],
      "steps": [
        "В header найди container.",
        "Включи display:flex.",
        "Добавь justify-content:space-between.",
        "Добавь align-items:center.",
        "Для nav тоже включи flex.",
        "Для nav добавь gap.",
        "Измени gap и посмотри результат."
      ],
      "code": "<h3>Flexbox</h3><p>Flexbox удобен для одномерной раскладки. Главное: display:flex, justify-content, align-items, gap и flex-wrap.</p><h3>Код</h3>.nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n}<h3>Задание</h3><div class='task'>Сделай header: логотип, меню и CTA. Затем адаптируй его для мобильного.</div><h3>Чек</h3><ul><li>☐ Понимаю оси flex</li><li>☐ Умею gap</li><li>☐ Умею выравнивание</li></ul>",
      "explain": [
        [
          "CSS",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 10 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Поставить логотип и навигацию в одну строку.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html + styles.css",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "CSS",
        "CSS",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "display: flex",
          "meaning": "Включает Flexbox.",
          "when": "Для строк, меню и выравнивания.",
          "example": "display:flex;",
          "insert": "На родителе.",
          "tip": "Потом добавляй gap, align-items, justify-content."
        },
        {
          "syntax": "gap",
          "meaning": "Расстояние между flex/grid-элементами.",
          "when": "Для сеток и меню.",
          "example": "gap:24px;",
          "insert": "На контейнере.",
          "tip": "Часто удобнее, чем много margin."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "HTML",
          "where": "В header",
          "instruction": "Добавляем класс `header`.",
          "code": "<header class=\"header\">...</header>",
          "result": "Теперь header можно стилизовать отдельно.",
          "connect": "CSS `.header` будет работать только с этим блоком."
        },
        {
          "n": 2,
          "area": "CSS",
          "where": ".header",
          "instruction": "Пишем `display: flex` — включаем Flexbox.",
          "code": ".header { display: flex; }",
          "result": "Дочерние элементы начинают выстраиваться по главной оси.",
          "connect": "Flexbox особенно удобен для Header."
        },
        {
          "n": 3,
          "area": "CSS",
          "where": ".header",
          "instruction": "Пишем `align-items: center` — выравниваем элементы по поперечной оси.",
          "code": ".header { align-items: center; }",
          "result": "Logo и nav становятся ровнее по вертикали.",
          "connect": "Это одна из самых частых связок Flexbox."
        },
        {
          "n": 4,
          "area": "CSS",
          "where": ".header",
          "instruction": "Пишем `justify-content: space-between` — раздвигаем группы.",
          "code": ".header { justify-content: space-between; }",
          "result": "Logo уходит влево, nav — вправо.",
          "connect": "Главная ось зависит от flex-direction."
        },
        {
          "n": 5,
          "area": "CSS",
          "where": ".header",
          "instruction": "Пишем `gap: 24px` — расстояние между flex-элементами.",
          "code": ".header { gap: 24px; }",
          "result": "Между элементами появляется одинаковый промежуток.",
          "connect": "gap лучше, чем куча margin у отдельных элементов."
        },
        {
          "n": 6,
          "area": "CSS",
          "where": ".btn",
          "instruction": "Добавляем `display: inline-flex; align-items:center; justify-content:center`.",
          "code": ".btn { display: inline-flex; align-items: center; justify-content: center; }",
          "result": "Текст кнопки центрируется предсказуемо.",
          "connect": "Flexbox работает не только на больших контейнерах."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><header class=\"head\"><b>Motownia</b><nav><a href=\"#menu\">Menu</a><a href=\"#contact\">Kontakt</a></nav></header><section class=\"box\"><h1>Flexbox Header</h1></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 11,
      "title": "CSS: Flexbox и Hero",
      "desc": "Сетки меню, галереи и двумерная раскладка.",
      "tag": "CSS",
      "body": "<h3>Grid</h3><p>Grid удобен для двумерных сеток. Используй repeat, minmax, columns и gap.</p><h3>Код</h3><pre>.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 24px;\n}</pre><h3>Задание</h3><div class='task'>Сделай 6 блюд в 3 колонки и 1 колонку на мобильном.</div><h3>Чек</h3><ul><li>☐ Понимаю Grid</li><li>☐ Умею repeat/minmax</li><li>☐ Могу построить галерею</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 11"
      ],
      "steps": [
        "В Hero создай две части: hero-copy и hero-media.",
        "Помести текст в hero-copy, картинку в hero-media.",
        "Для общего блока включи display:flex.",
        "Добавь align-items:center и gap.",
        "Дай обеим частям flex:1.",
        "Проверь результат на desktop."
      ],
      "code": "<h3>Grid</h3><p>Grid удобен для двумерных сеток. Используй repeat, minmax, columns и gap.</p><h3>Код</h3>.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 24px;\n}<h3>Задание</h3><div class='task'>Сделай 6 блюд в 3 колонки и 1 колонку на мобильном.</div><h3>Чек</h3><ul><li>☐ Понимаю Grid</li><li>☐ Умею repeat/minmax</li><li>☐ Могу построить галерею</li></ul>",
      "explain": [
        [
          "CSS",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 11 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Сделать красивую композицию текста и фото.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html + styles.css",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "CSS",
        "CSS",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": ":hover",
          "meaning": "Состояние элемента при наведении курсора.",
          "when": "Для кнопок и карточек.",
          "example": ".button:hover{...}",
          "insert": "После основного селектора.",
          "tip": "Добавляй transition в обычный селектор."
        },
        {
          "syntax": "transition",
          "meaning": "Делает изменение свойства плавным.",
          "when": "Для hover/focus.",
          "example": "transition:transform .2s ease;",
          "insert": "В основном селекторе.",
          "tip": "Не ставь transition только внутри hover."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "HTML",
          "where": "Hero section",
          "instruction": "Добавляем класс `hero` и внутренний `hero__content`.",
          "code": "<section class=\"hero\"><div class=\"hero__content\">...</div></section>",
          "result": "Получаем отдельный блок Hero.",
          "connect": "CSS будет оформлять Hero и его контент отдельно."
        },
        {
          "n": 2,
          "area": "CSS",
          "where": ".hero",
          "instruction": "Пишем `min-height: 70vh` — Hero занимает большую часть экрана.",
          "code": ".hero { min-height: 70vh; }",
          "result": "Hero становится высоким.",
          "connect": "vh — процент высоты окна браузера."
        },
        {
          "n": 3,
          "area": "CSS",
          "where": ".hero",
          "instruction": "Пишем `display: flex; align-items: center`.",
          "code": ".hero { display: flex; align-items: center; }",
          "result": "Контент можно центрировать по вертикали.",
          "connect": "Главная ось по умолчанию горизонтальная."
        },
        {
          "n": 4,
          "area": "CSS",
          "where": ".hero__content",
          "instruction": "Пишем `max-width: 720px`.",
          "code": ".hero__content { max-width: 720px; }",
          "result": "Текст не растягивается на весь экран.",
          "connect": "Ограничение ширины улучшает читаемость."
        },
        {
          "n": 5,
          "area": "CSS",
          "where": ".hero h1",
          "instruction": "Пишем `font-size: clamp(42px, 7vw, 88px)`.",
          "code": ".hero h1 { font-size: clamp(42px, 7vw, 88px); }",
          "result": "Размер h1 плавно меняется вместе с экраном.",
          "connect": "Это связывает desktop и mobile без отдельного размера для каждого пикселя."
        },
        {
          "n": 6,
          "area": "CSS",
          "where": ".hero",
          "instruction": "Пишем `padding: 40px 0`.",
          "code": ".hero { padding: 40px 0; }",
          "result": "Контент получает безопасное пространство сверху/снизу.",
          "connect": "Padding + min-height создают устойчивый Hero."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"hero\"><div><h1>Hero</h1><p>Заголовок + текст + CTA в одном блоке.</p><a class=\"btn\" href=\"#\">Забронировать</a></div></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 12,
      "title": "CSS: Grid и Menu",
      "desc": "relative, absolute, fixed, sticky и z-index.",
      "tag": "CSS",
      "body": "<h3>Position</h3><p>relative создаёт контекст для absolute. fixed привязан к viewport, sticky — к прокрутке. z-index управляет слоями.</p><h3>Задание</h3><div class='task'>Добавь поверх hero бейдж с часами работы и сделай header sticky.</div><h3>Чек</h3><ul><li>☐ Знаю relative/absolute/fixed/sticky</li><li>☐ Понимаю z-index</li><li>☐ Не использую absolute для всей раскладки</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 12"
      ],
      "steps": [
        "В Menu создай menu-grid.",
        "Каждое блюдо оберни в article menu-card.",
        "Для menu-grid включи display:grid.",
        "Создай repeat(3, 1fr).",
        "Добавь gap.",
        "Оформи карточки через padding, border и radius."
      ],
      "code": "<h3>Position</h3><p>relative создаёт контекст для absolute. fixed привязан к viewport, sticky — к прокрутке. z-index управляет слоями.</p><h3>Задание</h3><div class='task'>Добавь поверх hero бейдж с часами работы и сделай header sticky.</div><h3>Чек</h3><ul><li>☐ Знаю relative/absolute/fixed/sticky</li><li>☐ Понимаю z-index</li><li>☐ Не использую absolute для всей раскладки</li></ul>",
      "explain": [
        [
          "CSS",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 12 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Создать сетку карточек блюд.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html + styles.css",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "CSS",
        "CSS",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "display: grid",
          "meaning": "Включает CSS Grid.",
          "when": "Для сеток карточек.",
          "example": "display:grid;",
          "insert": "На родителе карточек.",
          "tip": "Добавь grid-template-columns."
        },
        {
          "syntax": "max-width",
          "meaning": "Ограничивает максимальную ширину.",
          "when": "Для контейнера и текста.",
          "example": "max-width:1200px;",
          "insert": "На .container.",
          "tip": "Помогает не растягивать контент на огромном мониторе."
        },
        {
          "syntax": "gap",
          "meaning": "Расстояние между flex/grid-элементами.",
          "when": "Для сеток и меню.",
          "example": "gap:24px;",
          "insert": "На контейнере.",
          "tip": "Часто удобнее, чем много margin."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "HTML",
          "where": "В Menu",
          "instruction": "Для каждой карточки создаём `<article class=\"menu-card\">`.",
          "code": "<article class=\"menu-card\"><h3>Ramen</h3><p>Описание</p></article>",
          "result": "Каждое блюдо становится отдельным компонентом.",
          "connect": "Один class можно использовать много раз."
        },
        {
          "n": 2,
          "area": "CSS",
          "where": ".menu-grid",
          "instruction": "Пишем `display: grid`.",
          "code": ".menu-grid { display: grid; }",
          "result": "Контейнер превращается в CSS Grid.",
          "connect": "Grid удобен для сеток карточек."
        },
        {
          "n": 3,
          "area": "CSS",
          "where": ".menu-grid",
          "instruction": "Пишем `grid-template-columns: repeat(3, 1fr)`.",
          "code": ".menu-grid { grid-template-columns: repeat(3, 1fr); }",
          "result": "Получаем 3 равные колонки.",
          "connect": "`1fr` — одна доля доступного пространства."
        },
        {
          "n": 4,
          "area": "CSS",
          "where": ".menu-grid",
          "instruction": "Пишем `gap: 20px`.",
          "code": ".menu-grid { gap: 20px; }",
          "result": "Между карточками появляется одинаковое расстояние.",
          "connect": "Не нужно вручную задавать margin каждой карточке."
        },
        {
          "n": 5,
          "area": "CSS",
          "where": ".menu-card",
          "instruction": "Пишем `padding: 24px`.",
          "code": ".menu-card { padding: 24px; }",
          "result": "Контент отодвигается от края карточки.",
          "connect": "Это часть box model."
        },
        {
          "n": 6,
          "area": "CSS",
          "where": ".menu-card",
          "instruction": "Пишем `border: 1px solid #2a2a2a` и `border-radius: 20px`.",
          "code": ".menu-card { border: 1px solid #2a2a2a; border-radius: 20px; }",
          "result": "Карточки получают границу и скругление.",
          "connect": "Теперь Grid + box model работают вместе."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>Menu Grid</h2><div class=\"cards\"><article>01 · Ramen</article><article>02 · Steak</article><article>03 · Pasta</article></div></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 13,
      "title": "CSS: адаптация под телефон",
      "desc": "Mobile-first, media queries, clamp и responsive layout.",
      "tag": "Responsive",
      "body": "<h3>Responsive</h3><p>Используй mobile-first, относительные размеры, max-width, clamp и media queries.</p><h3>Код</h3><pre>.container { width: min(1120px, calc(100% - 32px)); margin: auto; }\n.title { font-size: clamp(40px, 7vw, 72px); }\n@media (max-width: 700px) { .nav { display:none; } }</pre><h3>Задание</h3><div class='task'>Проверь 320, 375, 768, 1024 и 1440px. Не допускай горизонтального скролла.</div><h3>Чек</h3><ul><li>☐ Сайт не ломается на телефоне</li><li>☐ CTA удобны пальцем</li><li>☐ Текст не выходит за экран</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 13"
      ],
      "steps": [
        "Открой DevTools responsive mode.",
        "Проверь ширину 390px.",
        "Создай @media (max-width:760px).",
        "Hero сделай flex-direction:column.",
        "Menu сделай одной колонкой.",
        "Уменьши h1 через clamp.",
        "Проверь 320, 390 и 430px."
      ],
      "code": "<h3>Responsive</h3><p>Используй mobile-first, относительные размеры, max-width, clamp и media queries.</p><h3>Код</h3>.container { width: min(1120px, calc(100% - 32px)); margin: auto; }\n.title { font-size: clamp(40px, 7vw, 72px); }\n@media (max-width: 700px) { .nav { display:none; } }<h3>Задание</h3><div class='task'>Проверь 320, 375, 768, 1024 и 1440px. Не допускай горизонтального скролла.</div><h3>Чек</h3><ul><li>☐ Сайт не ломается на телефоне</li><li>☐ CTA удобны пальцем</li><li>☐ Текст не выходит за экран</li></ul>",
      "explain": [
        [
          "Responsive",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 13 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Научиться media queries и исправить mobile.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html + styles.css",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "Responsive",
        "CSS",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "@media",
          "meaning": "Включает CSS только при заданном условии экрана.",
          "when": "Для адаптивной версии.",
          "example": "@media (max-width:768px){...}",
          "insert": "Внизу styles.css.",
          "tip": "Проверяй 320–430px, а не только один телефон."
        },
        {
          "syntax": "max-width",
          "meaning": "Ограничивает максимальную ширину.",
          "when": "Для контейнера и текста.",
          "example": "max-width:1200px;",
          "insert": "На .container.",
          "tip": "Помогает не растягивать контент на огромном мониторе."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "CSS",
          "where": ".menu-grid",
          "instruction": "Пишем `grid-template-columns: repeat(2, 1fr)` в media query.",
          "code": "@media (max-width: 900px) { .menu-grid { grid-template-columns: repeat(2, 1fr); } }",
          "result": "На среднем экране карточек становится две в ряд.",
          "connect": "Мы меняем только сетку, HTML остаётся тем же."
        },
        {
          "n": 2,
          "area": "CSS",
          "where": ".menu-grid",
          "instruction": "Пишем одну колонку для телефона.",
          "code": "@media (max-width: 600px) { .menu-grid { grid-template-columns: 1fr; } }",
          "result": "На телефоне карточки становятся друг под другом.",
          "connect": "Это простой responsive-паттерн."
        },
        {
          "n": 3,
          "area": "CSS",
          "where": ".header",
          "instruction": "В mobile query пишем `flex-wrap: wrap`.",
          "code": "@media (max-width: 600px) { .header { flex-wrap: wrap; } }",
          "result": "Header может переноситься, если места мало.",
          "connect": "Позже JS сделает настоящее мобильное меню."
        },
        {
          "n": 4,
          "area": "CSS",
          "where": ".hero",
          "instruction": "Уменьшаем горизонтальные поля.",
          "code": "@media (max-width: 600px) { .hero { padding-inline: 20px; } }",
          "result": "На маленьком экране контент не прилипает к краям.",
          "connect": "Старайся проверять 320px, 390px и 768px."
        },
        {
          "n": 5,
          "area": "CSS",
          "where": ".hero h1",
          "instruction": "Проверяем clamp на телефоне, не создавая второй font-size.",
          "code": ".hero h1 { font-size: clamp(42px, 12vw, 72px); }",
          "result": "Заголовок остаётся крупным, но не ломает экран.",
          "connect": "clamp помогает уменьшить количество media queries."
        },
        {
          "n": 6,
          "area": "Проверка",
          "where": "Chrome DevTools",
          "instruction": "Нажимаем F12 → Toggle device toolbar и проверяем 320/390/768/1440.",
          "code": "—",
          "result": "Видим, где появляются горизонтальный скролл или слишком большие элементы.",
          "connect": "Responsive — это проверка результата, а не только написание media query."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>Responsive</h2><div class=\"cards\"><article>01</article><article>02</article><article>03</article></div><p>Уменьши окно: 3 → 2 → 1 колонка.</p></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 14,
      "title": "CSS: фото на фоне Hero",
      "desc": "hover, focus, active, checked и доступность.",
      "tag": "CSS",
      "body": "<h3>Состояния</h3><p>Псевдоклассы дают состояния без JS. Особое внимание :focus-visible для клавиатуры.</p><h3>Код</h3><pre>.button:hover { transform: translateY(-2px); }\n.button:active { transform: translateY(0); }\n.button:focus-visible { outline: 3px solid #d7ff5f; }</pre><h3>Задание</h3><div class='task'>Сделай hover/focus для кнопок, ссылок и полей. Пройди страницу клавишей Tab.</div><h3>Чек</h3><ul><li>☐ Есть hover</li><li>☐ Есть focus</li><li>☐ Сайт usable без мыши</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 14"
      ],
      "steps": [
        "Добавь большой Hero-блок с background-image.",
        "Используй linear-gradient поверх фотографии.",
        "Поставь background-size:cover.",
        "Поставь background-position:center.",
        "Задай min-height.",
        "Проверь читаемость текста на фото."
      ],
      "code": "<h3>Состояния</h3><p>Псевдоклассы дают состояния без JS. Особое внимание :focus-visible для клавиатуры.</p><h3>Код</h3>.button:hover { transform: translateY(-2px); }\n.button:active { transform: translateY(0); }\n.button:focus-visible { outline: 3px solid #d7ff5f; }<h3>Задание</h3><div class='task'>Сделай hover/focus для кнопок, ссылок и полей. Пройди страницу клавишей Tab.</div><h3>Чек</h3><ul><li>☐ Есть hover</li><li>☐ Есть focus</li><li>☐ Сайт usable без мыши</li></ul>",
      "explain": [
        [
          "CSS",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 14 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Сделать затемнение и кинематографичный первый экран.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html + styles.css",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "CSS",
        "CSS",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "position: relative",
          "meaning": "Создаёт точку отсчёта для absolute-потомков.",
          "when": "Для overlay, бейджей.",
          "example": "position:relative;",
          "insert": "На родителе.",
          "tip": "Сам элемент остаётся в потоке."
        },
        {
          "syntax": "position: absolute",
          "meaning": "Позволяет положить элемент в конкретное место относительно positioned-родителя.",
          "when": "Для overlay и декоративных элементов.",
          "example": "position:absolute;inset:0;",
          "insert": "На дочернем overlay.",
          "tip": "Родителю обычно нужен position:relative."
        },
        {
          "syntax": "z-index",
          "meaning": "Управляет порядком перекрывающихся слоёв.",
          "when": "Для текста поверх overlay и модалок.",
          "example": "z-index:2;",
          "insert": "На элементе, который должен быть выше.",
          "tip": "Не является универсальным решением всех stacking context."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "HTML",
          "where": "На Hero section",
          "instruction": "Добавляем класс `hero--image`.",
          "code": "<section class=\"hero hero--image\">...</section>",
          "result": "Теперь Hero имеет два класса: базовый и вариант с фото.",
          "connect": "Один элемент может иметь несколько классов через пробел."
        },
        {
          "n": 2,
          "area": "CSS",
          "where": ".hero--image",
          "instruction": "Пишем `background-image: url(\"...\")`.",
          "code": ".hero--image { background-image: url(\"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85\"); }",
          "result": "Фото становится фоном секции.",
          "connect": "Фон находится позади контента и не создаёт отдельный img-элемент."
        },
        {
          "n": 3,
          "area": "CSS",
          "where": ".hero--image",
          "instruction": "Пишем `background-size: cover`.",
          "code": ".hero--image { background-size: cover; }",
          "result": "Фото заполняет весь Hero, возможно обрезаясь.",
          "connect": "cover сохраняет пропорции и заполняет область."
        },
        {
          "n": 4,
          "area": "CSS",
          "where": ".hero--image",
          "instruction": "Пишем `background-position: center`.",
          "code": ".hero--image { background-position: center; }",
          "result": "Центр изображения остаётся в центре блока.",
          "connect": "Можно менять на `center top`, если важен верх фото."
        },
        {
          "n": 5,
          "area": "CSS",
          "where": ".hero--image",
          "instruction": "Добавляем `position: relative`.",
          "code": ".hero--image { position: relative; }",
          "result": "Hero становится опорой для будущего overlay.",
          "connect": "Это связывает position родителя и absolute-псевдоэлемент."
        },
        {
          "n": 6,
          "area": "CSS",
          "where": ".hero--image",
          "instruction": "Добавляем overlay через `::before`.",
          "code": ".hero--image::before { content: \"\"; position: absolute; inset: 0; background: rgba(0,0,0,.45); }",
          "result": "Фото затемняется, текст становится читаемее.",
          "connect": "::before — псевдоэлемент; `inset:0` растягивает его по всем сторонам."
        },
        {
          "n": 7,
          "area": "CSS",
          "where": ".hero__content",
          "instruction": "Поднимаем контент поверх overlay: `position: relative; z-index: 1`.",
          "code": ".hero__content { position: relative; z-index: 1; }",
          "result": "Текст остаётся поверх затемнения.",
          "connect": "Это полноценная комбинация: background → overlay → content."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"hero photo-bg\"><div><h1>Фото на фоне</h1><p>Background image + overlay + content.</p></div></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 15,
      "title": "CSS: hover и focus",
      "desc": "transition, transform, keyframes и reduced motion.",
      "tag": "CSS",
      "body": "<h3>Анимации</h3><p>Изучай transition, transform, opacity и @keyframes. Анимации должны помогать интерфейсу.</p><h3>Код</h3><pre>.card { transition: transform .25s ease; }\n.card:hover { transform: translateY(-4px); }</pre><h3>Задание</h3><div class='task'>Добавь аккуратное появление hero и hover карточек. Уважай prefers-reduced-motion.</div><h3>Чек</h3><ul><li>☐ Анимации короткие</li><li>☐ Они не мешают чтению</li><li>☐ Есть reduced-motion</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 15"
      ],
      "steps": [
        "Создай :hover для CTA.",
        "Добавь transition в обычное состояние.",
        "Добавь лёгкий transform.",
        "Создай :focus-visible для ссылок и кнопок.",
        "Проверь Tab на клавиатуре."
      ],
      "code": "<h3>Анимации</h3><p>Изучай transition, transform, opacity и @keyframes. Анимации должны помогать интерфейсу.</p><h3>Код</h3>.card { transition: transform .25s ease; }\n.card:hover { transform: translateY(-4px); }<h3>Задание</h3><div class='task'>Добавь аккуратное появление hero и hover карточек. Уважай prefers-reduced-motion.</div><h3>Чек</h3><ul><li>☐ Анимации короткие</li><li>☐ Они не мешают чтению</li><li>☐ Есть reduced-motion</li></ul>",
      "explain": [
        [
          "CSS",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 15 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Добавить аккуратную интерактивность и доступность.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html + styles.css",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "CSS",
        "CSS",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "display: grid",
          "meaning": "Включает CSS Grid.",
          "when": "Для сеток карточек.",
          "example": "display:grid;",
          "insert": "На родителе карточек.",
          "tip": "Добавь grid-template-columns."
        },
        {
          "syntax": "border-radius",
          "meaning": "Скругляет углы.",
          "when": "Для карточек, кнопок, фото.",
          "example": "border-radius:20px;",
          "insert": "В нужном селекторе.",
          "tip": "Большие значения дают pill-эффект."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "CSS",
          "where": ".btn",
          "instruction": "Пишем `.btn:hover` — состояние при наведении.",
          "code": ".btn:hover { transform: translateY(-2px); }",
          "result": "Кнопка слегка поднимается при наведении.",
          "connect": "`:hover` применяется только в момент наведения."
        },
        {
          "n": 2,
          "area": "CSS",
          "where": ".btn",
          "instruction": "Добавляем `transition` в обычное состояние.",
          "code": ".btn { transition: transform .2s ease, background .2s ease; }",
          "result": "Изменение становится плавным.",
          "connect": "transition пишется в обычном состоянии, не в hover."
        },
        {
          "n": 3,
          "area": "CSS",
          "where": ".btn",
          "instruction": "Меняем фон в hover.",
          "code": ".btn:hover { background: #ffffff; }",
          "result": "Кнопка меняет фон при наведении.",
          "connect": "Нужен контраст с текстом."
        },
        {
          "n": 4,
          "area": "CSS",
          "where": ".btn",
          "instruction": "Пишем `.btn:focus-visible` для клавиатуры.",
          "code": ".btn:focus-visible { outline: 3px solid #d7ff3f; outline-offset: 4px; }",
          "result": "При Tab элемент получает заметный фокус.",
          "connect": "Не удаляй outline без замены — он нужен для доступности."
        },
        {
          "n": 5,
          "area": "CSS",
          "where": ".menu-card",
          "instruction": "Добавляем hover для карточки.",
          "code": ".menu-card:hover { transform: translateY(-4px); }",
          "result": "Карточка слегка поднимается.",
          "connect": "То же transition можно применить к карточке."
        },
        {
          "n": 6,
          "area": "CSS",
          "where": ".menu-card",
          "instruction": "Добавляем `transition: transform .2s ease`.",
          "code": ".menu-card { transition: transform .2s ease; }",
          "result": "Hover выглядит аккуратно.",
          "connect": "Небольшая анимация лучше чрезмерной."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>Hover</h2><a class=\"btn\" href=\"#\">Наведи курсор</a><article class=\"hover-card\">Наведи на карточку</article></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 16,
      "title": "HTML/CSS: Gallery",
      "desc": "Главный экран финального ресторана с CTA и фото.",
      "tag": "Проект",
      "body": "<h3>Hero</h3><p>Собери главный экран Casa Nova: логотип, nav, H1, описание, две CTA-кнопки и атмосферное фото.</p><h3>Практика</h3><p>Держи контент внутри .container. Сверстай desktop и mobile.</p><h3>Чек</h3><ul><li>☐ Hero выглядит коммерчески</li><li>☐ CTA заметны</li><li>☐ Mobile версия готова</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 16"
      ],
      "steps": [
        "Создай section Gallery.",
        "Добавь gallery-grid и несколько figure.",
        "Внутри figure помести img и figcaption.",
        "Сделай Grid.",
        "Для img используй aspect-ratio и object-fit:cover.",
        "Проверь mobile."
      ],
      "code": "<h3>Hero</h3><p>Собери главный экран Casa Nova: логотип, nav, H1, описание, две CTA-кнопки и атмосферное фото.</p><h3>Практика</h3><p>Держи контент внутри .container. Сверстай desktop и mobile.</p><h3>Чек</h3><ul><li>☐ Hero выглядит коммерчески</li><li>☐ CTA заметны</li><li>☐ Mobile версия готова</li></ul>",
      "explain": [
        [
          "Проект",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 16 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Собрать адаптивную галерею фотографий.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html + styles.css",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "Проект",
        "HTML/CSS",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "gap",
          "meaning": "Расстояние между flex/grid-элементами.",
          "when": "Для сеток и меню.",
          "example": "gap:24px;",
          "insert": "На контейнере.",
          "tip": "Часто удобнее, чем много margin."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "HTML",
          "where": "В Gallery",
          "instruction": "Создаём `<section class=\"section gallery\" id=\"gallery\">`.",
          "code": "<section class=\"section gallery\" id=\"gallery\">...</section>",
          "result": "Появляется отдельная Gallery.",
          "connect": "class отвечает за CSS, id — за навигацию."
        },
        {
          "n": 2,
          "area": "HTML",
          "where": "Внутри gallery",
          "instruction": "Создаём `<div class=\"gallery-grid\">`.",
          "code": "<div class=\"gallery-grid\"></div>",
          "result": "Получаем контейнер сетки.",
          "connect": "Внутри будут figure/img."
        },
        {
          "n": 3,
          "area": "HTML",
          "where": "Внутри grid",
          "instruction": "Пишем первую `<figure class=\"gallery-item\">` с img.",
          "code": "<figure class=\"gallery-item\"><img src=\"АДРЕС\" alt=\"Интерьер ресторана\"></figure>",
          "result": "Появляется первое фото.",
          "connect": "Повтори figure для остальных фотографий."
        },
        {
          "n": 4,
          "area": "CSS",
          "where": ".gallery-grid",
          "instruction": "Пишем `display: grid; grid-template-columns: repeat(3, 1fr);`.",
          "code": ".gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); }",
          "result": "Фото становятся сеткой 3×N.",
          "connect": "Grid строит структуру без ручных координат."
        },
        {
          "n": 5,
          "area": "CSS",
          "where": ".gallery-item img",
          "instruction": "Пишем `width:100%; height:260px; object-fit:cover;`.",
          "code": ".gallery-item img { width: 100%; height: 260px; object-fit: cover; }",
          "result": "Все фото получают одинаковую визуальную высоту.",
          "connect": "object-fit: cover обрезает лишнее, сохраняя пропорции."
        },
        {
          "n": 6,
          "area": "CSS",
          "where": "mobile",
          "instruction": "В media query делаем 2, затем 1 колонку.",
          "code": "@media (max-width: 900px){.gallery-grid{grid-template-columns:repeat(2,1fr)}}\n@media (max-width: 600px){.gallery-grid{grid-template-columns:1fr}}",
          "result": "Gallery адаптируется.",
          "connect": "Тот же HTML работает на всех экранах."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>Gallery</h2><div class=\"gallery\"><img src=\"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80\" alt=\"Интерьер\"><img src=\"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80\" alt=\"Ресторан\"></div></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 17,
      "title": "HTML/CSS: Reviews",
      "desc": "Responsive header и мобильное меню.",
      "tag": "Проект",
      "body": "<h3>Header</h3><p>Сделай якорную навигацию: #about, #menu, #gallery, #contacts. Подготовь burger-кнопку.</p><h3>Задание</h3><div class='task'>Сделай sticky header, активные состояния и мобильную кнопку. Проверь все якоря.</div><h3>Чек</h3><ul><li>☐ Логотип кликабелен</li><li>☐ Навигация работает</li><li>☐ Header не ломает layout</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 17"
      ],
      "steps": [
        "Создай section Reviews.",
        "Добавь три article.",
        "Внутри используй blockquote и cite.",
        "Сделай одинаковые карточки.",
        "На mobile оставь одну колонку."
      ],
      "code": "<h3>Header</h3><p>Сделай якорную навигацию: #about, #menu, #gallery, #contacts. Подготовь burger-кнопку.</p><h3>Задание</h3><div class='task'>Сделай sticky header, активные состояния и мобильную кнопку. Проверь все якоря.</div><h3>Чек</h3><ul><li>☐ Логотип кликабелен</li><li>☐ Навигация работает</li><li>☐ Header не ломает layout</li></ul>",
      "explain": [
        [
          "Проект",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 17 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Создать карточки отзывов.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html + styles.css",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "Проект",
        "HTML/CSS",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "max-width",
          "meaning": "Ограничивает максимальную ширину.",
          "when": "Для контейнера и текста.",
          "example": "max-width:1200px;",
          "insert": "На .container.",
          "tip": "Помогает не растягивать контент на огромном мониторе."
        },
        {
          "syntax": "margin",
          "meaning": "Внешний отступ.",
          "when": "Для расстояния снаружи.",
          "example": "margin-top:40px;",
          "insert": "В CSS элемента.",
          "tip": "Для grid/flex чаще лучше gap."
        },
        {
          "syntax": "padding",
          "meaning": "Внутренний отступ.",
          "when": "Для карточек, кнопок, секций.",
          "example": "padding:24px;",
          "insert": "В CSS нужного элемента.",
          "tip": "Не путай с margin."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "HTML",
          "where": "Reviews",
          "instruction": "Создаём `<article class=\"review-card\">` для одного отзыва.",
          "code": "<article class=\"review-card\"><p>...</p><strong>Anna</strong></article>",
          "result": "Один отзыв становится повторяемым компонентом.",
          "connect": "Скопировать структуру можно, но текст набирай сам для тренировки."
        },
        {
          "n": 2,
          "area": "CSS",
          "where": ".reviews-grid",
          "instruction": "Включаем Grid.",
          "code": ".reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }",
          "result": "Три отзыва становятся в ряд.",
          "connect": "На телефоне сетку позже уменьшим."
        },
        {
          "n": 3,
          "area": "CSS",
          "where": ".review-card",
          "instruction": "Задаём `padding`, `border`, `border-radius`.",
          "code": ".review-card { padding: 24px; border: 1px solid #2a2a2a; border-radius: 18px; }",
          "result": "Отзыв выглядит как карточка.",
          "connect": "Собираем визуальный компонент из box model."
        },
        {
          "n": 4,
          "area": "HTML",
          "where": "Внутри card",
          "instruction": "Пишем `<p class=\"review-text\">` и `<strong class=\"review-name\">`.",
          "code": "<p class=\"review-text\">Очень вкусно.</p><strong class=\"review-name\">Anna</strong>",
          "result": "Разделяем отзыв и имя.",
          "connect": "Так их можно стилизовать отдельно."
        },
        {
          "n": 5,
          "area": "CSS",
          "where": ".review-text",
          "instruction": "Настраиваем размер и line-height.",
          "code": ".review-text { font-size: 18px; line-height: 1.6; }",
          "result": "Текст легче читать.",
          "connect": "Line-height особенно важен для отзывов из нескольких строк."
        },
        {
          "n": 6,
          "area": "CSS",
          "where": "mobile",
          "instruction": "Делаем одну колонку.",
          "code": "@media (max-width: 600px){.reviews-grid{grid-template-columns:1fr}}",
          "result": "Отзывы аккуратно идут вертикально.",
          "connect": "Сетка и HTML остаются неизменными."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>Reviews</h2><div class=\"cards\"><article>“Очень вкусно.” — Anna</article><article>“Вернусь.” — Marek</article><article>“Отличный вечер.” — Ola</article></div></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 18,
      "title": "HTML/CSS: Contact и Footer",
      "desc": "Категории блюд, карточки, цены и Grid.",
      "tag": "Проект",
      "body": "<h3>Menu</h3><p>Карточка блюда: фото, название, описание, цена и категория. Сделай минимум 6 позиций и 3 категории.</p><h3>Задание</h3><div class='task'>Сверстай меню Grid. Добавление нового блюда должно быть простым копированием карточки.</div><h3>Чек</h3><ul><li>☐ Есть цена</li><li>☐ Фото имеют alt</li><li>☐ Сетка адаптивна</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 18"
      ],
      "steps": [
        "Создай Contact с address.",
        "Добавь tel: и mailto: ссылки.",
        "Проверь клики.",
        "Оформи Footer и его container.",
        "Сделай Footer спокойнее основного контента."
      ],
      "code": "<h3>Menu</h3><p>Карточка блюда: фото, название, описание, цена и категория. Сделай минимум 6 позиций и 3 категории.</p><h3>Задание</h3><div class='task'>Сверстай меню Grid. Добавление нового блюда должно быть простым копированием карточки.</div><h3>Чек</h3><ul><li>☐ Есть цена</li><li>☐ Фото имеют alt</li><li>☐ Сетка адаптивна</li></ul>",
      "explain": [
        [
          "Проект",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 18 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Закончить статическую часть сайта.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html + styles.css",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "Проект",
        "HTML/CSS",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "<form>",
          "meaning": "Контейнер формы.",
          "when": "Для пользовательского ввода.",
          "example": "<form id=\"contact-form\">...</form>",
          "insert": "В секции контактов.",
          "tip": "Для реальной отправки позже понадобится сервер или внешний сервис."
        },
        {
          "syntax": "<label>",
          "meaning": "Подпись поля формы.",
          "when": "Для доступной формы.",
          "example": "<label for=\"email\">Email</label>",
          "insert": "Перед input.",
          "tip": "for должен совпадать с id."
        },
        {
          "syntax": "<input>",
          "meaning": "Однострочное поле ввода.",
          "when": "Для имени, email, телефона.",
          "example": "<input id=\"email\" type=\"email\">",
          "insert": "Внутри form.",
          "tip": "type=email даёт базовую проверку браузера."
        },
        {
          "syntax": "<textarea>",
          "meaning": "Многострочное поле.",
          "when": "Для сообщения.",
          "example": "<textarea id=\"message\"></textarea>",
          "insert": "Внутри form.",
          "tip": "Размер удобно задавать CSS."
        },
        {
          "syntax": "<button>",
          "meaning": "Кнопка действия.",
          "when": "Для JS, формы и интерактивности.",
          "example": "<button type=\"button\">Открыть</button>",
          "insert": "В нужном компоненте.",
          "tip": "Внутри form явно указывай type."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "HTML",
          "where": "Contacts",
          "instruction": "Добавляем класс `contact-grid`.",
          "code": "<div class=\"contact-grid\"><div>...</div><form>...</form></div>",
          "result": "Контакты делятся на две колонки: информация и форма.",
          "connect": "CSS Grid будет отвечать за расположение."
        },
        {
          "n": 2,
          "area": "CSS",
          "where": ".contact-grid",
          "instruction": "Пишем `display:grid; grid-template-columns:1fr 1fr`.",
          "code": ".contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }",
          "result": "Информация и форма становятся рядом.",
          "connect": "На телефоне будет одна колонка."
        },
        {
          "n": 3,
          "area": "HTML",
          "where": "Footer",
          "instruction": "Создаём `<footer class=\"footer\">`.",
          "code": "<footer class=\"footer\"><p>© 2026 Motownia Smaków</p></footer>",
          "result": "Появляется нижняя часть сайта.",
          "connect": "Footer закрывает основной визуальный путь страницы."
        },
        {
          "n": 4,
          "area": "CSS",
          "where": ".footer",
          "instruction": "Пишем `padding-block: 40px; border-top: 1px solid ...`.",
          "code": ".footer { padding-block: 40px; border-top: 1px solid #2a2a2a; }",
          "result": "Footer отделяется от Contact.",
          "connect": "Сдержанный footer завершает дизайн."
        },
        {
          "n": 5,
          "area": "CSS",
          "where": "form",
          "instruction": "Стилизуем input/textarea.",
          "code": "form input, form textarea { width: 100%; padding: 14px; }",
          "result": "Поля становятся широкими и удобными.",
          "connect": "width:100% работает относительно родителя формы."
        },
        {
          "n": 6,
          "area": "CSS",
          "where": "mobile",
          "instruction": "Делаем contact-grid одной колонкой.",
          "code": "@media (max-width: 700px){.contact-grid{grid-template-columns:1fr}}",
          "result": "Форма и контакты идут друг под другом.",
          "connect": "Это последний важный статический блок страницы."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>Contact</h2><form id=\"bookingForm\"><label for=\"name\">Imię</label><input id=\"name\"><label for=\"message\">Wiadomość</label><textarea id=\"message\"></textarea><button type=\"submit\">Wyślij</button></form></section><footer>© Motownia Smaków</footer></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 19,
      "title": "CSS: визуальная система",
      "desc": "Сетка фото и повторяющиеся карточки отзывов.",
      "tag": "Проект",
      "body": "<h3>Gallery + Reviews</h3><p>Grid хорошо подходит для галереи, а один класс — для повторяющихся отзывов.</p><h3>Задание</h3><div class='task'>Добавь 6 фото и 3 отзыва. Сделай единый визуальный ритм.</div><h3>Чек</h3><ul><li>☐ Галерея responsive</li><li>☐ Карточки единообразны</li><li>☐ Контент читаемый</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 19"
      ],
      "steps": [
        "Открой весь сайт сверху вниз.",
        "Выбери 3–5 цветов и повторяй их.",
        "Выбери единые радиусы.",
        "Выбери систему отступов.",
        "Ограничь длинный текст max-width.",
        "Проверь, что Hero визуально главный."
      ],
      "code": "<h3>Gallery + Reviews</h3><p>Grid хорошо подходит для галереи, а один класс — для повторяющихся отзывов.</p><h3>Задание</h3><div class='task'>Добавь 6 фото и 3 отзыва. Сделай единый визуальный ритм.</div><h3>Чек</h3><ul><li>☐ Галерея responsive</li><li>☐ Карточки единообразны</li><li>☐ Контент читаемый</li></ul>",
      "explain": [
        [
          "Проект",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 19 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Связать цвета, отступы, радиусы и типографику.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html + styles.css",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "Проект",
        "CSS",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "font-family",
          "meaning": "Выбирает шрифт.",
          "when": "Для body и отдельных текстовых блоков.",
          "example": "font-family:Arial,sans-serif;",
          "insert": "В body или заголовке.",
          "tip": "Указывай запасной шрифт."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "CSS",
          "where": ":root",
          "instruction": "Создаём CSS-переменную для основного цвета.",
          "code": " :root { --accent: #d7ff3f; }",
          "result": "Появляется одно имя для цвета.",
          "connect": "Переменная потом используется через var(--accent)."
        },
        {
          "n": 2,
          "area": "CSS",
          "where": ":root",
          "instruction": "Создаём переменные фона и текста.",
          "code": " :root { --bg: #080808; --text: #f5f5f5; --muted: #a0a7ad; }",
          "result": "Цветовая система собирается в одном месте.",
          "connect": "Менять тему теперь проще."
        },
        {
          "n": 3,
          "area": "CSS",
          "where": "body",
          "instruction": "Заменяем hard-coded цвета на переменные.",
          "code": "body { background: var(--bg); color: var(--text); }",
          "result": "Страница продолжает выглядеть так же, но CSS становится управляемым.",
          "connect": "Переменная связывает разные правила."
        },
        {
          "n": 4,
          "area": "CSS",
          "where": ".btn",
          "instruction": "Пишем `background: var(--accent)`.",
          "code": ".btn { background: var(--accent); }",
          "result": "Кнопка использует общий accent.",
          "connect": "Изменишь --accent — изменится весь сайт."
        },
        {
          "n": 5,
          "area": "CSS",
          "where": "*",
          "instruction": "Проверяем `box-sizing`.",
          "code": "*, *::before, *::after { box-sizing: border-box; }",
          "result": "Размеры компонентов предсказуемы.",
          "connect": "Это фундамент для width/padding/border."
        },
        {
          "n": 6,
          "area": "CSS",
          "where": "система",
          "instruction": "Сохраняем 3–5 размеров отступов и радиусов вместо случайных чисел.",
          "code": "--space-1:8px; --space-2:16px; --space-3:24px; --radius:20px;",
          "result": "Дизайн становится единым.",
          "connect": "Это уже мышление не только кодера, но и верстальщика."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>Visual System</h2><p class=\"muted\">Переменные управляют цветами и радиусами.</p><a class=\"btn\" href=\"#\">Accent</a></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 20,
      "title": "CSS: контрольная сборка",
      "desc": "Адрес, часы, карта-ссылка, соцсети и footer.",
      "tag": "Проект",
      "body": "<h3>Contacts + Footer</h3><p>Добавь адрес, часы, телефон, email, карту и соцсети. Используй данные проекта, не реальные личные данные.</p><h3>Задание</h3><div class='task'>Собери нижнюю часть и CTA «Забронировать столик». Проверь ссылки.</div><h3>Чек</h3><ul><li>☐ Контакты понятны</li><li>☐ Footer заполнен</li><li>☐ Есть финальный CTA</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 20"
      ],
      "steps": [
        "Проверь header, hero, about, menu, gallery, reviews, contact и footer.",
        "Проверь 1440, 1024, 768, 430 и 320px.",
        "Исправь горизонтальный скролл.",
        "Проверь Tab.",
        "Проверь alt.",
        "Открой Console и Network.",
        "Сделай резервную копию проекта."
      ],
      "code": "<h3>Contacts + Footer</h3><p>Добавь адрес, часы, телефон, email, карту и соцсети. Используй данные проекта, не реальные личные данные.</p><h3>Задание</h3><div class='task'>Собери нижнюю часть и CTA «Забронировать столик». Проверь ссылки.</div><h3>Чек</h3><ul><li>☐ Контакты понятны</li><li>☐ Footer заполнен</li><li>☐ Есть финальный CTA</li></ul>",
      "explain": [
        [
          "Проект",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 20 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Проверить весь статический сайт на desktop и mobile.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "index.html + styles.css",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "Проект",
        "CSS",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "class",
          "meaning": "Имя элемента, которое можно использовать в CSS и JS.",
          "when": "Для повторяемых компонентов.",
          "example": "<div class=\"card\">...</div>",
          "insert": "Добавь class в HTML → используй .card в CSS.",
          "tip": "Один class можно использовать много раз."
        },
        {
          "syntax": "id",
          "meaning": "Уникальное имя элемента.",
          "when": "Для якорей и JS.",
          "example": "<section id=\"contacts\">",
          "insert": "Добавь id на нужный элемент.",
          "tip": "Один id не должен повторяться."
        },
        {
          "syntax": "@media",
          "meaning": "Включает CSS только при заданном условии экрана.",
          "when": "Для адаптивной версии.",
          "example": "@media (max-width:768px){...}",
          "insert": "Внизу styles.css.",
          "tip": "Проверяй 320–430px, а не только один телефон."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "HTML",
          "where": "Проверка",
          "instruction": "Убеждаемся, что один `h1` отвечает за главный заголовок страницы.",
          "code": "<h1>...</h1>",
          "result": "Структура становится понятной.",
          "connect": "h2 используй для основных секций, h3 — для карточек."
        },
        {
          "n": 2,
          "area": "HTML",
          "where": "Проверка",
          "instruction": "Проверяем все изображения: у каждого есть `alt`.",
          "code": "<img src=\"...\" alt=\"...\">",
          "result": "Изображения понятны и при проблемах загрузки.",
          "connect": "Не оставляй alt пустым для информативных фото."
        },
        {
          "n": 3,
          "area": "CSS",
          "where": "Проверка",
          "instruction": "Проверяем, что каждый HTML class действительно существует в CSS или является намеренно JS-классом.",
          "code": ".menu-card { ... }",
          "result": "Уменьшается количество опечаток.",
          "connect": "class в HTML ↔ selector в CSS."
        },
        {
          "n": 4,
          "area": "CSS",
          "where": "Проверка",
          "instruction": "Проверяем горизонтальный overflow на 320px.",
          "code": "body { overflow-x: hidden; }",
          "result": "Это может скрыть симптом, но не лечит причину.",
          "connect": "Сначала найди слишком широкий элемент; не маскируй ошибку без причины."
        },
        {
          "n": 5,
          "area": "HTML/CSS",
          "where": "Проверка",
          "instruction": "Собираем путь: Header → Hero → About → Menu → Gallery → Reviews → Contact → Footer.",
          "code": "—",
          "result": "Получаем цельную страницу.",
          "connect": "Следующие дни добавят поведение через JavaScript."
        },
        {
          "n": 6,
          "area": "Проверка",
          "where": "Chrome",
          "instruction": "F12 → Console и Elements.",
          "code": "—",
          "result": "Console должна быть без красных ошибок.",
          "connect": "Если ошибка есть — исправляй её до следующего дня."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><header class=\"head\"><b>Motownia</b><nav><a href=\"#menu\">Menu</a><a href=\"#gallery\">Gallery</a><a href=\"#contact\">Contact</a></nav></header><section class=\"hero photo-bg\"><div><h1>Контрольная сборка</h1><p>Header + Hero + Grid + Contact + Footer.</p></div></section><section class=\"box\" id=\"menu\"><h2>Menu</h2><div class=\"cards\"><article>Ramen</article><article>Steak</article><article>Pasta</article></div></section><section class=\"box\" id=\"contact\"><h2>Contact</h2><form><input placeholder=\"Imię\"><button>Wyślij</button></form></section><footer>Motownia</footer></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 21,
      "title": "JavaScript: подключение",
      "desc": "Переменные, типы, операторы, условия и синтаксис.",
      "tag": "JS",
      "body": "<h3>JS basics</h3><p>Начни с const и let. Типы: string, number, boolean, null, undefined, object. Условия — if/else, сравнение — ===.</p><h3>Код</h3><pre>const restaurantName = 'Casa Nova';\nlet guests = 2;\nif (guests &gt; 6) console.log('Нужен большой стол');</pre><h3>Задание</h3><div class='task'>Создай переменные ресторана и выведи их в Console.</div><h3>Чек</h3><ul><li>☐ Знаю const/let</li><li>☐ Понимаю ===</li><li>☐ Читаю Console</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 21"
      ],
      "steps": [
        "В корне проекта создай script.js.",
        "В конце body подключи <script src=\"script.js\"></script>.",
        "В script.js создай const restaurantName.",
        "Выведи его через console.log().",
        "Открой F12 → Console.",
        "Измени значение и снова обнови страницу."
      ],
      "code": "<h3>JS basics</h3><p>Начни с const и let. Типы: string, number, boolean, null, undefined, object. Условия — if/else, сравнение — ===.</p><h3>Код</h3>const restaurantName = 'Casa Nova';\nlet guests = 2;\nif (guests &gt; 6) console.log('Нужен большой стол');<h3>Задание</h3><div class='task'>Создай переменные ресторана и выведи их в Console.</div><h3>Чек</h3><ul><li>☐ Знаю const/let</li><li>☐ Понимаю ===</li><li>☐ Читаю Console</li></ul>",
      "explain": [
        [
          "JS",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 21 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Создать script.js и научиться выводить данные в Console.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "script.js + index.html",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "JS",
        "JavaScript",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "console.log",
          "meaning": "Показывает значение в DevTools Console.",
          "when": "Для проверки и отладки.",
          "example": "console.log(button);",
          "insert": "В app.js → F12 → Console.",
          "tip": "Это не текст на самой странице."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "JS",
          "where": "В папке проекта",
          "instruction": "Создаём `app.js` — отдельный файл JavaScript.",
          "code": "—",
          "result": "Появляется место для логики.",
          "connect": "HTML/CSS не меняются; JS будет управлять поведением."
        },
        {
          "n": 2,
          "area": "HTML",
          "where": "Перед `</body>`",
          "instruction": "Подключаем `<script src=\"app.js\"></script>`.",
          "code": "<script src=\"app.js\"></script>",
          "result": "Браузер загружает JavaScript.",
          "connect": "Путь src должен совпадать с именем файла."
        },
        {
          "n": 3,
          "area": "JS",
          "where": "В app.js",
          "instruction": "Пишем `console.log(\"JS подключён\")`.",
          "code": "console.log(\"JS подключён\");",
          "result": "В Console появляется сообщение.",
          "connect": "Это первый тест связи HTML → JS."
        },
        {
          "n": 4,
          "area": "JS",
          "where": "app.js",
          "instruction": "Создаём переменную `const title = \"Motownia\"`.",
          "code": "const title = \"Motownia\";",
          "result": "JavaScript хранит значение в переменной.",
          "connect": "const означает: переменную нельзя переназначить."
        },
        {
          "n": 5,
          "area": "JS",
          "where": "app.js",
          "instruction": "Пишем `console.log(title)`.",
          "code": "console.log(title);",
          "result": "В Console появляется Motownia.",
          "connect": "Теперь ты видишь, что JS выполняется и хранит данные."
        },
        {
          "n": 6,
          "area": "Проверка",
          "where": "Chrome",
          "instruction": "F12 → Console → обновить страницу.",
          "code": "—",
          "result": "Должно быть «JS подключён» и «Motownia».",
          "connect": "Если нет — проверь script src и расположение app.js."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2 id=\"title\">JS подключён</h2><button class=\"btn\" id=\"go\">Нажми</button></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": "console.log(\"JS подключён\");"
      }
    },
    {
      "day": 22,
      "title": "JavaScript: DOM",
      "desc": "Функции, click, input и addEventListener.",
      "tag": "JS",
      "body": "<h3>Functions + Events</h3><p>Функция группирует действие. Событие запускает его при действии пользователя.</p><h3>Код</h3><pre>const button = document.querySelector('#book');\nbutton.addEventListener('click', () =&gt; {\n  console.log('Booking clicked');\n});</pre><h3>Задание</h3><div class='task'>При клике на CTA выводи сообщение и меняй текст кнопки.</div><h3>Чек</h3><ul><li>☐ Умею querySelector</li><li>☐ Умею addEventListener</li><li>☐ Понимаю callback</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 22"
      ],
      "steps": [
        "В HTML дай h1 id=\"heroTitle\".",
        "В JS создай const heroTitle = document.querySelector(\"#heroTitle\").",
        "Выведи его в Console.",
        "Прочитай heroTitle.textContent.",
        "Измени textContent через JS.",
        "Если результат null — элемент не найден."
      ],
      "code": "<h3>Functions + Events</h3><p>Функция группирует действие. Событие запускает его при действии пользователя.</p><h3>Код</h3>const button = document.querySelector('#book');\nbutton.addEventListener('click', () =&gt; {\n  console.log('Booking clicked');\n});<h3>Задание</h3><div class='task'>При клике на CTA выводи сообщение и меняй текст кнопки.</div><h3>Чек</h3><ul><li>☐ Умею querySelector</li><li>☐ Умею addEventListener</li><li>☐ Понимаю callback</li></ul>",
      "explain": [
        [
          "JS",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 22 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Научиться находить и менять HTML-элементы.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "script.js + index.html",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "JS",
        "JavaScript",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "const",
          "meaning": "Создаёт переменную, которую нельзя переназначить.",
          "when": "Для элементов DOM и постоянных данных.",
          "example": "const button = document.querySelector(\"button\");",
          "insert": "В app.js.",
          "tip": "const не запрещает изменять содержимое объекта."
        },
        {
          "syntax": "let",
          "meaning": "Создаёт изменяемую переменную.",
          "when": "Для состояния, которое меняется.",
          "example": "let count=0;",
          "insert": "В app.js.",
          "tip": "Не используй let без необходимости."
        },
        {
          "syntax": "function",
          "meaning": "Объявляет повторяемое действие.",
          "when": "Когда код нужно вызывать несколько раз.",
          "example": "function openMenu(){...}",
          "insert": "В app.js.",
          "tip": "Функцию нужно вызвать: openMenu();"
        },
        {
          "syntax": "if",
          "meaning": "Выполняет код только при истинном условии.",
          "when": "Для проверки данных и состояний.",
          "example": "if(!name){...}",
          "insert": "В функции.",
          "tip": "Условие должно давать true/false."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "JS",
          "where": "app.js",
          "instruction": "Пишем `document.querySelector(\"h1\")` — ищем первый h1.",
          "code": "const title = document.querySelector(\"h1\");",
          "result": "Переменная получает DOM-элемент.",
          "connect": "querySelector принимает CSS-селектор."
        },
        {
          "n": 2,
          "area": "JS",
          "where": "app.js",
          "instruction": "Пишем `title.textContent = \"Новый заголовок\"`.",
          "code": "title.textContent = \"Новый заголовок\";",
          "result": "Текст h1 меняется через JS.",
          "connect": "JS нашёл HTML и изменил его содержимое."
        },
        {
          "n": 3,
          "area": "JS",
          "where": "app.js",
          "instruction": "Ищем `.btn` через `querySelector`.",
          "code": "const button = document.querySelector(\".btn\");",
          "result": "Получаем ссылку/кнопку как DOM-элемент.",
          "connect": "CSS selector в JS выглядит так же: `.btn`."
        },
        {
          "n": 4,
          "area": "JS",
          "where": "app.js",
          "instruction": "Проверяем существование: `if (button)`.",
          "code": "if (button) { console.log(\"Кнопка найдена\"); }",
          "result": "JS не падает, если кнопки нет.",
          "connect": "Это полезно, когда разные страницы имеют разные элементы."
        },
        {
          "n": 5,
          "area": "JS",
          "where": "app.js",
          "instruction": "Ищем `#contacts`.",
          "code": "const contacts = document.querySelector(\"#contacts\");",
          "result": "Получаем секцию по id.",
          "connect": "id в HTML → `#id` в CSS/JS."
        },
        {
          "n": 6,
          "area": "Связь",
          "where": "HTML → CSS → JS",
          "instruction": "Запоминаем: `<section id=\"contacts\" class=\"section\">` → `#contacts` или `.section`.",
          "code": "<section id=\"contacts\" class=\"section\">",
          "result": "Один HTML-элемент может иметь несколько точек доступа.",
          "connect": "id обычно уникален; class можно повторять."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2 id=\"title\">Старый заголовок</h2></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": "const title=document.querySelector(\"#title\"); title.textContent=\"DOM изменил этот текст\";"
      }
    },
    {
      "day": 23,
      "title": "JavaScript: события",
      "desc": "querySelector, textContent и classList.",
      "tag": "JS",
      "body": "<h3>DOM</h3><p>DOM — дерево объектов, которое можно менять через JavaScript. Освой textContent, classList и атрибуты.</p><h3>Код</h3><pre>const title = document.querySelector('.hero h1');\ntitle.textContent = 'Новая версия Casa Nova';\ntitle.classList.add('is-updated');</pre><h3>Задание</h3><div class='task'>Burger должен добавлять/убирать класс .open. CSS отвечает за отображение.</div><h3>Чек</h3><ul><li>☐ Умею искать элемент</li><li>☐ Умею toggle class</li><li>☐ Понимаю разделение CSS/JS</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 23"
      ],
      "steps": [
        "Найди CTA через querySelector.",
        "Добавь addEventListener(\"click\", ...).",
        "Внутри обработчика выведи сообщение в Console.",
        "Проверь клик.",
        "Изучи event и preventDefault()."
      ],
      "code": "<h3>DOM</h3><p>DOM — дерево объектов, которое можно менять через JavaScript. Освой textContent, classList и атрибуты.</p><h3>Код</h3>const title = document.querySelector('.hero h1');\ntitle.textContent = 'Новая версия Casa Nova';\ntitle.classList.add('is-updated');<h3>Задание</h3><div class='task'>Burger должен добавлять/убирать класс .open. CSS отвечает за отображение.</div><h3>Чек</h3><ul><li>☐ Умею искать элемент</li><li>☐ Умею toggle class</li><li>☐ Понимаю разделение CSS/JS</li></ul>",
      "explain": [
        [
          "JS",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 23 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Реагировать на click и submit.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "script.js + index.html",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "JS",
        "JavaScript",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "document.querySelector",
          "meaning": "Находит первый элемент по CSS-селектору.",
          "when": "Для работы с конкретным элементом.",
          "example": "document.querySelector(\".hero\");",
          "insert": "В app.js.",
          "tip": "Селектор такой же, как в CSS."
        },
        {
          "syntax": "textContent",
          "meaning": "Читает или меняет текст элемента.",
          "when": "Для динамических надписей.",
          "example": "title.textContent=\"Спасибо\";",
          "insert": "После querySelector.",
          "tip": "Для HTML-разметки используй innerHTML только осознанно."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "JS",
          "where": "app.js",
          "instruction": "Берём `.btn`.",
          "code": "const button = document.querySelector(\".btn\");",
          "result": "Получаем элемент.",
          "connect": "Без элемента слушатель события повесить нельзя."
        },
        {
          "n": 2,
          "area": "JS",
          "where": "app.js",
          "instruction": "Пишем `addEventListener(\"click\", ...)` — слушаем клик.",
          "code": "button.addEventListener(\"click\", function () { });",
          "result": "JS начинает реагировать на действие пользователя.",
          "connect": "Событие click происходит при нажатии."
        },
        {
          "n": 3,
          "area": "JS",
          "where": "Внутри callback",
          "instruction": "Пишем `console.log(\"Клик\")`.",
          "code": "console.log(\"Клик\");",
          "result": "При клике появляется сообщение в Console.",
          "connect": "Callback запускается не сразу, а когда произойдёт click."
        },
        {
          "n": 4,
          "area": "JS",
          "where": "Внутри callback",
          "instruction": "Пишем `event.preventDefault()` для ссылки, чтобы временно остановить переход.",
          "code": "button.addEventListener(\"click\", function (event) { event.preventDefault(); });",
          "result": "Ссылка перестаёт сразу прокручивать страницу.",
          "connect": "Так удобно учиться; в финале реши, нужен ли preventDefault."
        },
        {
          "n": 5,
          "area": "JS",
          "where": "Внутри callback",
          "instruction": "Меняем текст кнопки: `button.textContent = \"Забронировано\"`.",
          "code": "button.textContent = \"Забронировано\";",
          "result": "Пользователь видит изменение интерфейса.",
          "connect": "Это DOM + event вместе."
        },
        {
          "n": 6,
          "area": "Проверка",
          "where": "Chrome",
          "instruction": "Нажми кнопку → Console → проверь текст.",
          "code": "—",
          "result": "Событие работает.",
          "connect": "Если нет — проверь `.btn`, скобки и подключение app.js."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>Events</h2><button class=\"btn\" id=\"go\">Нажми</button><p id=\"status\">Жду клик</p></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": "const go=document.querySelector(\"#go\"); const status=document.querySelector(\"#status\"); go.addEventListener(\"click\",()=>{status.textContent=\"Клик сработал\";});"
      }
    },
    {
      "day": 24,
      "title": "JavaScript: мобильное меню",
      "desc": "Данные для динамического меню и карточек.",
      "tag": "JS",
      "body": "<h3>Data</h3><p>Массив — список, объект — набор свойств. Это база динамических интерфейсов.</p><h3>Код</h3><pre>const dishes = [\n  { name: 'Truffle Pasta', category: 'Pasta', price: 48 },\n  { name: 'Sea Bass', category: 'Fish', price: 62 }\n];</pre><h3>Задание</h3><div class='task'>Создай 6 блюд как объекты и выведи их через forEach.</div><h3>Чек</h3><ul><li>☐ Умею массив объектов</li><li>☐ Понимаю property</li><li>☐ Умею forEach</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 24"
      ],
      "steps": [
        "Создай кнопку menu-toggle и nav id=\"siteNav\".",
        "В CSS сделай состояние .is-open.",
        "На mobile спрячь nav.",
        "В JS найди кнопку и nav.",
        "На click используй classList.toggle(\"is-open\").",
        "Проверь несколько раз."
      ],
      "code": "<h3>Data</h3><p>Массив — список, объект — набор свойств. Это база динамических интерфейсов.</p><h3>Код</h3>const dishes = [\n  { name: 'Truffle Pasta', category: 'Pasta', price: 48 },\n  { name: 'Sea Bass', category: 'Fish', price: 62 }\n];<h3>Задание</h3><div class='task'>Создай 6 блюд как объекты и выведи их через forEach.</div><h3>Чек</h3><ul><li>☐ Умею массив объектов</li><li>☐ Понимаю property</li><li>☐ Умею forEach</li></ul>",
      "explain": [
        [
          "JS",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 24 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Открывать и закрывать меню через classList.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "script.js + index.html",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "JS",
        "JavaScript",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "addEventListener",
          "meaning": "Подписывает элемент на событие.",
          "when": "Для click, submit, input и др.",
          "example": "button.addEventListener(\"click\",fn);",
          "insert": "После querySelector.",
          "tip": "Событие запускает функцию."
        },
        {
          "syntax": "classList.toggle",
          "meaning": "Переключает CSS-класс.",
          "when": "Для открытия/закрытия меню и модалок.",
          "example": "menu.classList.toggle(\"open\");",
          "insert": "В обработчике click.",
          "tip": "CSS должен описывать состояние .open."
        },
        {
          "syntax": "classList.add",
          "meaning": "Добавляет CSS-класс.",
          "when": "Для открытия/включения состояния.",
          "example": "modal.classList.add(\"open\");",
          "insert": "В обработчике.",
          "tip": "Не забудь CSS для этого класса."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "HTML",
          "where": "Header",
          "instruction": "Добавляем кнопку `<button class=\"menu-toggle\" type=\"button\">Меню</button>`.",
          "code": "<button class=\"menu-toggle\" type=\"button\">Меню</button>",
          "result": "Появляется элемент, который можно нажать на телефоне.",
          "connect": "class используется CSS и JS."
        },
        {
          "n": 2,
          "area": "CSS",
          "where": ".menu-toggle",
          "instruction": "Скрываем кнопку на desktop: `display:none`.",
          "code": ".menu-toggle { display: none; }",
          "result": "На большом экране кнопка не мешает.",
          "connect": "В media query покажем её."
        },
        {
          "n": 3,
          "area": "CSS",
          "where": "mobile",
          "instruction": "В media query пишем `.menu-toggle { display:block; }`.",
          "code": "@media (max-width: 700px){.menu-toggle{display:block}}",
          "result": "На телефоне появляется кнопка.",
          "connect": "Теперь JS сможет открывать nav."
        },
        {
          "n": 4,
          "area": "CSS",
          "where": "nav",
          "instruction": "Добавляем класс `mobile-open` как состояние.",
          "code": ".header nav.mobile-open { display: flex; }",
          "result": "CSS знает, как выглядит открытое состояние.",
          "connect": "JS не рисует стили — он меняет class."
        },
        {
          "n": 5,
          "area": "JS",
          "where": "app.js",
          "instruction": "Получаем toggle и nav.",
          "code": "const toggle = document.querySelector(\".menu-toggle\");\nconst nav = document.querySelector(\".header nav\");",
          "result": "JS получает оба элемента.",
          "connect": "Теперь можно связать клик и класс."
        },
        {
          "n": 6,
          "area": "JS",
          "where": "app.js",
          "instruction": "На click переключаем class: `nav.classList.toggle(\"mobile-open\")`.",
          "code": "toggle.addEventListener(\"click\", () => { nav.classList.toggle(\"mobile-open\"); });",
          "result": "Одним кликом меню открывается/закрывается.",
          "connect": "Это идеальная связка HTML class + CSS state + JS event."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><header class=\"head\"><b>Motownia</b><button class=\"toggle\" id=\"toggle\">Меню</button><nav id=\"nav\"><a href=\"#\">Menu</a><a href=\"#\">Contact</a></nav></header></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:650px){.head nav{display:none}.head nav.mobile-open{display:flex;flex-direction:column}.toggle{display:block}} .toggle{display:none}@media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": "const toggle=document.querySelector(\"#toggle\"); const nav=document.querySelector(\"#nav\"); toggle.addEventListener(\"click\",()=>nav.classList.toggle(\"mobile-open\"));"
      }
    },
    {
      "day": 25,
      "title": "JavaScript: массивы и объекты",
      "desc": "Рендер и фильтрация меню без перезагрузки.",
      "tag": "JS",
      "body": "<h3>Render + filter</h3><p>JS может строить карточки из данных. Фильтрация меняет данные без перезагрузки.</p><h3>Код</h3><pre>function render(items) {\n  list.innerHTML = items.map(item =&gt; `&lt;article&gt;&lt;h3&gt;${item.name}&lt;/h3&gt;&lt;b&gt;${item.price} €&lt;/b&gt;&lt;/article&gt;`).join('');\n}</pre><h3>Задание</h3><div class='task'>Сделай All / Pasta / Fish / Dessert и фильтруй массив по клику.</div><h3>Чек</h3><ul><li>☐ Данные отдельно от UI</li><li>☐ Фильтр работает</li><li>☐ Нет перезагрузки</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 25"
      ],
      "steps": [
        "Создай массив dishes.",
        "Каждое блюдо сделай объектом name, description, price, category.",
        "Перебери dishes через forEach.",
        "Сделай map только названий.",
        "Сделай filter по category.",
        "Проверь результат в Console."
      ],
      "code": "<h3>Render + filter</h3><p>JS может строить карточки из данных. Фильтрация меняет данные без перезагрузки.</p><h3>Код</h3>function render(items) {\n  list.innerHTML = items.map(item =&gt; `&lt;article&gt;&lt;h3&gt;${item.name}&lt;/h3&gt;&lt;b&gt;${item.price} €&lt;/b&gt;&lt;/article&gt;`).join('');\n}<h3>Задание</h3><div class='task'>Сделай All / Pasta / Fish / Dessert и фильтруй массив по клику.</div><h3>Чек</h3><ul><li>☐ Данные отдельно от UI</li><li>☐ Фильтр работает</li><li>☐ Нет перезагрузки</li></ul>",
      "explain": [
        [
          "JS",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 25 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Хранить данные блюд и обрабатывать их.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "script.js + index.html",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "JS",
        "JavaScript",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "const",
          "meaning": "Создаёт переменную, которую нельзя переназначить.",
          "when": "Для элементов DOM и постоянных данных.",
          "example": "const button = document.querySelector(\"button\");",
          "insert": "В app.js.",
          "tip": "const не запрещает изменять содержимое объекта."
        },
        {
          "syntax": "filter",
          "meaning": "Оставляет элементы, подходящие условию.",
          "when": "Для фильтрации меню.",
          "example": "dishes.filter(d=>d.category===\"dessert\")",
          "insert": "На массиве.",
          "tip": "Исходный массив не меняет."
        },
        {
          "syntax": "map",
          "meaning": "Создаёт новый массив, преобразуя каждый элемент.",
          "when": "Для генерации карточек из данных.",
          "example": "dishes.map(d=>d.name)",
          "insert": "На массиве.",
          "tip": "Для HTML обычно добавляют join(\"\")."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "JS",
          "where": "app.js",
          "instruction": "Создаём массив блюд.",
          "code": "const dishes = [\"Ramen\", \"Steak\", \"Cheesecake\"];",
          "result": "JS хранит несколько значений в одном массиве.",
          "connect": "Индекс первого элемента — 0."
        },
        {
          "n": 2,
          "area": "JS",
          "where": "app.js",
          "instruction": "Берём первый элемент через `[0]`.",
          "code": "console.log(dishes[0]);",
          "result": "В Console появляется Ramen.",
          "connect": "Квадратные скобки обращаются к элементу по индексу."
        },
        {
          "n": 3,
          "area": "JS",
          "where": "app.js",
          "instruction": "Создаём объект блюда.",
          "code": "const dish = { name: \"Ramen\", price: 42 };",
          "result": "Одно блюдо хранит несколько свойств.",
          "connect": "Точка `dish.name` получает значение name."
        },
        {
          "n": 4,
          "area": "JS",
          "where": "app.js",
          "instruction": "Получаем свойство объекта.",
          "code": "console.log(dish.name);",
          "result": "В Console появляется Ramen.",
          "connect": "Объекты удобны для данных карточек меню."
        },
        {
          "n": 5,
          "area": "JS",
          "where": "app.js",
          "instruction": "Создаём массив объектов.",
          "code": "const menu = [{name:\"Ramen\",price:42},{name:\"Steak\",price:68}];",
          "result": "Теперь меню хранится как данные.",
          "connect": "Day 26 превратит эти данные в HTML."
        },
        {
          "n": 6,
          "area": "JS",
          "where": "app.js",
          "instruction": "Используем `forEach` для перебора.",
          "code": "menu.forEach(item => console.log(item.name));",
          "result": "В Console выводятся названия блюд.",
          "connect": "forEach повторяет действие для каждого элемента."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>Данные</h2><div id=\"data\"></div></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": "const menu=[{name:\"Ramen\",price:42},{name:\"Steak\",price:68}]; console.log(menu[0].name); document.querySelector(\"#data\").textContent=menu.map(x=>x.name+\" — \"+x.price+\" zł\").join(\" | \");"
      }
    },
    {
      "day": 26,
      "title": "JavaScript: динамическое меню",
      "desc": "Booking modal, burger-menu, Escape и состояние.",
      "tag": "JS",
      "body": "<h3>Modal + burger</h3><p>Модалка — элемент со состоянием open/closed. Закрытие: X, overlay и Escape.</p><h3>Задание</h3><div class='task'>Сделай booking modal и burger-menu. При открытой модалке блокируй прокрутку body.</div><h3>Чек</h3><ul><li>☐ Открывается/закрывается</li><li>☐ Escape закрывает</li><li>☐ Mobile nav работает</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 26"
      ],
      "steps": [
        "Оставь menu-grid пустым в HTML.",
        "Найди его через querySelector.",
        "Создай renderMenu().",
        "Перебери dishes.",
        "Создай карточку через template literal.",
        "Вставь карточки в grid.",
        "Добавь блюдо только в массив и проверь результат."
      ],
      "code": "<h3>Modal + burger</h3><p>Модалка — элемент со состоянием open/closed. Закрытие: X, overlay и Escape.</p><h3>Задание</h3><div class='task'>Сделай booking modal и burger-menu. При открытой модалке блокируй прокрутку body.</div><h3>Чек</h3><ul><li>☐ Открывается/закрывается</li><li>☐ Escape закрывает</li><li>☐ Mobile nav работает</li></ul>",
      "explain": [
        [
          "JS",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 26 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Создавать карточки Menu из массива.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "script.js + index.html",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "JS",
        "JavaScript",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "map",
          "meaning": "Создаёт новый массив, преобразуя каждый элемент.",
          "when": "Для генерации карточек из данных.",
          "example": "dishes.map(d=>d.name)",
          "insert": "На массиве.",
          "tip": "Для HTML обычно добавляют join(\"\")."
        },
        {
          "syntax": "filter",
          "meaning": "Оставляет элементы, подходящие условию.",
          "when": "Для фильтрации меню.",
          "example": "dishes.filter(d=>d.category===\"dessert\")",
          "insert": "На массиве.",
          "tip": "Исходный массив не меняет."
        },
        {
          "syntax": "forEach",
          "meaning": "Выполняет функцию для каждого элемента.",
          "when": "Для навешивания событий.",
          "example": "buttons.forEach(button=>...)",
          "insert": "На массиве/NodeList.",
          "tip": "Не возвращает новый массив как map."
        },
        {
          "syntax": "textContent",
          "meaning": "Читает или меняет текст элемента.",
          "when": "Для динамических надписей.",
          "example": "title.textContent=\"Спасибо\";",
          "insert": "После querySelector.",
          "tip": "Для HTML-разметки используй innerHTML только осознанно."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "HTML",
          "where": "Menu grid",
          "instruction": "Оставляем контейнер `<div class=\"menu-grid\" id=\"menuGrid\"></div>`.",
          "code": "<div class=\"menu-grid\" id=\"menuGrid\"></div>",
          "result": "Получаем пустое место для динамических карточек.",
          "connect": "JS будет вставлять HTML внутрь этого элемента."
        },
        {
          "n": 2,
          "area": "JS",
          "where": "app.js",
          "instruction": "Получаем `menuGrid`.",
          "code": "const menuGrid = document.querySelector(\"#menuGrid\");",
          "result": "JS получает контейнер.",
          "connect": "id → #menuGrid."
        },
        {
          "n": 3,
          "area": "JS",
          "where": "app.js",
          "instruction": "Создаём HTML одной карточки через template literal.",
          "code": "const card = `<article class=\"menu-card\"><h3>${item.name}</h3><p>${item.price} zł</p></article>`;",
          "result": "Один объект превращается в HTML.",
          "connect": "`${...}` подставляет данные внутрь строки."
        },
        {
          "n": 4,
          "area": "JS",
          "where": "app.js",
          "instruction": "Вставляем карточку через `insertAdjacentHTML(\"beforeend\", card)`.",
          "code": "menuGrid.insertAdjacentHTML(\"beforeend\", card);",
          "result": "Карточка появляется в браузере.",
          "connect": "beforeend добавляет в конец контейнера."
        },
        {
          "n": 5,
          "area": "JS",
          "where": "app.js",
          "instruction": "Переносим вставку внутрь `menu.forEach`.",
          "code": "menu.forEach(item => { ... });",
          "result": "Все блюда превращаются в карточки.",
          "connect": "Один шаблон + массив = много HTML-компонентов."
        },
        {
          "n": 6,
          "area": "Связь",
          "where": "HTML + CSS + JS",
          "instruction": "HTML даёт контейнер и class, CSS оформляет `.menu-card`, JS создаёт эти карточки.",
          "code": "<div id=\"menuGrid\" class=\"menu-grid\"></div>\n.menu-card{...}\nmenu.forEach(...)",
          "result": "Получаем настоящий динамический раздел.",
          "connect": "Если class в JS отличается от CSS, визуальный стиль не применится."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>Динамическое Menu</h2><div class=\"cards\" id=\"menuGrid\"></div></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": "const menu=[{name:\"Ramen\",price:42},{name:\"Steak\",price:68},{name:\"Pasta\",price:48}]; const grid=document.querySelector(\"#menuGrid\"); menu.forEach(item=>{grid.insertAdjacentHTML(\"beforeend\",`<article>${item.name}<br><b>${item.price} zł</b></article>`);});"
      }
    },
    {
      "day": 27,
      "title": "JavaScript: форма",
      "desc": "Понятные ошибки и успешное состояние.",
      "tag": "JS",
      "body": "<h3>Validation</h3><p>Показывай конкретную ошибку рядом с полем. Для реальной отправки нужна серверная часть или form-сервис.</p><h3>Код</h3><pre>form.addEventListener('submit', event =&gt; {\n  event.preventDefault();\n  if (!name.value.trim()) {\n    error.textContent = 'Введите имя';\n    name.focus();\n    return;\n  }\n});</pre><h3>Задание</h3><div class='task'>Проверь имя, телефон и дату. После успеха покажи подтверждение.</div><h3>Чек</h3><ul><li>☐ Понимаю preventDefault</li><li>☐ Ошибки понятные</li><li>☐ Focus возвращается в поле</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 27"
      ],
      "steps": [
        "Найди форму.",
        "Подпишись на submit.",
        "Вызови event.preventDefault().",
        "Получи значения через value.",
        "Проверь trim().",
        "Покажи сообщение через textContent.",
        "Проверь пустую и заполненную форму."
      ],
      "code": "<h3>Validation</h3><p>Показывай конкретную ошибку рядом с полем. Для реальной отправки нужна серверная часть или form-сервис.</p><h3>Код</h3>form.addEventListener('submit', event =&gt; {\n  event.preventDefault();\n  if (!name.value.trim()) {\n    error.textContent = 'Введите имя';\n    name.focus();\n    return;\n  }\n});<h3>Задание</h3><div class='task'>Проверь имя, телефон и дату. После успеха покажи подтверждение.</div><h3>Чек</h3><ul><li>☐ Понимаю preventDefault</li><li>☐ Ошибки понятные</li><li>☐ Focus возвращается в поле</li></ul>",
      "explain": [
        [
          "JS",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 27 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Проверять форму и показывать сообщения.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "script.js + index.html",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "JS",
        "JavaScript",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "value",
          "meaning": "Читает введённое значение input/textarea.",
          "when": "Для формы.",
          "example": "nameInput.value",
          "insert": "После querySelector.",
          "tip": "Это строка."
        },
        {
          "syntax": "preventDefault",
          "meaning": "Отменяет стандартное действие события.",
          "when": "Для учебной проверки form без перезагрузки.",
          "example": "event.preventDefault();",
          "insert": "В submit handler.",
          "tip": "Не отменяет вашу собственную проверку."
        },
        {
          "syntax": "if",
          "meaning": "Выполняет код только при истинном условии.",
          "when": "Для проверки данных и состояний.",
          "example": "if(!name){...}",
          "insert": "В функции.",
          "tip": "Условие должно давать true/false."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "HTML",
          "where": "Form",
          "instruction": "Убеждаемся, что у формы есть `id=\"bookingForm\"`.",
          "code": "<form id=\"bookingForm\">...</form>",
          "result": "JS сможет найти форму однозначно.",
          "connect": "id должен совпасть с querySelector(\"#bookingForm\")."
        },
        {
          "n": 2,
          "area": "JS",
          "where": "app.js",
          "instruction": "Получаем форму.",
          "code": "const form = document.querySelector(\"#bookingForm\");",
          "result": "JS держит ссылку на форму.",
          "connect": "Теперь слушаем submit."
        },
        {
          "n": 3,
          "area": "JS",
          "where": "app.js",
          "instruction": "Слушаем submit.",
          "code": "form.addEventListener(\"submit\", event => { ... });",
          "result": "Код запускается при отправке формы.",
          "connect": "submit лучше, чем click на кнопке: он учитывает Enter."
        },
        {
          "n": 4,
          "area": "JS",
          "where": "внутри submit",
          "instruction": "Пишем `event.preventDefault()`.",
          "code": "event.preventDefault();",
          "result": "Страница не перезагружается.",
          "connect": "Теперь можно проверить поля до отправки."
        },
        {
          "n": 5,
          "area": "JS",
          "where": "внутри submit",
          "instruction": "Получаем input через `form.querySelector(\"#name\")`.",
          "code": "const name = form.querySelector(\"#name\").value.trim();",
          "result": "Получаем введённое имя без лишних пробелов.",
          "connect": "value — текущее содержимое input."
        },
        {
          "n": 6,
          "area": "JS",
          "where": "внутри submit",
          "instruction": "Проверяем пустое имя через `if (!name)`.",
          "code": "if (!name) { alert(\"Введите имя\"); return; }",
          "result": "Пользователь получает понятную ошибку.",
          "connect": "return останавливает дальнейшее выполнение обработчика."
        },
        {
          "n": 7,
          "area": "JS",
          "where": "после проверки",
          "instruction": "Если всё хорошо — `console.log({name})`.",
          "code": "console.log({ name });",
          "result": "В Console видно собранные данные.",
          "connect": "Для реальной отправки позже нужен backend/API, но для курса этого достаточно."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>Форма</h2><form id=\"bookingForm\"><input id=\"name\" placeholder=\"Imię\"><button type=\"submit\">Wyślij</button><p id=\"status\"></p></form></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": "const form=document.querySelector(\"#bookingForm\"); const status=document.querySelector(\"#status\"); form.addEventListener(\"submit\",event=>{event.preventDefault(); const name=form.querySelector(\"#name\").value.trim(); if(!name){status.textContent=\"Введите имя\";return;} status.textContent=\"Готово: \"+name;});"
      }
    },
    {
      "day": 28,
      "title": "JavaScript: фильтр и LocalStorage",
      "desc": "Сохранение состояния в браузере.",
      "tag": "JS",
      "body": "<h3>LocalStorage</h3><p>LocalStorage хранит небольшие данные строками. Для массивов/объектов используй JSON.stringify/parse. Не храни пароли и токены.</p><h3>Код</h3><pre>localStorage.setItem('courseProgress', JSON.stringify({ day: 28 }));\nconst saved = JSON.parse(localStorage.getItem('courseProgress'));</pre><h3>Задание</h3><div class='task'>Сохрани выбранную категорию меню или закрытие welcome-banner. Обнови страницу и проверь.</div><h3>Чек</h3><ul><li>☐ Умею setItem/getItem</li><li>☐ Понимаю JSON</li><li>☐ Не храню секреты</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 28"
      ],
      "steps": [
        "Добавь кнопки категорий с data-category.",
        "Получи их через querySelectorAll.",
        "На click прочитай dataset.category.",
        "Фильтруй dishes.",
        "Сохраняй категорию через localStorage.setItem.",
        "При загрузке читай её через getItem.",
        "Проверь после обновления."
      ],
      "code": "<h3>LocalStorage</h3><p>LocalStorage хранит небольшие данные строками. Для массивов/объектов используй JSON.stringify/parse. Не храни пароли и токены.</p><h3>Код</h3>localStorage.setItem('courseProgress', JSON.stringify({ day: 28 }));\nconst saved = JSON.parse(localStorage.getItem('courseProgress'));<h3>Задание</h3><div class='task'>Сохрани выбранную категорию меню или закрытие welcome-banner. Обнови страницу и проверь.</div><h3>Чек</h3><ul><li>☐ Умею setItem/getItem</li><li>☐ Понимаю JSON</li><li>☐ Не храню секреты</li></ul>",
      "explain": [
        [
          "JS",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 28 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Фильтровать Menu и сохранять выбор.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "script.js + index.html",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "JS",
        "JavaScript",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "document.querySelectorAll",
          "meaning": "Находит все подходящие элементы.",
          "when": "Для списка карточек или кнопок.",
          "example": "document.querySelectorAll(\".gallery img\");",
          "insert": "В app.js.",
          "tip": "Возвращает NodeList."
        },
        {
          "syntax": "addEventListener",
          "meaning": "Подписывает элемент на событие.",
          "when": "Для click, submit, input и др.",
          "example": "button.addEventListener(\"click\",fn);",
          "insert": "После querySelector.",
          "tip": "Событие запускает функцию."
        },
        {
          "syntax": "classList.add",
          "meaning": "Добавляет CSS-класс.",
          "when": "Для открытия/включения состояния.",
          "example": "modal.classList.add(\"open\");",
          "insert": "В обработчике.",
          "tip": "Не забудь CSS для этого класса."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "JS",
          "where": "app.js",
          "instruction": "Создаём фильтр массива: `menu.filter(...)`.",
          "code": "const cheap = menu.filter(item => item.price < 50);",
          "result": "Получаем только блюда дешевле 50.",
          "connect": "filter не меняет исходный массив, а создаёт новый."
        },
        {
          "n": 2,
          "area": "HTML",
          "where": "Menu controls",
          "instruction": "Добавляем кнопки с `data-filter`.",
          "code": "<button data-filter=\"all\">Все</button><button data-filter=\"cheap\">До 50 zł</button>",
          "result": "HTML хранит значение фильтра.",
          "connect": "data-* удобно использовать как настройки для JS."
        },
        {
          "n": 3,
          "area": "JS",
          "where": "app.js",
          "instruction": "Получаем все кнопки через `querySelectorAll(\"[data-filter]\")`.",
          "code": "const filters = document.querySelectorAll(\"[data-filter]\");",
          "result": "Получаем список кнопок.",
          "connect": "querySelectorAll возвращает коллекцию элементов."
        },
        {
          "n": 4,
          "area": "JS",
          "where": "app.js",
          "instruction": "На каждую кнопку вешаем click через `forEach`.",
          "code": "filters.forEach(button => { button.addEventListener(\"click\", () => { ... }); });",
          "result": "Каждая кнопка получает своё действие.",
          "connect": "Это сочетание NodeList + forEach + event."
        },
        {
          "n": 5,
          "area": "JS",
          "where": "app.js",
          "instruction": "Читаем `button.dataset.filter`.",
          "code": "const type = button.dataset.filter;",
          "result": "JS узнаёт, какой фильтр выбран.",
          "connect": "data-filter=\"cheap\" → dataset.filter === \"cheap\"."
        },
        {
          "n": 6,
          "area": "JS",
          "where": "app.js",
          "instruction": "Сохраняем простую настройку в localStorage.",
          "code": "localStorage.setItem(\"menuFilter\", type);",
          "result": "После обновления браузер помнит выбранный фильтр.",
          "connect": "localStorage хранит строки."
        },
        {
          "n": 7,
          "area": "JS",
          "where": "app.js",
          "instruction": "Читаем сохранение.",
          "code": "const savedFilter = localStorage.getItem(\"menuFilter\");",
          "result": "Можно восстановить настройку при загрузке.",
          "connect": "Если значения нет, результат будет null."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>Фильтр</h2><div class=\"filters\"><button data-filter=\"all\">Все</button><button data-filter=\"cheap\">До 50 zł</button></div><div class=\"cards\" id=\"menuGrid\"></div></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": "const menu=[{name:\"Ramen\",price:42},{name:\"Steak\",price:68},{name:\"Pasta\",price:48}]; const grid=document.querySelector(\"#menuGrid\"); const render=list=>{grid.innerHTML=list.map(x=>`<article>${x.name}<br>${x.price} zł</article>`).join(\"\");}; render(menu); document.querySelectorAll(\"[data-filter]\").forEach(button=>button.addEventListener(\"click\",()=>{const type=button.dataset.filter; const list=type===\"cheap\"?menu.filter(x=>x.price<50):menu; render(list); localStorage.setItem(\"menuFilter\",type);}));"
      }
    },
    {
      "day": 29,
      "title": "Финальная проверка",
      "desc": "title, meta, alt, headings, keyboard, Lighthouse.",
      "tag": "Quality",
      "body": "<h3>Quality checklist</h3><p>Проверь title, description, один H1, heading hierarchy, alt, labels, focus, контраст, favicon, ссылки и скорость.</p><h3>Практика</h3><p>Запусти Lighthouse в Chrome DevTools. Пройди сайт на 320–1440px, Tab-навигацией и с отключённым JS. Исправь ошибки Console.</p><h3>Чек</h3><ul><li>☐ Console без ошибок</li><li>☐ Lighthouse проверен</li><li>☐ Mobile/desktop проверены</li></ul>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 29"
      ],
      "steps": [
        "Открой F12 → Console и исправь все красные ошибки.",
        "Открой Network и найди 404.",
        "Открой Elements и проверь структуру.",
        "Проверь Tab-навигацию.",
        "Проверь все ссылки, форму и мобильное меню.",
        "Проверь 320, 390, 430, 768, 1024 и 1440px.",
        "Проверь изображения и alt.",
        "Только после этого переходи к экзамену."
      ],
      "code": "<h3>Quality checklist</h3><p>Проверь title, description, один H1, heading hierarchy, alt, labels, focus, контраст, favicon, ссылки и скорость.</p><h3>Практика</h3><p>Запусти Lighthouse в Chrome DevTools. Пройди сайт на 320–1440px, Tab-навигацией и с отключённым JS. Исправь ошибки Console.</p><h3>Чек</h3><ul><li>☐ Console без ошибок</li><li>☐ Lighthouse проверен</li><li>☐ Mobile/desktop проверены</li></ul>",
      "explain": [
        [
          "Quality",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 29 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Научиться проверять сайт через DevTools и чек-лист.",
      "project": "Один общий проект: Motownia Smaków.",
      "file": "весь проект",
      "duration": "≈ 45–60 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "concepts": [
        "Quality",
        "Финальная проверка",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "alt",
          "meaning": "Текстовое описание изображения.",
          "when": "Для доступности и fallback.",
          "example": "alt=\"Интерьер ресторана\"",
          "insert": "Внутри img.",
          "tip": "Описывай смысл, а не просто слово «фото»."
        },
        {
          "syntax": "@media",
          "meaning": "Включает CSS только при заданном условии экрана.",
          "when": "Для адаптивной версии.",
          "example": "@media (max-width:768px){...}",
          "insert": "Внизу styles.css.",
          "tip": "Проверяй 320–430px, а не только один телефон."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "HTML",
          "where": "head",
          "instruction": "Проверяем `<title>` — он описывает конкретную страницу.",
          "code": "<title>Motownia Smaków — restauracja</title>",
          "result": "Вкладка и поисковая выдача получают понятное название.",
          "connect": "Title не должен быть просто «Главная»."
        },
        {
          "n": 2,
          "area": "HTML",
          "where": "head",
          "instruction": "Добавляем meta description.",
          "code": "<meta name=\"description\" content=\"Restauracja Motownia Smaków — autorska kuchnia...\">",
          "result": "Поисковику даётся краткое описание страницы.",
          "connect": "Следи за кавычками и корректным закрытием meta."
        },
        {
          "n": 3,
          "area": "HTML",
          "where": "images",
          "instruction": "Проверяем каждый `<img>` на `alt`.",
          "code": "<img src=\"...\" alt=\"Opis zdjęcia\">",
          "result": "Доступность и fallback улучшаются.",
          "connect": "Не пиши бессмысленное alt=\"image\"."
        },
        {
          "n": 4,
          "area": "CSS",
          "where": "mobile",
          "instruction": "Проверяем 320, 390, 768 и 1440px.",
          "code": "—",
          "result": "На каждом размере нет обрезанного текста и горизонтального скролла.",
          "connect": "Особенно проверь Header, Hero, Grid, Form."
        },
        {
          "n": 5,
          "area": "JS",
          "where": "Console",
          "instruction": "Открываем F12 → Console.",
          "code": "—",
          "result": "Не должно быть красных ошибок JavaScript.",
          "connect": "Одна красная ошибка может остановить часть логики."
        },
        {
          "n": 6,
          "area": "Проверка",
          "where": "Keyboard",
          "instruction": "Нажимаем Tab и проверяем видимый focus на интерактивных элементах.",
          "code": "—",
          "result": "Сайт можно использовать без мыши.",
          "connect": "Не убирай outline без альтернативы."
        },
        {
          "n": 7,
          "area": "Проверка",
          "where": "Lighthouse",
          "instruction": "Chrome DevTools → Lighthouse → запускаем аудит.",
          "code": "—",
          "result": "Получаем список проблем Performance/Accessibility/Best Practices/SEO.",
          "connect": "Используй отчёт как чек-лист, а не как магическое число."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Не создавай новый сайт каждый день: следующий день продолжает результат предыдущего.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": {
        "html": "<header class=\"head\"><b>Motownia Smaków</b><nav><a href=\"#main\">Сайт</a></nav></header><main id=\"main\"><section class=\"box\"><h2>Final Check</h2><ul><li>HTML</li><li>CSS</li><li>JS</li><li>Mobile</li><li>Accessibility</li></ul></section></main>",
        "css": ":root{--accent:#d7ff3f;--bg:#101010;--text:#f5f5f5}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 24px;border-bottom:1px solid #333}.head nav{display:flex;gap:16px}.head a{color:inherit}.box{max-width:1000px;margin:0 auto;padding:60px 24px}.hero{min-height:65vh;display:flex;align-items:center;max-width:none;padding:60px 10%;background:#222}.photo-bg{background-image:linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center}.hero h1{font-size:clamp(42px,7vw,84px);margin:0 0 16px}.hero p{max-width:650px;line-height:1.6}.btn,.head button,form button,.filters button{display:inline-flex;padding:12px 18px;border:0;border-radius:999px;background:var(--accent);color:#111;text-decoration:none;cursor:pointer}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards article,.hover-card{padding:24px;border:1px solid #333;border-radius:18px;background:#171717}.photo{width:100%;max-height:360px;object-fit:cover;border-radius:18px}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.gallery img{width:100%;height:260px;object-fit:cover;border-radius:18px}.hover-card{margin-top:20px;transition:transform .2s ease}.hover-card:hover{transform:translateY(-5px)}form{display:grid;gap:10px;max-width:520px}input,textarea{width:100%;padding:13px;border:1px solid #444;border-radius:10px;background:#171717;color:#fff}textarea{min-height:120px}.muted{color:#aab0b5}footer{padding:40px 24px;border-top:1px solid #333} @media(max-width:700px){.cards{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.head{padding:14px 18px}.box{padding:45px 18px}}\n",
        "js": ""
      }
    },
    {
      "day": 30,
      "title": "ЭКЗАМЕН: сайт с нуля",
      "desc": "Production-чеклист, публикация и процесс реального заказа.",
      "tag": "Launch",
      "body": "<h3>Публикация</h3><p>Сегодня собери production-версию: чистый код, понятные классы, оптимизированные изображения, рабочие ссылки и финальный тест.</p><h3>Публикация</h3><p>Статический сайт можно опубликовать через GitHub Pages или Vercel. Загрузи проект в GitHub, подключи репозиторий и получи публичный URL. localhost не показывай клиенту.</p><h3>Клиентский процесс</h3><div class='task'>1) Требования 2) Контент 3) Wireframe 4) Mobile-first 5) HTML/CSS 6) JS 7) QA 8) Preview 9) Правки 10) Publish</div><h3>Финальный результат</h3><div class='task'>С нуля написать сайт-визитку ресторана, барбершопа, автосервиса или салона. Любую новую просьбу клиента раскладывай на структуру HTML, стили CSS и поведение JS.</div>",
      "open": [
        "VS Code",
        "файл проекта",
        "Chrome"
      ],
      "create": [
        "Изменения для Day 30"
      ],
      "steps": [
        "Создай новую папку final-exam.",
        "Создай index.html, styles.css и script.js.",
        "Не копируй старый проект целиком.",
        "Составь структуру по ТЗ самостоятельно.",
        "Сделай Hero с фотографией на фоне.",
        "Добавь About, Menu, Gallery, Reviews, Contact и Footer.",
        "Добавь мобильное меню и форму или фильтр на JavaScript.",
        "Проверь Console, Network и mobile.",
        "Сохрани проект как свою итоговую работу."
      ],
      "code": "<h3>Публикация</h3><p>Сегодня собери production-версию: чистый код, понятные классы, оптимизированные изображения, рабочие ссылки и финальный тест.</p><h3>Публикация</h3><p>Статический сайт можно опубликовать через GitHub Pages или Vercel. Загрузи проект в GitHub, подключи репозиторий и получи публичный URL. localhost не показывай клиенту.</p><h3>Клиентский процесс</h3><div class='task'>1) Требования 2) Контент 3) Wireframe 4) Mobile-first 5) HTML/CSS 6) JS 7) QA 8) Preview 9) Правки 10) Publish</div><h3>Финальный результат</h3><div class='task'>С нуля написать сайт-визитку ресторана, барбершопа, автосервиса или салона. Любую новую просьбу клиента раскладывай на структуру HTML, стили CSS и поведение JS.</div>",
      "explain": [
        [
          "Launch",
          "раздел курса, посвящённый этой части веб-разработки."
        ]
      ],
      "challenge": "Повтори результат Day 30 без копирования подсказки, затем измени его под свой проект.",
      "expected": "Результат работает в Chrome и не показывает ошибок в Console.",
      "mistakes": [
        "Проверь путь к файлу и название классов.",
        "Сохрани все изменённые файлы.",
        "Открой DevTools → Console и посмотри красные ошибки."
      ],
      "goal": "Самостоятельно создать новый адаптивный сайт по ТЗ.",
      "project": "Отдельная папка final-exam: самостоятельная работа.",
      "file": "весь проект",
      "duration": "60–120 минут",
      "before": "Сначала прочитай объяснение. Затем выполняй шаги в VS Code. Код набирай вручную, по частям.",
      "after": "После выполнения посмотри результат в Chrome. Полный эталонный код открывай только после практики.",
      "connect": "Это проверка всего навыка. Готовый финальный код заранее не даётся.",
      "concepts": [
        "Launch",
        "ЭКЗАМЕН",
        "вложенность и связь элементов",
        "результат в Chrome",
        "поиск ошибок"
      ],
      "code_note": "Полный эталонный код находится в самом конце урока. Сначала напиши код сам.",
      "commands": [
        {
          "syntax": "class",
          "meaning": "Имя элемента, которое можно использовать в CSS и JS.",
          "when": "Для повторяемых компонентов.",
          "example": "<div class=\"card\">...</div>",
          "insert": "Добавь class в HTML → используй .card в CSS.",
          "tip": "Один class можно использовать много раз."
        },
        {
          "syntax": "id",
          "meaning": "Уникальное имя элемента.",
          "when": "Для якорей и JS.",
          "example": "<section id=\"contacts\">",
          "insert": "Добавь id на нужный элемент.",
          "tip": "Один id не должен повторяться."
        },
        {
          "syntax": "@media",
          "meaning": "Включает CSS только при заданном условии экрана.",
          "when": "Для адаптивной версии.",
          "example": "@media (max-width:768px){...}",
          "insert": "Внизу styles.css.",
          "tip": "Проверяй 320–430px, а не только один телефон."
        },
        {
          "syntax": "document.querySelector",
          "meaning": "Находит первый элемент по CSS-селектору.",
          "when": "Для работы с конкретным элементом.",
          "example": "document.querySelector(\".hero\");",
          "insert": "В app.js.",
          "tip": "Селектор такой же, как в CSS."
        },
        {
          "syntax": "addEventListener",
          "meaning": "Подписывает элемент на событие.",
          "when": "Для click, submit, input и др.",
          "example": "button.addEventListener(\"click\",fn);",
          "insert": "После querySelector.",
          "tip": "Событие запускает функцию."
        }
      ],
      "teacher_flow": [
        "Сначала прочитай цель дня и не открывай эталонный код.",
        "Открой только перечисленные файлы.",
        "Печатай код руками по шагам. После шага сохраняй Ctrl+S.",
        "После каждого заметного изменения открывай/обновляй Chrome и смотри результат.",
        "Если результат отличается, остановись и исправь ошибку до следующего шага.",
        "В конце выполни самостоятельное задание и только потом открой эталон."
      ],
      "teacher_tip": "Не копируй большой блок целиком. Набери маленькую часть → сохрани → посмотри результат → продолжай.",
      "microsteps": [
        {
          "n": 1,
          "area": "План",
          "where": "Сначала бумага",
          "instruction": "Перед кодом рисуем 8 блоков: Header, Hero, About, Menu, Gallery, Reviews, Contact, Footer.",
          "code": "—",
          "result": "Появляется карта проекта.",
          "connect": "Экзамен проверяет самостоятельность, поэтому сначала план."
        },
        {
          "n": 2,
          "area": "HTML",
          "where": "Шаг 1",
          "instruction": "Создаём чистый index.html и только HTML-структуру.",
          "code": "<!doctype html>\n<html lang=\"ru\">...",
          "result": "Получаем рабочий скелет без дизайна.",
          "connect": "Не начинай с CSS, пока структура не готова."
        },
        {
          "n": 3,
          "area": "HTML",
          "where": "Шаг 2",
          "instruction": "Для каждой секции пишем правильный семантический элемент: header, main, section, article, footer.",
          "code": "<main>\n  <section>...</section>\n</main>",
          "result": "Получаем понятную структуру.",
          "connect": "CSS будет цепляться к class, навигация — к id."
        },
        {
          "n": 4,
          "area": "CSS",
          "where": "Шаг 3",
          "instruction": "Подключаем styles.css и сначала делаем базу: box-sizing, body, container, typography.",
          "code": "*{box-sizing:border-box}\nbody{...}\n.container{...}",
          "result": "Страница получает фундамент.",
          "connect": "Не пытайся сразу сделать анимации."
        },
        {
          "n": 5,
          "area": "CSS",
          "where": "Шаг 4",
          "instruction": "Собираем Header → Hero → Grid карточек → Gallery → Contact.",
          "code": "display:flex;\ndisplay:grid;\nbackground-image:url(\"...\");",
          "result": "Получаем визуально готовый сайт.",
          "connect": "Каждый блок проверяй отдельно в Chrome."
        },
        {
          "n": 6,
          "area": "JS",
          "where": "Шаг 5",
          "instruction": "Добавляем только 2–3 понятные интеракции: mobile menu, form validation, gallery modal/filter.",
          "code": "document.querySelector(...)\naddEventListener(...)",
          "result": "Сайт становится интерактивным.",
          "connect": "JS должен работать с существующим HTML."
        },
        {
          "n": 7,
          "area": "Проверка",
          "where": "Шаг 6",
          "instruction": "Проверяем Console, мобильные размеры, Tab, изображения, ссылки и форму.",
          "code": "—",
          "result": "Получаем финальный production-like результат.",
          "connect": "Только после проверки считаем экзамен завершённым."
        }
      ],
      "lesson_format": [
        "Прочитай только одну маленькую задачу.",
        "Открой указанный файл и найди указанное место.",
        "Напечатай только короткий фрагмент кода руками.",
        "Сохрани Ctrl+S и сразу посмотри результат в Chrome.",
        "Сравни результат с объяснением «что изменилось».",
        "Свяжи этот фрагмент с предыдущим: HTML создаёт → CSS оформляет → JS управляет.",
        "Только после самостоятельной попытки открывай эталонный код в конце урока."
      ],
      "combination_title": "Собираем всё вместе",
      "combination_explain": "Это проверка всего навыка. Готовый финальный код заранее не даётся.",
      "rebuild_note": "После курса можно снова открыть этот день и пройти все микрошаги с нуля: сначала маленькие фрагменты, затем объединение и проверка результата.",
      "debug_steps": [
        "Если ничего не изменилось — Ctrl+S, затем Ctrl+R.",
        "Если CSS не работает — проверь href=\"styles.css\" и точное имя файла.",
        "Если JS не работает — F12 → Console и проверь первую красную ошибку.",
        "Если класс не применяется — сравни class в HTML и .class в CSS посимвольно.",
        "Если id не найден — сравни id=\"...\" в HTML и #... в JS.",
        "Если появляется горизонтальный скролл — временно найди широкий элемент через DevTools → Elements."
      ],
      "combo": null
    }
  ],
  "catalog": {
    "HTML": [
      [
        "<!doctype html>",
        "Объявляет современный HTML-документ.",
        "В первой строке index.html.",
        "<!doctype html>",
        "Напиши первой строкой файла.",
        "Не является видимым содержимым."
      ],
      [
        "<html>",
        "Корневой элемент страницы. Внутри него находятся head и body.",
        "Один раз вокруг всего документа.",
        "<html lang=\"ru\"> ... </html>",
        "После doctype открой html, а закрывающий тег поставь в самом низу.",
        "lang сообщает язык страницы."
      ],
      [
        "<head>",
        "Служебная часть HTML: title, meta и подключения CSS.",
        "В каждом документе.",
        "<head>...</head>",
        "После открытия html и до body.",
        "Видимый контент сюда не кладём."
      ],
      [
        "<body>",
        "Видимая часть страницы.",
        "Для текста, изображений, секций, форм.",
        "<body><h1>Привет</h1></body>",
        "После head.",
        "То, что пользователь видит, обычно находится здесь."
      ],
      [
        "<h1>…<h6>",
        "заголовки",
        "Когда понадобится: смотри контекст урока.",
        "Пример: <h1>…<h6>",
        "заголовки",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "<p>",
        "Абзац текста.",
        "Для описаний и обычного текста.",
        "<p>Домашняя кухня каждый день.</p>",
        "Под заголовком.",
        "Не делай большие отступы десятками br."
      ],
      [
        "<a href=\"...\">",
        "ссылка",
        "Когда понадобится: смотри контекст урока.",
        "Пример: <a href=\"...\">",
        "ссылка",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "<img src=\"...\" alt=\"...\">",
        "Показывает изображение. src содержит путь или URL картинки, alt — текстовое описание.",
        "Когда на странице нужно показать фотографию, логотип, блюдо или элемент галереи.",
        "<img src=\"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80\" alt=\"Интерьер ресторана\">",
        "Найди изображение → возьми прямой URL изображения → вставь его внутрь src=\"...\" → в alt напиши, что изображено → сохрани → обнови Chrome.",
        "Не закрывай img тегом </img>. Если фото не найдено/не загрузилось, alt должен объяснять, что было на изображении. Пример: alt=\"Интерьер ресторана\"."
      ],
      [
        "<ul> / <ol>",
        "списки",
        "Когда понадобится: смотри контекст урока.",
        "Пример: <ul> / <ol>",
        "списки",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "<li>",
        "элемент списка",
        "Когда понадобится: смотри контекст урока.",
        "Пример: <li>",
        "элемент списка",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "<header>",
        "Шапка или вводная часть страницы.",
        "Для логотипа, навигации и CTA.",
        "<header>...</header>",
        "В начале body.",
        "Это смысл HTML, а не стиль."
      ],
      [
        "<nav>",
        "Контейнер для навигационных ссылок.",
        "Для главного меню.",
        "<nav><a href=\"#menu\">Меню</a></nav>",
        "Внутри header.",
        "Ссылки должны вести к реальным адресам или id."
      ],
      [
        "<main>",
        "Главное содержимое страницы.",
        "Обычно один main.",
        "<main>...</main>",
        "После header.",
        "Footer обычно находится после main."
      ],
      [
        "<section>",
        "Смысловой раздел страницы.",
        "Для Hero, About, Menu, Gallery и т.д.",
        "<section id=\"menu\"><h2>Меню</h2></section>",
        "Внутри main.",
        "Хорошо, когда секция имеет заголовок и понятную цель."
      ],
      [
        "<article>",
        "самостоятельная карточка/материал",
        "Когда понадобится: смотри контекст урока.",
        "Пример: <article>",
        "самостоятельная карточка/материал",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "<footer>",
        "Нижняя часть страницы.",
        "Для контактов, копирайта, ссылок.",
        "<footer>© 2026</footer>",
        "После main.",
        "Обычно один главный footer."
      ],
      [
        "<form>",
        "Контейнер формы.",
        "Для пользовательского ввода.",
        "<form id=\"contact-form\">...</form>",
        "В секции контактов.",
        "Для реальной отправки позже понадобится сервер или внешний сервис."
      ],
      [
        "<label>",
        "Подпись поля формы.",
        "Для доступной формы.",
        "<label for=\"email\">Email</label>",
        "Перед input.",
        "for должен совпадать с id."
      ],
      [
        "<input>",
        "Однострочное поле ввода.",
        "Для имени, email, телефона.",
        "<input id=\"email\" type=\"email\">",
        "Внутри form.",
        "type=email даёт базовую проверку браузера."
      ],
      [
        "<textarea>",
        "Многострочное поле.",
        "Для сообщения.",
        "<textarea id=\"message\"></textarea>",
        "Внутри form.",
        "Размер удобно задавать CSS."
      ],
      [
        "<button>",
        "Кнопка действия.",
        "Для JS, формы и интерактивности.",
        "<button type=\"button\">Открыть</button>",
        "В нужном компоненте.",
        "Внутри form явно указывай type."
      ]
    ],
    "CSS": [
      [
        "display:flex",
        "Flexbox",
        "Когда понадобится: смотри контекст урока.",
        "Пример: display:flex",
        "Flexbox",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "display:grid",
        "Grid",
        "Когда понадобится: смотри контекст урока.",
        "Пример: display:grid",
        "Grid",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "gap",
        "Расстояние между flex/grid-элементами.",
        "Для сеток и меню.",
        "gap:24px;",
        "На контейнере.",
        "Часто удобнее, чем много margin."
      ],
      [
        "padding",
        "Внутренний отступ.",
        "Для карточек, кнопок, секций.",
        "padding:24px;",
        "В CSS нужного элемента.",
        "Не путай с margin."
      ],
      [
        "margin",
        "Внешний отступ.",
        "Для расстояния снаружи.",
        "margin-top:40px;",
        "В CSS элемента.",
        "Для grid/flex чаще лучше gap."
      ],
      [
        "border",
        "граница",
        "Когда понадобится: смотри контекст урока.",
        "Пример: border",
        "граница",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "width / height",
        "ширина / высота",
        "Когда понадобится: смотри контекст урока.",
        "Пример: width / height",
        "ширина / высота",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "max-width",
        "Ограничивает максимальную ширину.",
        "Для контейнера и текста.",
        "max-width:1200px;",
        "На .container.",
        "Помогает не растягивать контент на огромном мониторе."
      ],
      [
        "color",
        "цвет текста",
        "Когда понадобится: смотри контекст урока.",
        "Пример: color",
        "цвет текста",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "background",
        "фон",
        "Когда понадобится: смотри контекст урока.",
        "Пример: background",
        "фон",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "font-family",
        "Выбирает шрифт.",
        "Для body и отдельных текстовых блоков.",
        "font-family:Arial,sans-serif;",
        "В body или заголовке.",
        "Указывай запасной шрифт."
      ],
      [
        "font-size",
        "Размер текста.",
        "Для иерархии.",
        "font-size:48px;",
        "В h1/h2/p.",
        "На мобильном размер может быть меньше."
      ],
      [
        "font-weight",
        "Толщина текста.",
        "Для заголовков и акцентов.",
        "font-weight:700;",
        "В нужном селекторе.",
        "700 примерно соответствует bold."
      ],
      [
        "line-height",
        "Высота строки.",
        "Для читаемости текста.",
        "line-height:1.5;",
        "В p и заголовках.",
        "Не обязательно указывать px."
      ],
      [
        "position",
        "позиционирование",
        "Когда понадобится: смотри контекст урока.",
        "Пример: position",
        "позиционирование",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "z-index",
        "Управляет порядком перекрывающихся слоёв.",
        "Для текста поверх overlay и модалок.",
        "z-index:2;",
        "На элементе, который должен быть выше.",
        "Не является универсальным решением всех stacking context."
      ],
      [
        "transition",
        "Делает изменение свойства плавным.",
        "Для hover/focus.",
        "transition:transform .2s ease;",
        "В основном селекторе.",
        "Не ставь transition только внутри hover."
      ],
      [
        "transform",
        "движение/масштаб",
        "Когда понадобится: смотри контекст урока.",
        "Пример: transform",
        "движение/масштаб",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "@media",
        "Включает CSS только при заданном условии экрана.",
        "Для адаптивной версии.",
        "@media (max-width:768px){...}",
        "Внизу styles.css.",
        "Проверяй 320–430px, а не только один телефон."
      ],
      [
        ":hover",
        "Состояние элемента при наведении курсора.",
        "Для кнопок и карточек.",
        ".button:hover{...}",
        "После основного селектора.",
        "Добавляй transition в обычный селектор."
      ],
      [
        ":focus-visible",
        "фокус клавиатуры",
        "Когда понадобится: смотри контекст урока.",
        "Пример: :focus-visible",
        "фокус клавиатуры",
        "Проверь синтаксис и имя селектора/команды."
      ]
    ],
    "JS": [
      [
        "const",
        "Создаёт переменную, которую нельзя переназначить.",
        "Для элементов DOM и постоянных данных.",
        "const button = document.querySelector(\"button\");",
        "В app.js.",
        "const не запрещает изменять содержимое объекта."
      ],
      [
        "let",
        "Создаёт изменяемую переменную.",
        "Для состояния, которое меняется.",
        "let count=0;",
        "В app.js.",
        "Не используй let без необходимости."
      ],
      [
        "console.log()",
        "Показывает значение в DevTools Console.",
        "Для проверки и отладки.",
        "console.log(button);",
        "В app.js → F12 → Console.",
        "Это не текст на самой странице."
      ],
      [
        "if / else",
        "условие",
        "Когда понадобится: смотри контекст урока.",
        "Пример: if / else",
        "условие",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "function",
        "Объявляет повторяемое действие.",
        "Когда код нужно вызывать несколько раз.",
        "function openMenu(){...}",
        "В app.js.",
        "Функцию нужно вызвать: openMenu();"
      ],
      [
        "return",
        "возврат значения",
        "Когда понадобится: смотри контекст урока.",
        "Пример: return",
        "возврат значения",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "document",
        "текущий HTML-документ",
        "Когда понадобится: смотри контекст урока.",
        "Пример: document",
        "текущий HTML-документ",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "querySelector()",
        "Находит первый элемент по CSS-селектору.",
        "Для работы с конкретным элементом.",
        "document.querySelector(\".hero\");",
        "В app.js.",
        "Селектор такой же, как в CSS."
      ],
      [
        "querySelectorAll()",
        "Находит все подходящие элементы.",
        "Для списка карточек или кнопок.",
        "document.querySelectorAll(\".gallery img\");",
        "В app.js.",
        "Возвращает NodeList."
      ],
      [
        "addEventListener()",
        "Подписывает элемент на событие.",
        "Для click, submit, input и др.",
        "button.addEventListener(\"click\",fn);",
        "После querySelector.",
        "Событие запускает функцию."
      ],
      [
        "textContent",
        "Читает или меняет текст элемента.",
        "Для динамических надписей.",
        "title.textContent=\"Спасибо\";",
        "После querySelector.",
        "Для HTML-разметки используй innerHTML только осознанно."
      ],
      [
        "classList.add()",
        "добавить класс",
        "Когда понадобится: смотри контекст урока.",
        "Пример: classList.add()",
        "добавить класс",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "classList.remove()",
        "удалить класс",
        "Когда понадобится: смотри контекст урока.",
        "Пример: classList.remove()",
        "удалить класс",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "classList.toggle()",
        "Переключает CSS-класс.",
        "Для открытия/закрытия меню и модалок.",
        "menu.classList.toggle(\"open\");",
        "В обработчике click.",
        "CSS должен описывать состояние .open."
      ],
      [
        "value",
        "Читает введённое значение input/textarea.",
        "Для формы.",
        "nameInput.value",
        "После querySelector.",
        "Это строка."
      ],
      [
        "preventDefault()",
        "отменить стандартное действие",
        "Когда понадобится: смотри контекст урока.",
        "Пример: preventDefault()",
        "отменить стандартное действие",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "map()",
        "преобразовать массив",
        "Когда понадобится: смотри контекст урока.",
        "Пример: map()",
        "преобразовать массив",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "filter()",
        "отфильтровать массив",
        "Когда понадобится: смотри контекст урока.",
        "Пример: filter()",
        "отфильтровать массив",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "forEach()",
        "перебрать массив",
        "Когда понадобится: смотри контекст урока.",
        "Пример: forEach()",
        "перебрать массив",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "localStorage.setItem()",
        "Сохраняет небольшие данные в браузере.",
        "Для учебного прогресса и настроек.",
        "localStorage.setItem(\"theme\",\"dark\");",
        "В app.js.",
        "Не хранит секреты и пароли."
      ],
      [
        "localStorage.getItem()",
        "Сохраняет небольшие данные в браузере.",
        "Для учебного прогресса и настроек.",
        "localStorage.setItem(\"theme\",\"dark\");",
        "В app.js.",
        "Не хранит секреты и пароли."
      ],
      [
        "JSON.stringify()",
        "объект → JSON",
        "Когда понадобится: смотри контекст урока.",
        "Пример: JSON.stringify()",
        "объект → JSON",
        "Проверь синтаксис и имя селектора/команды."
      ],
      [
        "JSON.parse()",
        "JSON → объект",
        "Когда понадобится: смотри контекст урока.",
        "Пример: JSON.parse()",
        "JSON → объект",
        "Проверь синтаксис и имя селектора/команды."
      ]
    ]
  },
  "resources": [
    [
      "MDN — Getting started with the Web",
      "Бесплатный практический старт: установка, первый сайт, HTML, CSS, JS и публикация.",
      "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"
    ],
    [
      "MDN — Learn web development",
      "Структурированный учебник по основам frontend.",
      "https://developer.mozilla.org/en-US/docs/Learn_web_development"
    ],
    [
      "freeCodeCamp — Responsive Web Design",
      "Бесплатная интерактивная практика HTML/CSS и responsive design.",
      "https://www.freecodecamp.org/learn/2022/responsive-web-design/"
    ],
    [
      "VS Code",
      "Редактор кода.",
      "https://code.visualstudio.com/"
    ],
    [
      "Chrome",
      "Браузер и DevTools.",
      "https://www.google.com/chrome/"
    ]
  ],
  "meta": {
    "title": "RAW CODE — Teacher Edition",
    "rule": "Пиши руками. Эталонный код открывай только после практики.",
    "project": "Motownia Smaków",
    "lesson_structure": [
      "Цель",
      "Что открыть",
      "Что создать/изменить",
      "Команды",
      "Пошагово",
      "Результат",
      "Проверка",
      "Ошибки",
      "Самостоятельное задание",
      "Связь с проектом",
      "Эталонный код"
    ]
  },
  "phases": [
    {
      "name": "01–05",
      "title": "HTML — строим скелет",
      "desc": "Каждый день добавляет одну часть структуры. Никакого CSS, пока не понятно, что за элемент."
    },
    {
      "name": "06–15",
      "title": "CSS — превращаем скелет в дизайн",
      "desc": "Сначала подключение и текст, затем box model, container, Flexbox, Grid, mobile, фон и состояния."
    },
    {
      "name": "16–20",
      "title": "Собираем настоящий лендинг",
      "desc": "Gallery, Reviews, Contact, Footer, визуальная система и контрольная сборка."
    },
    {
      "name": "21–28",
      "title": "JavaScript — добавляем поведение",
      "desc": "Подключение → DOM → события → меню → данные → динамический HTML → форма → фильтр и localStorage."
    },
    {
      "name": "29–30",
      "title": "Проверка и экзамен",
      "desc": "Сначала полная проверка своего сайта, затем новый проект без готового решения."
    }
  ],
  "version": "Teacher Edition v5 — Microstep Manual"
};
