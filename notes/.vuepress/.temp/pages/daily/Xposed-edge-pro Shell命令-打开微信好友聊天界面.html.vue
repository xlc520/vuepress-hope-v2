<template><h1 id="xposed-edge-pro-shell命令-打开微信好友聊天界面" tabindex="-1"><a class="header-anchor" href="#xposed-edge-pro-shell命令-打开微信好友聊天界面" aria-hidden="true">#</a> Xposed-edge-pro Shell命令-打开微信好友聊天界面</h1>
<p><img src="http://image.coolapk.com/feed/2020/0205/17/1057386_2d292d14_5559_2018@988x631.png.m.jpg" alt="img" loading="lazy"></p>
<p>本教程框架图</p>
<p>首先你要是不会用软件运行shell命令先看我这个帖子：<a href="https://www.coolapk.com/feed/16017769?shareKey=NWQ4NjU5MzdiZmZjNWUzYThkMDk~&amp;shareUid=1057386&amp;shareFrom=com.coolapk.market_10.0.1" target="_blank" rel="noopener noreferrer">查看链接<ExternalLinkIcon/></a></p>
<p>正文开始</p>
<p>Shell命令01_打开微信好友聊天界面</p>
<h2 id="一、核心思想" tabindex="-1"><a class="header-anchor" href="#一、核心思想" aria-hidden="true">#</a> 一、核心思想</h2>
<h3 id="方法一-适用于国内版" tabindex="-1"><a class="header-anchor" href="#方法一-适用于国内版" aria-hidden="true">#</a> 方法一：适用于国内版</h3>
<p>如果只有这一个需求，能用的话可以止步，不看方法二了</p>
<p>微信号：聊天界面点好友头像显示的微信账号（Chat_User之后有空格），
am start -n com.tencent.mm/com.tencent.mm.ui.chatting.ChattingUI --ei Chat_Mode 1 --es Chat_User 微信号</p>
<p><img src="http://image.coolapk.com/feed/2020/0205/17/1057386_827281e4_5559_2019@1080x1920.jpeg.m.jpg" alt="img" loading="lazy"></p>
<p>微信号查看</p>
<h3 id="方法二-适用于谷歌版或者方法一不行的和打开桌面图标" tabindex="-1"><a class="header-anchor" href="#方法二-适用于谷歌版或者方法一不行的和打开桌面图标" aria-hidden="true">#</a> 方法二：适用于谷歌版或者方法一不行的和打开桌面图标</h3>
<p>获取intent值，用am start &quot;intent:intent值&quot; 命令启动，以下就是方法二的介绍</p>
<h2 id="二、安卓7及以下-shell命令打开微信好友聊天界面" tabindex="-1"><a class="header-anchor" href="#二、安卓7及以下-shell命令打开微信好友聊天界面" aria-hidden="true">#</a> 二、安卓7及以下 Shell命令打开微信好友聊天界面</h2>
<h3 id="_1-聊天好友添加至桌面" tabindex="-1"><a class="header-anchor" href="#_1-聊天好友添加至桌面" aria-hidden="true">#</a> 1.聊天好友添加至桌面</h3>
<p>在这我以我的微信好友“小号”为例（因为备注小号）</p>
<p>微信好友聊天界面→头像→右上角三个点→添加到桌面</p>
<p><img src="http://image.coolapk.com/feed/2020/0205/17/1057386_d4d59be5_5559_2021@1080x1920.jpeg.m.jpg" alt="img" loading="lazy"></p>
<p>添加微信好友到桌面</p>
<h3 id="_2-找桌面数据库-db里的intent值" tabindex="-1"><a class="header-anchor" href="#_2-找桌面数据库-db里的intent值" aria-hidden="true">#</a> 2.找桌面数据库.db里的intent值</h3>
<p>这个就分不同的手机桌面了，安卓7一般在/data/data/桌面程序包名/databases/下</p>
<p>我举一个例子吧，小米手机安卓7桌面的数据库文件夹是</p>
<p>/data/data/com.miui.home/databases/</p>
<p>这个文件夹里一般最大的.db 文件就是当前桌面的布局数据文件，这里建议用 <a href="http://www.coolapk.com/apk/com.mixplorer" target="_blank" rel="noopener noreferrer">【MiXplorer文件管理器】<ExternalLinkIcon/></a>来打开文件，滑</p>
<p>到最下方找到intent值，我这里用相机这个代替，长按#Intent那个，并复制出来</p>
<p><img src="http://image.coolapk.com/feed/2020/0205/17/1057386_d2e95e8a_5559_2023@1080x1920.jpeg.m.jpg" alt="img" loading="lazy"></p>
<p>复制相机的intent值</p>
<p>得到该值</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>\#Intent;action=android.intent.action.MAIN;category=android.intent.category.LAUNCHER;launchFlags=0x10200000;component=com.android.camera/.Camera;end
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_3-组合命令并运行" tabindex="-1"><a class="header-anchor" href="#_3-组合命令并运行" aria-hidden="true">#</a> 3.组合命令并运行</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>am start "intent:#Intent;action=android.intent.action.MAIN;category=android.intent.category.LAUNCHER;launchFlags=0x10200000;component=com.android.camera/.Camera;end"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>即可打开相机，（我这里用相机代替了，别在这和我说为什么不对）</p>
<h2 id="三、安卓8及以上-shell命令打开微信好友聊天界面" tabindex="-1"><a class="header-anchor" href="#三、安卓8及以上-shell命令打开微信好友聊天界面" aria-hidden="true">#</a> 三、安卓8及以上 Shell命令打开微信好友聊天界面</h2>
<h3 id="_1-聊天好友添加至桌面-同-二-1" tabindex="-1"><a class="header-anchor" href="#_1-聊天好友添加至桌面-同-二-1" aria-hidden="true">#</a> 1.聊天好友添加至桌面（同 二.1 ）</h3>
<p>我这里添加的是我的 小号 ，（备注就是小号）</p>
<h3 id="_2-复制-data-system-ce-0-shortcut-service-shortcuts-xml下有关字段" tabindex="-1"><a class="header-anchor" href="#_2-复制-data-system-ce-0-shortcut-service-shortcuts-xml下有关字段" aria-hidden="true">#</a> 2.复制/data/system_ce/0/shortcut_service/shortcuts.xml下有关字段</h3>
<p>MT管理器打开这个文件，搜索“小号”（备注是什么就搜什么)，复制shortcut id的值</p>
<p><img src="http://image.coolapk.com/feed/2020/0205/17/1057386_b96f2d78_5559_2025@1920x1080.jpeg.m.jpg" alt="img" loading="lazy"></p>
<p>复制shortcut id的值，包括shortcut_</p>
<h3 id="_3-修改字段为命令并运行" tabindex="-1"><a class="header-anchor" href="#_3-修改字段为命令并运行" aria-hidden="true">#</a> 3.修改字段为命令并运行</h3>
<p>将该值替换下列命令里的两个地方</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>am start "intent:#Intent;action=com.tencent.mm.action.BIZSHORTCUT;launchFlags=0x4000000;package=com.tencent.mm;B.LauncherUI.From.Biz.Shortcut=true;S.app_shortcut_custom_id=替换;S.LauncherUI.Shortcut.Username=替换;end"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这样就得到需要的命令了。</p>
<p>----------------------------------------</p>
<h2 id="四、拓展" tabindex="-1"><a class="header-anchor" href="#四、拓展" aria-hidden="true">#</a> 四、拓展</h2>
<p>1.其实三就是对二的另一种解决方式，安卓的一些机制，导致不能用二来启动桌面图标了</p>
<p>2.如果你足够细心的话，就能发现三最后那个模板是怎么来的了，在那个shortcuts.xml文件里找到那个关键字再往下找一下，修改如下图，如果有这个思想，其他的也可以拓展了</p>
<p><img src="http://image.coolapk.com/feed/2020/0205/17/1057386_8234e2f3_5559_2026@832x268.jpeg.m.jpg" alt="img" loading="lazy"></p>
<p>大写字母和.代替一些代码</p>
<p>3.shortcuts.xml文件里有许多值得推敲的命令，安卓开发者的话可以参考一下
4.对于shortcuts.xml，发散思维的话参考这个软件 <a href="http://www.coolapk.com/apk/com.absinthe.anywhere_" target="_blank" rel="noopener noreferrer">【Anywhere- 快捷方式】<ExternalLinkIcon/></a></p>
</template>
