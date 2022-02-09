import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import { 
    CartArea,
    CartHeader,
    CartIcon,
    CartText,
    CartBody,
    ProductsArea,
    ProductItem,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductQuanttyArea
} from './styled';

export default () => {
    const products = useSelector(state => state.cart.products);

    const [show, setShow] = useState(true);

    const handleCartClick = () => {
        setShow(!show);
    }

    return (
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src="/assets/cart.png" />
                <CartText>Meu Carrinho ({products.length})</CartText>
                {show &&
                    <CartIcon src="/assets/down.png" />
                }
                
            </CartHeader>
            <CartBody show={show}>
                <ProductsArea>
                    {products.map((item, index)=>(
                        <ProductItem key={index}>
                        <ProductPhoto src={item.image} />
                        <ProductInfoArea>
                            <ProductName>{item.name}</ProductName>
                            <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
                        </ProductInfoArea>
                        <ProductQuanttyArea>

                        </ProductQuanttyArea>
                    </ProductItem>    
                    ))}                                    
                </ProductsArea>
            </CartBody>
        </CartArea>
    );
}