/**
 * 8th Grade School Assignments Dashboard Controller
 * Antigravity AI pair programmer
 */

// ==========================================================================
// Initial Data Base from User Screenshots
// ==========================================================================
const DEFAULT_TASKS = [
    {
        id: "informatics-1",
        subject: "Інформатика",
        teacher: "Ольга Міхуткіна",
        title: "Річна контрольна робота / Тестування",
        description: "Доброго дня, шановні учні!\nВ цьому повідомленні Ви знайдете тематичний план вивчення інформатики в 8 класі + посилання на підручник Інформатики.\nЩоб отримати оцінку за рік, Вам потрібно пройти тестування.\nДякую за співпрацю.\n\nP.S. Тест відкритий до 8.6.2026 (включно). При тестуванні пишіть своє ім'я, прізвище і клас.",
        deadline: "2026-06-08T23:59:59+02:00",
        format: "Тестування на Naurok",
        links: [
            { name: "Пройти тест (Naurok)", url: "https://naurok.com.ua/test/join?gamecode=" },
            { name: "Підручник Інформатика 8 клас", url: "https://pidruchnyk.com.ua/3013-informatyka-8-klas-ryvkind-2021.html" },
            { name: "Тематичний план 8 клас (NUSh.xlsx)", url: "#" }
        ],
        classroomUrl: "https://classroom.google.com/c/ODYzNzY3NjQ0MjMx/a/ODYzNzY4MTkzMTQ5/details",
        status: "pending"
    },
    {
        id: "ukr-language-1",
        subject: "Українська мова",
        teacher: "Білоус І.Г. (Inna Bilous)",
        title: "Контрольна робота для екстернату",
        description: "Виконайте тести на всі теми, вивчені у 8 класі.\nВиконайте завдання, розміщене на фото. Не забудьте вказати вид односкладного речення: означено-особове, неозначено-особове і т.д.",
        deadline: "2026-05-26T23:59:59+02:00",
        format: "4 Google Форми + письмове завдання з фото",
        links: [
            { name: "Контрольна робота. 8 клас. Словосполучення (Google Форми)", url: "#" },
            { name: "Контрольна робота. 8 клас. Односкладні речення (Google Форми)", url: "#" },
            { name: "Контрольна робота. 8 клас. Звертання та вставні слова (Google Форми)", url: "#" },
            { name: "Контрольна робота. Відокремлені члени речення (Google Форми)", url: "#" },
            { name: "Знімок завдання з фото 1 (Знімок 3.png)", url: "#" },
            { name: "Знімок завдання з фото 2 (Знімок 29.png)", url: "#" }
        ],
        classroomUrl: "https://classroom.google.com/c/ODY0NzI5MDE0MDIz/a/ODY1NDEwMjA5MDIy/details",
        status: "pending"
    },
    {
        id: "ukr-literature-1",
        subject: "Українська література",
        teacher: "Білоус І.Г.",
        title: "Чергових завдань немає",
        description: "Немає завдань на цей тиждень. На цій сторінці відображатимуться оновлення для курсу.",
        deadline: "",
        format: "-",
        links: [],
        classroomUrl: "https://classroom.google.com/c/ODY0NzI4NjY3MDYz",
        status: "no_task"
    },
    {
        id: "english-1",
        subject: "Англійська мова (Сімейники)",
        teacher: "Ірина Хмілевська",
        title: "Річні підсумкові завдання (Listening + Writing)",
        description: "Виконайте всі завдання з тих, що надаються. Додатково надається аудіофайл для виконання Listening. Всі завдання треба або виконувати на екрані, або роздрукувати, заповнити, сфотографувати або відсканувати та прикріпити в Google Клас. Написання від руки допускається тільки для частини Writing.\n\nЗавдання потрібно здати до 24.05.",
        deadline: "2026-05-24T23:59:59+02:00",
        format: "PDF-файл + Аудіо Listening (MP3)",
        links: [
            { name: "Завдання (PDF - IMG_20260515_0001)", url: "#" },
            { name: "Аудіо Listening (011_final_test_m01_to_08.mp3)", url: "#" }
        ],
        classroomUrl: "https://classroom.google.com/c/ODM3MzA2OTM5Mjc4/a/ODY0NzQwMTM2MDg5/details",
        status: "pending"
    },
    {
        id: "foreign-lit-1",
        subject: "Зарубіжна література",
        teacher: "Елена Трач",
        title: "Річна контрольна робота",
        description: "І БЛОК: Сприймання та аналіз (ГР 1,2)\nЗавдання 1-6\n\n1. Хто з античних авторів вважається творцем «Іліади» та «Одіссеї»?\nА) Есхіл  Б) Гомер  В) Тіртей\n\n2. Який сонет Шекспіра починається словами «Її очей до сонця не рівняти...»?\nА) №130  Б) №66  В) №18\n\n3. Укажіть головну рису характеру Дон Кіхота:\nА) Прагматизм  Б) Жадоба влади  В) Благородне безумство (ідеалізм)\n\n4. Хто є автором комедії «Міщанин-шляхтич»?\nА) В. Шекспір  Б) Мольєр  В) Й. В. Гете\n\n5. Яку епоху представляє творчість Джона Донна?\nА) Античність  Б) Відродження  В) Бароко\n\n6. Що шукав Фауст у трагедії Гете?\nА) Золото та славу  Б) Сенс буття та істину  В) Спосіб подолати ворогів\n\nІІ БЛОК: ...  /  Завдання 7-10\n\n7. Установіть відповідність між літературним персонажем та автором твору:\n• Ромео Монтеккі — ____ | А) Мольєр\n• Пан Журден — ____    | Б) В. Шекспір\n• Санчо Панса — ____   | В) М. де Сервантес\n\n8. Поясніть значення терміна «вічний образ». Наведіть приклад такого образу з вивчених творів.\n\n9. Опишіть конфлікт комедії «Міщанин-шляхтич». Над чим сміється автор?\n\n10. У чому полягає гуманізм трагедії «Ромео і Джульєтта»? Чому їхня смерть вважається перемогою над ворожнечею?\n\nІІІ БЛОК: Творча діяльність (ГР 4)\nЗавдання 11\n\n11. Напишіть коротке есе (7-10 речень) на тему «Мій улюблений літературний герой 8-го класу: чому він мене навчив?»",
        deadline: "2026-05-30T23:59:59+02:00",
        format: "Письмова контрольна робота в Classroom",
        links: [],
        classroomUrl: "https://classroom.google.com/c/NzkyOTM2MTE0OTE4/a/ODY1MDA2OTQ4OTM1/details",
        status: "pending"
    },
    {
        id: "chemistry-1",
        subject: "Хімія",
        teacher: "Ірина Кулакова",
        title: "Річна контрольна робота (100 балів)",
        description: "Доброго дня всім!\nНадаю фото контрольних з хімії для всіх класів. Роботи здати до 24.05 ВКЛЮЧНО.\n\nВам необхідно:\n1. Знайти на вкладених Viber-зображеннях завдання для 8 класу.\n2. Виконати контрольну роботу в зошиті від руки.\n3. Сфотографувати або відсканувати виконану роботу та прикріпити її в Google Клас.",
        deadline: "2026-05-24T23:59:59+02:00",
        format: "Письмова робота з фотографіями в зошиті",
        links: [
            { name: "Контрольні завдання з хімії (5 зображень)", url: "#" }
        ],
        classroomUrl: "https://classroom.google.com/c/ODY1MDAwMTQ0ODEy/a/ODY0OTk4NDUwMjcy/details",
        status: "pending"
    }
];

