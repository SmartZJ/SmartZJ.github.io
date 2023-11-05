import{_ as p,r as i,o,c as r,a as n,b as t,d as e,e as s}from"./app-ef3f1377.js";const l={},c=s(`<h1 id="vuepress博客搭建-二-默认主题配置" tabindex="-1"><a class="header-anchor" href="#vuepress博客搭建-二-默认主题配置" aria-hidden="true">#</a> vuepress博客搭建(二)默认主题配置</h1><h2 id="默认主题安装" tabindex="-1"><a class="header-anchor" href="#默认主题安装" aria-hidden="true">#</a> 默认主题安装</h2><p>创建项目只是第一步，想让博客网站更加完善还需要默认主题的帮助。</p><p>安装 <code>theme-default</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i @vuepress/theme-default
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置后网页右上角就出现导航</p>`,8),v={href:"https://imgse.com/i/piZO3Lj",target:"_blank",rel:"noopener noreferrer"},m=n("img",{src:"https://z1.ax1x.com/2023/10/27/piZO3Lj.jpg",alt:"piZO3Lj.jpg"},null,-1),k=s('<h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h3><p>在此补充一下vuepress的路由规则</p><p>vuepress将docs 目录作为 sourceDir，当路由只指定到文件夹时，vuepress会自动寻找到文件夹中的README.md 或 index.md作为路由节点。通过以下表格可以帮助你更直观的理解这一规则：</p><br><table><thead><tr><th>相对路径</th><th>路由路径</th></tr></thead><tbody><tr><td>/README.md 或者 /index.md</td><td>/</td></tr><tr><td>/foo/index.md</td><td>/foo/</td></tr><tr><td>/group/foo.md</td><td>/group/foo.html</td></tr></tbody></table><p>注：默认配置下， README.md 和 index.md 都会被转换成 index.html ，并且其对应的路由路径都是由斜杠结尾的。</p><br>',7),b={href:"https://imgse.com/i/piZOYoq",target:"_blank",rel:"noopener noreferrer"},h=n("img",{src:"https://z1.ax1x.com/2023/10/27/piZOYoq.jpg",alt:"piZOYoq.jpg"},null,-1),g=s(`<h3 id="配置优化-选看" tabindex="-1"><a class="header-anchor" href="#配置优化-选看" aria-hidden="true">#</a> 配置优化（选看）</h3><p>config.js会随着页面的丰富属性会变的越来越多，那么既然配置文件是用js写的我们就可以将导航配置抽离出来。</p><p>在.vuepress文件夹下创建configs文件夹，文件夹中创建navbar.js，将navbar配置抽离</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">const</span> navBarConfig <span class="token operator">=</span> <span class="token punctuation">[</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不配置的情况下默认读取md文档中的标题作为侧边栏显示的数据</p>`,10);function f(x,_){const a=i("ExternalLinkIcon");return o(),r("div",null,[c,n("p",null,[n("a",d,[t("主题配置文档"),e(a)])]),u,n("p",null,[n("a",v,[m,e(a)])]),k,n("p",null,[t("我们回到导航栏配置，可以看见带有text属性的NavbarItem展示的是text中的值，带有children属性的NavbarItem是可以展开的，但是子选项展示的是相对路径，这是因为没有创建对应的文件，当有对应的文件的时候，NavbarItem会展示md文件Frontmatter中的title属性值，就像这样： "),n("a",b,[h,e(a)])]),g])}const j=p(l,[["render",f],["__file","vuepress博客搭建(二)默认主题配置.html.vue"]]);export{j as default};
