//ベクトルクラス
//v1.10
//p5.js依存な部分（floor,absなど）があったのでMath.～に変えて依存をなくした
//v1.20
//機能をいろいろ追加した。
// オブジェクトをnewするときに初期値が一つのときは角度として解釈するようにした。大きさは1
// その他の追加情報は別にリファレンスがあるのでそれを見てね

class Vec2 {
  constructor(...arr) {
    let arrLen = arr.length;

    // 引数が一つのときは角度を指定していると解釈する。
    // 引数が２つ以上なら普通に(x,y)を指定していると解釈する。
    if (arrLen === 1) {
      this.x = Math.cos(arr[0])
      this.y = Math.sin(arr[0])
    } else {
      this.x = arr[0];
      this.y = arr[1];
    }
  }

  // 二項演算子
  add(a) {
    let b = this;
    return new Vec2(a.x + b.x, a.y + b.y);
  }

  sub(a) {
    let b = this;
    return new Vec2(b.x - a.x, b.y - a.y)
  }

  mul(n) {
    let a = this;
    return new Vec2(n * a.x, n * a.y)
  }

    div(n) {
    let a = this;
    return new Vec2(a.x / n, a.y / n)
  }
  
  mod(n) {
    return new Vec2(this.x % n, this.y % n)
  }
  
  mulVec2(a) {
    return new Vec2(a.x * this.x, a.y * this.y)
  }

  divVec2(a) {
    return new Vec2(this.x / a.x, this.y / a.y)
  }

  modVec2(a) {
    return new Vec2(this.x % a.x, this.y % a.y)
  }

  // 代入演算子

  // これを使うことはほとんど無いと思う
  // classの外部では=を使うべき。
  set(a) {
    this.x = a.x;
    this.y = a.y;
  }

  addAsn(a) {
    this.set(this.add(a));
  }

  subAsn(a) {
    this.set(this.sub(a))
  }

  mulAsn(n) {
    this.set(this.mul(n))
  }

  divAsn(n) {
    this.set(this.div(n))
  }

  modAsn(n) {
    this.set(this.mod(n))
  }

  mulVec2Asn(a) {
    this.set(this.mulVec2(a))
  }
  
  divVec2Asn(a) {
    this.set(this.divVec2(a))
  }
  
  modVec2Asn(a) {
    this.set(this.modVec2(a))
  }

  dot(b) {
    let a = this;
    return a.x * b.x + a.y * b.y
  }

  dist() {
    let a = this
    return (a.x ** 2 + a.y ** 2) ** 0.5;
  }

  angle() {
    let a = this
    return Math.atan2(a.y, a.x);
  }

  norm() {
    let a = this;
    let d = (a.x ** 2 + a.y ** 2) ** 0.5
    if (d > 0)
      return new Vec2(a.x / d, a.y / d)
    else
      return new Vec2(0, 0)
  }

  floor(r = 0) {
    let a = this;
    let p = 10 ** r;
    return new Vec2(Math.floor(a.x * p) / p, Math.floor(a.y * p) / p)
  }

  parseInt() {
    let a = this;
    return new Vec2(parseInt(a.x), parseInt(a.y))
  }

  abs() {
    return new Vec2(Math.abs(this.x), Math.abs(this.y))
  }

  // distSqのエイリアス
  // 互換性のために残す
  squaDist() {
    let a = this
    return a.x * a.x + a.y * a.y;
  }

  // squaDistのエイリアス
  // 名前が長くて分かりづらかったので追加
  // 推奨はこっち
  distSq() {
    let a = this
    return a.x * a.x + a.y * a.y;
  }

  // ベクトルの大きさをしきい値から外れないようにする。
  limit(min, max) {
    let d = this.distSq()
    if (d >= Math.abs(max) ** 2) {
      return this.norm().mul(max)
    } else if (d <= Math.abs(min) ** 2) {
      return this.norm().mul(min)
    } else {
      return this
    }
  }

  toArray() {
    return [this.x, this.y]
  }

  equal(b) {
    return this.x === b.x && this.y === b.y
  }

  show() {
    const a = this;
    return `(${a.x},${a.y})`
  }
}
