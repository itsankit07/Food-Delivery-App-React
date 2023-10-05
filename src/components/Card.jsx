const Card = (props) =>{
     
    const {resData} = props;
    const {info:{name,cloudinaryImageId,costForTwo,avgRating,cuisines,sla:{deliveryTime}}} = resData;

    return (
    <div className = "card m-4 p-4 bg-slate-100" data-testid = "resCard">
     <img src = {`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}>

     </img>
     <h3 className="font-bold">{name}</h3>
     <p>{avgRating} Stars</p>
     <p>{cuisines.slice(0,3).join(",")}</p>
     <p className="text-sm">ETA: {deliveryTime} Mins</p>
    </div>
    )   
}

// Higher Order Components

// input -> card -> Card Promoted

export const withPromotedLabel = () =>{
    return (props) =>{
        return(
            <div>
                <label className="label">Promoted</label>
                <Card {...props}/>
            </div>

        )
    }
}

// ...props due to props is passed in the parent function and higher order function are pure functions


export default Card;