/**
 * Project: "SimPet"
 * Path: "server"
 * Release: 6+
 * 
 * Date: 14.12.2021
 */



const express = require('express');
const session = require('express-session');
// const createError = require('http-errors');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
require('dotenv').config();


const authRouter = require('./src/routes/auth.router');
const userRouter = require('./src/routes/users.router');
const categoryRouter = require('./src/routes/category.router');
const periodRouter = require('./src/routes/period.router');
const animalRouter = require('./src/routes/animal.router');
const todoRouter = require('./src/routes/todos.router');


const app = express();
const PORT = process.env.PORT || 3001;
const { COOKIE_SECRET, COOKIE_NAME } = process.env;


/* SERVER'S SETTINGS */
app.set('cookieName', COOKIE_NAME);


/* APP'S MIDDLEWARES */
app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(express.json());
app.use(session({
  name: app.get('cookieName'),
  secret: COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1e3 * 86400, // COOKIE'S LIFETIME — 1 DAY
    // expires: 24 * 60 * 60e3
  },
}))


/* APP'S ROUTES */
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/period', periodRouter);
app.use('/api/v1/animals', animalRouter);
app.use('/api/v1/todos', todoRouter);





// // Если HTTP-запрос дошёл до этой строчки, значит ни один из ранее встречаемых рутов не ответил на запрос. Это значит, что искомого раздела просто нет на сайте. Для таких ситуаций используется код ошибки 404. Создаём небольшое middleware, которое генерирует соответствующую ошибку.
// app.use((req, res, next) => {
//   const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
//   next(error);
// });

// // Отлавливаем HTTP-запрос с ошибкой и отправляем на него ответ.
// app.use((err, req, res, next) => {
//   // Получаем текущий ражим работы приложения.
//   const appMode = req.app.get('env');
//   // Создаём объект, в котором будет храниться ошибка.
//   let error;

//   // Если мы находимся в режиме разработки, то отправим в ответе настоящую ошибку. В противно случае отправим пустой объект.
//   if (appMode === 'development') {
//     error = err;
//   } else {
//     error = {};
//   }

//   // Записываем информацию об ошибке и сам объект ошибки в специальные переменные, доступные на сервере глобально, но только в рамках одного HTTP-запроса.
//   res.locals.message = err.message;
//   res.locals.error = error;

//   // Задаём в будущем ответе статус ошибки. Берём его из объекта ошибки, если он там есть. В противно случае записываем универсальный стату ошибки на сервере - 500.
//   res.status(err.status || 500);
//   // Формируем HTML-текст из шаблона "error.hbs" и отправляем его на клиент в качестве ответа.
//   res.render('error');
// });

app.listen(PORT, () => {
  console.log('Server has been started on PORT ', PORT);
});
