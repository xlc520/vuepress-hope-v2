<template><h1 id="mysql压缩版安装配置" tabindex="-1"><a class="header-anchor" href="#mysql压缩版安装配置" aria-hidden="true">#</a> MySQL压缩版安装配置</h1>
<h2 id="_1-下载" tabindex="-1"><a class="header-anchor" href="#_1-下载" aria-hidden="true">#</a> 1 下载</h2>
<p>官网：https://www.mysql.com/
最新版下载地址：https://dev.mysql.com/downloads/mysql/
多版本下载地址：https://downloads.mysql.com/archives/community/
在这里，我使用的是MySQL8.0.19解压缩版，附上下载链接：https://cdn.mysql.com/archives/mysql-8.0/mysql-8.0.19-winx64.zip</p>
<p>此时的MySQL版本已经更新到8.0.23，所以我需要进入多版本链接进行下载。</p>
<p><strong>注意：</strong></p>
<ul>
<li>旧版本中存在漏洞</li>
<li><img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/image-20220115155838758.png" alt="image-20220115155838758" loading="lazy"></li>
</ul>
<h2 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装" aria-hidden="true">#</a> 2 安装</h2>
<p>1.我们提前创建好解压目录：</p>
<p>找到刚才下载的压缩包，复制到我们上一步创建的解压目录下：</p>
<p>右键进行解压，解压后的目录如下图所示：</p>
<p><img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDU3NzU0Mw.png" alt="img" loading="lazy"></p>
<p>接下来创建我们的数据库文件存放位置，这里我在mysql解压目录的同级目录下创建了<code>databases</code>文件夹，作为数据库存放目录</p>
<p>接下来进行初始化安装：
用管理员身份打开cmd命令，并进入到mysql解压目录下的bin目录，如：<code>D:\ProgramFiles\MySQL8\bin</code></p>
<p><strong>2、创建一个名为my.ini的文件：</strong></p>
<p><img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/ZmFuZ3poZW5naGVpdGk.png" alt="img" loading="lazy"></p>
<p><strong>3、修改my.ini文件：</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
<span class="token comment"># 设置mysql客户端默认字符集</span>
<span class="token keyword">default</span><span class="token operator">-</span><span class="token keyword">character</span><span class="token operator">-</span><span class="token keyword">set</span><span class="token operator">=</span>utf8
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token comment"># 设置3306端口</span>
port <span class="token operator">=</span> <span class="token number">3306</span>
<span class="token comment"># 设置mysql的安装目录</span>
basedir <span class="token operator">=</span> D:\\Program Files\\mysql\\
<span class="token comment"># 设置mysql数据库的数据的存放目录</span>
datadir <span class="token operator">=</span> D:\\Program Files\\mysql\\<span class="token keyword">data</span>
<span class="token comment"># 允许最大连接数</span>
max_connections<span class="token operator">=</span><span class="token number">20</span>
<span class="token comment"># 服务端使用的字符集默认为8比特编码的latin1字符集</span>
<span class="token keyword">character</span><span class="token operator">-</span><span class="token keyword">set</span><span class="token operator">-</span>server<span class="token operator">=</span>utf8
<span class="token comment"># 创建新表时将使用的默认存储引擎</span>
<span class="token keyword">default</span><span class="token operator">-</span>storage<span class="token operator">-</span><span class="token keyword">engine</span><span class="token operator">=</span><span class="token keyword">INNODB</span>
<span class="token comment"># 创建模式</span>
sql_mode <span class="token operator">=</span> NO_ENGINE_SUBSTITUTION<span class="token punctuation">,</span>STRICT_TRANS_TABLES



