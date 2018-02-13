```
npm i
node test

# logs the following config produced for
#   parent/child/test-file.js

{ end_of_line: 'lf',
  indent_style: 'space',
  indent_size: 4,
  tab_width: 4 }

# which is the merged result of the .editorconfig's found
#   in parent/ and parent/child/
```
