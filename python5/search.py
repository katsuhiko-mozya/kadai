# ◆情報の検索を行うプログラムの要件
# 氏名、電話番号、顧客IDで検索できるようにする
# 検索は、完全一致とする（入力内容と登録内容が完全に一致する場合のみ結果が返る）
# 情報があった場合、すべての情報を改行を入れて出力する
# 情報が見つからなかった場合は見つからなかったことを表示する
# jsonファイルへのアクセスに失敗する想定もこと
import json
import module
try:
    with open('python5/info_cus.json', 'r') as info_open:
        info_load=json.load(info_open)
except:
    print("データが読み取れませんでした")

print("顧客情報を検索します")
id=input("個人IDを入力してください:")
count=0
count=module.count(count,info_load,id)
name=input("名前を入力してください:")
tel=input("電話番号を入力してください")

count=0
count=module.count(count,info_load,id)
if id==info_load[count]["id"] and name in info_load[count]["name"] and tel in info_load[count]["tel"].split(","):
    for index,i in enumerate(info_load[count].items(),1):
        print(index,i[0],":",i[1])

    edit=input("↑以上の情報を変更する必要があれば（Y）を押してください。削除したい項目があるときは（n)　何もしないならはEnterを押してください")
    if edit=="Y":
        module.over_lap(count,info_load)
    elif edit=="n":
        module.delete(info_load,count)
    else:
        print("終了します")
else:
    print("データが見つかりません")