## **Day 1 – 项目初始化与统一环境搭建**

**任务清单：**

* [X] **环境准备与项目仓库搭建：**
  * [X] 在 GitHub 上创建 5 个独立仓库（Portfolio、Todo、Dashboard、Weather、Blog），或在单仓库内建立 5 个子目录。
  * [X] 确定前端框架（如 Vue3 + Vite 或 React）和 UI 框架（如 Naive UI/Ant Design）。
  * [X] 搭建开发环境，安装 Node.js、包管理工具（npm/yarn/pnpm）和相关 CLI 工具。
* [X] **项目模板初始化：**
  * [X] 使用命令行工具初始化每个项目的基础模板，建立基础目录结构（src、components、assets、pages 等）。
  * [X] 配置统一的 ESLint 和 Prettier，确保代码风格一致。
* [X] **UI 风格确定：**
  * [X] 在 Figma、Sketch 或在线工具上简单绘制统一的配色方案、字体及常用组件（如按钮、输入框、导航栏）的设计草图。
  * [X] 将设计规范整理成文档，便于后续每个项目参照。

**成果目标：**

* [X] 5 个项目的基础模板搭建完成，并且能在本地正常启动。
* [X] 有一份统一的 UI 设计文档/草图，为后续页面布局打下基础。

---

## **Day 2 – 个人作品集网站（Portfolio）开发**

**任务清单：**

* [ ] **路由与页面搭建：**
  * [ ] 设置路由（首页、关于、项目展示、博客、联系页），确保导航链接工作。
* [ ] **首页设计：**
  * [ ] 开发 Hero Banner 区域，添加背景图和简单动画（例如文字淡入效果）。
  * [ ] 填充自我介绍的占位内容（姓名、职业、技能亮点）。
* [ ] **其他页面骨架：**
  * [ ] 关于页：添加个人简介、技能列表、工作/项目经历的基本版块。
  * [ ] 项目展示页：以卡片形式放置 3-4 个项目占位，点击后能弹出详情或跳转。
  * [ ] 联系页：制作简单的联系表单（姓名、邮箱、留言）和社交媒体链接。
* [ ] **响应式测试：**
  * [ ] 在 Chrome 开发者工具中模拟不同屏幕尺寸，确保布局自适应。

**成果目标：**

* [ ] 实现 5 个页面的基础布局和路由跳转，具备初步的交互动画（可使用 CSS3 或简单 JS 动画）。
* [ ] 页面风格与设计文档一致，内容用占位符填充，待后续完善。

---

## **Day 3 – 任务管理工具（Todo/Task Manager）开发**

**任务清单：**

* [ ] **任务添加与展示：**
  * [ ] 开发任务输入组件，支持输入任务名称和描述，并能添加到列表中。
  * [ ] 实现任务列表组件，展示任务卡片（含任务名称、描述、完成状态）。
* [ ] **状态管理：**
  * [ ] 为每个任务添加完成/未完成的切换按钮（或复选框），更新状态并改变样式。
* [ ] **任务编辑与删除：**
  * [ ] 实现点击任务进入编辑状态，允许修改任务信息。
  * [ ] 添加删除按钮，能够删除任务，并同步更新状态。
* [ ] **拖拽排序功能：**
  * [ ] 集成拖拽库（如 react-beautiful-dnd 或 vue-draggable-next），实现任务卡片拖拽排序。
* [ ] **数据持久化：**
  * [ ] 利用 LocalStorage 实现任务数据的保存，确保刷新页面后任务列表依旧。

**成果目标：**

* [ ] 完成任务的增删改查功能，任务状态能实时切换；
* [ ] 用户可以通过拖拽改变任务顺序；
* [ ] 任务数据持久化后，刷新页面能保持数据不丢失。

---

## **Day 4 – 数据可视化仪表盘（Dashboard）开发**

**任务清单：**

* [ ] **仪表盘布局搭建：**
  * [ ] 设计并搭建页面整体布局（采用 CSS Grid/Flex），为 3 种图表预留位置（折线图、柱状图、饼图）。
* [ ] **图表组件集成：**
  * [ ] 选择并安装图表库（如 Chart.js 或 ECharts），分别创建折线图、柱状图和饼图组件。
  * [ ] 使用模拟数据渲染每个图表，保证数据正确显示。
