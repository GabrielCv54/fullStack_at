def contator(phrase):
   dict = {}
   word = phrase.lower()
   word2 = word.split()
   for ph in word2:
      cont = word2.count(ph)
      dict[ph] = cont

   return dict


print(contator('um prato de trigo para um tigre dois pratos de trigo para dois tigres'))
