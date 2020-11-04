FROM mcr.microsoft.com/dotnet/core/sdk:3.1

COPY . .

WORKDIR /App

CMD ASPNETCORE_URLS=http://*:$PORT dotnet Keepr.dll