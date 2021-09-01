import json
from os import name, replace
import module

# info_cus読み込み
info_load=[]
try:
    with open('python4/info_cus.json', 'r') as info_open:
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
# print(info_load[count]["name"])
# print(info_load[count]["main"].replace(",","")[1])
print(info_load[count]["main"].replace(",","")[1])
#全体削除           
if all_part =="all":
    for i in info_load[count].values():
        print(i)
    judge=input("以上の情報を削除します。本当によろしいですか？(yes/no)")
    if module.judge(judge):
        try:
            info_load.pop(count)
        except:
            print("削除に失敗しました。もう一度やり直してください。")    
    else:
        print("削除を中止しました。") 
# 部分削除
elif all_part=="part":
    for index,i in enumerate(info_load[count].values()):
        if not index==0:
            print(index,i)
    select=input("何番の情報を削除しますか?1,2,3,4,5:")
    while True:
        if select=="1" or select=="" or select=="3" or select=="4" or select=="5"  :
            break
        else:
            select=input("入力が間違っています。もう一度入力してください。何番の情報を削除しますか?(1,2,3,4,5:")
    if select=="1":
        print(info_load[count]["name"])
        judge=input("以上の情報を削除します。本当によろしいですか？(yes/no)")
        if module.judge(judge):
            try:
                info_load[count]["name"]=""
            except:
                print("削除に失敗しました。もう一度やり直してください。")    
        else:
            print("削除を中止しました。")

    elif select=="3":
        print(info_load[count]["ad_num"])
        judge=input("以上の情報を削除します。本当によろしいですか？(yes/no)")
        if module.judge(judge):
            try:
                info_load[count]["ad_num"]=""
            except:
                print("削除に失敗しました。もう一度やり直してください。")    
        else:
            print("削除を中止しました。") 

    elif select=="4":
        print(info_load[count]["ad"])
        judge=input("以上の情報を削除します。本当によろしいですか？(yes/no)")
        if module.judge(judge):
            try:
                info_load[count]["ad"]=""
            except:
                print("削除に失敗しました。もう一度やり直してください。")    
        else:
            print("削除を中止しました。")

    elif select=="2":
        try:
            for index,i in enumerate(info_load[count]["tel"].replace(",",""),1):
                print(index,i)
        except:
            print("情報が存在しません")
        del_part=input("どの番号の情報を削除しますか？番号で答えてください(ex.1,2,3...)：")
        try:
            print(info_load[count]["tel"].replace(",","")[del_part-1])
        except:
            print("番号が一致しません。もう一度最初からやり直してください。")
        judge=input("以上の情報を削除します。本当によろしいですか？(yes/no)")
        if module.judge(judge):
            try:
                info_load[count]["tel"].replace(",","")[del_part-1]=""
            except:
                print("削除に失敗しました。もう一度やり直してください。")    
        else:
            print("削除を中止しました。")

    elif select=="5":
        while True:
            try:
                for index,i in enumerate(info_load[count]["main"].replace(",",""),1):
                    print(index,i)
            except:
                print("情報が存在しません")
                break
            del_part=int(input("どの番号の情報を削除しますか？番号で答えてください(ex.1,2,3...)："))-1
            try:
                print(info_load[count]["main"].replace(",","")[del_part])
            except:
                print("番号が一致しません。もう一度最初からやり直してください。")
                break
            judge=input("以上の情報を削除します。本当によろしいですか？(yes/no)")
            if module.judge(judge):
                # try:
                    info_load[count]["main"].replace((info_load[count]["main"].replace(",","")[del_part-1]),"")
                    break
                # except:
                #     print("削除に失敗しました。もう一度やり直してください。")    
                #     break
            else:
                print("削除を中止しました。")
                break
# 書込み
with open('python4/info_cus.json', 'w')  as f:
    # json.dump(info_load, f, ensure_ascii=False) 
    f.write(json.dumps(info_load))
    f.close



   