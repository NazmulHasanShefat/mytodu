let input_fuld = document.querySelector(".input_list");
let submit_btn = document.querySelector(".submit_btn");
let list_container = document.querySelector(".list_container");


submit_btn.addEventListener("click",()=>{
    let input_value = input_fuld.value;
    if(input_value < 1){
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
        const appendAlert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
        }
        appendAlert('please input your list name!', 'danger')
    }
    else{
        let list = document.createElement("li");
        list.classList.add("list-group-item");
        list.classList.add("my_list");
        list.classList.add("d-flex");
        list.classList.add("justify-content-between");
        list.classList.add("align-items-center");
        list .innerHTML = `
        <p class="text">${input_value}</p>
        <button type="button" class="btn-close" aria-label="Close"></button>
        `
        list_container.appendChild(list);
        save_data();
    }
})

list_container.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save_data();
    }
    else if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        save_data();
    }
})

function save_data(){
    localStorage.setItem("data", list_container.innerHTML);
}
function gofunction(){
    list_container.innerHTML = localStorage.getItem("data");
}
gofunction();