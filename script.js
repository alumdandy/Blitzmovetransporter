function switchLanguage(lang) {
    // تحديث النصوص
    document.querySelectorAll('[data-ar][data-de]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });

    // تحديث اتجاه الصفحة
    document.body.className = lang === 'de' ? 'de' : '';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // تحديث زر اللغة النشط
    document.getElementById('ar-btn').classList.toggle('active', lang === 'ar');
    document.getElementById('de-btn').classList.toggle('active', lang === 'de');
}

// تعيين اللغة الافتراضية (العربية)
switchLanguage('ar');
