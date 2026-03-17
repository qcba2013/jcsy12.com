// jcsy12.com 老师评论区加载脚本

// 全局 Disqus 配置
var disqus_shortname = 'qcba2013';

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('🦐 七年级 12 班网站已加载！');
    
    // 找到所有老师评论区的容器
    var teacherContainers = [
        {id: 'disqus_thread_homeroom', identifier: 'homeroom'},
        {id: 'disqus_thread_chinese', identifier: 'chinese'},
        {id: 'disqus_thread_math', identifier: 'math'},
        {id: 'disqus_thread_english', identifier: 'english'}
    ];
    
    // 为每个容器加载 Disqus
    teacherContainers.forEach(function(item) {
        var div = document.getElementById(item.id);
        if (div && div.innerHTML.trim() === '') {
            loadDisqus(div, item.identifier);
        }
    });
    
    console.log('✅ 评论区初始化完成');
});

// 加载 Disqus 函数
function loadDisqus(container, identifier) {
    // 设置 Disqus 配置
    var disqus_config = function() {
        this.page.url = window.location.href;
        this.page.identifier = identifier;
    };
    
    // 创建并添加脚本
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = 'https://' + disqus_shortname + '.disqus.com/embed.js';
    dsq.setAttribute('data-timestamp', +new Date());
    
    container.appendChild(dsq);
    
    console.log('已加载评论区：' + identifier);
}
