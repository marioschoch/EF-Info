
feld =[[2,4,4,4,2],[12,2,4,2,2],[2,2,4,4,2],[2,4,4,4,4],[4,4,4,4,4]]

#print('hallo', Spielfeld[0][0])
#print(f'hallo      {Spielfeld[0][0]}', )  #formatiert
def spielfeld():
    for zeile in feld:
        print('+------+------+------+------+------+')
        print('|      |      |      |      |      |')
        if zeile[0] <= 10:
            print(f'|   {(zeile[0])}  |', end='')
        else:
            print(f'|  {(zeile[0])}  |', end='')
        print('|      |      |      |      |      |')
    print('+------+------+------+------+------+')
    

spielfeld()