const MOTIVATIONAL_QUOTES = [
    "Кожна перемога починається з першого невеликого кроку!",
    "Час — це твій суперресурс, керуй ним розумно!",
    "Маленькі щоденні кроки ведуть до великих успіхів!",
    "Успіх приходить до тих, хто планує свій час!",
    "Ти можеш набагато більше, ніж тобі здається!",
    "Знання — це суперсила, яка відкриває будь-які двері!"
];

// ==========================================================================
// Application State
// ==========================================================================
let tasks = [];
let gradeName = 'Екстернат 8-А';
let activeFilter = 'all'; // 'all', 'pending', 'completed', 'no_task', 'urgent'
let searchQuery = '';
let currentSort = 'deadline-asc'; // 'deadline-asc', 'deadline-desc', 'subject-asc'
let countdownInterval = null;

// DOM Elements
const tasksGrid = document.getElementById('tasks-grid');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const currentFilterTitle = document.getElementById('current-filter-title');
const visibleTasksCount = document.getElementById('visible-tasks-count');
const countUrgentEl = document.getElementById('count-urgent');
const countPendingEl = document.getElementById('count-pending');
const countCompletedEl = document.getElementById('count-completed');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const emptyState = document.getElementById('empty-state');
const motivationalQuoteEl = document.getElementById('motivational-quote');

// Dynamic Class Title DOM
const gradeTitleEl = document.getElementById('grade-title');
const editGradeBtn = document.getElementById('edit-grade-btn');

// Welcome / First Run Overlay DOM
const welcomeOverlay = document.getElementById('welcome-overlay');
const modeDemoBtn = document.getElementById('mode-demo-btn');
const modeBlankBtn = document.getElementById('mode-blank-btn');

// Modals DOM
const viewModal = document.getElementById('view-modal');
const viewModalClose = document.getElementById('view-modal-close');
const formModal = document.getElementById('form-modal');
const formModalClose = document.getElementById('form-modal-close');
const taskForm = document.getElementById('task-form');
const addTaskBtn = document.getElementById('add-task-btn');
const addLinkFieldBtn = document.getElementById('add-link-field-btn');
const formLinksContainer = document.getElementById('form-links-container');

// View Modal Fields DOM
const viewSubjectTag = document.getElementById('view-subject-tag');
const viewTaskTitle = document.getElementById('view-task-title');
const viewTeacherName = document.getElementById('view-teacher-name');
const viewTaskDesc = document.getElementById('view-task-desc');
const viewDeadlineDate = document.getElementById('view-deadline-date');
const viewFormatBadge = document.getElementById('view-format-badge');
const viewCountdownContainer = document.getElementById('view-countdown-container');
const viewCountdown = document.getElementById('view-countdown');
const viewAttachments = document.getElementById('view-attachments');
const viewLinksSection = document.getElementById('view-links-section');
const viewEditBtn = document.getElementById('view-edit-btn');
const viewCompleteBtn = document.getElementById('view-complete-btn');

// Data Management & Sharing Modals DOM
const gradeModal = document.getElementById('grade-modal');
const gradeModalClose = document.getElementById('grade-modal-close');
const gradeCancelBtn = document.getElementById('grade-cancel-btn');
const gradeSubmitBtn = document.getElementById('grade-submit-btn');
const formGradeName = document.getElementById('form-grade-name');

const shareModal = document.getElementById('share-modal');
const shareModalClose = document.getElementById('share-modal-close');
const shareLinkInput = document.getElementById('share-link-input');
const shareCopyBtn = document.getElementById('share-copy-btn');

const importConfirmModal = document.getElementById('import-confirm-modal');
const importClassName = document.getElementById('import-class-name');
const importCancelBtn = document.getElementById('import-cancel-btn');
const importAcceptBtn = document.getElementById('import-accept-btn');

// Data Management Sidebar Panel Buttons DOM
const sidebarShareBtn = document.getElementById('sidebar-share-btn');
const sidebarExportBtn = document.getElementById('sidebar-export-btn');
const sidebarImportBtn = document.getElementById('sidebar-import-btn');
const sidebarResetBtn = document.getElementById('sidebar-reset-btn');
const fileImportInput = document.getElementById('file-import-input');

