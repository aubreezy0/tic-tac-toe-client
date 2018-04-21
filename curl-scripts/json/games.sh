
# sh curl-scripts/json/games.sh

echo curl "https://aqueous-atoll-85096.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{  }'

echo

# "id": '"${ID}"',
# "cells": '${CELLS}',
# "over": '"${OVER}"',
# "player_x": {
#   "id": '"${IDX}"',
#   "email": "'"${EMAIL}"'"
# },
# "player_o": '"${NULL}"'
# }
