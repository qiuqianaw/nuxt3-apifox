const links = [
  {
    id: 1,
    title: "首页",
    link: "/",
  },
  {
    id: 2,
    title: "API Hub",
    link: "/api-hub",
  },
  {
    id: 3,
    title: "帮助",
    link: "/help",
  },
  {
    id: 4,
    title: "价格",
    link: "/price",
  },
  {
    id: 5,
    title: "交流群",
    link: "/communication",
  },
  {
    id: 6,
    title: "私有化部署",
    link: "/private-deploy",
  },
  {
    id: 7,
    title: "建议反馈",
    link: "/feedback",
  },
];

export default () => {
  return {
    code: 200,
    data: links,
  };
};
