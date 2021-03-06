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
    amount:      string;
    status:      string;
    product_id:  string;
    user_id:     string;
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


export interface VentasCompletas {
    sales: VentaCompleta[];
}

export interface VentaCompleta {
    id:             number;
    producto:       string;
    usuario:        string;
    mount:          string;
    estatus:        string;
    fecha_creacion: Date;
}
export interface Inventario {
    productos: ProductoInventario[];
}

export interface ProductoInventario {
    nombre:      string;
    descripcion: string;
    precio:      string;
    stock:       number;
}


export interface Factura {
    facturas: FacturaElement[];
}

export interface FacturaElement {
    nro_bill:    number;
    sale_id:     number;
    bill_amount: string;
    created_at:  Date;
    status:      string;
    name:        string;
    producto:        string;
}
export interface FacturaReporte {
    folio:    number;
    monto: string;
    fecha:  Date;
    estado:      string;
    vendedor:        string;
    producto:        string;
}
export interface TicketReporte {
    boleta:    number;
    monto: string;
    fecha:  Date;
    estado:      string;
    vendedor:        string;
    producto:        string;
}

export interface Ticket {
    ticket: TicketElement[];
}

export interface TicketElement {
    nro_ticket:    number;
    sale_id:       number;
    ticket_amount: string;
    created_at:    Date;
    status:        string;
    name:          string;
    producto:          string;
}
export interface VentasGrafico {
    ventas: VentaGrafico[];
}

export interface VentaGrafico {
    total: number;
    fecha: string;
}
export interface Token{
    ok: boolean;
    token: string;
}