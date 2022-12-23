
ALPHABET = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
MESSAGE = [12, 9, 19, 20, 0, 18, 9, 4, 4, 12, 5]

# erster lösungsansatz
print(ALPHABET[12], ALPHABET[9],ALPHABET[19],ALPHABET[20],ALPHABET[0],ALPHABET[18],ALPHABET[9],ALPHABET[4],ALPHABET[4],ALPHABET[12],ALPHABET[5])

# einfacher noch:
for index in MESSAGE:
    print(ALPHABET[index], end='')