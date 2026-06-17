// ========================================
// НАСТРОЙКА ДЛЯ GOOGLE SHEETS
// ========================================
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxTaRJ4ZyRcViohXdaSvunQWGPkVrlttmRFzz4CIsF28rfjc5RGG0mTkTfQaT5r53jM/exec';

// ========================================
// ДАННЫЕ КНИГ (категории)
// ========================================
const library = {
    aqeedah: {
        id: 'aqeedah',
        title: '📖 Вероубеждение',
        icon: '📖',
        desc: 'Книги по основам веры, таухиду и предопределению',
        books: [
            {
                name: 'Основы веры',
                author: 'Проф. Салих ас-Сухейми, Проф. Абд ар-Раззак аль-Бадр, Проф. Ибрахим ар-Рухейли',
                desc: 'Издательство ummah. Под редакцией Факихи А.Н., А. аль-Гамиди. Перевод Кулиева Э.Р.',
                file: 'books/aqeedah/Основы веры.pdf'
            },
            {
                name: 'Слово единобожия',
                author: "'Абд ар-Раззак ибн 'Абд аль-Мухсин аль-Бадр",
                desc: 'Издательство ummah. Книга о таухиде и искренности в поклонении Аллаху',
                file: 'books/aqeedah/Слово единобожия.pdf'
            },
            {
                name: 'Единобожие',
                author: 'Издательство ummah',
                desc: 'Издательство ummah. Книга о единобожии и его основах',
                file: 'books/aqeedah/Единобожие.pdf'
            },
            {
                name: 'Судьба и предопределение',
                author: 'Умар бин Сулайман аль-Ашкар',
                desc: 'Издательство ummah. Книга о вере в предопределение Аллаха',
                file: 'books/aqeedah/Судьба и предопределение.pdf'
            }
        ]
    },
    sira: {
        id: 'sira',
        title: '📖 Сира',
        icon: '📖',
        desc: 'Книги о жизни Пророка Мухаммада (ﷺ)',
        books: [
            {
                name: 'Жизнеописание Пророка Мухаммада',
                author: 'Издательство ummah',
                desc: 'Издательство ummah. Достоверная биография Пророка (ﷺ) от рождения до смерти',
                file: 'books/sira/Жизнеописание Пророка Мухаммада.pdf'
            }
        ]
    },
    adab: {
        id: 'adab',
        title: '📖 Адабы и воспитание',
        icon: '📖',
        desc: 'Книги о воспитании души, адабах и наставлениях',
        books: [
            {
                name: 'Недуги сердца',
                author: 'Мухаммад Салих аль-Мунаджид',
                desc: 'Издательство ummah. О болезнях сердца и путях их исцеления',
                file: 'books/adab/Недуги сердца.pdf'
            },
            {
                name: 'Некоторые проблемы современной молодежи и их способы решения',
                author: 'Мухаммад ибн Салих аль-Усаймин',
                desc: 'Издательство ummah. Наставления для молодёжи',
                file: 'books/adab/Некоторые проблемы современной молодежи.pdf'
            }
        ]
    }
};

// ========================================
// ДАННЫЕ АУДИО (ЧТЕЦЫ)
// ========================================
const audioData = {
    reciters: [
        {
            name: 'Абу Бакр аш-Шатри',
            desc: 'Известный чтец Корана из Саудовской Аравии',
            icon: '🎙️',
            telegram: 'https://t.me/audiooo_quran',
            count: '114 аудио'
        },
        {
            name: 'Мишари ибн Рашид аль-Афаси',
            desc: 'Всемирно известный чтец Корана',
            icon: '🎙️',
            telegram: 'https://t.me/audiooo_quran',
            count: '114 аудио'
        },
        {
            name: 'Мухаммад аль-Люхайдан',
            desc: 'Известный чтец Корана, имам мечети',
            icon: '🎙️',
            telegram: 'https://t.me/audiooo_quran',
            count: '114 аудио'
        }
    ]
};

