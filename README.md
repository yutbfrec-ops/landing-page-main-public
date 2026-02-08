# Client-Ready Landing Page

這是一個不依賴框架的純 `HTML + CSS + JS` 落地頁範本，適合接案交付與快速上線。

## 本機預覽

直接在檔案總管雙擊 `index.html`，即可在瀏覽器開啟預覽。

## 專案結構

- `index.html`：頁面結構與文案
- `styles.css`：視覺樣式、RWD、深色模式樣式
- `script.js`：選單、FAQ 折疊、深色模式切換

## 如何改文案

1. 開啟 `index.html`
2. 依區塊修改文字內容：
   - Hero：主標、副標、CTA
   - 賣點卡片：標題與描述
   - 案例區：專案名稱與成果描述
   - 價格方案：方案名稱、價格、條列
   - FAQ：問題與回答
   - 聯絡表單 placeholder

## 如何改配色

1. 開啟 `styles.css`
2. 修改 `:root` 內變數（亮色模式）：
   - `--bg`
   - `--surface`
   - `--text`
   - `--muted`
   - `--primary`
   - `--primary-strong`
3. 若要同步調整深色模式，修改 `body[data-theme="dark"]` 內對應變數。

## 部署到 GitHub Pages

1. 確認已推送到 GitHub 並有 `main` 分支。
2. 到 GitHub repo 頁面：`Settings` → `Pages`。
3. 在 `Build and deployment` 選 `Deploy from a branch`。
4. `Branch` 選 `main`，資料夾選 `/ (root)`，按 `Save`。
5. 等待 1-3 分鐘後，會得到公開網址（格式通常為 `https://<username>.github.io/<repo>/`）。

## 備註

- 不使用任何外部套件與圖片檔。
- 圖示採 inline SVG。
- 表單目前為前端示意，未串接後端。