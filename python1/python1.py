import urllib.request#外部情報を取り込む
import cchardet
import os
# DIR = "python1"

url = input('Enter URL to get to:')#urlの入力を求める
try:
    req = urllib.request.Request(url)#取得したURLを用いてimportした機能を使う
except:
    print("URLが間違っています")    
with urllib.request.urlopen(req) as res:
    body = res.read()#読み込む
    res.close
    code = cchardet.detect(body)['encoding']
    # number = sum(os.path.isfile(os.path.join(DIR, name)) for name in os.listdir(DIR))
    x=0
    while  x<=999:
        if  not os.path.exists("python1/save"+str(x)+".html"):
            f = open("python1/save"+str(x)+".html","wt")
            f.write(body.decode(code))
            f.close
            break
        x=x+1                   

       
        