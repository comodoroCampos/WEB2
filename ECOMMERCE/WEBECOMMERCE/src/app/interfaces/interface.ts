export interface Productos {
    productos: Producto[];
}

export interface Producto {
    _id?:         string;
    nombre:      string;
    precio:      number;
    descripcion: string;
    categoria:   string;
    imagen:      string[];
    codigo:      string;
}

export interface ProductosDuoc {
    productos: ProductoDuoc[];
}

export interface ProductoDuoc {
    id:          number;
    name:        string;
    slug:        string;
    description: string;
    price:       string;
    created_at:  Date;
    updated_at:  Date;
    quantity:    number;
}

export interface Sales {
    sales: Sale[];
}

export interface Sale {
    id:          number;
    amount:      number;
    status:      string;
    product_id:  number;
    user_id:     number;
    created_at:  Date;
    updated_at:  Date;
}

export interface ReporteProductosDuoc{
    name:        string;
    price:       string;
    quantity:    number;
    description: string;    
}

export interface ReporteSales{
    amount:      number;
    status:      string;
    product_id:  number;
    user_id:     number;
    created_at:  Date;
    updated_at:  Date;  
}

export interface Respuesta {
    ok: boolean;
    mensaje: string;
}

export interface Ventas {
    venta: Venta[];
}

export interface Venta {
    _id:      string;
    cantidad: number;
    producto: string;
    fecha:    Date;
    tipo:     string;
    usuario:  string;

}
export interface ReporteVentas{
    cantidad: number;
    producto: string;
    fecha:    string;
    tipo:     string;
    usuario:  string;
}

