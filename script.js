function getList()
{
     var cardContainer=document.getElementById('cardContainer');
     const skillList=['Angular','Dotnet','SQL','Typescript','Javascript','C#']
     skillList.forEach(item=>{
        const col=document.createElement('div');
        col.className='col mt-2 mb-2';
        const card=document.createElement('div');
        card.className='card';
        const cardHeader=document.createElement('div');
        cardHeader.className='card-header text-center';
        cardHeader.textContent=item;
        card.appendChild(cardHeader);
        col.appendChild(card);
        cardContainer.appendChild(col);
        card.addEventListener('click',()=>
            {
                if(item=='Angular')
                {
                    window.location.href='angular.html';
                }
            })
     })
}
document.addEventListener('DOMContentLoaded', getList);
