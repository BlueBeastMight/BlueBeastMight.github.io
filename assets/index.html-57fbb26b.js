import{_ as s,M as e,p as a,q as i,N as c,a1 as d}from"./framework-5866ffd3.js";const t="/assets/image-20230307225720581-9366200b.png",l={},r=d(`<h1 id="docker笔记" tabindex="-1"><a class="header-anchor" href="#docker笔记" aria-hidden="true">#</a> Docker笔记</h1><h2 id="一、概述和作用" tabindex="-1"><a class="header-anchor" href="#一、概述和作用" aria-hidden="true">#</a> 一、概述和作用</h2><div class="custom-container tip"><p class="custom-container-title">什么是docker？docker有什么作用？</p></div><h3 id="_1、概述" tabindex="-1"><a class="header-anchor" href="#_1、概述" aria-hidden="true">#</a> 1、概述</h3><p>​ Docker 是一个开源的<strong>应用容器引擎</strong>，基于 Go 语言开发。Docker 可以让<strong>开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中</strong>，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用<strong>沙箱机制</strong>，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。</p><h3 id="_2、作用" tabindex="-1"><a class="header-anchor" href="#_2、作用" aria-hidden="true">#</a> 2、作用</h3><p><strong>docker类似于github、maven等平台的作用，是一个文件（应用）的托管平台</strong></p><ul><li>github是一款管理代码的平台，用户可以pull他们的代码到仓库内，然后可以在其它地方从仓库push代码</li><li>maven是一款管理jar包的平台，用户可以将他们的jar包上传到仓库内，再通过坐标从仓库下载jar包</li><li>同理：用户可以从docker仓库上传镜像或者下载镜像 <ul><li><strong>docker有3大核心</strong>：<code>镜像、容器、仓库</code>，由此拓展而出的操作无非是对容器、镜像、仓库的管理，如下载、删除、启动、关闭等等操作。</li></ul></li></ul><h2 id="二、术语和安装" tabindex="-1"><a class="header-anchor" href="#二、术语和安装" aria-hidden="true">#</a> 二、术语和安装</h2><h3 id="_1、术语" tabindex="-1"><a class="header-anchor" href="#_1、术语" aria-hidden="true">#</a> 1、术语</h3><table><thead><tr><th><strong>名称</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>Docker 镜像(Images)</td><td>Docker 镜像是用于创建 Docker 容器的模板。 镜像是基于联合文件系统的一种层式结构，由一系列指令一步一步构建出来。</td></tr><tr><td>Docker 容器(Container)</td><td>容器是独立运行的一个或一组应用。镜像相当于类，容器相当于类的实例</td></tr><tr><td>Docker 客户端(Client)</td><td>Docker 客户端通过命令行或者其他工具使用 Docker API 与 Docker 的守护进程通信</td></tr><tr><td>Docker 主机(Host)</td><td>一个物理或者虚拟的机器用于执行 Docker 守护进程和容器。</td></tr><tr><td>Docker守护进程</td><td>是Docker服务器端进程，负责支撑Docker 容器的运行以及镜像的管理。</td></tr><tr><td>Docker 仓库DockerHub (Registry)</td><td>Docker 仓库用来保存镜像，可以理解为代码控制中的代码仓库。 Docker Hub提供了庞大的镜像集合供使用。用户也可以将自己本地的镜像推送到Docker仓库供其他人下载。</td></tr><tr><td>沙箱机制</td><td>沙箱是一个虚拟系统程序，沙箱提供的环境相对于每一个运行的程序都是独立的，而且不会对现有的系统产生影响。</td></tr></tbody></table><h3 id="_2、安装" tabindex="-1"><a class="header-anchor" href="#_2、安装" aria-hidden="true">#</a> 2、安装</h3><h4 id="_1、安装linux系统" tabindex="-1"><a class="header-anchor" href="#_1、安装linux系统" aria-hidden="true">#</a> 1、安装Linux系统</h4><div class="custom-container warning"><p class="custom-container-title">推荐centos7</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#阿里云开源镜像站中下载centOS7</span>
https://mirrors.aliyun.com/centos/7/isos/x86_64/?spm<span class="token operator">=</span>a2c6h.25603864.0.0.26fe4511yepH8O
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+`" alt="image-20230307225720581"></p><h4 id="_2、配置网络模式为nat模式" tabindex="-1"><a class="header-anchor" href="#_2、配置网络模式为nat模式" aria-hidden="true">#</a> 2、配置网络模式为NAT模式</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#见csdn博客网络配置章节</span>
http://t.csdn.cn/LwoO1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、安装docker" tabindex="-1"><a class="header-anchor" href="#_3、安装docker" aria-hidden="true">#</a> 3、安装docker</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1、yum 包更新到最新 </span>
yum update 

<span class="token comment"># 2、作用：安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2 

<span class="token comment"># 3、 设置yum源 </span>
<span class="token comment"># 3.1、方案一：使用ustc的（推荐） </span>
yum-config-manager --add-repo http://mirrors.ustc.edu.cn/docker-ce/linux/centos/docker-ce.repo 
<span class="token comment"># 3.2、方案二：使用阿里云（可能失败） </span>
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo 

<span class="token comment"># 4、 安装docker；出现输入的界面都按 y </span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce

<span class="token comment"># 5、 查看docker版本 </span>
<span class="token function">docker</span> <span class="token parameter variable">-v</span>

<span class="token comment"># 6、设置ustc镜像</span>
<span class="token function">mkdir</span> /etc/docker 
<span class="token function">vim</span> /etc/docker/daemon.json

<span class="token comment"># 7、按i进入编辑模式复制下列内容粘贴上去，然后按esc+wq保存退出</span>
<span class="token punctuation">{</span>
<span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://docker.mirrors.ustc.edu.cn&quot;</span><span class="token punctuation">]</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、常用命令" tabindex="-1"><a class="header-anchor" href="#三、常用命令" aria-hidden="true">#</a> 三、常用命令</h2><h3 id="_1、启动和关闭docker" tabindex="-1"><a class="header-anchor" href="#_1、启动和关闭docker" aria-hidden="true">#</a> 1、启动和关闭docker</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动docker服务： </span>
systemctl start <span class="token function">docker</span> 

<span class="token comment"># 查看docker服务状态： </span>
systemctl status <span class="token function">docker</span> 

<span class="token comment"># 停止docker服务： </span>
systemctl stop <span class="token function">docker</span> 

<span class="token comment"># 重启docker服务： </span>
systemctl restart <span class="token function">docker</span> 

<span class="token comment"># 设置开机启动docker服务： </span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、镜像相关命令" tabindex="-1"><a class="header-anchor" href="#_2、镜像相关命令" aria-hidden="true">#</a> 2、镜像相关命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1、查看--查看镜像可以使用如下命令： </span>
<span class="token function">docker</span> images
<span class="token comment"># 查看运行的容器和所有容器</span>
<span class="token function">docker</span> <span class="token function">ps</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>

<span class="token comment"># 2、搜索--如果你需要从网络中查找需要的镜像，可以通过以下命令搜索 </span>
<span class="token function">docker</span> search 镜像名称

<span class="token comment"># 3、下载--拉取镜像就是从Docker仓库下载镜像到本地，镜像名称格式为 名称:版本号，如果版本号不指定则是最新的版本 命令如下： d</span>
ocker pull 镜像名称 
<span class="token comment"># 如拉取centos 7； </span>
<span class="token function">docker</span> pull centos:7

<span class="token comment"># 4、删除--可以按照镜像id删除镜像，命令如下： </span>
<span class="token function">docker</span> rmi 镜像id
<span class="token comment"># 删除所有镜像</span>
<span class="token function">docker</span> rmi <span class="token function">docker</span> images <span class="token parameter variable">-q</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、创建并启动容器" tabindex="-1"><a class="header-anchor" href="#_3、创建并启动容器" aria-hidden="true">#</a> 3、创建并启动容器</h3><p>可以基于已有的镜像来创建和启动容器，创建与启动容器使用命令：docker run</p><div class="custom-container danger"><p class="custom-container-title">参数说明</p></div><table><thead><tr><th>参数</th><th>说明</th><th></th></tr></thead><tbody><tr><td>-i</td><td>表示运行容器</td><td></td></tr><tr><td>-t</td><td>表示容器启动后会进入其命令行。加入这两个参数后，容器创建就能登录进去。即分配一个伪终端（交互式容器）</td><td></td></tr><tr><td>-d</td><td>在run后面加上-d参数,则会创建一个守护式容器在后台运行（这样创建容器后不会自动登录容器，如果只加-i -t两个参数，创建后就会自动进去容器）（守护式容器）</td><td></td></tr><tr><td>–name</td><td>为创建的容器命名</td><td></td></tr><tr><td>-v</td><td>表示目录映射关系（前者是宿主机目录，后者是映射到宿主机上的目录），可以使用多个－v做多个目录或文件映射。注意：最好做目录映射，在宿主机上做修改，然后共享到容器上</td><td></td></tr><tr><td>-p</td><td>表示端口映射，前者是宿主机端口，后者是容器内的映射端口。可以使用多个-p做多个端口映射</td><td></td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#1、交互式容器</span>
<span class="token comment"># 先拉取一个镜像；这一步不是每次启动容器都要做的，而是因为前面我们删除了镜像，无镜像可用所以才再拉取一个 </span>
<span class="token function">docker</span> pull centos:7 
<span class="token comment">#创建并启动名称为 mycentos1 的交互式容器；下面指令中的镜像名称 centos:7 也可以使用镜像id </span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>mycentos1 centos:7 /bin/bash


<span class="token comment">#2、守护式容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-di</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>mycentos2 centos:7 
<span class="token comment">#登录进入容器命令为：docker exec -it container_name (或者 container_id) /bin/bash（exit退出 时，容器不会停止） </span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mycentos2 /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、停止并启动容器" tabindex="-1"><a class="header-anchor" href="#_4、停止并启动容器" aria-hidden="true">#</a> 4、停止并启动容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 停止正在运行的容器：docker stop 容器名称或者ID </span>
<span class="token function">docker</span> stop mycentos2 

<span class="token comment"># 启动已运行过的容器：docker start 容器名称或者ID </span>
<span class="token function">docker</span> start mycentos2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、文件拷贝" tabindex="-1"><a class="header-anchor" href="#_5、文件拷贝" aria-hidden="true">#</a> 5、文件拷贝</h3><p>将文件从容器内拷贝出来到linux宿主机使用命令：</p><p>将文件从linux宿主机内拷贝出来到容器使用命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker cp 容器名称:容器目录 需要拷贝的文件或目录</span>

<span class="token comment">#进入容器后在root目录下创建文件hello-docker.txt </span>
<span class="token builtin class-name">cd</span> /root
<span class="token function">touch</span> hello-docker.txt 
<span class="token function">ls</span>

<span class="token comment"># 退出容器 </span>
<span class="token builtin class-name">exit</span> 

<span class="token comment"># 在Linux宿主机器执行复制；将容器mycentos1的hello-docker.txt文件复制到宿主机器的/root目录下 </span>
<span class="token function">docker</span> <span class="token function">cp</span> mycentos1:/root/hello-docker.txt  /root
<span class="token comment"># 查看Linux宿主机器/root目录下是否已经拷贝过来了hello-docker.txt</span>
<span class="token builtin class-name">cd</span> /root
<span class="token function">ls</span>

<span class="token comment"># 在容器mycentos1执行复制；将Linux宿主机器的linux.txt文件复制到宿主机器的/root目录下 </span>
<span class="token function">docker</span> <span class="token function">cp</span> /root/linux.txt mycentos1:/root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、目录挂载" tabindex="-1"><a class="header-anchor" href="#_6、目录挂载" aria-hidden="true">#</a> 6、目录挂载</h3><p>可以在创建容器的时候，将宿主机的目录与容器内的目录进行映射，这样我们就可以通过修改宿主机某个目录的文件从而去影响容器。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建linux宿主机器要挂载的目录 </span>
<span class="token function">mkdir</span> /root/binlog 

<span class="token comment"># 创建并启动容器mycentos3 ,并挂载linux中的/root/binlog 目录到容器的/root/binlog ；也就是在 linux中的/root/binlog 中操作相当于对容器相应目录操作 </span>
<span class="token function">docker</span> run <span class="token parameter variable">-di</span> <span class="token parameter variable">-v</span> /root/binlog:/root/binlog <span class="token parameter variable">--name</span><span class="token operator">=</span>mycentos3 centos:7

<span class="token comment"># 在linux下创建文件 </span>
<span class="token function">touch</span> /root/binlog/mysql.log 

<span class="token comment"># 进入容器 docker exec -it ydlcentos3 /bin/bash</span>

<span class="token comment"># 在容器中查看目录中是否有对应文件def.txt </span>
ll /root/binlog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、查看容器ip" tabindex="-1"><a class="header-anchor" href="#_7、查看容器ip" aria-hidden="true">#</a> 7、查看容器ip</h3><p>可以通过以下命令查看容器运行的各种数据 docker inspect 容器名称（容器ID）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在linux宿主机下查看 mycentos3 的ip---&gt;docker inspect 容器名称（容器ID）</span>
<span class="token function">docker</span> inspect mycentos3 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>容器之间在一个局域网内，linux宿主机器可以与容器进行通信；但是外部的物理机笔记本是不能与容器直接通信的，如果需要则需要通过宿主机器端口的代理.</p><h3 id="_8、删除容器" tabindex="-1"><a class="header-anchor" href="#_8、删除容器" aria-hidden="true">#</a> 8、删除容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除指定的容器：docker rm 容器名称（容器ID）</span>
<span class="token function">docker</span> <span class="token function">rm</span> ydlcentos3
<span class="token comment">#删除所有容器：docker rm docker ps -a -q</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45);function o(p,m){const n=e("Vssue");return a(),i("div",null,[r,c(n)])}const v=s(l,[["render",o],["__file","index.html.vue"]]);export{v as default};
