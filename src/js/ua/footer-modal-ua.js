const mKuzich = document.querySelector('#mKuzich');
const mKuzichInfo = document.querySelector('#mKuzichInfo');
const mKuzichRole = document.querySelector('#mKuzichRole');

const iZhuk = document.querySelector('#iZhuk');
const iZhukInfo = document.querySelector('#iZhukInfo');
const iZhukRole = document.querySelector('#iZhukRole');

const oHlushenkova = document.querySelector('#oHlushenkova');
const oHlushenkovaInfo = document.querySelector('#oHlushenkovaInfo');
const oHlushenkovaRole = document.querySelector('#oHlushenkovaRole');

const  vDianov = document.querySelector('#vDianov');
const  vDianovInfo = document.querySelector('#vDianovInfo');
const vDianovRole = document.querySelector('#vDianovRole');

const nKukharenko = document.querySelector('#nKukharenko')
const nKukharenkoInfo = document.querySelector('#nKukharenkoInfo')
const nKukharenkoRole = document.querySelector('#nKukharenkoRole')

const vHorin = document.querySelector('#vHorin');
const vHorinInfo = document.querySelector('#vHorinInfo');
const vHorinRole = document.querySelector('#vHorinRole');

const mChecheneva = document.querySelector('#mChecheneva');
const mChechenevaInfo = document.querySelector('#mChechenevaInfo');
const mChechenevaRole = document.querySelector('#mChechenevaRole');

const oZnak = document.querySelector('#oZnak');
const oZnakInfo = document.querySelector('#oZnakInfo');
const oZnakRole = document.querySelector('#oZnakRole');

const yZakrevskaya = document.querySelector('#yZakrevskaya');
const yZakrevskayaInfo = document.querySelector('#yZakrevskayaInfo');
const yZakrevskayaRole = document.querySelector('#yZakrevskayaRole');

export function footerModalUa () {
    mKuzich.textContent = 'Михайло Кузіч';
    mKuzichInfo.textContent = 'Реєстрація/автентифікація, моди входу та реєстрації, меню користувача, розділ бібліотеки, вибірка жанрів API';
    mKuzichRole.textContent = 'Керівник групи';

    iZhuk.textContent = 'Ірина Жук';
    iZhukRole.textContent = 'SCRUM  майстер';
    iZhukInfo.textContent = 'Адаптивна верстка хедера для головної/моя бібліотека сторінок. Запит для пошуку фільмів на головній сторінці';

    oHlushenkova.textContent = 'Олеся Глушенкова';
    oHlushenkovaInfo.textContent = 'Макет шаблону однієї картки з фільмом. Стилі для тексту футера картки (назви фільмів, жанри та рік випуску)';
    oHlushenkovaRole.textContent = 'Розробник';

    vDianov.textContent = 'Віталій Діанов';
    vDianovInfo.textContent = 'Модальне вікно для картки фільму. Реалізація БД через локальне сховище. Логіка додавання в БД';
    vDianovRole.textContent = 'Розробник';

    nKukharenko.textContent = 'Неджат Кухаренко';
    nKukharenkoInfo.textContent = 'Пагінація домашньої сторінки та сторінки бібліотеки. Відмальовка відповідної частини фільмів на кожну сторінку';
    nKukharenkoRole.textContent = 'Розробник';

    vHorin.textContent = 'Володимир Горін';
    vHorinInfo.textContent = 'Розмітка популярних фільмів із селектором часового вікна та двомовною підтримкою. "Кнопка прокрутити до верху"';
    vHorinRole.textContent = 'Розробник';

    mChecheneva.textContent = 'Марина Чеченєва';
    mChechenevaInfo.textContent = 'Попередній завантажувач для проекту, завантажувачі для реєстрації та входу в модальні вікна і під час пошуку';
    mChechenevaRole.textContent = 'Розробник';

    oZnak.textContent = 'Орест Знак';
    oZnakInfo.textContent = 'Реалізована двомовна версія EN/UK. Переклад повідомлення про помилку під введенням на сторінці. Переклад маркування';
    oZnakRole.textContent = 'Розробник';

    yZakrevskaya.textContent = 'Іванна Гуменюк';
    yZakrevskayaInfo.textContent = ' Адаптивна верстка футера. Модалка з інформацією про нашу команду. Анімація і деякі ефекти';
    yZakrevskayaRole.textContent = 'Розробник';

};

export function footerModalEn () {
    mKuzich.textContent = 'Mykhailo Kuzich';
    mKuzichInfo.textContent = 'Реєстрація/автентифікація, моди входу та реєстрації, меню користувача, розділ бібліотеки, вибірка жанрів API';
    mKuzichRole.textContent = 'Team Lead';

    iZhuk.textContent = 'Iryna Zhuk';
    iZhukRole.textContent = 'Scrum - Maste';
    iZhukInfo.textContent = 'Адаптивна верстка хедера для головної/моя бібліотека сторінок. Запит для пошуку фільмів на головній сторінці';

    oHlushenkova.textContent = 'Olesia Hlushenkova';
    oHlushenkovaInfo.textContent = 'Макет шаблону однієї картки з фільмом. Стилі для тексту футера картки (назви фільмів, жанри та рік випуску)';
    oHlushenkovaRole.textContent = 'Developer';

    vDianov.textContent = 'Vitaliy Dianov';
    vDianovInfo.textContent = 'Модальне вікно для картки фільму. Реалізація БД через локальне сховище. Логіка додавання в БД';
    vDianovRole.textContent = 'Developer';

    nKukharenko.textContent = 'Nedzhat Kukharenko';
    nKukharenkoInfo.textContent = 'Пагінація домашньої сторінки та сторінки бібліотеки. Відмальовка відповідної частини фільмів на кожну сторінку';
    nKukharenkoRole.textContent = 'Developer';

    vHorin.textContent = 'Volodymyr Horin';
    vHorinInfo.textContent = 'Розмітка популярних фільмів із селектором часового вікна та двомовною підтримкою. "Кнопка прокрутити до верху"';
    vHorinRole.textContent = 'Developer';

    mChecheneva.textContent = 'Maryna Checheneva';
    mChechenevaInfo.textContent = 'Попередній завантажувач для проекту, завантажувачі для реєстрації та входу в модальні вікна і під час пошуку';
    mChechenevaRole.textContent = 'Developer';

    oZnak.textContent = 'Orest Znak';
    oZnakInfo.textContent = 'Реалізована двомовна версія EN/UK. Переклад повідомлення про помилку під введенням на сторінці. Переклад маркування';
    oZnakRole.textContent = 'Developer';

    yZakrevskaya.textContent = 'Yana Zakrevskaya';
    yZakrevskayaInfo.textContent = ' Адаптивна верстка футера. Модалка з інформацією про нашу команду. Анімація і деякі ефекти';
    yZakrevskayaRole.textContent = 'Developer';

};

// export {footerModalEn, footerModalEn};
