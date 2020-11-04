dotnet publish -c Release
docker build -t "keypr" ./bin/Release/netcoreapp3.1/publish
docker tag "keypr" registry.heroku.com/keypr/web
docker push registry.heroku.com/keypr/web
heroku container:release web -a keypr
echo press any key
read end