* [ ] **数据交互设计：**
  * [ ] 增加时间维度选择（如下拉菜单或按钮组），用户点击后更新图表数据。
  * [ ] 实现简单的图表联动效果：例如，选择折线图数据后，其他图表自动过滤或更新。
* [ ] **实时数据模拟：**
  * [ ] 使用 setInterval 每 5~10 秒更新模拟数据，刷新图表展示实时数据变化。

**成果目标：**

* [ ] 仪表盘页面具备 3 种图表，数据正常显示；
* [ ] 用户可通过交互按钮改变数据视图，且有实时更新效果。

---

## **Day 5 – 天气查询应用（Weather App）开发**

**任务清单：**

* [ ] **API 接口对接：**
  * [ ] 注册 OpenWeatherMap（或其他天气 API），获取 API Key。
  * [ ] 开发城市搜索组件，监听输入变化，并通过 API 获取城市匹配列表（或预设常用城市）。
* [ ] **天气信息展示：**
  * [ ] 调用 API 获取当前天气数据（温度、湿度、风速、天气描述）并展示在页面上。
  * [ ] 显示天气图标和背景（根据天气情况切换样式）。
* [ ] **未来天气预报：**
  * [ ] 获取 5~7 天的天气预报数据，设计卡片或小图表展示每日天气信息。
* [ ] **地理定位功能：**
  * [ ] 使用 navigator.geolocation 获取用户当前位置，自动调用 API 显示本地天气。

**成果目标：**

* [ ] 实现城市搜索和天气展示功能，能显示当前天气和预报；
* [ ] 支持地理定位，自动展示用户所在位置的天气；
* [ ] 用户界面根据天气情况动态变化（背景图或颜色）。

---

## **Day 6 – 简易博客系统（Mini Blog）开发**

**任务清单：**

* [ ] **博客项目架构：**
  * [ ] 选择静态生成或 SSR 框架（如 Next.js、Gatsby 或 Nuxt.js），初始化博客项目。
  * [ ] 设计路由：文章列表页、文章详情页。
* [ ] **文章数据管理：**
  * [ ] 使用 Markdown 文件存储 3-5 篇示例文章，包含标题、摘要、发布时间和正文。
  * [ ] 集成 Markdown 解析库（如 remark/markdown-it），实现文章详情页的渲染和代码高亮。
* [ ] **文章列表页：**
  * [ ] 开发列表页面，显示文章卡片（标题、摘要、发布时间），支持点击跳转详情页。
* [ ] **评论系统（可选）：**
  * [ ] 集成第三方评论插件（如 Disqus）或模拟简单评论功能。
* [ ] **SEO 基础优化：**
  * [ ] 配置页面 meta 信息（标题、描述），确保对搜索引擎友好。

**成果目标：**

* [ ] 博客首页可展示文章列表，点击后跳转到详细页面并正确渲染 Markdown；
* [ ] 评论区域（或占位区）显示在文章详情页；
* [ ] 基础 SEO 信息配置完毕，项目能在本地正常预览。

---

## **Day 7 – 整体优化、调试与部署**

**任务清单：**

* [ ] **代码与组件优化：**
  * [ ] 检查各项目代码，拆分冗余组件，确保代码复用性和可维护性。
  * [ ] 清理调试代码，统一变量命名和注释说明。
* [ ] **性能调优：**
  * [ ] 进行页面性能测试（如 Chrome DevTools、Lighthouse），对图片、动画、资源加载进行优化。
  * [ ] 实现懒加载、代码分割等优化措施。
* [ ] **跨浏览器和响应式测试：**
  * [ ] 分别在 Chrome、Firefox、Safari 等浏览器中测试各项目的兼容性；
  * [ ] 模拟移动设备，确保响应式设计无问题。
* [ ] **文档与部署：**
  * [ ] 撰写每个项目的 README，整理开发思路、使用技术和安装/运行步骤。
  * [ ] 部署项目到 GitHub Pages、Vercel、Netlify 等平台，并测试线上效果。
  * [ ] 整理开发日志，记录遇到的问题和解决方案，形成项目总结。

**成果目标：**

* [ ] 各项目都完成性能与兼容性优化，BUG 已基本修复；
* [ ] 所有项目已部署上线，能通过公开链接访问；
* [ ] 完整的文档和 README 文件帮助面试官快速了解项目实现细节。
