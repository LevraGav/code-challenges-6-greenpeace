import * as helper from "./helper.js"

let idNum = 69;

const queryString = window.location.search;
if(queryString)
    idNum = queryString.substring(9);
console.log(idNum);

const params = await(helper.getPost(idNum));


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
    elCardAuthorName.href = "author.html?"+params.author.id;
    

    elListItemContainer.appendChild(elListItemTitle);
    elListItemContainer.appendChild(elListItemText);
    elListItem.appendChild(elListItemContainer);

    return elListItem;
};

const renderPost = async () => {
    // EDIT HERE 
    try {
        if(params.randomPic === undefined ||
            params.randomProfile === undefined||
            params.commentList === undefined||
            params.detail.title === undefined||
            params.author.name === undefined){
                throw("err");
            }

        elCardImg.src = params.randomPic;
        elCardAuthorImg.src = params.randomProfile;
    
        let commentList = params.commentList;

        for(let i=0; i<commentList.length;i++){
            const newComment = createListElement(commentList[i]);
            elListGroup.appendChild(newComment);
        }
        elPageTitle.innerText = params.detail.title;
        elCardText.innerText = params.detail.body;

        elCardAuthorName.innerText = params.author.name;
        elCardAuthorEmail.innerText = params.author.email;

        elLoading.classList.add("d-none");
        elDetailBerita.classList.remove("d-none");
    }
    catch{
        elLoading.classList.add("d-none");
        elNotFound.classList.remove("d-none");
        console.log('post', error);
        throw error;
    }
};
renderPost();