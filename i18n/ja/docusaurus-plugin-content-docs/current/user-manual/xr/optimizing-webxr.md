---
title: WebXRアプリケーションの最適化
layout: usermanual-page.hbs
sidebar_position: 5
---

## はじめに

高く一貫したフレームレートは、楽しいXR体験を作るために重要です。VR/ARコンテンツを作成する際には、早期にテストと最適化を行い、開発全体で目標のフレームレートを維持することが特に重要です。

AR体験では、ワールド、イメージ、およびフェイストラッキング効果がしばしば高いパフォーマンスコストを伴うため、フレームレートを注意深く管理する必要があります。これは、通常ユーザーがアクセスできるパフォーマンス制約のあるモバイルハードウェアに加えて発生します。

VR体験では、レンダリングが特に負荷が高くなります。なぜなら、シーンを各ビュー（目）ごとに1回ずつレンダリングする必要があるためです。PlayCanvasはVRレンダリングが効率的に行われるように最適化されていますが、ステレオレンダリングはモノレンダリングよりもコストが高くなります。

さらに、Oculus RiftやHTC Viveなどのデバイスでは、75Hzや90Hzなどの高いフレームレートが要求されるため、非常に効率的なレンダリングが必要とされます。モバイルVRは高いフレームレートを必要としませんが、歪み効果に対するネイティブサポートの欠如により、JavaScriptとWebGLのレイヤーに追加のオーバーヘッドが生じます。

ただし、PlayCanvasには、アプリケーションがより短時間でより多くのことを行うために特別に設計された機能がいくつか含まれています。

### ランタイムライトマップの生成

各ダイナミックライトには、フレームごとのランタイムコストがあります。ライトの数が増えるほど、コストが高くなり、シーンのレンダリングが遅くなります。ライトをライトマップに焼き込むことで、静的なライトのコストをテクスチャのレンダリングにまで大幅に削減することができます。ライトマップは、お気に入りの3Dモデリングツールを使用してオフラインで生成することもできますし、PlayCanvasの組み込みのランタイムライトマップ生成機能を使用することもできます。

[ランタイムライトマップの生成について詳しく読む][1]。

### リアルタイムシャドウの注意深い使用

ダイナミックシャドウもダイナミックライトと同様に、フレームごとのランタイムコストがあります。特にオムニライトの場合、シャドウを生成するためにシーンを6回レンダリングする必要があります。多くのライトがダイナミックシャドウを投影することは避けるべきです。

### フィルレートとオーバードローに注意する

フィルレートとは、画面上の各ピクセルに適用されるシェーダーオペレーションの数を指します。もし、高コストのフラグメントシェーダーの計算（たとえば、多くのライトや複雑なマテリアル）と高解像度（たとえば、高いデバイスピクセル比を持つモバイル端末）がある場合、アプリケーションは高いフレームレートを維持するためにシーンのレンダリングに長い時間を費やすことになります。

オーバードローとは、カメラに近い他のジオメトリによって隠されたジオメトリを描画することで上書きされるピクセルの数を指します。過剰なオーバードローは、見えないピクセルを描画しようとしてGPUの処理能力を無駄に消費していることを示しています。

[WebGL Insight][2]のような拡張機能を使用すると、オーバードローを視覚化して確認できます。

### ガベージコレクションスタールの対策

Webブラウザは、未使用のJavaScriptオブジェクトの自動ガベージコレクション機能を備えています。PlayCanvasエンジンは、ランタイムのアロケーションを最小限に抑えるように設計されており、コードでも同様の努力をするべきです。ベクトルや他のオブジェクトを事前に割り当てて再利用することで、フレームごとに大量のオブジェクトが作成されて破棄されることを防ぐようにしましょう。

### プロファイリングツール

PlayCanvasには、組み込みのプロファイラツールがあります。エディタで「Launch Profiler」ボタンを使用してプロファイリングを有効にした状態でアプリケーションを実行します。[プロファイラについての詳細はこちら][3]をご覧ください。

### 一般的な最適化のヒント

[多くの最適化ガイドライン][4]が利用可能です。

[1]: /user-manual/graphics/lighting/runtime-lightmaps/
[2]: https://github.com/3Dparallax/insight
[3]: /user-manual/optimization/profiler/
[4]: /user-manual/optimization/guidelines/