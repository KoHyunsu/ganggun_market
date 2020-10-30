[![Logo](docs/imgs/logo.png)](https://samarket.kr)
# 강군마켓 
![Alt text](https://img.shields.io/badge/data-web-green) 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### 강한 군인들만의 영내 중고거래 커뮤니티 

[링크] [http://samarket.kr/](http://samarket.kr/)

<br>

## 📌 공지사항(Notice)
- notice1

- notice2

- notice3

<br>

## 📜 프로젝트 설명(Project Description)
-

-

-

<br>

## 📽️ 시연 동영상
[![Video](docs/imgs/video.png)](https://www.youtube.com)

<br>

## 🛠️ 기능 설계
 [![XD](docs/imgs/xd_proto.png)](https://www.tinyurl.com/samxdclr)
 - Adobe XD

<br>

## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
* ECMAScript 6 지원 브라우저 사용
* 권장: Google Chrome 버젼 77 이상

<br>

## 기술 스택 (Technique Used)

### Frontend
 -  [React.js](https://ko.reactjs.org/)



### Backend
 - Go + [Gin](https://github.com/gin-gonic/gin)
 - [MariaDB](https://mariadb.com/)

<br>

## 파일 구조 (File Structure)

```sh
WEB_SAMarket_SAMarket
│  docs
│  .gitignore
│  license.md
│  readme.md
│
└─frontend
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
└─backend
    └─main
        ├─java
        │  └─com
        │      └─armydocs
        │          │  LoginController.java
        │          │  MainController.java
        │          │  SurveyController.java
        │          │  
        │          ├─basic
        │          │  ├─dao	  // dao
        │          │  ├─service	  // service
        │          │  └─vo	  // dto
        │          │          
        │          ├─interceptor  // handler
        │          └─util
        │                  
        └─webapp
            │  
            ├─resources		// static resouces
            │  ├─bxslider
            │  ├─css
            │  ├─fontawesome   
            │  ├─img
            │  └─js
            │          
            └─WEB-INF
                │  spring-servlet.xml	// servlet context
                │  web.xml		// web deployment describer
                │  
                ├─jsp		// templates
                │  │  
                │  ├─include	// common components
                │  └─survey	// survey components
                │          
                ├─spring	// spring config files
                └─sqlmap	// sql mapper files
                        
```
<br>

## 설치 안내 (Installation Process)

### Frontend
```bash
$ git clone https://github.com/osamhack2020/WEB_SAMarket_SAMarket.git
$ TBA
```
### Backend

<br>

## 🎨 프로젝트 사용법 (Getting Started)
```bash
```

---

<br>

## 팀 정보 (Team Information)
- 고현수 Hyunsu Ko (sce06147@naver.com), Github Id: KoHyunsu
- 장태준 Taejun Jang (jtjun@gmail.com), Github Id: jtjun
- 조우림 Woolim Cho (2680v4@gmail.com), Github Id: jkl5616

<br>

## 저작권 및 사용권 정보 (Copyleft / End User License)
 * [MIT](license.md)
