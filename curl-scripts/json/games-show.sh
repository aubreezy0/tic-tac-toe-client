# sh curl-scripts/json/games-show.sh
#


curl "https://aqueous-atoll-85096.herokuapp.com/games/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
