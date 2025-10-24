call npm install @openapitools/openapi-generator-cli -g

call openapi-generator-cli generate -i http://127.0.0.1:8000/openapi.json -g dart-dio -o ./api_client

cd ./api_client

call fvm dart pub get

call fvm dart run build_runner build --delete-conflicting-outputs