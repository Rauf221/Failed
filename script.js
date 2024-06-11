const BaseURL = "http://localhost:3001";


const getApiDataWithCallBack = async (endPoint, cb) => {
  let response = await fetch(`${BaseURL}/${endPoint}`).then((res) =>
    res.json()
  );
  cb(response);
};


document.querySelector("#add_card").addEventListener("click", () => {
  getApiDataWithCallBack('endpoint-to-fetch-item', (item) => {
    const cards = document.querySelector(".container");
    cards.innerHTML += `<div class="flex w-[25%] h-[350px] flex-col items-center rounded-xl shadow-2xl"> 
                         <div class="h-[95%] w-[100%] overflow-hidden border-none rounded-lg justify-center flex">
                            <img class="w-[95%] border-none rounded-lg" src=${item.image} alt="">
                         </div>
                         <div class="mt-1 text-2xl">
                          <h1>${item.name}</h1>
                         </div>
                         <div class="mb-2">
                          <p>${item.prof}</p>
                         </div>
                         </div>`;
  });
});


document.querySelector("#create_user")?.addEventListener("click", () => {
  const name = document.querySelector("#name").value;
  const image = document.querySelector("#image").value;
  const prof = document.querySelector("#prof").value;

  const newItem = {
    name,
    image,
    prof
  };

  
  fetch(`${BaseURL}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newItem)
  })
  .then(response => response.json())
  .then(data => {
   
    window.location.href = 'http://127.0.0.1:5501/index.html';
  });
});
