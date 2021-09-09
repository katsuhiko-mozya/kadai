import json
import os
import module

# info_cus読み込み
info_load=[]
try:
    with open('python5/info_cus.json', 'r') as info_open:
        info_load=json.load(info_open)
except:
    info_load=[] 

# id一致
id=input("削除したい情報のIDを入力してください：")
while True:
    if not module.unique(id,info_load):
        id=input("IDが見つかりませんでした。削除したい情報のIDを再入力してください:")
    else:
        break

# すべて削除？部分削除？
all_part=input("削除する情報は全てですか?(all),一部分ですか?(part):")
while True:
    if all_part=="all" or all_part=="part":
        break
    else:
        all_part=input("入力が間違っています。もう一度入力してください。(削除する情報は全てですか?(all),一部分ですか?(part)):")

# 配列順番特定
count=0
count=module.count(count,info_load,id)

#全体削除           
if all_part =="all":
    for index,i in enumerate(info_load[count].items(),1):
        print(index,i[0],":",i[1])
    judge=input("↑以上の情報を削除します。本当によろしいですか？(yes/no)")
    if module.judge(judge):
        try:
            info_load.pop(count)
        except:
            print("削除に失敗しました。もう一度やり直してください。")    
    else:
        print("削除を中止しました。") 
# 部分削除
elif all_part=="part":
    print("何番目の情報を削除しますか？")
    for index,i in enumerate(info_load[count].items()):
        if not index==0:
            print(index,i[0],":",i[1])
    select=input("何番の情報を削除しますか?1,2,3,4,5:")
    while True:
        if select=="1" or select=="2" or select=="3" or select=="4" or select=="5"  :
            break
        else:
            select=input("入力が間違っています。もう一度入力してください。何番の情報を削除しますか?(1,2,3,4,5:")
    number=""
    if select=="1":
        number="name"
    elif select=="3":
        number="ad_num"
    elif select=="4":
        number="ad"
    elif select=="2":
        number="tel"
    elif select=="5":
        number="main"

    if select=="1"  or select=="3" or select=="4":
        print(info_load[count][number])
        judge=input("↑以上の情報を削除します。本当によろしいですか？(yes/no)")
        if module.judge(judge):
            try:
                info_load[count][number]=""
            except:
                print("削除に失敗しました。もう一度やり直してください。")    
        else:
            print("削除を中止しました。")
    else:
        while True:
            print("どの番号の情報を削除しますか？")
            try:
                for index,i in enumerate(info_load[count][number].split(","),1):
                    print(index,i)
            except:
                print("情報が存在しません")
                break
            #検証
            del_part=int(input("どの番号の情報を削除しますか？番号で答えてください(ex.1,2,3...)："))-1
            try:
                print(info_load[count][number].split(",")[del_part])
            except:
                print("番号が一致しません。もう一度最初からやり直してください。")
                break
            judge=input("↑以上の情報を削除します。本当によろしいですか？(yes/no)")
            if module.judge(judge):
                try:
                    del_num=info_load[count][number].split(",")
                    del_num.remove(del_num[del_part-1])
                    info_load[count][number]=str(del_num).replace("[","").replace("]","").replace("'","")
                    break
                except:
                    print("削除に失敗しました。もう一度やり直してください。")    
                    break
            else:
                print("削除を中止しました。")
                break        

# 書込み
with open('python5/info_cus.json', 'w')  as f:
    # json.dump(info_load, f, ensure_ascii=False) 
    f.write(json.dumps(info_load))
    f.close



   