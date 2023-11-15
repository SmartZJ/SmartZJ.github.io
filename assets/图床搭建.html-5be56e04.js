import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as n,a as e,b as o,e as p,d as t}from"./app-58aecc79.js";const a={},g=t(`<h2 id="了解" tabindex="-1"><a class="header-anchor" href="#了解" aria-hidden="true">#</a> 了解</h2><pre><code>开始学习写博客之后经常会遇到文章内嵌的图片无法加载的问题，试过picGo+Gitee|Github、免费图床网站后，都觉得图片加载的速度不太理想，直到了解并尝试了picGo+腾讯云对象存储这个方案之后，果然给钱的才是最好的😂。
</code></pre><h2 id="准备对象存储桶" tabindex="-1"><a class="header-anchor" href="#准备对象存储桶" aria-hidden="true">#</a> 准备对象存储桶</h2><h3 id="注册一个腾讯云账号" tabindex="-1"><a class="header-anchor" href="#注册一个腾讯云账号" aria-hidden="true">#</a> 注册一个腾讯云账号</h3>`,4),h={href:"https://cloud.tencent.com/",target:"_blank",rel:"noopener noreferrer"},d=t('<p>进入官网注册账号</p><h3 id="开通对象存储服务" tabindex="-1"><a class="header-anchor" href="#开通对象存储服务" aria-hidden="true">#</a> 开通对象存储服务</h3><p>搜索对象存储服务</p><img src="https://zj-imges-1257736100.cos.ap-chengdu.myqcloud.com/blog_img/搜索.png"><p>开通对象存储服务，新用户是可以免费试用半年的，即使到期了费用也不会很高，好像买资源包是10GB容量的存储桶半年10元的样子。</p><p>一下是官方提示使用流程：</p><img src="https://zj-imges-1257736100.cos.ap-chengdu.myqcloud.com/blog_img/流程.png"><h3 id="创建存储桶" tabindex="-1"><a class="header-anchor" href="#创建存储桶" aria-hidden="true">#</a> 创建存储桶</h3><p>点击创建存储桶</p><img src="https://zj-imges-1257736100.cos.ap-chengdu.myqcloud.com/blog_img/create.png"><p>选择所属地、填写名称、选择访问权限，完成创建。</p><p>后面的高级可选配置，不懂就不动直接下一步到创建完成。（反正我是不懂😅）</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>私有读写权限会导致图片文件无法直接访问，但是存储桶内的文件夹可以单独设置访问权限，为了安全起见还是建议设置为私有读写。</p></div><p>返回存储桶列表就可以看到我们创建的存储桶了。</p><img src="https://zj-imges-1257736100.cos.ap-chengdu.myqcloud.com/blog_img/complete.png"><p>点击存储桶进入管理界面：</p><img src="https://zj-imges-1257736100.cos.ap-chengdu.myqcloud.com/blog_img/管理.png"><p>创建一个存放图片的文件夹，设置文件夹权限为私有写公有读。</p><img src="https://zj-imges-1257736100.cos.ap-chengdu.myqcloud.com/blog_img/dir.png"><img src="https://zj-imges-1257736100.cos.ap-chengdu.myqcloud.com/blog_img/setting.png"><p>这样设置后放到这个文件夹的所有图片就可以被访问了。</p><h2 id="picgo" tabindex="-1"><a class="header-anchor" href="#picgo" aria-hidden="true">#</a> picGo</h2><p>picGo是一个图片上传工具，主要功能就是简化我们的上传流程和获取图片地址的流程。</p><p>没有这个工具单独使用腾讯云的对象存储桶来管理图片也是可以的。</p><p>picGo也提供了一个免费的图床，但是我没有用过，就不过多介绍了。</p><h3 id="下载安装picgo" tabindex="-1"><a class="header-anchor" href="#下载安装picgo" aria-hidden="true">#</a> 下载安装picGO</h3>',26),m={href:"https://picgo.github.io/PicGo-Doc/",target:"_blank",rel:"noopener noreferrer"},l={href:"https://picgo.github.io/PicGo-Doc/zh/guide/#%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"},u=t('<p>下载安装这里我就偷个懒提供个地址。</p><h3 id="配置腾讯云cos" tabindex="-1"><a class="header-anchor" href="#配置腾讯云cos" aria-hidden="true">#</a> 配置腾讯云COS</h3><p>安装好picGo点击图床设置，点击腾讯云COS：</p><img src="https://zj-imges-1257736100.cos.ap-chengdu.myqcloud.com/blog_img/picGoSetting.png"><p>必填参数有**SecretId、SecretKey、Bucket、AppId、**存储区域，下面将详细描述如何获取这些参数。</p><p>在腾讯云控制台的搜索栏搜索访问密钥，点击控制台入口的访问密钥。</p><img src="https://zj-imges-1257736100.cos.ap-chengdu.myqcloud.com/blog_img/getkeys.png"><img src="https://zj-imges-1257736100.cos.ap-chengdu.myqcloud.com/blog_img/keys.png"><p>在这里我们可以获取<strong>SecretId、SecretKey</strong>两个参数。</p><p>回到存储桶列表点击存储桶的配置管理：</p><img src="https://zj-imges-1257736100.cos.ap-chengdu.myqcloud.com/blog_img/buckm.png"><p>查看基本信息：</p><img src="https://zj-imges-1257736100.cos.ap-chengdu.myqcloud.com/blog_img/buckinfo.png"><p>存储桶名就是<strong>Bucket</strong>， <strong>AppId</strong>就是存储桶名 <strong>-</strong> 后面的那一串数字，<strong>存储区域</strong>就是所属地域最后那个括号中的内容。</p><p>至此我们就获得了配置腾讯云COS所有的参数。</p><p>由于我们的存储桶权限是私有读写，直接把图片丢进去会出现图片无法访问的情况，所以还需要指定存储路径，存储路径就以前面图示为准直接填入创建的文件夹名就可以了。</p><p>到这里图床搭建就全部完成，建议结合文档多测试一下刚刚搭建的图床。</p>',17);function _(b,f){const c=r("ExternalLinkIcon");return s(),n("div",null,[g,e("p",null,[e("a",h,[o("腾讯云"),p(c)])]),d,e("p",null,[e("a",m,[o("picGo文档"),p(c)])]),e("p",null,[e("a",l,[o("picGo下载地址"),p(c)])]),u])}const x=i(a,[["render",_],["__file","图床搭建.html.vue"]]);export{x as default};
