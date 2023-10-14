import fs from 'fs';
import Image from 'next/image';
import React from 'react';
const jsonString = fs.readFileSync('cardsInfo.json', 'utf-8');
const CardData = JSON.parse(jsonString);


function CardComponent({ CardNo }: { CardNo: number }) {
    return ( 
        <div className="card"style={{ marginLeft:375 ,height:500}}>
            <Image src={CardData[CardNo].imageUrl} width={250} height={250} alt="Product" />
            <h2>{CardData[CardNo].title}</h2>
            <p>{CardData[CardNo].description}</p>
            <span>Price: ${CardData[CardNo].price}</span><br />
            <a href={CardData[CardNo].BuyUrl} className="btn">Buy Now !</a>
        </div>
    );
}


function Card() {
    return (
        <div className='cardsBG'>
            <CardComponent CardNo={0} />
            <CardComponent CardNo={1} />
            <CardComponent CardNo={2} />
            <CardComponent CardNo={3} />
            <CardComponent CardNo={4} />
            <CardComponent CardNo={5} />
        </div>
    );
}

export default Card;
