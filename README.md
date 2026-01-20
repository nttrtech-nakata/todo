# TODO アプリ

React + TypeScript + Vite で作成したシンプルなTODOアプリです。

## 機能

- TODO の追加（Enter キーまたはボタンクリック）
- TODO の完了/未完了の切り替え
- TODO の削除
- フィルター機能（All / Active / Completed）
- 完了済みTODOの一括削除
- LocalStorage によるデータ永続化

## 技術スタック

- **フレームワーク**: React 18
- **言語**: TypeScript
- **ビルドツール**: Vite
- **スタイリング**: CSS Modules

## プロジェクト構成

```
src/
├── main.tsx                 # エントリーポイント
├── App.tsx                  # ルートコンポーネント
├── App.css                  # アプリスタイル
├── index.css                # グローバルスタイル
├── types/
│   └── todo.ts              # 型定義
├── utils/
│   └── storage.ts           # LocalStorage 操作
├── hooks/
│   └── useTodos.ts          # TODO 状態管理フック
└── components/
    ├── TodoInput.tsx        # 入力フォーム
    ├── TodoInput.module.css
    ├── TodoList.tsx         # リスト表示
    ├── TodoList.module.css
    ├── TodoItem.tsx         # 個別アイテム
    └── TodoItem.module.css
```

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

## 使い方

1. `npm run dev` で開発サーバーを起動
2. ブラウザで http://localhost:5173 を開く
3. 入力欄にTODOを入力し、「Add」ボタンまたは Enter キーで追加
4. チェックボックスで完了/未完了を切り替え
5. 削除ボタン（×）でTODOを削除
6. フィルターボタンで表示を切り替え

## テスト項目・結果

### テスト環境

- **ブラウザ**: Google Chrome
- **テスト日**: 2026-01-20
- **テスト方法**: 手動テスト（Chrome拡張機能による自動操作）

### テスト結果

| # | テスト項目 | 手順 | 期待結果 | 結果 |
|---|-----------|------|---------|------|
| 1 | TODO追加 | 入力欄に「買い物に行く」と入力し、Addボタンをクリック | TODOリストに追加され、「1 items left」と表示される | ✅ Pass |
| 2 | TODO追加（複数） | 入力欄に「レポートを書く」と入力し、Addボタンをクリック | TODOリストに2件表示される | ✅ Pass |
| 3 | TODO完了切り替え | チェックボックスをクリック | 打消し線とグレー文字で完了状態になる、「Clear completed」ボタンが表示される | ✅ Pass |
| 4 | フィルター（Completed） | 「Completed」ボタンをクリック | 完了済みTODOのみ表示される | ✅ Pass |
| 5 | フィルター（Active） | 「Active」ボタンをクリック | 未完了TODOのみ表示される | ✅ Pass |
| 6 | フィルター（All） | 「All」ボタンをクリック | 全てのTODOが表示される | ✅ Pass |
| 7 | LocalStorage永続化 | TODOを追加後、ページをリロード | リロード後もTODOが保持されている | ✅ Pass |

### 不具合・修正履歴

| 日付 | 内容 | 対応 |
|------|------|------|
| 2026-01-20 | リロード時にTODOが消える | `useTodos.ts`の初期化ロジックを修正。遅延初期化と初回レンダリング時の保存スキップを実装 |

## ライセンス

MIT
