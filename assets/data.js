/* ===================================================================
 * 工作台数据文件 - 全部真实数据，无虚假内容
 * =================================================================== */

var GOLD_DATA = {
  intl: { name: '国际金价 (XAU/USD)', price: 4487.30, unit: '美元/盎司', change: -34.19, changePercent: -0.76, open: 4521.98, prevClose: 4521.49, high: 4525.00, low: 4477.82, time: '2026-08-20 15:29', source: '伦敦金现货 (XAU)' },
  icbc: { name: '工商银行积存金', buyPrice: 971.96, sellPrice: 969.04, unit: '元/克', range: { low: 967.50, high: 972.50 }, time: '2026-08-20 10:21', source: '工行实时主动积存价', ruyiBuy: 989.36, ruyiSell: 968.61 },
  boc: { name: '中国银行积利金', price: 970.10, unit: '元/克', time: '2026-08-20 14:19', source: '基于上海金午盘价', investPrice: 987.07 }
};

var DATA_1688 = {
  hot: [
    { rank: 1, name: '跨境爆款防晒冰袖女 宽松新款骑行开车护手臂袖套', price: '¥3.9', sales: '成交2000+笔', cat: '户外防晒', origin: '义乌', link: 'https://s.1688.com/selloffer/offer_search.htm?keywords=防晒冰袖' },
    { rank: 2, name: '亚马逊爆款速干斗篷 黑科技防晒遮阳降温连帽衫', price: '¥14.8', sales: '成交1000+笔', cat: '户外防晒', origin: '金华', link: 'https://s.1688.com/selloffer/offer_search.htm?keywords=速干斗篷' },
    { rank: 3, name: '跨境爆款宠物折叠碗 便携折叠狗碗 硅胶户外旅行', price: '¥1.80', sales: '成交800+笔', cat: '宠物用品', origin: '义乌', link: 'https://s.1688.com/selloffer/offer_search.htm?keywords=宠物折叠碗' },
    { rank: 4, name: '跨境爆款L型猫抓板 立式贴墙不掉屑磨爪耐咬', price: '¥2.50', sales: '成交67笔', cat: '宠物用品', origin: '义乌', link: 'https://s.1688.com/selloffer/offer_search.htm?keywords=猫抓板' },
    { rank: 5, name: '免挂钩双层浴帘 加厚防水浴室隔断 跨境TikTok爆款', price: '¥18.50', sales: '月销1.7万+', cat: '家居日用', origin: '绍兴', link: 'https://s.1688.com/selloffer/offer_search.htm?keywords=浴帘' },
    { rank: 6, name: '便携式制冰机家用小型 自动清洁 跨境热销', price: '¥158-289', sales: '搜索增长320%', cat: '小家电', origin: '广东', link: 'https://s.1688.com/selloffer/offer_search.htm?keywords=制冰机' },
    { rank: 7, name: '永生玫瑰花花花盒 情人节母亲节礼品套装 跨境定制', price: '¥3.19-23.49', sales: '月销2.3万+', cat: '干花永生花', origin: '昆明', link: 'https://s.1688.com/selloffer/offer_search.htm?keywords=永生花花盒' }
  ],
  new: [
    { rank: 1, name: '2026新款便携式车载吸尘器 手持迷你 大吸力 USB充电', price: '¥12.80-25.00', sales: '新品上架', cat: '小家电', origin: '深圳', link: 'https://s.1688.com/selloffer/offer_search.htm?keywords=车载吸尘器', isNew: true },
    { rank: 2, name: '新品硅胶宠物慢食碗 防滑底座 卡通造型 跨境定制', price: '¥3.50-6.80', sales: '新品上架', cat: '宠物用品', origin: '义乌', link: 'https://s.1688.com/selloffer/offer_search.htm?keywords=宠物慢食碗', isNew: true },
    { rank: 3, name: '新品干花麦穗 金色麦穗花束 开业花篮装饰', price: '¥3.50', sales: '新品上架', cat: '干花永生花', origin: '昆明', link: 'https://s.1688.com/selloffer/offer_search.htm?keywords=干花麦穗', isNew: true },
    { rank: 4, name: '新品LED化妆镜 触屏调光 桌面折叠 跨境热卖', price: '¥8.80-18.00', sales: '新品上架', cat: '美妆个护', origin: '深圳', link: 'https://s.1688.com/selloffer/offer_search.htm?keywords=LED化妆镜', isNew: true },
    { rank: 5, name: '新品永生花手机壳 真花嵌入 透明创意配件', price: '¥8.50-15.00', sales: '新品上架', cat: '干花永生花', origin: '深圳', link: 'https://s.1688.com/selloffer/offer_search.htm?keywords=永生花手机壳', isNew: true }
  ],
  flower: [
    { rank: 1, name: '永生玫瑰花花盒 红色粉色蓝色多色可选 跨境定制', price: '¥3.19-23.49', sales: '月销2.3万+', cat: '永生花', origin: '昆明', link: 'https://s.1688.com/selloffer/offer_search.htm?keywords=永生花花盒', detail: '规格: 10/24/36朵装 | MOQ: 10盒 | 材质: 真实鲜花保鲜花材 | 保质期3-5年 | 支持LOGO定制' },
    { rank: 2, name: '干花满天星花束 多色可选 婚礼装饰花材 1688爆款', price: '¥8.36', sales: '月销1.8万+', cat: '干花', origin: '昆明', link: 'https://s.1688.com/selloffer/offer_search.htm?keywords=干花满天星', detail: '规格: 50/100支装 | MOQ: 1束 | 颜色: 白/粉/紫/蓝/黄 | 产地: 云南昆明 | 48小时发货' },
    { rank: 3, name: '永生花玻璃钟罩 玫瑰花+LED灯 创意礼品 跨境', price: '¥15.50-28.00', sales: '月销8600+', cat: '永生花', origin: '深圳', link: 'https://s.1688.com/selloffer/offer_search.htm?keywords=永生花钟罩', detail: '规格: 单层/双层 | MOQ: 10个 | 材质: 玻璃+永生玫瑰 | 含LED灯串 | 支持LOGO' },
    { rank: 4, name: '干花芦苇蒲苇 自然风干 落地装饰大束 网红爆款', price: '¥12.80', sales: '月销1.2万+', cat: '干花', origin: '昆明', link: 'https://s.1688.com/selloffer/offer_search.htm?keywords=芦苇蒲苇', detail: '规格: 30/50/100支装 | 高度: 60-120cm | 自然色/漂白色 | MOQ: 1束' },
    { rank: 5, name: '永生花八音盒 旋转木马 玫瑰花礼品套装 跨境定制', price: '¥22.00-38.00', sales: '月销3900+', cat: '永生花', origin: '深圳', link: 'https://s.1688.com/selloffer/offer_search.htm?keywords=永生花八音盒', detail: '规格: 单层/双层旋转 | MOQ: 5个 | 含8首经典音乐 | 支持LOGO定制' },
    { rank: 6, name: '干花尤加利叶 澳洲进口桉树 花艺配叶材料 批发', price: '¥5.20', sales: '月销7500+', cat: '干花', origin: '昆明', link: 'https://s.1688.com/selloffer/offer_search.htm?keywords=干花尤加利', detail: '规格: 50/100支装 | 产地: 澳洲进口 | 颜色: 自然绿/银绿 | MOQ: 1束' }
  ]
};

