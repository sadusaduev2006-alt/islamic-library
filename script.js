const library = {
    'akyda': {
        title: '📖 Акыда',
        desc: 'основы вероубеждения',
        icon: '📖',
        books: []
    },
    'tafsir': {
        title: '📖 Тафсир',
        desc: 'толкование Корана',
        icon: '📖',
        books: []
    },
    'fikh': {
        title: '📖 Фикх',
        desc: 'практические предписания',
        icon: '📖',
        books: []
    },
    'sira': {
        title: '📖 Сира',
        desc: 'жизнь Пророка (ﷺ)',
        icon: '📖',
        books: []
    }
};

// ========================================
// ДАННЫЕ АУДИО (ЧТЕЦЫ)
// ========================================
const audioData = {
    reciters: [
        {
            name: 'Мухаммад аль-Люхайд',
            desc: 'Известный чтец Корана, имам мечети',
            icon: '🎙️',
            audios: [
                { name: '001 Аль-Фатиха', file: 'audio/luhayd/001_al_fatiha.mp3' }
            ]
        }
        // Добавляйте новых чтецов сюда
    ]
};

// ========================================
// DOM-ЭЛЕМЕНТЫ
// ========================================
const mainMenu = document.getElementById('mainMenu');
const catalogSection = document.getElementById('catalogSection');
const audioSection = document.getElementById('audioSection');
const catalogCategories = document.getElementById('catalogCategories');
const booksListContainer = document.getElementById('booksListContainer');
const audioContent = document.getElementById('audioContent');

// ========================================
// НАВИГАЦИЯ
// ========================================
function showMainMenu() {
    mainMenu.style.display = 'block';
    catalogSection.style.display = 'none';
    audioSection.style.display = 'none';
    booksListContainer.innerHTML = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCatalog() {
    mainMenu.style.display = 'none';
    catalogSection.style.display = 'block';
    audioSection.style.display = 'none';
    renderCatalogCategories();
    booksListContainer.innerHTML = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showAudio() {
    mainMenu.style.display = 'none';
    catalogSection.style.display = 'none';
    audioSection.style.display = 'block';
    renderRecitersList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// КАТАЛОГ КНИГ
// ========================================
function renderCatalogCategories() {
    let html = '';
    for (const [key, data] of Object.entries(library)) {
        html += `
            <button class="catalog-cat-btn" onclick="showBooks('${key}')">
                <span class="cat-icon">${data.icon}</span>
                <span class="cat-name">${data.title}</span>
                <span class="cat-desc">${data.desc}</span>
            </button>
        `;
    }
    catalogCategories.innerHTML = html;
    catalogCategories.style.display = 'grid';
}

function showBooks(category) {
    const data = library[category];
    if (!data) return;

    catalogCategories.style.display = 'none';

    let html = `
        <div style="margin-bottom: 12px;">
            <button class="back-btn" onclick="showCatalogCategories()" style="margin-bottom: 4px;">← Назад к категориям</button>
            <h3 style="font-size: 18px; color: var(--green);">${data.title}</h3>
        </div>
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
                <div class="book-card">
                    <div>
                        <div class="book-name">${book.name}</div>
                        <div class="book-author">${book.author}</div>
                    </div>
                    <button class="download-btn" onclick="downloadBook('${book.file}', '${book.name}')">📥 Скачать</button>
                </div>
            `;
        });
    }

    html += '</div>';
    booksListContainer.innerHTML = html;
}

function showCatalogCategories() {
    catalogCategories.style.display = 'grid';
    booksListContainer.innerHTML = '';
}

// ========================================
// АУДИО (НОВАЯ ЛОГИКА)
// ========================================
function renderRecitersList() {
    if (audioData.reciters.length === 0) {
        audioContent.innerHTML = `
            <div class="empty-message">
                <span class="empty-icon">🎙️</span>
                Аудио раздел пока пуст.<br>
                <span style="font-size: 13px; color: var(--text-muted);">Чтецы и аудио будут добавлены позже, иншаАллах.</span>
            </div>
        `;
        return;
    }

    let html = '';
    audioData.reciters.forEach((reciter, index) => {
        html += `
            <button class="reciter-card-btn" onclick="showReciterAudios(${index})">
                <div class="reciter-name">
                    <span>${reciter.icon || '🎙️'}</span>
                    ${reciter.name}
                </div>
                <div class="reciter-desc">${reciter.desc || ''}</div>
                <div style="font-size: 13px; color: var(--text-muted); margin-top: 6px;">
                    📂 ${reciter.audios ? reciter.audios.length : 0} аудио
                </div>
            </button>
        `;
    });

    audioContent.innerHTML = html;
}

function showReciterAudios(index) {
    const reciter = audioData.reciters[index];
    if (!reciter) return;

    let html = `
        <div style="margin-bottom: 14px;">
            <button class="back-btn" onclick="renderRecitersList()" style="margin-bottom: 6px;">← Назад к чтецам</button>
            <h3 style="font-size: 18px; color: var(--green);">
                <span>${reciter.icon || '🎙️'}</span> ${reciter.name}
            </h3>
            <p style="font-size: 14px; color: var(--text-muted);">${reciter.desc || ''}</p>
        </div>
        <div class="audio-list">
    `;

    if (reciter.audios && reciter.audios.length > 0) {
        reciter.audios.forEach((audio) => {
            html += `
                <div class="audio-item">
                    <span class="audio-name">${audio.name}</span>
                    <button class="audio-play-btn" onclick="playAudio('${audio.file}')">▶</button>
                    <button class="audio-download-btn" onclick="downloadAudio('${audio.file}', '${audio.name}')">📥</button>
                </div>
            `;
        });
    } else {
        html += `<div style="padding:12px 0;color:var(--text-muted);font-size:14px;">У этого чтеца пока нет аудио</div>`;
    }

    html += '</div>';
    audioContent.innerHTML = html;
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

function playAudio(file) {
    if (!file || file === 'путь/к/аудио.mp3') {
        showToast('🎵 Аудио будет доступно позже, иншаАллах!');
    } else {
        try {
            const audio = new Audio(file);
            audio.play();
            showToast('▶️ Воспроизведение');
        } catch (e) {
            showToast('⚠️ Ошибка воспроизведения');
        }
    }
}

function downloadAudio(file, name) {
    if (!file || file === 'путь/к/аудио.mp3') {
        showToast(`🎵 Аудио "${name}" будет добавлено позже, иншаАллах!`);
    } else {
        const a = document.createElement('a');
        a.href = file;
        a.download = name + '.mp3';
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
