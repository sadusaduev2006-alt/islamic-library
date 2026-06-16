// ========================================
// ДАННЫЕ КНИГ
// ========================================
const library = {
    // ========================================
    // ВСЕ КНИГИ (общий список)
    // ========================================
    all: {
        title: '📚 Все книги',
        books: [
            {
                name: 'Основы веры',
                author: 'Проф. Салих ас-Сухейми, Проф. Абд ар-Раззак аль-Бадр, Проф. Ибрахим ар-Рухейли',
                desc: 'Издательство ummah. Под редакцией Факихи А.Н., А. аль-Гамиди. Перевод с арабского Кулиева Э.Р.',
                file: 'books/aqeedah/Основы веры.pdf'
            },
            {
                name: 'Слово единобожия',
                author: "'Абд ар-Раззак ибн 'Абд аль-Мухсин аль-Бадр",
                desc: 'Книга о таухиде и искренности в поклонении Аллаху',
                file: 'books/aqeedah/Слово единобожия.pdf'
            },
            {
                name: 'Сира Пророка (ﷺ)',
                author: 'Сафи ар-Рахман аль-Мубаракфури',
                desc: 'Достоверная биография Пророка Мухаммада (ﷺ) от рождения до смерти',
                file: 'books/sira/Сира Пророка (ﷺ).pdf'
            }
        ]
    },
    // ========================================
    // ВЕРОУБЕЖДЕНИЕ (Акыда)
    // ========================================
    aqeedah: {
        title: '📖 Вероубеждение',
        books: [
            {
                name: 'Основы веры',
                author: 'Проф. Салих ас-Сухейми, Проф. Абд ар-Раззак аль-Бадр, Проф. Ибрахим ар-Рухейли',
                desc: 'Издательство ummah. Под редакцией Факихи А.Н., А. аль-Гамиди. Перевод с арабского Кулиева Э.Р.',
                file: 'books/aqeedah/Основы веры.pdf'
            },
            {
                name: 'Слово единобожия',
                author: "'Абд ар-Раззак ибн 'Абд аль-Мухсин аль-Бадр",
                desc: 'Книга о таухиде и искренности в поклонении Аллаху',
                file: 'books/aqeedah/Слово единобожия.pdf'
            }
        ]
    },
    // ========================================
    // СИРА (жизнь Пророка ﷺ)
    // ========================================
    sira: {
        title: '📖 Сира',
        books: [
            {
                name: 'Сира Пророка (ﷺ)',
                author: 'Сафи ар-Рахман аль-Мубаракфури',
                desc: 'Достоверная биография Пророка Мухаммада (ﷺ) от рождения до смерти',
                file: 'books/sira/Сира Пророка (ﷺ).pdf'
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
            count: 'более 50 аудио'
        },
        {
            name: 'Мишари ибн Рашид аль-Афаси',
            desc: 'Всемирно известный чтец Корана',
            icon: '🎙️',
            telegram: 'https://t.me/audiooo_quran',
            count: 'более 80 аудио'
        },
        {
            name: 'Мухаммад аль-Люхайдан',
            desc: 'Известный чтец Корана, имам мечети',
            icon: '🎙️',
            telegram: 'https://t.me/audiooo_quran',
            count: 'более 30 аудио'
        }
    ]
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
// НАВИГАЦИЯ
// ========================================
function showMainMenu() {
    mainMenu.style.display = 'block';
    catalogSection.style.display = 'none';
    audioSection.style.display = 'none';
    document.getElementById('prophetsSection').style.display = 'none';
    document.getElementById('pdfViewer').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCatalog() {
    mainMenu.style.display = 'none';
    catalogSection.style.display = 'block';
    audioSection.style.display = 'none';
    document.getElementById('prophetsSection').style.display = 'none';
    document.getElementById('pdfViewer').style.display = 'none';
    renderCatalog('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showAudio() {
    mainMenu.style.display = 'none';
    catalogSection.style.display = 'none';
    audioSection.style.display = 'block';
    document.getElementById('prophetsSection').style.display = 'none';
    document.getElementById('pdfViewer').style.display = 'none';
    renderRecitersList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showProphets() {
    mainMenu.style.display = 'none';
    catalogSection.style.display = 'none';
    audioSection.style.display = 'none';
    document.getElementById('prophetsSection').style.display = 'block';
    document.getElementById('pdfViewer').style.display = 'none';
    renderProphets('videos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// КАТАЛОГ КНИГ
// ========================================
function renderCatalog(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.tab-btn[onclick*="${tab}"]`)?.classList.add('active');

    const data = library[tab];
    if (!data) return;

    let html = `
        <h3 style="font-size: 18px; color: var(--green); margin-bottom: 12px;">${data.title}</h3>
        <div class="books-list">
    `;

    if (data.books.length === 0) {
        html += `
            <div class="empty-message">
                <span class="empty-icon">📭</span>
                В этом разделе пока нет книг.<br>
                <span style="font-size: 13px; color: var(--text-muted);">Книги будут добавлены позже, иншаАллах.</span>
            </div>
        `;
    } else {
        data.books.forEach((book) => {
            html += `
                <div class="book-card" style="cursor: pointer;" onclick="openPdfViewer('${book.file}')">
                    <div>
                        <div class="book-name">${book.name}</div>
                        <div class="book-author">${book.author}</div>
                        <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">${book.desc || ''}</div>
                        <div style="font-size: 12px; color: var(--gold); margin-top: 4px;">📖 Нажмите, чтобы читать онлайн</div>
                    </div>
                    <button class="download-btn" onclick="event.stopPropagation(); downloadBook('${book.file}', '${book.name}')">📥 Скачать</button>
                </div>
            `;
        });
    }

    html += '</div>';
    catalogContent.innerHTML = html;
}

function switchCatalogTab(tab, btn) {
    renderCatalog(tab);
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
                            <iframe 
                                src="${video.embed}" 
                                title="${video.title}" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
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
                html += `
                    <div class="book-card" style="cursor: pointer;" onclick="openPdfViewer('${book.file}')">
                        <div>
                            <div class="book-name">${book.title}</div>
                            <div class="book-author">${book.author}</div>
                            <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">${book.desc}</div>
                            <div style="font-size: 12px; color: var(--gold); margin-top: 4px;">📖 Нажмите, чтобы читать онлайн</div>
                        </div>
                        <button class="download-btn" onclick="event.stopPropagation(); downloadBook('${book.file}', '${book.title}')">📥 Скачать</button>
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
// ПРОСМОТР PDF
// ========================================
let currentPdfUrl = '';

function openPdfViewer(pdfUrl) {
    currentPdfUrl = pdfUrl;
    document.getElementById('catalogContent').style.display = 'none';
    document.getElementById('prophetsContent').style.display = 'none';
    document.getElementById('pdfViewer').style.display = 'block';
    
    const container = document.getElementById('pdfContainer');
    container.innerHTML = `
        <iframe src="${pdfUrl}" 
                width="100%" 
                height="100%" 
                style="border: none;">
        </iframe>
    `;
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
document.addEventListener('DOMContentLoaded', showMainMenu);
