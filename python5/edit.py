from os import spawnl
import module
import json

# 読み込み
try:
    with open('python5/info_cus.json', 'r') as info_open:
        info_load=json.load(info_open)
except:
    info_load=[] 

id= input("編集する情報のidを入力してください：")

# ID一致
if module.unique(id,info_load):
    count=0
    count=module.count(count,info_load,id) 

    print("こちらの情報を変更します。")
    for index,i in enumerate(info_load[count].items(),1):
        print(index,i[0],":",i[1])

# 変更要求  
    print("変更したい項目の情報を入力してください")
    name=input("名前:")
    tel=input("電話番号：")
    ad_num=input("郵便番号:")
    ad=input("住所:")
    main=input("お問い合わせ内容:")
    tel_judge=input("電話番号は上書きしますか？（updt)　追加しますか？（add）：")
    while True:
        if tel_judge=="updt" or tel_judge=="add":
            break
        else:
            tel_judge=input("もう一度入力してください。電話番号は上書きしますか？（updt)　追加しますか？（add）：")

    module.edit(name,info_load,count,"name")
    module.edit(ad_num,info_load,count,"ad_num")
    module.edit(ad,info_load,count,"ad")
    if tel_judge=="updt":
        print("何番目の電話番号の情報を更新しますか？")
        for index,i in enumerate(info_load[count]["tel"].split(","),1):
            print(index,i)      
        edit_num=int(input("何番目の電話番号を更新しますか"))-1
        info_load[count]["tel"](edit_num)=tel
    elif tel_judge=="add":
        print(tel+"を追加します")
        info_load[count]["tel"]=info_load[count]["tel"]+","+tel



else:
    print("該当する情報が存在しません。もう一度やり直してください。")