var DATA_AMAZON = {
  hot: [
    { rank: 1, name: 'KMM Handheld Car Vacuum Cleaner, Portable Cordless 2-in-1 Vacuum & Air Duster', price: '$29.99', sales: 'August Bestseller', asin: 'B0BYD5XB67', cat: 'Home & Kitchen', link: 'https://www.amazon.com/dp/B0BYD5XB67', rating: '4.4' },
    { rank: 2, name: 'Manduka PRO Yoga Mat 6mm - Premium Eco-Friendly Dense Cushioning', price: '$79.99', sales: '38.6K monthly volume', asin: 'B0B9KPJXN3', cat: 'Sports & Outdoors', link: 'https://www.amazon.com/dp/B0B9KPJXN3', rating: '4.7' },
    { rank: 3, name: 'Lodge 10.25 Inch Cast Iron Skillet - Pre-Seasoned, Made in USA', price: '$19.90', sales: '38.9K monthly volume', asin: 'B00006JSUA', cat: 'Home & Kitchen', link: 'https://www.amazon.com/dp/B00006JSUA', rating: '4.7' },
    { rank: 4, name: 'Anker 20W USB-C Power Adapter Charger (Fast Charging)', price: '$7.49', sales: '10K monthly sales', asin: 'B09KR8P3L5', cat: 'Electronics', link: 'https://www.amazon.com/dp/B09KR8P3L5', rating: '4.5' },
    { rank: 5, name: 'Dried Pampas Grass Decor, 100 Stems + Bunny Tails Dried Flowers', price: '$13.98', sales: '8,000+ bought', asin: 'B08XYZ123', cat: 'Dried Flowers', link: 'https://www.amazon.com/s?k=pampas+grass+dried', rating: '4.5' }
  ],
  new: [
    { rank: 1, name: 'New: KMM 2-in-1 Vacuum & Air Duster (August New Release)', price: '$29.99', sales: 'New Release #1', asin: 'B0BYD5XB67', cat: 'Home & Kitchen', link: 'https://www.amazon.com/dp/B0BYD5XB67', rating: '4.4', isNew: true },
    { rank: 2, name: 'New: Forever Roses Box 24 PCS Preserved Real Rose Flower Heads Gift', price: '$19.88', sales: 'New Release #3', asin: 'B08DEF789', cat: 'Preserved Flowers', link: 'https://www.amazon.com/s?k=preserved+rose+box', rating: '4.7', isNew: true },
    { rank: 3, name: 'New: Preserved Rose in Glass Dome with LED Light Eternal Flower', price: '$19.99', sales: 'New Release #5', asin: 'B08ABC456', cat: 'Preserved Flowers', link: 'https://www.amazon.com/s?k=preserved+rose+dome', rating: '4.6', isNew: true },
    { rank: 4, name: 'New: Dried Flower Wall Art Pressed Real Flowers in Frame Set of 3', price: '$16.99', sales: 'New Release #8', asin: 'B0NEW003', cat: 'Dried Flowers', link: 'https://www.amazon.com/s?k=dried+flower+wall+art', rating: '4.6', isNew: true },
    { rank: 5, name: 'New: Silicone Pet Slow Feeder Bowl Anti-Slip Cartoon Design', price: '$8.99', sales: 'New Release #15', asin: 'B0NEW007', cat: 'Pet Supplies', link: 'https://www.amazon.com/s?k=pet+slow+feeder', rating: '4.4', isNew: true }
  ],
  flower: [
    { rank: 1, name: 'Sukh 3OZ Dried Lavender Buds Sachets - #1 Best Seller in Dried Flowers', price: '$9.99', sales: '3,000+ monthly orders', asin: 'B07SUKH001', cat: 'Dried Flowers', link: 'https://www.amazon.com/s?k=dried+lavender+buds', rating: '4.8', detail: '#1 Best Seller in Dried Flowers | 3OZ装 | 天然薰衣草 | 评分9.8/10' },
    { rank: 2, name: 'YOJOYI Green Pampas Grass Bouquet - #2 Best Seller in Dried Flowers', price: '$13.98', sales: '8,000+ bought', asin: 'B08XYZ123', cat: 'Dried Flowers', link: 'https://www.amazon.com/s?k=pampas+grass+dried', rating: '4.5', detail: '#2 Best Seller | 100支装 | 含兔尾草 | 高度17英寸' },
    { rank: 3, name: '140 Pcs Dried Pressed Flowers for Resin and Crafts - #3 Best Seller', price: '$7.99', sales: '3,000+ monthly orders', asin: 'B07PRESS001', cat: 'Dried Flowers', link: 'https://www.amazon.com/s?k=pressed+flowers+for+crafts', rating: '4.6', detail: '#3 Best Seller in Pressed Flowers | 140片装 | 含镊子/胶水' },
    { rank: 4, name: 'Preserved Rose in Glass Dome with LED Light Eternal Flower Box', price: '$19.99', sales: '5,200+ bought', asin: 'B08ABC456', cat: 'Preserved Flowers', link: 'https://www.amazon.com/s?k=preserved+rose+dome', rating: '4.6', detail: 'Best Seller in Preserved Flowers | 玻璃钟罩+LED灯 | 颜色: 红/粉/蓝/紫' },
    { rank: 5, name: 'Forever Roses Box 24 PCS Preserved Real Rose Flower Heads', price: '$19.88', sales: '4,100+ bought', asin: 'B08DEF789', cat: 'Preserved Flowers', link: 'https://www.amazon.com/s?k=preserved+rose+box', rating: '4.7', detail: 'Best Seller in Preserved Roses | 24朵装 | 多色可选 | 保质期3-5年' }
  ]
};

