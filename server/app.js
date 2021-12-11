/**
 * Project: "SimPet"
 * Path: "server"
 * Release: 4
 * 
 * Date: 11.12.2021
 */



const express = require('express');
const session = require('express-session');
// const createError = require('http-errors');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
require('dotenv').config();


const testRouter = require('./src/routes/test.router');
const authRouter = require('./src/routes/auth.router');
const usersRouter = require('./src/routes/users.router');
const categoryRouter = require('./src/routes/category.router');


const app = express();
const PORT = process.env.PORT || 5000;
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

// const sessionConfig = {
//   store: new FileStore(),
//   key: 'simpet',
//   secret: process.env.SECRET,
//   resave: false,
//   saveUninitialized: false,
//   httpOnly: true,
//   cookie: { expires: 24 * 60 * 60e3 },
// };

// app.use(express.urlencoded({ extnded: true }));
// app.use(express.json());
// app.use(session(sessionConfig));

//? Какие данные должы попадать в сессию
// app.use((req, res, next) => {
//   if (req.session.userId) {
//     // res.locals.user = { id: req.session.userId, name: req.session.userName };
//     res.locals.userId = req.session.userId;
//     res.locals.userName = req.session.userName;
//     res.locals.userEmail = req.session.userEmail;
//   }
//   next();
// });


/* APP'S ROUTES */
app.use('/api/v1/testdb', testRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/category', categoryRouter);





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