// ========================================
// ДАННЫЕ АЗКАРОВ
// ========================================
const adhkarData = {
    morning: {
        title: '🌅 Утренние азкары',
        items: [
            {
                arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ',
                transliteration: 'Асбахьна ва асбахьаль мульку лиЛлях1и Роббиль 1алямин.',
                translation: 'Мы дожили до утра, и этим утром вся власть принадлежит Аллаху, Господу миров.'
            },
            {
                arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ',
                transliteration: 'Аллах1умма инни ас\'алюка хайро х1аз\'аль йавми фатхьах1у, ва насрох1у, ва нуурох1у, ва баракатах1у, ва х1удах1у.',
                translation: 'О Аллах, поистине, я прошу Тебя о благе этого дня, о помощи и победе, о свете, благодати и прямом руководстве в этот день.'
            },
            {
                arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ',
                transliteration: 'Аллах1умма бика асбахьна ва бика амсайна ва бика нахьйа ва бика намууту ва иляйка ннушуур.',
                translation: 'О Аллах, благодаря Тебе мы дожили до утра и благодаря Тебе мы доживем до вечера, благодаря Тебе мы живем, и Ты лишаешь нас жизни, и к Тебе возвращение.'
            }
        ]
    },
    evening: {
        title: '🌙 Вечерние азкары',
        items: [
            {
                arabic: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ',
                transliteration: 'Амсайна ва амсаль мульку лиЛлях1и Роббиль 1алямин.',
                translation: 'Мы дожили до вечера, и этим вечером вся власть принадлежит Аллаху, Господу миров.'
            },
            {
                arabic: 'اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ',
                transliteration: 'Аллах1умма бика амсайна ва бика асбахьна ва бика нахьйа ва бика намууту ва иляйкаль масыр.',
                translation: 'О Аллах, благодаря Тебе мы дожили до вечера и благодаря Тебе мы дожили до утра, благодаря Тебе мы живем, и Ты лишаешь нас жизни, и к Тебе возвращение.'
            }
        ]
    },
    dua: {
        title: '🤲 Дуа',
        items: [
            {
                arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
                transliteration: 'Раббана атина фиддунья хьасанatan ва филь ахирати хьасанatan ва къина 1азабан нар.',
                translation: 'Господь наш! Даруй нам в мире этом добро и в мире ином добро и защити нас от мучений в огне.'
            },
            {
                arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ',
                transliteration: 'Аллах1умма инни ас\'алюкаль 1афва валь 1афийата.',
                translation: 'О Аллах, поистине, я прошу Тебя о прощении и благополучии.'
            }
        ]
    }
};

// ========================================
// ДАННЫЕ ВИДЕО (ИСТОРИИ ПРОРОКОВ)
// ========================================
const prophetsVideos = [
    {
        id: 1,
        title: 'История Пророков #1: Как Аллах создал Всё - От Трона до сотворения Адама',
        desc: 'Шейх Набиль аль-Авады рассказывает о сотворении мира, Трона Аллаха и создании Адама (мир ему)',
        embed: 'https://www.youtube.com/embed/cy00RraxA10',
        duration: '45:20',
        youtube: 'https://www.youtube.com/watch?v=cy00RraxA10'
    },
    {
        id: 2,
        title: 'История Пророков #2: Создание Адама и восстание Иблиса',
        desc: 'Шейх Набиль аль-Авады о создании Адама, повелении поклониться ему и гордыне Иблиса',
        embed: 'https://www.youtube.com/embed/qigig56Rvnw',
        duration: '38:15',
        youtube: 'https://www.youtube.com/watch?v=qigig56Rvnw'
    },
    {
        id: 3,
        title: 'История Пророков #3: Адам и Ева (Хавва) - Первое Ослушание и Изгнание из Рая',
        desc: 'Шейх Набиль аль-Авады о создании Хаввы, искушении и изгнании из Рая',
        embed: 'https://www.youtube.com/embed/iERo1VRhG-k',
        duration: '42:10',
        youtube: 'https://www.youtube.com/watch?v=iERo1VRhG-k'
    },
    {
        id: 4,
        title: 'История Пророков #4: Каин и Авель - Первое убийство в истории',
        desc: 'Шейх Набиль аль-Авады о сыновьях Адама, ревности и первом убийстве на земле',
        embed: 'https://www.youtube.com/embed/lFkMy3X6Ysg',
        duration: '36:45',
        youtube: 'https://www.youtube.com/watch?v=lFkMy3X6Ysg'
    },
    {
        id: 5,
        title: 'История Пророков #5: Как Ной 950 Лет Спасал Человечество',
        desc: 'Шейх Набиль аль-Авады о пророке Нухе (мир ему), его долгой проповеди и терпении',
        embed: 'https://www.youtube.com/embed/bhvv-iF_Q14',
        duration: '48:30',
        youtube: 'https://www.youtube.com/watch?v=bhvv-iF_Q14'
    },
    {
        id: 6,
        title: 'История Пророков #6: Ноев Ковчег и Всемирный Потоп',
        desc: 'Шейх Набиль аль-Авады о строительстве ковчега, потопе и спасении верующих',
        embed: 'https://www.youtube.com/embed/AW-1t59h8OM',
        duration: '52:20',
        youtube: 'https://www.youtube.com/watch?v=AW-1t59h8OM'
    }
];

