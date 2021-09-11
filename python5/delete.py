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
# 配列順番特定
count=0
count=module.count(count,info_load,id)


if  module.unique(id,info_load):
    module.delete(info_load,count)
else:
    print("情報が見つかりませんもう一度やり直してください。") 