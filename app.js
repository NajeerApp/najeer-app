// بيانات التطبيق
let currentUser = null;
let equipmentData = [];
let servicesData = [];

// عناصر DOM
const navMenu = document.getElementById('navMenu');
const menuToggle = document.getElementById('menuToggle');
const equipmentContainer = document.getElementById('equipmentContainer');
const servicesContainer = document.getElementById('servicesContainer');
const offerForm = document.getElementById('offerForm');
const showOfferFormBtn = document.getElementById('showOfferForm');
const offerFormContainer = document.getElementById('offerFormContainer');

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 تطبيق نجير جاهز للعمل!');
    
    // تحميل البيانات
    loadSampleData();
    
    // عرض البيانات
    displayEquipment();
    displayServices();
    
    // إعداد الأحداث
    setupEventListeners();
    
    // تأثيرات تفاعلية
    initAnimations();
});

// تحميل بيانات تجريبية
function loadSampleData() {
    equipmentData = [
        {
            id: 1,
            title: "مثقاب كهربائي احترافي",
            description: "مثقاب قوي 750 واط مع مجموعة ملحقات كاملة لجميع الأعمال المنزلية والورش الصغيرة. مثالي للثقب في الخشب والمعدن والجدران.",
            price: 35,
            location: "حي النزهة، الرياض",
            category: "tools",
            rating: 4.7,
            image: "drill",
            featured: true
        },
        {
            id: 2,
            title: "مكنسة كهربائية صناعية",
            description: "مكنسة قوة 2000 واط مع فلتر HEPA، مناسبة للمنازل والمكاتب والمحلات التجارية. تأتي مع ملحقات متعددة.",
            price: 50,
            location: "حي العليا، الرياض",
            category: "cleaning",
            rating: 4.5,
            image: "vacuum",
            featured: true
        },
        {
            id: 3,
            title: "منشار كهربائي محمول",
            description: "منشار حديث لقطع الخشب والمعدن، مع شفرات احتياطية وعلبة حمل. مناسب للورش الصغيرة والهواة.",
            price: 45,
            location: "حي الروضة، جدة",
            category: "construction",
            rating: 4.8,
            image: "saw",
            featured: true
        },
        {
            id: 4,
            title: "مضخة مياه كهربائية",
            description: "مضخة قوية لرفع المياه، مناسبة للفلل والحدائق والمزارع الصغيرة. قدرة 1 حصان مع ضمان سنة.",
            price: 70,
            location: "حي السلام، الدمام",
            category: "tools",
            rating: 4.6,
            image: "pump",
            featured: false
        }
    ];

    servicesData = [
        {
            id: 101,
            title: "فني تكييف معتمد",
            description: "صيانة وتركيب جميع أنواع التكييفات المركزية والشباك والمكيفات المتحركة. خدمة 24 ساعة للطوارئ.",
            price: 150,
            location: "حي الملقا، الرياض",
            category: "electrical",
            rating: 4.9,
            image: "ac",
            provider: "أحمد السعدي",
            experience: "8 سنوات",
            featured: true
        },
        {
            id: 102,
            title: "كهربائي منازل",
            description: "حل جميع مشاكل الكهرباء، تركيب وصيانة كاملة، توصيلات جديدة، إصلاح أعطال، تركيب كاميرات.",
            price: 100,
            location: "حي العزيزية، مكة",
            category: "electrical",
            rating: 4.7,
            image: "electrician",
            provider: "محمد القحطاني",
            experience: "6 سنوات",
            featured: true
        },
        {
            id: 103,
            title: "سباك محترف",
            description: "إصلاح تسريبات المياه، تركيب سخانات وصيانات عامة، تركيب حمامات ومطابخ، شبكات الصرف الصحي.",
            price: 120,
            location: "حي السلام، الدمام",
            category: "plumbing",
            rating: 4.8,
            image: "plumber",
            provider: "سعود الفوزان",
            experience: "10 سنوات",
            featured: true
        },
        {
            id: 104,
            title: "نجار أثاث منزلي",
            description: "صناعة وتصميم الأثاث المنزلي، إصلاح الكراسي والطاولات، تركيب المطابخ والأدراج.",
            price: 90,
            location: "حي النهضة، جدة",
            category: "construction",
            rating: 4.6,
            image: "carpenter",
            provider: "خالد الحربي",
            experience: "5 سنوات",
            featured: false
        }
    ];
}

