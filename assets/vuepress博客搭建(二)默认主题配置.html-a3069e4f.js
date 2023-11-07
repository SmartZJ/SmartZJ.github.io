import{_ as e,r as p,o as t,c as i,a as n,b as o,e as l,d as s}from"./app-34d619ee.js";const c={},r=s(`<h1 id="vuepress博客搭建-二-默认主题配置" tabindex="-1"><a class="header-anchor" href="#vuepress博客搭建-二-默认主题配置" aria-hidden="true">#</a> vuepress博客搭建(二)默认主题配置</h1><h2 id="默认主题安装" tabindex="-1"><a class="header-anchor" href="#默认主题安装" aria-hidden="true">#</a> 默认主题安装</h2><p>创建项目只是第一步，想让博客网站更加完善还需要默认主题的帮助。</p><p>安装 <code>theme-default</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i @vuepress/theme-default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完成后在 <code>/docs/.vuepress/config.js</code>文件中做如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { defaultTheme } from &#39;@vuepress/theme-default&#39;

export default {
  theme: defaultTheme({
    // 在这里进行主题配置
  }),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：theme属性和原来config中的其他属性平级。</p><p>主题配置属性可详见以下文档：</p>`,9),d={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html",target:"_blank",rel:"noopener noreferrer"},u=s(`<h2 id="导航栏配置" tabindex="-1"><a class="header-anchor" href="#导航栏配置" aria-hidden="true">#</a> 导航栏配置</h2><p>默认主题可以让我们的博客更加美观，且提供了我们对导航栏和侧边栏的自定义能力，我们首先来看看导航栏的配置。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>navbar
类型： false | (NavbarItem | NavbarGroup | string)[]
默认值： []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由文档可见导航栏传入的是一个NavbarGroup数组对象，数组里是NavbarItem，设置为 false 可以禁用导航栏。</p><ul><li>NavbarItem 对象应该有一个 text 字段和一个 link 字段，还有一个可选的 activeMatch 字段。</li><li>NavbarGroup 对象应该有一个 text 字段和一个 children 字段。 children 字段同样是一个 导航栏数组 。</li><li>字符串应为目标页面文件的路径。它将会被转换为 NavbarItem 对象，将页面标题作为 text ，将页面路由路径作为 link</li></ul><p>配置示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">/</span>group<span class="token operator">/</span>foo<span class="token punctuation">.</span>mdexport <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// NavbarItem</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Foo&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/foo/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// NavbarGroup</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Group&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/group/foo.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/group/bar.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 字符串 - 页面文件路径</span>
      <span class="token string">&#39;/bar/README.md&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置后网页右上角就出现导航</p><p><img src="https://zj-imges-1257736100.cos.ap-chengdu.myqcloud.com/blog_img%2Fnavbar_show.png" alt="navigation_Preview"></p><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h3><p>在此补充一下vuepress的路由规则</p><p>vuepress将docs 目录作为 sourceDir，当路由只指定到文件夹时，vuepress会自动寻找到文件夹中的README.md 或 index.md作为路由节点。通过以下表格可以帮助你更直观的理解这一规则：</p><br><table><thead><tr><th>相对路径</th><th>路由路径</th></tr></thead><tbody><tr><td>/README.md 或者 /index.md</td><td>/</td></tr><tr><td>/foo/index.md</td><td>/foo/</td></tr><tr><td>/group/foo.md</td><td>/group/foo.html</td></tr></tbody></table><p>注：默认配置下， README.md 和 index.md 都会被转换成 index.html ，并且其对应的路由路径都是由斜杠结尾的。</p><br><p>我们回到导航栏配置，可以看见带有text属性的NavbarItem展示的是text中的值，带有children属性的NavbarItem是可以展开的，但是子选项展示的是相对路径，这是因为没有创建对应的文件，当有对应的文件的时候，NavbarItem会展示md文件Frontmatter中的title属性值，就像这样： <img src="https://zj-imges-1257736100.cos.ap-chengdu.myqcloud.com/blog_img%2Fnavbar_info.jpg" alt="navigation_Path"></p><h3 id="配置优化-选看" tabindex="-1"><a class="header-anchor" href="#配置优化-选看" aria-hidden="true">#</a> 配置优化（选看）</h3><p>config.js会随着页面的丰富属性会变的越来越多，那么既然配置文件是用js写的我们就可以将导航配置抽离出来。</p><p>在.vuepress文件夹下创建configs文件夹，文件夹中创建navbar.js，将navbar配置抽离</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">const</span> navBarConfig <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// NavbarItem</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Foo&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/foo/&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// NavbarGroup</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Group&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/group/foo.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/group/bar.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 字符串 - 页面文件路径</span>
    <span class="token string">&#39;/bar/README.md&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> navBarConfig<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>config.js文件中修改</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span>
<span class="token keyword">import</span>  navBarConfig  <span class="token keyword">from</span> <span class="token string">&#39;../.vuepress/configs/navbar.js&#39;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Hello vuepress&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;个人博客网站&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 在这里进行配置</span>
        <span class="token literal-property property">navbar</span><span class="token operator">:</span> navBarConfig<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样改造之后就可以在configs中单独修改navbar的配置了。</p><h2 id="侧边栏配置" tabindex="-1"><a class="header-anchor" href="#侧边栏配置" aria-hidden="true">#</a> 侧边栏配置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sidebar
类型:false | &#39;auto&#39; | SidebarConfigArray | SidebarConfigObject
默认值:&#39;auto&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置为 <code>false</code> 可以禁用侧边栏。</p><p>如果你设置为 <code>&#39;auto&#39;</code>，侧边栏会根据页面标题自动生成。</p><p>分为全局和页面两种设置方法，优先级页面设置&gt;全局设置。</p><p>为了手动配置侧边栏元素，你可以将其设置为 <em>侧边栏数组</em> ，其中的每个元素是一个 <code>SidebarItem</code> 对象或者一个字符串：</p><ul><li><code>SidebarItem</code> 对象应该有一个 <code>text</code> 字段，有一个可选的 <code>link</code> 字段、一个可选的 <code>children</code> 字段和一个可选的 <code>collapsible</code> 字段。 <code>children</code> 字段同样是一个 <em>侧边栏数组</em> 。 <code>collapsible</code> 字段来控制它是否可折叠。</li><li>字符串应为目标页面文件的路径。它将会被转换为 <code>SidebarItem</code> 对象，将页面标题作为 <code>text</code> ，将页面路由路径作为 <code>link</code> ，并根据页面小标题自动生成 <code>children</code> 。</li></ul><h3 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h3><p>全局设置示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 侧边栏数组</span>
    <span class="token comment">// 所有页面会使用相同的侧边栏</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//SidebarItem</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&#39;前端&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span><span class="token string">&#39;/frontend/&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token comment">// SidebarItem</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&#39;vuepress博客搭建(一)创建项目&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">link</span><span class="token operator">:</span><span class="token string">&#39;/frontend/vuepress/vuepress博客搭建(一)创建项目.md&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 字符串 - 页面文件路径</span>
            <span class="token string">&#39;/frontend/vuepress/vuepress博客搭建(二)默认主题配置.md&#39;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token comment">// 字符串 - 页面文件路径   </span>
    <span class="token string">&#39;/frontend/vuepress/vuepress博客搭建(二)默认主题配置.md&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置好后页面是这样的</p><p><img src="https://zj-imges-1257736100.cos.ap-chengdu.myqcloud.com/blog_img/sidebar配置.png" alt="配置后的侧边栏"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>			<span class="token punctuation">{</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&#39;vuepress博客搭建(一)创建项目&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">link</span><span class="token operator">:</span><span class="token string">&#39;/frontend/vuepress/vuepress博客搭建(一)创建项目.md&#39;</span>
            <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种配置方式文章大纲无法展开，建议只在配置网站链接时使用。文章的配置还是建议使用 <strong>字符串 - 页面文件路径</strong> 这样的方式配置。</p><p>以上全局配置的方法会让所有页面的侧边栏都是一个样，当我们有多种类型的文章的时候显然这样就不够用了。</p><p>所以侧边栏还有一种进阶的配置方式，可以在不同子路径下的页面会展示不同的侧边栏。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 侧边栏数组</span>
    <span class="token comment">// 不同子路径下的页面会使用不同的侧边栏</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//前端相关文章子路径</span>
    <span class="token string-property property">&#39;/frontend/&#39;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&#39;vuepress&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// 可折叠的侧边栏</span>
            <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token string">&#39;/frontend/vuepress/vuepress博客搭建(一)创建项目.md&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;/frontend/vuepress/vuepress博客搭建(二)默认主题配置.md&#39;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
     <span class="token comment">//咖啡相关文章子路径</span>
    <span class="token string-property property">&#39;/coffee/&#39;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&#39;咖啡&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token string">&#39;/coffee/认识咖啡.md&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;/coffee/咖啡品种.md&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;/coffee/冲泡器具.md&#39;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一组配置前都有一个<strong>key</strong>这是用于匹配路径前缀，这样当我们进入不同类型文章的文件夹下，侧边栏就会自动切换侧边栏配置，就像这样：</p><p><img src="https://zj-imges-1257736100.cos.ap-chengdu.myqcloud.com/blog_img/sidebar2.png" alt="前端侧边栏"></p><p><img src="https://zj-imges-1257736100.cos.ap-chengdu.myqcloud.com/blog_img/sidebar1.png" alt="咖啡侧边栏"></p><h3 id="页面配置" tabindex="-1"><a class="header-anchor" href="#页面配置" aria-hidden="true">#</a> 页面配置</h3><p>​ 页面配置是在每个页面头部进行配置优先级大于全局配置，如果文章页面有配置侧边栏则该配置会直接覆盖全局配置，配置方法如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//md文件头部</span>
<span class="token operator">--</span><span class="token operator">-</span>
<span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
     <span class="token string">&#39;/coffee/认识咖啡.md&#39;</span><span class="token punctuation">,</span>
     <span class="token string">&#39;/coffee/咖啡品种.md&#39;</span><span class="token punctuation">,</span>
     <span class="token string">&#39;/coffee/冲泡器具.md&#39;</span>
<span class="token punctuation">]</span>
<span class="token operator">--</span><span class="token operator">-</span>
<span class="token comment">//md文件内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置参数参考全局配置，但我个人尝试发现text属性好像不怎么管用，所以就直接放文章的路径，此配置应该也不会常用做了解即可。</p><p>​ 到此导航栏配置加上侧边栏配置基本使用就已经全部介绍了，简单的使用博客我个人觉得已经是够用了。更多功能就等我用一段时间再扩展吧。</p>`,49);function v(m,k){const a=p("ExternalLinkIcon");return t(),i("div",null,[r,n("p",null,[n("a",d,[o("主题配置文档"),l(a)])]),u])}const g=e(c,[["render",v],["__file","vuepress博客搭建(二)默认主题配置.html.vue"]]);export{g as default};