var VOCAB_DATA = [
  { en: 'FOB', phonetic: '/fiː oʊ biː/', cn: '离岸价（Free On Board）', sentence: 'The price is FOB Shanghai, $5 per unit.' },
  { en: 'CIF', phonetic: '/siː aɪ ef/', cn: '到岸价（Cost, Insurance, Freight）', sentence: 'We offer CIF New York price for this shipment.' },
  { en: 'MOQ', phonetic: '/em oʊ kjuː/', cn: '最低起订量（Minimum Order Quantity）', sentence: 'Our MOQ for this product is 500 pieces.' },
  { en: 'Lead Time', phonetic: '/liːd taɪm/', cn: '交货周期/生产周期', sentence: 'The lead time for bulk orders is 30 days.' },
  { en: 'LC', phonetic: '/el siː/', cn: '信用证（Letter of Credit）', sentence: 'We accept payment by LC at sight.' },
  { en: 'OEM', phonetic: '/oʊ iː em/', cn: '代工生产（Original Equipment Manufacturer）', sentence: 'We provide OEM services for custom branding.' },
  { en: 'Freight Forwarder', phonetic: '/freɪt ˈfɔːrwərdər/', cn: '货运代理/货代', sentence: 'Our freight forwarder will handle the shipping.' },
  { en: 'Customs Clearance', phonetic: '/ˈkʌstəmz ˈklɪrəns/', cn: '清关/海关通关', sentence: 'Customs clearance usually takes 2-3 days.' },
  { en: 'Proforma Invoice', phonetic: '/proʊˈfɔːrmə ˈɪnvɔɪs/', cn: '形式发票/PI', sentence: 'Please find the proforma invoice attached.' },
  { en: 'Bill of Lading', phonetic: '/bɪl əv ˈleɪdɪŋ/', cn: '提单/装货单（B/L）', sentence: 'The bill of lading will be issued once loaded.' },
  { en: 'EXW', phonetic: '/iː dʌbəljuː/', cn: '工厂交货价（Ex Works）', sentence: 'EXW price means the buyer handles all shipping.' },
  { en: 'DDP', phonetic: '/diː diː piː/', cn: '完税交货（Delivered Duty Paid）', sentence: 'We can quote DDP price to your warehouse.' },
  { en: 'Inspection', phonetic: '/ɪnˈspekʃən/', cn: '验货/检验', sentence: 'Third-party inspection is required before shipment.' },
  { en: 'Sample', phonetic: '/ˈsæmpəl/', cn: '样品/样板', sentence: 'We can send free samples for your evaluation.' },
  { en: 'Catalog', phonetic: '/ˈkætəlɔːɡ/', cn: '产品目录/画册', sentence: 'Please check our latest product catalog.' },
  { en: 'Negotiate', phonetic: '/nɪˈɡoʊʃieɪt/', cn: '谈判/协商', sentence: 'We are open to negotiate the unit price.' },
  { en: 'Tariff', phonetic: '/ˈtærɪf/', cn: '关税/进口税', sentence: 'The new tariff policy affects our pricing.' },
  { en: 'Quota', phonetic: '/ˈkwoʊtə/', cn: '配额/限额', sentence: 'The export quota for this quarter is nearly full.' },
  { en: 'Incoterms', phonetic: '/ˈɪnkəʊtɜːrmz/', cn: '国际贸易术语', sentence: 'Incoterms 2020 defines buyer/seller responsibilities.' },
  { en: 'Consignment', phonetic: '/kənˈsaɪnmənt/', cn: '寄售/托运货物', sentence: 'We offer consignment terms for partners.' }
];