// عرض المعدات
function displayEquipment() {
    if (!equipmentContainer) return;
    
    const featuredEquipment = equipmentData.filter(item => item.featured);
    
    equipmentContainer.innerHTML = featuredEquipment.map(item => `
        <div class="equipment-card" data-id="${item.id}">
            <div class="card-image">
                <i class="fas fa-${getEquipmentIcon(item.category)}"></i>
            </div>
            <div class="card-content">
                <div class="card-title">
                    ${item.title}
                    <div class="card-rating">
                        ${generateStars(item.rating)}
                        <span>${item.rating}</span>
                    </div>
                </div>
                <p class="card-description">${item.description}</p>
                <div class="card-price">${item.price} ريال/يوم</div>
                <div class="card-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${item.location}
                </div>
                <button class="card-btn" onclick="rentEquipment(${item.id})">
                    <i class="fas fa-shopping-cart"></i>
                    احجز الآن
                </button>
            </div>
        </div>
    `).join('');
}

// عرض الخدمات
function displayServices() {
    if (!servicesContainer) return;
    
    const featuredServices = servicesData.filter(service => service.featured);
    
    servicesContainer.innerHTML = featuredServices.map(service => `
        <div class="service-card" data-id="${service.id}">
            <div class="card-image">
                <i class="fas fa-${getServiceIcon(service.category)}"></i>
            </div>
            <div class="card-content">
                <div class="card-title">
                    ${service.title}
                    <div class="card-rating">
                        ${generateStars(service.rating)}
                        <span>${service.rating}</span>
                    </div>
                </div>
                <p class="card-description">${service.description}</p>
                <div class="provider-info">
                    <i class="fas fa-user-tie"></i>
                    ${service.provider} - ${service.experience} خبرة
                </div>
                <div class="card-price">${service.price} ريال</div>
                <div class="card-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${service.location}
                </div>
                <button class="card-btn" onclick="bookService(${service.id})">
                    <i class="fas fa-calendar-check"></i>
                    احجز الخدمة
                </button>
            </div>
        </div>
    `).join('');
}

// إنشاء النجوم للتقييم
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHTML = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    
    return starsHTML;
}

// الحصول على أيقونة المعدات
function getEquipmentIcon(category) {
    const icons = {
        'tools': 'tools',
        'construction': 'hammer',
        'cleaning': 'broom',
        'gardening': 'leaf'
    };
    return icons[category] || 'toolbox';
}

// الحصول على أيقونة الخدمات
function getServiceIcon(category) {
    const icons = {
        'electrical': 'bolt',
        'plumbing': 'faucet',
        'construction': 'hard-hat',
        'cleaning': 'hands-wash'
    };
    return icons[category] || 'user-cog';
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // تبديل القائمة على الأجهزة المحمولة
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // إظهار نموذج إضافة العرض
    if (showOfferFormBtn) {
        showOfferFormBtn.addEventListener('click', () => {
            offerFormContainer.scrollIntoView({ behavior: 'smooth' });
            offerFormContainer.style.animation = 'pulse 0.5s';
            setTimeout(() => {
                offerFormContainer.style.animation = '';
            }, 500);
        });
    }
    
    // إرسال نموذج العرض
    if (offerForm) {
        offerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addNewOffer();
        });
    }
    
    // البحث
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }
    
    // تسجيل الدخول
    const authButtons = document.querySelectorAll('.auth-btn, .register-btn');
    authButtons.forEach(btn => {
        btn.addEventListener('click', handleAuth);
    });
    
    // التنقل السلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // إغلاق القائمة على الأجهزة المحمولة
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
}

// البحث
function performSearch() {
    const searchInput = document.querySelector('.search-input');
    const categorySelect = document.querySelector('.filter-select');
    const locationInput = document.querySelector('.location-input');
    
    const query = searchInput.value.trim();
    const category = categorySelect.value;
    const location = locationInput.value.trim();
    
    let results = [];
    
    if (query || category || location) {
        // بحث في المعدات
        const equipmentResults = equipmentData.filter(item => {
            const matchesQuery = !query || 
                item.title.includes(query) || 
                item.description.includes(query) ||
                item.category.includes(query);
            
            const matchesCategory = !category || item.category === category;
            const matchesLocation = !location || item.location.includes(location);
            
            return matchesQuery && matchesCategory && matchesLocation;
        });
        
        // بحث في الخدمات
        const serviceResults = servicesData.filter(service => {
            const matchesQuery = !query || 
                service.title.includes(query) || 
                service.description.includes(query) ||
                service.provider.includes(query) ||
                service.category.includes(query);
            
            const matchesCategory = !category || service.category === category;
            const matchesLocation = !location || service.location.includes(location);
            
            return matchesQuery && matchesCategory && matchesLocation;
        });
        
        results = [...equipmentResults, ...serviceResults];
        
        if (results.length > 0) {
            showNotification(`تم العثور على ${results.length} نتيجة`, 'success');
            
            // في نسخة متقدمة: عرض النتائج في قسم مخصص
            console.log('نتائج البحث:', results);
            
            // تحميل صفحة نتائج البحث
            setTimeout(() => {
                window.location.href = `search.html?q=${encodeURIComponent(query)}&category=${category}&location=${encodeURIComponent(location)}`;
            }, 500);
        } else {
            showNotification('لم يتم العثور على نتائج', 'info');
        }
    } else {
        showNotification('يرجى إدخال كلمات البحث', 'warning');
    }
}

