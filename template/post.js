import * as helper from "./helpers.js"
// const params; // tempat menampung parameter yang ada

const elPageTitle = document.querySelector('#page-title');
const elDetailBerita = document.querySelector('#detail-berita');
const elLoading = document.querySelector('#loading');
const elNotFound = document.querySelector('#not-found');
const elCardImg = document.querySelector('.card-img-top');
const elCardText = document.querySelector('.card-text');
const elCardAuthorImg = document.querySelector('#author-img');
const elCardAuthorName = document.querySelector('#author-name');
const elCardAuthorEmail = document.querySelector('#author-email');
const elListGroup = document.querySelector('#list-group');

const createListElement = (comment) => {
  const elListItem = document.createElement('div');
  const elListItemContainer = document.createElement('div');
  const elListItemTitle = document.createElement('div');
  const elListItemText = document.createElement('span');

  elListItem.classList.add('list-group-item');
  elListItemContainer.classList.add('ms-2', 'me-auto');
  elListItemTitle.classList.add('fw-bold');

  elListItemTitle.innerHTML = comment.email;
  elListItemText.innerHTML = comment.body;

  elListItemContainer.appendChild(elListItemTitle);
  elListItemContainer.appendChild(elListItemText);
  elListItem.appendChild(elListItemContainer);

  return elListItem;
};

const renderPost = async () => {
    // EDIT HERE
    try {
        let getPost = await(helper.getPost());

        elCardImg.src = await(helper.getRandomPic());
        elCardAuthorImg.src = await(helper.getRandomProfile());
        elPageTitle.innerText = getPost.detail.title;
        elCardText.innerText = getPost.detail.body;
        elCardAuthorName.innerText = getPost.author.name;
        elCardAuthorEmail.innerText = getPost.author.email;
        
        let commendList = await(getPost.commentList);

        console.log(getPost.detail);
        for(let i=0; i<commendList.length; i++){
          const newCommend = createListElement(commendList[i]);
          elListGroup.appendChild(newCommend);
        }
        
        elLoading.classList.add("d-none");
        elDetailBerita.classList.remove("d-none");
    } 
    
    catch (error) {
        elLoading.classList.add("d-none");
        elNotFound.classList.remove("d-none");

        console.log('post', error);
        throw error;
    }
};

renderPost();
