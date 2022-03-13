let count=0
let save_el=document.getElementById("save-el")
function increment()
{
    ++count
    document.getElementById("count").innerText=count
}
let last=""
function save()
{
    let temp = " " + count + " -"
    if(count!=0)
    {
    save_el.textContent+=temp
    last=temp
    }
    count=0
    document.getElementById("count").innerText=count
}

