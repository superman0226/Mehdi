// 这个文件定义了您的公众号文章库，供AI助理进行推荐。
// 关键：请根据您的实际文章URL更新 'url' 字段。

// 修正：使用 'var' 确保 mockArticles 成为全局变量，解决加载问题。
var mockArticles = [
    {
        id: "A001",
        title: "1776年，地球到底发生了什么？",
        summary: "详细介绍了1776年发生的一些历史大事，包括詹姆斯•瓦特在1776年制造出第一台有实用价值的蒸汽机，标志者工业革命的开始。包括《独立宣言》的发表。包括人类经济学之父亚当·斯密《国民财富的性质和原因的研究》（简称《国富论》）出版。包括世界上最早的分红保险的诞生。文章的主旨是说明中西文化的不同，虽然已经过去了300多年，但至今还影响着中国和西方人思想方式的不同",
        url: "https://mp.weixin.qq.com/s?__biz=MjM5MTAyMjIxNg==&mid=2650403049&idx=1&sn=0a721e974c51b859c8a6e7193c59c210&chksm=beb6bd0e89c134187ef81e84b6cafa3255b746765174b3ed43af4256c128ea0b58b03d268c97&token=302031980&lang=zh_CN#rd" 
    },
    {
        id: "A002",
        title: "世界精算师之父——威廉·摩根",
        summary: "详细讲述了威廉·摩根（William Morgan）如何人一名会计，以及在Equitable Life Assurance Society英国公平人寿成长为一名精算师，并改变了保险精算的落后，被公认为世界精算师之父的故事",
        url: "https://mp.weixin.qq.com/s?__biz=MjM5MTAyMjIxNg==&mid=2650430262&idx=1&sn=e1a51c66a6ade5bf19d49f18819f1e80&chksm=beb516d189c29fc73106be606312945eb435062d369ba54808c0ba9f76710f8d94f435421974&token=302031980&lang=zh_CN#rd"
    },
    {
        id: "A003",
        title: "“传家宝”的故事",
        summary: "文章一开始讲述一个古代故事，讲述唐镇县城有一家点心铺子叫作好又来，老板张贤古总是想改换门庭做绸缎生意，最后赔光了钱。他母亲传给他一枚顶针，在落魄后他想起了这枚顶真的作用，并且凭借它重开了点心铺子，重回本份经营，长期稳定发展之路。文章后面用终身寿险来说明财富传承的重要性，并展开讲述终身寿险做财富传承的法律依据和实操手段。x",
        url: "https://mp.weixin.qq.com/s?__biz=MjM5MTAyMjIxNg==&mid=2650420890&idx=1&sn=2e2ccdb751d5dc4176d73376f2382e2d&chksm=beb57b7d89c2f26bfdca0deb92b201e9de4b6aa67dfded83a0c2646da7a04a0396da58cec0fc&token=302031980&lang=zh_CN#rd"
    },
    {
        id: "A004",
        title: "【深读】优秀的寿险规划师将成为稀缺资源",
        summary: "很多人习惯用购买日常用品的模式来选择保险，却不知道保险销售的是未来的需求，而日常用品解决的是当下的需求。当我们需要规划未来，那就势必会引发自己没有足够的前瞻性的问题，这就需要优秀的寿险规划师来帮你规划。而当下的保险从业人员面临的问题是生存，在面临被业绩考核的前提下，还愿意用专业的规划来服务你，这样的人就是稀缺资源，且行且珍惜。",
        url: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MjM5MTAyMjIxNg==&action=getalbum&album_id=1618030435723182083#wechat_redirect"
    },
    {
        id: "A005",
        title: "菲律宾自由行攻略之长滩岛",
        summary: "作者亲自体验长滩岛3天旅行后的攻略总结，如果读者只想体验一次菲律宾短期旅行，首推长滩岛。最核心的优势就是可以一直住在这里，不必中途有舟车劳顿。",
        url: "https://mp.weixin.qq.com/s?__biz=MjM5MTAyMjIxNg==&mid=2650430618&idx=1&sn=fa4d70fdd686a4c1430088c7120e5657&chksm=beb5117d89c2986b5dbffe4752058efe18e76deaf23e304ab80a3c35a8b70903d7c3c645ad91&token=302031980&lang=zh_CN#rd"
    },
    {
        id: "A006",
        title: "带老妈去宿务旅行（宿务环岛游攻略）",
        summary: "菲律宾的宿务岛旅行有点像台湾，需要一个环岛游，最值得看的包括沙丁鱼风暴、大海龟、鲸鲨等，缺点就是要一直乘车，而且像鲸鲨需要凌晨3点起床去排队，适合体力好的年轻旅客。",
        url: "https://mp.weixin.qq.com/s?__biz=MjM5MTAyMjIxNg==&mid=2650430722&idx=1&sn=54a6489a83ca2e8f148ad3f482dd073d&chksm=beb510e589c299f335bae10add4cdc2eb5b3874c938a7a48c06fabd520e26294d0fa816d35a2&token=302031980&lang=zh_CN#rd"
    },
    {
        id: "A007",
        title: "【血型与性格V0.1版】A血人的性格特点——工作和事业",
        summary: "不同血型的人性格不同，思考问题和行为模式也不同，本文讲述的是A型血人的工作和事业模式，这属于血型心理学的文章",
        url: "https://mp.weixin.qq.com/s?__biz=MjM5MTAyMjIxNg==&mid=2650409447&idx=1&sn=ca6e53f925df170971965d351da78d55&chksm=beb5440089c2cd16fdf24f159c78494ba5b06b3162e2465c10f58f5ab58e62f3c1ca7ce2b1ab&token=302031980&lang=zh_CN#rd"
    },
    {
        id: "A008",
        title: "【血型与性格V0.1版】O血人的性格特点——社交",
        summary: "不同血型的人性格不同，思考问题和行为模式也不同，本文讲述的是O型血人的社交方式，这属于血型心理学的文章。",
        url: "https://mp.weixin.qq.com/s?__biz=MjM5MTAyMjIxNg==&mid=2650409538&idx=1&sn=fab6398ac2ce415f35cc68841bcca58e&chksm=beb547a589c2ceb3c7ed3bd06f9814cc9742deba21a7dc8ebdde49466520f3dfcc51090f361d&token=302031980&lang=zh_CN#rd"
    },
    {
        id: "A009",
        title: "【血型与性格V0.1版】B血人的性格特点——学习和教育",
        summary: "不同血型的人性格不同，思考问题和行为模式也不同，本文讲述的是B型血人的学习和教育的习惯，这属于血型心理学的文章。",
        url: "https://mp.weixin.qq.com/s?__biz=MjM5MTAyMjIxNg==&mid=2650410280&idx=1&sn=01ceed04382703bcf3dd50886d3768bb&chksm=beb540cf89c2c9d9ce889d3577d150ab464d6321a4d97c19bc89824f51969559b4eda8b4ccc1&token=302031980&lang=zh_CN#rd"
    },
    {
        id: "A010",
        title: "遇之时一人 念则是一生",
        summary: "本文用西游记的故事，讲述养老现金流规划的实际用途。绝大多数的人都会面临老去、长寿，如果没有提前规划好养老现金流，老年生活就会出现危机。即使你想到了规划，但如果没有可持续的长期主义，也可能面临被骗、被啃老的风险。",
        url: "https://mp.weixin.qq.com/s?__biz=MjM5MTAyMjIxNg==&mid=2650403557&idx=1&sn=16da9d04852e4d27c794d514d89d3323&chksm=beb6bf0289c13614cddcf7a8a0b1890860470588f7f6d5057d49787c8d3e05d618536e1f6bc1&token=302031980&lang=zh_CN#rd"
    },
    {
        id: "A011",
        title: "你的养老建仓了吗？",
        summary: "很多人在购买养老保险时会进入一个误区，深陷收益率的对比，但实际上更科学的养老金规划，需要提前算个数字。本文教你如何计算你需要多少养老金，并且在制定目标时协助你。",
        url: "https://mp.weixin.qq.com/s?__biz=MjM5MTAyMjIxNg==&mid=2650407729&idx=1&sn=256c2e9f4f32e6b0916fdc8ddba563c6&chksm=beb54ed689c2c7c00e2cdad2e43bffde777b8c750089acd2d6c282a5b70b0970cdf7fd7f4eee&token=302031980&lang=zh_CN#rd"
    },
];


// ⚠️ 注意：mockArticles 必须被定义为全局变量，以便 index.html 中的脚本可以访问。
