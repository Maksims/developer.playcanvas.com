---
title: Wasmモジュール
layout: usermanual-page.hbs
sidebar_position: 17
---

Wasmモジュール(WebAssemblyモジュールとも呼ばれます)には、Web向けにコンパイルされた実行可能コードが含まれています。

Wasmモジュールには3つの部分があります。

* バイナリ実行ファイル
* JavaScriptのグルーコード ファイル
* オプションのフォールバックasm.js

これらのファイルは、アセットパネルにドラッグアンドドロップするか、アセットパネルコンテキストメニューから 'Upload' を選択することでプロジェクトに追加できます。

PlayCanvasエディターは現在、[Emscripten][2]でコンパイルされたWasmモジュールのみをサポートしていることに注意してください。

## Wasmモジュールのプロパティ

ファイルがプロジェクトに追加されたら、Wasmモジュールを選択して、インスペクターパネルでそのプロパティを表示します。
![Wasmモジュールのプロパティ][1]

### Wasmモジュールの名前 (Name)

名前は、グルーコードやフォールバックスクリプトで定義されているモジュール名と一致する必要があります。この名前は、ロード時にモジュールをインスタンス化するために使用されます。

### グルースクリプト (Glue script)

これは、Wasmコードを実行するために必要なJavaScriptのグルーコードです。

### フォールバックスクリプト (Fallback script)

これは、WebAssemblyがサポートされていない際に使用する、オプションのフォールバックasm.js スクリプトです。

[1]: /images/user-manual/assets/wasm-module.png
[2]: https://emscripten.org/