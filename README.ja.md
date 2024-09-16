# Blog

- Webサイト: http://www.kaitokimura.com/

このリポジトリには、私の紹介とブログを載せたサイトである [`kaitokimura.com`](http://www.kaitokimura.com/)のアプリケーション部分のコードが保存されています。
インフラ部分のコードは別のGitHubリポジトリ[`blog-infra`](https://github.com/kaitokimuraofficial/blog-infra)に保存されています。

## アーキテクチャ
### フロントエンド
フロントエンドの言語として主に[`TypeScript`](https://www.typescriptlang.org/)を使用しています。選定理由は以下の通りです。

- 静的型付け言語による型安全性
- 型推論により、開発がしやすくなる
- JavaScriptをサポートしている点


### バックエンド
バックエンドの言語として[`Golang`](https://go.dev/doc/)を採用しました。
開発にあたってGolangを使いたいと思わせるこの言語の魅力的な点は以下の通りです。

- 静的型付けコンパイル言語による効率性と型安全性
- 並行処理を実装しやすい
- シンプルな文法
- Golangの利用の顕著な増加


### データベース
世界で最も人気のあるオープンソースデータベースの1つである[`MySQL`](https://dev.mysql.com/)を使用しています。
このアプリケーションに MySQL を選んだ理由は以下の通りです。
- 最も一般的に使われているデータベースの1つであること
- Golang と MySQL を使用した例が多数存在すること（例えば、Golang の公式ドキュメント[Tutorial: Accessing a relational database](https://go.dev/doc/tutorial/database-accessなど)



## 採用プロセス中の人事の方やエンジニアの方へ
このアプリケーションをご自身のPCの環境で立ち上げたい場合は、お手数ですが以下の手順に従ってください。
(とはいっても実行すべきコマンドは1つですが。)

```md
1. デスクトップで`Docker`を開く
2. ルートディレクトリで `Make up` を実行
3. 数秒後、このアプリケーションによって起動されたウェブサイトが [`localhost:3000`](http://localhost:3000) で確認できます
```

なお、このアプリケーションは現在、[`kaitokimura.com`](https:www.kaitokimura.com)にて稼働中です。
開発環境のコードと本番環境にデプロイしたコードで、差異はありませんが、こちらもご確認していただけると幸いです。
