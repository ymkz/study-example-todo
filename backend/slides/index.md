# ウェブアプリ開発勉強会（バックエンド編）

---

# 今日のおはなし

- 前回は簡単な Todo アプリのフロントエンドを`React`で実装しました
- データは永続化されないし、サーバーと通信しないのでウェブアプリ感が少ない
- 基本的なウェブアプリの勉強のために API サーバーを作りましょう

---

# バックエンド

- `express`を使います
- `notarealdb`をフェイク DB に使います

---

# Express

- Node.js でもっとも広く使われているウェブフレームワーク
- フレームワークとは言うものの RoR などと比べると薄い実装
- `app.use()`で middleware として機能を拡張できる
  - loggin, websocket, routing, database, etc...

---

# CRUD

- `create`, `read`, `update`, `delete`
- 生成、読み取り、更新、削除
- 永続性の 4 つの基本機能

---

# REST API

- CRUD を express のルーティングを用いて実装する

```js
app.get("/", (req, res) => {
  res.json(someOfJsonData);
});
```

---

# JSON

```json
[
  {
    "id": "dwdjwioaeajwie",
    "text": "Hello World",
    "completed": false
  }
]
```
