def unique(id,info_load):
    for id_array in info_load:
        if  id == id_array["id"]:
            return True   
    return False
                 
def judge(judge):
    while True:
        if judge=="yes":
            return True
        elif judge=="no":
            return False   
        else:
            judge=input("yesかnoで答えてください")

def count(count,info_load,id):
    for id_array in info_load:
        if  id == id_array["id"]:
            return count
        count=count+1