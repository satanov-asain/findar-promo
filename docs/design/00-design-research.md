# Design Research: Sources And Project Takeaways

Дата фиксации: 2026-06-28.

## Использованные источники

- Nielsen Norman Group, "The Role of Animation and Motion in UX": https://www.nngroup.com/articles/animation-purpose-ux/
- web.dev, "How to create high-performance CSS animations": https://web.dev/articles/animations-guide
- web.dev, "prefers-reduced-motion: Sometimes less movement is more": https://web.dev/articles/prefers-reduced-motion
- W3C WAI WCAG 2.2, "Animation from Interactions": https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
- W3C WAI WCAG 2.2, "Non-text Contrast": https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
- Microsoft Fluent 2, "Motion": https://fluent2.microsoft.design/motion
- IBM Carbon Design System, "Motion overview": https://carbondesignsystem.com/elements/motion/overview/
- Don Norman, "Affordances and Design": https://jnd.org/affordances-and-design/

## Базовые выводы

1. Motion должен быть функциональным.
   NN/g прямо формулирует, что UX-анимация должна быть unobtrusive, brief, subtle и использоваться для feedback, state-change, navigation metaphors и signifiers. Для FINDAR это означает: никаких случайных миганий, бесконечных декоративных движений, дерганого hero или "эффектов ради эффекта".

2. Motion притягивает внимание, поэтому он опасен.
   Движение конкурирует с текстом и CTA. На FINDAR внимание пользователя должно идти по маршруту: бренд -> практическое тестирование -> доверие/стандарты -> заявка.

3. Лучшие дизайн-системы разделяют motion по назначению.
   IBM Carbon делит motion на productive и expressive. Productive motion быстрый, тонкий и помогает выполнить задачу. Expressive motion используется редко, в важных моментах. Для FINDAR productive motion должен быть стандартом, expressive - только для первого появления hero, ключевого CTA или подтверждения действия.

4. Анимация должна быть производительной.
   web.dev рекомендует анимировать `transform` и `opacity`; избегать свойств, вызывающих layout/paint, если нет сильной причины. Для FINDAR не анимировать `height`, `top`, `left`, `width` в скролл-сценариях без проверки. Header shrink должен строиться через transform/opacity/clip/scale или заранее зарезервированные размеры.

5. Reduced motion обязателен.
   W3C и web.dev фиксируют, что ненужное движение может вызывать дискомфорт. Все scroll reveal, parallax, floating effects, smooth scroll и header motion должны иметь вариант через `@media (prefers-reduced-motion: reduce)`.

6. Контраст важен не только для текста.
   WCAG 1.4.11 требует, чтобы важные UI-компоненты и meaningful graphics имели минимум 3:1 к соседним цветам. Это особенно важно для neumorphism, потому что он часто проваливается по контрасту.

7. Физичный интерфейс работает через perceived affordance.
   Don Norman подчеркивает: в графическом интерфейсе важно, воспринимает ли пользователь действие как возможное. Поэтому FINDAR может использовать физичные материалы, тени, панели, приборные акценты, но controls должны оставаться очевидными как controls.

## FINDAR-specific implications

- Сайт не должен выглядеть как лендинг с декоративными карточками. Он должен выглядеть как интерфейс центра оценки квалификации: точный, уверенный, материальный, инженерный.
- Основной визуальный язык: dark industrial, steel surfaces, precise yellow safety accent, controlled blue technical accent, реальное фото/материал сварки, модульная сетка.
- Hero должен быть главным визуальным заявлением. Header не должен ломать композицию или перетягивать внимание.
- CTA должен быть заметным, но не кричащим. Желтый цвет работает как safety/action, но его нельзя использовать везде.
- Motion должен быть заметен только в ключевых местах: header state, CTA feedback, section reveal, code copy confirmation, maybe subtle background parallax.

## Запрещенные паттерны для FINDAR

- Декоративное мигание, пульсирующие элементы без причины.
- Parallax, который двигает большие слои в разные стороны без `prefers-reduced-motion`.
- "Стеклянные" cards-on-cards и много одинаковых теней.
- Однотонная синяя/серая/желтая палитра без контраста материалов.
- Header, который при скролле меняет layout непредсказуемо или перекрывает hero.
- Neumorphism на кнопках и формах без контрастной границы.
- Слишком округлые SaaS-карточки, если они не поддержаны индустриальным стилем.
