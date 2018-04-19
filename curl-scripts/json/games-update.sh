# sh curl-scripts/json/games-update.sh
#
# requires game that is mid-state, cannot run right now.

curl "https://aqueous-atoll-85096.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
