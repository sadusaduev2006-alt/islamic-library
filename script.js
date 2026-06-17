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
    const visibleSection = document.querySelector('#catalogSection:not([style*="display: none"]), #prophetsSection:not([style*="display: none"])');
    if (visibleSection) {
        if (visibleSection.id === 'catalogSection') {
            const categoryKey = visibleSection.dataset.category;
            if (categoryKey) {
                renderCategoryBooks(categoryKey);
            } else {
                renderCatalogCategories();
            }
        } else if (visibleSection.id === 'prophetsSection') {
            renderProphets('books');
        }
    }
    // Если мы в избранном, обновляем и его
    const favSection = document.getElementById('favoritesSection');
    if (favSection.style.display !== 'none') {
        renderFavorites();
    }
}

function isFavorite(bookKey) {
    return getFavorites().includes(bookKey);
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

    // Сохраняем категорию для обновления
    catalogSection.dataset.category = categoryKey;

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
            html += `
                <div class="book-card">
                    <div class="book-info">
                        <div class="book-name">${book.name}</div>
                        <div class="book-author">${book.author}</div>
                        <div style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">${book.desc || ''}</div>
                    </div>
                    <div class="book-actions">
                        <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('${bookKey}')
