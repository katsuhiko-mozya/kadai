import module
import json

# 読み込み
try:
    with open('python5/info_cus.json', 'r') as info_open:
        info_load=json.load(info_open)
except:
    info_load=[] 
while True:
    id= input("編集する情報のidを入力してください：")
    count=0
    count=module.count(count,info_load,id)
    if module.unique(id,info_load):
        module.over_lap(count,info_load)
        break

    else:
        print("該当する情報が存在しません。もう一度やり直してください。")

