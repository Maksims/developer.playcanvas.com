---
title: Загрузка сцен
layout: usermanual-page.hbs
position: 3
---

## Введение

На этой странице вы узнаете, как загружать сцены с помощью кода, а также ознакомитесь с различными подходами к использованию сцен в проектах.

Существует два основных подхода к использованию сцен: полная смена сцен и дополнительная загрузка сцен.

## Полная смена сцен

Это наиболее распространенный подход, который выбирают разработчики, где каждая сцена является самостоятельной частью игры. Например, одна сцена будет начальным экраном, а затем по одной сцене на каждый уровень.

[Вот пример][switch-scenes-completely-project], где пользователь может перемещаться между начальным экраном и другими уровнями.

<iframe loading="lazy" src="https://playcanv.as/e/p/Q1gKd1ek/" title="Полная смена сцен"></iframe>

Это делается путем вызова [`SceneRegistry.changeScene`][changescene-api] с именем сцены.

```
this.app.scenes.changeScene('Название сцены');
```

Если данные сцены еще не загружены, эта функция будет:

- Выполнять асинхронный сетевой запрос для получения новых данных сцены.
- После загрузки данных сцены удалить все дочерние объекты из корневого узла приложения (уничтожая существующую иерархию сцены).
- Вызвать `loadSceneSettings`, который теперь синхронен, так как данные сцены загружены.
- Вызвать `loadSceneHierarchy`, который теперь синхронен, так как данные сцены загружены.

Если вы хотите знать, когда сцена загружена или есть ли ошибки, вам нужно будет предоставить обратный вызов:

```
this.app.scenes.changeScene('Some Scene Name', (err, loadedSceneRootEntity) {
    if (err) {
        console.error(err);
    } else {
        // Иерархия сцены успешно загружена
    }
});
```

Чтобы избежать асинхронного сетевого запроса на новые данные сцены в момент вызова `changeScene`, вы можете заранее вызвать [`SceneRegistry.loadSceneData`][loadscenedata-api], и `changeScene` станет синхронным вызовом, который немедленно вызывает `loadSceneSettings` и `loadSceneHierarchy`.

Обычные случаи использования включают знание о том, что пользователь загрузит уровень 2 после завершения уровня 1. В этом случае вы можете загрузить данные сцены для уровня 2, когда пользователь находится на уровне 1. Когда они завершат уровень 1, им не придется ждать загрузки данных и сразу же перейти на уровень 2.

## Дополнительная загрузка сцен

Возможно загрузить несколько иерархий сцен дополнительным образом, а не полностью переключать сцены. Обычные случаи использования этого заключаются в разделении большого мира, чтобы его можно было загружать со временем, а не загружать все сразу в начале.

Вариант выше заключается в том, что каждая сцена представляет собой раздел мира, который загружается и уничтожается по мере перемещения игрока. Система будет загружать только ближайшие связанные разделы мира и связанные с ними ассеты, уничтожая и выгружая ассеты для любого раздела, который не требуется. Это поможет управлять ресурсами, такими как память и VRAM.

Иногда разработчики используют этот подход, чтобы гарантировать, что определенный код и сущности создаются до фактической загрузки игры и доступны глобально на протяжении всей игровой сессии.

[Ниже представлен упрощенный пример][additively-loading-scenes-project] дополнительной загрузки сцен, где пользовательский интерфейс в верхнем левом углу является "основной" сценой, и разные иерархии сцен загружаются/уничтожаются.

<iframe loading="lazy" src="https://playcanv.as/e/p/cjBInud1/" title="Additively Loading Scenes"></iframe>

Обратите внимание, что несколько экземпляров иерархии сцены не могут быть загружены одновременно. Это связано с тем, что сущности имеют свои уникальные GUID, назначенные в редакторе. Когда пытаются загрузить несколько экземпляров одной и той же иерархии сцены одновременно, возникает конфликт GUID, которые должны быть уникальными для каждой сущности.

Если вам нужны несколько экземпляров иерархии сущностей, используйте вместо этого [шаблоны][templates], так как уникальные GUID присваиваются при создании экземпляра шаблона.

## Понимание работы сцен

Для эффективного использования сцен важно понимать, как они загружаются при использовании в проекте. В этом разделе подробно рассматривается структура сцен и их загрузка.

