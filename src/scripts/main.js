'use strict';

const body = document.querySelector('body');

const firstPromise = new Promise((resolve, reject) => {
  function z() {
    resolve('First promise was resolved');
    // console.log('jj');
  }

  if (document) {
    document.addEventListener('click', z, { once: true });

    setTimeout(() => {
      // console.log('rej');
      document.removeEventListener('click', z);
      reject(new Error('First promise was rejected'));
    }, 3000);
  }
});

firstPromise
  .then((a) => {
    const firstPromiseDiv = document.createElement('div');

    firstPromiseDiv.setAttribute('data-qa', 'notification');

    firstPromiseDiv.classList.add('success');
    firstPromiseDiv.innerHTML = a;
    body.appendChild(firstPromiseDiv);
    // console.log(a);
  })
  .catch((y) => {
    // console.log(y);
    const firstPromiseDiv = document.createElement('div');

    firstPromiseDiv.setAttribute('data-qa', 'notification');
    firstPromiseDiv.classList.add('error');
    firstPromiseDiv.innerHTML = y;
    body.appendChild(firstPromiseDiv);
  });

// console.log(firstPromise.Promise.PromiseState);

const secondPromise = new Promise((resolve, reject) => {
  document.addEventListener(
    'contextmenu',
    (e) => {
      // console.log('rightClick');
      // console.log(e);
      e.preventDefault();
      resolve('Second promise was resolved');
    },
    { once: true },
  );
});

secondPromise.then((d) => {
  const secondPromiseDiv = document.createElement('div');

  secondPromiseDiv.setAttribute('data-qa', 'notification');

  secondPromiseDiv.classList.add('success');
  secondPromiseDiv.innerHTML = d;
  body.appendChild(secondPromiseDiv);
  // console.log(d);
});

// console.log(secondPromise);

Promise.all([firstPromise, secondPromise])
  .then((results) => {
    const thirdPromiseDiv = document.createElement('div');

    thirdPromiseDiv.setAttribute('data-qa', 'notification');

    thirdPromiseDiv.classList.add('success');
    thirdPromiseDiv.innerHTML = 'Third promise was resolved';
    body.appendChild(thirdPromiseDiv);
    // console.log('Оба промиса выполнены:', results);
  })
  .catch(() => {
    const thirdPromiseDiv = document.createElement('div');

    thirdPromiseDiv.setAttribute('data-qa', 'notification');
    thirdPromiseDiv.classList.add('error');
    thirdPromiseDiv.innerHTML = y;
    body.appendChild(thirdPromiseDiv);
  });
