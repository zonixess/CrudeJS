var btnTable = document.getElementById('btnTable');


var id = document.getElementById('txt-id');
var Name = document.getElementById('txt-name');
var qty = document.getElementById('txt-qty');
var price = document.getElementById('txt-price');
var total = document.getElementById('txt-total');
var Alltotal=0;
var index="";

var Add = document.getElementById('btnAdd');
var Update = document.getElementById('btnUpdate');

const data= [
    {
        'id' : '1',
        'name' : 'coca',
        'qty' : '4',
        'price' : '2000',
        'total' : '8000'
    },
];
id.value = data.length+1;
getData=()=>{
    var txt ='';
    txt+=`
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>QTY</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
        </tr>
    `;
    
    for(let i in data){
        txt+=`
        <tr>
            <td>${data[i]['id']}</td>
            <td>${data[i]['name']}</td>
            <td>${data[i]['qty']}</td>
            <td>${data[i]['price']}</td>
            <td>${data[i]['total']}</td>
            <td>
                <input type="button" value="Edit" id="btnEdite" class="btn btnEdite bg-danger text-light">
                <input type="button" value="Delete" id="btnDelete" class="btn bg-primary text-light">
            </td>
        </tr>
        `;
        Alltotal += parseFloat(data[i]['total']);
    }
    var trTable='';
    trTable=`
        <tr>
            <td colspan="4" align="right">Total</td>
            <td>${Alltotal}</td>
        </tr>
    `;
    
    btnTable.innerHTML=txt + trTable;
    var btnEdit = document.querySelectorAll("#btnEdite");
    btnEdit.forEach((e,i)=>{
        e.addEventListener('click',function(){
            id.value=data[i]['id'],
            Name.value=data[i]['name'],
            qty.value=data[i]['qty'],
            price.value=data[i]['price'],
            total.value=data[i]['total'],
            index= i;
            Add.style.display="none";
            Update.style.display="block";
        })
    })

    document.getElementById('btnUpdate').addEventListener('click',function(){
        data[index]['name']=Name.value;
        data[index]['qty']=qty.value;
        data[index]['price']=price.value;
        data[index]['total']=total.value;
        getData();
        clearData();
        Add.style.display="block";
        Update.style.display="none";
    })

    var Delete = document.querySelectorAll('#btnDelete');
    Delete.forEach((e,i)=>{
        e.addEventListener('click',function(){
            data.splice(0,1);
            getData();
        })
    })

}

getData();


document.getElementById('btnAdd').addEventListener('click',function(){
    data.push(
        {
            'id' : id.value,
            'name' : Name.value,
            'qty' : qty.value,
            'price' : price.value,
            'total' : total.value,
        },
    );
    

    getData();
    clearData();
    id.value = data.length+1;
});

clearData=()=>{
    id.value="";
    Name.value="";
    qty.value="";
    price.value="";
    total.value="";
};

//compute total 
getTotal=()=>{
    total.value=qty.value*price.value
}
//send qty and price to total for compute
qty.addEventListener('keyup',function(){
    getTotal();
});
price.addEventListener('keyup',function(){
    getTotal();
})