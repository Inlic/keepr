FROM mcr.microsoft.com/dotnet/core/sdk:3.1

WORKDIR /App

COPY . .

CMD ASPNETCORE_URLS=http://*:$PORT dotnet Keepr.dll