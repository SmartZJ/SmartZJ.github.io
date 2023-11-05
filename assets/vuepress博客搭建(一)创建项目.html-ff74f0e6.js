import{_ as a,r as i,o as t,c as d,a as e,b as s,d as r,e as l}from"./app-ef3f1377.js";const p={},c=e("h1",{id:"vuepress博客搭建-一-创建项目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress博客搭建-一-创建项目","aria-hidden":"true"},"#"),s(" vuepress博客搭建(一)创建项目")],-1),o=e("p",null,"该篇博客将记录我学习博客搭建的过程。以下是官方文档：",-1),u={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},v=l(`<h2 id="依赖环境" tabindex="-1"><a class="header-anchor" href="#依赖环境" aria-hidden="true">#</a> 依赖环境</h2><p>VuePress发展的2023年10月已经有三个版本v0.x\\v1.x\\v2.x，它们具体有什么不一样我没有去深究。</p><p>以下的记录都是围绕v2.x版本展开</p><p>根据官方文档了解到主要的依赖环境是</p><p>Node.js v16.19.0+</p><p>安装工具：</p><p><code>npm/yarn/npm</code> 怎么顺手怎么来</p><p>依赖环境安装教程网上已经很多了在此就不再记录</p><h2 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装" aria-hidden="true">#</a> 手动安装</h2><p>我用的安装工具为npm</p><ol><li><p>创建并进入一个新的目录</p></li><li><p>初始化项目</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git init
npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将Vuepress安装为本地依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -D vuepress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>在 package.json 中添加一些 scripts</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
 <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将默认的临时目录和缓存目录添加到 .gitignore 文件中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &#39;node_modules&#39; &gt;&gt; .gitignore
echo &#39;.temp&#39; &gt;&gt; .gitignore
echo &#39;.cache&#39; &gt;&gt; .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>新建文件夹docs 创建你的第一篇文档README.dm</p></li><li><p><img src="https://zj-imges-1257736100.cos.ap-chengdu.myqcloud.com/blog_img/md_first.png" alt="catalogue"> 运行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>界面如下： <img src="https://zj-imges-1257736100.cos.ap-chengdu.myqcloud.com/blog_img/hello_vuepress.png" alt="Hello Vuepress"></p></li></ol><p>到此完成项目创建</p><h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初次运行后.vuepress会被自动创建</p><p>.vuepress是非常重要的文件夹，所有 VuePress 相关的文件都将会被放在这里。</p><p>一个 VuePress 网站必要的配置文件是 .vuepress/config.js，它应该导出一个 JavaScript 对象：</p><p>根据目录结构在对应位置创建config.js并输入以下代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  title: &#39;Hello VuePress&#39;,
  description: &#39;Just playing around&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此博客的基本搭建就已经完成。</p><p>（更详细的配置属性请见官网文档）</p>`,21);function m(g,h){const n=i("ExternalLinkIcon");return t(),d("div",null,[c,o,e("p",null,[e("a",u,[s("vuepress文档"),r(n)])]),v])}const x=a(p,[["render",m],["__file","vuepress博客搭建(一)创建项目.html.vue"]]);export{x as default};
