import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
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
    ProductQuanttyArea,
    ProductQtIcon,
    ProductQtText
} from './styled';

export default () => {
    const dispach = useDispatch();
    const products = useSelector(state => state.cart.products);

    const [show, setShow] = useState(true);

    const handleCartClick = () => {
        setShow(!show);
    }

    const handleProductChange = (key, type) =>{      
        dispach({
            type:'CHANGE_PRODUCT',
            payload:{
                key, type
            }
        });
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
                            <ProductQtIcon 
                                src="/assets/minus.png"
                                onClick={()=>handleProductChange(index, '-')}
                            />
                            <ProductQtText>{item.qt}</ProductQtText>
                            <ProductQtIcon 
                                src="/assets/plus.png"
                                onClick={()=>handleProductChange(index, '+')}
                            />
                        </ProductQuanttyArea>
                    </ProductItem>    
                    ))}                                    
                </ProductsArea>
            </CartBody>
        </CartArea>
    );
}