Сцены отдельны от [ассетов][assets] и имеют разные свойства и API для их загрузки.

Сцены представлены [элементами реестра сцен][sceneregistryitem-api], которые хранятся в [реестре сцен][sceneregistry-api] и могут быть доступны через объект [приложения][application-sceneregistry-api]. Через реестр сцен вы можете найти элемент реестра сцен по имени сцены в редакторе и использовать его для загрузки иерархии сцены или настроек.

<div class="alert alert-info">
Корневой узел <a href="/api/pc.Application.html#root">приложения</a> не является корневой сущностью иерархии сцены, которая по умолчанию называется "Root" и которую вы видите на сцене с редактором. Корневая сущность иерархии сцены будет дочерним элементом корневого узла приложения.
</div>

Существует два API для загрузки иерархии сцены и настроек:

- [`SceneRegistry.loadSceneHierarchy`][loadscenehierarchy-api] - Загружает иерархию сцены
- [`SceneRegistry.loadSceneSettings`][loadscenesettings-api] - Загружает настройки из сцены

Вот пример кода для загрузки иерархии сцены или настроек:

```
// Найти элемент реестра сцены по имени сцены
var sceneItem = this.app.scenes.find('Some Scene Name');

// Загрузить иерархию сцены с обратным вызовом, когда она будет завершена
this.app.scenes.loadSceneHierarchy(sceneItem, function (err, loadedSceneRootEntity) {
    if (err) {
        console.error(err);
    } else {
        // Иерархия сцены успешно загружена
    }
});

// Загрузить настройки сцены с обратным вызовом, когда она будет завершена
this.app.scenes.loadSceneSettings(sceneItem, function (err) {
    if (err) {
        console.error(err);
    } else {
        // Настройки сцены успешно загружены
    }
});
```

Обе функции `loadSceneHierarchy` и `loadSceneSettings` имеют схожее поведение в том, как они получают необходимые данные для загрузки иерархии или настроек.

Когда функция вызывается, она выполняет асинхронный сетевой запрос к серверу для получения данных сцены. Это означает, что будет задержка (в зависимости от скорости сети, сетевого соединения и размера сцены) между запросом на загрузку сцены и завершением сетевого запроса браузером, во время которой приложение все еще обновляется.

После завершения сетевого запроса движок выполнит следующие действия:

