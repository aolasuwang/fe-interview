(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{719:function(t,a,i){"use strict";i.r(a);var e=i(10),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h4",{attrs:{id:"git配置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git配置"}},[t._v("#")]),t._v(" Git配置")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('git config --global user.name "robbin"   \ngit config --global user.email "fankai@gmail.com"\ngit config --global color.ui true\ngit config --global alias.co checkout\ngit config --global alias.ci commit\ngit config --global alias.st status\ngit config --global alias.br branch\ngit config --global core.editor "mate -w"    # 设置Editor使用textmate\ngit config -l  # 列举所有配置\n用户的git配置文件~/.gitconfig\n')])])]),i("h4",{attrs:{id:"git常用命令-查看、添加、提交、删除、找回，重置修改文件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git常用命令-查看、添加、提交、删除、找回，重置修改文件"}},[t._v("#")]),t._v(" Git常用命令:查看、添加、提交、删除、找回，重置修改文件**")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('git help <command>  # 显示command的help\ngit show            # 显示某次提交的内容\ngit show $id\n\ngit co  -- <file>   # 抛弃工作区修改\ngit co  .           # 抛弃工作区修改\n\ngit add <file>      # 将工作文件修改提交到本地暂存区\ngit add .           # 将所有修改过的工作文件提交暂存区\n\ngit rm <file>       # 从版本库中删除文件\ngit rm <file> --cached  # 从版本库中删除文件，但不删除文件\n\ngit reset <file>    # 从暂存区恢复到工作文件\ngit reset -- .      # 从暂存区恢复到工作文件\ngit reset --hard    # 恢复最近一次提交过的状态，即放弃上次提交后的所有本次修改\n\ngit ci <file>       \ngit ci .\ngit ci -a           # 将git add, git rm和git ci等操作都合并在一起做\ngit ci -am "some comments"\ngit ci --amend      # 修改最后一次提交记录\ngit commit --amend  #修改最后一次提交注释的，利用–amend参数  \n\ngit revert <$id>    # 恢复某次提交的状态，恢复动作本身也创建了一次提交对象\ngit revert HEAD     # 恢复最后一次提交的状态\n')])])]),i("h4",{attrs:{id:"查看文件diff"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#查看文件diff"}},[t._v("#")]),t._v(" 查看文件diff**")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git diff <file>     # 比较当前文件和暂存区文件差异\ngit diff\ngit diff <$id1> <$id2>   # 比较两次提交之间的差异\ngit diff <branch1>..<branch2> # 在两个分支之间比较 \ngit diff --staged   # 比较暂存区和版本库差异\ngit diff --cached   # 比较暂存区和版本库差异\ngit diff --stat     # 仅仅比较统计信息\n")])])]),i("h4",{attrs:{id:"查看提交记录"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#查看提交记录"}},[t._v("#")]),t._v(" 查看提交记录**")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git log\ngit log <file>      # 查看该文件每次提交记录\ngit log -p <file>   # 查看每次详细修改内容的diff\ngit log -p -2       # 查看最近两次详细修改内容的diff\ngit log --stat      # 查看提交统计信息\n")])])]),i("h2",{attrs:{id:"tig"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tig"}},[t._v("#")]),t._v(" "),i("strong",[t._v("tig")])]),t._v(" "),i("p",[i("strong",[t._v("Git 本地分支管理查看、切换、创建和删除分支")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git br -r           # 查看远程分支\ngit br <new_branch> # 创建新的分支\ngit br -v           # 查看各个分支最后提交信息\ngit br --merged     # 查看已经被合并到当前分支的分支\ngit br --no-merged  # 查看尚未被合并到当前分支的分支\n\ngit co <branch>     # 切换到某个分支\ngit co -b <new_branch> # 创建新的分支，并且切换过去\ngit co -b <new_branch> <branch>  # 基于branch创建新的new_branch\n\ngit co $id          # 把某次历史提交记录checkout出来，但无分支信息，切换到其他分支会自动删除\ngit co $id -b <new_branch>  # 把某次历史提交记录checkout出来，创建成一个分支\n\ngit br -d <branch>  # 删除某个分支\ngit br -D <branch>  # 强制删除某个分支 (未被合并的分支被删除的时候需要强制)\n")])])]),i("h4",{attrs:{id:"分支合并和rebase"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#分支合并和rebase"}},[t._v("#")]),t._v(" 分支合并和rebase**")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git merge <branch>               # 将branch分支合并到当前分支\ngit merge origin/master --no-ff  # 不要Fast-Foward合并，这样可以生成merge提交\n\ngit rebase master <branch>       # 将master rebase到branch，相当于：\ngit co <branch> && git rebase master && git co master && git merge <branch>\n")])])]),i("p",[i("strong",[t._v("Git补丁管理(方便在多台机器上开发同步时用)")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git diff > ../sync.patch         # 生成补丁\ngit apply ../sync.patch          # 打补丁\ngit apply --check ../sync.patch  # 测试补丁能否成功\n\n")])])]),i("h4",{attrs:{id:"git暂存管理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git暂存管理"}},[t._v("#")]),t._v(" Git暂存管理")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git stash                        # 暂存\ngit stash list                   # 列所有stash\ngit stash apply                  # 恢复暂存的内容\ngit stash drop                   # 删除暂存区\n")])])]),i("h4",{attrs:{id:"git远程分支管理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git远程分支管理"}},[t._v("#")]),t._v(" Git远程分支管理")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git pull                         # 抓取远程仓库所有分支更新并合并到本地\ngit pull --no-ff                 # 抓取远程仓库所有分支更新并合并到本地，不要快进合并\ngit fetch origin                 # 抓取远程仓库更新\ngit merge origin/master          # 将远程主分支合并到本地当前分支\ngit co --track origin/branch     # 跟踪某个远程分支创建相应的本地分支\ngit co -b <local_branch> origin/<remote_branch>  # 基于远程分支创建本地分支，功能同上\n\ngit push                         # push所有分支\ngit push origin master           # 将本地主分支推到远程主分支\ngit push -u origin master        # 将本地主分支推到远程(如无远程主分支则创建，用于初始化远程仓库)\ngit push origin <local_branch>   # 创建远程分支， origin是远程仓库名\ngit push origin <local_branch>:<remote_branch>  # 创建远程分支\ngit push origin :<remote_branch>  #先删除本地分支(git br -d <branch>)，然后再push删除远程分支\n")])])]),i("h4",{attrs:{id:"git远程仓库管理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git远程仓库管理"}},[t._v("#")]),t._v(" Git远程仓库管理")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git remote -v                    # 查看远程服务器地址和仓库名称\ngit remote show origin           # 查看远程服务器仓库状态\ngit remote add origin git@github:robbin/robbin_site.git         # 添加远程仓库地址\ngit remote set-url origin git@github.com:robbin/robbin_site.git # 设置远程仓库地址(用于修改远程仓库地址)\ngit remote rm <repository>       # 删除远程仓库\n")])])]),i("h4",{attrs:{id:"创建远程仓库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#创建远程仓库"}},[t._v("#")]),t._v(" 创建远程仓库")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git clone --bare robbin_site robbin_site.git  # 用带版本的项目创建纯版本仓库\nscp -r my_project.git git@git.csdn.net:~      # 将纯仓库上传到服务器上\n\nmkdir robbin_site.git && cd robbin_site.git && git --bare init # 在服务器创建纯仓库\ngit remote add origin git@github.com:robbin/robbin_site.git    # 设置远程仓库地址\ngit push -u origin master                                      # 客户端首次提交\ngit push -u origin develop    # 首次将本地develop分支提交到远程develop分支，并且track\n\ngit remote set-head origin master   # 设置远程仓库的HEAD指向master分支\n")])])]),i("h4",{attrs:{id:"也可以命令设置跟踪远程库和本地库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#也可以命令设置跟踪远程库和本地库"}},[t._v("#")]),t._v(" 也可以命令设置跟踪远程库和本地库")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git branch --set-upstream master origin/master\ngit branch --set-upstream develop origin/develop\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);