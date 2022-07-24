const modalTitle = document.querySelector('.footer-modal__title');

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
    modalTitle.textContent = 'Наша команда'

    mKuzich.textContent = 'Михайло Кузіч';
    mKuzichInfo.textContent = 'Реєстрація/автентифікація, моди входу та реєстрації, меню користувача, розділ бібліотеки, вибірка жанрів API';
    mKuzichRole.textContent = 'Лідер команди';

    iZhuk.textContent = 'Ірина Жук';
    iZhukRole.textContent = 'SCRUM  майстер';
    iZhukInfo.textContent = 'Адаптивна верстка хедера для головної/моя бібліотека сторінок. Запит для пошуку фільмів на головній сторінці';

    oHlushenkova.textContent = 'Олеся Глушенкова';
    oHlushenkovaInfo.textContent = 'Макет шаблону картки з фільмом. Стилі для тексту футера картки (назва, жанри та рік випуску)';
    oHlushenkovaRole.textContent = 'Розробник';

    vDianov.textContent = 'Віталій Діанов';
    vDianovInfo.textContent = 'Модальне вікно для картки фільму. Реалізація БД через локальне сховище. Логіка додавання в БД. Темна тема';
    vDianovRole.textContent = 'Розробник';

    nKukharenko.textContent = 'Неджат Кухаренко';
    nKukharenkoInfo.textContent = 'Пагінація сторінок "ДОМАШНЯ" та "МОЯ БІБЛІОТЕКА". Рендер частини фільмів на сторінках';
    nKukharenkoRole.textContent = 'Розробник';

    vHorin.textContent = 'Володимир Горін';
    vHorinInfo.textContent = 'Розмітка популярних фільмів із селектором часового вікна. "Кнопка прокрутити до верху"';
    vHorinRole.textContent = 'Розробник';

    mChecheneva.textContent = 'Марина Чеченєва';
    mChechenevaInfo.textContent = 'Прелоадер проекту, лоадери: реєстрації та входу в модальні вікна, під час пошуку';
    mChechenevaRole.textContent = 'Розробник';

    oZnak.textContent = 'Орест Знак';
    oZnakInfo.textContent = 'Реалізована двомовна версія EN/UK. Переклад маркування та повідомлення про помилку';
    oZnakRole.textContent = 'Розробник';

    yZakrevskaya.textContent = 'Іванна Гуменюк';
    yZakrevskayaInfo.textContent = ' Адаптивна верстка футера. Модалка з інформацією про нашу команду. Анімація і деякі ефекти';
    yZakrevskayaRole.textContent = 'Розробник';

};

export function footerModalEn () {
    modalTitle.textContent = 'Our Team';

    mKuzich.textContent = 'Mykhailo Kuzich';
    mKuzichInfo.textContent = 'Registration/authentication, login and signup modals, user menu, library section, api genres fetching';
    mKuzichRole.textContent = 'Team Lead';

    iZhuk.textContent = 'Iryna Zhuk';
    iZhukRole.textContent = 'Scrum - Maste';
    iZhukInfo.textContent = 'Adaptive header layout for main and my library pages. Realized the query for a film search on the home page';

    oHlushenkova.textContent = 'Olesia Hlushenkova';
    oHlushenkovaInfo.textContent = 'One movie card template layout. Designed styles for the card footer text (movie titles, genres, and year of release)';
    oHlushenkovaRole.textContent = 'Developer';

    vDianov.textContent = 'Vitaliy Dianov';
    vDianovInfo.textContent = 'Modal window for a movie card.DB implementation through localStorage.The logic of adding to the DB.Dark theme';
    vDianovRole.textContent = 'Developer';

    nKukharenko.textContent = 'Nedzhat Kukharenko';
    nKukharenkoInfo.textContent = 'Home page and library page pagination. Drawing the appropriate part of the movies to each page';
    nKukharenkoRole.textContent = 'Developer';

    vHorin.textContent = 'Volodymyr Horin';
    vHorinInfo.textContent = 'Trending movies markup, with time window selector and bilingual support. "Scroll to top button"';
    vHorinRole.textContent = 'Developer';

    mChecheneva.textContent = 'Maryna Checheneva';
    mChechenevaInfo.textContent = ' Preloader for the project, loaders for registration and login modal windows, loader while searching movies';
    mChechenevaRole.textContent = 'Developer';

    oZnak.textContent = 'Orest Znak';
    oZnakInfo.textContent = 'Switch for languages EN and UK. Translation of the error message under the input on page. Translation of markings';
    oZnakRole.textContent = 'Developer';

    yZakrevskaya.textContent = 'Yana Zakrevskaya';
    yZakrevskayaInfo.textContent = 'Adaptive footer layout. Footer modal layout with information about our team. Animation and some effects';
    yZakrevskayaRole.textContent = 'Developer';

};