// Toast Notification
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// ==========================================================================
// Initialization & LocalStorage Management
// ==========================================================================
function initApp() {
    // Load gradeName from localStorage or default
    gradeName = localStorage.getItem('school_dashboard_grade_name') || 'Екстернат 8-А';
    gradeTitleEl.innerText = gradeName;

    // Load Theme Preference
    const storedTheme = localStorage.getItem('theme_preference') || 'dark';
    if (storedTheme === 'light') {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    }

    // Setup random quote
    setRandomQuote();

    // Event Listeners setup
    setupEventListeners();

    // Load tasks from localStorage
    const storedTasks = localStorage.getItem('school_dashboard_tasks');
    
    // Check if there is a share link in the URL first!
    const hasShareHash = window.location.hash.startsWith('#share=');

    if (storedTasks) {
        try {
            tasks = JSON.parse(storedTasks);
            
            // Automatic data migration/upgrade to merge newly added Google Classroom links & details
            let migrated = false;
            DEFAULT_TASKS.forEach(defaultTask => {
                const existingTask = tasks.find(t => t.id === defaultTask.id);
                if (existingTask) {
                    // Update classroomUrl if it's missing
                    if (!existingTask.classroomUrl && defaultTask.classroomUrl) {
                        existingTask.classroomUrl = defaultTask.classroomUrl;
                        migrated = true;
                    }
                    // Update description, links or format if they were empty/default and new default has data
                    if (existingTask.subject === "Хімія" && existingTask.teacher === "Вчитель Хімії") {
                        // Upgrade Chemistry from default/placeholder to active task
                        existingTask.teacher = defaultTask.teacher;
                        existingTask.title = defaultTask.title;
                        existingTask.description = defaultTask.description;
                        existingTask.deadline = defaultTask.deadline;
                        existingTask.format = defaultTask.format;
                        existingTask.links = defaultTask.links;
                        existingTask.status = defaultTask.status;
                        migrated = true;
                    }
                    if (existingTask.subject === "Зарубіжна література" && !existingTask.description.includes("Дон Кіхота")) {
                        // Upgrade World Literature to complete 11 questions list
                        existingTask.description = defaultTask.description;
                        migrated = true;
                    }
                }
            });

            if (migrated) {
                saveTasksToStorage();
            }
            
            // Initialize display
            updateStats();
            renderTasks();
            startTimers();

            // Check for URL share hash
            if (hasShareHash) {
                checkShareHash();
            }
        } catch (e) {
            console.error("Помилка парсингу localStorage, використано базові дані", e);
            showWelcomeScreen();
        }
    } else {
        // First run!
        if (hasShareHash) {
            // If they followed a share link, let's load empty but immediately prompt import!
            tasks = [];
            updateStats();
            renderTasks();
            startTimers();
            checkShareHash();
        } else {
            showWelcomeScreen();
        }
    }
}

function saveTasksToStorage() {
    localStorage.setItem('school_dashboard_tasks', JSON.stringify(tasks));
}

function setRandomQuote() {
    const randomIndex = Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length);
    motivationalQuoteEl.innerText = MOTIVATIONAL_QUOTES[randomIndex];
}

// ==========================================================================
// Utility Helpers
// ==========================================================================
function getSubjectIcon(subject) {
    const s = subject.toLowerCase().trim();
    if (s.includes('інформ')) return 'fa-laptop-code';
    if (s.includes('укр') && s.includes('мов')) return 'fa-spell-check';
    if (s.includes('укр') && s.includes('літ')) return 'fa-book-open';
    if (s.includes('англій') || s.includes('англ') || s.includes('lang')) return 'fa-language';
    if (s.includes('заруб') || s.includes('літер')) return 'fa-globe';
    if (s.includes('хім')) return 'fa-flask';
    if (s.includes('фізи')) return 'fa-atom';
    if (s.includes('алгеб')) return 'fa-calculator';
    if (s.includes('геом')) return 'fa-compass';
    if (s.includes('істор')) return 'fa-landmark';
    if (s.includes('біол')) return 'fa-dna';
    if (s.includes('геогр')) return 'fa-map-location-dot';
    return 'fa-pen-clip';
}

function showToast(message, type = 'success') {
    toastMessage.innerText = message;
    const icon = toast.querySelector('.toast-icon');
    
    if (type === 'success') {
        toast.style.borderLeftColor = 'var(--success)';
        icon.className = 'fa-solid fa-circle-check toast-icon';
        icon.style.color = 'var(--success)';
    } else if (type === 'info') {
        toast.style.borderLeftColor = 'var(--primary)';
        icon.className = 'fa-solid fa-info-circle toast-icon';
        icon.style.color = 'var(--primary)';
    } else if (type === 'urgent') {
        toast.style.borderLeftColor = 'var(--urgent)';
        icon.className = 'fa-solid fa-triangle-exclamation toast-icon';
        icon.style.color = 'var(--urgent)';
    }

    toast.classList.remove('hidden');
    
    // Auto-hide toast
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3500);
}

// Calculate the remaining time metrics
function getRemainingTime(deadlineStr, taskStatus) {
    if (taskStatus === 'no_task' || !deadlineStr) {
        return { label: 'Немає завдань', cls: 'no_task', totalMs: Infinity };
    }
    if (taskStatus === 'completed') {
        return { label: 'Виконано!', cls: 'completed', totalMs: -1 };
    }

    const deadline = new Date(deadlineStr);
    const now = new Date();
    const diff = deadline.getTime() - now.getTime();

    if (diff <= 0) {
        return { label: 'Термін минув!', cls: 'urgent', totalMs: diff };
    }

    // Calculations
    const secs = Math.floor(diff / 1000);
    const mins = Math.floor(secs / 60);
    const hours = Math.floor(mins / 60);
    const days = Math.floor(hours / 24);

    const rHours = hours % 24;
    const rMins = mins % 60;
    const rSecs = secs % 60;

    let timeString = '';
    if (days > 0) {
        timeString += `${days}д `;
    }
    timeString += `${rHours}г ${rMins}хв ${rSecs}с`;

    // Urgency Classification
    let cls = 'pending'; // Safe/normal
    if (diff < 24 * 3600 * 1000) { // < 24 Hours
        cls = 'urgent';
    } else if (diff < 3 * 24 * 3600 * 1000) { // < 3 Days
        cls = 'warning';
    }

    return { label: `Залишилось: ${timeString}`, cls: cls, totalMs: diff };
}

