# Стек (Ветка clientWithFakeApi)
1. React, TS, Redux Toolkit, react router dom (для роутинга и префетчинга данных)
2. Json-server, RTK query и zod (для получения данных и их валидации)
3. SASS + CSS Modules + BEM для стилизации

# Запуск

```npm run dev``` для запуска fake-api сервера и клиента (Необходимы порты 80 и 3000!) <br/>
Если порты заняты, в файле ```vite.config.ts``` изменить порт клиента на доступный (например, 5173) <br/>
JSON-server сам изменит ip с 3000 на доступный, но его нужно изменить в файле ```.env``` <br/>

