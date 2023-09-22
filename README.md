# worldClock by PraBeton

Niestety nie rozwiązałem jeszcze problemów z ESlintem i dlatego przy propsach użyłem komendy:
// eslint-disable-next-line
oraz wyświetla ostrzeżenie przy mapowaniu tablicy
`timezones.map ((timezone) =>` ale działa :) 

Poza tym przy kilkukrotnym wyborze po kolei tej samej strefy czasowej, przy kasowaniu kasują się wszystkie. Ale tak póki co może być ;) 

------------------------------------***---------------------------------------------

Światowy Zegar z Możliwością Dodawania Stref Czasowych
Termin - do poniedziałku 25 września!

Forma - tworzymy własne repo na którym stawiamy cały projekt, tak jak robiliśmy to do tej pory, następnie wysyłamy link do repo na DM do mnie :slightly_smiling_face:

Cel: Utworzenie aplikacji, która umożliwia wyświetlanie bieżącego, działającego zegara dla różnych stref czasowych, a także dodawanie i usuwanie stref czasowych z listy.

Przygotujcie następujące komponenty:

App - główny komponent aplikacji.
TimezoneSelector - komponent do wybierania i dodawania nowych stref czasowych.
Clock - komponent wyświetlający czas dla konkretnej strefy czasowej.
ClockList - komponent wyświetlający listę zegarów.

Wskazówki do realizacji:

App:
- Przechowuje listę stref czasowych, które mają być wyświetlane (np. ["UTC", "UTC+1", "UTC-1"]).
- Dostarcza funkcje do dodawania i usuwania stref z listy.

TimezoneSelector:
- Posiada własny stan dla aktualnie wybranej strefy czasowej.
- Umożliwia wybór strefy czasowej z rozwijanej listy (zwykły input select).
- Przycisk "Dodaj" dodaje wybraną strefę do listy w komponencie App.

Clock:
- Otrzymuje strefę czasową jako props.
- Wykorzystuje useEffect i useState do zarządzania czasem

ClockList:
- Otrzymuje listę stref czasowych z App i dla każdej strefy renderuje komponent Clock.
- Dla każdego zegara jest przycisk "Usuń", który usuwa zegar ze strefą z listy.

Dla chętnych! Możecie spróbować zainstalować i wykorzystać paczkę npm która pomoże interpretować strefy czasowe. Szczegóły użycia/instalacji są dostępne w dokumentacji.
https://www.npmjs.com/package/date-fns-tz

Zadanie jest wykonalne zarówno z paczką npm jak i bez niej.

----------------------------------***--------------------------------------

React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