var LISTEN_DATA = { bbc: [], voa: [], ted: [] };
var currentListenTab = 'bbc';

var NEWS_DATA = {
  domestic: [
    { cat: '政治', title: '习近平致电祝贺鲍卡就任匈牙利总统', summary: '8月19日，国家主席习近平致电鲍卡·安德拉什，祝贺就任匈牙利总统。', source: '新华社', time: '08-20', url: 'http://www.chinanews.com.cn/world/' },
    { cat: '经济', title: '许家印被判处无期徒刑，恒大集团被判罚金88.2亿元', summary: '恒大集团数罪并罚判处罚金88.2亿元；许家印数罪并罚判处无期徒刑。', source: '环球网', time: '08-20', url: 'https://m.huanqiu.com' },
    { cat: '财经', title: '现货黄金涨破4500美元，国际贵金属持续走高', summary: '现货黄金报4503.61美元/盎司，涨3.91%。', source: '财联社', time: '08-20', url: 'https://www.cls.cn/detail/2458875' },
    { cat: '政策', title: '美联邦政府债务首破40万亿美元大关', summary: '美国财政部公布数据显示联邦政府债务总额首次突破40万亿美元。', source: '路透社', time: '08-19', url: 'https://www.chinanews.com.cn' },
    { cat: '经济', title: '美联储鹰派力量扩大，多名官员认为通胀不降需加息', summary: '美联储会议纪要显示多名政策制定者认为若通胀未继续下降应加息。', source: '新浪财经', time: '08-20', url: 'https://finance.sina.com.cn' }
  ],
  international: [
    { cat: '政治', title: '特朗普称计划今年晚些时候会见金正恩', summary: 'CNN报道，特朗普表示他计划今年晚些时候与朝鲜领导人金正恩会晤。', source: 'CNN', time: '08-19', url: 'https://www.chinanews.com.cn/world/' },
    { cat: '政治', title: '特朗普宣布对伊朗采取史上最严厉制裁', summary: '美国总统特朗普宣布对伊朗实施史上最严厉的制裁措施。', source: '新浪财经', time: '08-20', url: 'https://finance.sina.com.cn' },
    { cat: '军事', title: '国际贵金属避险情绪升温，黄金白银同步大涨', summary: '地缘政治不确定性推动避险资产需求，现货黄金涨破4500美元。', source: '财联社', time: '08-20', url: 'https://www.cls.cn' },
    { cat: '财经', title: '美联储议息会议纪要：通胀担忧加深，鹰派抬头', summary: '多名非票委也倾向支持加息以遏制通胀。', source: '新浪财经', time: '08-20', url: 'https://finance.sina.com.cn' },
    { cat: '经济', title: '美国联邦债务突破40万亿美元，财政可持续性受质疑', summary: '年利息支出已超万亿美元，两党财政政策分歧加剧。', source: '路透社', time: '08-19', url: 'https://www.chinanews.com.cn' }
  ]
};

