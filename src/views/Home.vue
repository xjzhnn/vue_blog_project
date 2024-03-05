<template>
    <div class="k-header" @click="handleFullClick">
        <nav class="k-nav navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    <h1>小嘉博客</h1>
                </router-link>
                <button @click="handleNavtoggler" class="navbar-toggler navbar-toggler-right" id="navbutton" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="line first-line"></span>
                    <span class="line second-line"></span>
                    <span class="line third-line"></span>
                </button>
                <div id="navbarResponsive" :class="['collapse','navbar-collapse',{'show':state.showNavtoggler}]">
                    <ul id="menu-%e4%ba%8c%e6%ac%a1%e5%85%83%e8%8f%9c%e5%8d%95" class="navbar-nav ml-auto">
                        <li class="nav-item"><a title="&#x1f35f;首页" class="nav-link"
                                aria-current="page">&#x1f35f;首页</a></li>
                        <li class="nav-item dropdown" @click.stop="handleNav('showMenu')"><a title="&#x1f358;目录" href="#" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false" class="dropdown-toggle nav-link"
                                id="menu-item-dropdown-3315">&#x1f358;目录</a>
                            <ul :class="['dropdown-menu',{show:state.showMenu}]" aria-labelledby="menu-item-dropdown-3315" role="menu">
                                <li class="nav-item"><a title="&#x1f95d;VPS教程"
                                        href="https://www.nbmao.com/archives/category/zz"
                                        class="dropdown-item">&#x1f95d;VPS教程</a></li>
                                <li class="nav-item"><a title="&#x1f37e;猫玩技术"
                                        href="https://www.nbmao.com/archives/category/net"
                                        class="dropdown-item">&#x1f37e;猫玩技术</a></li>
                                <li class="nav-item"><a title="&#x1f379;干货分享"
                                        href="https://www.nbmao.com/archives/category/web"
                                        class="dropdown-item">&#x1f379;干货分享</a></li>
                                <li class="nav-item"><a title="&#x1f34f;软件分享"
                                        href="https://www.nbmao.com/archives/category/soft"
                                        class="dropdown-item">&#x1f34f;软件分享</a></li>
                                <li class="nav-item"><a title="&#x1f369;一只猫"
                                        href="https://www.nbmao.com/archives/category/cat"
                                        class="dropdown-item">&#x1f369;一只猫</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown" @click.stop="handleNav('showTool')"><a title="&#x1f34b;工具" href="#" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false" class="dropdown-toggle nav-link"
                                id="menu-item-dropdown-3323">&#x1f34b;工具</a>
                            <ul :class="['dropdown-menu',{show:state.showTool}]" aria-labelledby="menu-item-dropdown-3323" role="menu">
                                <!-- <li class="nav-item" @click="$router.push('/tool')"><router-link title="&#x1f33d;随机点名" to="/tool"
                                        class="dropdown-item">&#x1f33d;随机点名</router-link></li> -->
                                <li class="nav-item"><a title="&#x1f350;域名Whois查询" target="_blank" href="https://mao.cx/"
                                        class="dropdown-item">&#x1f350;域名Whois查询</a></li>
                                <li class="nav-item"><a title="&#x1f958;域名被墙查询"
                                        href="http://www.chaicp.com/home_cha/chaymqiang_z"
                                        class="dropdown-item">&#x1f958;域名被墙查询</a></li>
                                <li class="nav-item"><a title="&#x1f367;IP正常检测" target="_blank"
                                        href="https://www.vps234.com/ipchecker/" class="dropdown-item">&#x1f367;IP正常检测</a>
                                </li>
                                <li class="nav-item"><a title="&#x1f525;IP端口检测" href="https://www.toolsdaquan.com/ipcheck/"
                                        class="dropdown-item">&#x1f525;IP端口检测</a></li>
                                <li class="nav-item"><a title="&#x1f346;短网址" target="_blank" href="http://m2.gs"
                                        class="dropdown-item">&#x1f346;短网址</a></li>
                                <li class="nav-item"><a title="&#x1f41f;VIP音乐播放" target="_blank"
                                        href="https://music.dog886.com/" class="dropdown-item">&#x1f41f;VIP音乐播放</a></li>
                                <li class="nav-item"><a title="&#x1f36f;KMS激活" target="_blank"
                                        href="https://www.moerats.com/kms/" class="dropdown-item">&#x1f36f;KMS激活</a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a title="&#x1f353;链接" href="https://www.nbmao.com/links"
                                class="nav-link">&#x1f353;链接</a></li>
                        <li class="nav-item"><a title="&#x1f36a;联系" href="https://www.nbmao.com/cats"
                                class="nav-link">&#x1f36a;联系</a></li>
                        <li class="nav-item dropdown" @click.stop="handleNav('showLogin')"><a title="&#x1f371;登录" href="#" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false" class="dropdown-toggle nav-link"
                                id="menu-item-dropdown-3324">&#x1f371;登录</a>
                            <ul :class="['dropdown-menu',{show:state.showLogin}]" aria-labelledby="menu-item-dropdown-3324" role="menu">
                                <li class="nav-item"><router-link title="&#x1f966;登录" to="/login"
                                        class="dropdown-item">&#x1f966;登录</router-link></li>
                                <li class="nav-item"><router-link title="&#x1f352;注册" to="/register"
                                        class="dropdown-item">&#x1f352;注册</router-link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="banner">
            <div class="overlay"></div>
            <div class="content text-center banner_image">
                <div class="introduce animate__animated animate__fadeInUp">
                    <div class="title"></div>
                    <div class="mate">关注互联网，生活，音乐，乐此不疲的一只笨猫</div>
                </div>
            </div>
        </div>
    </div>
    <div class="k-main banner" style="background:#f5f5f5">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 board">
                    <div class="article-panel">
                        <span class="a-card d-none d-md-block d-lg-block">
                        </span>
                        <div class="a-thumb">
                            <a href="https://www.nbmao.com/archives/6266">
                                <img src="@/assets/picture/5e9e3f72ba17d0521f6943aaea3bddc7.jpeg" /> </a>
                        </div>
                        <div class="a-post 1">
                            <div class="header">
                                <a class="label" href="https://www.nbmao.com/archives/category/cat">一只猫<i
                                        class="label-arrow"></i></a>
                                <h3 class="title"><a href="https://www.nbmao.com/archives/6266">wordpress主题模板兔Modown
                                        9.1开心版附送插件</a></h3>
                            </div>
                            <div class="content">
                                <p>Modown
                                    9.1开心版是一款模板兔开发的wordpress主题可，持续更新多年，优秀的资源下载类主题该模板基于Erphpdown，可以销售软件、视频教程、文章等等，通过主题和插件结合可以实现付费下载、付费阅读等功能，配合模板兔的一些插件还可以实现团购、抽奖等功能。
                                    Modown 9.1开心版无需激活 ，不限制域，名免授权 ，安装即用。无后门，放心使用 modown主题 v9.1 主题已去除域名限制，并且已解密所有加密的文件。
                                    erphpdown插件 v17.1 本身无限制，安装即用。 下载地址： https:/&hellip;</p>
                            </div>
                        </div>
                        <div class="a-meta">
                            <span class="float-left d-none d-md-block">
                                <span class="mr-2"><i class="kicon i-calendar"></i>2024-02-26</span>
                                <span class="mr-2"><i class="kicon i-comments"></i>0条评论</span>
                            </span>
                            <span class="float-left d-block">
                                <span class="mr-2"><i class="kicon i-hot"></i>15点热度</span>
                                <span class="mr-2"><i class="kicon i-good"></i>0人点赞</span>
                                <span class="mr-2"><i class="kicon i-author"></i>笨猫</span>
                            </span>
                            <span class="float-right">
                                <a href="https://www.nbmao.com/archives/6266">阅读全文<i class="kicon i-rightbutton"></i></a>
                            </span>
                        </div>
                    </div>
                    <div class="article-panel">
                        <span class="a-card d-none d-md-block d-lg-block">
                        </span>
                        <div class="a-thumb">
                            <a href="https://www.nbmao.com/archives/6263">
                                <img src="@/assets/picture/下载.jpg" /> 
                            </a>
                        </div>
                        <div class="a-post 1">
                            <div class="header">
                                <a class="label" href="https://www.nbmao.com/archives/category/cat">一只猫<i
                                        class="label-arrow"></i></a>
                                <h3 class="title"><a href="https://www.nbmao.com/archives/6263">openAI Sora Videos：收集所有通过
                                        Sora AI 模型生成的视频</a></h3>
                            </div>
                            <div class="content">
                                <p>背景 2.16 号openAI推出了Sora模型，感觉颠覆了之前的视频生成技术，不管是从生成视频的时长（可以生成长达 1 分钟的视频，之前的视频生成软件还在 4s ，16s
                                    的时间线上挣扎），还是视频的一致连贯性（解决了之前生成视频内容不一致还有闪烁的问题），都有了质的飞跃。特别是对于真实世界的物理规律的理解，感觉真正的是一个可以直接通过文本生成视频的技术。而不是像之前的模型以生成图片关键帧的形式拼接成视频。
                                    现在大家对于Sora的一切都非常的好奇和热情，但由于目前还没有开放使用，只能看到部分通过Sora生成视频的&hellip;</p>
                            </div>
                        </div>
                        <div class="a-meta">
                            <span class="float-left d-none d-md-block">
                                <span class="mr-2"><i class="kicon i-calendar"></i>2024-02-20</span>
                                <span class="mr-2"><i class="kicon i-comments"></i>0条评论</span>
                            </span>
                            <span class="float-left d-block">
                                <span class="mr-2"><i class="kicon i-hot"></i>122点热度</span>
                                <span class="mr-2"><i class="kicon i-good"></i>2人点赞</span>
                                <span class="mr-2"><i class="kicon i-author"></i>笨猫</span>
                            </span>
                            <span class="float-right">
                                <a href="https://www.nbmao.com/archives/6263">阅读全文<i class="kicon i-rightbutton"></i></a>
                            </span>
                        </div>
                    </div>
                    <div class="article-panel">
                        <span class="a-card d-none d-md-block d-lg-block">
                        </span>
                        <div class="a-thumb">
                            <a href="https://www.nbmao.com/archives/6261">
                                <img src="@/assets/picture/17daca5c1a8577cfbc48a1c5a8b1ca7c.jpeg" /> 
                            </a>
                        </div>
                        <div class="a-post 1">
                            <div class="header">
                                <a class="label" href="https://www.nbmao.com/archives/category/web">网络资源<i
                                        class="label-arrow"></i></a>
                                <h3 class="title"><a href="https://www.nbmao.com/archives/6261">OpenAI
                                        Sora怎么启用：详细教程与使用指南</a></h3>
                            </div>
                            <div class="content">
                                <p>为了保持领先于行业竞争对手，Openai 于 2024 年 2 月15日推出了其突破性的文本转视频模型 Sora。这款创新工具使用 AI
                                    将您的书面描述转换为长达一分钟的引人入胜的视频。此举标志着 OpenAI
                                    致力于在快速发展的人工智能领域保持竞争优势，因为文本到视频工具变得越来越突出。本文将为您介绍Sora怎么使用的最新详细教程。 什么是Sora？
                                    Sora在日语中是天空的意思，是一种文本到视频的扩散模型，Sora与使用文本提示创建图像的 Dall-E 非常相似，Sora 使用文本提示创建短视频。Sora
                                    只需&hellip;</p>
                            </div>
                        </div>
                        <div class="a-meta">
                            <span class="float-left d-none d-md-block">
                                <span class="mr-2"><i class="kicon i-calendar"></i>2024-02-18</span>
                                <span class="mr-2"><i class="kicon i-comments"></i>0条评论</span>
                            </span>
                            <span class="float-left d-block">
                                <span class="mr-2"><i class="kicon i-hot"></i>1070点热度</span>
                                <span class="mr-2"><i class="kicon i-good"></i>1人点赞</span>
                                <span class="mr-2"><i class="kicon i-author"></i>笨猫</span>
                            </span>
                            <span class="float-right">
                                <a href="https://www.nbmao.com/archives/6261">阅读全文<i class="kicon i-rightbutton"></i></a>
                            </span>
                        </div>
                    </div>
                    <div class="article-panel">
                        <span class="a-card d-none d-md-block d-lg-block">
                        </span>
                        <div class="a-thumb">
                            <a href="https://www.nbmao.com/archives/6259">
                                <img src="@/assets/picture/6fc06cd8f022c0ca47fa58417617e158.png" /> 
                            </a>
                        </div>
                        <div class="a-post 1">
                            <div class="header">
                                <a class="label" href="https://www.nbmao.com/archives/category/soft">软件分享<i
                                        class="label-arrow"></i></a>
                                <h3 class="title"><a href="https://www.nbmao.com/archives/6259">从字体里获取字形及精简字体的免费软件</a></h3>
                            </div>
                            <div class="content">
                                <p>FontMagic 是一个字体（ ttf 、woff 、woff2 ）处理软件，可以在 macOS 、Windows 平台使用。FontMagic 拥有 4 大核心功能：
                                    解析字体文件的所有 unicode 及字形，可以通过快捷键将选中的字形以 svg 字符串的形式进行拷贝。可以一键导出选择的所有字形。
                                    可以对字体文件进行过滤，只保留你需要的字符。 可以对字体文件的格式进行转换，可以在 ttf 、woff 、woff2 三种格式中互相转换。 可以快速获取字体文件的 base64
                                    编码，仅仅需要点击一次按钮。 htt&hellip;</p>
                            </div>
                        </div>
                        <div class="a-meta">
                            <span class="float-left d-none d-md-block">
                                <span class="mr-2"><i class="kicon i-calendar"></i>2024-02-16</span>
                                <span class="mr-2"><i class="kicon i-comments"></i>0条评论</span>
                            </span>
                            <span class="float-left d-block">
                                <span class="mr-2"><i class="kicon i-hot"></i>88点热度</span>
                                <span class="mr-2"><i class="kicon i-good"></i>0人点赞</span>
                                <span class="mr-2"><i class="kicon i-author"></i>笨猫</span>
                            </span>
                            <span class="float-right">
                                <a href="https://www.nbmao.com/archives/6259">阅读全文<i class="kicon i-rightbutton"></i></a>
                            </span>
                        </div>
                    </div>
                    <div class="article-panel">
                        <span class="a-card d-none d-md-block d-lg-block">
                        </span>
                        <div class="a-thumb">
                            <a href="https://www.nbmao.com/archives/6258">
                                <img src="@/assets/picture/default.jpg" /> 
                            </a>
                        </div>
                        <div class="a-post 1">
                            <div class="header">
                                <a class="label" href="https://www.nbmao.com/archives/category/cat">一只猫<i
                                        class="label-arrow"></i></a>
                                <h3 class="title"><a href="https://www.nbmao.com/archives/6258">AI最新前沿科技</a></h3>
                            </div>
                            <div class="content">
                                <p>人工智能（AI）作为一种革命性的技术，正在以前所未有的速度和广度影响着我们的生活和工作。从终端侧智能到科研应用，AI技术正不断突破传统界限，为我们带来了新的可能性。本文将深入探讨AI最新前沿科技的发展趋势，展望其未来的应用前景。
                                    首先，高通在过去十年专注于终端侧人工智能的前沿科技，使得手机等终端设备越来越智能 1 。这表明AI技术已经开始渗透到日常生活的各个方面，成为推动科技进步的重要力量。 其次，AI
                                    for Science的发展预示着AI将成为科学家的新生产工具，推动科研新范式的形成 2 。这种转变意味着AI技&hellip;</p>
                            </div>
                        </div>
                        <div class="a-meta">
                            <span class="float-left d-none d-md-block">
                                <span class="mr-2"><i class="kicon i-calendar"></i>2024-02-16</span>
                                <span class="mr-2"><i class="kicon i-comments"></i>0条评论</span>
                            </span>
                            <span class="float-left d-block">
                                <span class="mr-2"><i class="kicon i-hot"></i>68点热度</span>
                                <span class="mr-2"><i class="kicon i-good"></i>0人点赞</span>
                                <span class="mr-2"><i class="kicon i-author"></i>笨猫</span>
                            </span>
                            <span class="float-right">
                                <a href="https://www.nbmao.com/archives/6258">阅读全文<i class="kicon i-rightbutton"></i></a>
                            </span>
                        </div>
                    </div>
                    <div class="article-panel">
                        <span class="a-card d-none d-md-block d-lg-block">
                        </span>
                        <div class="a-thumb">
                            <a href="https://www.nbmao.com/archives/6253">
                                <img src="@/assets/picture/6fc06cd8f022c0ca47fa58417617e158.png" /> 
                            </a>
                        </div>
                        <div class="a-post 1">
                            <div class="header">
                                <a class="label" href="https://www.nbmao.com/archives/category/zz">VPS教程<i
                                        class="label-arrow"></i></a>
                                <h3 class="title"><a href="https://www.nbmao.com/archives/6253">VPS一键脚本工具箱，一个脚本搞定大部分需求</a>
                                </h3>
                            </div>
                            <div class="content">
                                <p>VPS一键脚本工具箱，一个脚本搞定大部分需求，废话不多说，上脚本 curl -fsSL
                                    https://raw.githubusercontent.com/eooce/ssh_tool/main/ssh_tool.sh -o ssh_tool.sh
                                    &amp;&amp; chmod +x ssh_tool.sh &amp;&amp; ./ssh_tool.sh 或 wget -qO ssh_tool.sh
                                    https://raw.githubusercontent.com/eooce/ssh_tool/main/s&hellip;</p>
                            </div>
                        </div>
                        <div class="a-meta">
                            <span class="float-left d-none d-md-block">
                                <span class="mr-2"><i class="kicon i-calendar"></i>2024-02-15</span>
                                <span class="mr-2"><i class="kicon i-comments"></i>0条评论</span>
                            </span>
                            <span class="float-left d-block">
                                <span class="mr-2"><i class="kicon i-hot"></i>133点热度</span>
                                <span class="mr-2"><i class="kicon i-good"></i>1人点赞</span>
                                <span class="mr-2"><i class="kicon i-author"></i>笨猫</span>
                            </span>
                            <span class="float-right">
                                <a href="https://www.nbmao.com/archives/6253">阅读全文<i class="kicon i-rightbutton"></i></a>
                            </span>
                        </div>
                    </div>
                    <div class="article-panel">
                        <span class="a-card d-none d-md-block d-lg-block">
                        </span>
                        <div class="a-thumb">
                            <a href="https://www.nbmao.com/archives/6236">
                                <img src="@/assets/picture/images.jpg" /> 
                            </a>
                        </div>
                        <div class="a-post 1">
                            <div class="header">
                                <a class="label" href="https://www.nbmao.com/archives/category/net">猫玩技术<i
                                        class="label-arrow"></i></a>
                                <h3 class="title"><a href="https://www.nbmao.com/archives/6236">利用免费的replit搭建Alist</a></h3>
                            </div>
                            <div class="content">
                                <p>一个支持多存储的文件列表程序，能够实现多网盘统一管理，甚至指出ftp和s3，百度网盘阿里网盘更不用说，更可气的是界面还特别漂亮，爱技术搞分享的都有属于自己的alist网盘。
                                    本文特色
                                    一般情况下，无论是使用一键安装或者docker安装，部署Alist是需要一台vps的，但是鉴于Replit容器就提供了运行Alist的所有条件，所以我们本次就来直接在免费的Replit中部署；
                                    操作步骤 1、注册Replit：https://replit.com/ 可选谷歌账号、苹果账号、fb或者GitHub账号一键登录，或者自己用邮&hellip;</p>
                            </div>
                        </div>
                        <div class="a-meta">
                            <span class="float-left d-none d-md-block">
                                <span class="mr-2"><i class="kicon i-calendar"></i>2024-02-14</span>
                                <span class="mr-2"><i class="kicon i-comments"></i>1条评论</span>
                            </span>
                            <span class="float-left d-block">
                                <span class="mr-2"><i class="kicon i-hot"></i>195点热度</span>
                                <span class="mr-2"><i class="kicon i-good"></i>0人点赞</span>
                                <span class="mr-2"><i class="kicon i-author"></i>笨猫</span>
                            </span>
                            <span class="float-right">
                                <a href="https://www.nbmao.com/archives/6236">阅读全文<i class="kicon i-rightbutton"></i></a>
                            </span>
                        </div>
                    </div>
                    <div class="article-panel">
                        <span class="a-card d-none d-md-block d-lg-block">
                        </span>
                        <div class="a-thumb">
                            <a href="https://www.nbmao.com/archives/6232">
                                <img src="@/assets/picture/f04cedfd4b00a14c132300349c1bbb16.jpeg" /> 
                            </a>
                        </div>
                        <div class="a-post 1">
                            <div class="header">
                                <a class="label" href="https://www.nbmao.com/archives/category/fun">干货分享<i
                                        class="label-arrow"></i></a>
                                <h3 class="title"><a href="https://www.nbmao.com/archives/6232">幻兽帕鲁
                                        Palworld|豪华中文|V1.4.0+联机+单机+预购特典+修改器|解压即撸|</a></h3>
                            </div>
                            <div class="content">
                                <p>幻兽帕鲁 Palworld 在帕鲁的世界，你可以选择与神奇的生物「帕鲁」一同享受悠闲的生活，也可以投身于与偷猎者进行生死搏斗的冒险。
                                    帕鲁可以进行战斗、繁殖、协助你做农活，也可以为你在工厂工作。 你也可以将它们进行售卖，或肢解后食用。 生存
                                    食物短缺、恶劣的环境……非法的偷猎者。这个世界危机四伏。为了生存你只能不择手段。有时候，你甚至要用帕鲁来充饥…… 骑乘、探索
                                    你可以骑着帕鲁去陆地、海洋、天空，在各种不同的场所进行探索。 建造 想建造金字塔吗？这时候就让大量的帕鲁为你做建造的工作吧。帕鲁并不受劳动法规的约束，尽&hellip;</p>
                            </div>
                        </div>
                        <div class="a-meta">
                            <span class="float-left d-none d-md-block">
                                <span class="mr-2"><i class="kicon i-calendar"></i>2024-02-06</span>
                                <span class="mr-2"><i class="kicon i-comments"></i>0条评论</span>
                            </span>
                            <span class="float-left d-block">
                                <span class="mr-2"><i class="kicon i-hot"></i>233点热度</span>
                                <span class="mr-2"><i class="kicon i-good"></i>0人点赞</span>
                                <span class="mr-2"><i class="kicon i-author"></i>笨猫</span>
                            </span>
                            <span class="float-right">
                                <a href="https://www.nbmao.com/archives/6232">阅读全文<i class="kicon i-rightbutton"></i></a>
                            </span>
                        </div>
                    </div>
                    <div class="article-panel">
                        <span class="a-card d-none d-md-block d-lg-block">
                        </span>
                        <div class="a-thumb">
                            <a href="https://www.nbmao.com/archives/6216">
                                <img src="@/assets/picture/header.jpg" /> 
                            </a>
                        </div>
                        <div class="a-post 1">
                            <div class="header">
                                <a class="label" href="https://www.nbmao.com/archives/category/cat">一只猫<i
                                        class="label-arrow"></i></a>
                                <h3 class="title"><a
                                        href="https://www.nbmao.com/archives/6216">最全面的幻兽帕鲁Palworld服务端管理脚本，一键搭建幻兽帕鲁Palworld服务端</a>
                                </h3>
                            </div>
                            <div class="content">
                                <p>本文所使用一键脚本基于Docker，理论上适用于所有x86架构的主流Linux系统（不支持Arm），推荐Debian11 12 Ubuntu20.04 22.04
                                    如果你是按照我之前写的那四条命令的教程搭建的，可以直接适配此脚本进行其他配置，无需重新安装服务端
                                    本脚本在 https://www.xuehaiwu.com/palworld-server/ 作者的基础上修改添加了部分功能
                                    项目地址：https://github.com/miaowmint/palworld 已经更新 v20230130_162530 版&hellip;</p>
                            </div>
                        </div>
                        <div class="a-meta">
                            <span class="float-left d-none d-md-block">
                                <span class="mr-2"><i class="kicon i-calendar"></i>2024-01-30</span>
                                <span class="mr-2"><i class="kicon i-comments"></i>0条评论</span>
                            </span>
                            <span class="float-left d-block">
                                <span class="mr-2"><i class="kicon i-hot"></i>298点热度</span>
                                <span class="mr-2"><i class="kicon i-good"></i>0人点赞</span>
                                <span class="mr-2"><i class="kicon i-author"></i>笨猫</span>
                            </span>
                            <span class="float-right">
                                <a href="https://www.nbmao.com/archives/6216">阅读全文<i class="kicon i-rightbutton"></i></a>
                            </span>
                        </div>
                    </div>
                    <div class='paginations'><span class="page-numbers current">1</span><a
                            href='https://www.nbmao.com/page/2'>2</a><a href='https://www.nbmao.com/page/3'>3</a><a
                            href='https://www.nbmao.com/page/4'>4</a><a href='https://www.nbmao.com/page/5'>5</a><span
                            class="page-numbers dots">…</span><a href='https://www.nbmao.com/page/157'>157</a><a
                            href="https://www.nbmao.com/page/2" class="next" title="下一页"><i class="kicon i-rarrows"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 sidebar sticky-sidebar d-none d-lg-block">
                    <div class="widget w-search">
                        <div class="title">搜索</div>
                        <div class="item">
                            <form role="search" method="get" id="searchform" class="searchform"
                                action="https://www.nbmao.com/">
                                <div class="input-group mt-2 mb-2"> <input type="text" name="s" id="search-widgets"
                                        class="form-control" placeholder="搜点什么呢?">
                                    <div class="input-group-append"> <button class="btn btn-primary btn-search"
                                            type="submit" id="searchsubmit">搜索</button> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="widget w-recommended">
                        <div class="nav nav-tabs d-none d-xl-flex" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active" id="nav-hot-tab" data-toggle="tab" href="#" role="tab"
                                aria-controls="nav-hot" aria-selected="false"><i class="kicon i-tabhot"></i>热点</a>
                        </div>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane show active" id="nav-hot" role="tabpanel" aria-labelledby="nav-hot-tab">
                            <a class="bookmark-item" title="利用免费的replit搭建Alist"
                                href="https://www.nbmao.com/archives/6236" rel="bookmark"><i
                                    class="kicon i-book"></i>利用免费的replit搭建Alist</a><a class="bookmark-item"
                                title="幻兽帕鲁 Palworld|豪华中文|V1.4.0+联机+单机+预购特典+修改器|解压即撸|"
                                href="https://www.nbmao.com/archives/6232" rel="bookmark"><i
                                    class="kicon i-book"></i>幻兽帕鲁 Palworld|豪华中文|V1.4.0+联机+单机+预购特典+修改器|解压即撸|</a><a
                                class="bookmark-item" title="最全面的幻兽帕鲁Palworld服务端管理脚本，一键搭建幻兽帕鲁Palworld服务端"
                                href="https://www.nbmao.com/archives/6216" rel="bookmark"><i
                                    class="kicon i-book"></i>最全面的幻兽帕鲁Palworld服务端管理脚本，一键搭建幻兽帕鲁Palworld服务端</a><a
                                class="bookmark-item" title="VPS一键脚本工具箱，一个脚本搞定大部分需求"
                                href="https://www.nbmao.com/archives/6253" rel="bookmark"><i
                                    class="kicon i-book"></i>VPS一键脚本工具箱，一个脚本搞定大部分需求</a><a class="bookmark-item"
                                title="AI最新前沿科技" href="https://www.nbmao.com/archives/6258" rel="bookmark"><i
                                    class="kicon i-book"></i>AI最新前沿科技</a><a class="bookmark-item"
                                title="从字体里获取字形及精简字体的免费软件" href="https://www.nbmao.com/archives/6259" rel="bookmark"><i
                                    class="kicon i-book"></i>从字体里获取字形及精简字体的免费软件</a><a class="bookmark-item"
                                title="OpenAI Sora怎么启用：详细教程与使用指南" href="https://www.nbmao.com/archives/6261"
                                rel="bookmark"><i class="kicon i-book"></i>OpenAI Sora怎么启用：详细教程与使用指南</a><a
                                class="bookmark-item" title="openAI Sora Videos：收集所有通过 Sora AI 模型生成的视频"
                                href="https://www.nbmao.com/archives/6263" rel="bookmark"><i
                                    class="kicon i-book"></i>openAI Sora Videos：收集所有通过 Sora AI 模型生成的视频</a>
                        </div>
                    </div>
                </div>
                <div class="widget w-comments">
                    <div class="title">最近评论</div>
                    <div class="comments"><a href="https://www.nbmao.com/archives/6236#commentform">
                            <div class="meta clearfix">
                                <div class="avatar float-left">
                                    <img alt=''
                                        src='@/assets/picture/1c9babd26296c3a84c2060fc61438f14.png'
                                        class='avatar avatar-60 photo' height='60' width='60'/>
                                    </div>
                                <div class="profile d-block">
                                    <span class="date">过千帆 发布于 1 周前（02月18日）</span>
                                    <span class="message d-block">replit 可以认为收费了，免费版的功能越来越少了</span>
                                </div>
                            </div>
                        </a><a href="https://www.nbmao.com/archives/5990#commentform">
                            <div class="meta clearfix">
                                <div class="avatar float-left">
                                    <img alt=''
                                        src='@/assets/picture/1cbf24c4ef8eb3387ef301199b88f87a.png'
                                        class='avatar avatar-60 photo' height='60' width='60'/>
                                    </div>
                                <div class="profile d-block">
                                    <span class="date">xmind 发布于 2 周前（02月14日）</span>
                                    <span class="message d-block">麻烦博主更新到7.4版本 2024-1-24发布</span>
                                </div>
                            </div>
                        </a><a href="https://www.nbmao.com/archives/5998#commentform">
                            <div class="meta clearfix">
                                <div class="avatar float-left">
                                    <img alt=''
                                        src='@/assets/picture/02a07b382516ba9cfe8af3166404c923.png'
                                        class='avatar avatar-60 photo' height='60' width='60'/>
                                    </div>
                                <div class="profile d-block">
                                    <span class="date">ddww 发布于 2 周前（02月10日）</span>
                                    <span class="message d-block">大佬过年好 这个内核下载地址失效了
                                        求修复 谢谢</span>
                                </div>
                            </div>
                        </a><a href="https://www.nbmao.com/archives/5290#commentform">
                            <div class="meta clearfix">
                                <div class="avatar float-left">
                                    <img alt=''
                                        src='@/assets/picture/c62e426cb9440c9c5b18ef33433b5860.png'
                                        class='avatar avatar-60 photo' height='60' width='60'/>
                                    </div>
                                <div class="profile d-block">
                                    <span class="date">ww 发布于 4 周前（01月31日）</span>
                                    <span class="message d-block">末尾增加指定目录安装,加了就安装不了。输入curl -fsSL
                                        &quot;https://alis...</span>
                                </div>
                            </div>
                        </a><a href="https://www.nbmao.com/archives/5982#commentform">
                            <div class="meta clearfix">
                                <div class="avatar float-left">
                                    <img alt=''
                                        src='@/assets/picture/8f5f791a96da1149371856ed81518c07.jpeg'
                                        class='avatar avatar-60 photo' height='60' width='60'/>
                                    </div>
                                <div class="profile d-block">
                                    <span class="date">笨猫 发布于 1 个月前（01月22日）</span>
                                    <span class="message d-block">其实就是套用CF刷的假IP</span>
                                </div>
                            </div>
                        </a></div>
                </div>
                <div class="widget w-tags">
                    <div class="title">标签聚合</div>
                    <div class="item"><a href="https://www.nbmao.com/archives/tag/%e5%9f%9f%e5%90%8d"
                            class="tag-cloud-link tag-link-72 tag-link-position-1" style="color: #cbf764;">域名</a>
                        <a href="https://www.nbmao.com/archives/tag/vps"
                            class="tag-cloud-link tag-link-506 tag-link-position-2" style="color: #40d5ff;">VPS</a>
                        <a href="https://www.nbmao.com/archives/tag/%e6%97%a5%e8%ae%b0"
                            class="tag-cloud-link tag-link-119 tag-link-position-3" style="color: #06e44b;">日记</a>
                        <a href="https://www.nbmao.com/archives/tag/%e9%9f%b3%e4%b9%90"
                            class="tag-cloud-link tag-link-56 tag-link-position-4" style="color: #3dcf23;">音乐</a>
                        <a href="https://www.nbmao.com/archives/tag/google"
                            class="tag-cloud-link tag-link-57 tag-link-position-5" style="color: #7f61d1;">google</a>
                        <a href="https://www.nbmao.com/archives/tag/%e6%9c%89%e8%b6%a3"
                            class="tag-cloud-link tag-link-11 tag-link-position-6" style="color: #1c4480;">有趣</a>
                        <a href="https://www.nbmao.com/archives/tag/onedrive"
                            class="tag-cloud-link tag-link-769 tag-link-position-7" style="color: #72a7c3;">OneDrive</a>
                        <a href="https://www.nbmao.com/archives/tag/wordpress"
                            class="tag-cloud-link tag-link-7 tag-link-position-8" style="color: #77d3e1;">wordpress</a>
                    </div>
                </div>
                <div class="widget widget_links">
                    <div class="title">好友</div>
                    <ul class='xoxo blogroll'>
                        <li><a href="http://www.zhaojin97.cn" rel="noopener" target="_blank">glzjin&#039;s blog</a></li>
                        <li><a href="http://www.zaera.cn" rel="noopener" target="_blank">ZAERA博客</a></li>
                        <li><a href="https://iymark.com" rel="noopener" title="分享记录生活点滴" target="_blank">冰沫记</a></li>
                        <li><a href="https://bbs.zhiqan.com" rel="noopener" target="_blank">奇它博客</a></li>
                        <li><a href="https://www.catni.cn" rel="noopener" target="_blank">猫腻‘s Blog</a></li>
                        <li><a href="https://maofun.com" rel="noopener" title="一只有趣得猫" target="_blank">猫饭</a></li>
                        <li><a href="https://qiukong.com" rel="noopener" target="_blank">肥宅之家</a></li>
                        <li><a href="https://moe.blog/" rel="noopener" target="_blank">萌博</a></li>
                        <li><a href="https://eller.tech" rel="noopener" target="_blank">野路子程序员</a></li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="k-footer">
    <div class="f-toolbox">
        <div :class="['gotop',{active:state.showBackTop}]" @click="handleGoTop">
            <div class="gotop-btn">
                <span class="kicon i-up"></span>
            </div>
        </div>
        <div class="search">
            <span class="kicon i-find"></span>
            <form class="search-form" role="search" method="get" action="https://www.nbmao.com/">
                <input type="text" name="s" id="search-footer" placeholder="搜点什么呢?" style="display:none" />
            </form>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <p class="social">
                </p>
                <p>COPYRIGHT © 2022 小嘉博客. ALL RIGHTS RESERVED.</p>
                <p>Theme Kratos Made By Seaton Jiang</p>
            </div>
        </div>
    </div>
