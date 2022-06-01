const projects = [
  {
    id: 1,
    title: "企业微信 API",
    imgUrl:
      "https://cdn.apifox.cn/app/project-icon/custom/20210930/e21c5d76-623d-4af9-bfc9-fb46d2d1f601.jpg",
  },
  {
    id: 2,
    title: "钉钉 API",
    imgUrl:
      "https://cdn.apifox.cn/app/project-icon/custom/20211115/1fd04512-b157-4328-8fe7-8e4bcc5e23df.png",
  },
  {
    id: 3,
    title: "飞书 API",
    imgUrl:
      "https://cdn.apifox.cn/app/project-icon/custom/20220207/32eec71d-ec28-4aad-8065-ce701687ec9f.png",
  },
  {
    id: 4,
    title: "GitHub API",
    imgUrl:
      "https://cdn.apifox.cn/app/project-icon/custom/20210930/a4a205c4-6648-4fc1-9ec8-b5159d31cb6c.jpg",
  },
  {
    id: 5,
    title: "GitLab API",
    imgUrl:
      "https://cdn.apifox.cn/app/project-icon/custom/2021106/fddb0965-d355-498b-afdc-679cb8e1e6c0.jpg",
  },
];

export default () => {
  return {
    code: 200,
    data: projects,
  };
};