// إضافة عرض جديد
function addNewOffer() {
    const offerType = document.querySelector('input[name="offerType"]:checked').value;
    const title = document.getElementById('offerTitle').value.trim();
    const description = document.getElementById('offerDescription').value.trim();
    const price = parseInt(document.getElementById('offerPrice').value);
    const location = document.getElementById('offerLocation').value.trim();
    
    if (!title || !price || !location) {
        showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }
    
    const newItem = {
        id: Date.now(),
        title,
        description,
        price,
        location,
        category: offerType === 'equipment' ? 'tools' : 'services',
        rating: 5.0,
        featured: true,
        image: offerType === 'equipment' ? 'tools' : 'user-cog',
        provider: offerType === 'service' ? 'أنت' : undefined,
        experience: offerType === 'service' ? 'مبتدئ' : undefined
    };
    
    if (offerType === 'equipment') {
        equipmentData.unshift(newItem);
        displayEquipment();
        showNotification(`تم إضافة معدة "${title}" بنجاح!`, 'success');
    } else {
        servicesData.unshift(newItem);
        displayServices();
        showNotification(`تم إضافة خدمة "${title}" بنجاح!`, 'success');
    }
    
    // إعادة تعيين النموذج
    offerForm.reset();
    
    // التمرير لرؤية العرض الجديد
    setTimeout(() => {
        const targetSection = offerType === 'equipment' ? '#equipment' : '#services';
        const targetElement = document.querySelector(targetSection);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, 300);
}

// حجز معدات
function rentEquipment(id) {
    const item = equipmentData.find(i => i.id === id);
    if (!item) return;
    
    showModal('حجز المعدة', `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="modal-details">
            <p><strong>السعر:</strong> ${item.price} ريال/يوم</p>
            <p><strong>الموقع:</strong> ${item.location}</p>
            <p><strong>التقييم:</strong> ${generateStars(item.rating)} ${item.rating}</p>
        </div>
        <div class="booking-form">
            <label>عدد الأيام:</label>
            <input type="number" id="rentDays" min="1" max="30" value="1" class="modal-input">
            <label>تاريخ البدء:</label>
            <input type="date" id="rentDate" class="modal-input">
        </div>
    `, () => {
        const days = parseInt(document.getElementById('rentDays').value) || 1;
        const total = item.price * days;
        const date = document.getElementById('rentDate').value || 'اليوم';
        
        showNotification(`تم حجز "${item.title}" لمدة ${days} أيام بإجمالي ${total} ريال`, 'success');
        console.log('تفاصيل الحجز:', { item, days, total, date });
    });
}

// حجز خدمة
function bookService(id) {
    const service = servicesData.find(s => s.id === id);
    if (!service) return;
    
    showModal('حجز الخدمة', `
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <div class="modal-details">
            <p><strong>مقدم الخدمة:</strong> ${service.provider}</p>
            <p><strong>الخبرة:</strong> ${service.experience}</p>
            <p><strong>السعر:</strong> ${service.price} ريال</p>
            <p><strong>الموقع:</strong> ${service.location}</p>
            <p><strong>التقييم:</strong> ${generateStars(service.rating)} ${service.rating}</p>
        </div>
        <div class="booking-form">
            <label>التاريخ المطلوب:</label>
            <input type="date" id="serviceDate" class="modal-input">
            <label>الوقت المفضل:</label>
            <select id="serviceTime" class="modal-input">
                <option value="morning">صباحاً (8 ص - 12 ظ)</option>
                <option value="afternoon">بعد الظهر (12 ظ - 4 م)</option>
                <option value="evening">مساءً (4 م - 8 م)</option>
            </select>
        </div>
    `, () => {
        const date = document.getElementById('serviceDate').value || 'أقرب وقت';
        const time = document.getElementById('serviceTime').value;
        
        showNotification(`تم حجز خدمة "${service.title}" مع ${service.provider}`, 'success');
        console.log('تفاصيل حجز الخدمة:', { service, date, time });
    });
}

// إدارة المصادقة
function handleAuth() {
    if (!currentUser) {
        showModal('تسجيل الدخول / إنشاء حساب', `
            <div class="auth-tabs">
                <button class="auth-tab active" onclick="switchAuthTab('login')">تسجيل الدخول</button>
                <button class="auth-tab" onclick="switchAuthTab('register')">إنشاء حساب</button>
            </div>
            <div id="loginForm" class="auth-form">
                <input type="tel" id="loginPhone" placeholder="رقم الجوال" class="modal-input">
                <input type="password" id="loginPassword" placeholder="كلمة المرور" class="modal-input">
                <button onclick="loginUser()" class="modal-btn primary">تسجيل الدخول</button>
            </div>
            <div id="registerForm" class="auth-form" style="display: none;">
                <input type="text" id="registerName" placeholder="الاسم الكامل" class="modal-input">
                <input type="tel" id="registerPhone" placeholder="رقم الجوال" class="modal-input">
                <input type="email" id="registerEmail" placeholder="البريد الإلكتروني" class="modal-input">
                <input type="password" id="registerPassword" placeholder="كلمة المرور" class="modal-input">
                <select id="registerType" class="modal-input">
                    <option value="client">عميل (أريد الاستئجار)</option>
                    <option value="provider">مزود (أريد التأجير/الخدمات)</option>
                </select>
                <button onclick="registerUser()" class="modal-btn primary">إنشاء حساب</button>
            </div>
        `, null, false);
    } else {
        if (confirm('هل تريد تسجيل الخروج؟')) {
            currentUser = null;
            showNotification('تم تسجيل الخروج بنجاح', 'info');
            updateAuthUI();
        }
    }
}

function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    
    document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
    document.getElementById('registerForm').style.display = tab === 'register' ? 'block' : 'none';
}

