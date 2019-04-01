# Ionic bugs demos

Demo repository for https://github.com/ionic-team/ionic/issues/17920

## Steps to reproduce

1. Clone https://github.com/vially/ionic-bugs-demos
1. `npm install`
1. `ng serve`

Open `http://localhost:4200` and click the `Go to canvas page (using ion-content)` link. The console logs will print:
```
canvas size on view init: 0x0
canvas size after timeout: 996x950
```

Then go back to the homepage and click the `Go to canvas page (using div content)`. Notice how the console logs have changed to:

```
canvas size on view init: 1011x510
canvas size after timeout: 1011x510
```

The only difference between the two pages/routes is that on the first page the component is placed inside an `<ion-content></ion-content>` element, while on the second page the component is placed inside a plain `<div></div>`.
