// 班级网站交互脚本

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('🦐 七年级 12 班网站已加载！');
    
    // 添加滚动动画
    addScrollAnimations();
    
    // 导航栏滚动效果
    addNavbarScrollEffect();
});

// 滚动动画
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察所有卡片元素
    const cards = document.querySelectorAll('.about-card, .member-card, .photo-card, .calendar-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// 导航栏滚动效果
function addNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'linear-gradient(135deg, #3a7bc8, #5a9a5f)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, #4a90d9, #67b26f)';
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });
}

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 同学卡片点击效果（预留功能）
document.querySelectorAll('.member-card:not(.add-member)').forEach(card => {
    card.addEventListener('click', function() {
        const name = this.querySelector('h4').textContent;
        alert(`👋 你好！这是 ${name} 的个人页面（功能开发中...）`);
    });
});

// 添加同学卡片点击
document.querySelector('.add-member')?.addEventListener('click', function() {
    alert('📝 联系网站管理员（魏千辰）添加新同学信息！');
});

// 照片墙点击效果（预留功能）
document.querySelectorAll('.photo-card').forEach(card => {
    card.addEventListener('click', function() {
        const eventName = this.querySelector('p').textContent;
        alert(`📸 ${eventName} 照片集（功能开发中...）`);
    });
});

// 欢迎消息（首次访问）
let hasVisited = sessionStorage.getItem('hasVisited');
if (!hasVisited) {
    setTimeout(() => {
        console.log('✨ 欢迎来到七年级 12 班的家园！');
    }, 1000);
    sessionStorage.setItem('hasVisited', 'true');
}

// 动态年份更新
const footerYear = document.querySelector('.footer p:last-child');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `七年级 12 班 © ${currentYear} - 我们的青春纪念`;
}

// 添加"回到顶部"按钮（可选功能）
function createBackToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '⬆️';
    btn.className = 'back-to-top';
    btn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(135deg, #4a90d9, #67b26f);
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s, transform 0.3s;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    `;
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.body.appendChild(btn);
    
    window.addEventListener('scroll', () => {
        btn.style.opacity = window.pageYOffset > 300 ? '1' : '0';
        btn.style.transform = window.pageYOffset > 300 ? 'scale(1)' : 'scale(0.8)';
    });
}

// 启用回到顶部按钮
createBackToTop();

console.log('🎉 网站交互功能已就绪！');

// 可折叠卡片功能
document.addEventListener('DOMContentLoaded', function() {
    const collapsibleCards = document.querySelectorAll('.about-card.collapsible');
    
    collapsibleCards.forEach(card => {
        const header = card.querySelector('.collapsible-header');
        
        header.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 切换当前卡片的展开/收起状态
            const isActive = card.classList.contains('active');
            
            // 可选：是否同时关闭其他卡片（手风琴效果）
            // 如果要手风琴效果，取消下面这行的注释
            // collapsibleCards.forEach(c => c.classList.remove('active'));
            
            if (isActive) {
                card.classList.remove('active');
                console.log('折叠卡片已收起');
            } else {
                card.classList.add('active');
                console.log('折叠卡片已展开');
            }
        });
    });
    
    console.log('✅ 可折叠卡片功能已加载');
});
