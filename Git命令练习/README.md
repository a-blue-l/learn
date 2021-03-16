## 目标：关于git
### 三大特色：暂存区 、分支、工作流
#### 暂存区
1、理解git的工作区、暂存区、版本库
含义：工作区为当前所进行编辑的文件，肉眼可见，而暂存区则通过git add进行添加，git commit的数据便是暂存区中的数据，
commit之后，数据将被放置到版本库中，push将会把版本库的数据同步到远程仓库  
2、查看差异  
（1）git diff 工作区/暂存区  
（2）git diff head 工作区/版本库  
（3）git diff --cached 暂存区/版本库  
3、堆栈区（add+commit）  
git stash（暂存之后）- git stash lish（查看暂存列表） - git stash pop（恢复最后一次暂存并删除暂存）【git stash save 'list'】【git stash apply 应用暂存但不删除暂存内容】

#### 分支
1、git branch
2、git checkout

#### 工作流
1、类型分类：  
（1）集中式工作流  
    以master分支为主开发方式，简单明了，但提交日志混杂  
（2）功能分支工作流  
    每次开发以单独分支开发，最后pull request，  
（3）gitflow工作流  
    严格分支模型：  
        阶段分支常驻 master、dev   研发 feature 热修复 hotfix 发布 release  
          
        master用来记录当前线上环境发布的代码历史  
        dev用来记录所有项目代码研发的提交历史  
      
        feature用来开发新功能，开发完毕要合并到dev分支并删除分支  
        hotfix 用来修复线上出现的bug，修复完成之后分别合并到master和dev分支中  
      
        release 分支上进行bug修复及上线的准备工作，不做任何功能上的修改，完成之后同时合并到master和dev分支上  

（4）forking工作流
        类同 github 上的forking

### 相关命令
1、git init 初始化  
2、git clone 克隆仓库  
3、git add / git commit -m / git pull / git push  (origin branch)
4、git checkout 切换分支
5、git branch 查看分支 +分支名字 创建分支 (-a本地 分支 -r远程分支)
6、git merge 合并 --no-ff -m '' 分支名  (--no-ff 会保留分支历史)
7、git diff branch1 branch2 对比
8、git stash 同上
9、git remote add origin ... 增加一个远程服务器端


### commit 规范
格式：  
`
  <type>(<scope>): <subject>  
`

#### type(必须)  

用于说明git commit的类别，只允许使用下面的标识。  

feat：新功能（feature）。  

fix/to：修复bug，可以是QA发现的BUG，也可以是研发自己发现的BUG。  

fix：产生diff并自动修复此问题。适合于一次提交直接修复问题  
to：只产生diff不自动修复此问题。适合于多次提交。最终修复问题提交时使用fix  
docs：文档（documentation）。  

style：格式（不影响代码运行的变动）。  

refactor：重构（即不是新增功能，也不是修改bug的代码变动）。  

perf：优化相关，比如提升性能、体验。  

test：增加测试。  

chore：构建过程或辅助工具的变动。  

revert：回滚到上一个版本。  

merge：代码合并。  

sync：同步主线或分支的Bug。  

#### scope(可选)

scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。  

#### subject(必须)

subject是commit目的的简短描述，不超过50个字符。 
