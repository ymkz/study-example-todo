# Web アプリ開発お試し入門編

---

# 自己紹介

- 山下和也
- 博士課程前期課程 2 年(修士 2 年)
- 自然科学研究科 理工学専攻 知能情報デザイン学コース
- 平川研究室
- 顔方向と視線方向を単眼のカメラから広範囲広角度に推定する研究

---

# 開発者として

- Frontend Engineer
- https://ymkz.io
- ―
- JavaScript, Node.js, TypeScript (Python, Ruby, Swift, Go, Red...)
- React, React Native, Next.js, Redux, RxJS (Vue.js, Nuxt.js)
- Express, Ruby on Rails, Firebase
- RESTful API, Graphql
- (Tensorflow, Keras)

---

# 今日のおはなし

- Web で動く Todo アプリの開発
- React を使います
- https://toodoo.now.sh みたいなやつを目指します
  - これは自作
  - 使ってる技術スタックはちょっと複雑なので今回はより簡単に

---

# おことわり

`windows`については開発環境として使用したことがありません。  
windows の方は多少うまくいかない場面があるかもしれません。  
(ターミナルや WSL の扱いがわかりません。)  
ゴメンナサイ 😭

---

# なにはともあれ開発環境から

---

### 今回の開発に必要な環境は以下

- Node.js
- npm

---

# nodenv

- https://github.com/nodenv/nodenv
- windows の人は https://github.com/nullivex/nodist がおすすめ

Node.js のバージョン管理をしてくれるライブラリ  
他のバージョンなんて使わん！という人は直接 Node.js をインストールしても OK です

---

# Docker(参考)

- ポータブルな開発環境を構築できる
- チーム開発だと確実に同じ環境を再現できるため強い
- 個人だと...I/O Heavy な開発には向かないと思います
- https://qiita.com/mii288/items/aac597bc02575831ea90
- とても参考になります
- 各自 OS にあった Docker for OS をインストールしたらたぶん書いてある通りで動きます
- が、今回は Docker のインストールのほうが重いのでパス！
- エンジニアを目指すなら勉強しておくといいかもしれません。

---

# はじめよう

- `node -v`
- `npm -v`

開発環境に必要なコマンドが動くことを確かめるのはとても重要です。

---

# React の環境構築

`npx create-react-app hello-world`

たったこれだけで React を用いたウェブアプリ開発のフロントエンド環境が整いました！

---

# 中身を見てみよう

- お好きなエディタで`hello-world`ディレクトリを開いてみましょう

---

# ここからはコードを見ながら！
