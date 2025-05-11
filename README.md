# Anna_Czarnasiak_Web_Wrocław
# Sklep Internetowy w React

Prosta aplikacja sklepu internetowego stworzona przy użyciu React i TypeScript,
umożliwiająca przeglądanie produktów, zarządzanie koszykiem zakupów oraz składanie zamówień.

Projekt został stworzony przy użyciu **Create React App (CRA)** z szablonem TypeScript.

Główna część działa jako SPA z React Router, ale strona potwierdzenia zamówienia została zaimplementowana jako oddzielny 
plik HTML, co symuluje pełne przeładowanie strony po zakończeniu zakupu.

### Główne założenia:
- Dane produktów są przechowywane w statycznym pliku JSON
- Stan koszyka jest zarządzany przez Context 
- Historia zamówienia jest przechowywana w localStorage
- Struktura komponentów umożliwia łatwą rozbudowę aplikacji

## Technologie
- React
- TypeScript
- React Router
- Context API
- CSS
- HTML

## Jak uruchomić lokalnie

Aby uruchomić go lokalnie:

1. Sklonuj repozytorium:

```bash
git clone https://github.com/AnnCzar/Anna-Czarnasiak-Web-Wroclaw.git
```
2. Przejdź do folderu projektu:
```bash
cd Anna-Czarnasiak-Web-Wroclaw
```
3. Zainstaluj zależności:
```bash
npm install
```
4. Uruchom aplikację:
```bash
npm start
```

Aplikacja zostanie uruchomiona pod adresem:

```
http://localhost:3000
```

> **Uwaga:** Jeśli port `3000` jest zajęty, aplikacja może uruchomić się pod innym adresem (np. `http://localhost:3001`).
