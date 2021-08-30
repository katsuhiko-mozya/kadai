import json
import module

info_load=[]

try:
        # 'python3/info_cus.json'読み込み
    with open('python3/info_cus.json', 'r') as info_open:
        info_load=json.load(info_open)
except:
    info_load=[]  
   


# 入力
flag=0
id=input("個人IDを入力してください:")
while True:
    if  not module.unique(id,info_load):
        id=input("個人IDを再入力してください:")
    else:
        break

name=input("名前を入力してください:")
tel=input("電話番号を入力してください")
ad_num=input("郵便番号を入力してください:")
ad=input("住所を入力してください:")
main=input("お問い合わせ内容を入力してください:")

if  not len(info_load)==0: #配列の和検証
    for x in info_load:
        if name == x["name"] and tel == x["tel"]:
            x["ad_num"]=ad_num
            x["ad"]=ad
            x["main"]=main
            flag=1
    
if flag==0:   
    info = {'id':id,'name':name,'tel':tel,'ad_num':ad_num,'ad':ad,'main':main}
    info_load.append(info)

with open('python3/info_cus.json', 'w')  as f:
    # json.dumps(info_load)
    f.write(json.dumps(info_load))
    f.close
