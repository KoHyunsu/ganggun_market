[![Logo](docs/imgs/logo.png)](https://samarket.kr)
# 강군마켓 
![Alt text](https://img.shields.io/badge/data-web-green) 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### 강한 군인들만의 영내 중고거래 커뮤니티 

[링크] [http://samarket.kr/](http://samarket.kr/)

<br>

## 📜 프로젝트 설명(Project Description)

#### 코로나19로 힘든 시기를 보내고 있는 장병들을 도와주자
코로나19로 인한 ‘사회적 거리 두기’ 실시에 따른 출타 제한으로 인해 현역 장병들은 정신적인 스트레스 뿐만 아니라, 필요한 물품이나 외부 물자를 얻기 어려운 문제를 겪고 있다. 이에 비교적 이동이 자유로운 영내 중고거래 및 정보공유를 활성화함으로써, 힘든 시기를 극복하는 데 도움이 되고자 한다. 우리 아이템의 사용자인 현역 장병들은 필요한 물품뿐만 아니라 새로운 사람과 새로운 정보를 얻고, 활력을 찾을 수 있을 것으로 기대한다. 

#### 모두가 신뢰할 수 있는 안심 거래 서비스 구축 
강군마켓의 핵심 서비스는 ‘영내 중고거래’이다. 영내 중고거래의 장점은 출타 제한에 따른 영향을 받지 않는다는 것이다. 또한, 같은 영내에 있는 사람끼리 거래하기 때문에, 신뢰성을 매우 높게 확보할 수 있다. 이에 더해 우리는 거래자 간의 상호평가뿐만 아니라 같은 부대 내 ‘전우의 평가’ 시스템으로 거래 품목의 품질 평가에 대한 신뢰성을 확보할 수 있다.

#### 커뮤니티를 통해 장병들의 소통 활성화
소통 커뮤니티는 자신이 판매하거나, 필요한 물품을 게시글로 올리는 것에서 시작한다. 나아가, 거래 후기를 올리고, 영내에서 활용할 수 있는 정보를 공유할 수 있을 것이다. 이를 통해 정보의 선순환과 건강한 커뮤니티 문화를 형성할 수 있을 것이다. 두 서비스 모두 힘든 시기를 보내고 있는 지친 장병들이 새로운 만남, 새로운 물건과 정보로 활력을 찾을 수 있을 것이다.

<br>

## 📽️ 시연 동영상
[![Video](docs/imgs/video.png)](https://www.youtube.com)

<br>

## 🛠️ 기능 설계
 [![XD](docs/imgs/xd_proto.png)](https://www.tinyurl.com/samxdclr)
 - Adobe XD

<br>

## 📌 필요 사양 (Prerequisites)
* ECMAScript 6 지원 브라우저 사용
* 권장: Google Chrome 버젼 77 이상

<br>

## 🧪 기술 스택 (Technique Used)

### Frontend
 -  [React.js](https://ko.reactjs.org/)

### Backend
 - Go + [Gin](https://github.com/gin-gonic/gin)
 - [MariaDB](https://mariadb.com/)

<br>

## 🧱 파일 구조 (File Structure)

```sh
WEB_SAMarket_SAMarket
│  docs
│  .gitignore
│  license.md
│  readme.md
│
├─frontend  //react
│   ├─.gitignore
│   ├─.prettierrc
│   ├─jsconfig.json
│   ├─package.json
│   ├─yarn.lock
│   ├─readme.md
│   ├─public
│   └─src
│       ├─index.js
│       ├─index.css
│       ├─serviceWorker.js
│       ├─setupTests.js
│       ├─imgs
│       ├─api
│       │  index.js
│       │
│       ├─data
│       │  chats.json
│       │  rates.json
│       │  replies.json
│       │  samroads.json
│       │  users.json
│       │
│       └─views
│           ├─components
│           │    ├─  aboutUs
│           │    ├─  base
│           │    ├─  chat
│           │    ├─  header
│           │    ├─  menubar
│           │    ├─  post
│           │    ├─  profile
│           │    ├─  rate
│           │    ├─  tag
│           │    ├─  user
│           │    └─ write
│           ├─modules
│           │    ├─  chat
│           │    ├─  common
│           │    ├─  friend
│           │    ├─  samroad
│           │    ├─  search
│           │    ├─  sign
│           │    ├─  animation.css
│           │    └─  index.js
│           └─pages    
│                ├─  Pages.css
│                ├─  chatPages
│                ├─  postPages
│                ├─  profilePages
│                ├─  signPages
│                ├─  tempPages
│                ├─  index.js
│                ├─  LikePage.js
│                └─  MainPage.js
│
├─backend  //golang
    ├─.gitignore
    ├─LICENSE
    ├─Makefile
    ├─debug.yaml
    ├─go.mod
    ├─go.sum
    ├─main.go
    ├─docs
    ├─api
    │  ├─api.go
    │  ├─auth.go
    │  ├─chat.go
    │  ├─comment.go
    │  ├─error.go
    │  ├─noti.go
    │  ├─post.go
    │  ├─requests.go
    │  ├─results.go
    │  ├─review.go
    │  ├─unit.go
    │  ├─upload.go
    │  └─cuser.go
    │
    ├─config
    │  ├─config.go
    │  ├─go.mod
    │  └─go.sum
    │
    ├─middleware
    │  ├─middleware.go
    │  ├─go.mod
    │  └─go.sum
    │
    ├─models
    │  ├─chat.go
    │  ├─comment.go
    │  ├─noti.go
    │  ├─post.go
    │  ├─image.go
    │  ├─review.go
    │  ├─unit.go
    │  ├─user.go
    │  ├─go.mod
    │  ├─go.sum
    │  └─modles.go
    │
    └─ws
       ├─client.go
       ├─events.go
       ├─hub.go
       ├─ws.go
       ├─go.mod
       └─go.sum
                        
```
<br>

## 💻 설치 안내 (Installation Process)

### Frontend
```bash
$ git clone https://github.com/osamhack2020/WEB_SAMarket_SAMarket.git
$ cd frontend
$ npm install
$ npm start
```
### Backend
```bash
$ git clone https://github.com/osamhack2020/WEB_SAMarket_SAMarket.git
$ cd backend
$ go run
```

<br>

## 🎨 프로젝트 사용법 (Getting Started)
```bash
```

---

<br>

## ❤️ 팀 정보 (Team Information)
- 고현수 Hyunsu Ko (sce06147@naver.com), Github Id: KoHyunsu
- 장태준 Taejun Jang (jtjun@gmail.com), Github Id: jtjun
- 조우림 Woolim Cho (2680v4@gmail.com), Github Id: jkl5616

<br>

## 🔒 저작권 및 사용권 정보 (Copyleft / End User License)
 * [MIT]
 Copyright (c) 2019 smaple_license

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<br>