// ========================================
// ДАННЫЕ КНИГ (ИСТОРИИ ПРОРОКОВ)
// ========================================
const prophetsBooks = [
    {
        id: 1,
        title: 'Рассказы о пророках',
        author: 'Имам Ибн Касир',
        desc: 'Полное собрание историй всех пророков от Адама до Мухаммада (ﷺ) по достоверным источникам',
        file: 'books/prophets/Рассказы о пророках - имам Ибн Касир.pdf'
    }
];

// ========================================
// DOM-ЭЛЕМЕНТЫ
// ========================================
const mainMenu = document.getElementById('mainMenu');
const catalogSection = document.getElementById('catalogSection');
const audioSection = document.getElementById('audioSection');
const catalogContent = document.getElementById('catalogContent');
const audioContent = document.getElementById('audioContent');

// ========================================
// ТЕМНАЯ ТЕМА
// ========================================
function toggleTheme() {
    const html = document.documentElement;
    const btn = document.getElementById('themeBtn');
    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        btn.textContent = '🌙';
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        btn.textContent = '☀️';
    }
}

function loadTheme() {
    const theme = localStorage.getItem('theme');
    const btn = document.getElementById('themeBtn');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        btn.textContent = '☀️';
    } else {
        document.documentElement.removeAttribute('data-theme');
        btn.textContent = '🌙';
    }
}

// ========================================
// ИЗБРАННОЕ
// ========================================
function getFavorites() {
    try {
        return JSON.parse(localStorage.getItem('favorites') || '[]');
    } catch { return []; }
}

function saveFavorites(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function toggleFavorite(bookKey) {
    let favorites = getFavorites();
    const index = favorites.indexOf(bookKey);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast('❤️ Удалено из избранного');
    } else {
        favorites.push(bookKey);
        showToast('❤️ Добавлено в избранное');
    }
    saveFavorites(favorites);
    // Обновляем отображение
    const currentSection = document.querySelector('#catalogContent, #favoritesContent, #prophetsContent');
    if (currentSection) {
        // Перерисовываем
        const visibleSection = document.querySelector('#catalogSection:not([style*="display: none"])');
        if (visibleSection) {
            // Если мы в каталоге, перерисовываем книги
            const categoryKey = visibleSection.dataset.category;
            if (categoryKey) {
                renderCategoryBooks(categoryKey);
            } else {
                renderCatalogCategories();
            }
        }
    }
}

function isFavorite(bookKey) {
    return getFavorites().includes(bookKey);
}

// ========================================
// ОТЗЫВЫ И ОЦЕНКИ
// ========================================
let currentReviewBook = null;

function openReviewModal(bookKey, bookName) {
    currentReviewBook = bookKey;
    document.getElementById('reviewBookName').textContent = 'Книга: ' + bookName;
    document.getElementById('reviewText').value = '';
    // Сброс звёзд
    document.querySelectorAll('#reviewModal .stars-display').forEach(el => el.textContent = '☆☆☆☆☆');
    document.getElementById('reviewModal').style.display = 'flex';
}

function closeReviewModal() {
    document.getElementById('reviewModal').style.display = 'none';
}

function setReviewStar(star) {
    const stars = document.querySelectorAll('#reviewModal .stars-display span');
    stars.forEach((s, i) => {
        s.textContent = i < star ? '★' : '☆';
    });
    window._reviewStar = star;
}

