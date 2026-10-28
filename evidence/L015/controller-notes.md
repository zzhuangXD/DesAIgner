# 控制器补充

本项实际选择的是固定提交中的 taste-design，输入仅包含此 Skill。先产生 DESIGN.md 语义规范，再由同一基础模型本地实现 HTML；未调用 Stitch 服务，不称其为 Stitch 生成的屏幕。

首选 generate-design 的实际依赖不满足：当前工具目录中没有 Stitch MCP，且没有设计系统时其流程要求调用另一个 Skill。该判断与替代选择记录在 dependency-check.json。最终方案仍只使用同仓库一个具体 Skill。

已实际打开本地成品，1440、390、320 像素检查均通过，作品切换、键盘激活、资源和控制台记录在 browser-checks.json。字体采用声明的本地回退链，未声称已经打包 Satoshi。原始设计规范、模型输入、输出和截图均保留。
