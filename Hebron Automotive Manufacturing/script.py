import urllib.request
req1 = urllib.request.Request('https://upload.wikimedia.org/wikipedia/commons/f/f3/Ather_Energy_Logo.svg', headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req1) as resp, open('d:/CodeMeshFlow/Hebron Automotive Manufacturing/public/Pictures from Hebron/logos/ather.svg', 'wb') as f:
    f.write(resp.read())
req2 = urllib.request.Request('https://upload.wikimedia.org/wikipedia/commons/4/47/Ola_Electric_Logo.svg', headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req2) as resp, open('d:/CodeMeshFlow/Hebron Automotive Manufacturing/public/Pictures from Hebron/logos/ola.svg', 'wb') as f:
    f.write(resp.read())
