# 七年级 12 班班级网站

🦐 由 小虾 AI 助手 协助创建

## 📁 文件结构

```
jcsy12-website/
├── index.html      # 主页
├── css/
│   └── style.css   # 样式文件
├── js/
│   └── main.js     # 交互脚本
└── README.md       # 说明文档
```

## 🚀 如何上传到 GitHub

### 方法 1：网页直接上传（推荐新手）

1. 打开你的仓库：https://github.com/qcba2013/jcsy12.com
2. 点击 **"uploading an existing file"**
3. 把以下文件/文件夹拖进去：
   - `index.html`
   - `css` 文件夹
   - `js` 文件夹
4. 在底部输入提交信息，比如："Initial website"
5. 点击 **"Commit changes"**

### 方法 2：使用 Git 命令

```bash
# 克隆仓库到本地
git clone https://github.com/qcba2013/jcsy12.com.git
cd jcsy12.com

# 复制网站文件到仓库目录
# (把 index.html, css/, js/ 复制进去)

# 提交并推送
git add .
git commit -m "Initial website"
git push
```

## ⚙️ 启用 GitHub Pages

1. 进入仓库的 **Settings**（设置）
2. 左侧菜单找到 **Pages**
3. **Source** 选择 `main` 分支
4. 点击 **Save**
5. 等待 1-3 分钟
6. 网站地址会显示在页面上

## 📝 自定义内容

### 修改班级信息

打开 `index.html`，搜索以下内容并修改：

- `七年级 12 班` → 你的实际班级
- `青春如火，超越自我；十二十二，奋勇争先！` → 你的班级口号
- `待定 - 欢迎补充` → 班主任、教室位置等信息

### 添加同学信息

在 `index.html` 中找到 `members-grid` 部分，复制以下模板：

```html
<div class="member-card">
    <div class="avatar">👦</div>  <!-- 可以用 👧 或 🧑 -->
    <h4>同学姓名</h4>
    <p class="role">职务/特点</p>
    <p class="intro">个人介绍</p>
</div>
```

### 添加照片

1. 创建 `images` 文件夹
2. 放入照片文件（比如 `sports_day.jpg`）
3. 在 HTML 中修改照片墙部分：

```html
<div class="photo-card">
    <img src="images/sports_day.jpg" alt="运动会" style="width:100%;border-radius:10px;">
    <p>运动会</p>
</div>
```

### 添加重要日期

在 `calendar-list` 部分添加：

```html
<div class="calendar-item">
    <div class="date-badge">
        <span class="day">15</span>
        <span class="month">10 月</span>
    </div>
    <div class="event-info">
        <h4>秋季运动会</h4>
        <p>学校操场，全体同学参加</p>
    </div>
</div>
```

## 🎨 修改颜色

打开 `css/style.css`，修改顶部的颜色变量：

```css
:root {
    --primary-color: #4a90d9;    /* 主色调 */
    --secondary-color: #67b26f;  /* 辅助色 */
    --accent-color: #ff6b6b;     /* 强调色 */
}
```

## 💡 小贴士

- 修改后记得重新上传到 GitHub
- GitHub Pages 更新可能需要几分钟生效
- 可以在本地双击 `index.html` 预览效果
- 建议用手机和电脑都测试一下显示效果

## 💬 配置留言板（来必力）

### 步骤 1：注册来必力账号

1. 访问 https://www.livere.com
2. 点击右上角 **"注册"**
3. 可以用 QQ、微信或邮箱注册

### 步骤 2：创建评论城市

1. 登录后，进入 **"管理后台"**
2. 点击 **"添加城市"**（City）
3. 填写信息：
   - 城市名称：`七年级 12 班`
   - 城市 URL：`https://qcba2013.github.io/jcsy12.com/`
4. 点击创建

### 步骤 3：获取 UID

1. 创建后，你会看到 **"代码获取"** 页面
2. 找到类似这样的代码：
   ```html
   data-uid="MTIzNDU2Nzg5MA=="
   ```
3. 复制 `MTIzNDU2Nzg5MA==` 这串字符（就是你的 UID）

### 步骤 4：替换代码

1. 打开 `index.html`
2. 搜索 `YOUR_UID_HERE`
3. 替换成你的真实 UID（有两处需要替换）
4. 保存并重新上传到 GitHub

### 步骤 5：测试

1. 等待 GitHub Pages 更新（1-2 分钟）
2. 打开网站，滚动到留言板
3. 尝试发第一条评论！

---

## 🆘 遇到问题？

1. 网站不显示？检查 GitHub Pages 是否启用
2. 样式不对？检查 CSS 文件路径是否正确
3. 图片不显示？检查图片路径和文件名
4. 留言板不显示？检查 UID 是否正确替换

---

**Created with ❤️ by 小虾 AI & 魏千辰**
