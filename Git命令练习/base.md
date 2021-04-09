### 基本操作

#### 本地

##### commit
git commit 

##### branch
git branch [branchNAME]

##### 合并分支
git merge  [会将所有提交历史融合到分支上，基点为目标分支，合并操作分支]
git rebase [基点为操作分支，将其提交历史打包并入目标分支]

##### 移动指针
git checkout HEAD 修改指针指向目标位置
git checkout branch 修改指针指向某个分支
git branch -f branch HEAD 修改分支指向位置

^一个符号代表一级别指向
~num 相对引用

##### 回退版本
git reset [本地合并，将指针指向对应位置]
git revert [将对应位置复制，并产生新的提交记录，状态同步，远程协作可用]

##### 操作提交记录
git cherry-pick c1 c2 c3[基点为当前操作分支，可将对应提交记录并入当前指针之后]
git rebase -i HEAD^1[进行提交记录的移动、删除、合并等操作，并最后将其并入指定位置]

<!-- 可以用来只进行对应的提交记录提交，摒弃多余的记录 -->

#### 远程
