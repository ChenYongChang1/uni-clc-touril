import simingshan from "./article/simingshan";
import shuitongao from "./article/shuitongao";
import weihangAncientRoad from "./article/weihangAncientRoad";
import yanbangAncientRoad from "./article/yanbangAncientRoad";
import zhangliAncientRoad from "./article/zhangliAncientRoad";
import chaxungudao from "./article/chaxungudao";
import jiuxishibajian from "./article/jiuxishibajian";
import malingudao from "./article/malingudao";
import meiwugudao from "./article/meiwugudao";
import zoumagang from "./article/zoumagang";
const OSS_PATH = "https://clc-tourism-mp.oss-cn-beijing.aliyuncs.com/mp";
export default [
  {
    id: 1,
    title: "水桶岙海岸线徒步｜浙版麦理浩径，探寻山海间的绮丽之约",
    content: shuitongao,
    cover: OSS_PATH + "/shuitongao.jpg",
    position: {
      text: "水桶岙",
    },
  },
  {
    id: 2,
    title: "探秘四明山：诗意山水间，镌刻灵魂的难忘之旅",
    content: simingshan,
    cover: OSS_PATH + "/simingshan.jpg",
    position: {
      text: "四明山",
    },
  },
  {
    id: 3,
    title: "国家地理推荐｜徽杭古道轻装穿越",
    content: weihangAncientRoad,
    cover: OSS_PATH + "/weihangAncientRoad.jpg",
    position: {
      text: "徽杭古道",
    },
  },
  {
    id: 4,
    title: "绍兴千年盐帮古道徒步 山水相逢，邂逅一场穿越时光的自然盛宴",
    content: yanbangAncientRoad,
    cover: OSS_PATH + "/yanbangAncientRoad.jpg",
    position: {
      text: "绍兴",
    },
  },
  {
    id: 5,
    title: "竹韵溪声·寻迹章里古道",
    content: zhangliAncientRoad,
    cover: OSS_PATH + "/zhangliAncientRoad.jpg",
    position: {
      text: "章里古道",
    },
  },
  {
    id: 6,
    title: "九溪十八涧：山水灵韵处，一径入江南",
    content: jiuxishibajian,
    cover: OSS_PATH + "/jiuxishibajian.jpg",
    position: {
      text: "九溪十八涧",
    },
  },
  {
    id: 7,
    title: "陆羽问茶寻古道，南浔枕水听流年",
    content: chaxungudao,
    cover: OSS_PATH + "/chaxungudao.jpg",
    position: {
      text: "茶寻古道",
    },
  },
  {
    id: 8,
    title: "桐庐马岭古道：走进富春山居的梦幻徒步之旅",
    content: malingudao,
    cover: OSS_PATH + "/malingudao.jpg",
    position: {
      text: "马岭古道",
    },
  },
  {
    id: 9,
    title: "梅坞苔阶藏鹤迹，九寨分镜落江南",
    content: meiwugudao,
    cover: OSS_PATH + "/meiwugudao.png",
    position: {
      text: "梅坞古道",
    },
  },
  {
    id: 10,
    title: "走马岗：千年榧林秘境，越中山水传奇",
    content: zoumagang,
    cover: OSS_PATH + "/zoumagang.jpg",
    position: {
      text: "走马岗",
    },
  },
];