`loadSceneHierarchy`
- Создает сущности и компоненты из загруженной сцены и добавляет иерархию в [корневой узел приложения][application-root-api].
- Вызывает функции `initialize` и `postInitialize` на ScriptTypes в загруженной сцене.
- Вызывает обратный вызов, который был передан в функцию `loadSceneHierarchy`.
- (Необязательно) В [обратном вызове][loadhierarchycallback-api] сущность, представляющая корень загруженной сцены, передается в качестве параметра. Его можно изменить или переназначить в зависимости от ваших потребностей. В примере [Loading Scenes Additively](#loading-scenes-additively) корень сцены переназначается другой сущности в текущей сцене для упрощения управления.

`loadSceneSettings`
- Применяет загруженные настройки сцены к приложению.
- Вызывает [обратный вызов][loadsettingscallback-api], который был передан в функцию `loadSceneSettings`.

По умолчанию `loadSceneHierarchy` всегда загружает дополнительно, и разработчику нужно удалить/уничтожить существующую загруженную сцену, чтобы полностью изменить сцены.

Существует несколько способов подхода к этому с плюсами и минусами:

### Уничтожение всех дочерних элементов под корневым узлом приложения сначала

Этот подход имеет дискретные шаги, которые облегчают управление, где текущая загруженная сцена уничтожается перед загрузкой и созданием новой сцены.

```
// Найти элемент реестра сцены по имени сцены
var sceneItem = this.app.scenes.find('Some Scene Name');

// Уничтожить всех детей под корнем приложения, чтобы удалить текущую загруженную иерархию сцены
var rootChildren = this.app.root.children;
while(rootChildren.length > 0) {
    rootChildren[0].destroy();
}

// Загрузить иерархию сцены с обратным вызовом, когда она будет завершена
this.app.scenes.loadSceneHierarchy(sceneItem, function (err, loadedSceneRootEntity) {
    if (err) {
        console.error(err);
    } else {
        // Иерархия сцены успешно загружена
    }
});
```

Однако, как упоминалось выше, между вызовом `loadSceneHierarchy` и фактической загрузкой данных сцены существует задержка. Это означает, что будет несколько кадров, когда приложение будет отображать пустой экран в ожидании завершения сетевого запроса, что приводит нас к альтернативе.

### Уничтожение корневой сущности старой сцены после загрузки новой сцены

Это означает, что старая иерархия сцены будет уничтожена в обратном вызове после того, как новая иерархия сцены будет добавлена в иерархию, что гарантирует наличие старой сцены во время загрузки данных сцены из сети.

```
// Найти элемент реестра сцены по имени сцены
var sceneItem = this.app.scenes.find('Some Scene Name');

// Предположим, что корневая сущность иерархии старой сцены называется "Root", что является именем по умолчанию
var oldSceneRootEntity = this.app.root.findByName('Root');

// Загрузить иерархию сцены с обратным вызовом, когда она будет завершена
this.app.scenes.loadSceneHierarchy(sceneItem, function (err, loadedSceneRootEntity) {
    if (err) {
        console.error(err);
    } else {
        // Иерархия сцены успешно загружена
        oldSceneRootEntity.destroy();
    }
});
```

Однако старая сцена будет присутствовать в иерархии, пока скрипты новой сцены вызывают `initialize` и `postInitialize`. Это может вызвать проблемы, если в скриптах есть какая-то зависимость или предположения о том, что это единственная иерархия сцены, которая загружена. Примеры могут включать поиск сущности по имени в `initialize`, и в старой иерархии сцены также есть сущность с таким же именем. Тогда скрипт будет иметь ссылку на сущность старой иерархии сцены вместо новой, что вызовет непредвиденное поведение после уничтожения иерархии старой сцены.

Чтобы помочь смягчить эти потенциальные проблемы, у нас есть API, который позволяет разделить загрузку данных сцены от создания иерархии сцены в сцене, [`SceneRegistry.loadSceneData`][loadscenedata-api].

## Управление ассетами в сценах

Частый вопрос по сценам заключается в том, будут ли ассеты, используемые в сцене, загружаться вместе с загрузкой сцены. В PlayCanvas ассеты и сцены разделены и должны быть загружены отдельно, что дает разработчику большую степень гибкости.

Рекомендуется помечать все ассеты с именем сцены, необходимым в сцене, и при загрузке сцены сначала загружать ассеты, а затем, когда все ассеты загружены, начинать загрузку сцены.

Более подробную информацию о тегах ассетов и загрузке ассетов можно найти на [этой странице][asset-tags-loading].

[Пример проекта][asset-load-for-scene-project] ниже загружает ассеты при загрузке сцены и выгружает их при возврате в главное меню.

<iframe loading="lazy" src="https://playcanv.as/e/p/SBTfOAeM/" title="Загрузка сцен и ассетов"></iframe>

[switch-scenes-completely-project]: https://playcanvas.com/project/924351/overview/switch-full-scene-example
[additively-loading-scenes-project]: https://playcanvas.com/project/685077/overview/additive-loading-scenes
[templates]: /user-manual/templates/
[assets]: /user-manual/assets/
[loadscenehierarchy-api]: /api/pc.SceneRegistry.html#loadSceneHierarchy
[loadscenesettings-api]: /api/pc.SceneRegistry.html#loadSceneSettings
[sceneregistryitem-api]: /api/pc.SceneRegistryItem.html
[sceneregistry-api]: /api/pc.SceneRegistry.html
[application-sceneregistry-api]: /api/pc.Application.html#scenes
[loadhierarchycallback-api]: /api/pc.html#LoadHierarchyCallback
[loadsettingscallback-api]: /api/pc.html#LoadSettingsCallback
[application-root-api]: /api/pc.Application.html#root
[loadscenedata-api]: /api/pc.SceneRegistry.html#loadSceneData
[unloadscenedata-api]: /api/pc.SceneRegistry.html#unloadSceneData
[copy-and-paste-assets]: /user-manual/designer/assets/#copy-and-paste-between-projects
[asset-tags-loading]: /user-manual/assets/preloading-and-streaming/#asset-tag
[asset-load-for-scene-project]: https://playcanvas.com/project/926754/overview/asset-loading-for-scenes-example
[changescene-api]: /api/pc.SceneRegistry.html#changeScene