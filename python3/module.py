def unique(id,info_load):
    for id_array in info_load:
        if  id == id_array["id"]:
            return False
    return True    
                 



