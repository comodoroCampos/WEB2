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

