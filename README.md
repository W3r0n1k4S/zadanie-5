# Test wydajnościowy dla Artillery - testy publicznego API

## Opis projektu
Repozytorium zawiera test wydajnościowy dla Artillery, który uwzględniają różne aspekty:

1) skonfigurowaną fazę dla jednego z typów testów obciążeniowych.
2) żądania GET i POST do sekcji flow.
3) sekcji payload i odczytu danych z pliku, aby skonfigurować ciało żądania POST.
4) walidację trzech metryk końcowych (np. response_time.p95 lub inne).


Test ten ma na celu zapewnienie poprawności działania API.

## Instalacja
1. Sklonuj repozytorium na swój komputer:
    ```
    git clone <adres_url_repozytorium>
    ```
2. Przejdź do katalogu projektu Artillery:
    ```
    cd nazwa_katalogu_projektu
    ```
3. Zainstaluj wszystkie wymagane zależności:
    ```
    npm install
    ```
## Uruchomienie testów
Po zainstalowaniu projektu, możesz uruchomić test Artillery w terminalu, wykonując polecenie:
    ```
    artillery run artillery/test.yml
    ```

## Autor
Autor: Weronika Skarbek
Kontakt: w3r0n1k4sk4rb3k@gmail.com