</div></template>

<script setup>
import { reactive,onMounted,onUnmounted } from 'vue';
let state =reactive({
    showMenu:false,
    showTool:false,
    showLogin:false,
    showBackTop:false,
    showNavtoggler:false,
    showType:'showMenu'
})
onMounted(()=>{
    window.addEventListener('scroll', throttle(handlescroll,50))
})
onUnmounted(()=>{
    window.removeEventListener('scroll', handlescroll)
})
// 处理顶部目录栏展开与关闭
const handleNav=(type)=>{
    state.showType = type
    state.showLogin = false;
    state.showMenu = false;
    state.showTool = false;
    state[type] = true
}
// 点击页面关闭目录栏的展开状态
const handleFullClick=()=>{
    state[state.showType] = false
}
// 返回顶部
const handleGoTop=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
// 返回页面顶部
const handlescroll=()=>{ 
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop > 50) {
        state.showBackTop = true
    } else {
        state.showBackTop = false
    }
}
const handleNavtoggler=()=>{
    state.showNavtoggler = !state.showNavtoggler
}
// 节流
function throttle (callback,duration){
        var lastTime = new Date().getTime();
        return function () {
            var now = new Date().getTime();
            if(now - lastTime > duration){
                callback();
                lastTime = now;
            }
        }
    }
</script>
<style>
@import url(@/static/css/classic-themes.min.css);
@import url(@/static/css/solarized-dark.css);
@import url(@/static/css/pure-highlight.css);
@import url(@/static/css/bootstrap.min.css);
@import url(@/static/css/iconfont.min.css);
@import url(@/static/css/layer.min.css);
@import url(@/static/css/lightgallery.min.css);
@import url(@/static/css/style.css);
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;}:where(.is-layout-flex){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
@media screen and (min-width: 992px) {
            .k-nav .navbar-brand h1 {
                color: #ffffff;
            }
            .k-nav .navbar-nav > li.nav-item > a {
                color: #ffffff;
            }
        }
</style>