// Formatting readable dates to custom dd/mm/yyyy format
function formatCustomDate(dateStr, includeTime = false) {
    if (!dateStr) return "Немає";
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "Немає";
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    if (includeTime) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}/${month}/${year}, ${hours}:${minutes}`;
    }
    
    return `${day}/${month}/${year}`;
}

function formatDeadlineToKyiv(deadlineStr) {
    if (!deadlineStr) return "Термін здачі не вказано";
    return formatCustomDate(deadlineStr, true);
}

// ==========================================================================
// Timers and Stats Engine
// ==========================================================================
function startTimers() {
    if (countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        // Update live countdown values on every visible timer element
        document.querySelectorAll('.timer-value').forEach(el => {
            const taskId = el.getAttribute('data-task-id');
            const task = tasks.find(t => t.id === taskId);
            if (task) {
                const timerData = getRemainingTime(task.deadline, task.status);
                el.innerText = timerData.label;
                
                // Adjust card color dynamically if needed
                const card = document.getElementById(`card-${taskId}`);
                if (card) {
                    // Remove existing theme classes
                    card.classList.remove('card-urgent', 'card-warning', 'card-pending', 'card-completed', 'card-no_task');
                    card.classList.add(`card-${timerData.cls}`);
                }
            }
        });

        // Also update view modal countdown if open
        if (viewModal.classList.contains('open')) {
            const openTaskId = viewModal.getAttribute('data-open-task-id');
            const task = tasks.find(t => t.id === openTaskId);
            if (task) {
                const timerData = getRemainingTime(task.deadline, task.status);
                viewCountdown.innerText = timerData.label;
                viewCountdown.className = 'countdown-timer-large';
                
                if (timerData.cls === 'urgent') viewCountdown.style.color = 'var(--urgent)';
                else if (timerData.cls === 'warning') viewCountdown.style.color = 'var(--warning)';
                else if (timerData.cls === 'completed') viewCountdown.style.color = 'var(--success)';
                else if (timerData.cls === 'no_task') viewCountdown.style.color = 'var(--text-muted)';
                else viewCountdown.style.color = 'var(--success)';
            }
        }
    }, 1000);
}

function updateStats() {
    let urgent = 0;
    let pending = 0;
    let completed = 0;

    tasks.forEach(task => {
        if (task.status === 'completed') {
            completed++;
        } else if (task.status === 'pending') {
            pending++;
            
            // Check if urgent
            if (task.deadline) {
                const diff = new Date(task.deadline).getTime() - new Date().getTime();
                if (diff > 0 && diff < 24 * 3600 * 1000) {
                    urgent++;
                }
            }
        }
    });

    countUrgentEl.innerText = urgent;
    countPendingEl.innerText = pending;
    countCompletedEl.innerText = completed;
}

// ==========================================================================
// Rendering Engine
// ==========================================================================
function renderTasks() {
    tasksGrid.innerHTML = '';
    
    // 1. Filtering Tasks
    let filteredTasks = tasks.filter(task => {
        // Search Filter
        const matchesSearch = 
            task.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.teacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.description.toLowerCase().includes(searchQuery.toLowerCase());
        
        if (!matchesSearch) return false;

        // Quick Filters Category
        if (activeFilter === 'all') return true;
        if (activeFilter === 'pending') return task.status === 'pending';
        if (activeFilter === 'completed') return task.status === 'completed';
        if (activeFilter === 'no_task') return task.status === 'no_task';
        if (activeFilter === 'urgent') {
            if (task.status !== 'pending' || !task.deadline) return false;
            const diff = new Date(task.deadline).getTime() - new Date().getTime();
            return diff > 0 && diff < 24 * 3600 * 1000;
        }

        return true;
    });

    // 2. Sorting Tasks
    filteredTasks.sort((a, b) => {
        if (currentSort === 'deadline-asc') {
            // Sort by earliest deadline first. No-deadline goes to the bottom.
            if (!a.deadline) return 1;
            if (!b.deadline) return -1;
            return new Date(a.deadline) - new Date(b.deadline);
        } else if (currentSort === 'deadline-desc') {
            // Sort by latest deadline first
            if (!a.deadline) return 1;
            if (!b.deadline) return -1;
            return new Date(b.deadline) - new Date(a.deadline);
        } else if (currentSort === 'subject-asc') {
            return a.subject.localeCompare(b.subject, 'uk');
        } else if (currentSort === 'subject-desc') {
            return b.subject.localeCompare(a.subject, 'uk');
        }
        return 0;
    });

    // 3. Update counter and empty state
    visibleTasksCount.innerText = `Показано предметів: ${filteredTasks.length} з ${tasks.length}`;
    if (filteredTasks.length === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }

    // 4. Render Card Nodes
    filteredTasks.forEach(task => {
        const timerData = getRemainingTime(task.deadline, task.status);
        const iconClass = getSubjectIcon(task.subject);

        const card = document.createElement('div');
        card.className = `task-card card-${timerData.cls}`;
        card.id = `card-${task.id}`;

        // Truncate long descriptions for card
        let descTruncated = task.description;
        let needsReadMore = false;
        if (descTruncated.length > 150) {
            descTruncated = descTruncated.substring(0, 150) + '...';
            needsReadMore = true;
        }

        // Format Date
        const deadLineFormatted = formatDeadlineToKyiv(task.deadline);

        card.innerHTML = `
            <div class="card-header">
                <div class="subject-wrapper">
                    <span class="subject-name">
                        <i class="fa-solid ${iconClass} subject-icon"></i>
                        ${task.subject}
                    </span>
                    <span class="teacher-name">${task.teacher}</span>
                </div>
                <div class="action-menu">
                    <button class="card-action-btn edit-task" title="Редагувати" data-id="${task.id}">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="card-action-btn delete-task" title="Видалити" data-id="${task.id}">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
            
            <div class="card-body">
                <h4 class="task-title">${task.title}</h4>
                <p class="task-desc">${descTruncated.replace(/\n/g, '<br>')}</p>
                ${needsReadMore ? `<span class="read-more-link open-details" data-id="${task.id}">Читати повністю <i class="fa-solid fa-arrow-right"></i></span>` : ''}
            </div>

            <div class="badges-container">
                ${task.classroomUrl ? `<a href="${task.classroomUrl}" target="_blank" class="format-badge classroom-badge" onclick="event.stopPropagation();"><i class="fa-solid fa-chalkboard-user"></i> Classroom</a>` : ''}
                ${task.format && task.format !== '-' ? `<span class="format-badge"><i class="fa-solid fa-file-signature"></i> ${task.format}</span>` : ''}
                ${task.links && task.links.length > 0 ? `<span class="format-badge" style="background:var(--primary-light); color:var(--primary); border-color: rgba(108,93,211,0.2)"><i class="fa-solid fa-paperclip"></i> Матеріалів: ${task.links.length}</span>` : ''}
            </div>

            <div class="card-footer">
                <div class="time-remaining">
                    <span class="timer-label">Дедлайн: ${task.deadline ? formatCustomDate(task.deadline) : 'Немає'}</span>
                    <span class="timer-value" data-task-id="${task.id}">${timerData.label}</span>
                </div>
                ${task.status !== 'no_task' ? `
                    <label class="done-checkbox-label">
                        <input type="checkbox" class="done-checkbox toggle-status" data-id="${task.id}" ${task.status === 'completed' ? 'checked' : ''}>
                        Виконано
                    </label>
                ` : ''}
            </div>
        `;

        tasksGrid.appendChild(card);
    });

    // Wire up events on the newly created cards
    wireCardEvents();
}

// Bind events to interactive elements inside cards
function wireCardEvents() {
    // Open details
    document.querySelectorAll('.open-details, .task-desc, .task-title').forEach(el => {
        el.addEventListener('click', (e) => {
            // Prevent triggering details modal when clicking edit/delete or checkbox
            if (e.target.closest('.card-action-btn') || e.target.closest('.done-checkbox-label')) {
                return;
            }
            
            const card = e.target.closest('.task-card');
            const taskId = card.id.replace('card-', '');
            openViewModal(taskId);
        });
    });

    // Checkbox status toggling
    document.querySelectorAll('.toggle-status').forEach(cb => {
        cb.addEventListener('change', (e) => {
            const taskId = e.target.getAttribute('data-id');
            toggleTaskStatus(taskId, e.target.checked);
        });
    });

    // Edit task click
    document.querySelectorAll('.edit-task').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const taskId = btn.getAttribute('data-id');
            openEditFormModal(taskId);
        });
    });

    // Delete task click
    document.querySelectorAll('.delete-task').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const taskId = btn.getAttribute('data-id');
            deleteTask(taskId);
        });
    });
}

// ==========================================================================
// Controllers & Business Logic Actions
// ==========================================================================
function toggleTaskStatus(id, isCompleted) {
    const task = tasks.find(t => t.id === id);
    if (task && task.status !== 'no_task') {
        const oldStatus = task.status;
        task.status = isCompleted ? 'completed' : 'pending';
        
        saveTasksToStorage();
        updateStats();
        renderTasks();

        if (isCompleted) {
            showToast(`Ура! Завдання з предмета "${task.subject}" виконано! 🎉`, 'success');
        } else {
            showToast(`Завдання з предмета "${task.subject}" перенесено до активних.`, 'info');
        }
    }
}

function deleteTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    if (confirm(`Ви дійсно бажаєте видалити предмет/завдання: "${task.subject}"?`)) {
        tasks = tasks.filter(t => t.id !== id);
        saveTasksToStorage();
        updateStats();
        renderTasks();
        showToast(`Предмет "${task.subject}" успішно видалено.`, 'info');
    }
}

// Add useful link fields to the Form Modal
function addLinkFormRow(name = '', url = '') {
    const row = document.createElement('div');
    row.className = 'link-inputs-row';
    row.innerHTML = `
        <input type="text" class="link-name" placeholder="Назва (напр. Підручник, Тест)" value="${name}">
        <input type="text" class="link-url" placeholder="Посилання https://..." value="${url}">
        <button type="button" class="remove-link-btn" title="Видалити посилання"><i class="fa-solid fa-trash"></i></button>
    `;

    // Remove row event listener
    row.querySelector('.remove-link-btn').addEventListener('click', () => {
        row.remove();
    });

    formLinksContainer.appendChild(row);
}

// ==========================================================================
// Modal Windows Handling
// ==========================================================================
function openViewModal(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    viewModal.setAttribute('data-open-task-id', id);
    
    // Populating modal fields
    viewSubjectTag.innerText = task.subject;
    viewTaskTitle.innerText = task.title;
    viewTeacherName.innerText = task.teacher;
    viewTaskDesc.innerHTML = task.description.replace(/\n/g, '<br>');
    
    viewDeadlineDate.innerText = task.deadline ? formatDeadlineToKyiv(task.deadline) : 'Немає активних завдань';
    viewFormatBadge.innerText = task.format && task.format !== '-' ? task.format : 'Формат не вказано';

    // Show/hide countdown based on deadline presence
    if (task.status === 'no_task' || !task.deadline) {
        viewCountdownContainer.style.display = 'none';
    } else {
        viewCountdownContainer.style.display = 'block';
        const timerData = getRemainingTime(task.deadline, task.status);
        viewCountdown.innerText = timerData.label;
    }

    // Complete / Pending button in view modal
    if (task.status === 'no_task') {
        viewCompleteBtn.style.display = 'none';
    } else {
        viewCompleteBtn.style.display = 'block';
        if (task.status === 'completed') {
            viewCompleteBtn.innerHTML = '<i class="fa-solid fa-rotate-left"></i> Повернути в активні';
            viewCompleteBtn.className = 'btn btn-secondary';
        } else {
            viewCompleteBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Позначити як виконане';
            viewCompleteBtn.className = 'btn btn-primary';
        }
    }

    // Generating attachments links
    viewAttachments.innerHTML = '';
    if (task.links && task.links.length > 0) {
        viewLinksSection.style.display = 'block';
        task.links.forEach(link => {
            const a = document.createElement('a');
            a.className = 'attachment-link';
            a.href = link.url && link.url !== '#' ? link.url : 'javascript:void(0)';
            if (link.url && link.url !== '#') {
                a.target = '_blank';
            }
            
            // Guessing icons based on link name
            let icon = 'fa-link';
            const nameLower = link.name.toLowerCase();
            if (nameLower.includes('тест')) icon = 'fa-spell-check';
            else if (nameLower.includes('підручник') || nameLower.includes('книг')) icon = 'fa-book';
            else if (nameLower.includes('план') || nameLower.includes('excel')) icon = 'fa-file-excel';
            else if (nameLower.includes('pdf')) icon = 'fa-file-pdf';
            else if (nameLower.includes('аудіо') || nameLower.includes('mp3')) icon = 'fa-file-audio';
            
            a.innerHTML = `
                <span class="attachment-link-title">
                    <i class="fa-solid ${icon}"></i> ${link.name}
                </span>
                ${link.url && link.url !== '#' ? '<i class="fa-solid fa-arrow-up-right-from-square"></i>' : ''}
            `;
            viewAttachments.appendChild(a);
        });
    } else {
        viewLinksSection.style.display = 'none';
    }

    // Google Classroom button display
    const viewClassroomBtn = document.getElementById('view-classroom-btn');
    if (task.classroomUrl) {
        viewClassroomBtn.href = task.classroomUrl;
        viewClassroomBtn.style.display = 'inline-flex';
    } else {
        viewClassroomBtn.style.display = 'none';
    }

    // Modal view actions
    viewEditBtn.onclick = () => {
        closeViewModal();
        openEditFormModal(id);
    };

    viewCompleteBtn.onclick = () => {
        toggleTaskStatus(id, task.status !== 'completed');
        closeViewModal();
    };

    viewModal.classList.add('open');
}

function closeViewModal() {
    viewModal.classList.remove('open');
}

function openEditFormModal(id = null) {
    formLinksContainer.innerHTML = ''; // reset link fields
    
    if (id) {
        // EDIT MODE
        const task = tasks.find(t => t.id === id);
        if (!task) return;

        document.getElementById('form-modal-title').innerText = 'Редагувати предмет / завдання';
        document.getElementById('form-task-id').value = task.id;
        document.getElementById('form-subject').value = task.subject;
        document.getElementById('form-teacher').value = task.teacher;
        document.getElementById('form-title').value = task.title;
        document.getElementById('form-desc').value = task.description;
        
        // Handling Deadline Input formatting
        if (task.deadline) {
            // ISO date needs truncation to match input datetime-local pattern (YYYY-MM-DDThh:mm)
            const dateObj = new Date(task.deadline);
            // Timezone offset correction
            const offset = dateObj.getTimezoneOffset();
            const localDate = new Date(dateObj.getTime()-offset*60*1000);
            document.getElementById('form-deadline').value = localDate.toISOString().slice(0, 16);
        } else {
            document.getElementById('form-deadline').value = '';
        }

        document.getElementById('form-format').value = task.format === '-' ? '' : task.format;
        document.getElementById('form-classroom-url').value = task.classroomUrl || '';

        // Populating existing links rows
        if (task.links) {
            task.links.forEach(l => addLinkFormRow(l.name, l.url));
        }
    } else {
        // ADD NEW TASK MODE
        document.getElementById('form-modal-title').innerText = 'Додати нове завдання';
        document.getElementById('form-task-id').value = '';
        taskForm.reset();
        
        // Populate one empty links field
        addLinkFormRow('', '');
    }

    formModal.classList.add('open');
}

function closeFormModal() {
    formModal.classList.remove('open');
    taskForm.reset();
}

// Save Form Submit Action (Insert / Update)
function handleFormSubmit(e) {
    e.preventDefault();

    const taskId = document.getElementById('form-task-id').value;
    const subject = document.getElementById('form-subject').value.trim();
    const teacher = document.getElementById('form-teacher').value.trim();
    const title = document.getElementById('form-title').value.trim();
    const description = document.getElementById('form-desc').value.trim();
    const deadlineInput = document.getElementById('form-deadline').value;
    const format = document.getElementById('form-format').value.trim() || '-';
    const classroomUrl = document.getElementById('form-classroom-url').value.trim();

    // Parse links row fields
    const links = [];
    const nameInputs = formLinksContainer.querySelectorAll('.link-name');
    const urlInputs = formLinksContainer.querySelectorAll('.link-url');
    
    for (let i = 0; i < nameInputs.length; i++) {
        const name = nameInputs[i].value.trim();
        const url = urlInputs[i].value.trim();
        if (name) {
            links.push({ name, url: url || '#' });
        }
    }

    // Format deadline correctly
    let deadline = '';
    let status = 'pending';
    
    if (deadlineInput) {
        // Convert to ISO 8601 string
        const dateObj = new Date(deadlineInput);
        deadline = dateObj.toISOString();
    } else {
        status = 'no_task';
    }

    if (taskId) {
        // UPDATE Existing task
        const taskIdx = tasks.findIndex(t => t.id === taskId);
        if (taskIdx !== -1) {
            // Keep status if not changing task active nature
            let newStatus = tasks[taskIdx].status;
            if (newStatus === 'no_task' && deadline) {
                newStatus = 'pending';
            } else if (!deadline) {
                newStatus = 'no_task';
            }

            tasks[taskIdx] = {
                ...tasks[taskIdx],
                subject,
                teacher,
                title,
                description,
                deadline,
                format,
                links,
                classroomUrl,
                status: newStatus
            };
            
            showToast(`Завдання з предмета "${subject}" оновлено!`, 'success');
        }
    } else {
        // CREATE NEW task
        const newTask = {
            id: `task-${Date.now()}`,
            subject,
            teacher,
            title,
            description,
            deadline,
            format,
            links,
            classroomUrl,
            status
        };
        tasks.push(newTask);
        showToast(`Новий предмет "${subject}" успішно додано! 🚀`, 'success');
    }

    saveTasksToStorage();
    updateStats();
    renderTasks();
    closeFormModal();
    setRandomQuote();
}

// ==========================================================================
// Universal Grade & Sharing Logic (New Features)
// ==========================================================================

// 1. Welcome Setup Overlay Logic
function showWelcomeScreen() {
    welcomeOverlay.style.display = 'flex';
    
    // Bind buttons
    modeDemoBtn.onclick = () => {
        gradeName = 'Екстернат 8-А';
        localStorage.setItem('school_dashboard_grade_name', gradeName);
        gradeTitleEl.innerText = gradeName;
        
        tasks = [...DEFAULT_TASKS];
        saveTasksToStorage();
        
        welcomeOverlay.style.display = 'none';
        updateStats();
        renderTasks();
        startTimers();
        showToast('Завантажено демо-розклад 8-А класу! 📚', 'success');
    };
    
    modeBlankBtn.onclick = () => {
        // Open the editable grade name modal
        openGradeEditModal(true); // pass true for first run context
    };
}

// 2. Grade Title Customization Modal
let isSetupContext = false;

function openGradeEditModal(isFirstRun = false) {
    isSetupContext = isFirstRun;
    formGradeName.value = isFirstRun ? '' : gradeName;
    gradeModal.classList.add('open');
    formGradeName.focus();
}

function closeGradeEditModal() {
    gradeModal.classList.remove('open');
}

function handleGradeSubmit() {
    const inputVal = formGradeName.value.trim();
    if (!inputVal) {
        showToast('Будь ласка, введіть назву класу!', 'urgent');
        return;
    }
    
    gradeName = inputVal;
    localStorage.setItem('school_dashboard_grade_name', gradeName);
    gradeTitleEl.innerText = gradeName;
    
    closeGradeEditModal();
    
    if (isSetupContext) {
        // If it was first run setup, initialize clean canvas!
        tasks = [];
        saveTasksToStorage();
        welcomeOverlay.style.display = 'none';
        updateStats();
        renderTasks();
        startTimers();
        showToast(`Дашборд успішно створено для: "${gradeName}"! 🚀`, 'success');
        isSetupContext = false;
    } else {
        showToast(`Назву класу змінено на: "${gradeName}"! ✏️`, 'success');
    }
}

// 3. Sharing via URL hash logic (Base64 encoding/decoding)
function generateShareLink() {
    try {
        const shareData = {
            gradeName: gradeName,
            tasks: tasks
        };
        const jsonStr = JSON.stringify(shareData);
        // Securely encode cyrillic strings in Base64
        const base64 = btoa(unescape(encodeURIComponent(jsonStr)));
        const shareUrl = window.location.origin + window.location.pathname + '#share=' + base64;
        
        shareLinkInput.value = shareUrl;
        shareModal.classList.add('open');
        shareLinkInput.select();
    } catch (e) {
        console.error("Генерація посилання не вдалася", e);
        showToast('Помилка генерації посилання.', 'urgent');
    }
}

function closeShareModal() {
    shareModal.classList.remove('open');
}

function copyShareLink() {
    shareLinkInput.select();
    shareLinkInput.setSelectionRange(0, 99999); // for mobile devices
    
    try {
        navigator.clipboard.writeText(shareLinkInput.value);
        showToast('Посилання скопійовано! Надішліть його іншим 📋', 'success');
        
        // Visual button effect
        shareCopyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Скопійовано';
        setTimeout(() => {
            shareCopyBtn.innerHTML = '<i class="fa-solid fa-copy"></i> Копіювати';
        }, 2000);
    } catch (err) {
        // Fallback copy
        document.execCommand('copy');
        showToast('Посилання скопійовано! 📋', 'success');
    }
}

// Check URL Hash for imports
function checkShareHash() {
    if (!window.location.hash.startsWith('#share=')) return;
    
    try {
        const base64 = window.location.hash.split('#share=')[1];
        if (!base64) return;
        
        const decodedJson = decodeURIComponent(escape(atob(base64)));
        const shareData = JSON.parse(decodedJson);
        
        if (shareData && shareData.gradeName && Array.isArray(shareData.tasks)) {
            // Setup confirmation modal
            importClassName.innerText = shareData.gradeName;
            importConfirmModal.classList.add('open');
            
            // Bind actions
            importAcceptBtn.onclick = () => {
                tasks = shareData.tasks;
                gradeName = shareData.gradeName;
                
                // Save to Storage
                saveTasksToStorage();
                localStorage.setItem('school_dashboard_grade_name', gradeName);
                
                // Update UI
                gradeTitleEl.innerText = gradeName;
                importConfirmModal.classList.remove('open');
                welcomeOverlay.style.display = 'none'; // hide in case of first run import
                
                updateStats();
                renderTasks();
                startTimers();
                
                // Clear URL hash cleanly without reloading
                history.replaceState(null, document.title, window.location.pathname);
                showToast(`Успішно імпортовано розклад для: "${gradeName}"! 🎉`, 'success');
            };
            
            importCancelBtn.onclick = () => {
                importConfirmModal.classList.remove('open');
                history.replaceState(null, document.title, window.location.pathname);
                showToast('Імпортування скасовано.', 'info');
                
                // If they don't have tasks, show welcome screen again
                if (tasks.length === 0) {
                    showWelcomeScreen();
                }
            };
        }
    } catch (e) {
        console.error("Помилка імпортування з URL-хешу", e);
        showToast('Помилка розпізнавання посилання. Можливо, воно пошкоджене.', 'urgent');
        history.replaceState(null, document.title, window.location.pathname);
    }
}

// 4. JSON Import / Export Logic
function exportToJSON() {
    try {
        const shareData = {
            gradeName: gradeName,
            tasks: tasks
        };
        const dataStr = JSON.stringify(shareData, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const cleanGradeName = gradeName.replace(/[^a-zA-Z0-9а-яА-ЯіІїЇєЄґҐ]/g, '_');
        const exportFileDefaultName = `school_dashboard_${cleanGradeName}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        showToast('Файл розкладу успішно завантажено! 📥', 'success');
    } catch (e) {
        console.error("Експорт не вдався", e);
        showToast('Помилка експорту конфігурації.', 'urgent');
    }
}

