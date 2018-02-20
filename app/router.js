'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const cookiesHandler = app.middleware.cookiesHandler();
  const ssoHandler = app.middleware.ssoHandler();
  router.get('/', controller.home.index);
  router.post('/api/user/login', controller.user.login);
  router.post('/api/user/exit', app.jwt, controller.user.exit);
  router.post('/api/user/delete', controller.user.delete);
  router.post('/api/user/course', app.jwt, cookiesHandler, ssoHandler, controller.user.course);
  router.post('/api/user/exam', app.jwt, cookiesHandler, ssoHandler, controller.user.exam);
  router.post('/api/user/grade', app.jwt, cookiesHandler, ssoHandler, controller.user.grade);
  router.get('/api/user/grade', app.jwt, cookiesHandler, ssoHandler, controller.user.allGrade);
  router.get('/api/user/gpa', app.jwt, cookiesHandler, ssoHandler, controller.user.gpa);
  router.post('/api/xifu/bind', app.jwt, controller.xifu.bindXiFu);
  router.get('/api/xifu/ecard', app.jwt, controller.xifu.ecard);
  router.get('/api/xifu/bill', app.jwt, controller.xifu.bill);
  router.post('/api/xifu/electricity', app.jwt, controller.xifu.electricity);
  router.post('/api/xifu/subscribe', app.jwt, controller.xifu.subscribe);
  router.post('/api/xifu/unsubscribe', app.jwt, controller.xifu.unsubscribe);
  router.post('/api/xifu/cron', controller.xifu.cron);
  router.get('/api/extra/traffic', controller.extra.traffic);
  router.get('/api/extra/notification', controller.extra.notification);
  router.get('/api/extra/contact', controller.extra.contact);
  router.get('/api/extra/dept', controller.extra.dept);
};
