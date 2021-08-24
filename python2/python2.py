import urllib.request#外部情報を取り込む
import cchardet
import os
import time
import json 

json_open = open('python2/text.json', 'r')
print(json_open)
#配列
json_load = []
json_load =json.load(json_open)
url = input('Enter URL to get to:')#urlの入力を求める
if   url[-1] == '/':#末尾に/があるか検証しあれば削除→/によって同じページなのにURLがかぶっていあないことが起こる
    url=url.strip(url[-1])
title =input('ENter TITLE to get me:')#titleの入力を求める
y=0
for x in json_load:
    if url == x["url"]:
        x["title"]=title
        f = open('python2/text.json', 'w')  
        json.dump(json_load, f, ensure_ascii=False) 
        # return json.dump(json_load)
        f.close
        y=1

DIR = "python2/directory"
number = sum(os.path.isfile(os.path.join(DIR, name)) for name in os.listdir(DIR))
ut = str(time.time())

if y==0:
    Dictionary ={'title':title,'url':url,'time':ut}
    json_load.append(Dictionary)
    f = open('python2/text.json', 'w')  
    json.dump(json_load, f, ensure_ascii=False) 
    # return json.dump(json_load)
    f.close


try:
    req = urllib.request.Request(url)#取得したURLを用いてimportした機能を使う
except:
    print("URLが間違っています")    
with urllib.request.urlopen(req) as res:
    body = res.read()#読み込む
    res.close
    code = cchardet.detect(body)['encoding']
    x=0
    while  x<=number:
        if  not os.path.exists("python2/directory/save_"+title+".html"):
            f = open("python2/directory/save_"+title+".html","wt")
            f.write(body.decode(code))
            f.close
            break
        x=x+1   