function submitReview() {
    if (!currentReviewBook) return;
    const stars = window._reviewStar || 0;
    const text = document.getElementById('reviewText').value.trim();
    if (stars === 0) {
        showToast('⚠️ Поставьте оценку (звёзды)');
        return;
    }
    if (!text) {
        showToast('⚠️ Напишите текст отзыва');
        return;
    }
    
    const reviews = JSON.parse(localStorage.getItem('reviews') || '{}');
    if (!reviews[currentReviewBook]) {
        reviews[currentReviewBook] = [];
    }
    reviews[currentReviewBook].push({
        stars: stars,
        text: text,
        date: new Date().toLocaleString('ru-RU')
    });
    localStorage.setItem('reviews', JSON.stringify(reviews));
    
    closeReviewModal();
    showToast('✅ Спасибо за ваш отзыв!');
}

function getBookReviews(bookKey) {
    const reviews = JSON.parse(localStorage.getItem('reviews') || '{}');
    return reviews[bookKey] || [];
}

function renderStars(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

// ========================================
// НАВИГАЦИЯ
// ========================================
function showMainMenu() {
    mainMenu.style.display = 'block';
    catalogSection.style.display = 'none';
    audioSection.style.display = 'none';
    document.getElementById('prophetsSection').style.display = 'none';
    document.getElementById('adhkarSection').style.display = 'none';
    document.getElementById('favoritesSection').style.display = 'none';
    document.getElementById('pdfViewer').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCatalog() {
    mainMenu.style.display = 'none';
    catalogSection.style.display = 'block';
    audioSection.style.display = 'none';
    document.getElementById('prophetsSection').style.display = 'none';
    document.getElementById('adhkarSection').style.display = 'none';
    document.getElementById('favoritesSection').style.display = 'none';
    document.getElementById('pdfViewer').style.display = 'none';
    renderCatalogCategories();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showAudio() {
    mainMenu.style.display = 'none';
    catalogSection.style.display = 'none';
    audioSection.style.display = 'block';
    document.getElementById('prophetsSection').style.display = 'none';
    document.getElementById('adhkarSection').style.display = 'none';
    document.getElementById('favoritesSection').style.display = 'none';
    document.getElementById('pdfViewer').style.display = 'none';
    renderRecitersList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showProphets() {
    mainMenu.style.display = 'none';
    catalogSection.style.display = 'none';
    audioSection.style.display = 'none';
    document.getElementById('prophetsSection').style.display = 'block';
    document.getElementById('adhkarSection').style.display = 'none';
    document.getElementById('favoritesSection').style.display = 'none';
    document.getElementById('pdfViewer').style.display = 'none';
    renderProphets('videos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showAdhkar() {
    mainMenu.style.display = 'none';
    catalogSection.style.display = 'none';
    audioSection.style.display = 'none';
    document.getElementById('prophetsSection').style.display = 'none';
    document.getElementById('adhkarSection').style.display = 'block';
    document.getElementById('favoritesSection').style.display = 'none';
    document.getElementById('pdfViewer').style.display = 'none';
    renderAdhkar('morning');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showFavorites() {
    mainMenu.style.display = 'none';
    catalogSection.style.display = 'none';
    audioSection.style.display = 'none';
    document.getElementById('prophetsSection').style.display = 'none';
    document.getElementById('adhkarSection').style.display = 'none';
    document.getElementById('favoritesSection').style.display = 'block';
    document.getElementById('pdfViewer').style.display = 'none';
    renderFavorites();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// КАТАЛОГ КНИГ
// ========================================
function renderCatalogCategories() {
    let html = '<div class="catalog-categories-grid">';
    for (const [key, category] of Object.entries(library)) {
        const bookCount = category.books ? category.books.length : 0;
        html += `
            <div class="category-card" onclick="renderCategoryBooks('${key}')">
                <div class="category-icon">${category.icon || '📖'}</div>
                <div class="category-title">${category.title}</div>
                <div class="category-desc">${category.desc || ''}</div>
                <div class="category-count">📚 ${bookCount} книг</div>
            </div>
        `;
    }
    html += '</div>';
    catalogContent.innerHTML = html;
}

function renderCategoryBooks(categoryKey) {
    const category = library[categoryKey];
    if (!category) return;

    let html = `
        <div class="category-books-header">
            <button class="back-btn" onclick="renderCatalogCategories()">← Назад к категориям</button>
            <h3 class="category-books-title">${category.title}</h3>
            <p class="category-books-desc">${category.desc || ''}</p>
        </div>
        <div class="books-list">
    `;

    if (category.books.length === 0) {
        html += `
            <div class="empty-message">
                <span class="empty-icon">📭</span>
                В этой категории пока нет книг.<br>
                <span style="font-size: 13px; color: var(--text-muted);">Книги будут добавлены позже, иншаАллах.</span>
            </div>
        `;
    } else {
        category.books.forEach((book) => {
            const bookKey = categoryKey + '|' + book.name;
            const isFav = isFavorite(bookKey);
            const reviews = getBookReviews(bookKey);
            const avgRating = reviews.length > 0 ? Math.round(reviews.reduce((s, r) => s + r.stars, 0) / reviews.length) : 0;
            
            html += `
                <div class="book-card">
                    <div class="book-info">
                        <div class="book-name">${book.name}</div>
                        <div class="book-author">${book.author}</div>
                        <div style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">${book.desc || ''}</div>
                        <div style="display: flex; align-items: center; gap: 8px; margin-top: 4px; flex-wrap: wrap;">
                            ${avgRating > 0 ? `<span class="stars-display">${renderStars(avgRating)} (${reviews.length})</span>` : ''}
                            <button class="review-btn" onclick="event.stopPropagation(); openReviewModal('${bookKey}', '${book.name}')">📝 Оставить отзыв</button>
                        </div>
                    </div>
                    <div class="book-actions">
                        <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('${bookKey}')">
                            ${isFav ? '❤️' : '🤍'}
                        </button>
                        <button class="download-btn" onclick="event.stopPropagation(); downloadBook('${book.file}', '${book.name}')">📥 Скачать</button>
                    </div>
                </div>
            `;
        });
    }

    html += '</div>';
    catalogContent.innerHTML = html;
}

// ========================================
// АУДИО
// ========================================
function renderRecitersList() {
    if (audioData.reciters.length === 0) {
        audioContent.innerHTML = `
            <div class="empty-message">
                <span class="empty-icon">🎙️</span>
                Аудио раздел пока пуст.<br>
                <span style="font-size: 13px; color: var(--text-muted);">Чтецы будут добавлены позже, иншаАллах.</span>
            </div>
        `;
        return;
    }

    let html = '';
    audioData.reciters.forEach((reciter) => {
        html += `
            <div class="reciter-card-link" onclick="openTelegram('${reciter.telegram}')">
                <div class="reciter-name">
                    <span>${reciter.icon || '🎙️'}</span>
                    ${reciter.name}
                </div>
                <div class="reciter-desc">${reciter.desc || ''}</div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px;">
                    <span class="reciter-count">📂 ${reciter.count || 'аудио'}</span>
                    <span class="telegram-link-btn">📲 Перейти в Telegram →</span>
                </div>
            </div>
        `;
    });

    audioContent.innerHTML = html;
}

function openTelegram(url) {
    if (url && url !== 'https://t.me/ваша_ссылка_на_...') {
        window.open(url, '_blank');
    } else {
        showToast('📲 Ссылка на Telegram-канал будет добавлена позже, иншаАллах!');
    }
}

// ========================================
// ИСТОРИИ ПРОРОКОВ
// ========================================
function renderProphets(tab) {
    const container = document.getElementById('prophetsContent');
    if (!container) return;

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.tab-btn[onclick*="${tab}"]`)?.classList.add('active');

    let html = '';

    if (tab === 'videos') {
        if (prophetsVideos.length === 0) {
            html = `
                <div class="empty-message">
                    <span class="empty-icon">📹</span>
                    Видео пока нет.<br>
                    <span style="font-size: 13px; color: var(--text-muted);">Видео будут добавлены позже, иншаАллах.</span>
                </div>
            `;
        } else {
            html = '<div class="prophets-grid">';
            prophetsVideos.forEach((video) => {
                html += `
                    <div class="prophet-card">
                        <div class="prophet-video">
                            <iframe src="${video.embed}" title="${video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <a href="${video.youtube}" target="_blank" class="youtube-link-btn">▶ Смотреть на YouTube</a>
                        </div>
                        <div class="prophet-info">
                            <h3 class="prophet-title">${video.title}</h3>
                            <p class="prophet-desc">${video.desc}</p>
                            <span class="prophet-duration">⏱ ${video.duration}</span>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
        }
    } else if (tab === 'books') {
        if (prophetsBooks.length === 0) {
            html = `
                <div class="empty-message">
                    <span class="empty-icon">📖</span>
                    Книги пока нет.<br>
                    <span style="font-size: 13px; color: var(--text-muted);">Книги будут добавлены позже, иншаАллах.</span>
                </div>
            `;
        } else {
            html = '<div class="books-list">';
            prophetsBooks.forEach((book) => {
                const bookKey = 'prophets|' + book.title;
                const isFav = isFavorite(bookKey);
                html += `
                    <div class="book-card" style="cursor: pointer;" onclick="openPdfViewer('${book.file}')">
                        <div class="book-info">
                            <div class="book-name">${book.title}</div>
                            <div class="book-author">${book.author}</div>
                            <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">${book.desc}</div>
                            <div style="font-size: 12px; color: var(--gold); margin-top: 4px;">📖 Нажмите, чтобы читать онлайн</div>
                        </div>
                        <div class="book-actions">
                            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('${bookKey}')">
                                ${isFav ? '❤️' : '🤍'}
                            </button>
                            <button class="download-btn" onclick="event.stopPropagation(); downloadBook('${book.file}', '${book.title}')">📥 Скачать</button>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
        }
    }

    container.innerHTML = html;
}

function switchProphetTab(tab, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProphets(tab);
}

// ========================================
// АЗКАРЫ
// ========================================
function renderAdhkar(tab) {
    const container = document.getElementById('adhkarContent');
    if (!container) return;

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.tab-btn[onclick*="${tab}"]`)?.classList.add('active');

    const data = adhkarData[tab];
    if (!data) return;

    let html = `
        <h3 style="font-size: 18px; color: var(--green); margin-bottom: 12px;">${data.title}</h3>
        <div class="adhkar-list">
    `;

    data.items.forEach((item) => {
        html += `
            <div class="adhkar-card">
                <div class="adhkar-arabic">${item.arabic}</div>
                <div class="adhkar-transliteration">${item.transliteration}</div>
                <div class="adhkar-translation">📖 ${item.translation}</div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

function switchAdhkarTab(tab, btn) {
    renderAdhkar(tab);
}

// ========================================
// ИЗБРАННОЕ
// ========================================
function renderFavorites() {
    const container = document.getElementById('favoritesContent');
    const favorites = getFavorites();
    
    if (favorites.length === 0) {
        container.innerHTML = `
            <div class="favorites-empty">
                <span class="empty-icon">❤️</span>
                <p>У вас пока нет избранных книг</p>
                <p style="font-size: 14px; color: var(--text-muted); margin-top: 4px;">Нажмите ❤️ на книге, чтобы добавить её в избранное</p>
            </div>
        `;
        return;
    }

    let html = '<div class="books-list">';
    
    // Собираем все книги из всех категорий
    const allBooks = {};
    for (const [catKey, catData] of Object.entries(library)) {
        catData.books.forEach(book => {
            const key = catKey + '|' + book.name;
            if (favorites.includes(key)) {
                allBooks[key] = { ...book, category: catKey };
            }
        });
    }
    
    // Также проверяем книги из пророков
    prophetsBooks.forEach(book => {
        const key = 'prophets|' + book.title;
        if (favorites.includes(key)) {
            allBooks[key] = { ...book, category: 'prophets' };
        }
    });

    if (Object.keys(allBooks).length === 0) {
        container.innerHTML = `
            <div class="favorites-empty">
                <span class="empty-icon">📭</span>
                <p>Избранные книги не найдены</p>
            </div>
        `;
        return;
    }

    for (const [key, book] of Object.entries(allBooks)) {
        html += `
            <div class="book-card" style="cursor: pointer;" onclick="openPdfViewer('${book.file}')">
                <div class="book-info">
                    <div class="book-name">${book.name}</div>
                    <div class="book-author">${book.author}</div>
                    <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${book.desc || ''}</div>
                </div>
                <div class="book-actions">
                    <button class="fav-btn active" onclick="event.stopPropagation(); toggleFavorite('${key}')">❤️</button>
                    <button class="download-btn" onclick="event.stopPropagation(); downloadBook('${book.file}', '${book.name}')">📥 Скачать</button>
                </div>
            </div>
        `;
    }

    html += '</div>';
    container.innerHTML = html;
}

// ========================================
// ПРОСМОТР PDF
// ========================================
let currentPdfUrl = '';

function openPdfViewer(pdfUrl) {
    currentPdfUrl = pdfUrl;
    document.getElementById('catalogContent').style.display = 'none';
    document.getElementById('prophetsContent').style.display = 'none';
    document.getElementById('pdfViewer').style.display = 'block';
    
    const container = document.getElementById('pdfContainer');
    container.innerHTML = `<iframe src="${pdfUrl}" width="100%" height="100%" style="border: none;"></iframe>`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closePdfViewer() {
    document.getElementById('pdfViewer').style.display = 'none';
    document.getElementById('catalogContent').style.display = 'block';
    document.getElementById('prophetsContent').style.display = 'block';
    document.getElementById('pdfContainer').innerHTML = '';
}

function downloadCurrentPdf() {
    if (currentPdfUrl) {
        const a = document.createElement('a');
        a.href = currentPdfUrl;
        a.download = currentPdfUrl.split('/').pop();
        a.click();
        showToast('📥 Скачивание началось');
    }
}

// ========================================
// ДЕЙСТВИЯ
// ========================================
function downloadBook(file, name) {
    if (!file || file === 'путь/к/файлу.pdf') {
        showToast(`📚 Книга "${name}" будет добавлена позже, иншаАллах!`);
    } else {
        const a = document.createElement('a');
        a.href = file;
        a.download = name + '.pdf';
        a.click();
        showToast(`📥 Скачивание: "${name}"`);
    }
}

function showSection(name) {
    showToast(`📂 Раздел "${name}" будет доступен позже, иншаАллах!`);
}

// ========================================
// ПРИВЕТСТВЕННОЕ ОКНО С ИМЕНЕМ
// ========================================
function showNameModal() {
    const modal = document.getElementById('nameModal');
    if (!modal) return;
    const savedName = localStorage.getItem('userName');
    if (!savedName) {
        modal.style.display = 'flex';
        document.getElementById('userNameInput').focus();
    } else {
        showWelcomeToast(savedName);
    }
}

function saveUserName() {
    const input = document.getElementById('userNameInput');
    const name = input.value.trim();
    if (!name) {
        showToast('⚠️ Пожалуйста, введите ваше имя');
        return;
    }
    if (name.length < 2) {
        showToast('⚠️ Имя должно содержать минимум 2 буквы');
        return;
    }
    
    localStorage.setItem('userName', name);
    document.getElementById('nameModal').style.display = 'none';
    showWelcomeToast(name);
    sendNameToGoogleSheets(name);
}

function showWelcomeToast(name) {
    showToast(`🌙 Ас-саляму алейкум, ${name}! Мы рады видеть вас на нашем сайте 🤲`);
}

function sendNameToGoogleSheets(name) {
    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name })
    })
    .then(() => console.log('✅ Имя отправлено в Google Sheets'))
    .catch(error => console.log('❌ Ошибка отправки:', error));
}

// ========================================
// TOAST
// ========================================
let toastTimeout;

function showToast(msg) {
    const old = document.querySelector('.toast');
    if (old) { old.remove(); clearTimeout(toastTimeout); }

    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);

    setTimeout(() => t.classList.add('show'), 10);

    toastTimeout = setTimeout(() => {
        t.classList.remove('show');
        setTimeout(() => t.remove(), 400);
    }, 3000);
}

// ========================================
// ЗАГРУЗКА
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    showMainMenu();
    setTimeout(showNameModal, 600);
});
