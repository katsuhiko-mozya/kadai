# ◆情報の検索を行うプログラムの要件
# 氏名、電話番号、顧客IDで検索できるようにする
# 検索は、完全一致とする（入力内容と登録内容が完全に一致する場合のみ結果が返る）
# 情報があった場合、すべての情報を改行を入れて出力する
# 情報が見つからなかった場合は見つからなかったことを表示する
# jsonファイルへのアクセスに失敗する想定もこと
import json
try:
    info_open = open('python4/info_cus.json', 'r')
    info_load =json.load(info_open)
except:
    print("データが読み取れませんでした")

print("顧客情報を検索します")
id=input("個人IDを入力してください:")
name=input("名前を入力してください:")
tel=input("電話番号を入力してください")

flag=0
for s in info_load:
    if id==s["id"] or name==s["name"] or tel==s["tel"]:
        for p in s.values():
            print(p)
            flag=1
    else:
        flag=0
if flag==0:
    print("データが見つかりません")