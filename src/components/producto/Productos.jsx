import React from 'react';
import CardProducto from './CardProducto';

const Productos = () => {
    return (
        <section className='grillaProductos'>
            <CardProducto imagen="https://www.serargentino.com/public/images/2020/05/pollo-al-champi%C3%B1%C3%B3n-773x458.jpeg" nombre="Pollo al Champiñon" descripcion="Jugosos trozos de pollo salteados con champiñones frescos en una deliciosa salsa cremosa." categoria="Restaurant"/>
            <CardProducto imagen="https://www.recetasnestle.com.ar/sites/default/files/srh_recipes/876038bcd1cf5abcaa28e86d9705eaf6.jpg" nombre="Paella Española" descripcion="Auténtica paella española, deliciosos crustaceos acompañados con un sofrito de arroz y verduras." categoria="Parrilla"/>
 
        </section>
    );
};

export default Productos;