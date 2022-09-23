let ratingData = [
    {restaurant: 'KFC', rating:5}, {restaurant: 'Burger King', rating:4}, {restaurant: 'KFC', rating:3}, {restaurant: 'Domino', rating:2}, {restaurant: 'Subway', rating:3}, {restaurant: 'Domino', rating:1}, {restaurant: 'Subway', rating:4}, {restaurant: 'Pizza Hut', rating:5}
];


let keyAvgFunc = (k)=>{
    let sum=0;
    let count=0;
    ratingData.forEach((item)=>{
        if(item.restaurant===k){
            sum+=item.rating;
            count++;
        }
    });
    return sum/count;
}

function includesResto(resto,ans){
    let ans1=false;
    ans.forEach((item)=>{
        if(item.restaurant===resto){
            ans1=true;
        }
    });
    return ans1;
}

let avgRatingFun=(data)=>{
    var ans=[];
    data.forEach((item)=>{
        if(!includesResto(item.restaurant,ans)){
            let key=item.restaurant;
            let avg=keyAvgFunc(key);
            ans.push({restaurant:key,avgRating:avg});
        }
    });
    return ans;
}


//a. Calculate the Average rating for all the restaurants.
ans=avgRatingFun(ratingData);
console.log(ans);



//b. Calculate the Average rating for all the restaurants.
var ans2=ans.filter((item)=>{
    return item.avgRating>=4;
});

console.log(ans2);