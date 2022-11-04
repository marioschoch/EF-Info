
feld =[[2,4,4,4,2],[12,2,4,2,2],[2,2,4,4,2],[2,4,4,4,4],[4,4,4,4,4]]

#print('hallo', Spielfeld[0][0])
#print(f'hallo      {Spielfeld[0][0]}', )  #formatiert
def spielfeld():
    for zeile in feld:
        print('+------+------+------+------+------+')
        print('|      |      |      |      |      |')
        for zahl in range(0,4):
            for i in range(0,4):
                if zeile[zahl][i] <= 10:
                    print(f'|   {(zeile[0])}  |', end='')
                else:
                    print(f'|  {(zeile[0])}  |', end='')
        print()
        print('|      |      |      |      |      |')
    print('+------+------+------+------+------+')
    

spielfeld()