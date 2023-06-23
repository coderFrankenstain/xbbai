import { NextResponse } from "next/server";

const data = [
  {
    id: "xbb-1",
    name: "chat",
    description: "chat-gpt 镜像网站",
    url: "http://209.126.124.140:7788/",
    icon: "/robot_chat.svg",
  },
  {
    id: "xbb-2",
    name: "code interpreter",
    description: "excel表格处理机器人",
    url: "http://209.126.124.140:8102/",
    icon: "/robot_excel.svg",
  },
  {
    id: "xbb-3",
    name: "agi",
    description: "agi智能工具",
    url: "",
    icon: "/robot_agi.svg",
  },
];

export async function GET() {
  return NextResponse.json(data);
}
