# L013 · 按 web-design-guidelines 审查原始输入

输入为专门构造的教学缺陷页，不是生产事故。Skill 版本：1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62；审查规则于 2026-10-29 从上游重新获取，快照在 ../evidence/web-interface-guidelines.md。

## input-before.html

input-before.html:5 - user-scalable=no / maximum-scale=1 → 保留浏览器缩放。
input-before.html:10 - outline:none，无替代焦点样式 → 使用可见的 :focus-visible。
input-before.html:17 - 名字字段缺 label / name / autocomplete → 关联可点击标签，补全语义。
input-before.html:18 - 邮箱字段缺 label / name / autocomplete / type=email / spellcheck=false → 正确邮箱语义和自动填充。
input-before.html:19 - div onclick 不可通过原生键盘提交 → form + button type=submit。
input-before.html:19 - 未做任何校验即报告成功 → 字段旁提示修正方法，提交时聚焦首个错误。
input-before.html:20 - 动态消息无 aria-live → 用 role=status / aria-live=polite 通知结果。
input-before.html:15 - 缺 main 和跳转链接 → 语义主区及键盘跳转入口。

## 修复实现

L013.js 由基础模型实现字段校验和模拟提交；Skill 提供审查规则与发现，不是自动修复程序。固定版标签、可见焦点、原生单选项、inline error 和状态区均在浏览器中验证。输入只存当前 DOM，无网络提交、无持久存储。beforeunload 仅在用户填写且尚未成功演示提交时启用；确认导航取决于浏览器的用户激活策略。

浏览器与代码检查只覆盖此演示及列出的规则。未做真人读屏测试或完整 WCAG 认证。最终检查记录见 ../evidence/browser-checks.json。
