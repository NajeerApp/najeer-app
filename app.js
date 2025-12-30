// app.js - ملف JavaScript الأساسي
console.log('تطبيق نجير جاهز!');

// دالة البحث
function searchItems() {
    const searchInput = document.querySelector('input[type="text"]');
    if (searchInput) {
        const query = searchInput.value;
        if (query) {
            alert(`سيتم البحث عن: ${query}`);
            // هنا سيتم تنفيذ البحث الفعلي
        }
    }
}

// دالة إضافة عرض
function addOffer() {
    const title = document.querySelector('#add input[type="text"]');
    const price = document.querySelector('#add input[type="number"]');
    
    if (title && price && title.value && price.value) {
        alert(`تم إضافة عرض: ${title.value} بسعر ${price.value} ريال`);
        title.value = '';
        price.value = '';
    } else {
        alert('يرجى ملء جميع الحقول');
    }
}

// تهيئة الأحداث عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('الصفحة محملة بنجاح');
    
    // أضف أحداث للأزرار
    const searchBtn = document.querySelector('.btn');
    if (searchBtn && searchBtn.innerHTML.includes('بحث')) {
        searchBtn.addEventListener('click', searchItems);
    }
    
    // يمكنك إضافة المزيد من الأحداث هنا
});
