# 目次<!-- omit in toc -->
- [基本演算](#基本演算)
  - [add(v)](#addv)
  - [sub(v)](#subv)
  - [mul(s)](#muls)
  - [div(s)](#divs)
  - [mod(s)](#mods)
  - [mulVec2(s)](#mulvec2s)
  - [divVec2(s)](#divvec2s)
  - [modVec2(s)](#modvec2s)
  - [addAsn(v)](#addasnv)
  - [subAsn(v)](#subasnv)
  - [mulAsn(s)](#mulasns)
  - [divAsn(s)](#divasns)
  - [modAsn(s)](#modasns)
  - [mulVec2Asn(s)](#mulvec2asns)
  - [divVec2Asn(s)](#divvec2asns)
  - [modVec2Asn(s)](#modvec2asns)

# 基本演算
## add(v)
  ### 説明<!-- omit in toc -->
  ベクトル同士の加算を行います。<br>
  もとのベクトルが変更されることはありません。<br>
  `new Vec2(a.x + b.x, a.y * b.y)`と等価です。
  ```javascript:example.js
    let a = new Vec2(1,3)
    let b = new Vec2(-3,2)

    console.log(a.show())
    // (1,3)
    console.log(a.add(b).show())
    // (-2,5)
    console.log(a.show())
    // (1,3)
  ```

  ### 構文<!-- omit in toc -->
  `add(v)`
  #### 引数<!-- omit in toc -->
  v : 加算されるベクトル
  #### 返り値<!-- omit in toc -->
  v : 加算されたベクトル
  - - -

## sub(v)
  ### 説明<!-- omit in toc -->
  ベクトル同士の減算を行います。<br>
  もとのベクトルが変更されることはありません。
  `new Vec2(a.x - b.x, a.y - b.y)`と等価です。
  ```javascript:example.js
    let a = new Vec2(5,2)
    let b = new Vec2(-3,1)

    console.log(a.show())
    // (5,2)
    console.log(a.sub(b).show())
    // (8,1)
    console.log(a.show())
    // (5,2)
  ```

  ### 構文<!-- omit in toc -->
  `sub(v)`
  #### 引数<!-- omit in toc -->
  v : 減算されるベクトル
  #### 返り値<!-- omit in toc -->
  v : 減算されたベクトル
  - - -

## mul(s)
  ### 説明<!-- omit in toc -->
  ベクトルの定数倍を行います。<br>
  もとのベクトルが変更されることはありません。<br>
  `new Vec2(a.x * n, a.y * n)`と等価です。
  ```javascript:example.js
    let a = new Vec2(-2,1)
    let s = 3

    console.log(a.show())
    // (-2,1)
    console.log(a.mul(s).show())
    // (-6,3)
    console.log(a.show())
    // (-2,1)
  ```

  ### 構文<!-- omit in toc -->
  `mul(v)`
  #### 引数<!-- omit in toc -->
  s : 定数倍する数値
  #### 返り値<!-- omit in toc -->
  v : 定数倍されたベクトル
  - - -

## div(s)
  ### 説明<!-- omit in toc -->
  ベクトルを定数で除算します。<br>
  もとのベクトルが変更されることはありません。<br>
  `new Vec2(a.x / n, a.y / n)`と等価です。

  ```javascript:example.js
    let a = new Vec2(8,-4)
    let s = -4

    console.log(a.show())
    // (-8,4)
    console.log(a.div(s).show())
    // (-2,1)
    console.log(a.show())
    // (-8,4)
  ```

  ### 構文<!-- omit in toc -->
  `div(v)`
  #### 引数<!-- omit in toc -->
  s : 除算する数値
  #### 返り値<!-- omit in toc -->
  v : 定数で除算されたベクトル
  - - -

## mod(s)
  ### 説明<!-- omit in toc -->
  ベクトルを定数で割った余りを返します。<br>
  もとのベクトルが変更されることはありません。<br>
  `new Vec2(a.x % n, a.y % n)`と等価です。

  ```javascript:example.js
    let a = new Vec2(7,-4)
    let s = 3

    console.log(a.show())
    // (7,-4)
    console.log(a.mod(s).show())
    // (1,-1)
    console.log(a.show())
    // (7,-4)
  ```

  ### 構文<!-- omit in toc -->
  `mod(s)`
  #### 引数<!-- omit in toc -->
  s : 除算する数値
  #### 返り値<!-- omit in toc -->
  v : 除算の余りのベクトル
  - - -

## mulVec2(s)
  ### 説明<!-- omit in toc -->
  ベクトルの成分ごとに乗算を行います。<br>
  もとのベクトルが変更されることはありません。<br>
  `new Vec2(a.x * b.x, a.y * b.y)`と等価です。
  ```javascript:example.js
    let a = new Vec2(-2,1)
    let b = new Vec2(3,2)

    console.log(a.show())
    // (-2,1)
    console.log(a.mulVec2(b).show())
    // (-6,2)
    console.log(a.show())
    // (-2,1)
  ```

  ### 構文<!-- omit in toc -->
  `mulVec2(v)`
  #### 引数<!-- omit in toc -->
  s : 乗算するベクトル
  #### 返り値<!-- omit in toc -->
  v : 乗算されたベクトル
  - - -

## divVec2(s)
  ### 説明<!-- omit in toc -->
  ベクトルを成分ごとに除算します。<br>
  もとのベクトルが変更されることはありません。<br>
  `new Vec2(a.x / b.x, a.y / b.y)`と等価です。

  ```javascript:example.js
    let a = new Vec2(6,-4)
    let b = new Vec2(3,-4)

    console.log(a.show())
    // (6,-4)
    console.log(a.divVec2(b).show())
    // (2,1)
    console.log(a.show())
    // (6,-4)
  ```

  ### 構文<!-- omit in toc -->
  `divVec2(v)`
  #### 引数<!-- omit in toc -->
  v : 除算するベクトル
  #### 返り値<!-- omit in toc -->
  v : 除算されたベクトル
  - - -

## modVec2(s)
  ### 説明<!-- omit in toc -->
  ベクトルを成分ごとに割った余りを返します。<br>
  もとのベクトルが変更されることはありません。<br>
  `new Vec2(a.x % b.x, a.y % b.y)`と等価です。

  ```javascript:example.js
    let a = new Vec2(7,-4)
    let s = new Vec2(3,2)

    console.log(a.show())
    // (7,-4)
    console.log(a.modVec2(v).show())
    // (1,-0)
    console.log(a.show())
    // (7,-4)
  ```

  ### 構文<!-- omit in toc -->
  `modVec2(v)`
  #### 引数<!-- omit in toc -->
  s : 除算するベクトル
  #### 返り値<!-- omit in toc -->
  v : 除算の余りのベクトル
  - - -

## addAsn(v)
  ### 説明<!-- omit in toc -->
  ベクトル同士の加算を行います。<br>
  もとのベクトルに結果が代入されます。<br>
  `a = a.add(b)`と等価です。
  ```javascript:example.js
    let a = new Vec2(1,3)
    let b = new Vec2(-3,2)

    console.log(a.show())
    // (1,3)
    a.addAsn(b)
    // (-2,5)
    console.log(a.show())
    // (-2,5)
  ```

  ### 構文<!-- omit in toc -->
  `addAsn(v)`
  #### 引数<!-- omit in toc -->
  v : 加算されるベクトル
  #### 返り値<!-- omit in toc -->
  なし
  - - -

## subAsn(v)
  ### 説明<!-- omit in toc -->
  ベクトル同士の減算を行います。<br>
  もとのベクトルに結果が代入されます。<br>
  `a = a.sub(b)`と等価です。
  ```javascript:example.js
    let a = new Vec2(5,2)
    let b = new Vec2(-3,1)

    console.log(a.show())
    // (5,2)
    a.subAsn(b)
    // (8,1)
    console.log(a.show())
    // (8,1)
  ```

  ### 構文<!-- omit in toc -->
  `subAsn(v)`
  #### 引数<!-- omit in toc -->
  v : 減算されるベクトル
  #### 返り値<!-- omit in toc -->
  なし
  - - -

## mulAsn(s)
  ### 説明<!-- omit in toc -->
  ベクトルの定数倍を行います。<br>
  もとのベクトルに結果が代入されます。<br>
  `a = a.mul(b)`と等価です。
  ```javascript:example.js
    let a = new Vec2(-2,1)
    let s = 3

    console.log(a.show())
    // (-2,1)
    a.mulAsn(n)
    // (-6,3)
    console.log(a.show())
    // (-6,3)
  ```

  ### 構文<!-- omit in toc -->
  `mulAsn(s)`
  #### 引数<!-- omit in toc -->
  s : 定数倍する数値
  #### 返り値<!-- omit in toc -->
  なし
  - - -

## divAsn(s)
  ### 説明<!-- omit in toc -->
  ベクトルを定数で除算します。<br>
  もとのベクトルに結果が代入されます。<br>
  `a = a.div(b)`と等価です。
  ```javascript:example.js
    let a = new Vec2(8,-4)
    let s = -4

    console.log(a.show())
    // (-8,4)
    a.divAsn(b)
    // (-2,1)
    console.log(a.show())
    // (-2,1)
  ```

  ### 構文<!-- omit in toc -->
  `divAsn(s)`
  #### 引数<!-- omit in toc -->
  s : 除算する数値
  #### 返り値<!-- omit in toc -->
  なし
  - - -

## modAsn(s)
  ### 説明<!-- omit in toc -->
  ベクトルを定数で割った余りを返します。<br>
  もとのベクトルに結果が代入されます。<br>
  `a = a.mod(b)`と等価です。
  ```javascript:example.js
    let a = new Vec2(7,-4)
    let s = 3

    console.log(a.show())
    // (7,-4)
    a.modAsn(s)
    // (1,-1)
    console.log(a.show())
    // (1,-1)
  ```

  ### 構文<!-- omit in toc -->
  `modAsn(s)`
  #### 引数<!-- omit in toc -->
  s : 除算する数値
  #### 返り値<!-- omit in toc -->
  なし
  - - -

## mulVec2Asn(s)
### 説明<!-- omit in toc -->
  ベクトルの成分ごとに乗算を行います。<br>
  もとのベクトルに結果が代入されます。<br>
  `a = a.mulVec2(b)`と等価です。
```javascript:example.js
  let a = new Vec2(-2,1)
  let b = new Vec2(3,2)

  console.log(a.show())
  // (-2,1)
  a.mulVec2Asn(b)
  // (-6,2)
  console.log(a.show())
  // (-6,2)
```

### 構文<!-- omit in toc -->
`mulVec2Asn(b)`
#### 引数<!-- omit in toc -->
s : 乗算するベクトル
#### 返り値<!-- omit in toc -->
v : 乗算されたベクトル
- - -

## divVec2Asn(s)
### 説明<!-- omit in toc -->
ベクトルを成分ごとに除算します。<br>
  もとのベクトルに結果が代入されます。<br>
  `a = a.divVec2(b)`と等価です。

```javascript:example.js
  let a = new Vec2(6,-4)
  let b = new Vec2(3,-4)

  console.log(a.show())
  // (6,-4)
  a.divVec2Asn(b)
  // (2,1)
  console.log(a.show())
  // (2,1)
```

### 構文<!-- omit in toc -->
`divVec2(v)`
#### 引数<!-- omit in toc -->
v : 除算するベクトル
#### 返り値<!-- omit in toc -->
v : 除算されたベクトル
- - -

## modVec2Asn(s)
### 説明<!-- omit in toc -->
ベクトルを成分ごとに割った余りを返します。<br>
もとのベクトルが変更されることはありません。<br>
  `a = a.modAsn(b)`と等価です。

```javascript:example.js
  let a = new Vec2(7,-4)
  let b = new Vec2(3,2)

  console.log(a.show())
  // (7,-4)
  a.modVec2Asn(b)
  // (1,-0)
  console.log(a.show())
  // (1,-0)
```

### 構文<!-- omit in toc -->
`modVec2(v)`
#### 引数<!-- omit in toc -->
s : 除算するベクトル
#### 返り値<!-- omit in toc -->
v : 除算の余りのベクトル
- - -