<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token comment"># 设置服务端使⽤用的字符集为utf-8</span>
<span class="token keyword">character</span><span class="token operator">-</span><span class="token keyword">set</span><span class="token operator">-</span>server<span class="token operator">=</span>utf8
<span class="token comment"># 绑定IPv4地址</span>
bind<span class="token operator">-</span>address <span class="token operator">=</span> <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>
<span class="token comment"># 设置mysql的端⼝口号</span>
port <span class="token operator">=</span> <span class="token number">3306</span>
<span class="token comment"># 设置mysql的安装⽬目录</span>
basedir<span class="token operator">=</span>D:<span class="token operator">/</span>ProgramFiles<span class="token operator">/</span>MySQL8
<span class="token comment"># 设置mysql数据库的数据的存放⽬目录</span>
datadir<span class="token operator">=</span>D:<span class="token operator">/</span>ProgramFiles<span class="token operator">/</span>MySQL8<span class="token operator">/</span><span class="token keyword">data</span>
<span class="token comment"># 允许最⼤大连接数</span>
max_connections<span class="token operator">=</span><span class="token number">20</span>
<span class="token comment"># 创建新表时将使⽤用的默认存储引擎</span>
<span class="token keyword">default</span><span class="token operator">-</span>storage<span class="token operator">-</span><span class="token keyword">engine</span><span class="token operator">=</span><span class="token keyword">INNODB</span>
<span class="token keyword">default</span><span class="token operator">-</span>time_zone<span class="token operator">=</span><span class="token string">'+8:00'</span>
<span class="token comment"># 设置mysql以及数据库的默认编码</span>
<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
<span class="token keyword">default</span><span class="token operator">-</span><span class="token keyword">character</span><span class="token operator">-</span><span class="token keyword">set</span><span class="token operator">=</span>utf8
<span class="token punctuation">[</span>mysql<span class="token punctuation">.</span>server<span class="token punctuation">]</span>
<span class="token keyword">default</span><span class="token operator">-</span><span class="token keyword">character</span><span class="token operator">-</span><span class="token keyword">set</span><span class="token operator">=</span>utf8
<span class="token comment"># 设置客户端默认字符集</span>
<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
<span class="token keyword">default</span><span class="token operator">-</span><span class="token keyword">character</span><span class="token operator">-</span><span class="token keyword">set</span><span class="token operator">=</span>utf8
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p><strong>特别要注意：</strong></p>
<p>（1）D:\Program Files\mysql\data 这个目录一定要是“\”，千万别弄成“\”不然会报错，或者可以用“/”；
（2）Mysq安装目录和数据存放目录一定要修改为你自己设定的目录，除非你设置的目录与上述一致。</p>
<h2 id="_3-配置" tabindex="-1"><a class="header-anchor" href="#_3-配置" aria-hidden="true">#</a> 3.配置</h2>
<p>3.用管理员身份打开cmd窗口：win -&gt; windows系统 -&gt; 右击命令提示符 -&gt; 更多 -&gt; 以管理员身份运行</p>
<p>4.进入到bin目录下</p>
<p>5.执行 <code>mysqld --install</code> 命令安装（执行 <code>mysqld --remove</code> 卸载安装）</p>
<p>6.继续执行 <code>mysqld --initialize --user=root --console</code> 命令</p>
<p>注意：初始化完成后MySQL会给root用户创建一个默认随机密码，下图白色部分就是密码，同时在data目录下也添加了相关的配置文件，如果密码有字符辨识不了，则把date目录下的文件都删了，重新执行这一步。</p>
<p><img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/1780812-20190829212537656-1187829463.png" alt="img" loading="lazy"></p>
<p>7.执行<code>net start mysql</code>启动服务（执行<code>net stop mysql</code>关闭服务）</p>
<p><img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/1780812-20190829212232857-537058421.png" alt="img" loading="lazy"></p>
<p>8.执行<code>mysql -uroot -pqLBiVku7k%f</code>登录MySQL（-u后面是用户名，-p后面是密码，即上面的默认随机密码）</p>
<p>9.修改密码</p>
<p>mysql版本是7:</p>
<p><code>set password = password('root');</code></p>
<p>注意：如果mysql版本是8或以上，则使用 alter user 'root'@'localhost' identified by '新的密码'; 修改密码</p>
<p><code>ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';</code>
这样我们就可以将<code>roo</code>t账户的密码修改为<code>123456</code>了，将<code>123456</code>处替换为你们要修改的密码，回车执行就可以了。</p>
<p>12.登录MySQL后可以添加一个用户</p>
<p>添加格式：</p>
<p>grant 权限 on 数据库.表 to 用户名@'IP地址' identified by '密码'</p>
<p>实例：</p>
<p><code>grant all on *.* to test@'%' identified by'test'</code></p>
<h2 id="_4-安装错误提示" tabindex="-1"><a class="header-anchor" href="#_4-安装错误提示" aria-hidden="true">#</a> 4 安装错误提示</h2>
<h3 id="提示" tabindex="-1"><a class="header-anchor" href="#提示" aria-hidden="true">#</a> 提示</h3>
<p>安装过程中如果出现以下错误，是我们的电脑缺少运行时环境。
**注：**在这里我们有出现这种情况，但为了以防万一，还是给大家说一下，这里的图片用的网图，如有侵权，请评论删图！</p>
<p><img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/20200131203311761.png" alt="img" loading="lazy"></p>
<p>解决办法：
下载vcruntime140_1.dll，链接：https://cn.dll-files.com/vcruntime140_1.dll.html</p>
<p><img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/16422331874666.png" alt="在这里插入图片描述" loading="lazy">
下载完成后，解压提取文件，将提取出来的<code>vcruntime140_1.dll</code>文件复制到我们的<code>C:\Windows\System32</code>
<img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/16422331874677.png" alt="在这里插入图片描述" loading="lazy">
<strong>注意, 32位版本的<code>vcruntime140_1.dll</code>需要复制到<code>C:\Windows\SysWOW64</code>下</strong></p>
<h3 id="tips2" tabindex="-1"><a class="header-anchor" href="#tips2" aria-hidden="true">#</a> tips2：</h3>
<p>mysqld –initialize-insecure自动生成无密码的root用户；
mysqld –initialize自动生成带随机密码的root用户；
mysqld -remove移除自己的mysqld服务；
net stop mysql命令，停止mysql服务
如果报错，清空data文件夹，最好还是删掉data文件，重新执行remove--initialize--install--start（这些不是命令）流程即可；</p>
<h2 id="_5-配置mysql的环境变量" tabindex="-1"><a class="header-anchor" href="#_5-配置mysql的环境变量" aria-hidden="true">#</a> 5 配置mysql的环境变量</h2>
<div class="language-vbnet ext-vbnet line-numbers-mode"><pre v-pre class="language-vbnet"><code>MYSQL_HOME

D<span class="token punctuation">:</span>\<span class="token function">Program</span> <span class="token keyword">Files</span>\mysql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/20200303112518670.png" alt="img" loading="lazy"></p>
<p>点击Path，增加：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">%</span>MYSQL_HOME<span class="token operator">%</span>\<span class="token builtin">bin</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/20190831112741174.png" alt="img" loading="lazy"></p>
</template>
