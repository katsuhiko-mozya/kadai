import json
import module
# 'python3/info_cus.json'読み込み
info_open = open('python3/info_cus.json', 'r')
try:
    info_load =json.load(info_open)
except:
    info_load=[]  

# 入力
flag=0
id=int(input("個人IDを入力してください:"))
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

for x in info_load:
    if name == x["name"] and tel == x["tel"]:
        x["ad_num"]=ad_num
        x["ad"]=ad
        x["main"]=main
        f = open('python3/info_cus.json', 'w')  
        json.dump(x, f, ensure_ascii=False) 
        f.close
        flag=1
        break

if flag==0:   
    info = {'id':id,'name':name,'tel':tel,'ad_num':ad_num,'ad':ad,'main':main}
    info_load.append(info)
    # 'python3/info_cus.json'に書き込み
    f = open('python3/info_cus.json', 'w')  
    json.dump(info_load, f, ensure_ascii=False) 
    f.close


