// Function to render content dynamically
const renderContent = (htmlContent) => {
  document.getElementById("content").innerHTML = htmlContent;
};

// Function to handle default page rendering
const renderDefaultPage = () => {
  renderContent(`
    <div class="container">
     <div class="covid">
       <div class="box">
         <div class="box_img">
           <img src="./imgs/covid/icon-covid.svg" alt="covid" loading="lazy" />
         </div>
         <div class="box_content">
           <p>Коронавирус COVID-19 в Узбекистане</p>
         </div>
       </div>
       <div class="box">
         <div class="box_img">
           <img
             src="./imgs/covid/icon-infected.svg"
             alt="covid"
             loading="lazy"
           />
         </div>
         <div class="box_content">
           <p><span>Инфицированы</span> 2753</p>
         </div>
       </div>
       <div class="box">
         <div class="box_img">
           <img
             src="./imgs/covid/icon-recovered.svg"
             alt="covid"
             loading="lazy"
           />
         </div>
         <div class="box_content">
           <p><span>Выздоровели</span> 2245</p>
         </div>
       </div>
       <div class="box">
         <div class="box_img">
           <img src="./imgs/covid/icon-dead.svg" alt="covid" loading="lazy" />
         </div>
         <div class="box_content">
           <p>Умерли 12</p>
         </div>
       </div>
     </div>
   </div>
   <!--home page  -->
   <div class="container">
     <div class="news">
       <div class="card">
         <div class="card_img">
           <img
             src="./imgs/news/prezident.jpg"
             alt="prezident"
             loading="lazy"
           />
         </div>
         <div class="card_content">
           <p>
             Мирзиёев рассказал, зачем было построено Сардобинское
             водохранилище
           </p>
           <span> 05:28 / 16.05.2020 </span>
         </div>
       </div>
       <div class="card">
         <div class="card_img">
           <img
             src="./imgs/news/karantin.jpg"
             alt="prezident"
             loading="lazy"
           />
         </div>
         <div class="card_content">
           <p>Карантин в Узбекистане продлен до 1 июня</p>
           <span>05:28 / 16.05.2020</span>
         </div>
       </div>
       <div class="card">
         <div class="card_img">
           <img src="./imgs/news/sardoba.jpg" alt="prezident" loading="lazy" />
         </div>
         <div class="card_content">
           <p>Обмелевшая Сардоба: стихия или человеческий фактор?</p>
           <span> 05:28 / 16.05.2020 </span>
         </div>
       </div>
       <div class="card">
         <div class="card_img">
           <img
             src="./imgs/news/prokuror.jpg"
             alt="prezident"
             loading="lazy"
           />
         </div>
         <div class="card_content">
           <p>
             Следствие проверяет четыре версии прорыва Сардобинской плотины
           </p>
           <span>05:28 / 16.05.2020</span>
         </div>
       </div>
       <div class="card">
         <div class="card_img">
           <img
             src="./imgs/news/tez-yordam.jpg"
             alt="prezident"
             loading="lazy"
           />
         </div>
         <div class="card_content">
           <p>Выявлено еще 7 случаев коронавируса</p>
           <span> 05:28 / 16.05.2020 </span>
         </div>
       </div>
       <div class="card">
         <div class="card_img">
           <img
             src="./imgs/news/stop-karantin.jpg"
             alt="prezident"
             loading="lazy"
           />
         </div>
         <div class="card_content">
           <p>Итоги второго месяца карантина</p>
           <span> 05:28 / 16.05.2020 </span>
         </div>
       </div>
     </div>
   </div>
   <div class="container">
     <div class="notification">
       <div>
         <img
           src="./imgs/notification/notification-icon.svg"
           alt="notification"
           loading="lazy"
         />
         <p>Хотите узнать новости первыми? подключите уведомления!</p>
       </div>
       <a href="#" id="notification-link">
         <button id="enable-notifications" class="notification-button">
           Включит уведомления!
         </button>
       </a>
     </div>
   </div>
   <div class="container">
     <h1 class="lastnews-title">Последние новости</h1>
     <div class="lastnews">
       <div class="lastnews-card">
         <div class="card">
           <div class="card__img">
             <img
               src="./imgs/last-news/photo-1.png"
               alt="sardoba"
               loading="lazy"
             />
           </div>
           <div class="card__content">
             <h3>
               По факту прорыва Сардобинского водохранилища возбуждено
               уголовное дело
             </h3>
             <p>
               После прорыва дамбы Сардобинского водохранилища возбуждено
               уголовное дело, сообщили в пресс-службе Генпрокуратуры
               Узбекистана.
             </p>
             <span>
               <img
                 src="./imgs/last-news/calendar.svg"
                 alt="calendar-icon"
                 loading="lazy"
               />
               11:31 / 15.05.2020
             </span>
           </div>
         </div>
         <div class="card">
           <div class="card__img">
             <img
               src="./imgs/last-news/photo-2.png"
               alt="sardoba"
               loading="lazy"
             />
           </div>
           <div class="card__content">
             <h3>
               Мирзиёев: «Нам следовало бы принять некоторые правила карантина
               как часть повседневной жизни»
             </h3>
             <p>
               Президент Узбекистана заявил, что после того, как угроза
               коронавируса исчезнет, в стране следовало бы принять некоторые
               правила периода карантина как часть своей повседневной жизни.
             </p>
             <span>
               <img
                 src="./imgs/last-news/calendar.svg"
                 alt="calendar-icon"
                 loading="lazy"
               />
               11:31 / 15.05.2020
             </span>
           </div>
         </div>
         <div class="card">
           <div class="card__img">
             <img
               src="./imgs/last-news/photo-3.png"
               alt="sardoba"
               loading="lazy"
             />
           </div>
           <div class="card__content">
             <h3>
               В Ташкенте планируют ввести новую систему электронных проездных
               билетов
             </h3>
             <p>
               Целью этих изменений является максимально возможное сокращение
               количества других маршрутов на улицах, где проходят основные
               маршруты.
             </p>
             <span>
               <img
                 src="./imgs/last-news/calendar.svg"
                 alt="calendar-icon"
                 loading="lazy"
               />
               11:31 / 15.05.2020
             </span>
           </div>
         </div>
         <div class="card">
           <div class="card__img">
             <img
               src="./imgs/last-news/photo-1.png"
               alt="sardoba"
               loading="lazy"
             />
           </div>
           <div class="card__content">
             <h3>
               По факту прорыва Сардобинского водохранилища возбуждено
               уголовное дело
             </h3>
             <p>
               После прорыва дамбы Сардобинского водохранилища возбуждено
               уголовное дело, сообщили в пресс-службе Генпрокуратуры
               Узбекистана.
             </p>
             <span>
               <img
                 src="./imgs/last-news/calendar.svg"
                 alt="calendar-icon"
                 loading="lazy"
               />
               11:31 / 15.05.2020
             </span>
           </div>
         </div>
         <div class="card">
           <div class="card__img">
             <img
               src="./imgs/last-news/photo-2.png"
               alt="sardoba"
               loading="lazy"
             />
           </div>
           <div class="card__content">
             <h3>
               Мирзиёев: «Нам следовало бы принять некоторые правила карантина
               как часть повседневной жизни»
             </h3>
             <p>
               Президент Узбекистана заявил, что после того, как угроза
               коронавируса исчезнет, в стране следовало бы принять некоторые
               правила периода карантина как часть своей повседневной жизни.
             </p>
             <span>
               <img
                 src="./imgs/last-news/calendar.svg"
                 alt="calendar-icon"
                 loading="lazy"
               />
               11:31 / 15.05.2020
             </span>
           </div>
         </div>
         <div class="card">
           <div class="card__img">
             <img
               src="./imgs/last-news/photo-3.png"
               alt="sardoba"
               loading="lazy"
             />
           </div>
           <div class="card__content">
             <h3>
               В Ташкенте планируют ввести новую систему электронных проездных
               билетов
             </h3>
             <p>
               Целью этих изменений является максимально возможное сокращение
               количества других маршрутов на улицах, где проходят основные
               маршруты.
             </p>
             <span>
               <img
                 src="./imgs/last-news/calendar.svg"
                 alt="calendar-icon"
                 loading="lazy"
               />
               11:31 / 15.05.2020
             </span>
           </div>
         </div>
       </div>
       <div class="lastnew-left">
         <div class="lastnews-box">
           <h1>Cамые популярные новости</h1>
           <div class="boxs">
             <div class="box">
               <p>
                 По факту прорыва Сардобинского водохранилища возбуждено
                 уголовное дело
               </p>
               <span>11:31 / 15.05.2020 </span>
             </div>
             <div class="box">
               <p>
                 По факту прорыва Сардобинского водохранилища возбуждено
                 уголовное дело
               </p>
               <span>11:31 / 15.05.2020 </span>
             </div>
             <div class="box">
               <p>
                 По факту прорыва Сардобинского водохранилища возбуждено
                 уголовное дело
               </p>
               <span>11:31 / 15.05.2020 </span>
             </div>
             <div class="box">
               <p>
                 По факту прорыва Сардобинского водохранилища возбуждено
                 уголовное дело
               </p>
               <span>11:31 / 15.05.2020 </span>
             </div>
           </div>
         </div>
         <img src="./imgs/last-news/ucell.png" alt="ucell" loading="lazy" />
       </div>
       <button class="lastnews-btn">Больше новостей</button>
     </div>
   </div>
   <div class="container">
     <div class="ads">
       <img src="./imgs/ads/half-phone.png" alt="phone" loading="lazy" />
       <div>
         <h4>Всегда будьте в курсе последних новостей!</h4>
         <p>
           Установите мобильное приложение NAMANGANLIKLAR24 и все новости в
           вашем кармане!
         </p>
       </div>
       <div>
         <img
           src="./imgs/ads/googleplay.png"
           alt="googleplay"
           loading="lazy"
         />
         <img src="./imgs/ads/appstore.png   " alt="appstore" loading="lazy" />
       </div>
     </div>
   </div>
 `);
};

