# ts-scoring-app
[自己研鑽用]スコア計算アプリケーション

## Description
For my self improvement.<br>
TypeScript学習のために作成したアプリケーション<br>
スコアが設定された各ボタンを押下すると、合計が表示されるWebページ。<br>

## Components
- TypeScript
- JavaScript
- CSS

## Development Environment And Tools
- Visual Studio Code
- Live Server

## DEMO

## Requirement
開発環境として下記が必要。
- Node.js
- webpack
- webpack-dev-server

## Usage
#### 開発時の使用方法。
&thinsp;1. ベースディレクトリに移動。
```bash
cd ts-scoring-app
```
&thinsp;2. TypeScriptコンパイル用にtscをウォッチモードで起動。
```bash
tsc -w
```
&thinsp;3. バンドルJSを生成して確認する場合<br>
&emsp;1. JavaScriptからバンドルJS生成。
```
npm run build
```
&emsp;2. HTML確認(index.htmlのブラウザ確認)

&thinsp;4. バンドルJSを生成せずに確認する場合<br>
&emsp;1. webpack-dev-serverをウォッチモードで起動。
```
npm run start
```
&emsp;2. webpack-dev-serverで公開されたページ(http://localhost:8080)を確認

## Licence
Licensed under the MIT License.

## Author
[KawataniShinya](https://github.com/KawataniShinya)