function handleFileImport(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const data = JSON.parse(event.target.result);
            if (data && Array.isArray(data.tasks)) {
                tasks = data.tasks;
                if (data.gradeName) {
                    gradeName = data.gradeName;
                    localStorage.setItem('school_dashboard_grade_name', gradeName);
                    gradeTitleEl.innerText = gradeName;
                }
                
                saveTasksToStorage();
                updateStats();
                renderTasks();
                startTimers();
                
                showToast(`Файл розкладу для "${gradeName}" успішно імпортовано! 🚀`, 'success');
            } else {
                showToast('Невірний формат файлу розкладу.', 'urgent');
            }
        } catch (err) {
            console.error("Помилка читання JSON", err);
            showToast('Помилка зчитування файлу. Перевірте його цілісність.', 'urgent');
        }
    };
    reader.readAsText(file);
    // Reset file input value to allow uploading same file again
    e.target.value = '';
}

// 5. Complete Reset Logic
function resetData() {
    if (confirm('УВАГА! Ви дійсно бажаєте повністю очистити дашборд та скинути його до стартових демо-даних 8-А класу? Усі ваші зміни будуть видалені.')) {
        localStorage.removeItem('school_dashboard_tasks');
        localStorage.removeItem('school_dashboard_grade_name');
        showToast('Дані очищено. Перезавантаження...', 'info');
        
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }
}