function loginUser() {
    const phone = document.getElementById('loginPhone').value;
    const password = document.getElementById('loginPassword').value;
    
    if (phone && password) {
        currentUser = {
            name: 'مستخدم تجريبي',
            phone: phone,
            type: 'client'
        };
        
        closeModal();
        showNotification('تم تسجيل الدخول بنجاح!', 'success');
        updateAuthUI();
    } else {
        showNotification('يرجى ملء جميع الحقول', 'error');
    }
}

function registerUser() {
    const name = document.getElementById('registerName').value;
    const phone = document.getElementById('registerPhone').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const type = document.getElementById('registerType').value;
    
    if (name && phone && email && password) {
        currentUser = {
            name: name,
            phone: phone,
            email: email,
            type: type
        };
        
        closeModal();
        showNotification(`مرحباً ${name}! تم إنشاء حسابك بنجاح`, 'success');
        updateAuthUI();
    } else {
        showNotification('يرجى ملء جميع الحقول', 'error');
    }
}

function updateAuthUI() {
    const authButtons = document.querySelectorAll('.auth-btn');
    authButtons.forEach(btn => {
        if (currentUser) {
            btn.innerHTML = `<i class="fas fa-user-check"></i> ${currentUser.name}`;
            btn.classList.add('logged-in');
        } else {
            btn.innerHTML = '<i class="fas fa-user"></i> تسجيل دخول';
            btn.classList.remove('logged-in');
        }
    });
}

