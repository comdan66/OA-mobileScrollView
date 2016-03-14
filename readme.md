# Welcome To OA's mobile scroll view!
模擬手機水平 scroll view 的效果。

---

<br/>
## 範例演示
模擬手機水平 scroll view 的效果，[LIVE DEMO](http://comdan66.github.io/OA-mobileScrollView/)！

![OA's mobile scroll view](img/demo/demo.png)

<br/>
## 聲明
本作品授權採用 姓名標示-非商業性 2.0 台灣 (CC BY-NC 2.0 TW) 授權，詳見 [http://creativecommons.org/licenses/by-nc/2.0/tw/](http://creativecommons.org/licenses/by-nc/2.0/tw/)

<br/>
## 使用說明
* 利用 jquery、jquery-ui、jquery.ui.touch-punch 作出**模擬手機 scroll view** 的效果。
* 匯入 **OA-mobileScrollView.css**、**public.css** 這兩隻 CSS 資源。
* 匯入 **jquery.js**、**jquery-ui.js**、**jquery.ui.touch-punch.js**、**OA-mobileScrollView.js**、**public.js** 這五隻 JavaScript 資源。
* 其中 **public.css** 是此版頁面的版型調整，**public.js** 則是此版頁面的 JavaScript 的檔案。
* 主要依賴 **jquery.js** 與 **jquery-ui.js** 實作 scroll view feature，利用 jquery-ui 的 **draggable** 設定 **axis: 'x'** 完成水平拖曳移動。
* 在手機的滑動上 jquery-ui 的 draggable 會失效，所以需要 **jquery.ui.touch-punch.js** 修正。
* 而 **OA-mobileScrollView.css** 與 **OA-mobileScrollView.js** 為 OA 調整的 scroll view extend feature。

<br/>
## Html

```
  //div 故意打 di v 是因為避免 markdown 文件認為是 HTML 格式
  <di v class='scroll'>
    <div>
      <a><img src='img/demo/1.jpg'></a>
      <a><img src='img/demo/2.jpg'></a>
      <a><img src='img/demo/3.jpg'></a>
      <a><img src='img/demo/4.jpg'></a>
      <a><img src='img/demo/5.jpg'></a>
    </div>
  </div>
```

<br />
## JavaScript

```
  $(function () {
    $('.scroll').OAmobileScrollView ();
  });
```

<br />
## Options

```
  $(function () {
    $('.scroll').OAmobileScrollView ({
      'trigger_length': 50
    });
  });
```

* trigger_length：觸發長度，當按著移動多少，即可觸發換頁。


<br />

```
  $(function () {
    $('.scroll').OAmobileScrollView ({
      show_arrow: true
    });
  });
```

* show_arrow：是否顯示左右箭頭。  
	![OA's mobile scroll view](img/demo/arrow.png)

<br />
## 特別注意
* 手機上實測好像還會頓頓的.. 還在調整中..
* 全網站所有元素都用 **box-sizing: border-box;** 實作，要稍微注意。
* 版型 css 部分，是使用 **scss** 撰寫，故此專案會有 scss、css 的資料夾。
* 目前最多容納 100 個水平元素！


<br />
## 相關參考
* [jQuery](https://jquery.com/)。
* [jQuery UIs](http://jqueryui.com/)。
* [jQuery UI Touch Punchs](http://touchpunch.furf.com/)。
* [OA's F2E Framework](https://github.com/comdan66/oaf2e)。