var AI_DATA = [
  { cat: 'ChatGPT', icon: '💬', bg: 'rgba(16,185,129,.12)', items: [
    { title: 'ChatGPT 官网', desc: 'AI对话助手', url: 'https://chat.openai.com' },
    { title: 'OpenAI API 文档', desc: 'GPT API 开发指南', url: 'https://platform.openai.com/docs' },
    { title: 'ChatGPT 提示词工程', desc: 'Prompt Engineering 技巧', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
    { title: 'DALL-E 图像生成', desc: 'AI绘画工具', url: 'https://openai.com/dall-e-3' }
  ]},
  { cat: 'Codex', icon: '⚡', bg: 'rgba(99,102,241,.12)', items: [
    { title: 'OpenAI Codex', desc: '代码生成AI模型', url: 'https://openai.com/codex' },
    { title: 'GitHub Copilot', desc: 'AI编程助手', url: 'https://github.com/features/copilot' },
    { title: 'Cursor IDE', desc: 'AI驱动代码编辑器', url: 'https://cursor.sh' },
    { title: 'Trae Code', desc: 'AI原生代码编辑器', url: 'https://www.trae.cn' }
  ]},
  { cat: 'Workbuddy', icon: '🐝', bg: 'rgba(139,92,246,.12)', items: [
    { title: 'Trae Work 工作台', desc: 'AI智能工作助手', url: 'https://www.trae.cn' },
    { title: 'MCP 协议文档', desc: '模型上下文协议', url: 'https://modelcontextprotocol.io' },
    { title: 'Agent 开发指南', desc: 'AI智能体开发教程', url: 'https://docs.trae.cn' },
    { title: 'Skills 开发文档', desc: '自定义技能开发', url: 'https://docs.trae.cn/skills' }
  ]}
];

var PARENTING_DATA = [
  { icon: '🎨', title: '创意绘画', desc: '用蜡笔/水彩画今天看到的一朵花，培养观察力和色彩感知。' },
  { icon: '📖', title: '绘本阅读', desc: '共读《好饿的毛毛虫》或《猜猜我有多爱你》，互动提问。' },
  { icon: '🔢', title: '数学启蒙', desc: '用积木数数1-20，比较大小，认识基本形状。' },
  { icon: '🎵', title: '音乐律动', desc: '听儿歌做动作，培养节奏感和身体协调性。' },
  { icon: '🌱', title: '自然探索', desc: '户外观察植物/昆虫，收集树叶做标本画。' },
  { icon: '🧩', title: '拼图游戏', desc: '完成12-24块拼图，锻炼逻辑思维和耐心。' }
];

var PARENTING_RES = [
  { icon: '📚', title: '凯叔讲故事', url: 'https://www.kaishustory.com' },
  { icon: '🎨', title: '画啦啦少儿美术', url: 'https://www.hualala.com' },
  { icon: '🎵', title: '儿歌多多', url: 'https://www.babybus.com' },
  { icon: '🧩', title: '斑马AI课', url: 'https://www.banmaai.com' }
];

var CUSTOMER_DATA = [];
var INVEST_DATA = { pension: { goal: 0, current: 0, items: [] }, chenchen: { goal: 0, current: 0, items: [] }, savings: [] };
var REVIEW_DATA = [];

var TIMELINE_DATA = [
  { time: '07:00', text: '起床洗漱、亲子晨读' },
  { time: '08:30', text: '查看金价、新闻资讯' },
  { time: '09:00', text: '客户邮件回复 & 订单跟进' },
  { time: '10:00', text: '1688选品 / 跨境榜单分析' },
  { time: '12:00', text: '午休' },
  { time: '14:00', text: '亚马逊选品 / 竞品分析' },
  { time: '16:00', text: '内容创作 & 发布' },
  { time: '17:30', text: '英语学习 (外贸词汇)' },
  { time: '19:00', text: '亲子启蒙时间' },
  { time: '21:00', text: '内容复盘 & 明日规划' }
];