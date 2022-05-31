const downloadLinks = [
  {
    title: "下载 Windows 桌面版（64位）",
    url: "https://cdn.apifox.cn/download/Apifox-windows-latest.zip",
  },
  {
    title: "下载 Windows 桌面版（32位）",
    url: "https://cdn.apifox.cn/download/Apifox-win32-latest.zip",
  },
  {
    title: "下载 MacOS 桌面版（Intel 芯片）",
    url: "https://cdn.apifox.cn/download/Apifox-macOS-latest.zip",
  },
  {
    title: "下载 MacOS 桌面版（M1 芯片）",
    url: "https://cdn.apifox.cn/download/Apifox-macOS-arm64-latest.zip",
  },
  {
    title: "下载 Linux 桌面版（.Appimage）",
    url: "https://cdn.apifox.cn/download/Apifox-linux-latest.zip",
  },
  {
    title: "下载 Linux 桌面版（.tar.gz）",
    url: "https://cdn.apifox.cn/download/Apifox-linux-manual-latest.tar.gz",
  },
  {
    title: "下载 Linux 桌面版（.deb）",
    url: "https://cdn.apifox.cn/download/Apifox-linux-deb-latest.zip",
  },
  {
    title: "下载 Linux 桌面版（arm .Appimage）",
    url: "https://cdn.apifox.cn/download/Apifox-linux-arm64-latest.zip",
  },
  {
    title: "下载 Linux 桌面版（arm .deb",
    url: "https://cdn.apifox.cn/download/Apifox-linux-arm64-deb-latest.zip",
  },
];

export default () => {
  return {
    code: 200,
    data: downloadLinks,
  };
};
