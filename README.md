# resume.siner.io
[여기를 클릭하여 귀여운 이력서 한번 보고 가세요](https://resume.siner.io)
* 채용 당하고 싶은 자의 이력서입니다.
* 채용에 도움이 되고자 AWS를 사용하여 배포를 진행하고 있습니다.
* 배고픈 개발자에게 커피 대신 채용을.

# How To Deploy
#### 1. Install docker, docker-compose
>**docker**<br>
>`Ubuntu` : https://docs.docker.com/install/linux/docker-ce/ubuntu/<br>
>`CentOS` : https://docs.docker.com/install/linux/docker-ce/centos/

>**docker-compose**<br>
>https://docs.docker.com/compose/install/<br>
#### 2. Get Repository
```bash
git clone https://github.com/siner308/resume.siner.io
cd resume.siner.io
```
#### 3. Deploy
```bash
docker-compose up -d --build
```

# 유지보수 방법
1. Notion으로 초안 작성.
2. Notion의 HTML Export 기능을 사용하여 배포 가능한 형태로 변환.
3. express.js를 통해 배포.
`Ubuntu:16.04` `node:12.13.0`

# Diagram
![resume siner io diagram](https://user-images.githubusercontent.com/34048253/67625046-eba69080-f873-11e9-966f-cce93d1ae78b.png)
