// 请求域名
const SERVICE = "https://ifinderyou.tech/sjtuorg";

// 静态资源域名前缀
const RS_SERVICE = "https://ifinderyou.tech/resources";

const FUNDE_BUG_API_KEY = '39ed77bbd931ddb00cd96254d9032e1537124ece8daf4d29c63ebd32c49f491b'

// Identity of sender
const SENDER_IDENTITY = [
  { code: 1, name: '在校本科生' },
  { code: 2, name: '在校硕士生' },
  { code: 3, name: '在校博士生' },
  { code: 4, name: '教职工' },
  { code: 5, name: '校友' },
  { code: 6, name: '其他'}
]

// 学院配置
const DEPART_LIST = [
    {
        "code": "1",
        "name": "船舶海洋与建筑工程学院"
    },
    {
        "code": "2",
        "name": "机械与动力工程学院"
    },
    {
        "code": "3",
        "name": "电子信息与电气工程学院"
    },
    {
        "code": "4",
        "name": "材料科学与工程学院"
    },
    {
        "code": "5",
        "name": "数学科学学院"
    },
    {
        "code": "6",
        "name": "物理与天文学院"
    },
    {
        "code": "7",
        "name": "生命科学技术学院"
    },
    {
        "code": "8",
        "name": "生物医学工程学院"
    },
    {
        "code": "9",
        "name": "Bio-X研究院"
    },
    {
        "code": "10",
        "name": "人文学院"
    },
    {
        "code": "11",
        "name": "化学化工学院"
    },
    {
        "code": "12",
        "name": "安泰经济与管理学院"
    },
    {
        "code": "13",
        "name": "国际与公共事务学院"
    },
    {
        "code": "14",
        "name": "外国语学院"
    },
    {
        "code": "15",
        "name": "农业与生物学院"
    },
    {
        "code": "16",
        "name": "环境科学与工程学院"
    },
    {
        "code": "17",
        "name": "药学院"
    },
    {
        "code": "18",
        "name": "凯原法学院"
    },
    {
        "code": "19",
        "name": "媒体与传播学院"
    },
    {
        "code": "20",
        "name": "继续教育学院"
    },
    {
        "code": "21",
        "name": "马克思主义学院"
    },
    {
        "code": "22",
        "name": "致远学院"
    },
    {
        "code": "23",
        "name": "体育系"
    },
    {
        "code": "24",
        "name": "巴黎高科卓越工程师学院"
    },
    {
        "code": "25",
        "name": "上海交大-南加州大学文化创意产业学院"
    },
    {
        "code": "26",
        "name": "中英国际低碳学院"
    },
    {
        "code": "27",
        "name": "海外教育学院"
    },
    {
        "code": "28",
        "name": "图书馆"
    },
    {
        "code": "29",
        "name": "高等教育研究院"
    },
    {
        "code": "30",
        "name": "中美物流研究院"
    },
    {
        "code": "31",
        "name": "中欧国际工商学院"
    },
    {
        "code": "32",
        "name": "密西根学院"
    },
    {
        "code": "33",
        "name": "上海高级金融学院"
    },
    {
        "code": "34",
        "name": "创业学院"
    },
    {
        "code": "35",
        "name": "上海中医药大学"
    },
    {
        "code": "36",
        "name": "网络信息中心"
    },
    {
        "code": "37",
        "name": "教育技术中心"
    },
    {
        "code": "38",
        "name": "档案馆"
    },
    {
        "code": "39",
        "name": "分析测试中心"
    },
    {
        "code": "40",
        "name": "出版社有限公司"
    },
    {
        "code": "41",
        "name": "交大附属中学"
    },
    {
        "code": "42",
        "name": "学生创新中心"
    },
    {
        "code": "43",
        "name": "航空航天学院"
    },
    {
        "code": "44",
        "name": "系统生物医学研究院"
    },
    {
        "code": "45",
        "name": "人文艺术研究院"
    },
    {
        "code": "46",
        "name": "先进产业技术研究院"
    },
    {
        "code": "47",
        "name": "自然科学研究院"
    },
    {
        "code": "48",
        "name": "海洋水下工程科学研究院有限公司"
    },
    {
        "code": "49",
        "name": "钱学森图书馆"
    },
    {
        "code": "50",
        "name": "教学发展中心"
    },
    {
        "code": "51",
        "name": "数据科学研究中心"
    },
    {
        "code": "52",
        "name": "个性化医学研究院"
    },
    {
        "code": "53",
        "name": "李政道研究所"
    },
    {
        "code": "54",
        "name": "上海智能制造研究院"
    },
    {
        "code": "55",
        "name": "安徽陶铝新材料研究院"
    },
    {
        "code": "56",
        "name": "日本研究中心"
    },
    {
        "code": "57",
        "name": "设计学院"
    },
    {
        "code": "58",
        "name": "海洋学院"
    },
    {
        "code": "59",
        "name": "党政办公室"
    },
    {
        "code": "60",
        "name": "党委组织部"
    },
    {
        "code": "61",
        "name": "纪委办公室"
    },
    {
        "code": "62",
        "name": "党委宣传部"
    },
    {
        "code": "63",
        "name": "学指委、团委（含学生处、人武部）"
    },
    {
        "code": "64",
        "name": "工会妇委会"
    },
    {
        "code": "65",
        "name": "党委统战部"
    },
    {
        "code": "66",
        "name": "信息安全管理办公室"
    },
    {
        "code": "67",
        "name": "教务处"
    },
    {
        "code": "68",
        "name": "研究生院"
    },
    {
        "code": "69",
        "name": "科学技术发展研究院"
    },
    {
        "code": "70",
        "name": "国际合作与交流处"
    },
    {
        "code": "71",
        "name": "人力资源处（党委教师工作部）"
    },
    {
        "code": "72",
        "name": "财务计划处"
    },
    {
        "code": "73",
        "name": "保卫处"
    },
    {
        "code": "74",
        "name": "规划发展处"
    },
    {
        "code": "75",
        "name": "基建处"
    },
    {
        "code": "76",
        "name": "资产管理与实验室处"
    },
    {
        "code": "77",
        "name": "校园管理办公室"
    },
    {
        "code": "78",
        "name": "文科建设处"
    },
    {
        "code": "79",
        "name": "发展联络处"
    },
    {
        "code": "80",
        "name": "学科发展与建设处（已撤销）"
    },
    {
        "code": "81",
        "name": "招投标与政府采购办公室"
    },
    {
        "code": "82",
        "name": "科研生产质量管理办公室"
    },
    {
        "code": "83",
        "name": "“转化医学国家重大科技基础设施（上海）”项目建设指挥部办公室"
    },
    {
        "code": "84",
        "name": "国有资产监督管理委员会办公室"
    },
    {
        "code": "85",
        "name": "校友总会办公室"
    },
    {
        "code": "86",
        "name": "审计处"
    },
    {
        "code": "87",
        "name": "李政道研究所建设指挥部办公室"
    },
    {
        "code": "88",
        "name": "其他部门"
    },
    {
        "code": "89",
        "name": "医学院"
    },
    {
        "code": "90",
        "name": "后勤保障中心"
    },
    {
        "code": "91",
        "name": "产业投资管理（集团）有限公司、企业管理中心"
    },
    {
        "code": "92",
        "name": "教育服务产业投资管理（集团）有限公司"
    },
    {
        "code": "93",
        "name": "知识产权管理有限公司"
    },
    {
        "code": "94",
        "name": "人才交流中心"
    }
]

module.exports = {
    SERVICE: SERVICE,
    RS_SERVICE: RS_SERVICE,
    DEPART_LIST: DEPART_LIST,
    SENDER_IDENTITY: SENDER_IDENTITY,
    FUNDE_BUG_API_KEY
} 