// إظهار الإشعارات
function showNotification(message, type = 'info') {
    // إزالة أي إشعارات سابقة
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // إنشاء إشعار جديد
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // إضافة أنماط CSS
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        max-width: 500px;
        margin: 0 auto;
    `;
    
    // إضافة أنيميشن
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateY(-100px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 18px;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // إزالة تلقائية بعد 5 ثوان
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        'success': 'check-circle',
        'error': 'exclamation-circle',
        'warning': 'exclamation-triangle',
        'info': 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function getNotificationColor(type) {
    const colors = {
        'success': 'var(--primary)',
        'error': '#EF4444',
        'warning': '#F59E0B',
        'info': 'var(--secondary-light)'
    };
    return colors[type] || 'var(--secondary-light)';
}

// إظهار نموذج
function showModal(title, content, onConfirm, showCancel = true) {
    // إزالة أي نموذج سابق
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) {
        existingModal.remove();
    }
    
    // إنشاء النموذج
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close" onclick="closeModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
            <div class="modal-footer">
                ${showCancel ? `<button class="modal-btn secondary" onclick="closeModal()">إلغاء</button>` : ''}
                <button class="modal-btn primary" onclick="handleConfirm()">تأكيد</button>
            </div>
        </div>
    `;
    
    // إضافة أنماط CSS
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9998;
        animation: fadeIn 0.3s ease-out;
    `;
    
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .modal {
            background: white;
            border-radius: var(--radius);
            width: 90%;
            max-width: 500px;
            max-height: 80vh;
            overflow-y: auto;
            animation: scaleIn 0.3s ease-out;
        }
        @keyframes scaleIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .modal-header {
            padding: 20px;
            border-bottom: 1px solid var(--gray);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .modal-header h3 {
            margin: 0;
            color: var(--secondary);
        }
        .modal-close {
            background: none;
            border: none;
            font-size: 20px;
            color: var(--dark);
            cursor: pointer;
        }
        .modal-body {
            padding: 20px;
        }
        .modal-footer {
            padding: 20px;
            border-top: 1px solid var(--gray);
            display: flex;
            justify-content: flex-end;
            gap: 10px;
        }
        .modal-input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 2px solid var(--gray);
            border-radius: 8px;
            font-family: 'Cairo', sans-serif;
        }
        .modal-btn {
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            font-family: 'Cairo', sans-serif;
        }
        .modal-btn.primary {
            background: linear-gradient(135deg, var(--primary), var(--primary-light));
            color: var(--secondary);
        }
        .modal-btn.secondary {
            background: var(--gray);
            color: var(--dark);
        }
        .auth-tabs {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }
        .auth-tab {
            flex: 1;
            padding: 10px;
            border: none;
            background: var(--light);
            border-radius: 8px;
            cursor: pointer;
            font-family: 'Cairo', sans-serif;
        }
        .auth-tab.active {
            background: var(--primary);
            color: var(--secondary);
            font-weight: 600;
        }
        .auth-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        .modal-details {
            background: var(--light);
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
        }
        .booking-form {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    `;
    
    document.head.appendChild(modalStyle);
    document.body.appendChild(modal);
    
    // حفظ دالة التأكيد
    window.handleConfirm = () => {
        if (onConfirm) onConfirm();
        closeModal();
    };
    
    // منع تمرير النقر خارج النموذج
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // منع تمرير الصفحة عند فتح النموذج
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => modal.remove(), 300);
    }
    document.body.style.overflow = 'auto';
}

// تأثيرات تفاعلية
function initAnimations() {
    // تأثيرات عند التمرير
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // مراقبة العناصر المراد تحريكها
    document.querySelectorAll('.step, .equipment-card, .service-card').forEach(el => {
        observer.observe(el);
    });
    
    // إضافة أنيميشن CSS
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        .animate-in {
            animation: fadeUp 0.6s ease-out forwards;
        }
        @keyframes fadeUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .step, .equipment-card, .service-card {
            opacity: 0;
        }
        
        /* تأثيرات النقر */
        button, .card-btn, .nav-link {
            transition: all 0.2s ease;
        }
        button:active, .card-btn:active {
            transform: scale(0.98);
        }
        
        /* تأثيرات التمرير */
        ::-webkit-scrollbar {
            width: 10px;
        }
        ::-webkit-scrollbar-track {
            background: var(--light);
        }
        ::-webkit-scrollbar-thumb {
            background: var(--primary);
            border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: var(--primary-dark);
        }
    `;
    document.head.appendChild(animationStyle);
    
    // تحميل الصفحة
    setTimeout(() => {
        showNotification('مرحباً بك في منصة نجير! ابدأ رحلة الاستئجار والعرض الآن', 'info');
    }, 1000);
}

// خدمة تقدير الأسعار (خاصية إضافية)
function estimatePrice(itemType, category, duration = 1) {
    const basePrices = {
        'equipment': {
            'tools': 30,
            'construction': 50,
            'cleaning': 40,
            'gardening': 35
        },
        'service': {
            'electrical': 120,
            'plumbing': 100,
            'construction': 90,
            'cleaning': 80
        }
    };
    
    const basePrice = basePrices[itemType]?.[category] || 50;
    return basePrice * duration;
}

// تصدير للاستخدام في وحدة التحكم
window.appData = {
    equipmentData,
    servicesData,
    currentUser,
    estimatePrice
};

console.log('🚀 تطبيق نجير جاهز! استمتع بالتجربة...');
