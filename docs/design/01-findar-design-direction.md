# FINDAR Design Direction

## Позиционирование

FINDAR - центр практической оценки и тестирования сварщиков. Визуально сайт должен транслировать:

- доверие;
- техническую точность;
- международный стандарт;
- безопасность;
- производственную дисциплину;
- живую практику, а не декоративный маркетинг.

## Целевое ощущение

Не "яркий лендинг". Не "стартап-игрушка". Не "дешевый техно-градиент".

Правильное ощущение: industrial premium control room. Пользователь должен чувствовать, что перед ним серьезная программа отбора и оценки, где есть регламент, оборудование, контроль качества и понятный следующий шаг.

## Визуальный язык

### Цвет

- Base dark: глубокий почти-черный / graphite / steel.
- Surface light: холодный светло-серый, не кремовый и не бежевый.
- Primary action: safety yellow.
- Technical accent: controlled blue для слова FINDAR, активных technical markers, схем и state highlights.
- Danger/alert colors использовать только по смыслу.

### Типографика

- Hero: крупный, уверенный, плотный uppercase допустим.
- Sections: меньше, спокойнее, без чрезмерного hero-scale внутри карточек.
- Body: читаемый line-height, не мельчить.
- Letter spacing не делать отрицательным. Для compact UI держать 0 или умеренный positive uppercase tracking.

### Сетка

- Использовать строгую modular grid.
- Контентные секции должны иметь понятную иерархию: intro -> proof -> process -> participation.
- Карточки не вкладывать в карточки.
- Повторяемые элементы держать одинаковыми по высоте там, где пользователь сравнивает параметры.

### Материалы

Допустимые материалы:

- темная матовая сталь;
- стекло только как тонкий overlay, не как основной стиль;
- желтая safety strip / technical line;
- blue light только как тонкий технический акцент;
- реальные изображения сварки, металла, контроля качества.

Недопустимые материалы:

- мягкие пастельные neumorphic панели без контраста;
- чрезмерное glassmorphism blur на каждом блоке;
- декоративные gradient blobs/orbs;
- "космический" фиолетово-синий SaaS стиль;
- marketing hero с split card вместо полноценного первого экрана.

## Header Standard

Header - критически важная зона. Он должен быть простым, стабильным и предсказуемым.

Текущая утвержденная логика:

- desktop initial: логотип FINDAR стоит в контейнерной зоне шапки, примерно там же, где был изначально; переключатель языков справа, отдельной кнопки "Записаться" в шапке нет;
- desktop scroll: логотип переезжает к физическому левому краю viewport и масштабируется как industrial brand anchor; hero WhatsApp CTA плавно трансформируется и докуется под ним примерно за 150px до ухода за верх viewport;
- mobile initial: logo-card и переключатель языков сидят в компактном полупрозрачном средне-стальном `site-header` top bar без отступов от левого, правого и верхнего края viewport; скругление допустимо только снизу, чтобы элемент не ощущался как отдельная floating-card и не создавал пустую зону перед hero-контентом;
- mobile scroll: hero WhatsApp CTA не меняет `position`, а уезжает далеко вправо; отдельная bottom fixed CTA выезжает справа;
- mobile footer: когда виден финальный CTA "Связаться с нами", bottom fixed action плавно уходит вправо, чтобы не дублировать одинаковое действие;
- mobile reverse scroll: bottom CTA уходит вправо, hero CTA возвращается слева направо.

Header acceptance criteria:

- desktop logo starts container-aligned and moves to the exact viewport left edge in scrolled state;
- desktop WhatsApp CTA uses a smooth transform into docked state, not a visible jump;
- docked desktop WhatsApp CTA has the same width as the scaled logo-card;
- mobile logo is not centered under the notch area;
- CTA never overlaps logo or language switch;
- header elements do not cover hero H1 on load;
- fixed mobile CTA does not duplicate final CTA;
- mobile CTA choreography uses two separate CTA elements to avoid position-change jumps;
- transitions use transform/opacity where possible;
- `prefers-reduced-motion: reduce` removes non-essential transition duration.

## Content Hierarchy

Priority order:

1. FINDAR brand and practical welder testing.
2. Why this is credible: international requirements, quality control, real tasks.
3. What happens during testing.
4. What is evaluated.
5. How to apply.
6. Participant code / WhatsApp action.

Every design change must strengthen one of these priorities.

## Image Direction

Use real or realistic industrial images:

- welding arc;
- weld bead closeups;
- inspection/control equipment;
- workshop/production environment;
- technical diagrams for welding positions.

Avoid:

- generic stock business people;
- over-dark unreadable photo backgrounds;
- abstract 3D shapes unrelated to welding;
- illustrative cartoon welders unless the whole brand is intentionally illustrative.