// ==========================================================================
// Events Wire-up
// ==========================================================================
function setupEventListeners() {
    // Theme Switcher Click
    themeToggleBtn.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');
        if (isDark) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme_preference', 'light');
            showToast('Увімкнено світлу тему інтерфейсу ☀️', 'info');
        } else {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme_preference', 'dark');
            showToast('Увімкнено темну тему інтерфейсу 🌙', 'info');
        }
    });

    // Search Query Change
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderTasks();
    });

    // Sorting Dropdown Selector
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderTasks();
    });

    // Sidebar Category Filters click handlers
    document.querySelectorAll('#subject-filters li').forEach(li => {
        li.addEventListener('click', () => {
            document.querySelectorAll('#subject-filters li').forEach(item => item.classList.remove('active'));
            li.classList.add('active');
            
            activeFilter = li.getAttribute('data-filter');
            
            // Adjust title based on filter
            if (activeFilter === 'all') currentFilterTitle.innerText = 'Всі завдання та тести';
            else if (activeFilter === 'pending') currentFilterTitle.innerText = 'Очікують виконання';
            else if (activeFilter === 'completed') currentFilterTitle.innerText = 'Успішно виконані роботи';
            else if (activeFilter === 'no_task') currentFilterTitle.innerText = 'Предмети без активних завдань';
            
            renderTasks();
        });
    });

    // Click handlers on Stats panel widgets to quick filter
    document.getElementById('stat-urgent-btn').addEventListener('click', () => {
        // Clear sidebar filter highlight and set to custom state
        document.querySelectorAll('#subject-filters li').forEach(item => item.classList.remove('active'));
        activeFilter = 'urgent';
        currentFilterTitle.innerText = 'Термінові завдання (менше 24 годин)';
        renderTasks();
    });

    document.getElementById('stat-active-btn').addEventListener('click', () => {
        document.querySelectorAll('#subject-filters li').forEach(item => item.classList.remove('active'));
        const activeLi = document.querySelector('#subject-filters li[data-filter="pending"]');
        if (activeLi) activeLi.classList.add('active');
        
        activeFilter = 'pending';
        currentFilterTitle.innerText = 'Очікують виконання';
        renderTasks();
    });

    document.getElementById('stat-completed-btn').addEventListener('click', () => {
        document.querySelectorAll('#subject-filters li').forEach(item => item.classList.remove('active'));
        const activeLi = document.querySelector('#subject-filters li[data-filter="completed"]');
        if (activeLi) activeLi.classList.add('active');
        
        activeFilter = 'completed';
        currentFilterTitle.innerText = 'Успішно виконані роботи';
        renderTasks();
    });

    // Modal windows toggles
    viewModalClose.addEventListener('click', closeViewModal);
    
    // Close modals if user clicks outside of modal card
    window.addEventListener('click', (e) => {
        if (e.target === viewModal) closeViewModal();
        if (e.target === formModal) closeFormModal();
        if (e.target === gradeModal) closeGradeEditModal();
        if (e.target === shareModal) closeShareModal();
        if (e.target === importConfirmModal) {
            // Do not close confirmation modal on background click to prevent accidental dismissals
        }
    });

    // Add / Edit Task Modal triggers
    addTaskBtn.addEventListener('click', () => openEditFormModal());
    formModalClose.addEventListener('click', closeFormModal);
    document.getElementById('form-cancel-btn').addEventListener('click', closeFormModal);

    // Form dynamic fields add action
    addLinkFieldBtn.addEventListener('click', () => addLinkFormRow('', ''));

    // Form submission
    taskForm.addEventListener('submit', handleFormSubmit);

    // ======================================================================
    // New Feature Listeners
    // ======================================================================
    
    // Grade Name editing triggers
    editGradeBtn.addEventListener('click', () => openGradeEditModal(false));
    gradeTitleEl.addEventListener('click', () => openGradeEditModal(false));
    gradeModalClose.addEventListener('click', closeGradeEditModal);
    gradeCancelBtn.addEventListener('click', closeGradeEditModal);
    gradeSubmitBtn.addEventListener('click', handleGradeSubmit);
    
    // Sharing triggers
    sidebarShareBtn.addEventListener('click', generateShareLink);
    shareModalClose.addEventListener('click', closeShareModal);
    shareCopyBtn.addEventListener('click', copyShareLink);
    
    // JSON backup triggers
    sidebarExportBtn.addEventListener('click', exportToJSON);
    sidebarImportBtn.addEventListener('click', () => fileImportInput.click());
    fileImportInput.addEventListener('change', handleFileImport);
    
    // Complete reset trigger
    sidebarResetBtn.addEventListener('click', resetData);
}

// Launch application on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initApp);
