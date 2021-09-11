from os import name
import module
import json

def unique(id,info_load):
    for id_array in info_load:
        if  id == id_array["id"]:
            return True   
    return False
                 
def judge(judge):
    while True:
        if judge=="y":
            return True
        elif judge=="n":
            return False   
        else:
            judge=input("yesかnoで答えてください")

def count(count,info_load,id):
    for id_array in info_load:
        if  id == id_array["id"]:
            return count
        count=count+1

def edit(key,info_load,count,name):
        if  key :
            info_load[count][name]=key

def upad(info_load,count,t_m,tm):
    tel_judge=input(tm+"は上書きしますか？（Y)　追加しますか？（n）：")
    while True:
        if tel_judge=="Y" or tel_judge=="n":
            break
        else:
            tel_judge=input("もう一度入力してください。"+tm+"は上書きしますか？（Y)　追加しますか？（n）：")

    if tel_judge=="Y":
            print("何番目の"+tm+"の情報を更新しますか？")
            for index,i in enumerate(info_load[count][tm].split(","),1):
                print(index,i)      
            edit_num=int(input("何番目の"+tm+"を更新しますか"))-1
            dele =info_load[count][tm].split(",")
            print(dele[edit_num]+"を更新します")
            try:
                dele[edit_num]=t_m
                info_load[count][tm]=str(dele).replace("[","").replace("]","")
            except:
                print("更新に失敗しました。最初からやり直してください。")    
    elif tel_judge=="n":
        info_load[count][tm]=info_load[count][tm]+","+t_m

def over_lap(count,info_load): 

    print("こちらの情報を変更します。")
    for index,i in enumerate(info_load[count].items()):
        if not index==0:
            print(index,i[0],":",i[1])
 
    print("変更したい項目の情報を入力してください")
    name=input("名前:")
    tel=input("電話番号：")
    ad_num=input("郵便番号:")
    ad=input("住所:")
    main=input("お問い合わせ内容:")

    if tel:
        module.upad(info_load,count,tel,"tel")

    if main:
        module.upad(info_load,count,main,"main")

    module.edit(name,info_load,count,"name")
    module.edit(ad_num,info_load,count,"ad_num")
    module.edit(ad,info_load,count,"ad")

    module.write(info_load)

def delete(info_load,count):
    all_part=input("削除する情報は全てですか?(Y),一部分ですか?(n):")
    while True:
        if all_part=="Y" or all_part=="n":
            break
        else:
            all_part=input("入力が間違っています。もう一度入力してください。(削除する情報は全てですか?(Y),一部分ですか?(n)):")


    #全体削除           
    if all_part =="Y":
        for index,i in enumerate(info_load[count].items(),1):
            print(index,i[0],":",i[1])
        judge=input("↑以上の情報を削除します。本当によろしいですか？(y/n)")
        if module.judge(judge):
            try:
                info_load.pop(count)
            except:
                print("削除に失敗しました。もう一度やり直してください。")    
        else:
            print("削除を中止しました。") 
    # 部分削除
    elif all_part=="n":
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
            judge=input("↑以上の情報を削除します。本当によろしいですか？(y/n)")
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
                judge=input("↑以上の情報を削除します。本当によろしいですか？(y/n)")
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

    module.write(info_load)

def write(info_load):
    with open('python5/info_cus.json', 'w')  as f:
        # json.dump(info_load, f, ensure_ascii=False) 
        f.write(json.dumps(info_load))
        f.close