// Ensure DOMContentLoaded event is used to wait for full DOM readiness
document.addEventListener("DOMContentLoaded", function () {
  // Attach event listeners after DOM content is fully loaded
  const homeLink = document.getElementById("home");
  const listLink = document.getElementById("list");
  const articleLink = document.getElementById("article");
  const contactLink = document.getElementById("contact");

  if (homeLink) {
    homeLink.addEventListener("click", function () {
      renderContent(`
        <div class="container">
         <div class="covid">
           <div class="box">
             <div class="box_img">
               <img src="./imgs/covid/icon-covid.svg" alt="covid" loading="lazy" />
             </div>
             <div class="box_content">
               <p>Коронавирус COVID-19 в Узбекистане</p>
             </div>
           </div>
           <div class="box">
             <div class="box_img">
               <img
                 src="./imgs/covid/icon-infected.svg"
                 alt="covid"
                 loading="lazy"
               />
             </div>
             <div class="box_content">
               <p><span>Инфицированы</span> 2753</p>
             </div>
           </div>
           <div class="box">
             <div class="box_img">
               <img
                 src="./imgs/covid/icon-recovered.svg"
                 alt="covid"
                 loading="lazy"
               />
             </div>
             <div class="box_content">
               <p><span>Выздоровели</span> 2245</p>
             </div>
           </div>
           <div class="box">
             <div class="box_img">
               <img src="./imgs/covid/icon-dead.svg" alt="covid" loading="lazy" />
             </div>
             <div class="box_content">
               <p>Умерли 12</p>
             </div>
           </div>
         </div>
       </div>
       <!--home page  -->
       <div class="container">
         <div class="news">
           <div class="card">
             <div class="card_img">
               <img
                 src="./imgs/news/prezident.jpg"
                 alt="prezident"
                 loading="lazy"
               />
             </div>
             <div class="card_content">
               <p>
                 Мирзиёев рассказал, зачем было построено Сардобинское
                 водохранилище
               </p>
               <span> 05:28 / 16.05.2020 </span>
             </div>
           </div>
           <div class="card">
             <div class="card_img">
               <img
                 src="./imgs/news/karantin.jpg"
                 alt="prezident"
                 loading="lazy"
               />
             </div>
             <div class="card_content">
               <p>Карантин в Узбекистане продлен до 1 июня</p>
               <span>05:28 / 16.05.2020</span>
             </div>
           </div>
           <div class="card">
             <div class="card_img">
               <img src="./imgs/news/sardoba.jpg" alt="prezident" loading="lazy" />
             </div>
             <div class="card_content">
               <p>Обмелевшая Сардоба: стихия или человеческий фактор?</p>
               <span> 05:28 / 16.05.2020 </span>
             </div>
           </div>
           <div class="card">
             <div class="card_img">
               <img
                 src="./imgs/news/prokuror.jpg"
                 alt="prezident"
                 loading="lazy"
               />
             </div>
             <div class="card_content">
               <p>
                 Следствие проверяет четыре версии прорыва Сардобинской плотины
               </p>
               <span>05:28 / 16.05.2020</span>
             </div>
           </div>
           <div class="card">
             <div class="card_img">
               <img
                 src="./imgs/news/tez-yordam.jpg"
                 alt="prezident"
                 loading="lazy"
               />
             </div>
             <div class="card_content">
               <p>Выявлено еще 7 случаев коронавируса</p>
               <span> 05:28 / 16.05.2020 </span>
             </div>
           </div>
           <div class="card">
             <div class="card_img">
               <img
                 src="./imgs/news/stop-karantin.jpg"
                 alt="prezident"
                 loading="lazy"
               />
             </div>
             <div class="card_content">
               <p>Итоги второго месяца карантина</p>
               <span> 05:28 / 16.05.2020 </span>
             </div>
           </div>
         </div>
       </div>
       <div class="container">
         <div class="notification">
           <div>
             <img
               src="./imgs/notification/notification-icon.svg"
               alt="notification"
               loading="lazy"
             />
             <p>Хотите узнать новости первыми? подключите уведомления!</p>
           </div>
           <a href="#" id="notification-link">
             <button id="enable-notifications" class="notification-button">
               Включит уведомления!
             </button>
           </a>
         </div>
       </div>
       <div class="container">
         <h1 class="lastnews-title">Последние новости</h1>
         <div class="lastnews">
           <div class="lastnews-card">
             <div class="card">
               <div class="card__img">
                 <img
                   src="./imgs/last-news/photo-1.png"
                   alt="sardoba"
                   loading="lazy"
                 />
               </div>
               <div class="card__content">
                 <h3>
                   По факту прорыва Сардобинского водохранилища возбуждено
                   уголовное дело
                 </h3>
                 <p>
                   После прорыва дамбы Сардобинского водохранилища возбуждено
                   уголовное дело, сообщили в пресс-службе Генпрокуратуры
                   Узбекистана.
                 </p>
                 <span>
                   <img
                     src="./imgs/last-news/calendar.svg"
                     alt="calendar-icon"
                     loading="lazy"
                   />
                   11:31 / 15.05.2020
                 </span>
               </div>
             </div>
             <div class="card">
               <div class="card__img">
                 <img
                   src="./imgs/last-news/photo-2.png"
                   alt="sardoba"
                   loading="lazy"
                 />
               </div>
               <div class="card__content">
                 <h3>
                   Мирзиёев: «Нам следовало бы принять некоторые правила карантина
                   как часть повседневной жизни»
                 </h3>
                 <p>
                   Президент Узбекистана заявил, что после того, как угроза
                   коронавируса исчезнет, в стране следовало бы принять некоторые
                   правила периода карантина как часть своей повседневной жизни.
                 </p>
                 <span>
                   <img
                     src="./imgs/last-news/calendar.svg"
                     alt="calendar-icon"
                     loading="lazy"
                   />
                   11:31 / 15.05.2020
                 </span>
               </div>
             </div>
             <div class="card">
               <div class="card__img">
                 <img
                   src="./imgs/last-news/photo-3.png"
                   alt="sardoba"
                   loading="lazy"
                 />
               </div>
               <div class="card__content">
                 <h3>
                   В Ташкенте планируют ввести новую систему электронных проездных
                   билетов
                 </h3>
                 <p>
                   Целью этих изменений является максимально возможное сокращение
                   количества других маршрутов на улицах, где проходят основные
                   маршруты.
                 </p>
                 <span>
                   <img
                     src="./imgs/last-news/calendar.svg"
                     alt="calendar-icon"
                     loading="lazy"
                   />
                   11:31 / 15.05.2020
                 </span>
               </div>
             </div>
             <div class="card">
               <div class="card__img">
                 <img
                   src="./imgs/last-news/photo-1.png"
                   alt="sardoba"
                   loading="lazy"
                 />
               </div>
               <div class="card__content">
                 <h3>
                   По факту прорыва Сардобинского водохранилища возбуждено
                   уголовное дело
                 </h3>
                 <p>
                   После прорыва дамбы Сардобинского водохранилища возбуждено
                   уголовное дело, сообщили в пресс-службе Генпрокуратуры
                   Узбекистана.
                 </p>
                 <span>
                   <img
                     src="./imgs/last-news/calendar.svg"
                     alt="calendar-icon"
                     loading="lazy"
                   />
                   11:31 / 15.05.2020
                 </span>
               </div>
             </div>
             <div class="card">
               <div class="card__img">
                 <img
                   src="./imgs/last-news/photo-2.png"
                   alt="sardoba"
                   loading="lazy"
                 />
               </div>
               <div class="card__content">
                 <h3>
                   Мирзиёев: «Нам следовало бы принять некоторые правила карантина
                   как часть повседневной жизни»
                 </h3>
                 <p>
                   Президент Узбекистана заявил, что после того, как угроза
                   коронавируса исчезнет, в стране следовало бы принять некоторые
                   правила периода карантина как часть своей повседневной жизни.
                 </p>
                 <span>
                   <img
                     src="./imgs/last-news/calendar.svg"
                     alt="calendar-icon"
                     loading="lazy"
                   />
                   11:31 / 15.05.2020
                 </span>
               </div>
             </div>
             <div class="card">
               <div class="card__img">
                 <img
                   src="./imgs/last-news/photo-3.png"
                   alt="sardoba"
                   loading="lazy"
                 />
               </div>
               <div class="card__content">
                 <h3>
                   В Ташкенте планируют ввести новую систему электронных проездных
                   билетов
                 </h3>
                 <p>
                   Целью этих изменений является максимально возможное сокращение
                   количества других маршрутов на улицах, где проходят основные
                   маршруты.
                 </p>
                 <span>
                   <img
                     src="./imgs/last-news/calendar.svg"
                     alt="calendar-icon"
                     loading="lazy"
                   />
                   11:31 / 15.05.2020
                 </span>
               </div>
             </div>
           </div>
           <div class="lastnew-left">
             <div class="lastnews-box">
               <h1>Cамые популярные новости</h1>
               <div class="boxs">
                 <div class="box">
                   <p>
                     По факту прорыва Сардобинского водохранилища возбуждено
                     уголовное дело
                   </p>
                   <span>11:31 / 15.05.2020 </span>
                 </div>
                 <div class="box">
                   <p>
                     По факту прорыва Сардобинского водохранилища возбуждено
                     уголовное дело
                   </p>
                   <span>11:31 / 15.05.2020 </span>
                 </div>
                 <div class="box">
                   <p>
                     По факту прорыва Сардобинского водохранилища возбуждено
                     уголовное дело
                   </p>
                   <span>11:31 / 15.05.2020 </span>
                 </div>
                 <div class="box">
                   <p>
                     По факту прорыва Сардобинского водохранилища возбуждено
                     уголовное дело
                   </p>
                   <span>11:31 / 15.05.2020 </span>
                 </div>
               </div>
             </div>
             <img src="./imgs/last-news/ucell.png" alt="ucell" loading="lazy" />
           </div>
           <button class="lastnews-btn">Больше новостей</button>
         </div>
       </div>
       <div class="container">
         <div class="ads">
           <img src="./imgs/ads/half-phone.png" alt="phone" loading="lazy" />
           <div>
             <h4>Всегда будьте в курсе последних новостей!</h4>
             <p>
               Установите мобильное приложение NAMANGANLIKLAR24 и все новости в
               вашем кармане!
             </p>
           </div>
           <div>
             <img
               src="./imgs/ads/googleplay.png"
               alt="googleplay"
               loading="lazy"
             />
             <img src="./imgs/ads/appstore.png   " alt="appstore" loading="lazy" />
           </div>
         </div>
       </div>
     `);
    });
  }

  if (listLink) {
    listLink.addEventListener("click", function () {
      renderContent(`
         <div class="container">
     <div class="covid">
       <div class="box">
         <div class="box_img">
           <img src="./imgs/covid/icon-covid.svg" alt="covid" loading="lazy" />
         </div>
         <div class="box_content">
           <p>Коронавирус COVID-19 в Узбекистане</p>
         </div>
       </div>
       <div class="box">
         <div class="box_img">
           <img
             src="./imgs/covid/icon-infected.svg"
             alt="covid"
             loading="lazy"
           />
         </div>
         <div class="box_content">
           <p><span>Инфицированы</span> 2753</p>
         </div>
       </div>
       <div class="box">
         <div class="box_img">
           <img
             src="./imgs/covid/icon-recovered.svg"
             alt="covid"
             loading="lazy"
           />
         </div>
         <div class="box_content">
           <p><span>Выздоровели</span> 2245</p>
         </div>
       </div>
       <div class="box">
         <div class="box_img">
           <img src="./imgs/covid/icon-dead.svg" alt="covid" loading="lazy" />
         </div>
         <div class="box_content">
           <p>Умерли 12</p>
         </div>
       </div>
     </div>
   </div>
  <div class="container">
      <h1 class="lastnews-title">Последние новости</h1>
      <div class="lastnews">
        <div class="lastnews-card">
          <div class="card">
            <div class="card__img">
              <img
                src="./imgs/last-news/photo-1.png"
                alt="sardoba"
                loading="lazy"
              />
            </div>
            <div class="card__content">
              <h3>
                По факту прорыва Сардобинского водохранилища возбуждено
                уголовное дело
              </h3>
              <p>
                После прорыва дамбы Сардобинского водохранилища возбуждено
                уголовное дело, сообщили в пресс-службе Генпрокуратуры
                Узбекистана.
              </p>
              <span>
                <img
                  src="./imgs/last-news/calendar.svg"
                  alt="calendar-icon"
                  loading="lazy"
                />
                11:31 / 15.05.2020
              </span>
            </div>
          </div>
          <div class="card">
            <div class="card__img">
              <img
                src="./imgs/last-news/photo-2.png"
                alt="sardoba"
                loading="lazy"
              />
            </div>
            <div class="card__content">
              <h3>
                Мирзиёев: «Нам следовало бы принять некоторые правила карантина
                как часть повседневной жизни»
              </h3>
              <p>
                Президент Узбекистана заявил, что после того, как угроза
                коронавируса исчезнет, в стране следовало бы принять некоторые
                правила периода карантина как часть своей повседневной жизни.
              </p>
              <span>
                <img
                  src="./imgs/last-news/calendar.svg"
                  alt="calendar-icon"
                  loading="lazy"
                />
                11:31 / 15.05.2020
              </span>
            </div>
          </div>
          <div class="card">
            <div class="card__img">
              <img
                src="./imgs/last-news/photo-3.png"
                alt="sardoba"
                loading="lazy"
              />
            </div>
            <div class="card__content">
              <h3>
                В Ташкенте планируют ввести новую систему электронных проездных
                билетов
              </h3>
              <p>
                Целью этих изменений является максимально возможное сокращение
                количества других маршрутов на улицах, где проходят основные
                маршруты.
              </p>
              <span>
                <img
                  src="./imgs/last-news/calendar.svg"
                  alt="calendar-icon"
                  loading="lazy"
                />
                11:31 / 15.05.2020
              </span>
            </div>
          </div>
          <div class="card">
            <div class="card__img">
              <img
                src="./imgs/last-news/photo-1.png"
                alt="sardoba"
                loading="lazy"
              />
            </div>
            <div class="card__content">
              <h3>
                По факту прорыва Сардобинского водохранилища возбуждено
                уголовное дело
              </h3>
              <p>
                После прорыва дамбы Сардобинского водохранилища возбуждено
                уголовное дело, сообщили в пресс-службе Генпрокуратуры
                Узбекистана.
              </p>
              <span>
                <img
                  src="./imgs/last-news/calendar.svg"
                  alt="calendar-icon"
                  loading="lazy"
                />
                11:31 / 15.05.2020
              </span>
            </div>
          </div>
          <div class="card">
            <div class="card__img">
              <img
                src="./imgs/last-news/photo-2.png"
                alt="sardoba"
                loading="lazy"
              />
            </div>
            <div class="card__content">
              <h3>
                Мирзиёев: «Нам следовало бы принять некоторые правила карантина
                как часть повседневной жизни»
              </h3>
              <p>
                Президент Узбекистана заявил, что после того, как угроза
                коронавируса исчезнет, в стране следовало бы принять некоторые
                правила периода карантина как часть своей повседневной жизни.
              </p>
              <span>
                <img
                  src="./imgs/last-news/calendar.svg"
                  alt="calendar-icon"
                  loading="lazy"
                />
                11:31 / 15.05.2020
              </span>
            </div>
          </div>
          <div class="card">
            <div class="card__img">
              <img
                src="./imgs/last-news/photo-3.png"
                alt="sardoba"
                loading="lazy"
              />
            </div>
            <div class="card__content">
              <h3>
                В Ташкенте планируют ввести новую систему электронных проездных
                билетов
              </h3>
              <p>
                Целью этих изменений является максимально возможное сокращение
                количества других маршрутов на улицах, где проходят основные
                маршруты.
              </p>
              <span>
                <img
                  src="./imgs/last-news/calendar.svg"
                  alt="calendar-icon"
                  loading="lazy"
                />
                11:31 / 15.05.2020
              </span>
            </div>
          </div>
          <div class="card">
            <div class="card__img">
              <img
                src="./imgs/last-news/photo-3.png"
                alt="sardoba"
                loading="lazy"
              />
            </div>
            <div class="card__content">
              <h3>
                В Ташкенте планируют ввести новую систему электронных проездных
                билетов
              </h3>
              <p>
                Целью этих изменений является максимально возможное сокращение
                количества других маршрутов на улицах, где проходят основные
                маршруты.
              </p>
              <span>
                <img
                  src="./imgs/last-news/calendar.svg"
                  alt="calendar-icon"
                  loading="lazy"
                />
                11:31 / 15.05.2020
              </span>
            </div>
          </div>
          <div class="card">
            <div class="card__img">
              <img
                src="./imgs/last-news/photo-2.png"
                alt="sardoba"
                loading="lazy"
              />
            </div>
            <div class="card__content">
              <h3>
                Мирзиёев: «Нам следовало бы принять некоторые правила карантина
                как часть повседневной жизни»
              </h3>
              <p>
                Президент Узбекистана заявил, что после того, как угроза
                коронавируса исчезнет, в стране следовало бы принять некоторые
                правила периода карантина как часть своей повседневной жизни.
              </p>
              <span>
                <img
                  src="./imgs/last-news/calendar.svg"
                  alt="calendar-icon"
                  loading="lazy"
                />
                11:31 / 15.05.2020
              </span>
            </div>
          </div>
          <div class="card">
            <div class="card__img">
              <img
                src="./imgs/last-news/photo-1.png"
                alt="sardoba"
                loading="lazy"
              />
            </div>
            <div class="card__content">
              <h3>
                По факту прорыва Сардобинского водохранилища возбуждено
                уголовное дело
              </h3>
              <p>
                После прорыва дамбы Сардобинского водохранилища возбуждено
                уголовное дело, сообщили в пресс-службе Генпрокуратуры
                Узбекистана.
              </p>
              <span>
                <img
                  src="./imgs/last-news/calendar.svg"
                  alt="calendar-icon"
                  loading="lazy"
                />
                11:31 / 15.05.2020
              </span>
            </div>
          </div>
        </div>
        <div class="lastnew-left">
          <div class="lastnews-box">
            <h1>Cамые популярные новости</h1>
            <div class="boxs">
              <div class="box">
                <p>
                  По факту прорыва Сардобинского водохранилища возбуждено
                  уголовное дело
                </p>
                <span>11:31 / 15.05.2020 </span>
              </div>
              <div class="box">
                <p>
                  По факту прорыва Сардобинского водохранилища возбуждено
                  уголовное дело
                </p>
                <span>11:31 / 15.05.2020 </span>
              </div>
              <div class="box">
                <p>
                  По факту прорыва Сардобинского водохранилища возбуждено
                  уголовное дело
                </p>
                <span>11:31 / 15.05.2020 </span>
              </div>
              <div class="box">
                <p>
                  По факту прорыва Сардобинского водохранилища возбуждено
                  уголовное дело
                </p>
                <span>11:31 / 15.05.2020 </span>
              </div>
            </div>
          </div>
          <img src="./imgs/last-news/ucell.png" alt="ucell" loading="lazy" />
        </div>
        <button class="lastnews-btn">Больше новостей</button>
      </div>
    </div>
      `);
    });
  }

  if (articleLink) {
    articleLink.addEventListener("click", function () {
      renderContent(`
 <div class="container">
      <div class="lastnews">
        <div class="article">
          <div class="article-title">
            <h1>Шавкат Мирзиёев строго предупредил хокимов всех уровней</h1>
            <span
              ><img
                src="./imgs/last-news/calendar.svg"
                alt="calendar-icon"
                loading="lazy"
              />
              11:31 / 15.05.2020</span
            >
          </div>
          <div class="article-img">
            <img
              src="./imgs/article-page/prezident.png"
              alt="prezident"
              loading="lazy"
            />
          </div>
          <div class="article-content">
            <h2>
              19 мая состоялось видеоселекторное совещание, посвященное
              дополнительным мерам поддержки предпринимательства.
            </h2>
            <p>
              По данным пресс-службы главы государства, из-за пандемии в
              Узбекистане число бедных и безработных увеличится, а доходы семей
              уменьшатся. На совещании обсуждены дополнительные меры и
              приоритетные задачи в этом направлении.
            </p>
            <p>
              Прежде всего, серьезное внимание уделено обеспечению гарантий прав
              предпринимателей и неприкосновенности их имущества.
            </p>
            <h2>
              «Предупреждаю всех хокимов. Если имущество хоть одного
              предпринимателя будет изъято незаконно, хоким одной лишь отставкой
              не отделается, но и ответит перед законом», - подчеркнул Шавкат
              Мирзиёев.
            </h2>
            <p>
              Компетентным ведомствам даны указания усилить ответственность за
              нарушение неприкосновенности собственности, обеспечить полноценное
              исполнение решений суда о компенсации имущества предпринимателей.
            </p>
            <p>
              Согласно поручению президента деловая активность в каждом районе и
              городе будет анализироваться на ежемесячной основе.
            </p>
            <p>
              Бизнес-омбудсман будет вносить правительству информацию о хокимах
              районов и городов, которые допускают нарушения прав и
              неприкосновенности собственности предпринимателей.
            </p>
            <p>
              Кабинетом Министров будет рассматриваться вопрос о соответствии
              должности хокимов городов и районов, которые не решают проблемы
              предпринимателей и не работают с ними в достаточной мере.
            </p>
            <div>
              <span>#хоким</span> <span>#Шавкат Мирзиёев</span>
              <span>#пандемия</span>
            </div>
          </div>
        </div>
        <div class="lastnew-left">
          <div class="lastnews-box">
            <h1>Cамые популярные новости</h1>
            <div class="boxs">
              <div class="box">
                <p>
                  По факту прорыва Сардобинского водохранилища возбуждено
                  уголовное дело
                </p>
                <span>11:31 / 15.05.2020 </span>
              </div>
              <div class="box">
                <p>
                  По факту прорыва Сардобинского водохранилища возбуждено
                  уголовное дело
                </p>
                <span>11:31 / 15.05.2020 </span>
              </div>
              <div class="box">
                <p>
                  По факту прорыва Сардобинского водохранилища возбуждено
                  уголовное дело
                </p>
                <span>11:31 / 15.05.2020 </span>
              </div>
              <div class="box">
                <p>
                  По факту прорыва Сардобинского водохранилища возбуждено
                  уголовное дело
                </p>
                <span>11:31 / 15.05.2020 </span>
              </div>
            </div>
          </div>
          <img src="./imgs/last-news/ucell.png" alt="ucell" loading="lazy" />
        </div>
      </div>
      <div class="news">
        <div class="card">
          <div class="card_img">
            <img
              src="./imgs/news/prezident.jpg"
              alt="prezident"
              loading="lazy"
            />
          </div>
          <div class="card_content">
            <p>
              Мирзиёев рассказал, зачем было построено Сардобинское
              водохранилище
            </p>
            <span> 05:28 / 16.05.2020 </span>
          </div>
        </div>
        <div class="card">
          <div class="card_img">
            <img
              src="./imgs/news/karantin.jpg"
              alt="prezident"
              loading="lazy"
            />
          </div>
          <div class="card_content">
            <p>Карантин в Узбекистане продлен до 1 июня</p>
            <span>05:28 / 16.05.2020</span>
          </div>
        </div>
        <div class="card">
          <div class="card_img">
            <img src="./imgs/news/sardoba.jpg" alt="prezident" loading="lazy" />
          </div>
          <div class="card_content">
            <p>Обмелевшая Сардоба: стихия или человеческий фактор?</p>
            <span> 05:28 / 16.05.2020 </span>
          </div>
        </div>
      </div>
    </div>
articale page
      `);
    });
  }

  if (contactLink) {
    contactLink.addEventListener("click", function () {
      renderContent(`
       <div class="container">
      <h2 class="contact-title">Напишите нам</h2>

      <div class="contact">
        <div class="contact-inputs">
          <input type="text" placeholder="Имя" />
          <input type="email" placeholder="Электронная почта" />
          <input type="number" placeholder="Номер телефона" />
          <input type="text" placeholder="Тема" />
          <textarea
            type="text"
            placeholder="Текст"
            cols="75"
            rows="20"
          ></textarea>
          <div class="file-pin">
            <input type="text" placeholder="Прикрепить файл" />
            <img
              src="./imgs/contact/file-icon.svg"
              alt="file-icon"
              loading="lazy"
            />
          </div>
          <input type="text" placeholder="Код" id="kod" />
          <button>Отправить</button>
        </div>
        <div class="contact-card">
          <h3>NAMANGANLIKLAR24</h3>
          <div class="contact-cards">
            <div class="content">
              <p>Электронная почта</p>
              <p>Социальные сети</p>
              <p>Телеграм канал</p>
              <p>Мобильная приложение</p>
            </div>
            <div class="icons">
              <p>info@namanganliklar24.uz</p>
              <div>
                <img
                  src="./imgs/contact/facebook.svg"
                  alt="facebook-icon"
                  loading="lazy"
                />
                <img
                  src="./imgs/contact/twitter.svg"
                  alt="twitter"
                  loading="lazy"
                />
                <img
                  src="./imgs/contact/odnoklasnik.svg"
                  alt="odnoklasnik"
                  loading="lazy"
                />
              </div>
              <a href="https://t.me/namanganliklar">
                <button>
                  <img
                    src="./imgs/contact/telegram.svg"
                    alt="telegram-icon"
                    loading="lazy"
                  />
                  Подписатся
                </button>
              </a>
              <div>
                <img
                  src="./imgs/contact/googlePlay.svg"
                  alt="googlePlay"
                  loading="lazy"
                />
                <img
                  src="./imgs/contact/appleStore.svg"
                  alt="appstore"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      `);
    });
  }

  // Toggle navigation menu
  const menuIcon = document.getElementById("menuIcon");
  if (menuIcon) {
    menuIcon.onclick = function () {
      var navList = document.getElementById("navList");
      navList.style.display =
        navList.style.display === "flex" ? "none" : "flex";
    };
  }

  // Modal functionality
  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("closeBtn")[0];

  if (span) {
    span.onclick = function () {
      modal.style.display = "none";
    };
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  window.onload = function () {
    modal.style.display = "block";
  };

  // Notification functionality
  const notificationLink = document.getElementById("notification-link");
  if (notificationLink) {
    notificationLink.addEventListener("click", function (event) {
      event.preventDefault();

      if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
        return;
      }

      if (Notification.permission === "granted") {
        new Notification("Notifications are already enabled!");
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
          if (permission === "granted") {
            new Notification("Notifications have been enabled!");
          }
        });
      }
    });
  }

  // Call default page rendering function
  renderDefaultPage();
});

// Call default page rendering function outside of DOMContentLoaded
renderDefaultPage();
