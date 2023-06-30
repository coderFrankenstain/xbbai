import { NextResponse } from "next/server";

const data = [
  {
    id: "xbb-1",
    name: "chat",
    description: "ai聊天机器人",
    url: "http://207.148.15.81:7788/",
    icon: "/robot_chat.svg",
  },
  {
    id: "xbb-2",
    name: "code interpreter",
    description: "excel表格处理机器人",
    url: "http://207.148.15.81:8102/",
    icon: "/robot_excel.svg",
  },
  {
    id: "xbb-3",
    name: "agi",
    description: "agi智能工具",
    url: "",
    icon: "/robot_agi.svg",
  },
  {
    id: "xbb-4",
    name: "chat-next-web",
    description: "你得专属chatgpt聊天",
    url: "http://207.148.15.81:8103/",
    icon: "/robot_nextchat.svg",
  },
  {
    id: "xbb-5",
    name: "敬请期待",
    description: "更多AI工具",
    url: "",
    icon: "/more.svg",
  },
];

export async function GET() {
  return NextResponse.json(data);
}
