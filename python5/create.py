import json
import module

try:
        # 'python3/info_cus.json'読み込み
    with open('python5/info_cus.json', 'r') as info_open:
        info_load=json.load(info_open)
except:
    info_load=[]  
   
# 入力
def create(info_load):
    while True:
        id=input("登録する個人IDを入力してください:")
        count=0
        count=module.count(count,info_load,id)
        if  module.unique(id,info_load):
            print("このIDはすでに使われています。もう一度やり直してください。")
        else:
            name=input("名前を入力してください:")
            tel=input("電話番号を入力してください")
            ad_num=input("郵便番号を入力してください:")
            ad=input("住所を入力してください:")
            main=input("お問い合わせ内容を入力してください:")

            info = {'id':id,'name':name,'tel':tel,'ad_num':ad_num,'ad':ad,'main':main}
            info_load.append(info)
            break
create(info_load)
module.write(info_load)

