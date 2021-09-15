
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
if id==info_load[count]["id"] and name in info_load[count]["name"] and tel in info_load[count]["tel"]:
    for index,i in enumerate(info_load[count].items(),1):
        print(index,i[0],":",i[1])

    edit=input("↑以上の情報を変更する必要があれば（y）を押してください。削除したい項目があるときは（n)　何もしないならはEnterを押してください:")
    if module.judge(edit):
        module.over_lap(count,info_load)
    elif not module.judge(edit):
        module.delete(info_load,count)
    else:
        print("終了します")
else:
    print("データが見つかりません")