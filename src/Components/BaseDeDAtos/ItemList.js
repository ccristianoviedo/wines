import rutiniMalbec from '../Assets/img/rutinimalbec.jpg'
import rutiniMalbec1 from '../Assets/img/rutiniMalbec1.jpeg'
import trumpeter from '../Assets/img/trumpeter.jpeg'
import portillo from '../Assets/img/portillo.jpeg'
import zucardi from '../Assets/img/zucardi.jpg'
import zucardi1 from '../Assets/img/zucardi1.jpg'
import luigi from '../Assets/img/luigi1.jpeg'
import luigi2 from '../Assets/img/luigi2.webp'
import estancia from '../Assets/img/estancia.jpeg'

const PRODUCTOS=[
    {
        id:0,
        img: rutiniMalbec,
        name:'RUTINI',
        price:3400, 
        descripcion:'Dominio Malbec',
        stock:3
    },
    {
        id:1,
        img: trumpeter,
        name:'Trumpeter',
        price:2300, 
        descripcion:'Malbec',
        stock:5
    },
    {
        id:2,
        img: portillo,
        name:'PORTILLO',
        price:3200, 
        descripcion:'Malbec',
        stock:8
    },
    {
        id:3,
        img: rutiniMalbec1,
        name:'RUTINI MALBEC',
        price:5400, 
        descripcion:'Dominio Malbec',
        stock:0
    },
    {
        id:4,
        img: luigi,
        name:'LUIGI BOSCA',
        price:5400, 
        descripcion:'Malbec',
        stock:3
    },
    {
        id:5,
        img: luigi2,
        name:'LUIGI BOSCA CHANDONNAY',
        price:4300, 
        descripcion:'CHANDONNAY',
        stock:3
    },
    {
        id:6,
        img: estancia,
        name:'ESTANCIA MENDOZA',
        price:1500, 
        descripcion:'MALBEC',
        stock:3
    },
    {
        id:7,
        img: zucardi,
        name:'ZUCARDI',
        price:3400, 
        descripcion:'Malbec',
        stock:3
    },
    {
        id:8,
        img: zucardi1,
        name:'ZUCARDI',
        price:3800, 
        descripcion:'Malbec',
        stock:9
    },
]    
export function getProductos () {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(PRODUCTOS)
        },2000)
    })
}