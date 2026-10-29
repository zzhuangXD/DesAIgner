# 第三方素材与授权说明

本项目包含不同来源的素材与依赖；不对第三方内容统一重新授权。

## L008 摄影与字体

四张东京街景摄影来自 Wikimedia Commons，作者 **Basile Morin**，遵循 **CC BY-SA 4.0**。完整标题、原图页面与许可链接保留在 [credits.json](samples/L008/assets/credits.json) 及网页页脚。照片作为当代城市氛围参考，不冒充虚构展览的展品记录。展示时可能作 object-fit 裁切，未重新调色或合成；照片及其适用的修改保留原许可。

Archivo 字体及其 OFL 许可保留在 `samples/L008/assets/`。

## L014 运行依赖

网页离线打包了 React、Radix、Tailwind 及其相关依赖。原始许可文件保留在 `samples/L014/licenses/`，不可因打包而移除。

## 设计 Skill 来源

Gallery 中每个 Skill 原文链接指向各上游仓库的固定提交；本公开站点不重新分发 Skill 全文或完整上游仓库。来源及提交见 `comparison.json` 与各项 `run.json`。本地实验保留的上游许可副本随来源记录保存在 `evidence/Lxxx/licenses/`。

各作者、厂商与工具名称仅作来源标注；本项目的样例和结论不代表其认可。

## 独立能力案例

`capabilities/L014/` 使用与原 L014 相同的本地 React、Radix、Tailwind 和相关运行依赖，完整许可证仍保留在 `samples/L014/licenses/`，bundle 亦附 `workbench.js.LEGAL.txt`。新增案例不包含第三方图片、在线字体或外部艺术素材。

`capabilities/evidence/web-interface-guidelines.md` 是本次审查读取的 Vercel Web Interface Guidelines 快照，来源为 https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md ，仅用于本次规则可追溯性。Skill 固定版本与适用边界见 `capabilities/README.md`。
