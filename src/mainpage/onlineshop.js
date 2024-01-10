import React from 'react';
import './onlineshop.css';
import AppNavBar from './navbar';
import titleimage from '../assets/media/img.png'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import cart from '../assets/media/cart2.svg'
import Shop1 from '../assets/media/sample_shop_images/sample_shop_1.png'
import Shop2 from '../assets/media/sample_shop_images/sample_shop_2.png'
import Shop3 from '../assets/media/sample_shop_images/sample_shop_3.png'
import Shop4 from '../assets/media/sample_shop_images/sample_shop_4.png'
import Shop5 from '../assets/media/sample_shop_images/sample_shop_5.png'
import Shop6 from '../assets/media/sample_shop_images/sample_shop_6.png'
import Shop7 from '../assets/media/sample_shop_images/sample_shop_7.png'
import Spaghetti from '../assets/media/sample_shop_images/Spaghetti.png'
import Flour from '../assets/media/sample_shop_images/Flour.png'
import Can from '../assets/media/sample_shop_images/Can.png'
import Info_pic from '../assets/media/sample_shop_images/sample_info_image.png'
import Pin from '../assets/media/geo-alt.svg'

const shops = [
    {
        name: "Shop 1",
        picture: Shop1,
        address: "123 Main St"
    },
    {
        name: "Shop 2",
        picture: Shop2,
        address: "456 Elm St"
    },
    {
        name: "Shop 3",
        picture: Shop3,
        address: "456 Elm St"
    },
    {
        name: "Shop 4",
        picture: Shop4,
        address: "456 Elm St"
    },
    {
        name: "Shop 5",
        picture: Shop5,
        address: "456 Elm St"
    },
    {
        name: "Shop 6",
        picture: Shop6,
        address: "456 Elm St"
    },
    {
        name: "Shop 7",
        picture: Shop7,
        address: "456 Elm St"
    },
];
const products =[
    {
        name: "Spaghetti",
        picture: Spaghetti,
        exp_date: "22.11.2024",
    },
    {
        name: "Flour",
        picture: Flour,
        exp_date: "22.11.2024",
    },
    {
        name: "Orange Juice",
        picture: Can,
        exp_date: "22.11.2024",
    },
    {
        name: "Flour",
        picture: Flour,
        exp_date: "22.11.2024",
    },
    {
        name: "Spaghetti",
        picture: Spaghetti,
        exp_date: "22.11.2024",
    },
    {
        name: "Flour",
        picture: Flour,
        exp_date: "22.11.2024",
    },
    {
        name: "Orange Juice",
        picture: Can,
        exp_date: "22.11.2024",
    },
    {
        name: "Flour",
        picture: Flour,
        exp_date: "22.11.2024",
    },
]

function OnlineShop() {
    return (
        <div className={"main-page"}>
            <AppNavBar></AppNavBar>
            <div>
                <img src={titleimage} alt={"icon"} className={"intro-image"}/>
            </div>
        <div>
            <div className="list-title">It's too good to go</div>
                <ul className="shop-list">
                    {shops.map((shop, index) => (
                        <li key={index}>
                            <Card className="list-item">
                                <Card.Body>
                                    <img src={shop.picture} className="card-img-top" alt={shop.name} />
                                    <div className="list-item-title">{shop.name}</div>
                                    <div className="list-item-address text-muted">
                                        <img src={Pin} alt="Location Pin"/>
                                        <div className="address-text">
                                            {shop.address}
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </li>
                    ))}
                </ul>
            <div className='info-box'>
                <Card style={{ width: '95vw', borderRadius: '15px'}}>
                    <Card.Body>
                        <div className="info-card">
                            <img src={Info_pic} className="info-card-image" height={300} width={600} alt="info-card"/>
                            <div className="info-card-text">
                                <div className="info-card-header">
                                    Information
                                </div>
                                <div>
                                    Lorem ipsum dolor sit amet,
                                    consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                    et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                </div>
                                <div className="information-link">
                                    <p href="/information">Read More </p>
                                </div>

                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className="product-list">
                <Row className="g-4">
                    {products.map((product, idx) => (
                        <Col key={idx} xs={12} sm={6} md={4} lg={2}>
                            <Card className="product-card">
                                <Card.Body>
                                    <img src={product.picture} className="card-img-top" alt={product.picture} />
                                    <div className="list-item-title">{product.name}</div>
                                    <div className="product-subheadline">
                                        <div className="list-item-address">
                                            ED: {product.exp_date}
                                        </div>
                                        <img src={cart} alt={"icon"} height={20} width={20}/>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

        </div>
        </div>
    )
}

export default OnlineShop;
