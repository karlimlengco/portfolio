#!/bin/bash
mogrify -crop 350x350+70+15 *.jpg
find . -name '*.jpg' \
| awk 'BEGIN{ a=1 }{ printf "mv %s %d.jpg\n", $0, a++ }' \
| bash
 mogrify -resize 250x250 *.jpg
