![logo](Images/Icon.png)

#
![Alt text](https://img.shields.io/badge/data-app-green) ![Alt text](https://img.shields.io/badge/price-%240-lightgrey)
![img](https://img.shields.io/github/license/osamhack2020/App_ArmyTrainer_nanglam)


## ✨프로젝트 설명
- Flutter로 제작하여 크로스 플랫폼을 지원합니다.
(IOS, Android 둘다 빌드가 가능합니다.)

- 푸쉬업과 싯업의 운동 및 개수 측정을 도와주는 어플입니다.

- 기록 측정시 성별 / 나이 / 직업에 따라 급수를 출력 합니다.

- *달리기는 GPS가 필요할 것 같아 군 내부 보안 규정상 기능을 제거했습니다.


<br/>

## 🙏Notice
- 5.2인치 기준으로 디자인 되어 있습니다.

- 초기화면 후 메인화면이 나오지 않는다면 홈 버튼 누른 후 다시 앱으로 들어오시면 됩니다.

- 노트20(최신폰)의 경우 근접센서 측정 방식이 달라 터치로 측정 하셔야 합니다.



<br/>

## 📕측정 방식
- 근접센서를 이용하여 푸시업 개수를 측정합니다.

- 자이로센서를 이용하여 싯업 개수를 측정합니다.


<br/>

## 🙏Prerequisites
- Android 8.0(오레오) 이상 권장

- Ios (맥OS가 없어 테스트 불가..)


<br/>

## 🔍 기술 스택 (Technique Used)
###  Server(Back-end)
- sqlite
### Front-end
- Dart(Flutter)
### Module: Version / License
- sqflite: 1.3.1+1 / MIT
- path_provider: 1.6.18 / BSD
- path: 1.7.0 / BSD
- all_sensors: 0.2.3 / BSD
- shared_preferences: 0.5.12+2 / BSD
- fl_chart: 0.12.0 / BSD
- image_picker: 0.6.7+12 / Apache 2.0
- image: 2.1.18 / Apache 2.0
- flutter_datetime_picker: 1.4.0 / MIT
- flutter_native_splash: 0.1.9 / MIT
- flutter_launcher_icons: 0.8.1 / MIT
- audioplayers: 0.16.1 / MIT


<br/>

## ❓설치 안내 (Installation Process)
    
👉 <a href="https://github.com/osamhack2020/App_ArmyTrainer_nanglam/raw/master/ArmyTrainer.apk">ArmyTrainer.apk</a>



<br/>

## 💬어플 사용법 (Getting Started)


### Set Infomation
<img src="Images/Setting.gif" height="300px">

*최초 1회만 실행됩니다.

#

### Add Routine

<img src="Images/AddRoutine.gif" height="300px">

#

### Change Routine

<img src="Images/ChangeRoutine.gif" height="300px">

#

### Remove Routine

<img src="Images/RemoveRoutine.gif" height="300px">

#

### Modify Profile

<img src="Images/ModifyProfile.gif" height="300px">

#

### Reset Routine

<img src="Images/ResetRoutine.gif" height="300px">

#


## 파일 정보 및 목록 (File Manifest)

```sh
WEB_ArmyDocs_Team
│  .gitignore
│  pom.xml
│  README.md
│  init.sql   // DB queries
│  
└─src
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

<br/>
<br/>
<br/> 

## 👫팀 정보 (Team Information)
- 진국현 (nang_lam@naver.com), Github Id: <a href="https://github.com/nanglam">nanglam</a>, Tistory Blog : <a href="https://security-nanglam.tistory.com/">낭람</a>


<br/>

## 🔥저작권 및 사용권 정보 (Copyleft / End User License)
 * [MIT](https://github.com/osam2020-WEB/Sample-ProjectName-TeamName/blob/master/license.md)
    
    Copyright (c) 2019 smaple_license

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



# 강군마켓 [http://samarket.kr/](http://samarket.kr/)

[![Logo](docs/imgs/logo.png)](https://samarket.kr)

### 강한 군인들만의 영내 중고거래 커뮤니티 

---

## 팀소개 및 프로잭트 설명 동영상
[![Video](docs/imgs/video.png)](https://www.youtube.com)

---

## 기능 설계
 [![XD](docs/imgs/xd_proto.png)](https://www.tinyurl.com/samxdclr)
 - Adobe XD

---

## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
* ECMAScript 6 지원 브라우저 사용
* 권장: Google Chrome 버젼 77 이상

---

## 기술 스택 (Technique Used)
### Server(back-end)
 - Go + [Gin](https://github.com/gin-gonic/gin)
 - [MariaDB](https://mariadb.com/)

### front-end
 -  [React.js](https://ko.reactjs.org/)

---

## 설치 안내 (Installation Process)
```bash
$ git clone https://github.com/osamhack2020/WEB_SAMarket_SAMarket.git
$ TBA
```

## 프로젝트 사용법 (Getting Started)
```bash

```

---
 
## 팀 정보 (Team Information)
- 고현수 Hyunsu Ko (sce06147@naver.com), Github Id: KoHyunsu
- 장태준 Taejun Jang (jtjun@gmail.com), Github Id: jtjun
- 조우림 Woolim Cho (2680v4@gmail.com), Github Id: jkl5616

## 저작권 및 사용권 정보 (Copyleft / End User License)
 * [MIT](license.md)
