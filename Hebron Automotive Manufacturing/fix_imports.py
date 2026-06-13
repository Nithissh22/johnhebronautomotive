import glob

for f in glob.glob('src/**/*.tsx', recursive=True):
    with open(f, 'r', encoding='utf-8') as file:
        c = file.read()
    
    if 'Contact.tsx' not in f and 'Chatbot.tsx' not in f:
        c = c.replace("import React from 'react';", "")
        c = c.replace("import React, {", "import {")
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(c)
