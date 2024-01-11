---
title: プリロードとストリーミング
layout: usermanual-page.hbs
sidebar_position: 3
---

ウェブ上では、ページをロードした後、ユーザーをできるだけ早くアプリケーションに案内することが重要です。ローディングバーを表示して待つよう求めると、アプリケーションがまだ開始されていないうちに訪問者がページを離れる可能性があります。PlayCanvasのアセットシステムは、ローディングプロセスを効率化し、アプリケーションをできるだけ早く実行するための機能を数多く提供しています。

## プリロード (Preload)

![Asset Properties][1]

プロジェクト内のすべてのアセットには、 `preload` というプロパティがあります。デフォルトでは、これはtrueに設定されています。アセットがpreloadとマークされている場合、アプリケーションの初期化フェーズが開始される前にダウンロードされ、作成されます。

アプリケーションの開始時に必要なすべてのアセットが存在することを確実にするために、プリロードを使用することが推奨されます。これにより、アプリケーションが開始された後にアセットが突然表示されることを防ぐことができます。

## ストリーミング (Streaming)

![Streaming][2]

もしシーン内のエンティティがアセットを参照している場合、そのエンティティが有効化されるとローディングリクエストが開始されます。エンティティがシーン内で有効化されると、このリクエストはアプリケーションが開始されるとすぐに行われます。

すべてのコンポーネントは動的なアセットのロードを処理して、アセットがロードされると、通常通り動作を開始します。このように動的にアセットをストリーミングする場合、しばしば「ポップアップ」が発生することがあります。マテリアルやテクスチャが無くても、ロードされるとすぐにモデルが表示されます。

## アセットが読み込まれるタイミング

特定のアセットがいつ読み込まれるかを確認するには、これらのルールに従ってください。

* `preload = true` の場合、アプリケーションが開始される前にアセットがロードされます。それ以外の場合は、以下のようなタイミングでアセットがロードされます。
* アセットがシーンのヒエラルキーに存在し、有効なエンティティによって参照されている場合、そしてそのエンティティが有効化されている場合、アセットはロードされます。アセットはエンティティやコンポーネントが有効化された時点、またはアセットがコンポーネントに割り当てられた時点でロードされます。エディタで有効化されたエンティティの場合、これはプリロードが完了した直後、アプリケーションが開始されるとすぐに行われます。コンポーネントが有効化されるためには、そのコンポーネント自体が有効であり、その上位のヒエラルキーにあるすべてのエンティティも有効である必要があります。
* アセットが他のロードされたアセットによって参照されている場合、そのアセットもロードされます。例えば、モデルがロードされてマテリアルを参照している場合、マテリアルがロードされ、マテリアルがテクスチャを参照している場合はテクスチャもロードされます。

## アセットタグ (Asset Tags)

多くの場合、アセットがロードされる際に "ポップアップ" させたくないことがあります。一連のアセットをロードしてから表示することが好ましいです。このために、アセットタグを使用してアセットのグループを作成することができます。その後、特定のタグを持つすべてのアセットをロードしてから使用することができます。

以下は、タグを使用して一連のアセットをロードする方法を示したJavaScriptの例です。

```javascript
var assets = this.app.assets.findByTag("level-1");
var count = 0;

for (var i = 0; i < assets.length; i++) {
    assets[i].once("load", function () {
        count++;
        if (count === assets.length) {
            // 全てのアセットがロードされました。
        }
    });
    this.app.assets.load(assets[i]);
}
```

[1]: /images/user-manual/assets/preloading-and-streaming/asset-properties.jpg
[2]: /images/user-manual/assets/preloading-and-streaming/streaming.gif